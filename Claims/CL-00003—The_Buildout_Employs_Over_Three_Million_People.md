# CL-00003 — The Buildout Employs Over Three Million People

**Category:** Claim
**Created:** 2026-07-24
**Status:** Supported
**Confidence:** Medium
**Referenced by:** [PL-00002](../Plans/PL-00002—US_Buildout_Plan.md)

---

## Claim

The maximum-reachable energy buildout in
[SO-00001](../Solutions/SO-00001—Federal_Energy_Buildrate_Program.md) directly employs approximately
**3.1 million people**, with several million more in construction-phase and adjacent work.

## Derivation

**Primary anchor.** Goldman Sachs Research estimates the US power sector needs **207,000 additional
transmission and grid-connection workers plus 300,000 in manufacturing, construction, and
operations** to add **300 GW** of capacity by 2030
([via EnergyNow](https://energynow.com/2026/05/data-center-rush-worsens-shortages-of-power-grid-workers/)).

```
507,000 workers ÷ 300 GW  =  1,690 workers per GW
1,860 GW × 1,690          =  3,143,400 workers
```

**Cross-check.** NREL's JEDI modeling for a 1 GW wind project gives approximately **4,143 direct,
indirect, and induced jobs during construction**
([NREL](https://www.nrel.gov/docs/fy12osti/49339.pdf)). Applied to 1,860 GW that implies ~7.7M
construction-phase job-years.

The two anchors agree on order of magnitude and disagree on persistence: the Goldman figure counts
a standing workforce, the NREL figure counts construction-phase jobs including induced effects. The
claim uses the lower, more conservative, standing-workforce number.

## Additional employment not counted in the 3.1M

- **~115,000 robot installations a year** and a domestic drone component industry
  ([SO-00002](../Solutions/SO-00002—Domestic_Autonomy_Manufacturing_Push.md)).
- **100,000 electricians and line workers a year** required by SO-00001's U4 program, against a
  Department of Labor projection of 81,000 openings a year for replacement alone
  ([CEWD](https://cewd.org/resources/energy-workforce-fast-facts/)).
- Staff and instructors for a 50-million-learner training system
  ([SO-00003](../Solutions/SO-00003—Universal_Free_AI_And_Business_Training.md)).

## The dependency that makes this claim fragile

**These workers do not currently exist.** Electric power generation employed 933,800 people in 2025
([CEWD](https://cewd.org/resources/energy-workforce-fast-facts/)). 59% of utility employers already
report difficulty hiring line workers. The plan does not create 3.1 million workers by funding
3.1 million jobs; it creates them by training them, which is why
[SO-00003](../Solutions/SO-00003—Universal_Free_AI_And_Business_Training.md) is a dependency of
[SO-00001](../Solutions/SO-00001—Federal_Energy_Buildrate_Program.md) rather than a parallel
program.

## What would falsify this claim

- A program-level workforce study contradicting the Goldman Sachs 300 GW / 507,000 figure by more
  than 40%.
- Automation of grid construction reducing workers per GW below 1,000.
- The training pipeline delivering under 60,000 electricians a year by 2030, which caps the buildout
  and therefore the employment.
