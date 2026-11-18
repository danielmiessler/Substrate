# Source Record: AI Hacking Incidents

## Source of record

hackingincidents.ai keeps its data in JSON files in the site's own repository: the incident ledger, the enrichment per incident, the source registry, the sweep candidates, the fetch evidence, the second grader's record, and the editorial decisions. The site is built from them. An export step in that repository writes the four JSON files in this directory from those files, then runs `update.ts` here, so corrections go to the site's data, never to these files. The export is deterministic: running it twice on the same data writes the same files. Report errors with a source URL by mentioning @danielmiessler on X; https://hackingincidents.ai/submit/ says what to include.

## How incidents are found

1. **Sweep.** Registered sources are read back to January 2023 in three families: vendor threat intelligence; model providers, governments and court records; and incident databases, academic papers, the press and regional CERTs. Every candidate a sweep finds is written down with its source URL.
2. **Disposition.** Every candidate is admitted as a new incident, merged into a named incident it duplicates, or excluded with a reason. None is dropped silently; all of them are in `candidates.json`.
3. **Registry roles.** A source registered as `swept` was searched for incidents and has a sweep record with pages actually read. A source registered as `cited` is only cited by an incident and needs no sweep.
4. **Quote check.** Each incident's supporting quote must appear, after whitespace and quote-mark normalization, in the fetched text of one of its own sources. Each source has a fetch record (status, date, hash), and a source that did not answer 200 carries an archived copy.
5. **Duplicates.** Two incidents with the same named actor within a month, or the same quote, are merged or kept distinct with a written reason.

## How incidents are graded

- **Confirmed** — the model provider, the victim, a government body, or the firm that investigated the intrusion states that AI was used in this operation, with evidence such as provider telemetry, recovered prompts, a recording, forensic detail, or malware that calls an LLM. At least one source must be primary.
- **Strong** — a credible security firm or agency attributes AI use from artifacts such as LLM-written code or comments, which is inference rather than direct observation. A victim's own first-hand account with specifics is also Strong.
- **Suspected** — reported and plausible, but the evidence is thin, from one secondary source, rests on an attacker's own claim, or reaches us second-hand.

The grade measures the evidence of AI use, not the attack. A hedged attribution stays hedged in the actor and nexus fields, not in the grade. Every grade is derived a second time by a grader who did not extract the incident, working from the fetched evidence and the written rubric; both grades, the final grade and the reason for any disagreement are in `regrade.json`.

## What is in and what is out

In: intrusions, malware, phishing, fraud and social engineering where AI did part of the work, from January 2023, including blocked attempts; attacker tooling seen in the wild that calls a model; attacks that make a victim's own AI agent run a payload when a source shows the payload.

Out, and named as related rather than hidden: an AI agent that left an evaluation with no attacker directing it; AI used only as infrastructure (a command channel, for example) with no model doing attack work; influence operations with no hacking; tools built by researchers and proofs of concept with no documented use against a real target; report-wide statistics that are not one operation.

## Refresh

A scheduled job on the site looks for new reports each day. A person approves each update before it is published, so a refresh can wait on that review and run behind; the dataset date in `incidents.json` and on every page says how current the data is. This directory is refreshed from the site's data after a site update: the export step, then `bun Data/AI-Hacking-Incidents/update.ts` (the export runs it).

## Limits

Published reports only, and only the ones the sweeps found. English-language reporting is read best. What Google, Anthropic, OpenAI and the large security vendors can observe on their own platforms is over-represented, so activity on models those companies cannot see is probably under-reported. The sweep's own recall against an independent held-out list is stated in the research notes. Sources can be wrong, and pages change or disappear; each source row carries its fetch date and an archived copy where one exists.
