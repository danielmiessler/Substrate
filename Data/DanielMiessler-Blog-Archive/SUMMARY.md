# Daniel Miessler Blog Archive: Executive Summary

---

## 🎯 BEST ESTIMATE

| Metric | Value | Confidence | Last Updated |
|--------|-------|------------|--------------|
| **Published posts** | **3,027** | 100% | 2026-07-20 |
| **Years of publishing** | **1996–2026 (30 years)** | 100% | 2026-07-20 |
| **Distinct tags** | **100** | 100% | 2026-07-20 |

**One-liner:** 3,027 published posts spanning 30 years of continuous writing at danielmiessler.com.

**Caveat:** Metadata only (title, subtitle, URL, date, tags) — post bodies are not included.

---

## Quick Context

This is the complete published-post metadata for danielmiessler.com, one of the longest-running continuously-maintained personal sites on the internet. It powers the site's ⌘K search palette and is useful for studying long-horizon personal publishing: topic drift, output cadence, and tag evolution across three decades.

---

## Methodology Summary

**Approach:** Generated at site build time from post frontmatter; the same artifact the live site serves for client-side search.

**Sources:**
- [danielmiessler.com](https://danielmiessler.com) — the canonical site
- Live artifact: [danielmiessler.com/data/search-index.json](https://danielmiessler.com/data/search-index.json)

**Definition Used:** A post counts if it is published on the live site with a well-formed slug. ~38 legacy entries with corrupt frontmatter (unparseable slugs) and one entry with no parseable date are excluded or blanked.

---

## Detailed Findings

### Top tags

| Tag | Posts |
|-----|-------|
| technology | 1,513 |
| society | 1,275 |
| culture | 909 |
| cybersecurity | 781 |
| business | 753 |

### Files

| File | Contents |
|------|----------|
| `danielmiessler-blog-archive.csv` | One row per post: title, subtitle, absolute URL, date (YYYY-MM-DD), pipe-delimited tags |
| `search-index.json` | The compact tuple form served by the live site: `[title, subtitle, path, date, tags]` |

---

## Source Analysis

Single authoritative source: the site's own build pipeline, which reads post frontmatter directly. No third-party scraping or estimation involved; confidence is 100% for what the site itself publishes.
