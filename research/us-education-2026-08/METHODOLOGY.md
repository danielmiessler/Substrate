# Methodology

## Lanes

Four parallel research lanes, one topic each: civics/government-structure knowledge · geography and history knowledge · reading habits · science/math knowledge and measured skills. Each lane was briefed with the written quality filter (README) and required to probe its endpoints and read sample values from the primary source — a candidate could not be recommended on a description alone.

## Filter riders

Two deliberate relaxations of the base filter used by the earlier societal-health study, both scoped to explicitly requested topics:

1. **Periodic cadence passes** when the span is long and points are comparable (NAEP assessments run every 2–8 years; the SPPA every ~5; these are sampling intervals, not missing data).
2. **A discontinued series ships flagged** when it is the best instrument that ever existed for a named topic (NAEP Geography ended 2018; Gallup's books-per-year last asked 2021). The chart ends where the publisher stopped.

Everything else held: primary publisher only; one instrument per series — a trend spliced across differently-worded questions or different survey programs was cut (this caught APPC's own First Amendment trend, which silently carries Freedom Forum data in its 2016/2018/2019 columns, and the NSF SEI science-knowledge composite).

## Verification

Every shipped value class was re-read by the lead directly from the publisher, independent of the lanes:

- **NAEP (all eight series):** values read from the Data Service API JSON, including the `1994R2`/`R1` sample-suffix gotcha (a bare pre-2001 year errors) and the 999.0 not-assessed sentinel. Anchor values asserted in the fetcher (e.g. reading age 9, 1971 = 207.6).
- **APPC:** all three topline PDFs fetched and the CIVI3/CIVI4 and branch-recall tables read directly; the 2022 phone (47) vs 2022 online (72) bridge confirmed on the 2023 topline.
- **WORDSUM:** computed twice from the public cumulative file — an exploratory pass and the production TypeScript reader — matching to the decimal (1974 = 5.94, 2024 = 6.33).
- **ATUS:** BLS API values re-fetched (2003 = 0.36 h/day, participation 26.3%) and checked against the arithmetic identity population-average ÷ per-participant-average = participation share, and against BLS's own published figure.
- **SPPA:** endpoints read from Exhibit 19 of the 2022 report (56.6 → 48.5, the stated 8.1-point decline checks); 2008/2012 from the 2012 report's Figure 5-1; 2017 from NEA's published 4.2-point 2017→2022 decline (52.7), consistent with the 2017 report's printed "53 percent."
- **Gallup / Pew:** every point read from Gallup's poll page and Pew's October 2025 topline PDF (which itself prints the full phone-era trend).

## Output

The re-runnable fetcher lives in the dataset: `Data/US-Societal-Health/update.ts` groups `naep`, `atus`, `citations`, plus WORDSUM inside the `gss` group. Publishers with no endpoint are checked in as citation JSON (`data/appc-branches.json`, `data/reading-citations.json`) carrying document lists, read dates, and per-value citations — the same pattern as the earlier `pew-trust.json`.
