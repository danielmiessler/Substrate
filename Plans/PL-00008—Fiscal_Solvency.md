# PL-00008 — Fiscal Solvency

**Author:** Daniel Miessler · **Created:** 2026-07-24 · **Status:** Draft v1 · **Type:** Substrate Plan
**Part of:** [The US Program](./README.md) · **Data:** [`Data/US-National-Debt`](../Data/US-National-Debt/)

> **The one-liner:** Interest hits $1 trillion this year and $2.1 trillion by 2036. Everything else in this program is unaffordable if this one fails.

---

# SCOPE

How the United States pays for the rest of this program without a debt spiral. This plan does not
propose austerity; it proposes that three of the other plans in this program are the fiscal plan.

---

# WHERE WE ARE

| Metric | Value | Source |
|---|---|---|
| Federal debt held by the public | **101% of GDP** (2026) → **120%** by 2036 | [CBO](https://www.cbo.gov/publication/61882) |
| Previous record | 106% of GDP, 1946 | [CBO](https://www.cbo.gov/publication/61882) |
| Net interest, 2026 | **$1.0 trillion — 3.3% of GDP**, eclipsing the 1991 record | [CBO](https://www.cbo.gov/publication/61882) |
| Net interest, 2036 | **~$2.1 trillion** | [CRFB](https://www.crfb.org/blogs/net-interest-costs-will-double-again-over-next-decade) |
| FY2026 deficit | **$1.9 trillion — 5.8% of GDP** | [CBO](https://www.cbo.gov/publication/61882) |
| Federal revenue, FY2025 | $5.2 trillion | [CBO](https://www.cbo.gov/publication/61953) |
| Corporate income tax receipts, FY2025 | $452.1B, down 14.7% YoY | [CBO](https://www.cbo.gov/publication/61953) |
| US nominal GDP, 2025 | $30.76 trillion | [BEA](https://www.bea.gov/news/2026/gdp-second-estimate-4th-quarter-and-year-2025) |

**The structural fact:** interest is now the fastest-growing line in the budget and it buys nothing.
$1 trillion a year purchases no road, no grid, no student, no cure. By 2036 it is $2.1 trillion,
which is more than four times the entire annual cost of every other plan in this program combined.

---

# CHALLENGES

1. **Interest compounds and crowds out.** Every year of delay makes the same fix cost more.
2. **Revenue and spending are both politically frozen**, so the historical playbook — raise one, cut
   the other — has not run in thirty years.
3. **The healthcare line is the deficit.** Federal health spending is the largest driver of the
   long-run projection, which means
   [PL-00004](./PL-00004—Healthcare_That_Costs_What_Its_Worth.md) is a fiscal plan whether or not
   anyone calls it one.
4. **Growth is the only painless lever**, and it is the one nobody controls directly.

---

# MISSION

1. Stabilize debt held by the public at or below **100% of GDP** rather than 120%.
2. Hold net interest under **3% of GDP**.
3. Fund the entire program in this repository **without a household tax increase**.

---

# STRATEGIES

### S1 — Treat healthcare as the fiscal plan

Getting health spending from 17.2% to 12% of GDP releases **~$1.6 trillion a year** economy-wide
([PL-00004](./PL-00004—Healthcare_That_Costs_What_Its_Worth.md)). The federal share of that is the
single largest deficit reduction available anywhere, and it comes from paying less per unit rather
than from covering fewer people.

**Target: federal health spending growing slower than GDP by 2030.**

### S2 — Collect what is already owed

$186B a year in improper payments ([PL-00007](./PL-00007—A_Government_That_Runs_On_Understanding.md))
and $233–521B in estimated annual fraud losses. **Target: ~$150B/yr recovered by 2036.** This is not
a tax and not a cut; it is the government paying the right people the right amount.

### S3 — Restore the corporate base

Corporate receipts fell 14.7% in FY2025 to $452.1B, against $264B in annual corporate tax
expenditures and hundreds of billions in shifted profit
([PR-00004](../Problems/PR-00004—Corporate_Tax_Base_Erosion.md)). **Target: +$300B/yr**, from
[FS-00002](../Funding-Sources/FS-00002—Corporate_Tax_Expenditure_Repeal.md) and
[FS-00003](../Funding-Sources/FS-00003—Profit_Shifting_Recovery.md).

Said plainly, because [PL-00002](./PL-00002—US_Buildout_Plan.md) says it too: this is a large
corporate tax increase, not a technical cleanup.

### S4 — Grow the denominator

Debt-to-GDP has a denominator, and the fastest way to move it is cheap abundant energy
([PL-00002](./PL-00002—US_Buildout_Plan.md)), affordable housing near jobs
([PL-00003](./PL-00003—Housing_Abundance.md)), a workforce that can do the work
([PL-00005](./PL-00005—Education_For_Human_3.md)), and a state that permits in months
([PL-00007](./PL-00007—A_Government_That_Runs_On_Understanding.md)).

**Target: sustained real growth above the historical trend.** This is the least controllable lever
in the plan and the one with the highest ceiling, and no responsible version of this plan assumes it.

### S5 — Term out the debt while you can

**Target: extend weighted average maturity.** A rate shock against a short average maturity is how
a manageable interest line becomes an unmanageable one inside two years. This is the cheapest
insurance in the plan and the least discussed.

---

# WHAT CHANGES

1. Interest stops being the fastest-growing thing the country buys.
2. The program in this repository gets funded out of price, waste, and base, not out of households.
3. The debt conversation stops being a morality play and becomes an arithmetic one with a published
   denominator.

---

# METRICS

| Metric | Baseline | 2030 | 2036 |
|---|---|---|---|
| Debt held by the public, % of GDP | 101% | 103% | ≤100% |
| Net interest, % of GDP | 3.3% | 3.1% | <3.0% |
| Net interest, dollars | $1.0T | $1.4T | <$1.8T |
| Deficit, % of GDP | 5.8% | 4.0% | <3.0% |
| Federal health spending growth vs GDP | faster | equal | slower |
| Improper payments recovered, annual | $0 | $86B | $150B |
| Corporate base restored, annual | $0 | $200B | $300B |

---

# HOW THIS FAILS

- **Rates.** Every projection here is a bet on the interest path, and the interest path is not
  something the plan controls.
- **S1 is the whole plan.** If healthcare reform fails, the arithmetic does not close, and no
  plausible combination of S2, S3 and S5 substitutes for it.
- **Recession.** The denominator in S4 can move down as easily as up.
- **S3's yield is contested** — see
  [CL-00002](../Claims/CL-00002—Named_Funding_Covers_The_Maximum_Reachable_Buildout.md), where the
  conservative case is roughly half the headline.

---

# WHAT WOULD FALSIFY THIS PLAN

- Health-spending reform producing no federal savings, which breaks S1 and therefore the plan.
- Debt-to-GDP exceeding 110% before 2030, which would mean the stabilization path is already gone.
- Net interest exceeding 4% of GDP, at which point this stops being a plan and becomes a crisis
  response.
