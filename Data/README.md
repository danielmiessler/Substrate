# Data

## Purpose

The Data directory contains curated, ground-truth datasets about important aspects of human life, society, and progress, along with documentation for external data sources. This is a collection of reliable, parseable data that can be used for analysis, research, and informed decision-making.

---

## 🎯 "Answer First" Schema

**All Substrate datasets follow the "Answer First" schema.** Every dataset has a `SUMMARY.md` file that puts the best estimate at the top.

### Quick Reference

| Dataset | Best Estimate | One-liner |
|---------|--------------|-----------|
| [Knowledge Worker Compensation](./Knowledge-Worker-Global-Salaries/SUMMARY.md) | $35-50T global, $6-12T US | Global knowledge workers earn $35-50T annually |
| [US GDP](./US-GDP/SUMMARY.md) | $23.77T (Q2 2025) | U.S. real GDP is $23.77T, growing 3.8% quarterly |
| [US Inflation](./US-Inflation/SUMMARY.md) | 2.5% YoY | U.S. inflation is ~2.5% with CPI at 323.4 |
| [Presidential Approval](./US-Presidential-Approval/SUMMARY.md) | ~41% (Trump Nov 2025) | Trump approval averages ~41% (net -13) |
| [COVID Wastewater](./Bay-Area-COVID-Wastewater/SUMMARY.md) | HIGH (5.6 log10) | California COVID wastewater is HIGH |
| [US Common Metrics](./US-Common-Metrics/SUMMARY.md) | 60+ indicators | Real-time dashboard of U.S. economic indicators |
| [Pulitzer Winners](./Pulitzer-Prize-Winners/SUMMARY.md) | 249 winners | Complete Arts & Letters database (1918-2024) |

### Schema Structure

Every `SUMMARY.md` follows this structure:

```markdown
# [Dataset Title]: Executive Summary

## 🎯 BEST ESTIMATE

| Metric | Value | Confidence | Last Updated |
|--------|-------|------------|--------------|
| **[Primary Metric]** | **[VALUE]** | [X%] | [DATE] |

**One-liner:** [12 words max - the quotable answer]

**Caveat:** [Single most important limitation]

---

## The Big Picture
[2-3 sentences: What this is, why it matters, major uncertainty]

## Why This Number Matters
[Context for why this metric is important]

## How the Number Is Calculated
[Methodology summary]

## Confidence Assessment
[What we know well vs. what's uncertain]

## Alternative Estimates & Why We Differ
[When applicable: other approaches and why we chose ours]

## Data Sources
[Links to authoritative sources]

## Supporting Documentation
[Links to detailed data files]

## Changelog
[When estimates changed and why]
```

### Confidence Level Guidelines

| Level | Percentage | When to Use |
|-------|------------|-------------|
| **Very High** | 95%+ | Official government data, single authoritative source |
| **High** | 85-94% | Multiple corroborating sources, minor definitional variation |
| **Medium** | 65-84% | Extrapolated from good sources, definitional uncertainty |
| **Low** | <65% | Limited data, significant methodological issues |

### Creating New Datasets

Use the [DATASET-TEMPLATE.md](./DATASET-TEMPLATE.md) when creating new datasets.

**Mandatory Sections:**
1. **🎯 BEST ESTIMATE** - Must be first content section after title
2. **One-liner** - 12 words max, quotable
3. **Caveat** - Single most important limitation
4. **Methodology Summary** - How the estimate was derived
5. **Sources** - Authoritative links
6. **Changelog** - Track revisions with reasons

**Recommended Section:**
- **Alternative Estimates & Why We Differ** - When other estimates exist

---

## Directory Structure

```
Data/
├── DATASET-TEMPLATE.md                    # Schema template for new datasets
├── README.md                              # This file
├── UPDATES.md                             # Global changelog
├── sources/                               # External data source catalog
│   ├── DS-00001—WHO_Global_Health_Observatory/
│   ├── DS-00002—UN_SDG_Indicators/
│   ├── DS-00003—World_Bank_Open_Data/
│   ├── DS-00004—FRED_Economic_Wellbeing/
│   ├── DS-00005—CDC_WONDER_Mortality/
│   ├── DS-00006—Census_ACS_Social_Wellbeing/
│   ├── DS-00007—BLS_JOLTS_Labor_Market/
│   ├── DS-00008—EPA_Air_Quality_System/
│   └── WELLBEING_DATA_SOURCES.md
├── Bay-Area-COVID-Wastewater/             # COVID wastewater surveillance
│   └── SUMMARY.md                         # ← Start here
├── Knowledge-Worker-Global-Salaries/      # Knowledge economy compensation
│   └── SUMMARY.md                         # ← Start here
├── Pulitzer-Prize-Winners/                # Arts & Letters Pulitzer data
│   └── SUMMARY.md                         # ← Start here
├── US-Common-Metrics/                     # 60+ US economic indicators
│   └── SUMMARY.md                         # ← Start here
├── US-GDP/                                # US GDP data
│   └── SUMMARY.md                         # ← Start here
├── US-Inflation/                          # CPI/inflation data
│   └── SUMMARY.md                         # ← Start here
└── US-Presidential-Approval/              # Approval ratings 1937-2025
    └── SUMMARY.md                         # ← Start here
```

**Start with SUMMARY.md** in any dataset directory—it gives you the answer first.

---

## Dataset Categories

### Economic Indicators
- **[US GDP](./US-GDP/SUMMARY.md)** - Gross Domestic Product (1929-2025)
- **[US Inflation](./US-Inflation/SUMMARY.md)** - CPI data (1947-2025)
- **[US Common Metrics](./US-Common-Metrics/SUMMARY.md)** - 60+ economic indicators dashboard
- **[Knowledge Worker Compensation](./Knowledge-Worker-Global-Salaries/SUMMARY.md)** - Global and US compensation estimates

### Political & Social
- **[Presidential Approval](./US-Presidential-Approval/SUMMARY.md)** - Approval ratings (1937-2025)
- **[Pulitzer Winners](./Pulitzer-Prize-Winners/SUMMARY.md)** - Arts & Letters awards (1918-2024)

### Health & Public Safety
- **[COVID Wastewater](./Bay-Area-COVID-Wastewater/SUMMARY.md)** - California wastewater surveillance

---

## Philosophy

**Answer First**: Every dataset puts the best estimate at the top. Don't make people hunt for the number.

**Ground Truth**: All datasets come from authoritative, verifiable sources. We prioritize data quality and transparency over volume.

**Human-Readable + Machine-Parseable**: Data is stored in CSV and Markdown formats—no opaque databases. Anyone (human or AI) can read, understand, and analyze these datasets with minimal friction.

**Confidence-Aware**: Every estimate includes confidence levels. We distinguish between what we know well (99%+) and what's uncertain (65%).

**Traceable**: Every number links to its authoritative source. Changes are logged with reasons.

---

## Data Quality Standards

### Mandatory Requirements
- **Confidence level** - Every estimate needs uncertainty bounds
- **Last updated** - When data was most recently validated
- **Source links** - Authoritative URLs for verification
- **Changelog** - Track revisions with reasons

### Quality Indicators
- **Accuracy**: Data from verified, authoritative sources
- **Completeness**: Gaps and missing data documented
- **Timeliness**: Update frequency and freshness noted
- **Transparency**: Methodology documented and reproducible

---

## Contributing Datasets

When adding new datasets:

1. **Use the template** - Start with [DATASET-TEMPLATE.md](./DATASET-TEMPLATE.md)
2. **Answer first** - Create SUMMARY.md with 🎯 BEST ESTIMATE at top
3. **Verify sources** - Use authoritative, primary sources
4. **Set confidence** - Use the confidence level guidelines
5. **Document changes** - Include changelog from day one
6. **Link thoroughly** - Every number should trace to a source

### Anti-Patterns to Avoid

1. **Burying the answer** - Never make someone scroll to find the number
2. **No confidence level** - Every estimate needs uncertainty bounds
3. **Stale dates** - Always show when last validated
4. **Methodology before answer** - People want the answer first
5. **No changelog** - Revisions without history erode trust

---

## Integration with Substrate

Data sources support other Substrate components:

- **Claims** can be backed by datasets with linked evidence
- **Arguments** can reference specific metrics and sources
- **Solutions** can be evaluated using ground-truth indicators
- **Plans** can track progress with authoritative data

---

## Relationship with Research Projects

The Data directory works with `research/` to maintain traceability between research and resulting datasets.

**Research → Data Workflow:**

1. **Input**: Research projects use `Data/sources/` for external APIs
2. **Analysis**: Research performs synthesis and investigation
3. **Output**: Curated datasets stored in `Data/` with SUMMARY.md
4. **Documentation**: Methodology and sources fully documented

**Key Principles:**
- Each dataset includes `source.md` documenting origin
- Research projects document which sources they used
- Bidirectional links maintain complete traceability
- Changes tracked in both research notes and dataset changelogs

---

**Mission**: Build a trusted foundation of ground-truth data to support human understanding and progress.
