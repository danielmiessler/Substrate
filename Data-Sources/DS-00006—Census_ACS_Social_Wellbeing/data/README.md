# ACS Social Wellbeing Data Directory

This directory contains data fetched from the US Census Bureau American Community Survey (ACS) API.

## Data Files

### Latest Data
- `latest.json` - Most recent ACS 1-year estimates (all variable groups combined)

### Annual Data Files
Files are named using the pattern: `{year}-{estimate_type}-{variable_group}-{geography_level}.{format}`

Example filenames:
- `2022-acs1-household-states.json` - 2022 1-year household composition data for all states
- `2022-acs1-commute-states.txt` - 2022 1-year commute data in pipe-delimited format
- `2018_2022-acs5-digital-states.json` - 2018-2022 5-year digital access data

### Variable Groups

**household** - Household composition and social isolation indicators
- B11001_001E/M: Total households
- B11001_008E/M: 1-person households (living alone)
- B11002_003E/M: Family households
- B11002_010E/M: Nonfamily households

**commute** - Commuting and time poverty indicators
- B08303_001E/M: Mean travel time to work
- B08303_013E/M: Workers with 60+ minute commute
- B08134_011E/M: Long commute, low income workers

**digital** - Digital divide and internet access
- B28002_013E/M: No internet access at home
- B28002_004E/M: Broadband internet subscription
- B28003_005E/M: No computer in household

**economic** - Economic security indicators
- B19013_001E/M: Median household income
- B25064_001E/M: Median gross rent
- B23025_005E/M: Unemployed population
- B17001_002E/M: Population below poverty line

### Variable Naming Convention

All ACS variables follow this pattern: `{table}_{sequence}{type}`

- **table**: Table ID (e.g., B11001)
- **sequence**: Line number within table (e.g., 001, 008)
- **type**:
  - `E` = Estimate (point estimate)
  - `M` = Margin of Error (90% confidence interval)

Example: `B11001_008E` = Estimate of 1-person households from Table B11001, line 008

## Data Formats

### JSON Format
Raw data from Census API in JSON array format.

### Pipe-Delimited Format (.txt)
Substrate-standard format with structure:
```
RECORD ID | GEOGRAPHY | NAME | VARIABLE | ESTIMATE | MARGIN_OF_ERROR | YEAR | ESTIMATE_TYPE
```

## Update Process

Data is updated by running the `update.ts` script:

```bash
# Set API key (required)
export CENSUS_API_KEY=your_api_key_here

# Run update
./update.ts
```

### Rate Limits
- 500 requests per day per API key
- Script includes automatic rate limiting (2 second delays between requests)
- Progress logged to `update.log`

## Data Quality Notes

### Margins of Error (MOE)
All estimates include margins of error (90% confidence intervals).

**Statistical testing:**
- If MOEs overlap, difference may not be statistically significant
- Use Census Bureau's statistical testing tool: https://www.census.gov/programs-surveys/acs/guidance/statistical-testing-tool.html

### Estimate Types

**1-Year Estimates:**
- Most current data
- Available for geographies with 65,000+ population
- Higher sampling error (larger MOEs)
- Use for large areas and recent snapshots

**5-Year Estimates:**
- More reliable (smaller MOEs)
- Available for all geographic levels (including census tracts)
- Represents average over 5-year period
- Use for small areas and stable characteristics

**Caution:** Do not compare overlapping multi-year estimates (e.g., 2017-2021 vs 2018-2022 share 4 years of data)

## Data Documentation

Full documentation available in `../source.md` including:
- Methodology and sampling
- Known limitations and biases
- Recommended use cases
- Citation formats

## API Documentation

Census Bureau API documentation:
- https://www.census.gov/data/developers/data-sets/acs-1year.html
- https://www.census.gov/data/developers/guidance/api-user-guide.html

Variable definitions:
- https://www.census.gov/programs-surveys/acs/data/data-tables/table-ids-explained.html
