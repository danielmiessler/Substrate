# Methodology

## The filter

A candidate shipped only if all six held:

| # | Rule | Why |
|---|------|-----|
| 1 | Primary publisher only | An aggregator's number can be stale, re-based, or mis-transcribed; the agency's own table is the thing to cite |
| 2 | Annual or biennial, national | The dataset charts US history year by year |
| 3 | ≥ 15 years of coverage | Anything shorter is a snapshot, not a series |
| 4 | Latest value ≤ ~2 years old | A series that stops in 2019 on a 2026 site misleads by omission (one explicit, flagged exception: the NHIS prescription-cost item, which the publisher discontinued in 2019 and which is shown ending there) |
| 5 | Machine-fetchable, or citable by URL + table | Re-runnable is the point; checked-in-with-citation is allowed only when the publisher has no endpoint |
| 6 | Breaks named | Survey redesigns (GSS 2021, NSDUH 2021, NHIS 2019, Michigan 2017–2024, Gallup 2018–2020) are disclosed in every affected series' note |

## The lanes

| Lane | Scope | Candidates evaluated |
|---|---|---|
| Substance use | NSDUH, Monitoring the Future, NIAAA, BRFSS, NCHS alcohol deaths | 10 |
| Health access & mortality by age | NHIS cost barriers, uninsured, suicide by age, firearm, obesity, infant mortality, food insecurity, homelessness, traffic deaths, teen births, child poverty | 14 |
| Trust in institutions | Gallup confidence (16 items), Gallup media trust, GSS confidence (13 items), ANES/Pew trust in government, Gallup honesty/ethics, Pew scientists | 6 families |
| Happiness & optimism | GSS happiness/life/finances/mobility items, Michigan expectations, Gallup satisfaction and Cantril ladder, WHR, Pew/Gallup next-generation items | 10 families |
| Household financial health | delinquency, bankruptcy, SHED, SNAP, SSDI, prime-age employment, union membership, earnings, minimum wage, infant mortality, traffic deaths, teen births, child poverty, dropout, NAEP, volunteering, household size, marriage age, foreign-born | 20 |

Each lane was required to fetch its endpoints (not describe them) and read at least three values per candidate from the primary source.

## Verification

- Every shipped series: at least one value read by the lead directly from the publisher's page, file, or API and compared to the script's output.
- GSS: the weighted percentages were computed twice by independent code (pyreadstat in Python during research; the dataset's own TypeScript `.dta` reader in production) and agree to the decimal on every item checked (e.g. confidence in the press 1973→2024; very happy 2021 and 2024). NORC's published figures for "very happy" (≈31% in 2018, ≈19% in 2021) match.
- Splices (suicide by age across two NCHS tables; infant mortality across three) carry a machine-checked overlap year; the script fails if the overlap disagrees.
- Every series file carries plausibility bounds enforced at write time.

## What the script does that a human would otherwise do

`update.ts` downloads the publisher's file (PDF, xlsx, zip of HTML tables, Stata microdata, Socrata API, CSV), parses the exact table and column named in each series' `_meta.method`, and writes the series. The only arithmetic anywhere is: annual means of monthly/quarterly readings (FRED, Gallup satisfaction, NY Fed), a ratio of two published totals (SNAP ÷ population), and weighted percentages from GSS microdata with NORC's weight. Nothing is interpolated, smoothed, or seasonally adjusted by us.
