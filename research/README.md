# Research Projects

## Purpose

The `research/` directory contains completed research projects with their findings, methodology, and analysis. Research projects typically use external data sources from `Data/sources/` and produce curated datasets that are stored in `Data/`.

## Relationship with Data Directory

Research projects work in conjunction with the `Data/` directory:

**Research → Data Workflow:**

1. **Input**: Use `../Data/sources/` to access external data APIs and endpoints
2. **Analysis**: Perform analysis, synthesis, and investigation
3. **Output**: Produce curated datasets stored in `../Data/` top-level
4. **Documentation**: Document methodology, sources used, and resulting datasets

## Required Research Project Structure

Each research project should follow this structure:

```
research/[project-name-YYYY-MM]/
├── README.md                    # Overview, research question, primary findings
├── SOURCES.md                   # Links to ../Data/sources/ used as inputs
├── METHODOLOGY.md               # Research design and methods
├── findings/                    # Analysis and insights
│   ├── SYNTHESIS.md            # Cross-analysis synthesis
│   └── [topic-specific].md     # Individual findings
└── [links to ../Data/[dataset]/]  # Reference to resulting dataset
```

## README.md Template

```markdown
# [Research Project Title]

**Research Study**
**Date:** YYYY-MM-DD
**Researcher:** [Name]
**Research Design:** [Brief description]

---

## Research Question

[Primary research question or hypothesis]

---

## Methodology

[Brief methodology summary - link to METHODOLOGY.md for details]

---

## Primary Finding

[Key finding or answer to research question]

---

## Data Sources Used

This research used the following external data sources from `../Data/sources/`:
- [DS-00001—WHO_Global_Health_Observatory](../Data/sources/DS-00001—WHO_Global_Health_Observatory/)
- [DS-00002—UN_SDG_Indicators](../Data/sources/DS-00002—UN_SDG_Indicators/)

See [SOURCES.md](./SOURCES.md) for complete source documentation.

---

## Resulting Dataset

This research produced the following curated dataset:
- [Dataset Name](../Data/[Dataset-Name]/)
  - `[dataset-file].md` - Primary dataset
  - `source.md` - Metadata linking back to this research

---

## Findings

[Links to findings/ directory]

---

## Integration with Substrate

[How this research connects to Problems, Solutions, Claims, etc.]
```

## SOURCES.md Template

```markdown
# Data Sources Used

**Research Project:** [Project Name]
**Date:** YYYY-MM-DD

---

## External Data Sources

This research used the following data sources from `../Data/sources/`:

### DS-00001 — WHO Global Health Observatory
- **Path:** `../Data/sources/DS-00001—WHO_Global_Health_Observatory/`
- **What we used:** [Specific indicators or datasets]
- **Why we used it:** [Reason for using this source]
- **Date accessed:** YYYY-MM-DD

### DS-00002 — UN SDG Indicators
- **Path:** `../Data/sources/DS-00002—UN_SDG_Indicators/`
- **What we used:** [Specific indicators or datasets]
- **Why we used it:** [Reason for using this source]
- **Date accessed:** YYYY-MM-DD

---

## Additional Sources

[Any sources not in Data/sources/ - these should be added to Data/sources/ for future research]

---

## Data Processing

[Brief description of how raw data from sources was processed, cleaned, and analyzed]
```

## Key Principles

1. **Traceability**: Always document which `Data/sources/` were used
2. **Reproducibility**: Methodology should enable others to reproduce findings
3. **Dataset Production**: Curated outputs go in `../Data/` with `source.md` linking back
4. **Bidirectional Links**: Research → Data and Data → Research connections maintained
5. **Source Citation**: Credit all external sources properly

## Benefits of This Structure

- **Provenance**: Clear lineage from source → research → dataset
- **Reproducibility**: Research can be verified and repeated
- **Reusability**: Future research can build on existing work
- **Quality**: Traceability enables validation
- **Discovery**: Easy to find research that used specific sources

## Example: Knowledge Worker Compensation Study

```
research/knowledge-worker-compensation-2025-10/
├── README.md                    # Study overview
├── SOURCES.md                   # BLS, BEA, Census sources used
├── METHODOLOGY.md               # 40-agent parallel research design
├── findings/
│   ├── SYNTHESIS.md
│   ├── variance-analysis.md
│   └── bayesian-reconciliation.md
└── [links to ../Data/Knowledge-Worker-Global-Salaries/]

../Data/Knowledge-Worker-Global-Salaries/
├── knowledge-worker-compensation-data.md    # Curated dataset
└── source.md                               # Links back to research project
```

---

**Mission**: Conduct rigorous research that produces traceable, reproducible, and reusable datasets to support human understanding and progress.
