# PL-00003 — Housing Abundance

**Author:** Daniel Miessler · **Created:** 2026-07-24 · **Status:** Draft v1 · **Type:** Substrate Plan
**Part of:** [The US Program](./README.md) · **Pairs with:** [PL-00002](./PL-00002—US_Buildout_Plan.md)

> **The one-liner:** Build 15 million homes in ten years by making it legal to build them.

---

# SCOPE

How the United States ends its housing shortage. Covers supply, the rules that constrain supply,
and the financing that gets built what the rules allow.

---

# WHERE WE ARE

| Metric | Value | Source |
|---|---|---|
| Estimated shortage (conservative) | **3.7 million units** | [Freddie Mac, Q3 2024](https://www.freddiemac.com/research/insight/20210507-housing-supply) |
| Estimated shortage (White House CEA) | **10 million homes** | [CEA via The Real Deal](https://therealdeal.com/national/2026/04/14/white-house-pegs-us-single-family-housing-shortage-at-10m/) |
| National price-to-income ratio | **5.08** — nearly double the ~2.6 rule of thumb | [Best Interest](https://bestinterest.com/research/house-price-to-income-ratio/) |
| Median home price | $398,000 | [Splitero](https://www.splitero.com/blog/income-needed-to-buy-a-home-by-state-2026) |
| Income needed to buy it | $112,900 | [Splitero](https://www.splitero.com/blog/income-needed-to-buy-a-home-by-state-2026) |
| Median household income | $83,730 — a **$29,200 gap** | [Splitero](https://www.splitero.com/blog/income-needed-to-buy-a-home-by-state-2026) |
| Multifamily production needed | 350,000/yr → **500,000/yr**, held for 8–10 years | [Davis Vanguard](https://davisvanguard.org/2026/04/us-housing-shortage-millions/) |
| Units already zoned but not permitted | **~750,000 multifamily** | [Davis Vanguard](https://davisvanguard.org/2026/04/us-housing-shortage-millions/) |
| Price-to-income ratio | at a record high | [Harvard JCHS](https://www.jchs.harvard.edu/blog/home-price-income-ratio-reaches-record-high-0) |

The last row of that table is the one that matters. Housing costs more relative to income than at any
point on record, and 750,000 apartments that are already legal to build have not been built.

---

# CHALLENGES

1. **It is illegal to build enough housing in the places people want to live.** The shortage is a
   permitting artifact, not a construction-capacity one.
2. **Even the legal projects stall.** 750,000 units cleared zoning and never applied for a permit —
   the constraint after zoning is financing and process cost.
3. **The gap is now structural, not cyclical.** A $29,200 income gap on the median home means the
   median household cannot buy the median house, which is a different problem from a hot market.
4. **Every other plan gets harder when housing is expensive.** Labor cannot move to where the
   [buildout](./PL-00002—US_Buildout_Plan.md) needs it if it cannot afford to live there.

---

# MISSION

1. Add **15 million homes in ten years** — the midpoint of the 3.7M and 10M shortage estimates plus
   household formation.
2. Return the national price-to-income ratio to **3.5 or below**.
3. Make housing supply respond to demand automatically, so no future plan is needed.

---

# STRATEGIES

### S1 — Legalize the housing

By-right approval for anything meeting objective standards. No discretionary review, no hearing, no
appeal on aesthetics. **Target: median residential permit decision under 60 days, nationwide.**

The federal lever is money. Transportation, infrastructure, and housing formula funds condition on
adopting by-right standards. This is the same mechanism that produced the national 55 mph speed
limit and the 21 drinking age; it works, and it is the only federal lever over local zoning that
has ever worked.

### S2 — Build what is already legal

750,000 multifamily units have cleared zoning and stopped. **Target: a federal construction-lending
facility that takes those projects to permit.** This is the cheapest housing in the plan — the
approvals are sunk, the sites are entitled, the design is done. It is the housing equivalent of the
[interconnection queue](../Problems/PR-00001—US_Electricity_Buildrate_Ceiling.md).

### S3 — Industrialize the build

Housing is one of the only sectors where productivity per worker has not risen in fifty years.
**Target: 30% of new units factory-built by 2036.** Panelized and volumetric construction, a
national code that lets a factory in one state ship to another, and procurement volume from S2 to
give factories a demand floor.

### S4 — Make the trades a career again

The buildout in [PL-00002](./PL-00002—US_Buildout_Plan.md) needs 100,000 electricians a year and
housing needs its own pipeline on top. **Target: 250,000 construction-trade completions a year**,
delivered through [SO-00003](../Solutions/SO-00003—Universal_Free_AI_And_Business_Training.md) Tier 3.

### S5 — Stop subsidizing the shortage

Demand subsidies in a supply-constrained market raise prices. Phase mortgage-interest and
first-time-buyer subsidies down in step with supply coming online, and redirect the money to S2.
This one is unpopular and correct.

---

# WHAT CHANGES

1. A median household can buy a median home on a median income, without a windfall or an inheritance.
2. Building an apartment building where people want to live is a clerical process, not a campaign.
3. Where you live is a choice about your life rather than a bet you had to win ten years ago.
4. Labor moves to opportunity again, which makes every other plan in this program cheaper.

---

# METRICS

| Metric | Baseline | 2030 | 2036 |
|---|---|---|---|
| Homes completed per year | ~1.4M | 2.0M | 2.2M |
| Cumulative new homes | 0 | 6M | 15M |
| National price-to-income ratio | 5.08 | 4.3 | ≤3.5 |
| Median permit decision time | months–years | 90 days | 60 days |
| Entitled-but-unbuilt multifamily backlog | ~750,000 | <200,000 | <100,000 |
| Share of units factory-built | low single digits | 15% | 30% |
| Construction-trade completions/yr | — | 180,000 | 250,000 |

---

# HOW THIS FAILS

- **Federal conditioning gets litigated or repealed.** The whole plan runs through S1; without it,
  S2 builds 750,000 units and stops.
- **Rates.** Construction financing is rate-sensitive in a way permitting reform cannot fix.
- **Local backlash.** By-right approval removes the meeting where neighbors object, which is the
  point and also the political cost.
- **Building faster raises input prices.** Same failure mode as
  [RI-00001](../Risks/RI-00001—Buildrate_Ceiling_Not_Funding_Ceiling.md): lumber, concrete and labor
  are the real constraint once the rules stop being one.

---

# WHAT WOULD FALSIFY THIS PLAN

- Places that adopted by-right approval showing no supply response within five years.
- The entitled-but-unbuilt backlog persisting after construction financing is made available, which
  would mean the constraint is demand, not process.
- Price-to-income failing to fall in metros that hit their unit targets.
