#!/usr/bin/env bun
/**
 * UN SDG Indicators Data Source Updater
 * Source ID: DS-00002
 * API: https://unstats.un.org/sdgapi/v1/
 * Update Frequency: Biannual
 */

import { appendFileSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

// Configuration
const CONFIG = {
  sourceId: 'DS-00002',
  sourceName: 'UN Sustainable Development Goals Indicators Database',
  apiEndpoint: 'https://unstats.un.org/sdgapi/v1',
  dataDir: './data',
  logFile: './update.log',
  sourceFile: './source.md',

  // SDG Goals to fetch (sample - can expand to all 17)
  goals: [1, 3, 4, 5, 13, 16], // Poverty, Health, Education, Gender, Climate, Peace

  // Sample indicators per goal
  indicators: {
    1: ['1.1.1', '1.2.1', '1.3.1'], // Poverty indicators
    3: ['3.1.1', '3.2.1', '3.3.1'], // Health indicators
    4: ['4.1.1', '4.2.1', '4.3.1'], // Education indicators
    5: ['5.1.1', '5.2.1', '5.5.1'], // Gender indicators
    13: ['13.1.1', '13.2.1', '13.3.1'], // Climate indicators
    16: ['16.1.1', '16.2.1', '16.6.2'], // Peace/justice indicators
  },

  requestDelayMs: 500,
  maxRetries: 3,
};

interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  message: string;
}

interface SDGData {
  goal: string;
  target: string;
  indicator: string;
  seriesDescription: string;
  geoAreaCode: string;
  geoAreaName: string;
  timePeriodStart: string;
  value: string;
  [key: string]: any;
}

interface UpdateSummary {
  success: boolean;
  timestamp: string;
  goalsFetched: number;
  recordsProcessed: number;
  errors: string[];
}

function log(level: LogEntry['level'], message: string): void {
  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] ${level}: ${message}\n`;
  console.log(logLine.trim());
  appendFileSync(CONFIG.logFile, logLine);
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchSDGData(goal: number, indicator: string, retryCount = 0): Promise<SDGData[]> {
  try {
    log('INFO', `Fetching SDG ${goal}.${indicator}`);

    // UN SDG API endpoint for specific indicator
    const url = `${CONFIG.apiEndpoint}/sdg/Indicator/Data?indicator=${goal}.${indicator}&pageSize=1000`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 429 && retryCount < CONFIG.maxRetries) {
        log('WARNING', `Rate limit hit for SDG ${goal}.${indicator}. Retrying in 60s`);
        await sleep(60000);
        return fetchSDGData(goal, indicator, retryCount + 1);
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const records = data.data || [];
    log('INFO', `Successfully fetched ${records.length} records for SDG ${goal}.${indicator}`);

    return records;

  } catch (error) {
    const errorMsg = `Failed to fetch SDG ${goal}.${indicator}: ${error instanceof Error ? error.message : String(error)}`;
    log('ERROR', errorMsg);

    if (retryCount < CONFIG.maxRetries) {
      log('INFO', `Retrying SDG ${goal}.${indicator} (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
      await sleep(5000 * (retryCount + 1));
      return fetchSDGData(goal, indicator, retryCount + 1);
    }

    throw new Error(errorMsg);
  }
}

function transformToSubstrateFormat(data: SDGData[]): string {
  const lines = ['RECORD ID | REGION | SDG INDICATOR | YEAR | VALUE | DESCRIPTION'];
  lines.push('-'.repeat(120));

  for (const record of data) {
    const recordId = `DS-00002-${record.goal}-${record.target}-${record.indicator}-${record.geoAreaCode}-${record.timePeriodStart}`;
    const region = record.geoAreaName || 'Unknown';
    const indicator = `SDG ${record.goal}.${record.target}.${record.indicator}` || 'Unknown';
    const year = record.timePeriodStart || 'Unknown';
    const value = record.value || 'N/A';
    const description = (record.seriesDescription || 'No description').replace(/\|/g, '/');

    lines.push(`${recordId} | ${region} | ${indicator} | ${year} | ${value} | ${description}`);
  }

  return lines.join('\n');
}

function updateSourceMetadata(summary: UpdateSummary): void {
  try {
    let sourceContent = readFileSync(CONFIG.sourceFile, 'utf-8');
    const timestamp = summary.timestamp;

    sourceContent = sourceContent.replace(
      /\*\*Last Updated:\*\* \d{4}-\d{2}-\d{2}/g,
      `**Last Updated:** ${timestamp.split('T')[0]}`
    );

    sourceContent = sourceContent.replace(
      /\*\*Last Access Test:\*\* \d{4}-\d{2}-\d{2}/g,
      `**Last Access Test:** ${timestamp.split('T')[0]} (API tested successfully)`
    );

    writeFileSync(CONFIG.sourceFile, sourceContent);
    log('INFO', 'Updated source.md metadata');

  } catch (error) {
    log('ERROR', `Failed to update source.md: ${error instanceof Error ? error.message : String(error)}`);
  }
}

async function updateSDGData(): Promise<UpdateSummary> {
  const startTime = new Date();
  log('INFO', '=== Update Started ===');
  log('INFO', `Source: ${CONFIG.sourceName}`);
  log('INFO', `Source ID: ${CONFIG.sourceId}`);

  const summary: UpdateSummary = {
    success: false,
    timestamp: startTime.toISOString(),
    goalsFetched: 0,
    recordsProcessed: 0,
    errors: [],
  };

  try {
    log('INFO', 'Checking API availability...');
    const healthCheck = await fetch(`${CONFIG.apiEndpoint}/sdg/Goal/List`);
    if (!healthCheck.ok) {
      throw new Error(`API endpoint unreachable: ${CONFIG.apiEndpoint}`);
    }
    log('INFO', 'API is available');

    const allData: SDGData[] = [];

    for (const goal of CONFIG.goals) {
      const indicators = CONFIG.indicators[goal as keyof typeof CONFIG.indicators] || [];

      for (const indicator of indicators) {
        try {
          const sdgData = await fetchSDGData(goal, indicator);
          allData.push(...sdgData);

          await sleep(CONFIG.requestDelayMs);

        } catch (error) {
          const errorMsg = `Failed to fetch SDG ${goal}.${indicator}: ${error instanceof Error ? error.message : String(error)}`;
          summary.errors.push(errorMsg);
          log('ERROR', errorMsg);
        }
      }

      summary.goalsFetched++;
    }

    summary.recordsProcessed = allData.length;

    // Save raw JSON
    const rawJsonPath = join(CONFIG.dataDir, 'latest.json');
    writeFileSync(rawJsonPath, JSON.stringify(allData, null, 2));
    log('INFO', `Saved raw data to ${rawJsonPath}`);

    // Transform and save
    const transformedData = transformToSubstrateFormat(allData);
    const transformedPath = join(CONFIG.dataDir, 'latest.txt');
    writeFileSync(transformedPath, transformedData);
    log('INFO', `Saved transformed data to ${transformedPath}`);

    updateSourceMetadata(summary);

    summary.success = summary.errors.length === 0;

    log('INFO', '=== Update Summary ===');
    log('INFO', `Timestamp: ${summary.timestamp}`);
    log('INFO', `Goals Fetched: ${summary.goalsFetched}/${CONFIG.goals.length}`);
    log('INFO', `Records Processed: ${summary.recordsProcessed}`);
    log('INFO', `Errors: ${summary.errors.length}`);

    if (summary.errors.length > 0) {
      log('WARNING', `Update completed with ${summary.errors.length} error(s)`);
    } else {
      log('INFO', '=== Update Completed Successfully ===');
    }

    return summary;

  } catch (error) {
    const errorMsg = `Fatal error during update: ${error instanceof Error ? error.message : String(error)}`;
    log('ERROR', errorMsg);
    summary.errors.push(errorMsg);
    summary.success = false;
    return summary;
  }
}

if (import.meta.main) {
  updateSDGData()
    .then(summary => {
      process.exit(summary.success ? 0 : 1);
    })
    .catch(error => {
      log('ERROR', `Unhandled error: ${error}`);
      process.exit(1);
    });
}

export { updateSDGData, CONFIG as SDG_CONFIG };
