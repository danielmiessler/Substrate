# Sources

The authoritative list, with URLs, tables, and columns, is the dataset's [`source.md`](../../Data/US-Societal-Health/source.md); every series' `_meta` block repeats its own source URL and method.

## Publishers used

| Publisher | Series | Path |
|---|---|---|
| NORC, General Social Survey | 21 items (happiness, outlook, social trust, confidence in 13 institutions) | public cumulative Stata file, read directly |
| Gallup | confidence in 15 institutions, trust in mass media, satisfaction with the country, Cantril current/future life | published trend tables in page HTML |
| University of Michigan, Surveys of Consumers | better off than a year ago; expect to be better off next year | `mine.php` CSV export |
| SAMHSA, NSDUH | marijuana past year / past month | annual detailed-tables zips (HTML tables) |
| University of Michigan, Monitoring the Future (via CDC/NCHS DQS) | 12th-grade marijuana, alcohol, binge drinking, cigarettes | Socrata API |
| NIAAA | per-capita ethanol consumption | Surveillance Report PDF, Table 1 |
| CDC/NCHS (Health, United States; Data Query System; NVSS) | prescription-cost barrier, suicide by age (5 groups), infant mortality | Socrata API |
| Census Bureau | child poverty (CPS ASEC), uninsured (ACS HIC-4) | xlsx |
| Federal Reserve Board via FRED; BLS via FRED | credit card delinquency, prime-age employment, population | `fredgraph.csv` |
| Federal Reserve Bank of New York | serious credit card delinquency, consumer bankruptcies | Household Debt and Credit Report xlsx |
| USDA FNS; USDA ERS | SNAP participation; food insecurity | xlsx |
| NHTSA / FHWA | traffic deaths per 100M VMT | xlsx |
| BLS | union membership | public API v2 |

## Paths that were probed and did not work (so the next pass need not repeat them)

monitoringthefuture.org (Cloudflare 403 to every fetcher) · www.cdc.gov, wonder.cdc.gov, stacks.cdc.gov (403) · electionstudies.org (403) · ssa.gov (403) · huduser.gov (bot challenge) · bls.gov HTML tables (403; the API works) · gssdataexplorer.norc.org (login-gated export) · WHR per-year panel files (removed; only the 3-year-average workbook remains) · Census API without a key.
