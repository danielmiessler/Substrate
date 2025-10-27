#!/usr/bin/env bun
/**
 * World Bank Open Data Source Updater
 * Source ID: DS-00003
 * API: https://api.worldbank.org/v2/
 */

import { appendFileSync, writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

const CONFIG = {
  sourceId: 'DS-00003',
  sourceName: 'World Bank Open Data',
  apiEndpoint: 'https://api.worldbank.org/v2',
  dataDir: './data',
  logFile: './update.log',
  sourceFile: './source.md',
  
  // Sample indicators
  indicators: [
    'NY.GDP.MKTP.CD',      // GDP (current US$)
    'SI.POV.DDAY',         // Poverty headcount ratio at $2.15/day
    'SP.POP.TOTL',         // Population, total
    'SE.PRM.ENRR',         // School enrollment, primary (% gross)
  ],
  
  countries: ['USA', 'CHN', 'IND', 'BRA', 'NGA'], // Sample countries
  requestDelayMs: 500,
  maxRetries: 3,
};

interface WBData {
  indicator: { id: string; value: string };
  country: { id: string; value: string };
  countryiso3code: string;
  date: string;
  value: number | null;
  [key: string]: any;
}

interface UpdateSummary {
  success: boolean;
  timestamp: string;
  indicatorsFetched: number;
  recordsProcessed: number;
  errors: string[];
}

function log(level: 'INFO' | 'WARNING' | 'ERROR', message: string): void {
  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] ${level}: ${message}\n`;
  console.log(logLine.trim());
  appendFileSync(CONFIG.logFile, logLine);
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWBData(indicator: string, retryCount = 0): Promise<WBData[]> {
  try {
    log('INFO', `Fetching indicator: ${indicator}`);
    
    const countries = CONFIG.countries.join(';');
    const url = `${CONFIG.apiEndpoint}/country/${countries}/indicator/${indicator}?format=json&per_page=1000`;
    const response = await fetch(url);
    
    if (!response.ok) {
      if (response.status === 429 && retryCount < CONFIG.maxRetries) {
        log('WARNING', `Rate limit hit for ${indicator}. Retrying...`);
        await sleep(60000);
        return fetchWBData(indicator, retryCount + 1);
      }
      throw new Error(`HTTP ${response.status}`);
    }
    
    const data = await response.json();
    const records = Array.isArray(data) && data.length > 1 ? data[1] : [];
    log('INFO', `Fetched ${records.length} records for ${indicator}`);
    
    return records;
    
  } catch (error) {
    const errorMsg = `Failed to fetch ${indicator}: ${error}`;
    log('ERROR', errorMsg);
    
    if (retryCount < CONFIG.maxRetries) {
      await sleep(5000 * (retryCount + 1));
      return fetchWBData(indicator, retryCount + 1);
    }
    
    throw new Error(errorMsg);
  }
}

function transformToSubstrateFormat(data: WBData[]): string {
  const lines = ['RECORD ID | REGION | INDICATOR | YEAR | VALUE | INDICATOR NAME'];
  lines.push('-'.repeat(100));
  
  for (const record of data) {
    if (record.value === null) continue; // Skip null values
    
    const recordId = `DS-00003-${record.indicator.id}-${record.countryiso3code}-${record.date}`;
    const region = record.country.value || 'Unknown';
    const indicator = record.indicator.id || 'Unknown';
    const year = record.date || 'Unknown';
    const value = record.value?.toString() || 'N/A';
    const name = record.indicator.value || 'No name';
    
    lines.push(`${recordId} | ${region} | ${indicator} | ${year} | ${value} | ${name}`);
  }
  
  return lines.join('\n');
}

function updateSourceMetadata(summary: UpdateSummary): void {
  try {
    let content = readFileSync(CONFIG.sourceFile, 'utf-8');
    const date = summary.timestamp.split('T')[0];
    
    content = content.replace(
      /\*\*Last Updated:\*\* \d{4}-\d{2}-\d{2}/g,
      `**Last Updated:** ${date}`
    );
    
    writeFileSync(CONFIG.sourceFile, content);
    log('INFO', 'Updated source.md metadata');
  } catch (error) {
    log('ERROR', `Failed to update source.md: ${error}`);
  }
}

async function updateWorldBankData(): Promise<UpdateSummary> {
  const startTime = new Date();
  log('INFO', '=== Update Started ===');
  log('INFO', `Source: ${CONFIG.sourceName}`);
  
  const summary: UpdateSummary = {
    success: false,
    timestamp: startTime.toISOString(),
    indicatorsFetched: 0,
    recordsProcessed: 0,
    errors: [],
  };
  
  try {
    log('INFO', 'Checking API availability...');
    const health = await fetch(`${CONFIG.apiEndpoint}/country?format=json`);
    if (!health.ok) throw new Error('API unavailable');
    log('INFO', 'API is available');
    
    const allData: WBData[] = [];
    
    for (const indicator of CONFIG.indicators) {
      try {
        const data = await fetchWBData(indicator);
        allData.push(...data);
        summary.indicatorsFetched++;
        await sleep(CONFIG.requestDelayMs);
      } catch (error) {
        summary.errors.push(`Failed: ${indicator}`);
        log('ERROR', `Failed: ${indicator}`);
      }
    }
    
    summary.recordsProcessed = allData.length;
    
    writeFileSync(join(CONFIG.dataDir, 'latest.json'), JSON.stringify(allData, null, 2));
    log('INFO', 'Saved raw JSON');
    
    const transformed = transformToSubstrateFormat(allData);
    writeFileSync(join(CONFIG.dataDir, 'latest.txt'), transformed);
    log('INFO', 'Saved transformed data');
    
    updateSourceMetadata(summary);
    
    summary.success = summary.errors.length === 0;
    
    log('INFO', '=== Update Summary ===');
    log('INFO', `Indicators: ${summary.indicatorsFetched}/${CONFIG.indicators.length}`);
    log('INFO', `Records: ${summary.recordsProcessed}`);
    log('INFO', `Errors: ${summary.errors.length}`);
    log('INFO', summary.success ? '=== Update Completed Successfully ===' : '=== Update Completed with Errors ===');
    
    return summary;
    
  } catch (error) {
    log('ERROR', `Fatal error: ${error}`);
    summary.errors.push(`Fatal: ${error}`);
    return summary;
  }
}

if (import.meta.main) {
  updateWorldBankData()
    .then(summary => process.exit(summary.success ? 0 : 1))
    .catch(error => {
      log('ERROR', `Unhandled: ${error}`);
      process.exit(1);
    });
}

export { updateWorldBankData, CONFIG as WB_CONFIG };
