# Dataset Template: "Answer First" Schema

Use this template for all new Substrate datasets. The key principle: **put the answer at the top**.

---

## Template

```markdown
# [Dataset Title]

---

## 🎯 BEST ESTIMATE

| Metric | Value | Confidence | Last Updated |
|--------|-------|------------|--------------|
| **[Primary Metric]** | **[VALUE]** | [X%] | [YYYY-MM-DD] |
| **[Secondary Metric]** | **[VALUE]** | [X%] | [YYYY-MM-DD] |

**One-liner:** [12 words max - the crisp answer someone can quote]

**Caveat:** [Single most important limitation in one sentence]

---

## Quick Context

[2-3 sentences maximum:
- What this number represents
- Why it matters
- Major source of uncertainty]

---

## Methodology Summary

**Approach:** [One sentence on how this estimate was derived]

**Sources:**
- [Primary authoritative source with link]
- [Secondary source]
- [Tertiary source]

**Definition Used:** [How the metric was precisely defined]

---

## Detailed Findings

[Main body of research - tables, regional breakdowns, sector analysis, etc.]

---

## Source Analysis

### Why These Sources?

| Source | Strengths | Weaknesses | Weight Given |
|--------|-----------|------------|--------------|
| **[Source 1]** | [Strength] | [Weakness] | [High/Medium/Low] |

### Key Source Conflicts

1. [Where sources disagreed and how we resolved it]

---

## Research Metadata

| Attribute | Value |
|-----------|-------|
| **Research Date** | [YYYY-MM-DD] |
| **Researcher** | [Name/System] |
| **Method** | [Brief description] |
| **Confidence Level** | [X%] |
| **Known Gaps** | [Brief list] |

---

## Commonly Confused Metrics

[Optional section - use when the metric is often confused with similar-sounding metrics]

| Metric | Value | What It Actually Measures | Source |
|--------|-------|---------------------------|--------|
| **This dataset** | [Value] | [Description] | This research |
| **Similar metric 1** | [Value] | [Description] | [Source] |
| **Similar metric 2** | [Value] | [Description] | [Source] |

**Do not compare these - they measure different things.**

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| [YYYY-MM-DD] | [What changed] | [Why it changed] |

---

## Full Data

[CSV data, detailed tables, raw research output, links to gists, etc.]
```

---

## Schema Requirements

### Mandatory Sections

1. **🎯 BEST ESTIMATE** - Must be the first content section after title
2. **One-liner** - 12 words max, quotable
3. **Caveat** - Single most important limitation
4. **Quick Context** - 2-3 sentences max
5. **Methodology Summary** - How was this derived
6. **Sources** - Where did data come from
7. **Changelog** - Track all revisions

### Mandatory Fields in BEST ESTIMATE Table

- **Value** - The actual number/range
- **Confidence** - Percentage (95%, 85%, 65%, etc.)
- **Last Updated** - Date of most recent validation

### Confidence Level Guidelines

| Level | Percentage | When to Use |
|-------|------------|-------------|
| Very High | 95%+ | Official government data, single authoritative source, widely agreed |
| High | 85-94% | Multiple corroborating sources, minor definitional variation |
| Medium | 65-84% | Extrapolated from good sources, definitional uncertainty |
| Low | <65% | Limited data, significant methodological issues, contested |

### Changelog Requirements

Every revision must include:
- **Date** of change
- **What** specifically changed
- **Why** it changed (what new evidence/analysis prompted revision)

---

## Anti-Patterns to Avoid

1. **Burying the answer** - Never make someone scroll to find the number
2. **No confidence level** - Every estimate needs uncertainty bounds
3. **Stale dates** - Always show when last validated
4. **Methodology before answer** - People want the answer first, then methodology
5. **No changelog** - Revisions without history erodes trust
6. **Comparing incomparables** - Always note when similar-sounding metrics measure different things

---

## Examples

### Good: Knowledge Worker Compensation

```markdown
## 🎯 BEST ESTIMATE

| Metric | Value | Confidence | Last Updated |
|--------|-------|------------|--------------|
| **Global Knowledge Worker Compensation** | **$35-50 trillion/year** | 65% | December 2025 |

**One-liner:** Global knowledge workers earn $35-50T annually in wages and benefits.

**Caveat:** "Knowledge worker" has no standard definition - range reflects definitional uncertainty.
```

### Good: US GDP

```markdown
## 🎯 BEST ESTIMATE

| Metric | Value | Confidence | Last Updated |
|--------|-------|------------|--------------|
| **US GDP (2024)** | **$29.17 trillion** | 99% | December 2025 |

**One-liner:** US GDP is $29.17 trillion as of Q3 2024.

**Caveat:** Final Q4 revision may adjust by ±0.5%.
```

---

## Migration Guide

When updating existing datasets to this schema:

1. Add `## 🎯 BEST ESTIMATE` section at the very top
2. Extract the key metric into the table format
3. Write a 12-word one-liner
4. Identify the single most important caveat
5. Add `## Changelog` if not present
6. Ensure confidence levels are explicit
7. Move detailed methodology AFTER the answer sections
