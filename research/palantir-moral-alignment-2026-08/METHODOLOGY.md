# Methodology

## Design Goal

The Palantir discourse is polluted in both directions: pro-side folklore (prevented attacks, found bin Laden) and anti-side folklore (sells your data, built Gaza's targeting AI) circulate as fact. The design goal was to build both steel-man cases from claims that survive verification, using multiple independent AI systems so no single model's training biases shape the record.

## Phase 1—Four Independent Research Efforts

Four research agents ran in parallel, each on a different foundation or search stack, each blind to the others' output:

1. **The case against** (Claude with web search): the serious critic's evidence base—ICE contracts, predictive policing, NHS, Israel/Gaza, structural accountability arguments—with every item marked VERIFIED, ALLEGED, or WEAK, and Palantir's response to each charge mapped alongside it.

2. **The case for** (Gemini with search grounding): the honest defender's evidence base—the Karp/Zamiska book's actual arguments, the Ukraine record, public-health work, the stated ethics architecture, the accountability-upgrade argument—with every item marked VERIFIED, CLAIMED, or WEAK, plus the strongest published criticisms of the book.

3. **Neutral factual record** (Perplexity, primary documents): business model, revenue, contracts with values and dates, governance and share structure, legal record, controversy timeline. SEC filings (10-K, DEF 14A, 8-K) were fetched and parsed directly rather than quoted from commentary. Conflicting reports were flagged with both versions.

4. **Myth-check** (independent primary-source verification): adversarial fact hygiene on the most-circulated claims in both directions, verified against primary sources directly—the FEC API for political donations, USAspending for contract data, Palantir's own published letters, court records. This pass also identified quotes commonly used out of context and reconstructed their full context.

Cross-corroboration: claims appearing in only one return were either flagged as single-source or dropped. The returns disagreed on some points (for example, the fate of ICE's in-house FALCON replacement); disagreements were resolved by softening claims to what both sources support, or flagging them as contested.

## Phase 2—Steel-Man Construction

Both cases were built to a falsifiable standard: the FOR case fails if a serious Palantir defender would say "that's not our best argument," and the AGAINST case fails if an ACLU/Amnesty-grade critic would say the same. Each case was also required to disown its own side's failed folklore explicitly, on the theory that a steel man carrying debunked claims gets discredited wholesale.

## Phase 3—Adversarial Review

A separate top-tier AI agent with no involvement in the research or drafting attacked the synthesized draft: factual spot-checks against live primary sources, role-played defender and critic responses to each steel man, decomposition of the synthesis logic, and a calibration check for bias toward the commissioning reader's stated prior.

The review produced nine findings, all adopted. The most significant: the against case had omitted its strongest Gaza argument (the documented-partnership argument, distinct from the debunked Lavender attribution); a load-bearing 2020 quote had been truncated in a way that weakened it; a poll result had been read in the direction of the reader's prior when it actually cut the other way; and a statistic from a police audit had been quoted without the audit's own caveat.

## Phase 4—Dialogue Stress-Test

After the analysis was delivered, a question-and-answer exchange (included as `findings/dialogue.md`, anonymized) stress-tested the conclusions. This produced one substantive correction adopted into the final synthesis: the claim "their ethics are not real" was successfully challenged and recalibrated to "their ethics are likely sincere but demonstrably non-binding"—the China/Russia refusal cannot serve as evidence of ethics because it is overdetermined (selling to adversaries would forfeit the entire US government franchise), which leaves exactly one clean case on record where stated ethics and commercial incentives pointed in opposite directions.

## Source-Quality Tiers

- **Tier 1:** primary documents—SEC filings, court judgments, procurement text, FOIA productions, the company's own signed letters, inspector-general audits.
- **Tier 2:** NGO reports with documentary sourcing (Amnesty, ACLU, EFF, Privacy International), including the paired claim/rebuttal documents where Palantir's full response is published alongside.
- **Tier 3:** investigative journalism with primary-document backing (The Verge/Type Investigations, The Intercept, 404 Media, NPR, The Register).
- **Tier 4:** peer-reviewed scholarship.
- **Excluded:** advocacy blogs without primary sourcing, aggregators, and commentary quotable only as reaction.

## Known Limitations

1. **AI-conducted research.** Agents can misread sources, and URL verification proves a page exists, not that it was understood correctly. Spot-checks were performed but not on every claim.
2. **The classification asymmetry.** Much of what matters is classified. This systematically favors the company's unfalsifiable positive claims and systematically starves accountability claims of evidence. No methodology fixes this; we name it instead.
3. **One research leg partially failed.** The cross-vendor OpenAI deep-research pass inside the myth-check stalled and never returned; the myth-check was completed with independent primary-source verification instead, so the vendor diversity there is thinner than designed.
4. **Named-victim evidence is sparse.** Harms are documented at cohort level (arrest counts, watchlist composition); public reporting rarely traces a named individual's outcome to a specific software output. This is partly privacy protection and partly system opacity, and it is a genuine weakness of the against case as evidence.
5. **The counterfactual is untested.** No public study establishes what agencies would have done with different vendors or in-house tools. Both cases argue into that vacuum.
