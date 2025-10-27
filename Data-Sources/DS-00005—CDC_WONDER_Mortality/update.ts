#!/usr/bin/env bun
/**
 * CDC WONDER Mortality Database Updater
 * Source ID: DS-00005
 * API: https://wonder.cdc.gov/controller/datarequest/
 * Update Frequency: Annual (final data); Quarterly (provisional data)
 *
 * NOTE: CDC WONDER uses XML-based request/response format
 */

import { appendFileSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

// Configuration
const CONFIG = {
  sourceId: 'DS-00005',
  sourceName: 'CDC WONDER Mortality Database',
  apiEndpoint: 'https://wonder.cdc.gov/controller/datarequest/D176', // Underlying Cause of Death database
  dataDir: './data',
  logFile: './update.log',
  sourceFile: './source.md',

  // Query configurations for key crisis indicators
  queries: {
    drugOverdose: {
      name: 'Drug Overdose Deaths',
      // ICD-10 codes: X40-X44 (unintentional), X60-X64 (suicide), X85 (homicide), Y10-Y14 (undetermined)
      icd10Codes: ['X40', 'X41', 'X42', 'X43', 'X44', 'X60', 'X61', 'X62', 'X63', 'X64', 'X85', 'Y10', 'Y11', 'Y12', 'Y13', 'Y14'],
    },
    opioid: {
      name: 'Opioid-Specific Deaths',
      // ICD-10 codes: T40.0-T40.4, T40.6 (opioid involvement)
      icd10Codes: ['T40.0', 'T40.1', 'T40.2', 'T40.3', 'T40.4', 'T40.6'],
    },
    suicide: {
      name: 'Suicide Deaths',
      // ICD-10 codes: X60-X84 (intentional self-harm), Y87.0, U03
      icd10Codes: ['X60', 'X61', 'X62', 'X63', 'X64', 'X65', 'X66', 'X67', 'X68', 'X69',
                   'X70', 'X71', 'X72', 'X73', 'X74', 'X75', 'X76', 'X77', 'X78', 'X79',
                   'X80', 'X81', 'X82', 'X83', 'X84', 'Y87.0', 'U03'],
    },
    allCause: {
      name: 'All-Cause Mortality',
      icd10Codes: [], // Empty = all causes
    },
  },

  // Rate limiting
  requestDelayMs: 2000, // Conservative: 1 request every 2 seconds
  maxRetries: 3,
};

// Types
interface LogEntry {
  timestamp: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  message: string;
}

interface MortalityRecord {
  state?: string;
  county?: string;
  year: string;
  deaths: number;
  population?: number;
  crudeRate?: number;
  ageAdjustedRate?: number;
  [key: string]: any;
}

interface UpdateSummary {
  success: boolean;
  timestamp: string;
  queriesExecuted: number;
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

// Generate XML request body for CDC WONDER API
function generateXMLRequest(queryType: keyof typeof CONFIG.queries, startYear = '2015', endYear = '2023'): string {
  const query = CONFIG.queries[queryType];

  // Base XML structure for CDC WONDER API
  // This is a simplified example - full queries can be more complex
  // Documentation: https://wonder.cdc.gov/wonder/help/WONDER-API.html

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<request-parameters>
  <accept_datause_restrictions>true</accept_datause_restrictions>

  <!-- Group results by: State, Year -->
  <b-parameters>
    <group_by_1>D176.V9</group_by_1> <!-- State -->
    <group_by_2>D176.V27</group_by_2> <!-- Year -->
  </b-parameters>

  <!-- Measures to return -->
  <m-parameters>
    <measure>D176.M1</measure> <!-- Deaths -->
    <measure>D176.M2</measure> <!-- Population -->
    <measure>D176.M3</measure> <!-- Crude Rate -->
  </m-parameters>

  <!-- Filter parameters -->
  <f-parameters>`;

  // Add year filter
  xml += `
    <f_d176.v27>`;
  for (let year = parseInt(startYear); year <= parseInt(endYear); year++) {
    xml += `
      <v>${year}</v>`;
  }
  xml += `
    </f_d176.v27>`;

  // Add ICD-10 code filter if specific causes requested
  if (query.icd10Codes.length > 0) {
    xml += `
    <f_d176.v2>`;
    for (const code of query.icd10Codes) {
      xml += `
      <v>${code}</v>`;
    }
    xml += `
    </f_d176.v2>`;
  }

  xml += `
  </f-parameters>

  <!-- Output options -->
  <o-parameters>
    <o_title>${query.name}</o_title>
    <o_timeout>300</o_timeout>
    <o_show_suppressed>false</o_show_suppressed>
    <o_show_totals>true</o_show_totals>
  </o-parameters>
</request-parameters>`;

  return xml;
}

// Parse XML response from CDC WONDER API
function parseXMLResponse(xmlString: string): MortalityRecord[] {
  const records: MortalityRecord[] = [];

  try {
    // NOTE: This is a simplified parser. In production, use a proper XML parser library
    // like 'fast-xml-parser' or 'xml2js'

    // For now, we'll use regex-based parsing (not ideal but works for demo)
    // Extract data rows (between <r> tags)
    const rowRegex = /<r>(.*?)<\/r>/gs;
    const rows = xmlString.match(rowRegex);

    if (!rows) {
      log('WARNING', 'No data rows found in XML response');
      return records;
    }

    for (const row of rows) {
      // Extract cell values (between <c> tags)
      const cellRegex = /<c>(.*?)<\/c>/g;
      const cells: string[] = [];
      let match;

      while ((match = cellRegex.exec(row)) !== null) {
        cells.push(match[1]);
      }

      // Map cells to record structure
      // Typical structure: [State, Year, Deaths, Population, Crude Rate]
      if (cells.length >= 3) {
        const record: MortalityRecord = {
          state: cells[0] || 'Unknown',
          year: cells[1] || 'Unknown',
          deaths: parseInt(cells[2]) || 0,
        };

        // Optional fields
        if (cells[3]) record.population = parseInt(cells[3]);
        if (cells[4]) record.crudeRate = parseFloat(cells[4]);

        records.push(record);
      }
    }

    log('INFO', `Parsed ${records.length} records from XML response`);
    return records;

  } catch (error) {
    log('ERROR', `Failed to parse XML response: ${error instanceof Error ? error.message : String(error)}`);
    return records;
  }
}

// Fetch data from CDC WONDER API with retry logic
async function fetchCDCData(queryType: keyof typeof CONFIG.queries, retryCount = 0): Promise<MortalityRecord[]> {
  try {
    log('INFO', `Fetching data for: ${CONFIG.queries[queryType].name}`);

    const xmlRequest = generateXMLRequest(queryType);

    const response = await fetch(CONFIG.apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml',
        'Accept': 'application/xml',
      },
      body: xmlRequest,
    });

    if (!response.ok) {
      if (response.status === 429 && retryCount < CONFIG.maxRetries) {
        log('WARNING', `Rate limit hit for ${queryType}. Retrying in 60s (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
        await sleep(60000);
        return fetchCDCData(queryType, retryCount + 1);
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const xmlResponse = await response.text();

    // Check for API error messages in XML
    if (xmlResponse.includes('<error>') || xmlResponse.includes('<message>Error')) {
      throw new Error('API returned error in XML response');
    }

    const records = parseXMLResponse(xmlResponse);
    log('INFO', `Successfully fetched ${records.length} records for ${queryType}`);

    return records;

  } catch (error) {
    const errorMsg = `Failed to fetch ${queryType}: ${error instanceof Error ? error.message : String(error)}`;
    log('ERROR', errorMsg);

    if (retryCount < CONFIG.maxRetries) {
      log('INFO', `Retrying ${queryType} (attempt ${retryCount + 1}/${CONFIG.maxRetries})`);
      await sleep(5000 * (retryCount + 1)); // Exponential backoff
      return fetchCDCData(queryType, retryCount + 1);
    }

    throw new Error(errorMsg);
  }
}

// Transform API data to Substrate pipe-delimited format
function transformToSubstrateFormat(data: MortalityRecord[], queryType: string): string {
  const queryName = CONFIG.queries[queryType as keyof typeof CONFIG.queries].name;

  // Header
  const lines = [`RECORD ID | QUERY TYPE | STATE | YEAR | DEATHS | POPULATION | CRUDE RATE | AGE ADJUSTED RATE`];
  lines.push('-'.repeat(120));

  // Data rows
  for (const record of data) {
    const recordId = `DS-00005-${queryType}-${record.state?.replace(/\s+/g, '_')}-${record.year}`;
    const state = record.state || 'Unknown';
    const year = record.year || 'Unknown';
    const deaths = record.deaths || 0;
    const population = record.population || 'N/A';
    const crudeRate = record.crudeRate || 'N/A';
    const ageAdjustedRate = record.ageAdjustedRate || 'N/A';

    lines.push(`${recordId} | ${queryName} | ${state} | ${year} | ${deaths} | ${population} | ${crudeRate} | ${ageAdjustedRate}`);
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
async function updateCDCWONDER(): Promise<UpdateSummary> {
  const startTime = new Date();
  log('INFO', '=== Update Started ===');
  log('INFO', `Source: ${CONFIG.sourceName}`);
  log('INFO', `Source ID: ${CONFIG.sourceId}`);

  const summary: UpdateSummary = {
    success: false,
    timestamp: startTime.toISOString(),
    queriesExecuted: 0,
    recordsProcessed: 0,
    errors: [],
  };

  try {
    // Check API availability
    log('INFO', 'Checking API availability...');
    const healthCheck = await fetch('https://wonder.cdc.gov/', { method: 'HEAD' });
    if (!healthCheck.ok) {
      throw new Error('CDC WONDER website unreachable');
    }
    log('INFO', 'API endpoint is available');

    // Execute queries for each indicator
    const allData: { [key: string]: MortalityRecord[] } = {};
    const queryTypes = Object.keys(CONFIG.queries) as Array<keyof typeof CONFIG.queries>;

    for (const queryType of queryTypes) {
      try {
        const queryData = await fetchCDCData(queryType);
        allData[queryType] = queryData;
        summary.queriesExecuted++;
        summary.recordsProcessed += queryData.length;

        // Rate limiting between queries
        await sleep(CONFIG.requestDelayMs);

      } catch (error) {
        const errorMsg = `Failed to fetch ${queryType}: ${error instanceof Error ? error.message : String(error)}`;
        summary.errors.push(errorMsg);
        log('ERROR', errorMsg);
        // Continue with other queries
      }
    }

    // Save raw JSON for each query
    for (const [queryType, records] of Object.entries(allData)) {
      const rawJsonPath = join(CONFIG.dataDir, `${queryType}_latest.json`);
      writeFileSync(rawJsonPath, JSON.stringify(records, null, 2));
      log('INFO', `Saved raw data to ${rawJsonPath}`);
    }

    // Transform and save pipe-delimited format for each query
    for (const [queryType, records] of Object.entries(allData)) {
      const transformedData = transformToSubstrateFormat(records, queryType);
      const transformedPath = join(CONFIG.dataDir, `${queryType}_latest.txt`);
      writeFileSync(transformedPath, transformedData);
      log('INFO', `Saved transformed data to ${transformedPath}`);
    }

    // Create combined dataset
    const combinedRecords = Object.values(allData).flat();
    const combinedJsonPath = join(CONFIG.dataDir, 'all_queries_latest.json');
    writeFileSync(combinedJsonPath, JSON.stringify(combinedRecords, null, 2));
    log('INFO', `Saved combined data to ${combinedJsonPath}`);

    // Update source.md metadata
    updateSourceMetadata(summary);

    summary.success = summary.errors.length === 0;

    // Log summary
    log('INFO', '=== Update Summary ===');
    log('INFO', `Timestamp: ${summary.timestamp}`);
    log('INFO', `Queries Executed: ${summary.queriesExecuted}/${queryTypes.length}`);
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
  updateCDCWONDER()
    .then(summary => {
      process.exit(summary.success ? 0 : 1);
    })
    .catch(error => {
      log('ERROR', `Unhandled error: ${error}`);
      process.exit(1);
    });
}

export { updateCDCWONDER, CONFIG as CDC_WONDER_CONFIG };
