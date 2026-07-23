# US National Debt Dataset

The size, composition, cost, history, and ownership of US federal debt — 1790 to present, entirely from primary sources. Powers **https://usdebt.io**.

## Files

| File | What it is |
|------|------------|
| `SUMMARY.md` | Answer-first summary (start here) |
| `US-National-Debt.md` | Full dataset doc: findings, source analysis, alternatives, changelog |
| `source.md` | Per-source detail: endpoints, fields, caveats |
| `RESOURCES.md` | Every source URL |
| `update.ts` | Regenerates all JSON files (`bun update.ts`); appends to `update.log` |
| `curated.json` | Research-sourced context figures, each with its own citation |
| `debt_latest.json` / `debt_daily.json` | Debt to the Penny — latest + ~400 business days |
| `debt_annual.json` | Annual debt outstanding, 1790→ |
| `debt_gdp.json` | Debt as % of GDP, quarterly (FRED GFDEGDQ188S) |
| `foreign_holders.json` | TIC SLT Table 5 — country holdings, 13 months |
| `soma.json` | NY Fed SOMA — Federal Reserve holdings |
| `interest_expense.json` / `avg_rates.json` | Interest cost + average rates |
| `mspd.json` | Marketable vs nonmarketable breakdown |
| `gift_contributions.json` | Donations to reduce the debt (yes, really) |

## Headline (2026-07-23)

Gross debt **$39.66T** (2026-07-21) · public **$31.87T** / intragov **$7.79T** · **122.6% of GDP** · FY2025 gross interest **$1.22T** · Japan #1 foreign holder, UK #2, China #3 at $659B (~1.7% of gross).

## Gotchas

- The legacy TIC file `ticdata.treasury.gov/Publish/mfh.txt` is **frozen at Jan 2023** — `update.ts` uses SLT Table 5 (current, monthly).
- Treasury's interest-expense endpoint reports **gross** interest (incl. intragovernmental); budget "net interest" (~$970B FY2025) is a different, smaller measure.
- Foreign country figures record **custody location, not beneficial ownership** (Belgium ≈ Euroclear).

Research provenance: `research/us-national-debt-2026-07/`.
