# Offensive AI Harnesses

## Overview

The data behind [offsecharnesses.ai](https://offsecharnesses.ai), the Offsec Harness Index. It answers one question: which open-source AI agent harnesses for offensive security exist, and which of them have attackers actually used?

Two tables. **Evidence**: every open-source harness that a security vendor, IR firm, CERT, government agency or AI lab names in its own report of a real operation, with who ran it, what it did and the reports behind it. **Field**: every other open-source offensive AI harness on public GitHub with 100 stars or more, with live GitHub facts. Every harness carries **use tags** (recon, scanning, vuln discovery, exploitation, exploit dev, post-exploitation, research), each one sourced: tags from attack reporting link the report; tags from a project's own README carry the README sentence that states them.

## What's Inside

- **SUMMARY.md** — answer-first summary, generated from the data
- **harnesses.json** — the full dataset, verbatim from https://offsecharnesses.ai/data.json: every harness, its tier, actors, use tags with basis, source URL and README quote, and the report ids behind it
- **harnesses.csv** — one row per harness, flattened
- **sources.csv** — every primary report cited: id, date, publisher, publisher type, title, URL
- **source.md** — how harnesses are tied to attacks, how tiers and tags are assigned, the roster rule, refresh
- **update.ts** — refresher (`bun Data/Offensive-AI-Harnesses/update.ts`), no API key; logs to update.log
- **UPDATES.md** — change log

Research notes, including what the page leaves out (commercial coding agents used as attack harnesses, Hugging Face as attacker infrastructure, malicious LLM services, the watch list): [research/offensive-ai-harnesses-2026-11](../../research/offensive-ai-harnesses-2026-11/README.md).

## Related

[Vulnerability-And-Breach-Data](../Vulnerability-And-Breach-Data/README.md) keeps the wider AI-involvement ledger (`ai-incidents.json`): every AI tool class, not only open-source harnesses.

## Conventions

Nothing is inferred. A harness is tied to an attack only by a primary report that names it, and a row hedges where its report hedges. "No attack on record" means none in primary reporting, not that none happened. Counts of attacker use are floors.
