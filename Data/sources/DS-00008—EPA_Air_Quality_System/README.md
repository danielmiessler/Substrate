# DS-00008 — EPA Air Quality System (AQS)

**Environmental Health & Quality of Life Indicators**

## Overview

The EPA Air Quality System (AQS) is the **authoritative source** for ambient air quality measurements in the United States. This data source provides regulatory-grade air quality data from 4,000+ monitoring stations nationwide, with a focus on parameters most critical to human health and wellbeing.

**Key Insight:** Air quality is a **structural determinant of wellbeing**. You cannot "self-care" your way out of breathing toxic air. PM2.5 exposure reduces life expectancy by months to years in polluted areas. Environmental injustice: low-income communities and communities of color are disproportionately exposed.

## Why This Matters for Substrate

### Human Progress & Wellbeing Focus

Air quality is a fundamental structural constraint on human flourishing:

- **Life Expectancy:** PM2.5 reduces longevity by 1.8 years globally (Air Quality Life Index)
- **Involuntary Exposure:** You breathe ~20,000 times per day — exposure is unavoidable
- **Environmental Injustice:** ZIP code determines exposure — structural inequality
- **Health Impacts:** Cardiovascular disease, respiratory disease, cognitive decline, pregnancy outcomes
- **Quality of Life:** Restricted outdoor activity on high pollution days, healthcare costs, lost productivity

**Unlike individual health behaviors (diet, exercise), air quality is a collective problem requiring structural solutions.**

## Data Source Details

### Authority
- **Organization:** U.S. Environmental Protection Agency (EPA)
- **Office:** Office of Air Quality Planning and Standards (OAQPS)
- **Legal Mandate:** Clean Air Act (1970, amended 1990)
- **Data Quality:** Federal Reference/Equivalent Methods (FRM/FEM) — regulatory-grade
- **Established:** 1971 (50+ years of air quality monitoring)

### Coverage
- **Geographic:** United States (50 states, DC, territories)
- **Temporal:** 1980-present (45+ years of validated data)
- **Granularity:** Monitoring site level (latitude/longitude)
- **Network Size:** 4,000+ active monitoring stations
- **Update Frequency:** Continuous monitoring; 6-month validation lag for finalized data

### Key Parameters (Health Priority)

| Code | Parameter | Health Impact | Priority |
|------|-----------|---------------|----------|
| **88101** | **PM2.5** | Mortality, cardiovascular disease, respiratory disease, cognitive decline, reduced life expectancy | **CRITICAL** |
| **44201** | **Ozone (O3)** | Respiratory irritant, asthma exacerbation, lung damage | **HIGH** |
| 42401 | SO2 | Respiratory irritant | Medium |
| 42101 | CO | Cardiovascular stress | Medium |
| 42602 | NO2 | Respiratory irritant, ozone precursor | Medium |
| 81102 | PM10 | Respiratory health | Medium |

## Repository Structure

```
DS-00008—EPA_Air_Quality_System/
├── README.md              # This file (overview and usage guide)
├── source.md              # Comprehensive cataloging (authority, methodology, limitations)
├── update.ts              # TypeScript data fetcher with rate limiting
├── .env.example           # Environment variable template (API credentials)
├── .gitignore             # Git ignore patterns (protects API keys, data files)
└── data/                  # Air quality data (JSON files)
    └── README.md          # Data structure documentation
```

## Quick Start

### Prerequisites

- **Bun** (JavaScript runtime): https://bun.sh/
- **EPA AQS API Key** (free, immediate approval)

### 1. Register for API Access

**Option A: Email Registration**
```bash
# Email aqs.support@epa.gov
Subject: AQS API Access Request
Body: Please provide API key for email: your_email@example.com
```

**Option B: Automated Signup**
```bash
curl "https://aqs.epa.gov/data/api/signup?email=your_email@example.com"
```

You will receive your API key via email (typically within minutes).

### 2. Configure Environment Variables

```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your credentials
# Replace your_email@example.com and your_api_key_here
nano .env
```

### 3. Fetch Air Quality Data

**Default: Fetch PM2.5 and Ozone for California (last year)**
```bash
bun update.ts
```

**Custom: Specify year, states, parameters**
```bash
# Multiple states, specific year
bun update.ts --year 2023 --states CA,NY,TX

# Focus on PM2.5 only (most health-critical)
bun update.ts --year 2023 --states CA --parameters PM25

# Full criteria pollutants
bun update.ts --year 2023 --states CA,NY,TX,FL --parameters PM25,OZONE,SO2,CO,NO2,PM10
```

**Get help**
```bash
bun update.ts --help
```

### 4. View Results

Data files are saved in `data/` directory:
```bash
ls -lh data/
# aqs_2023_CA_2025-10-27.json
# aqs_2023_CA_stats_2025-10-27.json
```

## API Rate Limits (CRITICAL)

**EPA enforces strict rate limits:**
- ⚠️ **10 requests per minute** (HARD LIMIT)
- ⚠️ **Account suspension if violated**

**The update.ts script automatically enforces 6-second delays between requests.**

**Do NOT bypass rate limiting.** EPA will suspend your account.

## Data Validation Lag

- **Real-time to preliminary:** <1 hour (via AirNow API)
- **Preliminary to validated:** 6-12 months (quality assurance)
- **AQS finalized data:** 6-12 months after collection

**For real-time air quality, use AirNow API instead:** https://www.airnow.gov/

## Environmental Health Context

### Why Air Quality is a Structural Wellbeing Determinant

1. **Involuntary Exposure**
   - You breathe ~20,000 times per day
   - Cannot avoid ambient air pollution without relocating
   - Relocation requires economic resources (not "personal choice")

2. **Life Expectancy Impact**
   - PM2.5 reduces longevity by months to years in polluted areas
   - Equivalent to smoking in highly polluted regions
   - Measurable, quantifiable health burden

3. **Environmental Injustice**
   - Low-income communities disproportionately exposed (NEJM 2021)
   - Communities of color exposed to higher pollution even controlling for income
   - Proximity to highways, industrial facilities, ports (structural inequality)
   - **Monitoring gap:** Low-income communities historically undermonitored (data invisibility → policy neglect)

4. **Health Equity**
   - Cardiovascular disease: PM2.5 linked to stroke, heart attack, atherosclerosis
   - Respiratory disease: Asthma, COPD, lung cancer (IARC Group 1 carcinogen)
   - Cognitive decline: Dementia, Alzheimer's, childhood cognitive impairment
   - Pregnancy outcomes: Low birth weight, preterm birth

5. **Quality of Life**
   - Outdoor activity restrictions on high pollution days
   - Healthcare costs (emergency visits, hospitalizations)
   - Lost work/school days (respiratory illness)
   - Mental health impacts (environmental degradation stress)

**You cannot "self-care" your way out of this. It requires collective action, policy change, and structural intervention.**

## Use Cases

### 1. Environmental Justice Research
**Research Question:** Which communities are disproportionately exposed to PM2.5?

```bash
# Fetch PM2.5 data for multiple states
bun update.ts --year 2023 --states CA,NY,TX,IL --parameters PM25

# Cross-reference with Census demographic data (DS-00006)
# Identify exposure disparities by race, income, ZIP code
```

### 2. Life Expectancy Modeling
**Research Question:** How does PM2.5 exposure impact life expectancy across U.S. counties?

```bash
# Fetch multi-year PM2.5 data
bun update.ts --year 2023 --states ALL --parameters PM25

# Link to CDC mortality data (DS-00005)
# Calculate life expectancy impact using AQLI conversion factors
# (1 µg/m³ PM2.5 increase = ~0.1 year life expectancy loss)
```

### 3. Policy Evaluation
**Research Question:** Did Clean Air Act regulations reduce ozone levels?

```bash
# Fetch historical data (multiple years)
bun update.ts --year 2020 --states CA --parameters OZONE
bun update.ts --year 2015 --states CA --parameters OZONE
bun update.ts --year 2010 --states CA --parameters OZONE

# Analyze trends over time
# Evaluate regulatory effectiveness
```

### 4. Health Impact Assessment
**Research Question:** What are the health costs of air pollution in California?

```bash
# Fetch PM2.5 and Ozone
bun update.ts --year 2023 --states CA --parameters PM25,OZONE

# Link to health outcomes data (hospitalizations, mortality)
# Calculate attributable burden using EPA BenMAP tools
```

## Known Limitations

### Coverage Gaps
- **Urban bias:** 85% of monitors in metropolitan areas; rural areas undermonitored
- **Environmental justice monitoring gap:** Low-income communities historically excluded
- **Tribal lands:** Limited tribal monitoring (improving)
- **Territories:** Limited coverage in Puerto Rico, U.S. Virgin Islands

### Methodological Limitations
- **Point measurements:** Monitors represent ~1-10 km radius (not every location monitored)
- **24-hour averages for PM:** Daily averages mask hour-to-hour variability
- **Spatial scale mismatch:** Within-neighborhood gradients missed
- **Indoor air quality:** Not measured (people spend 90% of time indoors)

### Temporal Limitations
- **6-12 month validation lag:** Not suitable for real-time analysis (use AirNow API)
- **Historical data:** Digital records begin 1980 (pre-1980 limited)

### Inappropriate Uses
1. ❌ **DO NOT use for real-time alerts** → Use AirNow API
2. ❌ **DO NOT use for individual exposure** → Use personal monitors, exposure modeling
3. ❌ **DO NOT assume unmonitored = clean** → Absence of data ≠ absence of pollution
4. ❌ **DO NOT ignore monitoring gaps** → Undermonitoring = data invisibility

## Related Data Sources

| Source | Relationship | Use Case |
|--------|--------------|----------|
| **DS-00005** — CDC WONDER Mortality | Health outcomes | Air pollution-attributable deaths |
| **DS-00006** — Census ACS Social Wellbeing | Demographics | Environmental justice analysis |
| **DS-00001** — WHO Global Health Observatory | Global context | International air quality comparisons |
| **DS-00003** — World Bank Open Data | Economic indicators | Air quality and economic development |

## External Resources

### Official Documentation
- **EPA AQS Homepage:** https://aqs.epa.gov/
- **API Documentation:** https://aqs.epa.gov/aqsweb/documents/data_api.html
- **40 CFR Part 58 (Monitoring Requirements):** https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-58

### Research & Analysis Tools
- **Air Quality Life Index (AQLI):** https://aqli.epic.uchicago.edu/
- **EPA BenMAP (Health Impact Assessment):** https://www.epa.gov/benmap
- **AirNow (Real-time Data):** https://www.airnow.gov/

### Key Research
- **Harvard Six Cities Study:** Seminal air pollution epidemiology (PM2.5 and mortality)
- **American Cancer Society CPS-II:** Air pollution and life expectancy
- **Environmental Justice Literature:** Exposure disparities by race, income (NEJM 2021)

## Citation

**APA 7th:**
```
U.S. Environmental Protection Agency. (2025). Air Quality System (AQS).
https://aqs.epa.gov/aqsweb/
```

**Data Citation (Specific):**
```
U.S. Environmental Protection Agency. (2024). "PM2.5 Daily Average Concentrations,
2020-2023" [Parameter Code: 88101]. Air Quality System.
https://aqs.epa.gov/aqsweb/. Accessed October 27, 2025.
```

## Contributing

### Report Issues
- Data quality concerns: aqs.support@epa.gov
- Script bugs/improvements: Create issue in Substrate repository

### Extend Functionality
Contributions welcome:
- Additional data processing utilities
- Integration with Census demographic data
- Environmental justice analysis tools
- Visualization dashboards

## License

**Data:** Public Domain (U.S. Government Work) — CC0 1.0 Universal

**Code:** (Inherit from Substrate project license)

## Contact

**Data Source Cataloger:** DM-001
**Created:** 2025-10-27
**Last Updated:** 2025-10-27
**Status:** Reviewed

---

**Remember:** Air quality is not an individual choice — it's a structural determinant of wellbeing. This data enables us to measure environmental injustice, evaluate policy effectiveness, and advocate for cleaner air as a human right.
