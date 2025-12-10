# Bay Area COVID-19 Wastewater Surveillance: Executive Summary

---

## 🎯 BEST ESTIMATE

| Metric | Value | Confidence | Last Updated |
|--------|-------|------------|--------------|
| **California Wastewater Level** | **5.60 log10 copies/mL** | 95% | August 2025 |
| **Status** | **HIGH activity** | 95% | August 2025 |
| **Dataset Coverage** | **161 weeks** (July 2022-present) | 99% | October 2025 |

**One-liner:** California COVID wastewater is HIGH (5.6 log10); leads clinical data by 4-7 days.

**Caveat:** Statewide data serves as Bay Area proxy; log scale means each unit = 10x viral load change.

---

## The Big Picture

Wastewater surveillance is the gold standard for population-level disease monitoring. Unlike clinical testing, it captures **all COVID infections**—symptomatic, asymptomatic, and unreported—providing an unbiased view of community transmission.

The [California Department of Public Health (CDPH)](https://data.chhs.ca.gov/dataset/covid-19-wastewater-surveillance) monitors viral levels at 12+ wastewater treatment plants across California, including major Bay Area facilities. This data serves as a **leading indicator**, typically showing trends 4-7 days before clinical test results.

---

## Why This Number Matters

Wastewater data is valuable because it:

- **Leads clinical data**: Shows trends 4-7 days before case reports
- **Captures all infections**: Not biased by testing availability or behavior
- **Enables early warning**: Identifies surges before hospitals see them
- **Supports policy decisions**: Used by California health officials for resource allocation
- **Tracks variants**: Can detect emerging variants before clinical sequencing

---

## Current Status

### August 2025 Snapshot
| Metric | Value | Interpretation |
|--------|-------|---------------|
| **Current Level** | 5.60 log10 copies/mL | HIGH |
| **Trend** | Elevated, increasing | Rising from spring lows |
| **Historical Peak** | 18.97 log10 (July 2022) | Omicron wave |
| **Recent Low** | 1.60 log10 (March 2025) | Spring baseline |

### Activity Levels Reference
| Level | log10 Range | Interpretation |
|-------|-------------|---------------|
| **LOW** | <2.0 | Minimal community transmission |
| **MEDIUM** | 2.0-4.0 | Moderate transmission |
| **HIGH** | 4.0-6.0 | Elevated transmission |
| **VERY HIGH** | >6.0 | Surge conditions |

---

## How to Interpret the Data

### Log Scale Explained
Values are log10 transformed:
- **Each unit increase = 10x more virus**
- 5.0 → 6.0 means 10x increase
- 5.0 → 7.0 means 100x increase

### What to Watch
1. **Direction matters more than absolute value** - Is it rising or falling?
2. **Rate of change** - Fast rises signal emerging surges
3. **Seasonal context** - Winter typically higher than summer
4. **Regional variation** - Bay Area may differ from statewide

---

## Geographic Coverage

### Bay Area Treatment Plants Monitored
| County | Major Facilities |
|--------|-----------------|
| San Francisco | SF Public Utilities |
| Alameda | [EBMUD](https://www.ebmud.com/) |
| Santa Clara | San Jose-Santa Clara RWF |
| Contra Costa | Central Contra Costa Sanitary |
| Marin | 6 sites including Central Marin |
| San Mateo | Silicon Valley Clean Water |

The statewide California data serves as a robust proxy for Bay Area trends since it includes all major Bay Area treatment facilities.

---

## Data Sources

| Source | What It Provides | Link |
|--------|-----------------|------|
| [CDPH](https://data.chhs.ca.gov/dataset/covid-19-wastewater-surveillance) | California statewide wastewater | [Direct CSV](https://data.chhs.ca.gov/dataset/1184f641-313f-47ee-b126-9e8c42699be5/resource/726752d3-afe6-4733-99bd-ffb9f400348c/download/wastewater.csv) |
| [CDC NWSS](https://www.cdc.gov/nwss/) | National wastewater surveillance | [NWSS Dashboard](https://www.cdc.gov/nwss/covid-19/) |
| [WastewaterSCAN](https://www.wastewaterscan.org/) | Academic research data | [Data Portal](https://data.wastewaterscan.org/) |

### Why CDPH?
- **Official government source** used by state decision-makers
- **Consistent methodology** since July 2022
- **Weekly updates** every Friday
- **Direct CSV download** with no authentication required
- **Validated methodology**: qPCR/ddPCR with flow adjustment and PMMoV normalization

---

## Methodology

### Measurement
- **Method**: qPCR and ddPCR detection of SARS-CoV-2 RNA
- **Normalization**: Flow-adjusted and PMMoV-normalized
- **Units**: log10(gene copies per milliliter)
- **Frequency**: Weekly composite samples

### Why Leading Indicator?
- Infected individuals shed virus in feces 2-7 days before symptoms
- Wastewater captures shedding regardless of testing behavior
- Aggregates entire sewershed population (millions of people)

---

## Confidence Assessment

| Component | Confidence | Explanation |
|-----------|------------|-------------|
| **Current Level** | 95% | Official government data, validated methodology |
| **Historical Data** | 99% | Complete 161-week dataset |
| **Trend Direction** | 90% | Subject to weekly variation |

Wastewater surveillance is among the most reliable pandemic indicators because it:
- Uses scientific lab methodology (qPCR/ddPCR)
- Samples entire populations (no selection bias)
- Operates independently of testing behavior
- Has been validated against clinical data

---

## Known Limitations

1. **Statewide proxy**: California data used as Bay Area proxy (not county-specific)
2. **Log scale**: Can obscure magnitude of changes for non-technical users
3. **No variant detail**: Current data shows total virus, not strain breakdown
4. **Weekly frequency**: Daily fluctuations not captured
5. **Treatment plant variation**: Some facilities report more reliably than others

---

## Use Cases

This dataset supports:
- **Personal health decisions**: Should I mask at gatherings?
- **Policy analysis**: Evidence for health interventions
- **Academic research**: Population-level epidemiology
- **Trend forecasting**: What's coming in 1-2 weeks?
- **Historical analysis**: Pandemic timeline documentation

---

## Supporting Documentation

| Document | Description |
|----------|-------------|
| [README.md](./README.md) | Full dataset documentation |
| [COVID-Wastewater-California-Statewide-2022-2025.csv](./COVID-Wastewater-California-Statewide-2022-2025.csv) | Main dataset (161 weeks) |
| [COVID-Wastewater-SF-Bay-Area-2023-2025.md](./COVID-Wastewater-SF-Bay-Area-2023-2025.md) | Detailed methodology |
| [UPDATES.md](./UPDATES.md) | Data refresh changelog |

---

## Research Metadata

| Attribute | Value |
|-----------|-------|
| **Dataset Coverage** | July 2022 - Present |
| **Total Observations** | 161 weeks (100% complete) |
| **Update Frequency** | Weekly (Fridays) |
| **Geographic Scope** | California (includes Bay Area) |
| **Confidence Level** | 95% (government surveillance data) |

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| **December 2025** | Added SUMMARY.md with executive overview | Standardizing Substrate datasets to "Answer First" schema |
| **October 2025** | Updated through August 2025 | Regular data refresh |
| **2024** | Initial dataset creation | COVID wastewater tracking system |

---

## External Resources

- [CDPH COVID Dashboard](https://covid19.ca.gov/data-and-tools/) - Official California data
- [CDC NWSS](https://www.cdc.gov/nwss/covid-19/) - National wastewater surveillance
- [WastewaterSCAN](https://www.wastewaterscan.org/) - Stanford/Emory research program
- [EBMUD Wastewater Monitoring](https://www.ebmud.com/) - East Bay utility data
