# JOLTS Data Directory

This directory contains JOLTS (Job Openings and Labor Turnover Survey) data from the Bureau of Labor Statistics.

## Files

- **latest.json** - Raw API response data (JSON format)
- **latest.txt** - Transformed data in Substrate pipe-delimited format
- **permission-to-quit-index.txt** - Analysis summary of quit rate trends and interpretation

## Permission to Quit Index

The quit rate is the **most important indicator** in this data source. It measures worker agency and economic confidence:

- **High quit rate (≥2.5%)** = Workers feel empowered, have options, can leave bad jobs
- **Moderate quit rate (2.0-2.5%)** = Some worker confidence, but many may feel trapped
- **Low quit rate (<2.0%)** = Workers feel trapped, lack confidence to quit even unsatisfying jobs

## Update Schedule

Data is updated monthly, approximately 6 weeks after the reference month (around the 10th of month+2).

Example: September data is typically published around November 10.

## Data Format

Pipe-delimited format:
```
RECORD ID | SERIES ID | SERIES NAME | DATE | PERIOD NAME | VALUE | FREQUENCY | PRIORITY | INTERPRETATION | DESCRIPTION
```

## Series IDs

1. **JTS00000000QUR** - Quit Rate (Priority 1 - MOST CRITICAL)
2. **JTS00000000JOR** - Job Openings Rate (Priority 2)
3. **JTS00000000HIR** - Hire Rate (Priority 3)
4. **JTS00000000LDR** - Layoff/Discharge Rate (Priority 4)
5. **JTS00000000TSR** - Total Separations Rate (Priority 5)

All series are seasonally adjusted, total nonfarm.
