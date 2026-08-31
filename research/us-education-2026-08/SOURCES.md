# Sources

Primary publishers only; every shipped value read from one of these.

## Shipped

| Program | Publisher | What | Fetch path |
|---|---|---|---|
| NAEP main assessments (civics, U.S. history, geography, science) | NCES | grade-8 average scale scores | NAEP Data Service API — `nationsreportcard.gov/Dataservice/GetAdhocData.aspx` (subscales CIVRP/HRPCM/GRPCM/SRPUV; pre-2001 years need the `R2` sample suffix; 999 = sentinel) |
| NAEP Long-Term Trend (reading, math; ages 9, 13) | NCES | average LTT scale scores since 1971/1978 | same API with `Program=LTT`, subjects RED/MAT, subscales RRPSCT/MRPSCT, cohorts 1/2; years ≤1999 need `R1` |
| Annenberg Civics Knowledge Survey | Annenberg Public Policy Center | % naming all three branches of government | topline PDFs (Cloudflare-guarded; transcribed with citation): 2022 appendix CIVI3/CIVI4 table, 2023 topline, 2025 topline |
| WORDSUM vocabulary test | NORC General Social Survey | weighted mean correct (0–10), 1974–2024 | computed from the public cumulative Stata file (weight WTSSPS), same reader as the dataset's other GSS series |
| American Time Use Survey | BLS | reading for personal interest: hours/day (stored as minutes) and % participating | BLS API v2, series `TUU10101AA01006315`, `TUU30105AA01006315` |
| Survey of Public Participation in the Arts | NEA with the Census Bureau | % of adults who read any book, 2002–2022 | NEA report PDFs (2022 comprehensive report Exhibit 19; 2012 report Figure 5-1; 2017 full report) |
| Books read per year | Gallup | mean books, 1990–2021 | trend on news.gallup.com poll page 388541 |
| Read a book in any format | Pew Research Center | % of adults, 2011–2025 | October 2025 topline PDF (phone trend table + ATP reading) |

## Consulted and cut

- GSS science-knowledge battery (NORC) — 2006–2018 only; the battery was dropped after 2018
- NSF Science & Engineering Indicators factual-knowledge composite (ncses.nsf.gov) — splices NSF phone surveys, Michigan SCA, and GSS
- PIAAC adult literacy/numeracy (NCES/OECD) — 2012/2017/2023 only, 2023 administration break
- Freedom Forum State of the First Amendment (1997–2019) — discontinued; APPC runs the identical item live
- National Geographic–Roper geographic literacy (2002/2006/2016) — 2016 wave is a different CFR instrument and population
- Pew News IQ / civic-knowledge batteries — items rotate; no repeated instrument
- Gallup history/geography quiz items — episodic one-off re-asks, latest ~2003
- YouGov book-reading polls — instrument too young
