# CL-00002 — The Named Funding Covers the Maximum Reachable Buildout

**Category:** Claim
**Created:** 2026-07-24
**Status:** Supported
**Confidence:** Medium
**Referenced by:** [PL-00002](../Plans/PL-00002—US_Buildout_Plan.md)

---

## Claim

The funding stack proposed in [PL-00002](../Plans/PL-00002—US_Buildout_Plan.md) — an AI
infrastructure levy plus corporate tax expenditure repeal plus profit-shifting recovery — raises
approximately **$473B/yr**, which covers **101%** of the maximum physically achievable buildout
program and **7–11%** of the stated 10×/16× targets.

## Argument style

Arithmetic. Two independent estimates, compared.

## The funding side

| Source | Annual | Basis |
|---|---|---|
| [FS-00001](../Funding-Sources/FS-00001—AI_Infrastructure_Levy.md) — 15% levy on hyperscaler capex | $109B | $725B Big Four 2026 capex ([Statista](https://www.statista.com/chart/35046/capital-expenditure-of-meta-alphabet-amazon-and-microsoft/)) |
| [FS-00002](../Funding-Sources/FS-00002—Corporate_Tax_Expenditure_Repeal.md) — corporate tax expenditure repeal | $264B | JCT 2025 total ([PGPF](https://www.pgpf.org/article/the-six-largest-corporate-tax-expenditures/)) |
| [FS-00003](../Funding-Sources/FS-00003—Profit_Shifting_Recovery.md) — profit-shifting recovery | $100B | between JCT $83B and Clausing $90B, adjusted for $369B shifted in 2022 ([Zucman](https://gabriel-zucman.eu/files/WZ2022WIDER.pdf)) |
| **Total** | **$473B/yr** | |

## The cost side

| Program | Annual |
|---|---|
| [SO-00001](../Solutions/SO-00001—Federal_Energy_Buildrate_Program.md) — 1,860 GW over 10 years at $1.5B/GW + 50% integration | $419B |
| [SO-00002](../Solutions/SO-00002—Domestic_Autonomy_Manufacturing_Push.md) — drone and robotics components | $40B |
| [SO-00003](../Solutions/SO-00003—Universal_Free_AI_And_Business_Training.md) — 50M learners over 4 years | $7.1B |
| **Total** | **$466B/yr** |

**Margin: +$7B/yr.**

## Against the stated targets

| Target | Annual cost | Funding covers |
|---|---|---|
| 10× in 4 years | $6.6T/yr | **7%** |
| 16× in 10 years | $4.4T/yr | **11%** |
| Maximum reachable (2.4× in 10 years) | $466B/yr | **101%** |

## Why confidence is Medium, not High

The match is close enough that any of four inputs breaks it:

- **Blended capex.** $1.5B/GW is derived from [EIA 2022 construction costs](https://www.eia.gov/todayinenergy/detail.php?id=60562).
  At $2.2B/GW the energy program costs $615B/yr and the stack no longer covers it.
- **The 50% integration adder** is a convention, not a sourced figure. Transmission and storage
  capex could plausibly run 30% to 80%.
- **[FS-00003](../Funding-Sources/FS-00003—Profit_Shifting_Recovery.md) is the weakest line.** Its
  underlying estimates are on 2008 and 2014 bases and measure revenue lost, not revenue
  recoverable. Losing it drops the stack to $373B/yr, below the program.
- **[FS-00002](../Funding-Sources/FS-00002—Corporate_Tax_Expenditure_Repeal.md) overstates by
  design.** $127B of the $264B comes from R&D, depreciation, and energy credits that subsidize this
  plan's own buildout. Repealing those to fund it is partly self-cancelling; a defensible scope is
  closer to $137B, which drops the stack to $346B/yr.

**Conservative stack — full FS-00001, reduced FS-00002 ($137B), reduced FS-00003 ($60B) —
is $306B/yr, which funds roughly 65% of the ladder and forces the 2033–2036 rungs down.**

## What would falsify this claim

- EIA construction-cost data showing blended capex outside $1.2–1.9B/GW.
- Static scoring of the capex levy below $80B/yr.
- Any published integration-cost study putting transmission and storage above 80% of generation
  capex.
