#!/usr/bin/env bun
/**
 * WHO Global Health Observatory Data Source Updater
 * Source ID: DS-00001
 * API: https://ghoapi.azureedge.net/api/
 * Update Frequency: Quarterly
 */

import { appendFileSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

// Configuration
const CONFIG = {
  sourceId: 'DS-00001',
  sourceName: 'World Health Organization Global Health Observatory',
  apiEndpoint: 'https://ghoapi.azureedge.net/api',
  dataDir: './data',
  logFile: './update.log',
  sourceFile: './source.md',

  // Indicators to fetch (sample - full list has 2000+)
  indicators: [
    'WHOSIS_000001', // Life expectancy at birth
    'WHOSIS_000015', // Infant mortality rate
    'MDG_0000000001', // Under-5 mortality rate
    'HEALTHEXP_PER_CAPITA_US_DOLLAR', // Health expenditure per capita
  ],

  // Rate limiting
  requestDelayMs: 500,
  maxRetries: 3,
};

// Types
interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  message: string;
}

interface IndicatorData {
  IndicatorCode: string;
  SpatialDim: string;
  TimeDim: string;
  Value: string;
  [key: string]: any;
}

interface UpdateSummary {
  success: boolean;
  timestamp: string;
  indicatorsFetched: number;
  recordsProcessed: number;
  errors: string[];
}

// Logging utility
function log(level: LogEntry['level'], message: string): void {
  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] ${level}: ${message}\n`;

  console.log(logLine.trim());
  appendFileSync(CONFIG.logFile, logLine);
}

// Sleep utility for rate limiting
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch data from WHO API with retry logic
async function fetchIndicatorData(indicatorCode: string, retryCount = 0): Promise<IndicatorData[]> {
  try {
    log('INFO', `Fetching indicator: ${indicatorCode}`);

    const url = `${CONFIG.apiEndpoint}/${indicatorCode}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 429 && retryCount < CONFIG.maxRetries) {
        log('WARNING', `Rate limit hit for ${indicatorCode}. Retrying in 60s (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
        await sleep(60000);
        return fetchIndicatorData(indicatorCode, retryCount + 1);
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    log('INFO', `Successfully fetched ${data.value?.length || 0} records for ${indicatorCode}`);

    return data.value || [];

  } catch (error) {
    const errorMsg = `Failed to fetch ${indicatorCode}: ${error instanceof Error ? error.message : String(error)}`;
    log('ERROR', errorMsg);

    if (retryCount < CONFIG.maxRetries) {
      log('INFO', `Retrying ${indicatorCode} (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
      await sleep(5000 * (retryCount + 1)); // Exponential backoff
      return fetchIndicatorData(indicatorCode, retryCount + 1);
    }

    throw new Error(errorMsg);
  }
}

// Transform API data to Substrate pipe-delimited format
function transformToSubstrateFormat(data: IndicatorData[]): string {
  // Header
  const lines = ['RECORD ID | REGION | INDICATOR | YEAR | VALUE | UNIT'];
  lines.push('-'.repeat(80));

  // Data rows
  for (const record of data) {
    const recordId = `DS-00001-${record.IndicatorCode}-${record.SpatialDim}-${record.TimeDim}`;
    const region = record.SpatialDim || 'Unknown';
    const indicator = record.IndicatorCode || 'Unknown';
    const year = record.TimeDim || 'Unknown';
    const value = record.Value || 'N/A';
    const unit = record.Dim1 || 'Unit not specified';

    lines.push(`${recordId} | ${region} | ${indicator} | ${year} | ${value} | ${unit}`);
  }

  return lines.join('\n');
}

// Update source.md metadata fields
function updateSourceMetadata(summary: UpdateSummary): void {
  try {
    let sourceContent = readFileSync(CONFIG.sourceFile, 'utf-8');

    const timestamp = summary.timestamp;

    // Update Last Updated field
    sourceContent = sourceContent.replace(
      /\*\*Last Updated:\*\* \d{4}-\d{2}-\d{2}/g,
      `**Last Updated:** ${timestamp.split('T')[0]}`
    );

    // Update Record Created if not present
    if (!sourceContent.includes('**Record Created:**')) {
      sourceContent = sourceContent.replace(
        /^## Bibliographic Information/m,
        `**Record Created:** ${timestamp.split('T')[0]}\n\n## Bibliographic Information`
      );
    }

    // Update Last Access Test in Review Log
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

// Main update function
async function updateWHOData(): Promise<UpdateSummary> {
  const startTime = new Date();
  log('INFO', '=== Update Started ===');
  log('INFO', `Source: ${CONFIG.sourceName}`);
  log('INFO', `Source ID: ${CONFIG.sourceId}`);

  const summary: UpdateSummary = {
    success: false,
    timestamp: startTime.toISOString(),
    indicatorsFetched: 0,
    recordsProcessed: 0,
    errors: [],
  };

  try {
    // Check API availability
    log('INFO', 'Checking API availability...');
    const healthCheck = await fetch(CONFIG.apiEndpoint);
    if (!healthCheck.ok) {
      throw new Error(`API endpoint unreachable: ${CONFIG.apiEndpoint}`);
    }
    log('INFO', 'API is available');

    // Fetch all indicators
    const allData: IndicatorData[] = [];

    for (const indicatorCode of CONFIG.indicators) {
      try {
        const indicatorData = await fetchIndicatorData(indicatorCode);
        allData.push(...indicatorData);
        summary.indicatorsFetched++;

        // Rate limiting
        await sleep(CONFIG.requestDelayMs);

      } catch (error) {
        const errorMsg = `Failed to fetch ${indicatorCode}: ${error instanceof Error ? error.message : String(error)}`;
        summary.errors.push(errorMsg);
        log('ERROR', errorMsg);
        // Continue with other indicators
      }
    }

    summary.recordsProcessed = allData.length;

    // Save raw JSON
    const rawJsonPath = join(CONFIG.dataDir, 'latest.json');
    writeFileSync(rawJsonPath, JSON.stringify(allData, null, 2));
    log('INFO', `Saved raw data to ${rawJsonPath}`);

    // Transform and save pipe-delimited format
    const transformedData = transformToSubstrateFormat(allData);
    const transformedPath = join(CONFIG.dataDir, 'latest.txt');
    writeFileSync(transformedPath, transformedData);
    log('INFO', `Saved transformed data to ${transformedPath}`);

    // Update source.md metadata
    updateSourceMetadata(summary);

    summary.success = summary.errors.length === 0;

    // Log summary
    log('INFO', '=== Update Summary ===');
    log('INFO', `Timestamp: ${summary.timestamp}`);
    log('INFO', `Indicators Fetched: ${summary.indicatorsFetched}/${CONFIG.indicators.length}`);
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

// Execute if run directly
if (import.meta.main) {
  updateWHOData()
    .then(summary => {
      process.exit(summary.success ? 0 : 1);
    })
    .catch(error => {
      log('ERROR', `Unhandled error: ${error}`);
      process.exit(1);
    });
}

export { updateWHOData, CONFIG as WHO_CONFIG };
