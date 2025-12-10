#!/usr/bin/env bun
/**
 * EPA Air Quality System (AQS) Data Updater
 * DS-00008 — Environmental Health & Quality of Life Indicators
 *
 * Fetches air quality data from EPA AQS API with proper rate limiting.
 * Focus: PM2.5 and Ozone (most critical for health and wellbeing)
 *
 * CRITICAL CONTEXT:
 * Air quality is a structural determinant of wellbeing. You cannot "self-care"
 * your way out of breathing toxic air. PM2.5 exposure reduces life expectancy
 * by months to years in polluted areas. Environmental injustice: low-income
 * communities disproportionately exposed.
 *
 * Rate Limits: 10 requests/minute (HARD LIMIT)
 * Recommended: 6-second delay between requests
 * Authentication: Email + API key (register at aqs.support@epa.gov)
 *
 * Usage:
 *   bun update.ts --year 2023 --states CA,NY,TX
 *   bun update.ts --help
 */

import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

// ============================================================================
// CONFIGURATION
// ============================================================================

interface AQSConfig {
  email: string;
  apiKey: string;
  baseUrl: string;
  rateLimit: {
    requestsPerMinute: number;
    delayBetweenRequests: number; // milliseconds
  };
}

const CONFIG: AQSConfig = {
  email: process.env.AQS_EMAIL || '',
  apiKey: process.env.AQS_API_KEY || '',
  baseUrl: 'https://aqs.epa.gov/data/api',
  rateLimit: {
    requestsPerMinute: 10,
    delayBetweenRequests: 6000, // 6 seconds (10 req/min = 1 req per 6 sec)
  },
};

// ============================================================================
// PARAMETER CODES (Air Quality Parameters)
// ============================================================================

const PARAMETERS = {
  PM25: '88101',      // PM2.5 (fine particulate matter) - MOST CRITICAL
  OZONE: '44201',     // Ozone (O3) - respiratory irritant
  SO2: '42401',       // Sulfur Dioxide
  CO: '42101',        // Carbon Monoxide
  NO2: '42602',       // Nitrogen Dioxide
  PM10: '81102',      // PM10 (coarse particulate matter)
} as const;

// Priority parameters for health impacts
const PRIORITY_PARAMETERS = [PARAMETERS.PM25, PARAMETERS.OZONE];

// ============================================================================
// STATE CODES (U.S. States)
// ============================================================================

const STATE_CODES: Record<string, string> = {
  AL: '01', AK: '02', AZ: '04', AR: '05', CA: '06', CO: '08', CT: '09',
  DE: '10', DC: '11', FL: '12', GA: '13', HI: '15', ID: '16', IL: '17',
  IN: '18', IA: '19', KS: '20', KY: '21', LA: '22', ME: '23', MD: '24',
  MA: '25', MI: '26', MN: '27', MS: '28', MO: '29', MT: '30', NE: '31',
  NV: '32', NH: '33', NJ: '34', NM: '35', NY: '36', NC: '37', ND: '38',
  OH: '39', OK: '40', OR: '41', PA: '42', RI: '44', SC: '45', SD: '46',
  TN: '47', TX: '48', UT: '49', VT: '50', VA: '51', WA: '53', WV: '54',
  WI: '55', WY: '56', PR: '72', VI: '78',
};

// ============================================================================
// API CLIENT WITH RATE LIMITING
// ============================================================================

class AQSClient {
  private config: AQSConfig;
  private lastRequestTime: number = 0;

  constructor(config: AQSConfig) {
    this.config = config;
    this.validateConfig();
  }

  private validateConfig(): void {
    if (!this.config.email) {
      throw new Error('AQS_EMAIL environment variable is required');
    }
    if (!this.config.apiKey) {
      throw new Error('AQS_API_KEY environment variable is required');
    }
  }

  /**
   * Rate-limited HTTP GET request
   * Ensures 6-second minimum delay between requests (10 req/min limit)
   */
  private async rateLimitedGet(url: string): Promise<any> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    const minDelay = this.config.rateLimit.delayBetweenRequests;

    if (timeSinceLastRequest < minDelay) {
      const waitTime = minDelay - timeSinceLastRequest;
      console.log(`⏳ Rate limiting: waiting ${waitTime}ms before next request...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    this.lastRequestTime = Date.now();

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    // Check AQS API error response
    if (data.Header && data.Header[0]?.status === 'Failed') {
      throw new Error(`AQS API Error: ${data.Header[0].error || 'Unknown error'}`);
    }

    return data;
  }

  /**
   * Build API URL with authentication parameters
   */
  private buildUrl(endpoint: string, params: Record<string, string>): string {
    const urlParams = new URLSearchParams({
      email: this.config.email,
      key: this.config.apiKey,
      ...params,
    });
    return `${this.config.baseUrl}/${endpoint}?${urlParams.toString()}`;
  }

  /**
   * Fetch daily air quality data for a state, parameter, and year
   *
   * Endpoint: dailyData/byState
   * Returns: Daily (midnight-to-midnight) summary statistics
   */
  async getDailyDataByState(
    stateCode: string,
    parameterCode: string,
    year: number
  ): Promise<any> {
    const bdate = `${year}0101`; // January 1
    const edate = `${year}1231`; // December 31

    const url = this.buildUrl('dailyData/byState', {
      param: parameterCode,
      bdate,
      edate,
      state: stateCode,
    });

    console.log(`📊 Fetching: State ${stateCode}, Parameter ${parameterCode}, Year ${year}`);
    const data = await this.rateLimitedGet(url);

    const rowCount = data.Header?.[0]?.rows || 0;
    console.log(`   ✓ Retrieved ${rowCount} rows`);

    return data;
  }

  /**
   * Fetch monitoring site metadata for a state
   *
   * Endpoint: monitors/byState
   * Returns: Monitoring station locations and metadata
   */
  async getMonitorsByState(stateCode: string): Promise<any> {
    const url = this.buildUrl('monitors/byState', {
      state: stateCode,
    });

    console.log(`📍 Fetching monitor metadata for state ${stateCode}`);
    const data = await this.rateLimitedGet(url);

    const rowCount = data.Header?.[0]?.rows || 0;
    console.log(`   ✓ Retrieved ${rowCount} monitors`);

    return data;
  }

  /**
   * Fetch annual summary data (more efficient for multi-year trends)
   *
   * Endpoint: annualData/byState
   * Returns: Annual summary statistics
   */
  async getAnnualDataByState(
    stateCode: string,
    parameterCode: string,
    beginYear: number,
    endYear: number
  ): Promise<any> {
    const bdate = `${beginYear}0101`;
    const edate = `${endYear}1231`;

    const url = this.buildUrl('annualData/byState', {
      param: parameterCode,
      bdate,
      edate,
      state: stateCode,
    });

    console.log(`📊 Fetching annual data: State ${stateCode}, Parameter ${parameterCode}, ${beginYear}-${endYear}`);
    const data = await this.rateLimitedGet(url);

    const rowCount = data.Header?.[0]?.rows || 0;
    console.log(`   ✓ Retrieved ${rowCount} rows`);

    return data;
  }
}

// ============================================================================
// DATA PROCESSING
// ============================================================================

interface ProcessedAirQualityData {
  metadata: {
    source: string;
    dataSourceId: string;
    fetchedAt: string;
    parameters: string[];
    states: string[];
    year: number;
  };
  dailyData: any[];
  monitorMetadata: any[];
  summary: {
    totalRecords: number;
    stateCount: number;
    parameterCount: number;
    dateRange: {
      start: string;
      end: string;
    };
  };
}

class AQSDataProcessor {
  /**
   * Process and structure AQS data for storage
   */
  static processData(
    dailyDataResults: any[],
    monitorResults: any[],
    metadata: {
      parameters: string[];
      states: string[];
      year: number;
    }
  ): ProcessedAirQualityData {
    // Flatten daily data from all requests
    const allDailyData = dailyDataResults.flatMap(result => result.Data || []);

    // Flatten monitor metadata
    const allMonitors = monitorResults.flatMap(result => result.Data || []);

    // Calculate date range
    const dates = allDailyData.map(d => d.date_local).filter(Boolean).sort();
    const dateRange = {
      start: dates[0] || '',
      end: dates[dates.length - 1] || '',
    };

    return {
      metadata: {
        source: 'EPA Air Quality System (AQS)',
        dataSourceId: 'DS-00008',
        fetchedAt: new Date().toISOString(),
        parameters: metadata.parameters,
        states: metadata.states,
        year: metadata.year,
      },
      dailyData: allDailyData,
      monitorMetadata: allMonitors,
      summary: {
        totalRecords: allDailyData.length,
        stateCount: metadata.states.length,
        parameterCount: metadata.parameters.length,
        dateRange,
      },
    };
  }

  /**
   * Calculate summary statistics for air quality data
   */
  static calculateSummaryStats(data: ProcessedAirQualityData): any {
    const stats: any = {};

    // Group by parameter
    const byParameter = new Map<string, any[]>();
    for (const record of data.dailyData) {
      const paramCode = record.parameter_code;
      if (!byParameter.has(paramCode)) {
        byParameter.set(paramCode, []);
      }
      byParameter.get(paramCode)!.push(record);
    }

    // Calculate stats for each parameter
    for (const [paramCode, records] of byParameter.entries()) {
      const values = records
        .map(r => r.arithmetic_mean)
        .filter(v => v != null && !isNaN(v));

      if (values.length === 0) continue;

      stats[paramCode] = {
        parameter: paramCode,
        parameterName: records[0]?.parameter_name || 'Unknown',
        count: values.length,
        mean: values.reduce((a, b) => a + b, 0) / values.length,
        min: Math.min(...values),
        max: Math.max(...values),
        median: this.calculateMedian(values),
        units: records[0]?.units_of_measure || '',
      };
    }

    return stats;
  }

  private static calculateMedian(values: number[]): number {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  }
}

// ============================================================================
// FILE OPERATIONS
// ============================================================================

class FileManager {
  private dataDir: string;

  constructor(dataDir: string = './data') {
    this.dataDir = dataDir;
    this.ensureDataDirectory();
  }

  private ensureDataDirectory(): void {
    mkdirSync(this.dataDir, { recursive: true });
  }

  /**
   * Save processed data to JSON file
   */
  saveData(data: ProcessedAirQualityData, filename: string): string {
    const filepath = join(this.dataDir, filename);
    writeFileSync(filepath, JSON.stringify(data, null, 2));
    console.log(`💾 Saved data to: ${filepath}`);
    return filepath;
  }

  /**
   * Save summary statistics
   */
  saveSummary(stats: any, filename: string): string {
    const filepath = join(this.dataDir, filename);
    writeFileSync(filepath, JSON.stringify(stats, null, 2));
    console.log(`📈 Saved summary to: ${filepath}`);
    return filepath;
  }
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

interface CommandLineArgs {
  year: number;
  states: string[];
  parameters: string[];
  help: boolean;
}

function parseArgs(): CommandLineArgs {
  const args: CommandLineArgs = {
    year: new Date().getFullYear() - 1, // Default: last year
    states: ['CA'], // Default: California (most populous, diverse air quality)
    parameters: PRIORITY_PARAMETERS, // Default: PM2.5 and Ozone
    help: false,
  };

  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i];

    if (arg === '--help' || arg === '-h') {
      args.help = true;
    } else if (arg === '--year' && i + 1 < process.argv.length) {
      args.year = parseInt(process.argv[++i], 10);
    } else if (arg === '--states' && i + 1 < process.argv.length) {
      args.states = process.argv[++i].split(',').map(s => s.trim().toUpperCase());
    } else if (arg === '--parameters' && i + 1 < process.argv.length) {
      const paramNames = process.argv[++i].split(',').map(s => s.trim().toUpperCase());
      args.parameters = paramNames.map(name => {
        const code = PARAMETERS[name as keyof typeof PARAMETERS];
        if (!code) {
          throw new Error(`Unknown parameter: ${name}. Valid: ${Object.keys(PARAMETERS).join(', ')}`);
        }
        return code;
      });
    }
  }

  return args;
}

function printHelp(): void {
  console.log(`
EPA Air Quality System (AQS) Data Updater
DS-00008 — Environmental Health & Quality of Life Indicators

USAGE:
  bun update.ts [OPTIONS]

OPTIONS:
  --year YEAR           Year to fetch (default: last year)
  --states STATE1,STATE2 State codes (default: CA)
  --parameters PARAM1,PARAM2 Parameters to fetch (default: PM25,OZONE)
  --help, -h            Show this help message

AVAILABLE PARAMETERS:
  PM25    - Fine Particulate Matter (MOST CRITICAL FOR HEALTH)
  OZONE   - Ground-level Ozone
  SO2     - Sulfur Dioxide
  CO      - Carbon Monoxide
  NO2     - Nitrogen Dioxide
  PM10    - Coarse Particulate Matter

STATE CODES:
  Use 2-letter postal codes: CA, NY, TX, etc.

EXAMPLES:
  bun update.ts
  bun update.ts --year 2023 --states CA,NY,TX
  bun update.ts --year 2023 --parameters PM25,OZONE --states CA

ENVIRONMENT VARIABLES:
  AQS_EMAIL    - Your AQS API email (required)
  AQS_API_KEY  - Your AQS API key (required)

REGISTRATION:
  Register for API access:
  Email: aqs.support@epa.gov
  Or: https://aqs.epa.gov/data/api/signup?email=your_email@example.com

RATE LIMITS:
  - 10 requests per minute (HARD LIMIT)
  - 6-second delay enforced between requests
  - Account suspension if violated

CONTEXT:
  Air quality is a structural determinant of wellbeing. You cannot
  "self-care" your way out of breathing toxic air. PM2.5 exposure
  reduces life expectancy by months to years in polluted areas.

  Environmental injustice: Low-income communities and communities
  of color are disproportionately exposed to air pollution.
`);
}

async function main(): Promise<void> {
  console.log('🌬️  EPA Air Quality System (AQS) Data Updater');
  console.log('📋 DS-00008 — Environmental Health & Quality of Life Indicators\n');

  const args = parseArgs();

  if (args.help) {
    printHelp();
    return;
  }

  // Validate state codes
  const validStates = args.states.filter(state => STATE_CODES[state]);
  const invalidStates = args.states.filter(state => !STATE_CODES[state]);

  if (invalidStates.length > 0) {
    console.error(`❌ Invalid state codes: ${invalidStates.join(', ')}`);
    console.error(`Valid codes: ${Object.keys(STATE_CODES).join(', ')}`);
    process.exit(1);
  }

  console.log(`📅 Year: ${args.year}`);
  console.log(`📍 States: ${validStates.join(', ')}`);
  console.log(`🔬 Parameters: ${args.parameters.join(', ')}`);
  console.log(`⏱️  Rate limit: 10 requests/minute (6-second delays)\n`);

  try {
    const client = new AQSClient(CONFIG);
    const fileManager = new FileManager();

    // Collect all data
    const dailyDataResults: any[] = [];
    const monitorResults: any[] = [];

    // Fetch daily data for each state and parameter
    for (const stateAbbr of validStates) {
      const stateCode = STATE_CODES[stateAbbr];

      // Fetch monitor metadata (once per state)
      const monitors = await client.getMonitorsByState(stateCode);
      monitorResults.push(monitors);

      // Fetch daily data for each parameter
      for (const paramCode of args.parameters) {
        const dailyData = await client.getDailyDataByState(stateCode, paramCode, args.year);
        dailyDataResults.push(dailyData);
      }
    }

    // Process data
    console.log('\n📊 Processing data...');
    const processedData = AQSDataProcessor.processData(
      dailyDataResults,
      monitorResults,
      {
        parameters: args.parameters,
        states: validStates,
        year: args.year,
      }
    );

    // Calculate summary statistics
    const stats = AQSDataProcessor.calculateSummaryStats(processedData);

    // Save data
    console.log('\n💾 Saving data...');
    const timestamp = new Date().toISOString().split('T')[0];
    const dataFilename = `aqs_${args.year}_${validStates.join('-')}_${timestamp}.json`;
    const statsFilename = `aqs_${args.year}_${validStates.join('-')}_stats_${timestamp}.json`;

    fileManager.saveData(processedData, dataFilename);
    fileManager.saveSummary(stats, statsFilename);

    // Print summary
    console.log('\n✅ DATA UPDATE COMPLETE\n');
    console.log('📈 SUMMARY:');
    console.log(`   Total Records: ${processedData.summary.totalRecords.toLocaleString()}`);
    console.log(`   States: ${processedData.summary.stateCount}`);
    console.log(`   Parameters: ${processedData.summary.parameterCount}`);
    console.log(`   Date Range: ${processedData.summary.dateRange.start} to ${processedData.summary.dateRange.end}`);
    console.log(`   Monitors: ${processedData.monitorMetadata.length}`);

    console.log('\n🔬 PARAMETER STATISTICS:');
    for (const [paramCode, paramStats] of Object.entries(stats)) {
      console.log(`\n   ${paramStats.parameterName} (${paramCode}):`);
      console.log(`     Mean: ${paramStats.mean.toFixed(2)} ${paramStats.units}`);
      console.log(`     Median: ${paramStats.median.toFixed(2)} ${paramStats.units}`);
      console.log(`     Range: ${paramStats.min.toFixed(2)} - ${paramStats.max.toFixed(2)} ${paramStats.units}`);
      console.log(`     Observations: ${paramStats.count.toLocaleString()}`);
    }

    console.log('\n🌍 ENVIRONMENTAL HEALTH CONTEXT:');
    console.log('   Air quality is a structural determinant of wellbeing.');
    console.log('   You cannot "self-care" your way out of breathing toxic air.');
    console.log('   ZIP code determines exposure — environmental injustice persists.');

  } catch (error) {
    console.error('\n❌ ERROR:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

// Run if executed directly
if (import.meta.main) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

// Export for testing/library use
export { AQSClient, AQSDataProcessor, FileManager, CONFIG, PARAMETERS, STATE_CODES };
