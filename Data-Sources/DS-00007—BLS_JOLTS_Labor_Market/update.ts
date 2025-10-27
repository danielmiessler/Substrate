#!/usr/bin/env bun
/**
 * BLS JOLTS Labor Market Data Source Updater
 * Source ID: DS-00007
 * API: https://api.bls.gov/publicAPI/v2/timeseries/data/
 * Update Frequency: Monthly (~6 week lag, published around 10th of month+2)
 *
 * PERMISSION TO QUIT INDEX - Critical Worker Wellbeing Indicator
 *
 * JOLTS Quit Rate reveals worker agency and economic confidence traditional metrics miss:
 * - People only quit when they have options and confidence
 * - High quit rate = worker empowerment, job dissatisfaction resolution, economic confidence
 * - Low quit rate during expansion = trapped workers, hidden desperation
 * - Leading indicator of wage growth (quits force employers to raise wages)
 *
 * CRITICAL JOLTS INDICATORS (Wellbeing Focus):
 * 1. JTS00000000QUR - Quit Rate (MOST IMPORTANT - "Permission to Quit Index")
 * 2. JTS00000000JOR - Job Openings Rate (opportunity availability)
 * 3. JTS00000000HIR - Hire Rate (labor market dynamism)
 * 4. JTS00000000LDR - Layoff/Discharge Rate (economic insecurity)
 * 5. JTS00000000TSR - Total Separations Rate (overall churn)
 */

import { appendFileSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

// Configuration
const CONFIG = {
  sourceId: 'DS-00007',
  sourceName: 'BLS Job Openings and Labor Turnover Survey - Labor Market Health & Purpose Indicators',
  apiEndpoint: 'https://api.bls.gov/publicAPI/v2/timeseries/data/',
  apiKey: process.env.BLS_API_KEY || '', // Optional but recommended (25/day unregistered, 500/day registered)
  dataDir: './data',
  logFile: './update.log',
  sourceFile: './source.md',

  // Core JOLTS Wellbeing Indicators
  indicators: [
    {
      id: 'JTS00000000QUR',
      name: 'Quit Rate (Permission to Quit Index)',
      description: 'Quits: Total nonfarm, seasonally adjusted - Worker-initiated separations per 100 employees',
      frequency: 'Monthly',
      priority: 1, // MOST CRITICAL for wellbeing
      interpretation: 'High quit rate = worker agency, confidence, empowerment. Low quit rate = trapped workers, hidden desperation.',
    },
    {
      id: 'JTS00000000JOR',
      name: 'Job Openings Rate',
      description: 'Job openings: Total nonfarm, seasonally adjusted - Open positions per 100 employees',
      frequency: 'Monthly',
      priority: 2,
      interpretation: 'High openings = worker leverage, opportunity availability, easier transitions.',
    },
    {
      id: 'JTS00000000HIR',
      name: 'Hire Rate',
      description: 'Hires: Total nonfarm, seasonally adjusted - New hires per 100 employees',
      frequency: 'Monthly',
      priority: 3,
      interpretation: 'High hire rate = labor market dynamism, economic vitality, worker mobility.',
    },
    {
      id: 'JTS00000000LDR',
      name: 'Layoff and Discharge Rate',
      description: 'Layoffs and discharges: Total nonfarm, seasonally adjusted - Employer-initiated involuntary separations per 100 employees',
      frequency: 'Monthly',
      priority: 4,
      interpretation: 'High layoff rate = economic insecurity, worker precarity, recession risk.',
    },
    {
      id: 'JTS00000000TSR',
      name: 'Total Separations Rate',
      description: 'Total separations: Total nonfarm, seasonally adjusted - All separations (quits + layoffs + other) per 100 employees',
      frequency: 'Monthly',
      priority: 5,
      interpretation: 'Total labor market churn; sum of voluntary and involuntary separations.',
    },
  ],

  // Rate limits: Unregistered = 25/day, Registered = 500/day
  // Conservative delay to avoid rate limits
  requestDelayMs: 1000, // 1 second between requests
  maxRetries: 3,

  // BLS API v2 parameters
  yearsPerRequest: 20, // Registered users can fetch 20 years per request (unregistered: 10)
  catalog: true, // Include series metadata in response
  calculations: false, // Don't include BLS-calculated changes
  annualaverage: false, // Don't include annual averages
};

// Types
interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  message: string;
}

interface BLSDataPoint {
  year: string;
  period: string;
  periodName: string;
  value: string;
  footnotes: Array<{ code: string; text: string }>;
}

interface BLSCatalog {
  series_title?: string;
  series_id?: string;
  seasonally_adjusted?: string;
  seasonally_adjusted_short?: string;
  survey_name?: string;
  survey_abbreviation?: string;
  measure_data_type?: string;
  dataelement?: string;
  industry?: string;
  region?: string;
  state?: string;
}

interface BLSSeries {
  seriesID: string;
  catalog?: BLSCatalog;
  data: BLSDataPoint[];
}

interface BLSAPIRequest {
  seriesid: string[];
  startyear: string;
  endyear: string;
  catalog?: boolean;
  calculations?: boolean;
  annualaverage?: boolean;
  registrationkey?: string;
}

interface BLSAPIResponse {
  status: string;
  responseTime: number;
  message: string[];
  Results: {
    series: BLSSeries[];
  };
}

interface IndicatorConfig {
  id: string;
  name: string;
  description: string;
  frequency: string;
  priority: number;
  interpretation: string;
}

interface IndicatorData {
  seriesId: string;
  seriesName: string;
  description: string;
  frequency: string;
  priority: number;
  interpretation: string;
  catalog?: BLSCatalog;
  observations: BLSDataPoint[];
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

// Fetch JOLTS series from BLS API v2 with retry logic
async function fetchJOLTSSeries(
  seriesIds: string[],
  indicatorConfigs: IndicatorConfig[],
  retryCount = 0
): Promise<IndicatorData[]> {
  try {
    log('INFO', `Fetching ${seriesIds.length} series from BLS API v2`);

    // Determine years to fetch (20 years for registered, 10 for unregistered)
    const currentYear = new Date().getFullYear();
    const yearsToFetch = CONFIG.apiKey ? 20 : 10;
    const startYear = currentYear - yearsToFetch + 1;
    const endYear = currentYear;

    // Construct API request body (POST request)
    const requestBody: BLSAPIRequest = {
      seriesid: seriesIds,
      startyear: startYear.toString(),
      endyear: endYear.toString(),
      catalog: CONFIG.catalog,
      calculations: CONFIG.calculations,
      annualaverage: CONFIG.annualaverage,
    };

    // Add API key if available (increases rate limits)
    if (CONFIG.apiKey) {
      requestBody.registrationkey = CONFIG.apiKey;
    } else {
      log('WARNING', 'BLS_API_KEY not set. Using unregistered limits (25 requests/day, 10 years). Register free API key at: https://data.bls.gov/registrationEngine/');
    }

    log('INFO', `Requesting data for years ${startYear}-${endYear} (${yearsToFetch} years)`);

    // Make POST request to BLS API v2
    const response = await fetch(CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      if (response.status === 429 && retryCount < CONFIG.maxRetries) {
        // Rate limit hit - wait and retry with exponential backoff
        const waitTime = 60000 * Math.pow(2, retryCount); // 60s, 120s, 240s
        log('WARNING', `Rate limit hit (HTTP 429). Retrying in ${waitTime / 1000}s (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
        await sleep(waitTime);
        return fetchJOLTSSeries(seriesIds, indicatorConfigs, retryCount + 1);
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const apiResponse: BLSAPIResponse = await response.json();

    // Check BLS API status
    if (apiResponse.status !== 'REQUEST_SUCCEEDED') {
      throw new Error(`BLS API error: ${apiResponse.status} - ${apiResponse.message.join(', ')}`);
    }

    log('INFO', `BLS API request succeeded. Response time: ${apiResponse.responseTime}ms`);

    // Process series data
    const allIndicatorData: IndicatorData[] = [];

    for (const series of apiResponse.Results.series) {
      const config = indicatorConfigs.find(c => c.id === series.seriesID);
      if (!config) {
        log('WARNING', `Series ${series.seriesID} returned but not in config`);
        continue;
      }

      if (!series.data || series.data.length === 0) {
        log('WARNING', `No data returned for ${series.seriesID}`);
        continue;
      }

      log('INFO', `Successfully fetched ${series.data.length} observations for ${series.seriesID} (${config.name})`);

      allIndicatorData.push({
        seriesId: series.seriesID,
        seriesName: config.name,
        description: config.description,
        frequency: config.frequency,
        priority: config.priority,
        interpretation: config.interpretation,
        catalog: series.catalog,
        observations: series.data,
      });
    }

    return allIndicatorData;

  } catch (error) {
    const errorMsg = `Failed to fetch JOLTS series: ${error instanceof Error ? error.message : String(error)}`;
    log('ERROR', errorMsg);

    if (retryCount < CONFIG.maxRetries) {
      const waitTime = 5000 * Math.pow(2, retryCount); // 5s, 10s, 20s exponential backoff
      log('INFO', `Retrying in ${waitTime / 1000}s (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
      await sleep(waitTime);
      return fetchJOLTSSeries(seriesIds, indicatorConfigs, retryCount + 1);
    }

    throw new Error(errorMsg);
  }
}

// Transform API data to Substrate pipe-delimited format
function transformToSubstrateFormat(allData: IndicatorData[]): string {
  // Header
  const lines = ['RECORD ID | SERIES ID | SERIES NAME | DATE | PERIOD NAME | VALUE | FREQUENCY | PRIORITY | INTERPRETATION | DESCRIPTION'];
  lines.push('-'.repeat(200));

  // Sort by priority (quit rate first)
  const sortedData = [...allData].sort((a, b) => a.priority - b.priority);

  // Data rows
  for (const indicator of sortedData) {
    // Sort observations by date (most recent first)
    const sortedObs = [...indicator.observations].sort((a, b) => {
      const dateA = `${a.year}-${a.period}`;
      const dateB = `${b.year}-${b.period}`;
      return dateB.localeCompare(dateA);
    });

    for (const obs of sortedObs) {
      // Skip observations with missing values (BLS uses "." for missing)
      if (obs.value === '.' || obs.value === '' || obs.value === '-') {
        continue;
      }

      // Parse period (M01 = January, M02 = February, etc.)
      const periodCode = obs.period;
      const year = obs.year;
      const dateStr = `${year}-${periodCode}`; // e.g., "2025-M09"

      const recordId = `DS-00007-${indicator.seriesId}-${dateStr}`;
      const seriesId = indicator.seriesId;
      const seriesName = indicator.seriesName;
      const date = dateStr;
      const periodName = obs.periodName;
      const value = obs.value;
      const frequency = indicator.frequency;
      const priority = indicator.priority;
      const interpretation = indicator.interpretation;
      const description = indicator.description;

      lines.push(`${recordId} | ${seriesId} | ${seriesName} | ${date} | ${periodName} | ${value} | ${frequency} | ${priority} | ${interpretation} | ${description}`);
    }
  }

  return lines.join('\n');
}

// Generate Permission to Quit Index summary (quit rate analysis)
function generatePermissionToQuitSummary(allData: IndicatorData[]): string {
  const quitData = allData.find(d => d.seriesId === 'JTS00000000QUR');
  if (!quitData || quitData.observations.length === 0) {
    return 'Permission to Quit Index data not available.\n';
  }

  // Sort by date (most recent first)
  const sortedObs = [...quitData.observations].sort((a, b) => {
    const dateA = `${a.year}-${a.period}`;
    const dateB = `${b.year}-${b.period}`;
    return dateB.localeCompare(dateA);
  });

  const latest = sortedObs[0];
  const previousMonth = sortedObs[1];
  const yearAgo = sortedObs.find(obs =>
    obs.year === (parseInt(latest.year) - 1).toString() &&
    obs.period === latest.period
  );

  const latestValue = parseFloat(latest.value);
  const previousValue = previousMonth ? parseFloat(previousMonth.value) : null;
  const yearAgoValue = yearAgo ? parseFloat(yearAgo.value) : null;

  let summary = '\n=== PERMISSION TO QUIT INDEX (Worker Agency Indicator) ===\n\n';
  summary += `Latest Quit Rate: ${latestValue}% (${latest.periodName} ${latest.year})\n`;

  if (previousValue !== null) {
    const monthChange = latestValue - previousValue;
    const monthDirection = monthChange > 0 ? 'UP' : monthChange < 0 ? 'DOWN' : 'FLAT';
    summary += `Month-over-Month: ${monthDirection} ${Math.abs(monthChange).toFixed(2)} percentage points\n`;
  }

  if (yearAgoValue !== null) {
    const yearChange = latestValue - yearAgoValue;
    const yearDirection = yearChange > 0 ? 'UP' : yearChange < 0 ? 'DOWN' : 'FLAT';
    summary += `Year-over-Year: ${yearDirection} ${Math.abs(yearChange).toFixed(2)} percentage points\n`;
  }

  summary += '\nINTERPRETATION:\n';
  if (latestValue >= 2.5) {
    summary += '✅ HIGH worker agency - People feel confident quitting, have options, empowered to leave bad jobs.\n';
  } else if (latestValue >= 2.0) {
    summary += '⚠️ MODERATE worker agency - Some confidence, but many may feel trapped in unsatisfying jobs.\n';
  } else {
    summary += '❌ LOW worker agency - Workers feel trapped, lack confidence or options to quit even bad jobs. Hidden desperation.\n';
  }

  summary += '\nWHY QUIT RATE MATTERS:\n';
  summary += '- People only quit when they have options and confidence in finding better opportunities\n';
  summary += '- Low quit rate during economic expansion = trapped workers (hidden economic distress)\n';
  summary += '- High quit rate = worker empowerment, job dissatisfaction resolution, wage growth pressure\n';
  summary += '- Leading indicator of wage increases (quits force employers to raise wages to retain/attract workers)\n';
  summary += '\n';

  return summary;
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
      /\*\*Last Access Test:\*\* Not yet tested.*$/gm,
      `**Last Access Test:** ${timestamp.split('T')[0]} (API tested successfully)`
    );

    writeFileSync(CONFIG.sourceFile, sourceContent);
    log('INFO', 'Updated source.md metadata');

  } catch (error) {
    log('ERROR', `Failed to update source.md: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Main update function
async function updateJOLTSData(): Promise<UpdateSummary> {
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
    // Check API availability with a simple test request
    log('INFO', 'Checking BLS API availability...');
    const healthCheck = await fetch(CONFIG.apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        seriesid: ['JTS00000000QUR'],
        startyear: '2024',
        endyear: '2024',
      }),
    });

    if (!healthCheck.ok) {
      throw new Error(`API endpoint unreachable: ${CONFIG.apiEndpoint} (HTTP ${healthCheck.status})`);
    }

    const healthResponse: BLSAPIResponse = await healthCheck.json();
    if (healthResponse.status !== 'REQUEST_SUCCEEDED') {
      throw new Error(`BLS API not responding correctly: ${healthResponse.status}`);
    }

    log('INFO', 'BLS API is available and responding');

    // Fetch all JOLTS indicators (BLS API v2 allows up to 50 series per request)
    const seriesIds = CONFIG.indicators.map(i => i.id);
    const allData = await fetchJOLTSSeries(seriesIds, CONFIG.indicators);

    summary.indicatorsFetched = allData.length;
    summary.recordsProcessed = allData.reduce((sum, ind) => sum + ind.observations.length, 0);

    log('INFO', `Fetched ${summary.indicatorsFetched} indicators with ${summary.recordsProcessed} total observations`);

    // Save raw JSON
    const rawJsonPath = join(CONFIG.dataDir, 'latest.json');
    writeFileSync(rawJsonPath, JSON.stringify(allData, null, 2));
    log('INFO', `Saved raw data to ${rawJsonPath}`);

    // Transform and save pipe-delimited format
    const transformedData = transformToSubstrateFormat(allData);
    const transformedPath = join(CONFIG.dataDir, 'latest.txt');
    writeFileSync(transformedPath, transformedData);
    log('INFO', `Saved transformed data to ${transformedPath}`);

    // Generate and save Permission to Quit Index summary
    const permissionToQuitSummary = generatePermissionToQuitSummary(allData);
    const summaryPath = join(CONFIG.dataDir, 'permission-to-quit-index.txt');
    writeFileSync(summaryPath, permissionToQuitSummary);
    log('INFO', `Saved Permission to Quit Index summary to ${summaryPath}`);
    console.log(permissionToQuitSummary); // Also print to console

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
  updateJOLTSData()
    .then(summary => {
      process.exit(summary.success ? 0 : 1);
    })
    .catch(error => {
      log('ERROR', `Unhandled error: ${error}`);
      process.exit(1);
    });
}

export { updateJOLTSData, CONFIG as JOLTS_CONFIG };
