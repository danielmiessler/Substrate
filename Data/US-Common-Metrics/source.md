# US Common Metrics - Source Documentation

**Dataset ID:** US-Common-Metrics
**Record Created:** 2025-12-01
**Last Updated:** 2025-12-01
**Maintainer:** Daniel Miessler / Kai

---

## Bibliographic Information

### Title Statement
- **Main Title:** US Common Metrics
- **Subtitle:** Comprehensive U.S. Economic and Social Indicators Dataset
- **Abbreviated Title:** US-CM

### Responsibility Statement
- **Aggregator:** Substrate Project (danielmiessler/Substrate)
- **Primary Data Sources:** See Data Provenance section below
- **Automation:** TypeScript/Bun automation scripts

### Publication Information
- **First Published:** 2025-12-01
- **Update Frequency:** Varies by metric (daily to annual)
- **Current Status:** Active

---

## Purpose & Scope

### What This Dataset Provides

A **single source of truth** for the most important U.S. economic and social metrics, aggregating data from multiple authoritative government sources into one coherent document.

### Problems Solved

1. **Fragmentation**: Data scattered across dozens of government websites
2. **Inconsistent Formats**: Different agencies use different formats, update schedules
3. **Discovery Friction**: Finding the right metric requires knowing where to look
4. **Verification Burden**: Fact-checking requires navigating multiple sources

### Target Use Cases

- **Research & Analysis**: Quick access to authoritative data
- **Fact-Checking**: Verify claims with source citations
- **Substrate Arguments**: Build evidence-based arguments with proper provenance
- **Economic Monitoring**: Track the state of the U.S. economy

---

## Data Provenance

### Primary Data Sources

This dataset aggregates from the following authoritative sources:

| Source | Agency | Metrics | API |
|--------|--------|---------|-----|
| **FRED** | Federal Reserve Bank of St. Louis | Economic indicators, interest rates, employment | [fred.stlouisfed.org/docs/api](https://fred.stlouisfed.org/docs/api/) |
| **EIA** | Energy Information Administration | Gas prices, oil prices, energy data | [api.eia.gov](https://www.eia.gov/opendata/) |
| **Treasury FiscalData** | U.S. Department of Treasury | Federal debt, budget, spending | [fiscaldata.treasury.gov](https://fiscaldata.treasury.gov/api-documentation/) |
| **BLS** | Bureau of Labor Statistics | Employment, wages, prices | [api.bls.gov](https://www.bls.gov/developers/) |
| **Census Bureau** | U.S. Census Bureau | Demographics, housing, social indicators | [api.census.gov](https://api.census.gov/) |
| **CDC WONDER** | Centers for Disease Control | Mortality data | [wonder.cdc.gov](https://wonder.cdc.gov/) |
| **EPA AQS** | Environmental Protection Agency | Air quality data | [aqs.epa.gov/data/api](https://aqs.epa.gov/data/api/) |

### Source Documentation

Each data source has comprehensive documentation in `Data/sources/`:

| ID | Source | Documentation |
|----|--------|---------------|
| DS-00004 | FRED Economic Wellbeing | [source.md](../sources/DS-00004—FRED_Economic_Wellbeing/source.md) |
| DS-00005 | CDC WONDER Mortality | [source.md](../sources/DS-00005—CDC_WONDER_Mortality/source.md) |
| DS-00006 | Census ACS Social Wellbeing | [source.md](../sources/DS-00006—Census_ACS_Social_Wellbeing/source.md) |
| DS-00007 | BLS JOLTS Labor Market | [source.md](../sources/DS-00007—BLS_JOLTS_Labor_Market/source.md) |
| DS-00008 | EPA Air Quality System | [source.md](../sources/DS-00008—EPA_Air_Quality_System/source.md) |
| DS-00009 | EIA Energy Data | [source.md](../sources/DS-00009—EIA_Energy_Data/source.md) |
| DS-00010 | Treasury FiscalData | [source.md](../sources/DS-00010—Treasury_FiscalData/source.md) |

### Data Flow

```
Source Agencies (BEA, BLS, Treasury, etc.)
    ↓
FRED API (aggregates most series)
    ↓
update.ts automation script
    ↓
US-Common-Metrics.md (human-readable)
us-metrics-current.csv (machine-readable)
```

---

## Methodology

### Metric Selection Criteria

Metrics were selected based on:

1. **Economic Significance**: Core indicators watched by economists, policymakers, markets
2. **Public Interest**: Commonly cited in news, policy discussions
3. **Authoritative Source**: Must come from official government agencies
4. **Regular Updates**: Sufficient update frequency to track changes
5. **Historical Availability**: Long time series for trend analysis

### Data Aggregation Approach

1. **FRED-First**: Most metrics sourced via FRED API, which standardizes access to data from multiple agencies
2. **Direct API**: Some metrics (gas prices, federal debt) fetched directly from source agency APIs
3. **No Transformation**: Values presented as-is from source; no smoothing, adjustment, or calculation beyond what source provides
4. **Full Attribution**: Every value includes source, FRED series ID (if applicable), and timestamp

### Update Process

1. `update.ts` fetches latest values from all APIs
2. Values written to `US-Common-Metrics.md` in appropriate cells
3. Current values exported to `us-metrics-current.csv`
4. Historical values appended to `us-metrics-historical.csv`
5. Update log written to `update.log`

### Handling Revisions

Many economic indicators are revised after initial release:

- **Advance/Preliminary/Final**: GDP has three releases
- **Benchmark Revisions**: Employment data revised with annual benchmarks
- **Seasonal Factor Updates**: Seasonal adjustments recalculated annually

We always show the **most recent available value**, which may differ from initially reported figures.

---

## Access Conditions

### License
All underlying data is **public domain** (U.S. government work). This aggregation is part of the Substrate project under MIT license.

### API Keys Required

All APIs are free but most require registration:

| Source | Registration | Rate Limit |
|--------|--------------|------------|
| FRED | [Get key](https://fred.stlouisfed.org/docs/api/api_key.html) | 120 req/min |
| EIA | [Get key](https://www.eia.gov/opendata/register.php) | 1000 req/hour |
| Census | [Get key](https://api.census.gov/data/key_signup.html) | 500 req/day |
| BLS | Optional (higher limits) | 500 req/day (no key) |
| Treasury | None required | Reasonable use |
| CDC WONDER | None required | Fair use |
| EPA | Email request | 10 req/min |

### Environment Variables

```bash
export FRED_API_KEY="your_key"
export EIA_API_KEY="your_key"
export CENSUS_API_KEY="your_key"
export BLS_API_KEY="your_key"  # Optional
```

---

## Known Limitations

### Coverage Gaps

1. **Stock Indices**: S&P 500, DJIA not always available via free APIs (licensing restrictions)
2. **Real-Time Data**: Most metrics have publication lag (see individual sources)
3. **Regional Data**: This dataset focuses on national metrics; state/local data available from sources directly

### Methodological Limitations

1. **Aggregation Layer**: We don't collect primary data; we aggregate from official sources
2. **Revision Timing**: We fetch current values; historical revisions may not be captured
3. **Definition Changes**: Source agencies sometimes change definitions (noted in source docs)

### What This Dataset Is NOT

- **Primary data collection** - we aggregate from authoritative sources
- **Forecasts or projections** - historical and current data only
- **Microdata** - aggregated indicators only; no individual records
- **Real-time trading data** - publication lags vary from hours to months

---

## Integration with Substrate

### Linked Components

- **Problems**: Metrics quantify problems (e.g., PR-XXXXX - Economic Inequality → GINI Index)
- **Solutions**: Metrics track outcomes (e.g., SL-XXXXX - Employment Programs → Unemployment Rate)
- **Arguments**: Metrics provide evidence for claims
- **Plans**: Metrics define KPIs for success measurement

### Usage in Arguments

When citing metrics in Substrate Arguments:

```markdown
**Claim**: Unemployment has decreased significantly since 2020.

**Evidence**:
- Unemployment Rate (U-3): 3.7% (November 2024)
- Source: BLS/FRED (UNRATE)
- Comparison: 14.7% (April 2020, pandemic peak)
- Data: [US-Common-Metrics](../Data/US-Common-Metrics/US-Common-Metrics.md)
```

---

## Maintenance

### Update Frequency

```bash
# Manual update
cd Data/US-Common-Metrics
bun run update.ts

# Scheduled update (via cron or GitHub Actions)
0 6 * * * cd /path/to/Substrate && bun run Data/US-Common-Metrics/update.ts
```

### Quality Checks

1. **Completeness**: All metrics should have values (missing = API issue)
2. **Freshness**: Values should be within expected update window
3. **Consistency**: Values should be plausible (outlier detection)
4. **Sources**: All values should have source attribution

### Contributing

To add new metrics:

1. Identify authoritative source
2. Add source documentation to `Data/sources/DS-00XXX—Name/source.md`
3. Add metric rows to `US-Common-Metrics.md`
4. Update `update.ts` to fetch new metrics
5. Submit PR with justification for addition

---

## Credits

**Created:** 2025-12-01
**Author:** Daniel Miessler / Kai
**Framework:** Substrate (https://github.com/danielmiessler/Substrate)

**Data Sources:**
- Federal Reserve Bank of St. Louis (FRED)
- Bureau of Labor Statistics (BLS)
- Bureau of Economic Analysis (BEA)
- U.S. Census Bureau
- Energy Information Administration (EIA)
- U.S. Department of Treasury
- Centers for Disease Control (CDC)
- Environmental Protection Agency (EPA)

---

**END OF SOURCE DOCUMENTATION**
