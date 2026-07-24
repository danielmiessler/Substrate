# PL-00002 — The US Buildout Plan

**Author:** Daniel Miessler
**Created:** 2026-07-24
**Status:** Draft v1
**Type:** Substrate Plan (Telos format)
**Related:** [PL-00001 / us-plan1-miessler.md](./us-plan1-miessler.md) — the cultural plan. This is the material one.

---

## 🎯 THE ANSWER FIRST

| Question | Answer |
|---|---|
| **Can the US 10x its electricity capacity in 4 years?** | **No.** It requires 2,925 GW/yr of new capacity — 34× the record 86 GW planned for 2026, and 4× the entire world's annual renewable buildout. |
| **Can it 16x in 10 years?** | **No.** 1,950 GW/yr, 23× the record year. |
| **What can it do?** | **~2.4× in ten years** (1,300 GW → ~3,160 GW) by climbing from 86 GW/yr to a sustained 250 GW/yr. That is still the largest industrial mobilization since WWII. |
| **What binds it?** | Not money. Solar cells (3 GW/yr domestic), transformers (4-year lead times), interconnection (2,061 GW queued, 4+ yr median), and electricians (81,000/yr short). |
| **Does the proposed funding cover it?** | **Yes, almost exactly.** AI levy + corporate tax expenditure repeal + profit-shifting recovery ≈ **$473B/yr** against a **$419B/yr** maximum-reachable program. |
| **How many people does it employ?** | **~3.1 million** direct energy workers, derived from 1,690 workers/GW. |

**One-liner:** The money is there; the buildrate is not, so the plan is a buildrate plan.

**Caveat:** Every capacity multiple below is against a *derived* 2025 baseline of ~1,300 GW (see Baseline).

---

# SCOPE

A plan for the material rebuild of the United States: electricity, autonomous manufacturing, and
human capability. It is the physical counterpart to [PL-00001](./us-plan1-miessler.md), which covers
identity and social cohesion. Neither works alone. A country with a shared story and no power
generation is poor; a country with power and no shared story tears itself apart before it finishes
building.

---

# CHALLENGES

The four problems this plan exists to solve, each with a Substrate entry:

1. **[PR-00001](../Problems/PR-00001—US_Electricity_Buildrate_Ceiling.md)** — The US cannot build
   electricity fast enough. It added 53 GW in 2025, the most since 2002, while AI datacenters alone
   are projected to need 325–580 TWh/yr by 2028.
2. **[PR-00002](../Problems/PR-00002—Drone_And_Robotics_Industrial_Dependence.md)** — The US does
   not make the machines that make things. China produces ~90% of the world's commercial drones;
   DJI holds ~77% of the US market. US robot density ranks 8th globally.
3. **[PR-00003](../Problems/PR-00003—Adult_AI_Capability_Gap.md)** — Roughly 170 million working
   adults have no structured path to using AI or building an independent income, and the federal
   system that would do it trains ~238,000 people a year.
4. **[PR-00004](../Problems/PR-00004—Corporate_Tax_Base_Erosion.md)** — $264B/yr in corporate tax
   expenditures and hundreds of billions in shifted profit, against $452B of total corporate income
   tax actually collected in FY2025.

---

# MISSION

1. Raise US electric capacity by the maximum physically achievable multiple within a decade, and
   name the binding constraint at every step rather than the aspiration.
2. Rebuild a domestic autonomy industrial base — drones, robots, and their components — sufficient
   to serve US demand without Chinese supply.
3. Give every working-age American a free, real path to using AI and building an independent income.
4. Pay for all of it from AI infrastructure capital and recovered corporate tax base, not from
   household taxes or new deficit.

---

# BASELINE

Every number in this plan is measured against this.

| Metric | Value | Year | Source |
|---|---|---|---|
| US utility-scale generating capacity | **1,189,492 MW (1,189.5 GW)** | end 2023 | [EIA](https://www.eia.gov/energyexplained/electricity/electricity-in-the-us-generation-capacity-and-sales.php) |
| US small-scale solar capacity | 47,704 MW (47.7 GW) | end 2023 | [EIA](https://www.eia.gov/energyexplained/electricity/electricity-in-the-us-generation-capacity-and-sales.php) |
| US net generation, utility-scale | 4,178 TWh | 2023 | [EIA](https://www.eia.gov/energyexplained/electricity/electricity-in-the-us-generation-capacity-and-sales.php) |
| Capacity added, 2025 | **53 GW** (largest since 2002) | 2025 | [EIA](https://www.eia.gov/todayinenergy/detail.php?id=67205) |
| Capacity planned, 2026 | **86 GW** (record) | 2026 | [EIA](https://www.eia.gov/todayinenergy/detail.php?id=67205) |
| World total installed capacity | ~9,400 GW | 2023 | [Statista](https://www.statista.com/statistics/267358/world-installed-power-capacity/) |
| World renewable capacity added | 692 GW | 2025 | [IRENA via Earth.org](https://earth.org/renewables-hit-nearly-half-of-global-power-capacity-in-2025/) |
| US nominal GDP | $30.76T | 2025 | [BEA](https://www.bea.gov/news/2026/gdp-second-estimate-4th-quarter-and-year-2025) |
| Federal corporate income tax receipts | $452.1B | FY2025 | [CBO](https://www.cbo.gov/publication/61953) |

**Derived working baseline: ~1,300 GW.** EIA's authoritative 1,189.5 GW is end-2023. Adding 2024
and 2025 additions (53 GW in 2025 alone) net of retirements puts end-2025 near 1,290–1,300 GW.
Every multiple below uses **1,300 GW**. This figure is derived, not quoted; EIA has not published a
2025 total.

---

# THE ARITHMETIC OF THE STATED TARGET

The stated goal is 10× capacity in 4 years and 16× in 10.

| Target | End state | Must add | Required rate | vs 2026 record (86 GW) | vs world additions |
|---|---|---|---|---|---|
| **10× by 2030** | 13,000 GW | 11,700 GW | **2,925 GW/yr** | **34×** | 4.2× all world renewable additions |
| **16× by 2036** | 20,800 GW | 19,500 GW | **1,950 GW/yr** | **23×** | 2.8× |

Three things fall out of the table immediately.

**The 4-year leg is the harder one.** 2,925 GW/yr is 1.5× the rate the 10-year target needs. If
either target survives, it is the 16× one, and the 10× milestone should be dropped rather than the
16× goal weakened.

**The 4-year end state exceeds the planet.** 13,000 GW of US capacity is 38% more than the ~9,400 GW
installed on Earth. The plan would require the US, alone, to build more generating capacity in four
years than human civilization has built in its entire history.

**The capital requirement is a wartime economy on electricity alone.** At a blended $1,500/kW
([EIA construction costs](https://www.eia.gov/todayinenergy/detail.php?id=60562): solar $1,588/kW,
wind $1,451/kW, gas $820/kW), plus 50% for transmission, storage, and interconnection:

| Path | Generation capex | With integration | Per year | Share of 2025 GDP |
|---|---|---|---|---|
| 10× / 4 yr | $17.6T | $26.4T | **$6.6T/yr** | **21%/yr** |
| 16× / 10 yr | $29.3T | $43.9T | **$4.4T/yr** | **14%/yr** |

For scale: US war production peaked near 40% of GDP in 1943–44, across the entire war economy. This
would be 14–21% of GDP on electric generation by itself, for a decade, on top of everything else the
economy does.

**Verdict:** the stated targets are not achievable and should not be published as commitments. What
follows is the plan that survives contact with the constraints. See
[CL-00001](../Claims/CL-00001—Ten_X_Energy_In_Four_Years_Is_Physically_Impossible.md).

---

# THE BINDING CONSTRAINTS

Money is not the ceiling. These four are, in order.

### 1. Solar cells

The US has **69.9 GW/yr** of module manufacturing capacity as of June 2026, up from 8 GW before the
manufacturing credits — a 750%+ increase. But it has **3 GW/yr of cell capacity**
([SEIA](https://seia.org/news/united-states-surpasses-50-gw-of-solar-module-manufacturing-capacity/)).
Modules are assembly. Cells are the product. Announced cell plans total 56 GW, plus 24 GW of wafers
and 13 GW of ingots, none of it built yet. **Until cells scale, every module line is a Chinese
supply chain wearing a domestic label.**

### 2. Transformers

Lead times reached **128 weeks** in Q2 2025, **144 weeks** for generator step-up units, and up to
**four years** for high-capacity units. Prices are up **77% since 2019**, with a modeled **30%
national shortfall** for power transformers
([POWER](https://www.powermag.com/transformers-in-2026-shortage-scramble-or-self-inflicted-crisis/),
[pv magazine](https://pv-magazine-usa.com/2026/05/11/u-s-transformer-market-faces-severe-supply-constraints/)).
Demand for generator step-up transformers rose **274% between 2019 and 2025**. More than 40 million
US distribution transformers are already past service life. **You cannot connect a plant you cannot
transform.**

### 3. Interconnection

**2,061 GW** of generation and storage sits in active interconnection queues — more than the entire
installed US fleet. Median time from request to commercial operation has doubled from under 2 years
(2000–2007) to **over 4 years** (2018–2024). Over 750 GW of requests were withdrawn in 2025
([LBNL Queued Up 2025](https://emp.lbl.gov/publications/queued-2025-edition-characteristics)).
**The queue already holds more capacity than any four-year plan could build.** The constraint is
process, not projects.

### 4. Electricians and line workers

The Department of Labor projects **81,000 electrician openings a year for a decade**, plus 10,700
line installers. **59% of utility employers** reported difficulty hiring line workers in 2024, and
76% report a skills gap in their existing workforce
([USEER 2025 via CEWD](https://cewd.org/resources/energy-workforce-fast-facts/)). Goldman Sachs
Research estimates the sector needs **207,000 additional transmission and grid-connection workers
plus 300,000 in manufacturing, construction, and operations** to add just 300 GW by 2030.

---

# STRATEGIES

## S1 — The Maximum Reachable Energy Path

Replace the 10×/16× targets with a **rate ladder**, because rate is the thing that is actually
constrained.

| Year | Target additions | Multiple of 2026 record |
|---|---|---|
| 2027 | 100 GW | 1.2× |
| 2028 | 120 GW | 1.4× |
| 2029 | 140 GW | 1.6× |
| 2030 | 160 GW | 1.9× |
| 2031 | 180 GW | 2.1× |
| 2032 | 200 GW | 2.3× |
| 2033 | 220 GW | 2.6× |
| 2034 | 240 GW | 2.8× |
| 2035 | 250 GW | 2.9× |
| 2036 | 250 GW | 2.9× |
| **Total** | **1,860 GW** | |

**End state 2036: ~3,160 GW, or 2.4× the 2025 baseline.** Not 16×. This is still, by a wide margin,
the largest capacity buildout in the history of any country, and it triples the electricity
available per American.

**Cost:** 1,860 GW × $1.5B/GW = $2.79T generation, $4.19T with integration = **$419B/yr for ten
years.**

The four constraint programs that make the ladder possible, each funded before the generation
capex:

| Program | Target | Why |
|---|---|---|
| **Cell Independence** | 60 GW/yr domestic cell capacity by 2030 | Closes the 3 GW cell gap under the 69.9 GW module fleet |
| **Transformer Surge** | Triple domestic large-transformer output; national GOES steel program | 128-week lead times are the hard gate on every project |
| **Queue Reform** | Median request→COD under 24 months | 2,061 GW is already queued; unlocking it beats permitting more |
| **1 Million Electricians** | 100,000 new electricians and line workers per year | DOL says 81,000/yr is the *replacement* need, before any buildout |

## S2 — Domestic Autonomy Manufacturing

The US does not have a drone industry problem. It has a component problem.

| Metric | Value | Source |
|---|---|---|
| DJI share of US drone market | ~77% | [ElectroIQ](https://electroiq.com/stats/dji-statistics/) |
| China share of world commercial drones | ~90% | [CEPA](https://cepa.org/article/reality-check-breaking-free-from-chinas-drone-ecosystem-is-harder-than-you-think/) |
| China share of global drone exports | >70% (2024) | [CEPA](https://cepa.org/article/reality-check-breaking-free-from-chinas-drone-ecosystem-is-harder-than-you-think/) |
| DoD Drone Dominance program | 150,000 units by 2028 | [DroneLife](https://dronelife.com/2026/05/13/drone-dominance-us-drone-supply-chain-xponential-2026/) |
| Time to build sufficient LFP battery capacity for military demand | ≥5 years | [CEPA](https://cepa.org/article/reality-check-breaking-free-from-chinas-drone-ecosystem-is-harder-than-you-think/) |
| US industrial robot density | **307** per 10,000 employees (8th) | [IFR](https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas) |
| South Korea robot density | **1,220** per 10,000 | [IFR](https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas) |
| US robot installations, 2025 | 38,000 units (+11%) | [IFR](https://ifr.org/ifr-press-releases/us-robot-industry-returns-to-double-digit-growth) |
| US manufacturing employment | 12.6 million | [BLS, Apr 2026](https://www.bls.gov/news.release/empsit.nr0.htm) |

**Drone target:** domestic capacity to serve 100% of US demand — currently ~77% imported — plus the
150,000-unit defense program. The bottleneck is airframes, motors, radios, cameras, and above all
LFP cells, not airframe design. Fund the components, not the prime contractors.

**Robot target: match Korea's current density by 2036.** At 12.6M manufacturing employees, 307 per
10,000 implies an installed base near **387,000 robots** (derived). Korea's 1,220 implies **1.54
million**. Closing that gap requires roughly **115,000 net installations a year — 3× the 2025 rate
of 38,000.**

This pillar is the reason the energy pillar matters. Robots and drones are electricity in the shape
of labor.

## S3 — Free National AI and Business Training

The existing federal system is the wrong size. WIOA Title I runs about **$2.9B/yr** and trained
**237,836 people** in its most recently reported year, at **$1,500–2,500 per participant**;
sectoral programs that actually work cost **$8,000+**
([TCF](https://tcf.org/content/report/beyond-job-placement-reimagining-wioa-for-economic-mobility-and-workforce-resilience/),
[CRS](https://www.congress.gov/crs-product/R44252)). The civilian labor force is
**170.7 million** ([BLS](https://en.wikipedia.org/wiki/Labor_force_in_the_United_States)).

Three tiers, free at point of use, over four years:

| Tier | Reach | Content | Per learner | Total |
|---|---|---|---|---|
| **T1 — Open** | 40M adults | AI fluency, tool use, prompting, verification | $150 | $6.0B |
| **T2 — Cohort** | 8M | AI at work + credential; live cohorts, assessment | $800 | $6.4B |
| **T3 — Sectoral** | 2M | Independent business formation, and the energy/robotics trades | $8,000 | $16.0B |
| **Total** | **50M** | | | **$28.4B / 4 yr = $7.1B/yr** |

**The entire national training program costs 1.5% of the energy program.** It is the highest-leverage
line in this plan and the cheapest. T3's per-learner cost is set at the sectoral-program level
deliberately: the $1,500 tier is what current programs spend, and it is why current programs do not
work.

## S4 — Pay For It Without Touching Households

| Source | Annual | Basis |
|---|---|---|
| **AI infrastructure levy — 15% of hyperscaler capex** | **$109B** | 2026 Big-Four capex = **$725B**, up 77% from $410B in 2025 ([Statista](https://www.statista.com/chart/35046/capital-expenditure-of-meta-alphabet-amazon-and-microsoft/)) |
| **Corporate tax expenditure repeal** | **$264B** | Total corporate tax expenditures, 2025 ([JCT via PGPF](https://www.pgpf.org/article/the-six-largest-corporate-tax-expenditures/)) |
| **Profit-shifting recovery** | **$100B** | JCT estimated $83B/yr (2014); Zucman finds $369B of US MNC profit shifted to 13 havens in 2022 ([Zucman](https://gabriel-zucman.eu/files/WZ2022WIDER.pdf)) |
| **TOTAL** | **$473B/yr** | |

The six largest corporate tax expenditures alone are $203B: R&D credit and expensing ($74B),
reduced rate on active CFC income ($48B), accelerated equipment depreciation ($34B), energy credit
($19B), FDDEI ($15B), low-income housing ($13B).

**Two things must be said plainly about this stack.**

First, it roughly **doubles corporate taxation.** Federal corporate income tax receipts were $452.1B
in FY2025. This raises $473B more. Anyone presenting this as closing loopholes rather than as the
largest corporate tax increase in modern US history is not being honest.

Second, JCT has found that **eliminating every corporate tax expenditure only supports lowering the
corporate rate to 28%** ([JCT via MLPA](https://www.mlpassociation.org/joint-committee-on-taxation-report-eliminating-all-corporate-tax-expenditures-only-lowers-rate-to-28/)).
The base is smaller than the rhetoric assumes. $473B/yr is the aggressive end of defensible.

### Does it cover the program?

| Program | Annual cost |
|---|---|
| Maximum-reachable energy path (S1) | $419B |
| Autonomy manufacturing (S2) | $40B |
| Training (S3) | $7.1B |
| **Total** | **$466B/yr** |
| **Funding stack** | **$473B/yr** |
| **Margin** | **+$7B/yr** |

**The named funding is right-sized for the physically maximum program, and nowhere near the stated
one.** It covers 7% of the 10×/4yr target and 11% of the 16×/10yr target. It covers **101%** of what
the country can actually build. See
[CL-00002](../Claims/CL-00002—Named_Funding_Covers_The_Maximum_Reachable_Buildout.md).

---

# JOBS

Derived, not asserted.

**Primary anchor:** Goldman Sachs Research puts the workforce for 300 GW by 2030 at 207,000
transmission and grid-connection workers plus 300,000 in manufacturing, construction, and
operations — **507,000 workers per 300 GW, or 1,690 workers per GW**
([via EnergyNow](https://energynow.com/2026/05/data-center-rush-worsens-shortages-of-power-grid-workers/)).

**1,860 GW × 1,690 = ~3.14 million direct energy workers.**

**Cross-check:** NREL's JEDI modeling of a 1 GW wind project gives ~4,143 direct, indirect, and
induced jobs during construction
([NREL](https://www.nrel.gov/docs/fy12osti/49339.pdf)). Applied to 1,860 GW that implies ~7.7M
construction-phase job-years, which is a different unit and a larger number. The two anchors agree
on the order of magnitude and disagree on persistence.

**Add:** ~115,000 robot installations a year and a domestic drone component industry (S2), plus the
100,000 electricians a year the ladder requires, plus the staff of a 50-million-learner training
system (S3).

**Honest statement of the jobs claim:** ~3.1 million sustained direct energy jobs, several million
more in construction-phase and adjacent work, and a hard dependency on training people who do not
currently exist in the labor force. The plan does not create these workers by funding them. See
[PR-00001](../Problems/PR-00001—US_Electricity_Buildrate_Ceiling.md) and
[CL-00003](../Claims/CL-00003—The_Buildout_Employs_Over_Three_Million_People.md).

---

# WHY NOW

Data centers used **4.4% of US electricity in 2023** and are projected at **6.7–12% by 2028**,
rising from 176 TWh to **325–580 TWh**
([LBNL / DOE](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-in-electricity-demand-from-data-centers)).
The same firms driving that load are spending **$725B/yr** on the infrastructure causing it. The
levy in S4 is not a punishment. It is the demand side paying for the supply side it created, at the
exact moment the capital exists to do it.

---

# IDEAL WORLD

1. Electricity is abundant enough that its price stops being a constraint on what anyone builds.
2. The machines that build things are made here, by companies that are not one export-control
   decision away from stopping.
3. Any adult who wants to work on the buildout can be trained into it for free, within a year.
4. Any adult who wants to build something of their own has been taught how, for free.
5. The people who profited most from the AI transition paid for the infrastructure it required.
6. Nobody has to pretend a target was met when it was not.

---

# METRICS

| Metric | Baseline | 2030 target | 2036 target |
|---|---|---|---|
| Annual capacity additions | 86 GW (2026) | 160 GW | 250 GW |
| Total installed capacity | ~1,300 GW | ~1,820 GW | ~3,160 GW |
| Domestic solar cell capacity | 3 GW/yr | 60 GW/yr | 80 GW/yr |
| Median interconnection request→COD | >48 months | 24 months | 18 months |
| Large transformer lead time | 128 weeks | 52 weeks | 26 weeks |
| New electricians/line workers per year | ~81,000 needed | 100,000 | 100,000 |
| Robot density (per 10,000) | 307 | 600 | 1,220 |
| Annual robot installations | 38,000 | 90,000 | 115,000 |
| Imported share of US drone market | ~77% | 40% | <10% |
| Adults completing free AI training | ~0 | 50M cumulative | — |
| Program funding raised | $0 | $473B/yr | $473B/yr |

---

# RISKS

- **[RI-00001](../Risks/RI-00001—Buildrate_Ceiling_Not_Funding_Ceiling.md)** — Funding a program the
  supply chain cannot absorb produces inflation in turbines, cells, and transformers rather than
  capacity.
- **[RI-00002](../Risks/RI-00002—AI_Levy_Capital_Flight.md)** — A 15% levy on capex is a levy on the
  most mobile capital in the economy.
- **[RI-00003](../Risks/RI-00003—Automation_Displaces_The_Workers_It_Trains.md)** — S2 and S3 point
  in opposite directions if the training pipeline feeds jobs S2 is automating.

---

# SOLUTIONS REFERENCED

- [SO-00001 — Federal Energy Buildrate Program](../Solutions/SO-00001—Federal_Energy_Buildrate_Program.md)
- [SO-00002 — Domestic Autonomy Manufacturing Push](../Solutions/SO-00002—Domestic_Autonomy_Manufacturing_Push.md)
- [SO-00003 — Universal Free AI and Business Training](../Solutions/SO-00003—Universal_Free_AI_And_Business_Training.md)

# FUNDING SOURCES REFERENCED

- [FS-00001 — AI Infrastructure Levy](../Funding-Sources/FS-00001—AI_Infrastructure_Levy.md)
- [FS-00002 — Corporate Tax Expenditure Repeal](../Funding-Sources/FS-00002—Corporate_Tax_Expenditure_Repeal.md)
- [FS-00003 — Profit Shifting Recovery](../Funding-Sources/FS-00003—Profit_Shifting_Recovery.md)

---

# ASSUMPTIONS AND WHAT WOULD FALSIFY THEM

| Assumption | Falsified by |
|---|---|
| Baseline is ~1,300 GW (derived) | EIA publishing a 2025 total materially different from 1,290–1,310 GW |
| Blended capex $1.5B/GW | EIA construction-cost data showing a blended figure outside $1.2–1.9B/GW |
| Integration adds 50% | Transmission and storage capex running below 30% or above 80% of generation capex |
| 1,690 workers per GW | A program-level workforce study contradicting the Goldman Sachs 300 GW figure |
| $473B/yr is raisable | Static-scoring of a 15% capex levy or full expenditure repeal coming in materially below |
| 250 GW/yr is reachable by 2035 | Cell, transformer, queue, or labor constraints failing to clear on the S1 schedule |

Every one of these is a place this plan can be wrong. That is the point of writing them down.
