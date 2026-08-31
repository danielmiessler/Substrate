# Candidate dispositions — every candidate, ship or cut with reason

**SHIP** = in `Data/US-Societal-Health/` and on usstats.io. **CUT** = fails the filter, reason numbered against it (1 primary · 2 one-instrument · 3 span · 4 cadence · 5 recency · 6 fetchability). Riders: periodic cadence passes on long spans; discontinued ships flagged for explicitly requested topics.

## Government structure / civics

| Candidate | Disposition |
|---|---|
| APPC three-branches item (2006–2025) | **SHIP ×2** — `appcBranchesWeb` (2022–2025) + `appcBranchesPhone` (2006–2022). Identical wording across eras; APPC's parallel 2022 run (47 phone / 72 online) measures a ~25-pt mode effect and APPC refuses to chart one trend, so two series, never joined. |
| NAEP Civics grade 8 (1998–2022) | **SHIP** — `naepCivics`. API-verified; next point summer 2027. |
| APPC First Amendment recall trend | **CUT (2)** — the 2022 appendix footnote reveals its 2016/2018/2019 columns are Freedom Forum SOFA data: stitched across two programs. |
| Freedom Forum State of the First Amendment (1997–2019) | **CUT (5, dominated)** — discontinued 2019; APPC runs the identical item live. Held as a reserve for pre-2006 depth. |
| Pew civic-knowledge batteries / News IQ | **CUT (2)** — items rotate per wave; no repeated instrument ≥3 points. |
| Gallup / AP-NORC civics items | **CUT (2, 4)** — approval/trust items are long-run, knowledge items are one-offs. |

## Geography & history

| Candidate | Disposition |
|---|---|
| NAEP U.S. History grade 8 (1994–2022) | **SHIP** — `naepHistory`. 2014 peak 267.5 → 2022 below the 1994 level; next 2030. |
| NAEP Geography grade 8 (1994–2018) | **SHIP, discontinued-flagged** — `naepGeography`. NAGB cut geography from the schedule in July 2019; the only long-run national geography-knowledge instrument ends at 2018. |
| National Geographic–Roper geographic literacy (2002/2006/2016) | **CUT (2, 3, 5)** — 2016 wave was a different CFR instrument on a different population (college 18–26); only two comparable points; nothing since. |
| Gallup history/geography quizzes (1977/1988/2000/2003) | **CUT (2, 4, 5)** — episodic re-asks, different populations. |
| Pew history-knowledge items | **CUT (2)** — opportunistic re-asks of current-affairs items. |

## Reading

| Candidate | Disposition |
|---|---|
| BLS ATUS reading for personal interest (2003–2025) | **SHIP ×2** — `readingTime` (avg minutes/day, stored ×60 from BLS hours) + `readingParticipation` (% reading on an average day). Annual, API, no wording drift (diary coding). 2020 unpublished (COVID) — a real hole. |
| NEA/Census SPPA "read any book" (2002–2022) | **SHIP** — `readAnyBook`. NEA's own comparable trend; 2012 redesign named; next wave ~2027. |
| Gallup books read per year (1990–2021) | **SHIP, dormant-flagged** — `booksPerYear`. Only quantity series with a 30-year span; last asked Dec 2021. |
| Pew read-a-book-any-format (2011–2025) | **SHIP** — `pewReadBook`. 14-year span is a narrow miss, taken under the rider; phone→web mode change named (level unchanged, 75/75); 2012's two readings annualized by mean. |
| GSS book-reading items | **CUT (none exists)** — GSS reading items cover newspapers, not books. |
| YouGov book polls (2023–) | **CUT (3)** — instrument too young. |
| AP-NORC | **CUT (2)** — nothing repeated found. |

## Science / math / measured skills

| Candidate | Disposition |
|---|---|
| NAEP LTT reading, ages 9 & 13 (1971–2023) | **SHIP ×2** — `lttReading9`, `lttReading13`. Same instrument since 1971 by design; 2004 R1→R3 format seam named; age 17 cut (last assessed 2012). |
| NAEP LTT math, ages 9 & 13 (1978–2023) | **SHIP ×2** — `lttMath9`, `lttMath13`. API serves 1978+ (1973 is extrapolated, not served). |
| GSS WORDSUM vocabulary test (1974–2024) | **SHIP** — `wordsum`. 25 waves, unchanged words, still administered; 2021+ web-mode seam named. |
| NAEP main science grade 8 (2009–2024) | **SHIP** — `naepScience`. Thin (5 points) but alive, single 2009-framework instrument, latest 2024. |
| GSS factual science battery (EARTHSUN, EVOLVED, BIGBANG, RADIOACT, ELECTRON, CONDRIFT, VIRUSES, LASERS, BOYORGRL, HOTCORE, ODDS1/2) | **CUT (3, 5)** — read from the microdata: 2006–2018 only (VIRUSES once more in 2021), discontinued; 12-year span. The longer NSF SEI charts splice NSF phone surveys (1988–2001), Michigan SCA (2004), and GSS — fails rule 2. Also: SEI counts don't-know as incorrect; a microdata recomputation must match that choice or diverge by a few points. |
| NSF SEI factual-knowledge composite | **CUT (2, 5)** — stitched across three instruments; frozen at 2018. |
| PIAAC adult literacy/numeracy (2012/2017/2023) | **CUT (3, 2)** — three points; NCES cautions the 2023 tablet-only administration and rescoring against earlier rounds. |
| SAT/ACT scores | **CUT (2-adjacent)** — self-selected test-taker composition confounds the trend; NAEP LTT is population-representative and strictly better. |

## Count

16 series shipped from 7 primary programs (NCES-NAEP main, NCES-NAEP LTT, APPC, NORC-GSS, BLS-ATUS, NEA/Census-SPPA, Gallup, Pew — the ask's "eight or sixteen really high-quality sources," met on quality without padding). 13 rows on the site (LTT ages and APPC eras render as paired lines).
