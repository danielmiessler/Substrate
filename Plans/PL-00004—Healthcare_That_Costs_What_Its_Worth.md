# PL-00004 — Healthcare That Costs What It's Worth

**Author:** Daniel Miessler · **Created:** 2026-07-24 · **Status:** Draft v1 · **Type:** Substrate Plan
**Part of:** [The US Program](./README.md)

> **The one-liner:** America pays 2.5× the developed world for 2.7 fewer years of life. Close that gap and it frees roughly $1.5 trillion a year.

---

# SCOPE

How the United States gets peer-country health outcomes at something closer to peer-country cost.
Covers price, administration, and the shift from treating disease to preventing it. Does not take a
position on single-payer versus multi-payer — the numbers below are the same under either.

---

# WHERE WE ARE

| Metric | United States | OECD average | Source |
|---|---|---|---|
| Health spending, share of GDP | **17.2%** | 9.3% | [OECD Health at a Glance 2025](https://www.oecd.org/en/publications/health-at-a-glance-2025_15a55280-en/united-states_3517f35e-en.html) |
| Spending per capita (USD PPP) | **$14,885** | $5,967 | [OECD](https://www.oecd.org/en/publications/health-at-a-glance-2025_15a55280-en/united-states_3517f35e-en.html) |
| Life expectancy | **78.4 years** | 81.1 (US is 2.7 below) | [OECD](https://www.oecd.org/en/publications/health-at-a-glance-2025_15a55280-en/united-states_3517f35e-en.html) |
| Administrative cost per person | **>$1,000** | ~1/5 of the US figure | [PGPF](https://www.pgpf.org/article/how-does-the-us-healthcare-system-compare-to-other-countries/) |

**The arithmetic that defines this plan.** US GDP was **$30.76T** in 2025
([BEA](https://www.bea.gov/news/2026/gdp-second-estimate-4th-quarter-and-year-2025)). At 17.2% that
is ~$5.29T of health spending. Every percentage point of GDP moved is **~$308B a year**. Getting to
12% of GDP — still far above every peer country — releases **~$1.6 trillion annually**, which is
more than three times the entire funding stack in
[PL-00002](./PL-00002—US_Buildout_Plan.md).

That is the largest single pool of recoverable money in American public life, and it is not a tax.

---

# CHALLENGES

1. **The US pays more per unit, not more units.** Peer countries do not ration Americans into
   worse outcomes; they pay less for the same drug, scan, and procedure.
2. **Administration is a private tax.** Over $1,000 per person, roughly five times peer countries,
   for work that produces no health.
3. **Outcomes are falling behind spending.** 2.7 years of life expectancy below the OECD average
   while spending 2.5× per capita is not a tradeoff, it is a failure.
4. **The money is somebody's income.** Every dollar of the $1.6T is a job, a margin, or a
   shareholder, which is why this has never happened.

---

# MISSION

1. Bring health spending from **17.2% of GDP to 12%** over ten years without reducing care volume.
2. Raise life expectancy to the **OECD average or better**.
3. Cut administrative cost per person by **two-thirds**.

---

# STRATEGIES

### S1 — One price list, published

Every provider publishes one machine-readable price for every service, and charges it. **Target:
100% price transparency compliance with real penalties by 2028.** Most of the US price premium
survives because the price is not knowable at the point of decision. A market cannot clear on
secret prices, and neither can a regulator.

### S2 — Reference pricing on everything the government buys

Medicare, Medicaid, the VA and federal employee plans buy roughly half of American healthcare.
**Target: federal purchasing benchmarked to a basket of peer-country prices**, phased over five
years. Where the US pays 3× Germany for the same molecule, it pays a defined multiple instead.

### S3 — Kill the administrative layer with software

One national claims standard, one eligibility API, one prior-authorization schema. **Target:
administrative cost per person under $400 by 2036.** This is the single most automatable domain in
the American economy: adjudication is rules over structured records, which is exactly what modern
systems do well. It is also a live example of the
[capability program](../Solutions/SO-00003—Universal_Free_AI_And_Business_Training.md) creating jobs
while automating others — the workers displaced here are the ones with the best claim on retraining.

### S4 — Pay for prevention like it's a procedure

Metabolic disease drives the outcome gap more than access does. **Target: measurable reduction in
age-adjusted metabolic disease prevalence**, funded by paying for outcomes at a rate that competes
with paying for interventions.

### S5 — Publish the outcomes

Every hospital and every physician group publishes risk-adjusted outcomes on a standard schema.
**Target: full outcome transparency by 2030.** Price transparency without outcome transparency just
produces a race to the cheapest, which is the correct objection to S1 and the reason S5 ships with it.

---

# WHAT CHANGES

1. You can find out what something costs before you agree to it.
2. An American lives as long as a Canadian, a Brit, or a German.
3. The $1.6 trillion released funds the rest of this program several times over, permanently,
   without a tax increase.
4. Nobody's care is rationed to get there — the savings come from price and paperwork.

---

# METRICS

| Metric | Baseline | 2030 | 2036 |
|---|---|---|---|
| Health spending, % of GDP | 17.2% | 15% | 12% |
| Spending per capita (PPP) | $14,885 | $12,000 | $9,000 |
| Administrative cost per person | >$1,000 | $600 | <$400 |
| Life expectancy | 78.4 | 80.0 | ≥81.1 |
| Price transparency compliance | partial | 100% | 100% |
| Annual dollars released vs baseline | $0 | ~$680B | ~$1.6T |

---

# HOW THIS FAILS

- **Every dollar saved is a dollar of someone's revenue**, concentrated in politically effective
  industries. This is the most defended money in the country.
- **Reference pricing exports the fight** to pharmaceutical R&D funding, which is a real argument
  and not a bad-faith one.
- **Administrative automation displaces a large white-collar workforce** — see
  [RI-00003](../Risks/RI-00003—Automation_Displaces_The_Workers_It_Trains.md) and
  [PL-00006](./PL-00006—Work_And_Income_Through_The_AI_Transition.md).
- **Outcomes are slow.** Life expectancy responds on a decade lag, so the plan will look like it is
  only cutting costs for years before it looks like it is working.

---

# WHAT WOULD FALSIFY THIS PLAN

- Price transparency being implemented at scale with no measurable price convergence.
- Administrative cost failing to fall after claims standardization, which would mean the cost is
  headcount policy rather than process complexity.
- The US spending gap being explained by utilization rather than price on a like-for-like basis.
