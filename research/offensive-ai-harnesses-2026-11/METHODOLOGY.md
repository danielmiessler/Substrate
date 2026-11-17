# Methodology

1. **Collect primary reporting.** Threat-intelligence and IR reports from security vendors (Cisco Talos, Google GTIG and Mandiant, Palo Alto Networks Unit 42, CrowdStrike, Microsoft, Zscaler, Kaspersky, Zenity, Gambit), AI labs (Anthropic), CERTs (CERT-In) and government (FBI), searched for named AI agent frameworks used by threat actors. Secondary coverage was used only to find the primary report.
2. **Tie harness to attack only by name.** A harness counts as used only where the primary report names it in a real operation. No attribution from TTPs, tooling overlap or our own judgment. Hedged language is kept ("experimentation", "not observed against victims").
3. **Tier.** Confirmed: shown in a real operation. Observed: aimed at real targets or found on attacker infrastructure, no breach stated.
4. **Build the field.** Open-source offensive AI harnesses from curated lists (skyvanguard/awesome-ai-pentesting, insidetrust/awesome-ai-pentest) and vendor reports, each checked against the GitHub API: public, OSI license, LLM in the loop, offensive purpose, 100+ stars.
5. **Tag uses.** Each README was read in full and tagged only where it states a use, with the supporting sentence recorded and checked as a verbatim substring by code. Attack-use tags come from the reports.
6. **Independent review.** Each evidence pass was audited by a separate model that had not built it, reading every linked report. The v4 review (2026-11-16) removed one attack tag its report did not support (oh-my-claudecode), moved OpenClaw's headline to the report that names it, corrected a scan-only call, dropped 13 README tags whose sentence did not state the use, and added each report's own sentence to every attack tag.

Known gaps: reports in languages other than English were read only where found; private and closed-source frameworks (exploit_agent, Villager variants) are out of the tables; attacker use of a harness is undercounted wherever no vendor saw it or named it.
