# Sources — US National Debt Dataset

Every figure in this dataset traces to one of the sources below. Access date for all: 2026-07-23.

## Primary APIs (pulled by update.ts)

### 1. Treasury Fiscal Data — Debt to the Penny
- **URL:** `https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny`
- **Fields:** `record_date`, `tot_pub_debt_out_amt`, `debt_held_public_amt`, `intragov_hold_amt`
- **Cadence:** every federal business day, to the cent. THE authoritative headline number.
- **Files:** `debt_latest.json`, `debt_daily.json`

### 2. Treasury Fiscal Data — Historical Debt Outstanding
- **URL:** `.../v2/accounting/od/debt_outstanding` — annual fiscal-year-end values, **1790→present** (237 records)
- **File:** `debt_annual.json`

### 3. Treasury TIC — SLT Table 5 (Major Foreign Holders)
- **URL:** `https://ticdata.treasury.gov/resource-center/data-chart-center/tic/Documents/slt_table5.txt`
- **Cadence:** monthly, ~6-week lag. Billions USD; 13 month columns; Grand Total + Foreign Official memo rows.
- **⚠️ Trap:** `https://ticdata.treasury.gov/Publish/mfh.txt` looks canonical but is FROZEN at Jan 2023. Discovered 2026-07-23 when a pull returned three-year-old data; verified by direct fetch of both files.
- **Caveat:** custodial basis — holdings booked where custodied (Belgium ≈ Euroclear; see CRS RS22331 fn.6 and Setser/CFR).
- **File:** `foreign_holders.json`

### 4. NY Fed — SOMA Holdings Summary
- **URL:** `https://markets.newyorkfed.org/api/soma/summary.json`
- **Fed Treasury holdings** = `notesbonds + bills + tips + tipsInflationCompensation + frn` (excludes MBS/CMBS/agencies). Weekly as-of dates.
- **File:** `soma.json`

### 5. Treasury Fiscal Data — Interest Expense
- **URL:** `.../v2/accounting/od/interest_expense`
- **Note:** no total row — FY total = sum of all expense-group FYTD rows at a fiscal-year-end record date. This is GROSS interest (public issues + Government Account Series). FY2025: $1.216T.
- **File:** `interest_expense.json`

### 6. Treasury Fiscal Data — Average Interest Rates
- **URL:** `.../v2/accounting/od/avg_interest_rates` — "Total Interest-bearing Debt" 3.35% (2026-06-30); "Total Marketable" 3.41%.
- **File:** `avg_rates.json`

### 7. Treasury Fiscal Data — MSPD Table 1
- **URL:** `.../v1/debt/mspd/mspd_table_1` — marketable vs nonmarketable, monthly.
- **File:** `mspd.json`

### 8. FRED — GFDEGDQ188S
- **URL:** `https://api.stlouisfed.org/fred/series/observations?series_id=GFDEGDQ188S` (needs free FRED_API_KEY)
- Total public debt as % of GDP, quarterly, 1966→. Latest: 122.59% (2026 Q1).
- **File:** `debt_gdp.json`

### 9. Treasury Fiscal Data — Gift Contributions
- **URL:** `.../v2/accounting/od/gift_contributions` — monthly donations to reduce the public debt (~$67.3M cumulative since 1996).
- **File:** `gift_contributions.json`

## Research-sourced context (curated.json — each value carries its citation)

- **SSA/CMS 2026 Trustees Summary** (ssa.gov/oact/trsum) — OASI $2,338.3B, DI $223.0B, Medicare HI $255.7B + SMI $168.4B reserves (end-2025)
- **DoD FY2024 Military Retirement Fund AFR** — $1,604.7B total assets (audited)
- **CRS 98-972 / OPM** — CSRDF ~$1.1T (FY2024 est.)
- **CRS RS22331** (updated 2026-04-22) — foreign totals, official/private split, custody footnote, $282.4B interest to foreigners (2025), 49% foreign-share peak (2011)
- **Fed Z.1 L.210 / PGPF** — domestic private holder category proportions (mutual funds ~$4.5T, banks ~$1.9T, state/local ~$1.7T, pensions ~$956B, insurers ~$830M-scale)
- **CRFB / Taxpayers for Common Sense** — FY2025 net interest ~$970B vs defense ~$917B crossover
- **Econofact** — interest ~18.5-19% of revenue; ~32% of marketable debt matures <12mo; 1.6% avg-rate low (late 2021)
- **CBO Long-Term Budget Outlook 2025–2055** (March 2025, cbo.gov/publication/61270) — 100%→107% (2029)→118% (2035)→156% (2055); ~175% alt scenario (CRFB analysis)
- **IMF WP 2024/005** — decomposition of the 1946→1974 debt/GDP decline
- **Rating agencies** — S&P 2011-08-05 (AA+), Fitch 2023-08-01 (AA+), Moody's 2025-05-16 (Aa1)
- **CFR/Setser** — custody-adjusted China exposure $1.8–1.9T
- **US Census** — population ~342.4M, households ~134.79M (2025)

Full citations with URLs: `research/us-national-debt-2026-07/findings/`.
