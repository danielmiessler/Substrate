# AI Hacking Incidents

## Overview

The data behind [hackingincidents.ai](https://hackingincidents.ai), a public, sourced list of cyberattacks since January 2023 in which attackers used AI, or in which credible evidence says they probably did. It tries to answer one question: what has been publicly reported about attackers using AI, and how strong is the evidence for each report?

It is an attempt at a clear view, not a claim of the complete one. It counts published reports, not attacks, it says nothing about how common such attacks are, and it leans toward what large security vendors and model providers can see on their own platforms.

Each incident has a date, the actor as the source names them, the targets, what the AI did, the model the source names, a **grade** for how strong the evidence of AI use is (Confirmed, Strong or Suspected), a supporting quote, and its sources. The grade is separate from how harmful the attack was.

## What's Inside

- **SUMMARY.md** — answer-first summary, generated from the data
- **incidents.json** — the ledger: every incident, joined with the fetch date and archive link of each source, which sources are primary, and the per-incident enrichment (models with vendor and openness, harness, attributed countries, sectors). The same records the site serves at https://hackingincidents.ai/incidents.json
- **incidents.csv** — one row per incident, flattened, for spreadsheets
- **sources.json** — the source registry: every source swept or cited, its kind, its role (swept or cited only), when it was last swept and how many incidents cite it
- **sources.csv** — the registry, flattened
- **candidates.json** — every candidate the sweeps turned up, in every family, each with its disposition (admitted, merged into a named incident, or excluded with a reason); the sweep record of each source; and the editorial decisions made on incidents (merges, exclusions, kept-distinct pairs, the held-out list's resolution, and every removal or grade change)
- **regrade.json** — the independent second grading: the extractor's grade, the second grader's grade, the final grade, whether they agreed, the reason where they did not, and the primary sources
- **source.md** — how incidents are found, graded and dispositioned, and how the files here are produced
- **update.ts** — rebuilds the CSV files, SUMMARY.md and update.log from the four JSON files (`bun Data/AI-Hacking-Incidents/update.ts`, no API key)
- **update.log** — one line per distinct state of the dataset
- **UPDATES.md** — change log

Research notes for the first sweep, including the methodology, the held-out test and what the sweep under-reads: [research/ai-hacking-incidents-2026-11](../../research/ai-hacking-incidents-2026-11/README.md).

## Related

- [Offensive-AI-Harnesses](../Offensive-AI-Harnesses/README.md) tracks the open-source agent harnesses attackers use; it is the sister dataset (offsecharnesses.ai), and incidents here link the harnesses they name to it.
- [Vulnerability-And-Breach-Data](../Vulnerability-And-Breach-Data/README.md) keeps a smaller AI-involvement ledger (`ai-incidents.json`) that vulnerabilitydata.io reads. It is separate and unchanged.

## Conventions

- Every figure counts published reports. A quiet month here says little about a quiet month in the world.
- Attribution belongs to the source. Actor names and nexus are the labels the sources use; this dataset makes none of its own.
- A Confirmed grade needs at least one primary source: the model provider, the victim, a government body, a court record, or the firm that investigated the intrusion itself. A news story repeating a vendor's claim is not primary.
- An incident database record that only restates a report the incident already cites is not counted as an independent source.
- Nothing leaves the ledger and no grade changes without an entry in `candidates.json` (`changes`) naming the incident, the old and new value and the source that justifies it.
- We will be wrong sometimes. Send a correction with a source URL to https://hackingincidents.ai/submit/ or open an issue or pull request here.
