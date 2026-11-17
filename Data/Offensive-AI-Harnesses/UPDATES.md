# Offensive AI Harnesses — Updates

## 2026-11-17 — Wider roster, new attack evidence, About page (site v0.0.10)

- 154 harnesses: 14 with primary-sourced attacker use (9 confirmed, 5 observed) and 140 in the field roster; 32 primary reports from 22 publishers.
- Strix moved to confirmed (Gambit, 2026-09-22). AntiFox, CyberStrike and HalberdStrike are new, all observed.
- The field roster grew from 46 to 140 after a discovery sweep of GitHub search, 46 curated lists and 218 arXiv papers; 136 candidates checked. Every new row was checked against its repo and README by a second model, which removed 11 (forks, copied code under research-only terms, and tools that only state exploitation).
- One row per code lineage: forks and copies of a tracked harness are left out and named with their parent in the research notes.
- The site gained an About page listing every data source, the collection steps and 72 references.

## 2026-11-16 — Dataset created (site dataset v4.0)

- 57 harnesses: 11 with primary-sourced attacker use (8 confirmed, 3 observed) and 46 in the field roster; 19 primary reports from 12 publishers.
- Use tags added to every harness after readers of the launch post asked which harnesses really exploit and which only drive scanners. Docs tags were read from each README and checked as verbatim substrings by code; attack tags cite the report.
- Research notes from 2026-09-19 onward published under research/offensive-ai-harnesses-2026-11.
