# Methodology

- **Primary publishers only.** Aggregators were used as finding aids during the original site builds; every shipped value was read from the agency or survey that publishes it.
- **Keyless reproducibility.** Every endpoint in `update.ts` was probed to reproduce the previously keyed values exactly before adoption (FRED fredgraph.csv vs the FRED API; EIA MER csv.php period-13 rows vs the EIA API; CDE monthly-rate sums vs the frozen site values).
- **Checked-in-with-citation** is the fallback only where no machine endpoint exists, following the dataset convention established by US-Societal-Health (`data/pew-trust.json` precedent). Each carries source URLs and a read date.
- **Honest coverage.** No backfill, no interpolation, no partial-year annualization (CDE years require twelve non-zero months; FRED sum-series skip partial years; partial current years are flagged `partialYear`/`partialThrough`).
- **Stitches are machine-verified** where two publications overlap (BJS imprisonment: 8 overlap years must agree within 2 per 100k or the run fails).
- **Migration parity.** The consolidation was gated on a full diff against the site's pre-migration values, dispositioning every series; the only non-publisher change is fertility's unit normalization (stored per woman; NCHS publishes per 1,000 women), named in its note.
