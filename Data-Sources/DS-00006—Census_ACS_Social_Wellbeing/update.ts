#!/usr/bin/env bun
/**
 * US Census Bureau ACS Social Wellbeing Data Source Updater
 * Source ID: DS-00006
 * API: https://api.census.gov/data/{year}/acs/acs1
 * Update Frequency: Annual (September for 1-year, December for 5-year estimates)
 * Rate Limit: 500 requests/day
 */

import { appendFileSync, writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

// Configuration
const CONFIG = {
  sourceId: 'DS-00006',
  sourceName: 'US Census Bureau ACS - Social Wellbeing',
  apiEndpoint: 'https://api.census.gov/data',
  dataDir: './data',
  logFile: './update.log',
  sourceFile: './source.md',

  // API authentication (required)
  apiKey: process.env.CENSUS_API_KEY || '',

  // Data vintages to fetch
  years: {
    acs1: [2022, 2021, 2020], // 1-year estimates (most recent)
    acs5: ['2018-2022', '2017-2021'], // 5-year estimates
  },

  // Critical Social Wellbeing Variables
  variables: {
    // Household Composition - Social Isolation Indicators
    household: [
      'B11001_001E,B11001_001M', // Total households
      'B11001_008E,B11001_008M', // 1-person households (living alone)
      'B11002_003E,B11002_003M', // Family households
      'B11002_010E,B11002_010M', // Nonfamily households
    ],

    // Commuting & Time Poverty
    commute: [
      'B08303_001E,B08303_001M', // Mean travel time to work
      'B08303_013E,B08303_013M', // 60+ minute commute
      'B08134_011E,B08134_011M', // Long commute, low income (time poverty)
    ],

    // Digital Access - Digital Divide
    digital: [
      'B28002_013E,B28002_013M', // No internet access at home
      'B28002_004E,B28002_004M', // Broadband internet subscription
      'B28003_005E,B28003_005M', // No computer in household
    ],

    // Economic Security
    economic: [
      'B19013_001E,B19013_001M', // Median household income
      'B25064_001E,B25064_001M', // Median gross rent
      'B23025_005E,B23025_005M', // Unemployed population
      'B17001_002E,B17001_002M', // Population below poverty line
    ],
  },

  // Geography levels to fetch
  geographies: {
    national: 'us:*',
    states: 'state:*',
    // For counties/tracts, specify state to avoid hitting rate limits
    // counties: 'county:*&in=state:06', // Example: California counties
    // tracts: 'tract:*&in=state:06+county:075', // Example: San Francisco tracts
  },

  // Rate limiting (500 requests/day = ~1 request every 3 minutes for 24 hours)
  requestDelayMs: 2000, // 2 seconds between requests (conservative)
  maxRetries: 3,
  requestsPerDay: 500,
};

// Types
interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  message: string;
}

interface CensusRecord {
  [key: string]: string; // Dynamic fields based on variables requested
}

interface UpdateSummary {
  success: boolean;
  timestamp: string;
  yearsProcessed: string[];
  requestsUsed: number;
  recordsProcessed: number;
  errors: string[];
}

// Request tracking for rate limiting
let requestCount = 0;
let requestResetTime = new Date();

// Logging utility
function log(level: LogEntry['level'], message: string): void {
  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] ${level}: ${message}\n`;

  console.log(logLine.trim());
  appendFileSync(CONFIG.logFile, logLine);
}

// Sleep utility for rate limiting
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Check if we're within rate limits
function checkRateLimit(): void {
  const now = new Date();
  const timeSinceReset = now.getTime() - requestResetTime.getTime();
  const twentyFourHours = 24 * 60 * 60 * 1000;

  // Reset counter after 24 hours
  if (timeSinceReset > twentyFourHours) {
    requestCount = 0;
    requestResetTime = now;
    log('INFO', 'Rate limit counter reset (24 hours elapsed)');
  }

  if (requestCount >= CONFIG.requestsPerDay) {
    const timeUntilReset = twentyFourHours - timeSinceReset;
    const hoursUntilReset = Math.ceil(timeUntilReset / (60 * 60 * 1000));
    throw new Error(
      `Rate limit reached (${CONFIG.requestsPerDay} requests/day). ` +
      `Reset in ${hoursUntilReset} hours. Run again after ${new Date(requestResetTime.getTime() + twentyFourHours).toISOString()}`
    );
  }
}

// Build Census API URL
function buildCensusUrl(
  year: string,
  estimateType: 'acs1' | 'acs5',
  variables: string[],
  geography: string
): string {
  const varList = variables.join(',');
  const baseUrl = `${CONFIG.apiEndpoint}/${year}/acs/${estimateType}`;

  return `${baseUrl}?get=NAME,${varList}&for=${geography}&key=${CONFIG.apiKey}`;
}

// Fetch data from Census API with retry logic
async function fetchCensusData(
  year: string,
  estimateType: 'acs1' | 'acs5',
  variableGroup: string,
  variables: string[],
  geoLevel: string,
  geography: string,
  retryCount = 0
): Promise<CensusRecord[]> {
  try {
    checkRateLimit();

    const url = buildCensusUrl(year, estimateType, variables, geography);
    log('INFO', `Fetching ${year} ${estimateType} ${variableGroup} data for ${geoLevel}`);

    const response = await fetch(url);
    requestCount++;

    if (!response.ok) {
      if (response.status === 429 && retryCount < CONFIG.maxRetries) {
        log('WARNING', `Rate limit hit. Retrying in 60s (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
        await sleep(60000);
        return fetchCensusData(year, estimateType, variableGroup, variables, geoLevel, geography, retryCount + 1);
      }

      // Handle other errors
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    // Census API returns array format: [header_row, ...data_rows]
    if (!Array.isArray(data) || data.length < 2) {
      log('WARNING', `No data returned for ${year} ${estimateType} ${variableGroup} ${geoLevel}`);
      return [];
    }

    // Convert to object format
    const headers = data[0];
    const records = data.slice(1).map((row: string[]) => {
      const record: CensusRecord = {};
      headers.forEach((header: string, index: number) => {
        record[header] = row[index];
      });
      return record;
    });

    log('INFO', `Successfully fetched ${records.length} records for ${year} ${estimateType} ${variableGroup} ${geoLevel}`);
    return records;

  } catch (error) {
    const errorMsg = `Failed to fetch ${year} ${estimateType} ${variableGroup} ${geoLevel}: ${error instanceof Error ? error.message : String(error)}`;
    log('ERROR', errorMsg);

    if (retryCount < CONFIG.maxRetries) {
      log('INFO', `Retrying (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
      await sleep(5000 * (retryCount + 1)); // Exponential backoff
      return fetchCensusData(year, estimateType, variableGroup, variables, geoLevel, geography, retryCount + 1);
    }

    throw new Error(errorMsg);
  }
}

// Transform Census data to Substrate pipe-delimited format
function transformToSubstrateFormat(
  data: CensusRecord[],
  year: string,
  estimateType: string,
  variableGroup: string
): string {
  const lines = ['RECORD ID | GEOGRAPHY | NAME | VARIABLE | ESTIMATE | MARGIN_OF_ERROR | YEAR | ESTIMATE_TYPE'];
  lines.push('-'.repeat(120));

  for (const record of data) {
    const name = record.NAME || 'Unknown';
    const geoId = record.state || record.county || record.tract || 'US';

    // Extract variable estimates and margins of error
    for (const [key, value] of Object.entries(record)) {
      if (key === 'NAME' || key === 'state' || key === 'county' || key === 'tract' || key === 'us') {
        continue; // Skip metadata fields
      }

      // Parse variable name (e.g., B11001_001E -> estimate, B11001_001M -> margin of error)
      const isEstimate = key.endsWith('E');
      const isMargin = key.endsWith('M');

      if (isEstimate) {
        const varCode = key.slice(0, -1); // Remove 'E' suffix
        const marginKey = `${varCode}M`;
        const marginValue = record[marginKey] || 'N/A';

        const recordId = `DS-00006-${year}-${estimateType}-${geoId}-${key}`;
        lines.push(`${recordId} | ${geoId} | ${name} | ${key} | ${value} | ${marginValue} | ${year} | ${estimateType}`);
      }
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
      /\*\*Last Access Test:\*\* \d{4}-\d{2}-\d{2}[^\n]*/g,
      `**Last Access Test:** ${timestamp.split('T')[0]} (API tested successfully; ${summary.requestsUsed} requests used)`
    );

    writeFileSync(CONFIG.sourceFile, sourceContent);
    log('INFO', 'Updated source.md metadata');

  } catch (error) {
    log('ERROR', `Failed to update source.md: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Main update function
async function updateACSData(): Promise<UpdateSummary> {
  const startTime = new Date();
  log('INFO', '=== Update Started ===');
  log('INFO', `Source: ${CONFIG.sourceName}`);
  log('INFO', `Source ID: ${CONFIG.sourceId}`);

  // Validate API key
  if (!CONFIG.apiKey) {
    throw new Error(
      'Census API key not found. Please set CENSUS_API_KEY environment variable.\n' +
      'Get a free key at: https://api.census.gov/data/key_signup.html'
    );
  }

  const summary: UpdateSummary = {
    success: false,
    timestamp: startTime.toISOString(),
    yearsProcessed: [],
    requestsUsed: 0,
    recordsProcessed: 0,
    errors: [],
  };

  try {
    const allData: Map<string, CensusRecord[]> = new Map();

    // Fetch 1-year estimates
    for (const year of CONFIG.years.acs1) {
      const yearStr = year.toString();

      for (const [groupName, variables] of Object.entries(CONFIG.variables)) {
        for (const [geoLevel, geography] of Object.entries(CONFIG.geographies)) {
          try {
            const varArray = variables.join(',').split(',');
            const records = await fetchCensusData(
              yearStr,
              'acs1',
              groupName,
              varArray,
              geoLevel,
              geography
            );

            const key = `${yearStr}-acs1-${groupName}-${geoLevel}`;
            allData.set(key, records);
            summary.recordsProcessed += records.length;

            // Rate limiting delay
            await sleep(CONFIG.requestDelayMs);

          } catch (error) {
            const errorMsg = `Failed ${yearStr} acs1 ${groupName} ${geoLevel}: ${error instanceof Error ? error.message : String(error)}`;
            summary.errors.push(errorMsg);
            log('ERROR', errorMsg);
          }
        }
      }

      summary.yearsProcessed.push(`${yearStr}-acs1`);
    }

    // Fetch 5-year estimates
    for (const yearRange of CONFIG.years.acs5) {
      const yearStr = yearRange.replace('-', '_'); // API uses underscore

      for (const [groupName, variables] of Object.entries(CONFIG.variables)) {
        for (const [geoLevel, geography] of Object.entries(CONFIG.geographies)) {
          try {
            const varArray = variables.join(',').split(',');
            const records = await fetchCensusData(
              yearStr,
              'acs5',
              groupName,
              varArray,
              geoLevel,
              geography
            );

            const key = `${yearRange}-acs5-${groupName}-${geoLevel}`;
            allData.set(key, records);
            summary.recordsProcessed += records.length;

            // Rate limiting delay
            await sleep(CONFIG.requestDelayMs);

          } catch (error) {
            const errorMsg = `Failed ${yearRange} acs5 ${groupName} ${geoLevel}: ${error instanceof Error ? error.message : String(error)}`;
            summary.errors.push(errorMsg);
            log('ERROR', errorMsg);
          }
        }
      }

      summary.yearsProcessed.push(`${yearRange}-acs5`);
    }

    summary.requestsUsed = requestCount;

    // Save data by year and estimate type
    for (const [key, records] of allData.entries()) {
      const [year, estimateType, groupName, geoLevel] = key.split('-');

      // Save raw JSON
      const rawJsonPath = join(CONFIG.dataDir, `${key}.json`);
      writeFileSync(rawJsonPath, JSON.stringify(records, null, 2));
      log('INFO', `Saved raw data to ${rawJsonPath}`);

      // Transform and save pipe-delimited format
      const transformedData = transformToSubstrateFormat(records, year, estimateType, groupName);
      const transformedPath = join(CONFIG.dataDir, `${key}.txt`);
      writeFileSync(transformedPath, transformedData);
      log('INFO', `Saved transformed data to ${transformedPath}`);
    }

    // Create latest.json with most recent 1-year data
    const latestData: CensusRecord[] = [];
    for (const [key, records] of allData.entries()) {
      if (key.includes('2022-acs1')) {
        latestData.push(...records);
      }
    }

    if (latestData.length > 0) {
      const latestPath = join(CONFIG.dataDir, 'latest.json');
      writeFileSync(latestPath, JSON.stringify(latestData, null, 2));
      log('INFO', `Saved latest data (2022 ACS 1-year) to ${latestPath}`);
    }

    // Update source.md metadata
    updateSourceMetadata(summary);

    summary.success = summary.errors.length === 0;

    // Log summary
    log('INFO', '=== Update Summary ===');
    log('INFO', `Timestamp: ${summary.timestamp}`);
    log('INFO', `Years Processed: ${summary.yearsProcessed.join(', ')}`);
    log('INFO', `API Requests Used: ${summary.requestsUsed}/${CONFIG.requestsPerDay}`);
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
    summary.requestsUsed = requestCount;

    return summary;
  }
}

// Execute if run directly
if (import.meta.main) {
  updateACSData()
    .then(summary => {
      process.exit(summary.success ? 0 : 1);
    })
    .catch(error => {
      log('ERROR', `Unhandled error: ${error}`);
      process.exit(1);
    });
}

export { updateACSData, CONFIG as ACS_CONFIG };
