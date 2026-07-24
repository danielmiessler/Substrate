# PR-00001 — The US Electricity Buildrate Ceiling

**Category:** Problem
**Scale:** National (United States)
**Created:** 2026-07-24
**Referenced by:** [PL-00002](../Plans/PL-00002—US_Buildout_Plan.md)
**Solved by:** [SO-00001](../Solutions/SO-00001—Federal_Energy_Buildrate_Program.md)

---

## Statement

The United States cannot add electric generating capacity fast enough to meet the demand its own AI
industry is creating, and the ceiling is physical rather than financial.

## Evidence

| Fact | Value | Source |
|---|---|---|
| Capacity added 2025 | 53 GW — largest single year since 2002 | [EIA](https://www.eia.gov/todayinenergy/detail.php?id=67205) |
| Capacity planned 2026 | 86 GW — record | [EIA](https://www.eia.gov/todayinenergy/detail.php?id=67205) |
| Data center consumption 2023 | 176 TWh, 4.4% of US electricity | [LBNL/DOE](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-in-electricity-demand-from-data-centers) |
| Data center consumption 2028 (projected) | 325–580 TWh, 6.7–12% of US electricity | [LBNL/DOE](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-in-electricity-demand-from-data-centers) |
| Domestic solar cell capacity | 3 GW/yr against 69.9 GW/yr of module capacity | [SEIA](https://seia.org/news/united-states-surpasses-50-gw-of-solar-module-manufacturing-capacity/) |
| Large transformer lead time | 128 weeks; 144 for GSUs; up to 4 years for high-capacity | [pv magazine](https://pv-magazine-usa.com/2026/05/11/u-s-transformer-market-faces-severe-supply-constraints/) |
| Transformer price change since 2019 | +77% | [POWER](https://www.powermag.com/transformers-in-2026-shortage-scramble-or-self-inflicted-crisis/) |
| Capacity in interconnection queues | 2,061 GW active | [LBNL](https://emp.lbl.gov/publications/queued-2025-edition-characteristics) |
| Median interconnection request → operation | >4 years, up from <2 years in 2000–2007 | [LBNL](https://emp.lbl.gov/publications/queued-2025-edition-characteristics) |
| Electrician openings needed per year | 81,000 for a decade | [DOL via CEWD](https://cewd.org/resources/energy-workforce-fast-facts/) |
| Utility employers reporting line-worker hiring difficulty | 59% | [USEER 2025 via CEWD](https://cewd.org/resources/energy-workforce-fast-facts/) |

## Why it persists

The four constraints are sequential, not parallel. A project needs a queue position, then a
transformer, then cells, then electricians. Relieving any one of them alone moves the bottleneck
rather than the outcome. Capital relieves none of them: 2,061 GW of already-funded projects are
waiting on process and hardware, not money.

## Scale of the gap

Against the 10× / 4-year target in [PL-00002](../Plans/PL-00002—US_Buildout_Plan.md), the required
rate is 2,925 GW/yr — 34× the 2026 record and roughly 4× the entire world's annual renewable
buildout of 692 GW ([IRENA via Earth.org](https://earth.org/renewables-hit-nearly-half-of-global-power-capacity-in-2025/)).

## Falsifiers

This problem statement is wrong if any of the following turn out to be true:

- A single year of US capacity additions exceeds 200 GW before 2030.
- Median interconnection time falls below 24 months without process reform.
- Domestic solar cell capacity exceeds 40 GW/yr before 2029.
- Large transformer lead times fall below 52 weeks before 2029.
