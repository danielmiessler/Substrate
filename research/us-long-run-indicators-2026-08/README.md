# US Long-Run Indicators — consolidating the primary-sourced series

**Research / Migration Record**
**Date:** 2026-08-24
**Researcher:** Daniel Miessler / Kai (LifeOS)
**Design:** Consolidation of 51 already-verified series into one re-runnable dataset, with keyless endpoints found and probed for every publisher

---

## Question

The 51 long-run US indicator series behind https://usstats.io (economy, money, cost of living, wealth, education, health, crime, family, energy) were fetched and primary-verified incrementally across the site's builds (2026-08-03 → 2026-08-23). Where does each one actually come from, and can the whole set be regenerated from its publishers by one script with no API keys — so the dataset, not the site, is the source of record?

## Method

1. Every series' provenance (publisher, exact table/endpoint, unit, methodology breaks, historical splices) was carried over from the site's build record, where each value had been read from its primary publisher at build time.
2. Keyless access paths were probed for every publisher and adopted where they reproduce the keyed values exactly: FRED's public `fredgraph.csv` (full history; annual means match to the decimal), EIA's public MER `csv.php` (annual rows are period 13), NOAA NCEI, CDC SODA, BJS/Census workbooks. The FBI CDE API takes `FBI_CDE_API_KEY` or api.data.gov's DEMO_KEY.
3. Values no publisher serves machine-readably (NCHS marriage/divorce national PDF tables, the 1970–1999 historical splices, WHR happiness readings, NCHS mortality data-brief tables, Pew's trust series, pre-1973 EIA CO2) are checked in under `data/` with their citations, and re-verified on refresh.
4. A migration diff dispositioned all 91 site series (these 51 + the 40 in US-Societal-Health) against the pre-migration values: every difference traces to a publisher revision, a newly published period, or the one unit normalization (fertility stored per woman) — zero method changes.

## Output

`Data/US-Long-Run-Indicators/` — 51 series, one `update.ts`, docs generated from the data. See `findings/SYNTHESIS.md`.
