# US Long-Run Indicators: Executive Summary

---

## 🎯 BEST ESTIMATE

| Metric | Latest | First | Source |
|--------|--------|-------|--------|
| **Unemployment Rate** | **4.3** (2026) | 3.8 (1948) | FRED UNRATE |
| **CPI Inflation** | **3.3** (2026) | 7.7 (1948) | FRED CPIAUCSL |
| **Real Median Household Income** | **83730** (2024) | 60420 (1984) | FRED MEHOINUSA672N |
| **Revolving Consumer Credit** | **1351.1** (2026) | 2 (1968) | FRED REVOLSL |
| **Median Home Sale Price** | **409600** (2026) | 18050 (1963) | FRED MSPUS |
| **Life Expectancy at Birth** | **79** (2024) | 70.8 (1970) | CDC/NCHS National Vital Statistics |
| **Violent Crime Rate** | **329.1** (2025) | 467.8 (1976) | FBI Crime Data Explorer, reported violent crime |
| **Total Fertility Rate** | **1.5995** (2024) | 2.48 (1970) | CDC/NCHS, Births: Final Data |
| **CO2 Emissions** | **4904** (2025) | 2207 (1949) | EIA Monthly Energy Review, Table 11.1 |
| **Women's Share of Payroll Jobs** | **50.04** (2026) | 31.84 (1964) | BLS Current Employment Statistics, via FRED (CES0000000010 ÷ PAYEMS) |

**One-liner:** 51 primary-sourced annual series tracing US life back as far as 1895.

**Caveat:** Partial current years are year-to-date figures, and each series' `note` names its methodology seams; read it before comparing across one.

---

## Quick Context

These are the long-run economic, social, and environmental indicators behind https://usstats.io — unemployment to fertility to CO2 — each pulled straight from the agency that publishes it (BLS, BEA, Census, the Fed, FBI, CDC/NCHS, BJS, EIA, NOAA, Gallup-derived WHR, Pew). The dataset exists so an analysis can start from verified numbers instead of aggregator copies.

## Methodology Summary

**Approach:** `update.ts` refetches every series from its primary publisher (keyless endpoints throughout); values a publisher only ships in PDFs or one-off tables are checked in under `data/` with their citations and re-verified on refresh. Every series carries a `_meta` provenance block naming the exact source and its caveats.

**Confidence:** Very High (95%+) — official government and survey publishers, read directly.

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| 2026-08-24 | Latest refresh: 51 series, 2888 values | `bun update.ts` |
| 2026-08-24 | Dataset created — the 51 usstats.io series not already in US-Societal-Health migrated here | Substrate becomes the site's single source of record |
