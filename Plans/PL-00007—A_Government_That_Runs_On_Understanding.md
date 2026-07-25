# PL-00007 — A Government That Runs on Understanding

**Author:** Daniel Miessler · **Created:** 2026-07-24 · **Status:** Draft v1 · **Type:** Substrate Plan
**Part of:** [The US Program](./README.md)

> **The one-liner:** $186 billion in improper payments, four-year permits, and $83 billion a year keeping decades-old systems alive. Every other plan here runs through this one.

---

# SCOPE

How the American state executes. Not how big it is — how well it does the things it has already
decided to do. This is the enabling plan: [PL-00002](./PL-00002—US_Buildout_Plan.md) cannot build,
[PL-00003](./PL-00003—Housing_Abundance.md) cannot permit, and
[PL-00004](./PL-00004—Healthcare_That_Costs_What_Its_Worth.md) cannot pay claims if this one fails.

---

# WHERE WE ARE

| Metric | Value | Source |
|---|---|---|
| Improper payments, FY2025 | **$186B** across 64 programs at 15 agencies, up $24B YoY | [GAO](https://www.gao.gov/products/gao-26-108694) |
| Improper payments since FY2003 | **~$3 trillion** | [CRFB](https://www.crfb.org/blogs/federal-improper-payments-total-186-billion-fy-2025) |
| Estimated annual federal fraud losses | **$233B–$521B** (2018–2022 basis) | [GAO](https://www.gao.gov/fraud-improper-payments) |
| Federal IT spending | **>$100B/yr**; **$83B (79%)** of FY2025 planned spend is operations and maintenance | [GAO](https://www.gao.gov/products/gao-25-107795) |
| Critical legacy modernizations completed | **3 of 10** identified in 2019, as of Feb 2025 | [GAO](https://www.gao.gov/products/gao-25-107795) |
| Environmental Impact Statement preparation | ~1 year (1997) → **over 4 years** (2022); CEQ average **54 months** | [RFF](https://www.rff.org/publications/reports/how-long-does-it-take-national-environmental-policy-act-timelines-and-outcomes-for-clean-energy-projects/) |
| EIS timeline, solar / wind | 27 months / 45 months | [RFF](https://www.rff.org/publications/reports/how-long-does-it-take-national-environmental-policy-act-timelines-and-outcomes-for-clean-energy-projects/) |
| NEPA lawsuits filed per year | 100–150 | [Carlton Fields](https://www.carltonfields.com/insights/publications/2025/nepa-are-new-developments-actually-speeding-federal-permit-reviews) |

Two numbers to hold together: **$186B a year goes out the door improperly**, and **79% of a $100B+
IT budget goes to keeping old systems alive rather than building new ones.** The second is why the
first is possible.

---

# CHALLENGES

1. **The state cannot see itself.** Improper payments are estimated, after the fact, per program,
   by the agency that made them. There is no live view of state.
2. **Modernization moves at generational speed.** Three of ten critical systems in six years.
3. **Process time has quadrupled with no evidence of better decisions.** A four-year EIS is not four
   times more protective than a one-year one; the 1997 baseline was not an environmental disaster.
4. **Every other plan inherits this.** The [buildout](./PL-00002—US_Buildout_Plan.md) needs permits,
   [housing](./PL-00003—Housing_Abundance.md) needs approvals, and
   [healthcare](./PL-00004—Healthcare_That_Costs_What_Its_Worth.md) needs claims adjudication.

---

# MISSION

1. Cut improper payments by **80%**.
2. Bring federal decision timelines back to their **1997 durations** without weakening the standards
   being applied.
3. Move federal IT from **79% maintenance to under 50%**, and run the state on live state rather
   than on annual reports.

---

# STRATEGIES

### S1 — State, Policy, Questions, Actions

Rebuild federal program administration on four components: **State** (what is true right now),
**Policy** (what we want), **Questions** (what has to be evaluated), **Actions** (what to do about
it). Programs stop being procedure manuals executed by people and become explicit policy evaluated
continuously against live state.

**Target: the ten largest benefit programs running on SPQA architecture by 2034.** Improper payments
are the flagship case — they exist because eligibility is checked at a moment, against a stale
record, by a rule nobody can read end to end.

### S2 — Pay when you can verify, not when the clock runs out

**Target: improper payments under $40B by 2036.** The mechanism is not more auditors; it is
verifying against live authoritative state at the moment of payment, which is what S1 makes
possible. At the FY2025 rate this recovers **~$150B a year** — comparable to the entire AI
infrastructure levy in [PL-00002](./PL-00002—US_Buildout_Plan.md).

### S3 — Shot clocks with defaults

Every federal review gets a statutory deadline and a **default outcome if the deadline passes**. A
deadline without a default is a suggestion. **Target: median EIS under 18 months, median
environmental assessment under 6 months, by 2032.**

This is the same lever as [PL-00003](./PL-00003—Housing_Abundance.md) S1 and
[SO-00001](../Solutions/SO-00001—Federal_Energy_Buildrate_Program.md) U3: the constraint on American
building is almost never the decision, it is the time before the decision.

### S4 — Fund replacement, not maintenance

**Target: maintenance under 50% of federal IT spend by 2036.** Cap operations-and-maintenance
budgets on a declining schedule so agencies must modernize to keep operating. The current incentive
runs the other way: a working legacy system is nobody's promotion and a failed migration is
somebody's firing.

### S5 — Publish state continuously

**Target: every major program publishing live operational state on a public schema by 2032.**
Not an annual report — a live feed. This is how [PL-00004](./PL-00004—Healthcare_That_Costs_What_Its_Worth.md)
S5 and [PL-00005](./PL-00005—Education_For_Human_3.md) S5 work, applied to the state itself, and it
is what makes every metric in this program checkable by someone outside it.

---

# WHAT CHANGES

1. A permit decision takes months, and the standard being applied did not get weaker.
2. $150 billion a year stops leaking, which funds a third of the buildout by itself.
3. Anyone can see what a program is doing right now instead of what it reported eighteen months ago.
4. The government becomes the largest working demonstration of understanding-based systems, which
   is a better argument for them than anything anyone writes.

---

# METRICS

| Metric | Baseline | 2030 | 2036 |
|---|---|---|---|
| Improper payments, annual | $186B | $100B | <$40B |
| Federal IT spend on maintenance | 79% | 65% | <50% |
| Critical legacy modernizations completed | 3 of 10 | 8 of 10 | 10 of 10 |
| Median EIS duration | >48 months | 24 months | 18 months |
| Median environmental assessment | ~9.6 months | 6 months | 6 months |
| Major programs on SPQA architecture | 0 | 3 | 10 |
| Programs publishing live state | 0 | 50% | 100% |

---

# HOW THIS FAILS

- **Shot clocks with defaults get litigated**, and 100–150 NEPA suits a year is the existing
  baseline before anyone changes anything.
- **"Modernization" is where money goes to die.** Three of ten in six years is the track record of
  people already trying hard.
- **Live state is a surveillance surface.** A government that can see itself in real time can see
  citizens in real time, and that boundary has to be designed in, not added later.
- **Nobody's career advances by cutting improper payments** in a program they run.

---

# WHAT WOULD FALSIFY THIS PLAN

- Programs rebuilt on live-state verification showing no reduction in improper payments.
- Shot-clock deadlines producing measurably worse decisions rather than faster ones.
- Maintenance share of IT spend staying above 70% after O&M caps, which would mean the cost is
  irreducible rather than incentive-driven.
