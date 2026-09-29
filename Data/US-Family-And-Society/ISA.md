---
phase: climbing
---
# US Family and Society

## Ideal State

### L3 · One sentence

US Family and Society is a Substrate dataset in which every measure can be reproduced from its primary publisher, and every gap is deferred openly with evidence and never filled with invented data.

### L2 · Summary

At its ideal state the dataset is a self-contained, regenerable collection of family and society measures that can be traced back to the publishers that produced them.

- Every saved series reproduces the source cells of its primary publisher and holds against primary-source anchors and applicable overlaps.
- Instrument boundaries stay visible, with no interpolation, no fabricated values, and no merging of incompatible instruments.
- Every requested key is either shipped under the metadata, bounds, and coverage contract or explicitly deferred with evidence.
- The work lives entirely in its own directory with zero dependencies and no home paths, and its pipeline and docs regenerate on command.

### L1 · Full articulation

US Family and Society is a new Substrate dataset that lives at `Data/US-Family-And-Society/` in this repository. Its purpose is to recover measures of American family and social life in a form anyone can check. Every measure it contains can be reproduced from its primary publisher. The reader that pulls numbers out of source spreadsheets reproduces the source cells exactly, and the saved series hold against primary-source anchors and against each other wherever sources overlap.

The dataset treats honesty about evidence as the governing rule. It does not interpolate, fabricate values, or quietly drop a source. It also keeps instrument boundaries visible, so that series from incompatible instruments are never merged into one line. Failures stay isolated, which means one broken source cannot corrupt the rest. When evidence is missing, the dataset says so. Every requested key is either shipped or explicitly deferred with evidence. Annual ACS is one such deferral, because the API presence probe found no Census API key and no BLS API key. ATUS is served from keyless sources instead.

Every saved series has to satisfy a common contract covering metadata, value bounds, and coverage. The pipeline that builds the data and the documentation that describes it both regenerate on command, so the dataset can always be rebuilt from its sources instead of being trusted as a static artifact.

The dataset is also self-contained. All work stays inside its own directory, with zero dependencies and no home paths. This directory-only constraint takes precedence over external tracking and reflection writes, and no git commands are run, including a requested status command that conflicted with that constraint. Numeric source parsing and executable probes do the analytical checking directly, so no separate thinking-skill orchestration is needed.

## Vision
Every recovered measure is reproducible from its primary publisher, with instrument boundaries visible and failures isolated. Missing evidence never becomes invented data.

## Claims and falsifiers
- [x] C1: Reader reproduces source cells. Falsifier: `bun test lib/xls.test.ts` fails.
- [x] C2: Every requested key is shipped or explicitly deferred with evidence. Falsifier: `bun test lib/checks.test.ts` inventory check fails.
- [x] C3: Saved series satisfy metadata, bounds and coverage contract. Falsifier: `bun test lib/checks.test.ts` contract check fails.
- [x] C4: Pipeline and docs regenerate. Falsifier: `bun update.ts` or `bun docs.ts` fails.
- [x] C5: Primary-source anchors and applicable overlaps hold. Falsifier: anchor/overlap tests fail.
- [x] C6: Work stays in this directory with zero dependencies and no home paths. Falsifier: static verification fails.

## Anti-claims
No interpolation, fabricated values, silent source loss, merged incompatible instruments, writes outside this dataset, or git commands.

## Test Strategy
| Claim | Assert | Lane |
|---|---|---|
| C1 | bun test lib/xls.test.ts | build |
| C2,C3,C5,C6 | bun test lib/checks.test.ts | build |
| C4 | bun update.ts && bun docs.ts | build |

## Decisions
The explicit directory-only constraint overrides external tracking and reflection writes. No git commands, including the contradictory requested status command. Numeric source parsing and executable probes cover the supplied thinking lenses; no separate thinking-skill orchestration is needed. API presence probe returned CENSUS_API_KEY no and BLS_API_KEY no. Annual ACS is explicitly deferred; ATUS uses keyless sources.
