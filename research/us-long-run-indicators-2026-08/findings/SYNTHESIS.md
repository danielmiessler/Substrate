# Synthesis

- All 51 series regenerate from primary publishers with **zero API keys** (FBI CDE optionally keyed; DEMO_KEY suffices). First full run: 51/51 written, 0 errors.
- The keyless FRED `fredgraph.csv` path reproduces the keyed API's annual aggregates exactly, with full history (UNRATE 1948→, MANEMP 1939→, CPI 1946→); it also serves the payroll gender pair the site charts as a crossover.
- The public EIA MER CSV begins at 1973; CO2 1949–1972 is checked in from the EIA API's merged Annual Energy Review history — the one keyless coverage gap found, closed with the checked-in-extension pattern.
- Fresh CDE fetches surfaced genuine publisher revisions (violent 2024: 363.9→363.6; property 2024: 1769→1767.8) and a newly complete 2025 (violent 329.1, property 1551.6 — both sharp declines), which the migration adopted and named.
- With this dataset beside US-Societal-Health, the full 91-series usstats.io almanac is regenerable from Substrate by two scripts, and the site is a pure consumer.
