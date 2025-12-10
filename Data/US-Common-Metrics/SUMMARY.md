# US Common Metrics: Executive Summary

---

## 🎯 WHAT THIS IS

| Attribute | Value |
|-----------|-------|
| **Dataset Type** | Dashboard / Reference Catalog |
| **Coverage** | 60+ U.S. economic and social indicators |
| **Update Frequency** | Daily → Annual (varies by metric) |
| **Last Updated** | December 2025 |

**One-liner:** Real-time reference dashboard for 60+ authoritative U.S. economic indicators.

**Caveat:** This is a catalog, not an estimate—each metric has its own update schedule and methodology.

---

## Why This Dashboard Matters

The U.S. economy is measured by dozens of agencies using hundreds of methodologies. Navigating [FRED](https://fred.stlouisfed.org/), [BLS](https://www.bls.gov/), [EIA](https://www.eia.gov/), [Treasury](https://fiscaldata.treasury.gov/), and [Census](https://data.census.gov/) separately is time-consuming and error-prone.

This dashboard provides:
- **Single source of truth** for the most-referenced U.S. metrics
- **Full provenance** - every number linked to its authoritative source
- **Current values** with update dates so you know data freshness
- **FRED IDs** for programmatic access to historical data

---

## Key Indicators at a Glance

### Economic Health
| Metric | Current Value | Source |
|--------|---------------|--------|
| [Real GDP](https://fred.stlouisfed.org/series/GDPC1) | ~$23.8T (Q3 2024) | [BEA](https://www.bea.gov/) |
| [GDP Growth (QoQ)](https://fred.stlouisfed.org/series/A191RL1Q225SBEA) | 3.8% | [BEA](https://www.bea.gov/) |
| [Unemployment (U-3)](https://fred.stlouisfed.org/series/UNRATE) | 4.4% | [BLS](https://www.bls.gov/) |
| [CPI Inflation](https://fred.stlouisfed.org/series/CPIAUCSL) | ~324 (index) | [BLS](https://www.bls.gov/) |

### Consumer & Housing
| Metric | Current Value | Source |
|--------|---------------|--------|
| [Consumer Sentiment](https://fred.stlouisfed.org/series/UMCSENT) | 53.6 | [U. Michigan](https://data.sca.isr.umich.edu/) |
| [30-Year Mortgage Rate](https://fred.stlouisfed.org/series/MORTGAGE30US) | 6.23% | [Freddie Mac](http://www.freddiemac.com/pmms/) |
| [Median Home Price](https://fred.stlouisfed.org/series/MSPUS) | ~$411K | [Census](https://www.census.gov/) |

### Financial & Fiscal
| Metric | Current Value | Source |
|--------|---------------|--------|
| [Fed Funds Rate](https://fred.stlouisfed.org/series/FEDFUNDS) | 3.88% | [Federal Reserve](https://www.federalreserve.gov/) |
| [10-Year Treasury](https://fred.stlouisfed.org/series/DGS10) | 4.02% | [Treasury](https://home.treasury.gov/) |
| [Debt-to-GDP Ratio](https://fred.stlouisfed.org/series/GFDEGDQ188S) | 118.8% | [FRED](https://fred.stlouisfed.org/) |
| [S&P 500](https://fred.stlouisfed.org/series/SP500) | ~6,813 | [S&P](https://www.spglobal.com/) |

---

## Update Schedule

| Frequency | What Gets Updated | Typical Lag |
|-----------|------------------|-------------|
| **Daily** | Treasury yields, Fed funds, oil prices, stock indices | Same day |
| **Weekly** | Jobless claims, gas prices, mortgage rates | 4-7 days |
| **Monthly** | CPI, PCE, employment, retail sales, housing | 2-4 weeks |
| **Quarterly** | GDP, home prices, debt service ratio | 1-3 months |
| **Annual** | Population, GINI, poverty, mortality | 6-18 months |

---

## Data Sources

All metrics come from authoritative government and institutional sources:

| Source | Website | What It Covers |
|--------|---------|---------------|
| [FRED](https://fred.stlouisfed.org/) | Federal Reserve Economic Data | Most economic indicators (aggregator) |
| [BLS](https://www.bls.gov/) | Bureau of Labor Statistics | Employment, wages, CPI |
| [BEA](https://www.bea.gov/) | Bureau of Economic Analysis | GDP, PCE, personal income |
| [Census](https://data.census.gov/) | Census Bureau | Demographics, housing starts |
| [EIA](https://www.eia.gov/) | Energy Information Administration | Gas prices, oil, energy |
| [Treasury](https://fiscaldata.treasury.gov/) | Treasury Department | Federal debt, budget |
| [CDC WONDER](https://wonder.cdc.gov/) | CDC | Mortality statistics |
| [EPA AQS](https://www.epa.gov/aqs) | Environmental Protection Agency | Air quality |

---

## How to Use This Dashboard

### For Quick Reference
Open `US-Common-Metrics.md` for current values organized by category.

### For Programmatic Access
```bash
# Get current values as CSV
cat us-metrics-current.csv

# Update all metrics (requires API keys)
bun run update.ts
```

### For Historical Data
Use the [FRED ID](https://fred.stlouisfed.org/) listed for each metric to access full time series.

### For Source Verification
Every metric links to its authoritative source. Click through to verify methodology.

---

## Methodology

### Design Philosophy
- **Authoritative sources only** - Government agencies and established institutions
- **Provenance required** - Every number must trace to a specific source
- **Transparency** - Methodology documented for each data source
- **Automation** - Scripts update values; humans don't hand-edit data

### Data Quality Notes
1. **Revisions**: Many economic indicators are revised multiple times. Values shown are the most recent.
2. **Seasonal Adjustment**: Most monthly/quarterly metrics are seasonally adjusted (SA/SAAR).
3. **Index vs. Level**: Some metrics are indices (CPI, PPI), others are levels (GDP). Check units.

---

## Known Limitations

1. **Table Formatting**: Some automated updates may corrupt markdown tables (being fixed)
2. **Missing Values**: Some metrics show `--` when data isn't available or API failed
3. **Lag**: Annual metrics (mortality, demographics) have 6-18 month publication delays
4. **No Forecasts**: This is ground-truth data only, no projections

---

## Supporting Documentation

| Document | Description |
|----------|-------------|
| [US-Common-Metrics.md](./US-Common-Metrics.md) | Full dataset with all 60+ metrics |
| [source.md](./source.md) | Detailed methodology per data source |
| [us-metrics-current.csv](./us-metrics-current.csv) | Machine-readable current values |
| [us-metrics-historical.csv](./us-metrics-historical.csv) | Historical time series |

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| **December 2025** | Added SUMMARY.md with executive overview | Standardizing Substrate datasets to "Answer First" schema |
| **December 2025** | Fixed table formatting corruption | Automated updates introduced markdown errors |
| **December 2025** | Initial 60+ metric catalog | Comprehensive U.S. indicators dashboard |

---

## Research Metadata

| Attribute | Value |
|-----------|-------|
| **Dataset Type** | Dashboard / Reference Catalog |
| **Maintainer** | Daniel Miessler / Kai |
| **Automation** | `bun run update.ts` |
| **API Keys Required** | FRED, EIA, Census (all free) |
| **Last Validation** | December 2025 |
