# Data Directory Update Log

This file tracks all datasets added to the Substrate Data directory.

---

## 2025-10-16 - U.S. Gross Domestic Product (GDP)

**Dataset**: US-GDP
**Status**: Active
**Coverage**: 1929-2024 (annual), Q1 1947 - Q2 2025 (quarterly)
**Source**: Federal Reserve Economic Data (FRED) / Bureau of Economic Analysis (BEA)

### Contents
- `Real-GDP-Quarterly-1947-2025.csv` - Quarterly real GDP (314 data points)
- `Real-GDP-Annual-1929-2024.csv` - Annual real GDP (96 data points)
- `US-GDP-1929-2025.md` - Comprehensive metadata documentation
- `README.md` - Dataset documentation with research methodology and historical context
- `UPDATES.md` - Dataset-specific change log
- `RESOURCES.md` - Data sources, APIs, and download instructions

### Description
Authoritative U.S. GDP data representing the total value of all goods and services produced within the United States. Real GDP (chained 2017 dollars) enables inflation-adjusted comparisons across 96 years of American economic history. Quarterly data provides 78 years of detailed business cycle information. Data sourced directly from BEA via FRED, the Federal Reserve's economic data platform.

### Research Methodology
Created through comprehensive parallel research using 10 specialized research agents across 3 services (Perplexity, Claude WebSearch, Gemini). 20 focused queries evaluated data sources, historical coverage, measurement methodologies, and quality standards. 95%+ confidence level in source selection. Research confirmed BEA as primary official U.S. government source with FRED providing optimal accessibility.

### Key Features
- **Gold standard economic indicator**: Primary measure of U.S. economic activity
- **Long historical coverage**: 96 years annual (1929-2024), 78 years quarterly (1947-2025)
- **Highest data quality**: Three-stage quarterly revision process + annual comprehensive updates
- **Full transparency**: Public domain data with complete methodology documentation
- **Easy access**: Direct CSV downloads and free APIs available

---

## 2025-10-07 - Bay Area COVID-19 Wastewater Surveillance

**Dataset**: Bay-Area-COVID-Wastewater
**Status**: Active
**Coverage**: 2022-07-09 to 2025-08-02 (161 weekly data points)
**Source**: California Department of Public Health (CDPH)

### Contents
- `COVID-Wastewater-California-Statewide-2022-2025.csv` - Main dataset
- `COVID-Wastewater-SF-Bay-Area-2023-2025.md` - Metadata documentation
- `README.md` - Dataset documentation and research methodology
- `UPDATES.md` - Dataset-specific change log
- `RESOURCES.md` - Official dashboard and data source links

### Description
California statewide COVID-19 wastewater surveillance data serving as proxy for Bay Area trends. Includes weekly viral concentration measurements from 12+ treatment plants across Bay Area counties (SF, Alameda, Santa Clara, Contra Costa, Marin, San Mateo).

---

## 2025-10-07 - Pulitzer Prize Winners (Arts & Letters)

**Dataset**: Pulitzer-Prize-Winners
**Status**: Active
**Coverage**: 1918-2024 (249 winners in Arts & Letters categories)
**Source**: Wikidata
**Focus**: High-quality, complete coverage of Poetry, Drama, and General/Special awards

### Contents
- `Pulitzer-Prize-Winners-Arts-Letters-1918-2024.csv` - Combined dataset
- `category-poetry.csv` - Poetry winners (105)
- `category-drama.csv` - Drama winners (109)
- `category-general.csv` - General/Special awards (35)
- `README.md` - Dataset documentation and research methodology
- `UPDATES.md` - Dataset-specific change log
- `RESOURCES.md` - Official source links

### Description
Curated Pulitzer Prize winners dataset focusing on Arts & Letters categories with high-quality, near-complete coverage. Includes 107 years of Poetry and Drama awards (1918-2024) plus General/Special citations. Data sourced from Wikidata SPARQL query with comprehensive cleaning. Journalism categories intentionally excluded due to low Wikidata coverage - prioritizing data quality over breadth.

---

## Future Datasets

New datasets will be added above this line in reverse chronological order (newest first).

---

## 2026-07-21 - Vulnerability Disclosure & Data Breach Data

**Dataset**: Vulnerability-And-Breach-Data
**Status**: Active
**Coverage**: 2016-2026 (CVE annual; ITRC/DBIR/IBM breach series), Jan 2018 - Jul 2026 (Patch Tuesday monthly)
**Source**: Composite - CVE.org/NVD, Zero Day Initiative, MITRE CWE, CISA KEV (live feed), Mandiant/GTIG, ITRC, Verizon DBIR, IBM Cost of a Data Breach

### Contents
- Seven JSON data files with per-figure source URLs inline
- `SUMMARY.md` / `Vulnerability-And-Breach-Data.md` - answer-first documentation
- `source.md` - source families, acquisition method, refresh cadences, sync contract
- `update.ts` - integrity check + live CISA KEV drift probe + release calendar
- Research project: `research/vulnerability-breach-ai-analysis-2026-07/`

### Key Finding
Both vulnerabilities and breaches hit records; no dataset attributes either to AI. Vulnerability exploitation became the #1 breach entry vector in DBIR 2026 (~31%) - first time in 19 years.
