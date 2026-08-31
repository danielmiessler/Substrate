# US Education Efficacy — what Americans actually know

**Research Study**
**Date:** 2026-08-31
**Researcher:** Daniel Miessler / Kai (LifeOS)
**Research Design:** Four-lane source discovery with a written quality filter, endpoint probing, and independent re-verification of every shipped value

---

## Research Question

Which long-run, national, primary-sourced US series measure education in terms of **actual efficacy** — knowledge of geography, the structure of government, and basic science/history/math, plus reading habits (share who read books, books per year, time spent reading) — as opposed to inputs like spending, attainment, or tuition?

---

## Methodology

Four parallel research lanes (civics/government-structure knowledge · geography and history knowledge · reading habits · science/math knowledge and measured skills) each evaluated candidates against one written filter:

1. primary publisher only (the agency or survey organization; aggregators are finding aids),
2. one instrument's repeated item — never stitched from differently-worded questions or one-off polls,
3. long coverage (≥15 years preferred; honest narrow misses reported),
4. annual preferred; periodic acceptable when the span is long and points comparable,
5. recency preferred; a discontinued series reportable when it is the best instrument for a named topic, flagged,
6. machine-fetchable, or a published table/PDF citable by URL, with every methodology break named.

Every shipped value was re-verified by the lead directly against the publisher (API JSON read, PDF table read, or recomputed from public microdata). Full detail: [METHODOLOGY.md](METHODOLOGY.md). Every candidate's disposition: [findings/candidates.md](findings/candidates.md).

---

## Answer

Sixteen series from seven primary programs ship (dataset: [`Data/US-Societal-Health/`](../../Data/US-Societal-Health/SUMMARY.md)):

- **Student knowledge (NCES NAEP, API-fetched):** Civics grade 8 (1998–2022) · U.S. History grade 8 (1994–2022) · Geography grade 8 (1994–2018, assessment discontinued by NAGB in 2019) · Science grade 8 (2009–2024) · Long-Term Trend reading and math at ages 9 and 13 (1971/1978–2023) — the population-representative skills anchors.
- **Adult civic knowledge (Annenberg Public Policy Center):** share who can name all three branches of government, phone era 2006–2022 and online era 2022–2025, kept as two series because APPC's own parallel 2022 run measured a ~25-point mode effect.
- **Adult verbal knowledge (NORC GSS):** WORDSUM, the unchanged 10-word vocabulary test, 1974–2024 — the longest-running repeated knowledge measure of US adults.
- **Reading (BLS ATUS · NEA/Census SPPA · Gallup · Pew):** minutes/day reading for personal interest and share reading on an average day (annual 2003–2025) · share who read any book (2002–2022) · mean books per year (1990–2021, dormant) · share who read a book in any format (2011–2025).

The through-line: nearly every line points down — reading time down ~40% since 2003, book reading down 8 points since 2002, every NAEP subject at or below its mid-1990s level after COVID — while the three-branches item and WORDSUM tick up.

## Notable cuts

The GSS factual science battery (EARTHSUN, EVOLVED, BIGBANG, …) covers only 2006–2018 — the longer NSF Science & Engineering Indicators charts splice three different instruments, which fails the one-instrument rule. PIAAC has three points and a 2023 administration break. The National Geographic–Roper geography surveys changed instrument and population in 2016. Freedom Forum's First Amendment survey is dominated by APPC's identical live item. Full list with reasons: [findings/candidates.md](findings/candidates.md).
