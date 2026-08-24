# US Long-Run Indicators

**51 long-run annual US series on the economy, money and debt, cost of living, wealth and education, health, crime, family, and energy — every value from its primary publisher, in one machine-readable place.**

Companion to [US-Societal-Health](../US-Societal-Health/) (happiness, trust, substance use, household stress) — together the two datasets are the complete source of record for the live almanac **https://usstats.io** (every row there links to a page with the full series and these sources, and https://usstats.io/data/ serves the combined data as JSON and CSV).

## Quick Start

```bash
cat SUMMARY.md                     # the answer first
cat index.json                     # what's here: name, unit, source, coverage per series
cat series/unemployment.json       # one series: { _meta: {...provenance}, data: { "1948": 3.8, ... } }
bun update.ts                      # refresh everything from the publishers (no API keys required)
bun update.ts --only fred,eia      # refresh a subset (groups: fred, payroll, cde, eia, nchs, noaa, civic, checkedin)
bun docs.ts                        # regenerate README.md + SUMMARY.md + source.md from the data
```

## Contents

| File | Description |
|------|-------------|
| `SUMMARY.md` | Answer-first summary with headline numbers (generated) |
| `index.json` | Catalog of every series: name, unit, source, coverage, fetch time |
| `series/<key>.json` | One file per series: `_meta` provenance block + `data` year→value |
| `source.md` | Every source: URL, tables read, breaks disclosed (generated) |
| `update.ts` | Re-runnable fetcher — keyless (fredgraph.csv, EIA MER csv.php, NCEI, CDC SODA, BJS/Census files; FBI CDE uses `FBI_CDE_API_KEY` or DEMO_KEY) |
| `data/` | Checked-in citation series for publishers with no machine endpoint (NCHS marriage/divorce PDF tables, WHR readings, NCHS mortality briefs, Pew trust) |
| `docs.ts` | Regenerates this README, SUMMARY.md, and source.md from the data |
| `update.log` | One line per refresh |

51 series · 2888 annual values · updated 2026-08-24

## The Series

### Economy & work

| Series | Latest | First | Unit | Coverage | Publisher |
|---|---|---|---|---|---|
| [Unemployment Rate](series/unemployment.json) | 4.3 (2026) | 3.8 (1948) | percent, annual average | 1948–2026 · 79 pts | FRED UNRATE |
| [Underemployment (U-6)](series/underemployment.json) | 8 (2026) | 10.9 (1994) | percent, annual average | 1994–2026 · 33 pts | FRED U6RATE |
| [Labor Force Participation](series/laborforce.json) | 61.8 (2026) | 58.8 (1948) | percent, annual average | 1948–2026 · 79 pts | FRED CIVPART |
| [Real GDP Growth](series/gdpGrowth.json) | 2.1 (2025) | -8.5 (1930) | percent per year | 1930–2025 · 96 pts | FRED A191RL1A225NBEA |
| [Labor Productivity](series/productivity.json) | 119.8 (2026) | 22.5 (1947) | index, 2017 = 100 | 1947–2026 · 80 pts | FRED OPHNFB |
| [CPI Inflation](series/inflation.json) | 3.3 (2026) | 7.7 (1948) | percent per year | 1948–2026 · 79 pts | FRED CPIAUCSL |
| [Real Median Household Income](series/income.json) | 83730 (2024) | 60420 (1984) | 2024 dollars | 1984–2024 · 41 pts | FRED MEHOINUSA672N |
| [Manufacturing Jobs](series/manufacturing.json) | 12596000 (2026) | 9450300 (1939) | employees, annual average | 1939–2026 · 88 pts | FRED MANEMP |
| [New Business Applications](series/business.json) | 5636988 (2025) | 2504996 (2005) | applications per year | 2005–2025 · 21 pts | FRED BABATOTALSAUS |
| [Women's Share of Payroll Jobs](series/payrollWomen.json) | 50.04 (2026) | 31.84 (1964) | percent of all nonfarm payroll jobs held by women | 1964–2026 · 63 pts | BLS Current Employment Statistics, via FRED (CES0000000010 ÷ PAYEMS) |
| [Men's Share of Payroll Jobs](series/payrollMen.json) | 49.96 (2026) | 68.16 (1964) | percent of all nonfarm payroll jobs held by men | 1964–2026 · 63 pts | BLS Current Employment Statistics, via FRED (100 − women's share) |

### Money & debt

| Series | Latest | First | Unit | Coverage | Publisher |
|---|---|---|---|---|---|
| [Revolving Consumer Credit](series/debt.json) | 1351.1 (2026) | 2 (1968) | billions of dollars, year-end | 1968–2026 · 59 pts | FRED REVOLSL |
| [Student Loan Debt](series/studentDebt.json) | 1777.1 (2024) | 521.4 (2006) | billions of dollars, year-end | 2006–2024 · 19 pts | FRED SLOAS |
| [Personal Saving Rate](series/saving.json) | 3.4 (2026) | 10.3 (1959) | percent of disposable income | 1959–2026 · 68 pts | FRED PSAVERT |
| [Household Debt Service Ratio](series/debtService.json) | 11.2 (2026) | 14.9 (2005) | percent of disposable income | 2005–2026 · 22 pts | FRED TDSP |
| [Federal Debt to GDP](series/fedDebt.json) | 122.6 (2026) | 39.7 (1966) | percent of GDP | 1966–2026 · 61 pts | FRED GFDEGDQ188S |
| [Federal Funds Rate](series/fedFunds.json) | 3.64 (2026) | 1.01 (1954) | percent, annual average | 1954–2026 · 73 pts | FRED FEDFUNDS |
| [30-Year Mortgage Rate](series/mortgage.json) | 6.35 (2026) | 7.54 (1971) | percent, annual average | 1971–2026 · 56 pts | FRED MORTGAGE30US |
| [Stock Market (NASDAQ)](series/stocks.json) | 24503 (2026) | 107 (1971) | index, annual average of daily closes | 1971–2026 · 56 pts | FRED NASDAQCOM |

### Cost of living

| Series | Latest | First | Unit | Coverage | Publisher |
|---|---|---|---|---|---|
| [Median Home Sale Price](series/homePrice.json) | 409600 (2026) | 18050 (1963) | dollars, annual average | 1963–2026 · 64 pts | FRED MSPUS |
| [Rent](series/rent.json) | 444.7 (2026) | 31 (1930) | CPI index, 1982-84 = 100 | 1930–2026 · 97 pts | FRED CUUR0000SEHA |
| [Homeownership Rate](series/homeownership.json) | 65.2 (2026) | 63 (1965) | percent of households, annual average | 1965–2026 · 62 pts | FRED RHORUSQ156N |
| [Housing Starts](series/housingStarts.json) | 1357600 (2026) | 1535300 (1959) | units per year | 1959–2026 · 68 pts | FRED HOUST |
| [Regular Gasoline Price](series/gas.json) | 3.74 (2026) | 1.3 (1990) | dollars per gallon, annual average | 1990–2026 · 37 pts | FRED GASREGW |
| [Electricity Price](series/electricity.json) | 0.194 (2026) | 0.046 (1978) | dollars per kilowatt-hour | 1978–2026 · 49 pts | FRED APU000072610 |

### Wealth, poverty & education

| Series | Latest | First | Unit | Coverage | Publisher |
|---|---|---|---|---|---|
| [Income Inequality (Gini)](series/gini.json) | 41.8 (2024) | 36.7 (1963) | Gini index, 0-100 | 1963–2024 · 62 pts | FRED SIPOVGINIUSA |
| [Top 1% Wealth Share](series/topWealth.json) | 31.6 (2026) | 22.9 (1989) | percent of household net worth | 1989–2026 · 38 pts | FRED WFRBST01134 |
| [Poverty Rate](series/poverty.json) | 12.1 (2024) | 12.8 (1989) | percent of people, all ages | 1989–2024 · 32 pts | FRED PPAAUS00000A156NCEN |
| [College Attainment](series/attainment.json) | 38.7 (2024) | 4.6 (1940) | percent of adults 25 and over | 1940–2024 · 68 pts | Census Bureau, CPS Historical Table A-2 |
| [College Tuition](series/tuition.json) | 910.8 (2026) | 59.8 (1978) | CPI index, 1982-84 = 100 | 1978–2026 · 49 pts | FRED CUSR0000SEEB |

### Health

| Series | Latest | First | Unit | Coverage | Publisher |
|---|---|---|---|---|---|
| [Life Expectancy at Birth](series/lifeExpectancy.json) | 79 (2024) | 70.8 (1970) | years at birth, both sexes | 1970–2024 · 55 pts | CDC/NCHS National Vital Statistics |
| [Health Spending](series/healthSpending.json) | 18 (2024) | 5 (1960) | percent of GDP | 1960–2024 · 29 pts | CMS National Health Expenditure Accounts, via CDC/NCHS Data Query System |
| [Suicide Rate](series/suicide.json) | 13.7 (2024) | 10.4 (2000) | age-adjusted deaths per 100,000 | 2000–2024 · 25 pts | CDC/NCHS, age-adjusted |
| [Drug Overdose Deaths](series/overdose.json) | 23.1 (2024) | 6.2 (2000) | age-adjusted deaths per 100,000 | 2000–2024 · 25 pts | CDC/NCHS, age-adjusted |
| [Adult Smoking Rate](series/smoking.json) | 9.9 (2024) | 23.3 (2000) | percent of adults, current cigarette smokers (crude) | 2000–2024 · 25 pts | CDC National Health Interview Survey |

### Crime & justice

| Series | Latest | First | Unit | Coverage | Publisher |
|---|---|---|---|---|---|
| [Violent Crime Rate](series/violent.json) | 329.1 (2025) | 467.8 (1976) | offenses per 100,000 people | 1976–2025 · 50 pts | FBI Crime Data Explorer, reported violent crime |
| [Property Crime Rate](series/property.json) | 1551.6 (2025) | 4819.5 (1976) | offenses per 100,000 people | 1976–2025 · 50 pts | FBI Crime Data Explorer, reported property crime |
| [Homicide Rate](series/homicide.json) | 4.3 (2025) | 5.8 (2000) | offenses per 100,000 people | 2000–2025 · 26 pts | FBI Crime Data Explorer, reported homicide |
| [Imprisonment Rate](series/incarceration.json) | 0.36 (2023) | 0.131 (1978) | percent of US residents in state or federal prison | 1978–2023 · 46 pts | BJS National Prisoner Statistics |

### Family & society

| Series | Latest | First | Unit | Coverage | Publisher |
|---|---|---|---|---|---|
| [Marriage Rate](series/marriage.json) | 6.1 (2023) | 10.6 (1970) | marriages per 1,000 population | 1970–2023 · 54 pts | CDC/NCHS National Vital Statistics System |
| [Divorce Rate](series/divorce.json) | 2.4 (2023) | 3.5 (1970) | divorces per 1,000 population (reporting states) | 1970–2023 · 54 pts | CDC/NCHS National Vital Statistics System |
| [Total Fertility Rate](series/fertility.json) | 1.5995 (2024) | 2.48 (1970) | births per woman (total fertility rate) | 1970–2024 · 55 pts | CDC/NCHS, Births: Final Data |
| [Births to Unmarried Mothers](series/unmarriedBirths.json) | 40.3 (2015) | 3.5 (1940) | percent of all US births | 1940–2015 · 67 pts | CDC/NCHS National Vital Statistics System |
| [Population Growth](series/popGrowth.json) | 0.54 (2025) | 0.78 (1931) | percent per year | 1931–2025 · 95 pts | FRED B230RC0A052NBEA |
| [Happiness](series/happiness.json) | 6.969 (2025) | 7.182 (2006) | Cantril ladder score (0-10) | 2006–2025 · 20 pts | World Happiness Report (Gallup World Poll) |
| [Trust in Government](series/trustGov.json) | 17 (2025) | 73 (1958) | percent trusting the federal government | 1958–2025 · 53 pts | Pew Research Center, Public Trust in Government 1958-2025 |
| [Voter Turnout](series/turnout.json) | 59.3 (2024) | 69.3 (1964) | percent of voting-age population, presidential elections | 1964–2024 · 16 pts | Census Bureau, CPS Voting and Registration, Table A-1 |

### Government, energy & environment

| Series | Latest | First | Unit | Coverage | Publisher |
|---|---|---|---|---|---|
| [Federal Deficit](series/deficit.json) | -5.8 (2025) | 0.8 (1930) | percent of GDP (negative = deficit) | 1930–2025 · 96 pts | FRED FYFSGDA188S |
| [CO2 Emissions](series/co2.json) | 4904 (2025) | 2207 (1949) | million metric tons per year | 1949–2025 · 77 pts | EIA Monthly Energy Review, Table 11.1 |
| [Renewable Share of Energy](series/renewables.json) | 9.2 (2025) | 6.1 (1949) | percent of total US energy consumption | 1949–2025 · 77 pts | EIA Monthly Energy Review, Tables 1.1 and 10.1 |
| [US Average Temperature](series/temperature.json) | 54.63 (2025) | 50.33 (1895) | degrees Fahrenheit, annual mean | 1895–2025 · 131 pts | NOAA NCEI, Climate at a Glance |

## Rules

- Primary publishers only. Aggregators are finding aids, never sources.
- No value beyond a publisher's real coverage: series start late and end early where the data does.
- Methodology breaks are named in each series' `note` (the FBI's 2000 UCR→CDE lineage seam, the Census attainment question change in 1992, partial current years), never smoothed over.
- Derived series are ratios of two published series from the same publisher (renewables = EIA renewable ÷ total primary energy), never estimates of our own.
- Fertility is stored per woman; NCHS publishes per 1,000 women (the one unit normalization, named in its note).
