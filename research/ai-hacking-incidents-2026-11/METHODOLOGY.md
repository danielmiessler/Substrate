# Methodology

This is how the list was made and checked, and what it cannot do. Numbers below are computed from the data at the time of the export (2026-11-17).

## What is being measured

One incident is one operation against real targets in which attackers used AI, or in which credible evidence says they probably did, from January 2023. The grade says how strong the evidence of AI use is. It does not say how harmful the attack was, and it does not say how common such attacks are.

## 1. Sweep

A registry of 270 sources (240 swept, 26 unreachable, 4 cited only) was searched back to January 2023 by AI agents in three families: vendor threat intelligence; model providers, governments and court records; and incident databases, academic papers, the press and regional CERTs. A source counts as swept only if its sweep record shows pages actually read; a landing page alone makes it cited, not swept. A fourth input, the 33-row AI-involvement ledger in Substrate's Vulnerability-And-Breach-Data, was swept as one source and is never the source of record.

## 2. Disposition

Every candidate a sweep found (371) has one disposition: admitted as a new incident (172), merged into a named incident it duplicates (117), or excluded with a reason (82). Candidates with no disposition: 0. All of them are in [candidates.json](../../Data/AI-Hacking-Incidents/candidates.json).

## 3. Grades

- **Confirmed** (145) — the model provider, the victim, a government body, a court record, or the firm that investigated the intrusion itself states that AI was used in this operation, with evidence such as provider telemetry, recovered prompts, a recording, forensic detail, or malware that calls an LLM. At least one source must be primary.
- **Strong** (109) — a credible security firm or agency attributes AI use from artifacts such as LLM-written code or comments, which is inference rather than direct observation. A victim's own first-hand public account with specifics is also Strong.
- **Suspected** (32) — the case is reported and AI use is plausible, but the evidence is thin, comes from one secondary source, rests on an attacker's own claim, or reaches us only second-hand.

## 4. Grading rulings

Six rulings were made after the first blind regrade showed where reasonable graders differed. They are written down so that the same case is graded the same way.

1. **A victim's own word.** A first-hand public account with specifics is Strong. With evidence a reader can check (a recording, an artifact, forensic detail) it can be Confirmed. A claim that only reaches us second-hand is Suspected.
2. **A named party's on-record statement.** When a named primary party (a police force, a victim company) made a statement that is not on a page of its own, and an outlet that did original reporting quotes it word for word, the statement counts as the primary source. It is marked primary with the outlet it came through, and the incident page says so.
3. **Attacker tooling that calls a model.** Malware or tooling built by attackers, seen in the wild, that calls a model is in scope and graded on the evidence. If it was only an experiment, the summary keeps that word. Tools built by researchers stay out.
4. **The grade measures the AI use.** A hedged attribution stays hedged in the actor and nexus fields, not in the grade.
5. **A report-wide aggregate is not an incident.** A report that describes many groups ("over 20 groups") becomes one incident for each named actor it describes on its own, and the remainder is not counted.
6. **An attack that makes the victim's own AI agent run the payload** is in scope as an agent hijack when a source shows the payload. An incident whose sources never mention AI is excluded.

## 5. Curation rulings

- An AI agent that escaped an evaluation or benchmark with no attacker directing it is excluded and named as a related case, because nobody used AI to attack anything.
- AI used only as infrastructure, such as a command channel over an AI service, with no model doing attack work, is excluded the same way.
- Poisoned agent skills and malicious MCP servers that make a victim's agent run the payload are in scope under the agent-hijack ruling.
- Text-only scam operations that used a chat model to write lures are admitted.
- An incident database record that only restates a report the incident already cites is not an independent source. 31 incidents rest on database records alone; they stay in, are never graded Confirmed on that basis, and their pages say the claim reaches us through the aggregator.
- Two incidents with the same named actor within a month, or the same supporting quote, are merged or kept distinct with a written reason (10 pairs are kept distinct). A shared source URL alone does not make a duplicate: one vendor report often documents many separate operations.
- A held-out miss enters the ledger only as a swept candidate with its own fetched source, never straight from the list. An entry whose URL or AI use does not check out is excluded with that reason.
- No incident leaves the ledger and no grade changes without an entry in `changes` in candidates.json naming the incident, the old and new value and the source that justifies it (26 so far).

## 6. Quote check against fetched text

Each incident's supporting quote must appear, after whitespace and quote-mark normalization, in the fetched text of one of its own cited sources. At this export 286 of 286 incidents with a fetch record have their quote found; 0 do not. The evidence files record each source's status, fetch date and a hash of the text. 410 source fetches are on record (393 returned 200, 16 returned 403, 1 returned 406); 17 did not answer 200, and 17 of those carry an archived copy (25 sources carry one in all). Fetched text is not republished here.

## 7. Independent second grading

Every grade was derived a second time by a grader who had not extracted the incident, on a different model from the extractor, working from the fetched evidence and the rubric above without seeing the first grade. At this export 286 of 286 incidents carry a second grade. The two graders agreed on 205 of 286 (72%). The ledger's final grade equals the extractor's in 212 cases and the second grader's in 279; the difference was settled by the rulings in section 4 and the reason is written down. Ledger grades that differ from the regrade's final grade: 0. Agreement here is a measure of how well the rubric can be applied twice, not of whether the grade is right.

| Disagreement (extractor to second grader) | Incidents |
|---|---|
| CONFIRMED to STRONG | 29 |
| STRONG to SUSPECTED | 25 |
| STRONG to CONFIRMED | 20 |
| SUSPECTED to STRONG | 7 |

## 8. Held-out test

Before any sweep result existed, a search-grounded model from a different vendor, outside the build, compiled a list of 70 incidents from 2023 to 2026 that it believed met the definition. It never saw the sweep or the ledger. Each entry was then resolved to an incident in the ledger or excluded with a reason (67 in the ledger, 3 excluded with a reason).

**The sweep alone found 58 of 70 (83%).** The other 12 were fetched separately from their own URLs and are kept visible in [candidates.json](../../Data/AI-Hacking-Incidents/candidates.json) under heldout-gap, so the miss is on the record. The test proves less than "95% recall": a list compiled by one model is a sample of what is findable, and passing it says nothing about incidents neither the list nor the sweep reached. Where the 12 misses came from, by source kind: press 9, government 1, not registered 1, vendor-ti 1.

## 9. What is not counted

- An AI agent that left an evaluation or benchmark with no attacker directing it.
- AI used only as infrastructure (a command channel, a hiding place) with no model doing attack work.
- Influence and propaganda operations with no hacking.
- Tools and proofs of concept built by researchers with no documented use against a real target.
- Report-wide statistics that are not one operation.
- Claims with no source, and incidents whose sources never mention AI.
- Anything before January 2023.

The exclusions at incident level, each with its reason, are in candidates.json under curation.exclude (9).

## Known limits

- **Published reports only.** An attack nobody wrote up is invisible here. The list counts what was published and found; it does not estimate how many attacks happened or how common they are, and a longer list next month would mean more was published.
- **Visibility bias.** The evidence leans toward what Google, Anthropic, OpenAI and the large security vendors can observe on their own platforms. 79 of 286 incidents (28%) cite at least one of those three, and they supply 82 of 410 source citations (20%). Activity involving models those companies cannot see is probably under-reported.
- **Language.** English-language reporting is read best; reports in other languages are probably under-represented.
- **Attribution is the source's.** Actor names, countries and nexus are repeated with the source that gave them, and have not been checked independently.
- **Grades are judgments** against a written rubric. A grade can move when better evidence appears, and each move is recorded.
- **Sources can be wrong or disappear.** Each source carries its fetch date and an archived copy where one exists.
- **Coverage of the grading.** The second grading and the quote check were run on the incidents on file at the export date; a later incident is checked at its own refresh.
- **AI-assisted research.** AI agents searched, extracted and drafted; the checks above are code or a second, separate reader, and a person reviews each update before it is published. Errors will remain.

Corrections with a source URL are welcome at https://hackingincidents.ai/submit/.
