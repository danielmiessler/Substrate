# US National Debt

---

## 🎯 BEST ESTIMATE

| Metric | Value | Confidence | Last Updated |
|--------|-------|------------|--------------|
| **Total gross federal debt** | **$39,660,369,665,133.47** (2026-07-21) | 99% | 2026-07-23 |
| **Debt held by the public** | **$31.87T** | 99% | 2026-07-23 |
| **Intragovernmental** | **$7.79T** | 99% | 2026-07-23 |
| **Gross debt / GDP** | **122.6%** (Q1 2026, FRED) | 95% | 2026-07-23 |
| **FY2025 gross interest expense** | **$1.22T** | 95% | 2026-07-23 |
| **FY2025 net interest** | **~$970B** (passed defense ~$917B) | 90% | 2026-07-23 |

**One-liner:** Gross debt is $39.7T, 123% of GDP, costing over $1T/yr in interest.

**Caveat:** Gross debt includes $7.8T the government owes its own trust funds; economists prefer debt held by the public (~100% of GDP).

---

## Quick Context

This dataset tracks the size, composition, cost, history, and ownership of US federal debt from 1790 to the present, entirely from primary sources (Treasury Fiscal Data API, TIC, NY Fed SOMA, FRED, CBO, SSA/DoD/OPM trustee reports). It powers https://usdebt.io. Update cadence: daily headline (Debt to the Penny), monthly holders (TIC ~6-week lag), quarterly debt/GDP.

---

## Methodology Summary

**Approach:** Deterministic API pulls with plausibility bounds, plus research-sourced context figures (each carrying its own citation) in `curated.json`; the holders composition is reconciled to an identity check (components must sum to the reported total within 1%).

**Sources:**
- Treasury Fiscal Data API — Debt to the Penny, Historical Debt Outstanding (1790→), Interest Expense, Average Interest Rates, MSPD, Gift Contributions
- Treasury TIC SLT Table 5 — Major Foreign Holders (⚠️ the legacy `Publish/mfh.txt` is FROZEN at Jan 2023 — never use it)
- NY Fed SOMA holdings API — Federal Reserve Treasury holdings
- FRED GFDEGDQ188S — debt as % of GDP (1966→)
- SSA/CMS 2026 Trustees, DoD FY2024 MRF AFR, OPM/CRS — trust fund detail
- CRS RS22331 (2026-04-22), CBO Long-Term Outlook (Mar 2025), CRFB, Econofact — context

**Definition Used:** "Total public debt outstanding" = gross federal debt (marketable + nonmarketable, public + intragovernmental), Treasury's daily to-the-penny figure.

---

## Detailed Findings

### Composition (2026-07-21)

| Component | Amount | Share |
|---|---|---|
| Debt held by the public | $31,874,795,478,548.56 | 80.4% |
| Intragovernmental holdings | $7,785,574,186,584.91 | 19.6% |

### Who holds the publicly-held debt

| Holder | Amount | As of | Source |
|---|---|---|---|
| Federal Reserve (SOMA: notes/bonds + bills + TIPS + comp + FRNs) | $4.51T | 2026-07-15 | NY Fed SOMA API |
| Foreign — total | $9.37T | May 2026 | TIC SLT Table 5 |
| — of which official institutions | $3.85T (41.1%) | May 2026 | TIC SLT Table 5 |
| Domestic private (residual) | ~$18.0T | 2026-07-21 | computed: public − Fed − foreign |

### Top foreign holders (May 2026, $B)

Japan 1,143.1 · UK 948.6 · China 659.3 · Belgium 472.0 · Cayman Is. 471.3 · Luxembourg 436.0 · Canada 435.8 · France 393.1 · Ireland 357.2 · Taiwan 306.0 · Switzerland 281.1 · Singapore 278.0 · Hong Kong 271.9 · Norway 207.3 · India 181.3 (full table: `foreign_holders.json`)

**Narrative findings:** UK passed China as #2 holder; China ($659B) is down >50% from its ~$1.32T Nov-2013 peak and holds ~1.7% of gross debt on a TIC basis (custody-adjusted estimates: $1.8–1.9T, Setser/CFR). Foreign share of publicly-held debt peaked ~49% in 2011, now ~29%.

### Interest

FY2025 gross interest $1.22T (computed from Treasury interest-expense rows at 2025-09-30); FY2025 net interest ~$970B — passed defense (~$917B) for the first time; ~18.5–19% of federal revenue. Average rate on interest-bearing debt 3.35% (2026-06-30) vs 1.6% low in late 2021.

### History & projections

Debt paid to zero once (1835). WWII peak ~119% of GDP gross (1946) → ~23% by 1974 (public) via surpluses, inflation, financial repression (IMF WP 2024/005). $1T crossed 1981-10-22; $37T 2025-08-11; $38T 2025-10-23 (~2 months — fastest non-COVID trillion). CBO (Mar 2025): public debt 100% of GDP 2025 → 107% by 2029 (record) → 118% by 2035 → 156% by 2055 (~175% alt scenario). All three rating agencies now below top grade (S&P 2011, Fitch 2023, Moody's May 2025).

---

## Source Analysis

### Why These Sources?

| Source | Strengths | Weaknesses | Weight |
|--------|-----------|------------|--------|
| Treasury Fiscal Data API | Authoritative, daily, to the penny | Gross interest ≠ budget "net interest" | High |
| TIC SLT Table 5 | Only country-level source, monthly | Custodial bias; 6-week lag | High |
| NY Fed SOMA | Weekly, exact | Excludes non-SOMA Fed holdings (minor) | High |
| FRED GFDEGDQ188S | Long quarterly series | Starts 1966 | High |
| CRS/CBO/Trustees | Authoritative context | Annual lag on trust funds | Medium-High |
| PGPF/CRFB/Econofact | Timely synthesis of primary data | Secondary | Medium |

### Key Source Conflicts

1. **Fed holdings $4.1–4.6T range across sources** — different dates and component inclusion; we compute directly from SOMA components (2026-07-15).
2. **"Net interest ~$970B" vs "gross $1.22T"** — different measures (budget net vs all-debt gross incl. intragov); we report both, labeled.
3. **MFH mfh.txt (Jan 2023) vs SLT Table 5 (May 2026)** — the legacy file is frozen; SLT Table 5 is current. Resolved in favor of SLT.
4. **China holdings TIC $659B vs custody-adjusted $1.8–1.9T** — location-of-custody vs beneficial ownership; both reported.

---

## Research Metadata

| Attribute | Value |
|-----------|-------|
| **Research Date** | 2026-07-23 |
| **Researcher** | Kai (LifeOS) — 3 research passes + direct API pulls |
| **Method** | Primary-source API pulls + sourced literature sweep; identity-check reconciliation |
| **Confidence Level** | 95% headline; 85% holder-category detail |
| **Known Gaps** | Beneficial ownership of foreign custody hubs; trust-fund figures mix end-2025 and FY2024 as-of dates; Z.1 domestic categories scaled to residual |

---

## Alternative Estimates & Why We Differ

| Estimate | Source | What It Actually Measures | Why It Differs |
|----------|--------|--------------------------|----------------|
| **~$30T "national debt"** | some commentary | Debt held by the public only | Excludes $7.8T intragovernmental |
| **~100% of GDP** | CBO framing | Publicly-held debt / GDP | Economists' preferred measure |
| **~$37.6T** | FY2025 close reports | Fiscal-year-end (2025-09-30) snapshot | Timing — debt grew since |
| **Our estimate** | This research | Gross debt, daily to-the-penny | Broadest official measure, current |

**Key insight:** most "conflicting" debt figures measure different things (gross vs public, different dates) — not disagreement about facts.

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| 2026-07-23 | Dataset created; site usdebt.io launched from it | Initial research build |

---

## Full Data

All raw pulls live beside this file with `_meta` provenance blocks: `debt_latest.json`, `debt_daily.json` (400 business days), `debt_annual.json` (1790→2025), `debt_gdp.json`, `foreign_holders.json`, `soma.json`, `interest_expense.json`, `avg_rates.json`, `mspd.json`, `gift_contributions.json`, plus `curated.json` (research-sourced context figures, each with citation). Refresh: `bun update.ts`. Research project: `research/us-national-debt-2026-07/`.
