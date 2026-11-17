# Offensive AI Harnesses in the Wild (2026-09 → 2026-11)

**Question:** which AI agent harnesses have attackers actually used in real operations, and what does the whole open-source field of offensive AI harnesses look like?

**Answer (2026-11-16):** 11 open-source harnesses have primary-sourced attacker use (8 confirmed: ARTEX, Cairn, CyberStrikeAI, PentestGPT, PentAGI, OpenClaw, Hermes Agent, oh-my-claudecode; 3 observed: HexStrike AI, DeepAudit, Strix), out of 57 tracked. Since mid-October, multi-agent pentest frameworks (ARTEX, Cairn) have run whole intrusions at machine speed, mostly through old weaknesses. PentestGPT, PentAGI and an OpenClaw agent also exploited live targets on their own; Hermes Agent's exploits failed and a human got in; HexStrike, Strix and DeepAudit were seen only mapping, validating or sitting on attacker servers. Commercial coding agents, Claude Code above all, are named as attack harnesses more often than any open-source project.

Published as [offsecharnesses.ai](https://offsecharnesses.ai). Dataset: [Data/Offensive-AI-Harnesses](../../Data/Offensive-AI-Harnesses/README.md).

## Contents

- **findings/research-notes.md** — the content of record: every harness with its actors, cases and sources; commercial agents used as harnesses; Hugging Face as infrastructure; malicious LLM services; harnesses widely covered with no documented intrusion; the timeline
- **METHODOLOGY.md** — how the research was done and checked
- **SOURCES.md** — every URL cited in the notes

## History

- 2026-09-19 — first compilation: seven harnesses with documented use.
- 2026-11-16 — dataset v3: two months of new reporting (ARTEX, Cairn, CyberStrikeAI), the field roster of 46 more harnesses, two independent reviews.
- 2026-11-16 — dataset v4: use tags for every harness, the sources list and the method published with the data.
