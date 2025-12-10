# US Common Metrics

**A comprehensive catalog of the most important U.S. economic and social indicators.**

## Purpose

This dataset provides a single source of truth for understanding the current state of the U.S. economy and society. Instead of navigating dozens of government websites with different update schedules and formats, you get:

- **One master document** with 60+ metrics and their current values
- **Full provenance** - every number traced back to its authoritative source
- **Update automation** - TypeScript scripts keep metrics current
- **Transparency** - complete methodology documentation per Substrate philosophy

## Quick Start

```bash
# View current metrics
cat US-Common-Metrics.md

# Get parseable data
cat us-metrics-current.csv

# Update all metrics (requires API keys)
bun run update.ts
```

## Contents

| File | Description |
|------|-------------|
| `US-Common-Metrics.md` | Master document with all metrics, values, sources |
| `us-metrics-current.csv` | Current values in parseable format |
| `us-metrics-historical.csv` | Historical time series |
| `source.md` | Methodology, data lineage, source links |
| `update.ts` | Automation script to refresh all metrics |

## Metric Categories

1. **Economic Output & Growth** - GDP, industrial production, retail sales
2. **Inflation & Prices** - CPI, PCE, gas prices, oil prices
3. **Employment & Labor** - Unemployment, payrolls, jobless claims, quit rate
4. **Housing** - Home prices, mortgage rates, housing starts
5. **Consumer & Personal Finance** - Sentiment, saving rate, credit
6. **Financial Markets** - Interest rates, stock indices, volatility
7. **Trade & International** - Trade balance, USD index
8. **Government & Fiscal** - Federal debt, budget, spending
9. **Demographics & Social** - Population, inequality, poverty
10. **Health & Crisis** - Deaths of despair, air quality, life expectancy

## Data Sources

All data comes from authoritative government and institutional sources:

| Source | Metrics | API |
|--------|---------|-----|
| FRED (Federal Reserve) | Most economic indicators | Free API |
| EIA (Energy Information Admin) | Gas prices, oil, energy | Free API |
| Treasury FiscalData | Federal debt, budget, spending | Free API |
| BLS (Bureau of Labor Statistics) | Employment, wages | Free API |
| Census Bureau | Demographics, housing starts | Free API |
| CDC WONDER | Mortality data | Free access |
| EPA AQS | Air quality | Free API |

See `source.md` for full documentation of each data source.

## Update Schedule

| Frequency | Metrics |
|-----------|---------|
| Daily | Treasury yields, oil prices, stock indices |
| Weekly | Jobless claims, gas prices, mortgage rates |
| Monthly | CPI, employment, retail sales, housing data |
| Quarterly | GDP, home prices, debt service ratio |
| Annual | Population, GINI, poverty rate, mortality |

## Requirements

- [Bun](https://bun.sh) runtime for automation scripts
- API keys (all free):
  - `FRED_API_KEY` - https://fred.stlouisfed.org/docs/api/api_key.html
  - `EIA_API_KEY` - https://www.eia.gov/opendata/register.php
  - `CENSUS_API_KEY` - https://api.census.gov/data/key_signup.html

## Integration with Substrate

This dataset supports other Substrate components:

- **Claims** - Back assertions with authoritative data
- **Arguments** - Reference specific metrics and trends
- **Problems** - Quantify the scale of issues (e.g., debt, inequality)
- **Solutions** - Track progress using ground-truth indicators

## Credits

**Created:** 2025-12-01
**Maintainer:** Daniel Miessler
**Sources:** Federal Reserve, BLS, Census Bureau, EIA, Treasury, CDC, EPA

---

**Mission**: Build a trusted foundation of ground-truth data to support human understanding and progress.
