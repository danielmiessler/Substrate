# The Palantir Question: An Open Inquiry into the Morality and Behavior of Palantir Technologies

**Date:** August 10, 2026
**By:** Daniel Miessler (with Kai)

---

> **Important caveat:** This research was executed entirely by AI systems (Claude, Gemini, Perplexity, and independent primary-source verification passes) with scaffolding designed to emulate research rigor. The data was gathered by AI agents and analyzed by AI agents, then adversarially reviewed by a separate AI agent. While we tried to be thorough and cite real sources—including SEC filings, court records, and procurement documents read directly—this should NOT be considered equivalent to research conducted by a human research team. It's an experiment in AI-assisted research, and the findings are open for debate and discussion. Take it as a starting point, not a definitive answer.

---

## What This Is

Palantir Technologies might be the most polarizing company in America. Half the discourse says it's the software shield of the West: Ukraine targeting support, vaccine logistics, child-exploitation casework. The other half says it's the infrastructure of a surveillance state: deportation tooling, predictive policing, secret deployments.

Both halves are full of claims that turn out to be false.

So we tried to do this properly. We ran four independent AI research efforts across different model vendors so no single model's biases would dominate: one built the strongest honest case FOR the company, one built the strongest honest case AGAINST, one built a neutral factual record from primary documents (SEC filings, court rulings, procurement records), and one did adversarial fact-hygiene on the folklore both sides repeat. Then a separate adversarial review agent attacked the synthesis and we fixed what it broke.

The project is framed as an open question—how should you think about the morality and behavior of this company?—and the steel-man cases, fact-checks, and sources stand on their own so you can answer it yourself. We do also state where the analysis landed (in `findings/SYNTHESIS.md`), along with the question-and-answer dialogue that stress-tested it (`findings/dialogue.md`), including the pushback that forced a concession. Treat the conclusion as one more argument to attack, not as the point of the project.

---

## The Questions We Tried to Answer

**Main question:** What does the verifiable record actually show about the morality and behavior of Palantir Technologies?

**Specific things we looked at:**

1. Which widely repeated claims about Palantir (in both directions) are true, exaggerated, or false?
2. What is the strongest honest case a defender can make?
3. What is the strongest honest case a critic can make?
4. What does the company actually sell, to whom, for how much, and under what governance?
5. What can't be known publicly, and which side does that uncertainty structurally favor?

---

## Headline Findings (Both Directions)

These are the findings that survived cross-vendor verification and adversarial review. The interpretation is left to the reader.

**Claims that failed fact-checking, anti-Palantir side:** "Palantir owns/sells your data" (false—customers own their data contractually and per SEC filings); "Palantir built Lavender/Gospel" (unsupported—the original reporting attributes them to Israeli military intelligence and Palantir denied both by name); "Palantir built the Muslim registry" (false—never existed); "master database on all Americans" (exaggerated and unresolved—see the fact-check file).

**Claims that failed fact-checking, pro-Palantir side:** "Palantir found bin Laden" (unsupported, with a documented laundering chain the company never corrected); "Palantir prevented specific terror attacks" (zero publicly documented attributed cases; the most-cited example is a fictional demo character); "Palantir only serves democracies" (falsified—Gulf-state clients, conceded by the CEO); "Karp studied under Habermas" (false, and in nearly every profile).

**Verified and load-bearing, favorable:** materially useful software to Ukraine (targeting, demining, war-crimes evidence, attested by named Ukrainian officials and first-hand Western reporting); audit logging and granular access controls cited as risk mitigations in government-authored privacy assessments; a privacy and civil liberties engineering team dating to ~2010; an SEC-disclosed categorical refusal to sell to China or Russia.

**Verified and load-bearing, unfavorable:** a 2020 letter declining ICE deportation-operations work on stated human-rights grounds, reversed in 2025 by a contract whose own procurement language covers the "end to end immigration lifecycle from identification to removal"; documented false or strained public statements on checkable claims ("we do not work for ERO"; "no predictive policing workflows anywhere"); the LAPD Inspector General's audit of a Palantir-powered program; a German constitutional court voiding the legal basis of a Palantir-powered police deployment; a share structure that holds founder voting power at 49.999999% permanently, under which every independent-audit shareholder proposal has failed; no independent third-party audit of any deployment anywhere in the public record.

**Structurally unknowable:** whether Palantir's software contributed to any specific counterterrorism outcome; what its software does inside Israeli Ministry of Defense systems; operational error rates of its immigration-enforcement tools. Note the asymmetry: classification protects the company's heroic claims (unfalsifiable, so they win by default) while blocking accountability claims (unfalsifiable, so they lose by default).

---

## What's In This Folder

- **README.md**—You're reading it
- **METHODOLOGY.md**—The multi-vendor research design, steel-man protocol, and adversarial review process
- **SOURCES.md**—Full source inventory with quality tiers and confidence grades
- **findings/fact-check.md**—Claim-by-claim verdicts on the folklore, both directions
- **findings/factual-record.md**—The neutral company record: business model, contracts, governance, controversy timeline
- **findings/steel-man-for.md**—The strongest honest case for Palantir
- **findings/steel-man-against.md**—The strongest honest case against Palantir
- **findings/dialogue.md**—The anonymized Q&A that stress-tested the analysis, including the pushback that changed it
- **findings/SYNTHESIS.md**—Where the analysis landed: four separable questions, the predictive model, and the pro-Western-state versus pro-Western-values distinction

---

## How to Disagree

This is a Substrate project: it's meant to be argued with. If you find a factual error, a missing source, a stronger argument for either side, or a claim that doesn't survive scrutiny, open a pull request or an issue. Claims with sources beat claims without them.
