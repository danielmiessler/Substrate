# US Societal Health — finding the measurable signals

**Research Study**
**Date:** 2026-08-21
**Researcher:** Daniel Miessler / Kai (LifeOS)
**Research Design:** Multi-lane source discovery with a written quality filter, endpoint probing, independent re-verification, and a re-runnable fetcher as the output

---

## Research Question

Which annual, national, long-run US indicators of **societal health** — happiness and optimism, trust in people and institutions, substance use, access to care and mortality by age, and household financial stress — have data good enough to chart next to the economic series, and where exactly does each one come from?

---

## Methodology

Five parallel research lanes (substance use · health access and mortality by age · trust in institutions · happiness and optimism · household financial health) each evaluated candidates against one written filter:

1. primary publisher only (the agency or survey organization; aggregators are finding aids),
2. annual (or biennial) national US series,
3. at least 15 years of coverage,
4. latest value no more than ~2 years old,
5. machine-fetchable, or a published table citable by URL and table number,
6. every methodology break named.

Each lane had to fetch its endpoints and read sample values. Every series that shipped was then re-verified by the lead against the publisher (a value read directly from the page, file, or API), and the GSS computations were reproduced independently by two different code paths (a Python/pyreadstat pass and the TypeScript reader that now lives in the dataset) and matched to the decimal. Full detail: [METHODOLOGY.md](METHODOLOGY.md). Every candidate's disposition: [findings/candidates.md](findings/candidates.md).

---

## Primary Finding

66 series passed and now live in [`Data/US-Societal-Health/`](../../Data/US-Societal-Health/), re-runnable from one script. What they show, in one line each, is in [findings/SYNTHESIS.md](findings/SYNTHESIS.md). The short version: the happiness, trust, and optimism series are at or near the lowest points in their histories (several 50-year series), substance-use measures are mixed (teen use at record lows, adult marijuana use at record highs, per-capita alcohol roughly flat for 40 years), and the financial-stress gauges show serious credit-card delinquency back near its 2010 peak while prime-age employment is near its 2000 high.

---

## What did not make it

Higher-education confidence (too few polls), illicit-drug-use prevalence (two survey redesigns), binge drinking (state-median, two breaks), firearm deaths and alcohol-induced deaths (no reachable machine path from CDC), obesity (NHANES reports multi-year windows), homelessness (HUD files behind a bot challenge), and a handful of short series. Each is listed with its reason in [findings/candidates.md](findings/candidates.md) so the next pass can start where this one stopped.

---

## Resulting dataset

→ [`Data/US-Societal-Health/`](../../Data/US-Societal-Health/) — `SUMMARY.md`, `README.md`, `source.md`, `update.ts`, `series/*.json`, `index.json`.
