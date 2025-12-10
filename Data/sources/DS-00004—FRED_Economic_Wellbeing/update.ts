#!/usr/bin/env bun
/**
 * FRED Economic Wellbeing Data Source Updater
 * Source ID: DS-00004
 * API: https://api.stlouisfed.org/fred/
 * Update Frequency: Variable by series (weekly to annual)
 *
 * CRITICAL WELLBEING INDICATORS:
 * - Financial Stress (weekly)
 * - Unemployment/Underemployment (monthly)
 * - Consumer Sentiment (monthly)
 * - Debt Service & Delinquency (quarterly)
 * - Housing Affordability (weekly/monthly)
 * - Income Inequality (annual)
 */

import { appendFileSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

// Configuration
const CONFIG = {
  sourceId: 'DS-00004',
  sourceName: 'Federal Reserve Economic Data - Economic Wellbeing Indicators',
  apiEndpoint: 'https://api.stlouisfed.org/fred',
  apiKey: process.env.FRED_API_KEY || '',
  dataDir: './data',
  logFile: './update.log',
  sourceFile: './source.md',

  // Core Economic Wellbeing Indicators
  indicators: [
    {
      id: 'TDSP',
      name: 'Household Debt Service Ratio',
      description: 'Household Debt Service Payments as % of Disposable Personal Income',
      frequency: 'Quarterly',
    },
    {
      id: 'DRCCLACBS',
      name: 'Credit Card Delinquency Rate',
      description: 'Delinquency Rate on Credit Card Loans, All Commercial Banks',
      frequency: 'Quarterly',
    },
    {
      id: 'STLFSI4',
      name: 'Financial Stress Index',
      description: 'St. Louis Fed Financial Stress Index (weekly)',
      frequency: 'Weekly',
    },
    {
      id: 'LNS13327709',
      name: 'Total Underemployment (U-6)',
      description: 'Total Unemployed Plus Marginally Attached Plus Part Time for Economic Reasons',
      frequency: 'Monthly',
    },
    {
      id: 'UEMP27OV',
      name: 'Long-term Unemployed',
      description: 'Number of Civilians Unemployed for 27 Weeks and Over',
      frequency: 'Monthly',
    },
    {
      id: 'UMCSENT',
      name: 'Consumer Sentiment',
      description: 'University of Michigan Consumer Sentiment Index',
      frequency: 'Monthly',
    },
    {
      id: 'SIPOVGINIUSA',
      name: 'GINI Income Inequality Index',
      description: 'GINI Index for the United States',
      frequency: 'Annual',
    },
    {
      id: 'MORTGAGE30US',
      name: '30-Year Mortgage Rate',
      description: '30-Year Fixed Rate Mortgage Average',
      frequency: 'Weekly',
    },
    {
      id: 'MSPUS',
      name: 'Median Home Sales Price',
      description: 'Median Sales Price of Houses Sold for the United States',
      frequency: 'Quarterly',
    },
    {
      id: 'PSAVERT',
      name: 'Personal Saving Rate',
      description: 'Personal Saving Rate',
      frequency: 'Monthly',
    },
  ],

  // Rate limiting: 120 requests/minute = ~500ms between requests
  requestDelayMs: 500,
  maxRetries: 3,
};

// Types
interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  message: string;
}

interface FREDObservation {
  date: string;
  value: string;
  realtime_start: string;
  realtime_end: string;
}

interface FREDSeriesResponse {
  realtime_start: string;
  realtime_end: string;
  observation_start: string;
  observation_end: string;
  units: string;
  output_type: number;
  file_type: string;
  order_by: string;
  sort_order: string;
  count: number;
  offset: number;
  limit: number;
  observations: FREDObservation[];
}

interface IndicatorConfig {
  id: string;
  name: string;
  description: string;
  frequency: string;
}

interface IndicatorData {
  seriesId: string;
  seriesName: string;
  description: string;
  frequency: string;
  observations: FREDObservation[];
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

// Fetch series observations from FRED API with retry logic
async function fetchSeriesObservations(
  seriesId: string,
  indicatorConfig: IndicatorConfig,
  retryCount = 0
): Promise<IndicatorData> {
  try {
    log('INFO', `Fetching series: ${seriesId} (${indicatorConfig.name})`);

    if (!CONFIG.apiKey) {
      throw new Error('FRED_API_KEY environment variable not set');
    }

    // Construct API URL for series observations
    const url = new URL(`${CONFIG.apiEndpoint}/series/observations`);
    url.searchParams.set('series_id', seriesId);
    url.searchParams.set('api_key', CONFIG.apiKey);
    url.searchParams.set('file_type', 'json');

    const response = await fetch(url.toString());

    if (!response.ok) {
      if (response.status === 429 && retryCount < CONFIG.maxRetries) {
        // Rate limit hit - wait and retry with exponential backoff
        const waitTime = 60000 * Math.pow(2, retryCount); // 60s, 120s, 240s
        log('WARNING', `Rate limit hit for ${seriesId}. Retrying in ${waitTime / 1000}s (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
        await sleep(waitTime);
        return fetchSeriesObservations(seriesId, indicatorConfig, retryCount + 1);
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data: FREDSeriesResponse = await response.json();

    if (!data.observations || data.observations.length === 0) {
      log('WARNING', `No observations returned for ${seriesId}`);
    } else {
      log('INFO', `Successfully fetched ${data.observations.length} observations for ${seriesId}`);
    }

    return {
      seriesId,
      seriesName: indicatorConfig.name,
      description: indicatorConfig.description,
      frequency: indicatorConfig.frequency,
      observations: data.observations || [],
    };

  } catch (error) {
    const errorMsg = `Failed to fetch ${seriesId}: ${error instanceof Error ? error.message : String(error)}`;
    log('ERROR', errorMsg);

    if (retryCount < CONFIG.maxRetries) {
      const waitTime = 5000 * Math.pow(2, retryCount); // 5s, 10s, 20s exponential backoff
      log('INFO', `Retrying ${seriesId} in ${waitTime / 1000}s (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
      await sleep(waitTime);
      return fetchSeriesObservations(seriesId, indicatorConfig, retryCount + 1);
    }

    throw new Error(errorMsg);
  }
}

// Transform API data to Substrate pipe-delimited format
function transformToSubstrateFormat(allData: IndicatorData[]): string {
  // Header
  const lines = ['RECORD ID | SERIES ID | SERIES NAME | DATE | VALUE | FREQUENCY | DESCRIPTION'];
  lines.push('-'.repeat(120));

  // Data rows
  for (const indicator of allData) {
    for (const obs of indicator.observations) {
      // Skip observations with missing values (marked as "." by FRED)
      if (obs.value === '.' || obs.value === '') {
        continue;
      }

      const recordId = `DS-00004-${indicator.seriesId}-${obs.date}`;
      const seriesId = indicator.seriesId;
      const seriesName = indicator.seriesName;
      const date = obs.date;
      const value = obs.value;
      const frequency = indicator.frequency;
      const description = indicator.description;

      lines.push(`${recordId} | ${seriesId} | ${seriesName} | ${date} | ${value} | ${frequency} | ${description}`);
    }
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

    // Update Last Access Test in Review Log
    sourceContent = sourceContent.replace(
      /\*\*Last Access Test:\*\* \d{4}-\d{2}-\d{2}( \(API tested successfully\))?/g,
      `**Last Access Test:** ${timestamp.split('T')[0]} (API tested successfully)`
    );

    writeFileSync(CONFIG.sourceFile, sourceContent);
    log('INFO', 'Updated source.md metadata');

  } catch (error) {
    log('ERROR', `Failed to update source.md: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Main update function
async function updateFREDData(): Promise<UpdateSummary> {
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
    // Check API key
    if (!CONFIG.apiKey) {
      throw new Error('FRED_API_KEY environment variable not set. Get your free API key at: https://fred.stlouisfed.org/docs/api/api_key.html');
    }

    // Check API availability
    log('INFO', 'Checking API availability...');
    const healthCheck = await fetch(`${CONFIG.apiEndpoint}/series?series_id=GNPCA&api_key=${CONFIG.apiKey}&file_type=json`);
    if (!healthCheck.ok) {
      throw new Error(`API endpoint unreachable or invalid API key: ${CONFIG.apiEndpoint}`);
    }
    log('INFO', 'API is available and API key is valid');

    // Fetch all indicators
    const allData: IndicatorData[] = [];

    for (const indicator of CONFIG.indicators) {
      try {
        const indicatorData = await fetchSeriesObservations(indicator.id, indicator);
        allData.push(indicatorData);
        summary.indicatorsFetched++;
        summary.recordsProcessed += indicatorData.observations.length;

        // Rate limiting: 120 requests/minute = ~500ms between requests
        await sleep(CONFIG.requestDelayMs);

      } catch (error) {
        const errorMsg = `Failed to fetch ${indicator.id}: ${error instanceof Error ? error.message : String(error)}`;
        summary.errors.push(errorMsg);
        log('ERROR', errorMsg);
        // Continue with other indicators
      }
    }

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
      summary.errors.forEach(err => log('ERROR', `  - ${err}`));
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
  updateFREDData()
    .then(summary => {
      process.exit(summary.success ? 0 : 1);
    })
    .catch(error => {
      log('ERROR', `Unhandled error: ${error}`);
      process.exit(1);
    });
}

export { updateFREDData, CONFIG as FRED_CONFIG };
