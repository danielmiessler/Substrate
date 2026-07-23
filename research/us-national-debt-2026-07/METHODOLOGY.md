# Methodology

## Rules
1. **No figure without a source + as-of date.** Research-sourced context values live in the dataset's `curated.json`, each carrying its own citation; API values carry `_meta` provenance blocks.
2. **Primary beats secondary.** Where a tracker and a primary source disagreed, the primary won; where two primaries measured different things (gross vs net interest; custody vs ownership), both were kept and labeled.
3. **Plausibility bounds in code.** `update.ts` hard-fails on implausible values (e.g. foreign total outside $7–13T) instead of shipping them.
4. **Identity reconciliation.** The holders composition must satisfy: gross = intragov + Fed + foreign + domestic-private, within 1% (domestic private is the residual; Z.1 category shares are scaled to it and labeled as such).
5. **Conflicts documented, not averaged.** See "Key Source Conflicts" in `US-National-Debt.md`.

## Known limitations
- Foreign country figures are custodial-location, not beneficial-ownership (Belgium ≈ Euroclear; Setser/CFR custody-adjusted China estimate $1.8–1.9T).
- Trust fund figures mix as-of dates (SSA/CMS end-2025; MRF/CSRDF FY2024) — each treemap cell on usdebt.io states its own date.
- Domestic private category split is proportional (Z.1/PGPF shares scaled to the current residual), not a same-day measurement.
- Milestone crossing dates before 2024 are linear interpolations between official records except where a sourced exact date exists ($1T 1981-10-22, $37T 2025-08-11, $38T 2025-10-23); interpolated dates are marked "≈".

## Incident log
- **2026-07-23 — stale-source catch:** first foreign-holders pull used `Publish/mfh.txt`, which silently serves Jan-2023 data in 2026. Caught by as-of-date review before anything shipped; source switched to SLT Table 5 and a warning encoded in `update.ts` and `source.md`.
- **2026-07-23 — cross-vendor audit corrections:** an independent GPT-5.6 Sol adversarial audit re-fetched all primaries (exact matches on every headline figure, 13/17 spot-checks passed) and refuted four narrative-layer items, all fixed same day: (1) interest/defense crossover is FY2024, not FY2025 — the cited CRFB piece itself says so (`findings/history-and-outlook.md` §3 recorded the wrong year; retained there as-found); (2) a gift-program comparison ("covers ~20 seconds of borrowing") was off ~37×, corrected to ~12 minutes; (3) 1946→1974 prose conflated gross (→~31%) with publicly-held (→~23%) debt/GDP; (4) one homepage footer link still pointed at the frozen mfh.txt.
