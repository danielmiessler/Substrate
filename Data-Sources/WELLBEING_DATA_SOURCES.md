# Wellbeing Data Sources - Implementation Guide

**Created:** 2025-10-27
**Purpose:** Document the five new wellbeing data sources added to Substrate to measure actual state of people

---

## Overview

This document describes five critical data sources added to Substrate on 2025-10-27 to track human wellbeing beyond traditional economic indicators. These sources were selected based on:

1. **Free access** with excellent APIs
2. **High quality** and authoritative
3. **Leading indicators** that reveal wellbeing before traditional metrics
4. **Behavioral truth** - actions reveal reality surveys miss
5. **Coverage of critical dimensions** - economic, health, social, environmental

---

## The Five New Data Sources

### DS-00004 — FRED Economic Wellbeing

**Organization:** Federal Reserve Bank of St. Louis
**API:** https://api.stlouisfed.org/fred/
**Update Frequency:** Weekly to Annual (varies by indicator)
**Geographic Coverage:** US National

**Critical Indicators:**
- **TDSP** - Household Debt Service Ratio (quarterly) - Aggregate financial stress
- **DRCCLACBS** - Credit Card Delinquency Rate (quarterly) - Consumer distress signal
- **STLFSI4** - Financial Stress Index (weekly!) - Real-time system stress
- **LNS13327709** - U-6 Underemployment Rate (monthly) - True labor slack
- **UEMP27OV** - Long-term Unemployed 27+ weeks (monthly) - Structural problems
- **UMCSENT** - Consumer Sentiment (monthly) - Economic confidence
- **SIPOVGINIUSA** - GINI Index (annual) - Income inequality
- **MORTGAGE30US** - 30-Year Mortgage Rate (weekly) - Housing affordability
- **MSPUS** - Median Home Sales Price (quarterly) - Home price affordability
- **PSAVERT** - Personal Saving Rate (monthly) - Financial resilience

**Why It Matters:**
- Economic security is foundation for all wellbeing
- Debt service ratio >12% indicates stress, >14% crisis
- Financial stress index captures system-wide conditions
- Free and comprehensive - best economic data available

**Setup:**
```bash
# Get free API key: https://fred.stlouisfed.org/docs/api/api_key.html
export FRED_API_KEY="your_key_here"
cd Data-Sources/DS-00004—FRED_Economic_Wellbeing
./update.ts
```

---

### DS-00005 — CDC WONDER Mortality Database

**Organization:** Centers for Disease Control and Prevention (CDC)
**API:** https://wonder.cdc.gov/controller/datarequest/ (XML)
**Update Frequency:** Annual (with 1-2 year lag)
**Geographic Coverage:** US National, State, County

**Critical Indicators:**
- **Drug Overdose Deaths** (ICD-10: X40-X44, X60-X64, X85, Y10-Y14)
- **Opioid-Specific Deaths** (T40.0-T40.4, T40.6)
- **Suicide Deaths** (X60-X84, Y87.0, U03)
- **All-Cause Mortality Rates**

**Why It Matters:**
- **Leading indicators** - Overdoses and suicides precede economic decline
- **Behavioral truth** - Deaths reveal desperation surveys miss
- **County-level granularity** - Shows which communities are suffering
- **"Deaths of despair"** - Captures breakdown in social fabric and hope
- Only official source for county-level crisis mortality

**Unique Insight:**
- These are not random health events - they're signals of community breakdown
- Geographic patterns show "left behind" populations
- Crisis indicators that traditional wellbeing metrics miss entirely

**Setup:**
```bash
cd Data-Sources/DS-00005—CDC_WONDER_Mortality
./update.ts
# No API key required - public access
```

---

### DS-00006 — Census ACS Social Wellbeing

**Organization:** US Census Bureau
**API:** https://api.census.gov/data/{year}/acs/acs1
**Update Frequency:** Annual (1-year and 5-year estimates)
**Geographic Coverage:** National, State, County, City, Census Tract

**Critical Indicators:**
- **B11001_008E** - 1-Person Households (living alone) - Social isolation
- **B08303_001E** - Mean Travel Time to Work - Time poverty
- **B08303_013E** - Commute 60+ minutes - Extreme time poverty
- **B28002_013E** - No Internet Access at Home - Digital divide
- **B19013_001E** - Median Household Income - Economic security
- **B25064_001E** - Median Gross Rent - Housing affordability
- **B23025_005E** - Unemployed Population - Labor market health

**Why It Matters:**
- **Social connection** - Living alone rates reveal structural isolation
- **Time poverty** - Long commutes reduce social connection, increase stress
- **Digital divide** - Internet access = opportunity access in modern economy
- **Most granular source** - Down to census tract level (neighborhood data)
- **Denominators** - Population data needed to calculate rates

**Unique Insight:**
- You can be economically comfortable but socially isolated (suburban paradox)
- Time poverty (commute) often invisible in income statistics
- Structural determinants you can't "self-care" your way out of

**Setup:**
```bash
# Get free API key: https://api.census.gov/data/key_signup.html
export CENSUS_API_KEY="your_key_here"
cd Data-Sources/DS-00006—Census_ACS_Social_Wellbeing
./update.ts
```

---

### DS-00007 — BLS JOLTS Labor Market

**Organization:** Bureau of Labor Statistics (BLS)
**API:** https://api.bls.gov/publicAPI/v2/timeseries/data/
**Update Frequency:** Monthly (with ~6 week lag)
**Geographic Coverage:** US National, some State

**Critical Indicators (via FRED for reliability):**
- **JTSQUR** - Quit Rate (Total Nonfarm) - **MOST IMPORTANT**
- **JTSJOR** - Job Openings Rate - Opportunity availability
- **JTSHIR** - Hire Rate - Labor market dynamism
- **JTSLD** - Layoff and Discharge Rate - Involuntary separations
- **JTSTSR** - Total Separations Rate - Overall turnover

**Why It Matters - The "Permission to Quit Index":**
- **People only quit when they have options** - Quit rate measures worker agency
- High quit rate = Worker empowerment, confidence, economic security
- Low quit rate during "good economy" = Trapped workers (hidden desperation)
- Leading indicator of wage growth (quits force employers to raise wages)
- Reveals worker experience that GDP and unemployment miss

**Unique Framework:**
- "Permission to Quit" measures economic freedom and worker dignity
- Distinguishes voluntary (quits) from involuntary (layoffs) separations
- Worker-centric view of economy (not just employer/investor perspective)

**Setup:**
```bash
# Optional: Get free BLS API key for higher rate limits
# https://www.bls.gov/developers/home.htm
export BLS_API_KEY="your_key_here"  # Optional
export FRED_API_KEY="your_key_here"  # Required (data via FRED)
cd Data-Sources/DS-00007—BLS_JOLTS_Labor_Market
./update.ts
```

**Note:** Update script uses FRED API to access JOLTS data (more reliable than direct BLS API). Original BLS series IDs changed format in 2020.

---

### DS-00008 — EPA Air Quality System

**Organization:** Environmental Protection Agency (EPA)
**API:** https://aqs.epa.gov/data/api/
**Update Frequency:** Hourly (real-time) to Annual summaries
**Geographic Coverage:** US National, State, County, Monitoring Station

**Critical Indicators:**
- **88101** - PM2.5 (fine particulate matter) - **MOST CRITICAL**
- **44201** - Ozone (O3) - Respiratory and cardiovascular impacts
- **42401** - Sulfur Dioxide (SO2)
- **42101** - Carbon Monoxide (CO)
- **42602** - Nitrogen Dioxide (NO2)
- **81102** - PM10 (coarse particulate matter)

**Why It Matters - Environmental Justice:**
- **You cannot "self-care" your way out of breathing toxic air**
- **PM2.5 reduces life expectancy** by months to years
- **Environmental injustice** - Low-income communities disproportionately exposed
- **Structural determinant** - ZIP code determines air quality, not personal choice
- Measurable, actionable, preventable health risk

**Health Impacts:**
- PM2.5: Mortality, cardiovascular disease, respiratory disease, cognitive decline
- Ozone: Respiratory inflammation, asthma exacerbation
- Long-term exposure in top decile can reduce life expectancy 1-3 years

**Unique Insight:**
- Air quality is a **structural wellbeing constraint** like poverty
- Policy visibility through monitoring (gaps in underserved areas = "data invisibility")
- Environmental health reveals that wellbeing requires collective action, not just individual choices

**Setup:**
```bash
# Register for free API key: aqs.support@epa.gov
export EPA_AQS_EMAIL="your_email@example.com"
export EPA_AQS_KEY="your_key_here"
cd Data-Sources/DS-00008—EPA_Air_Quality_System
./update.ts --year 2023 --states CA,NY,TX
```

---

## Integrated Wellbeing Framework

These five sources cover the critical dimensions of human wellbeing:

### 1. Economic Security (FRED)
- Financial stress and debt burden
- Employment quality (not just quantity)
- Housing affordability
- Income inequality

### 2. Health & Crisis (CDC WONDER)
- Deaths of despair (overdoses, suicides)
- All-cause mortality trends
- Community-level health breakdown
- Leading indicators of social collapse

### 3. Social Connection (Census ACS)
- Structural isolation (living alone)
- Time poverty (commute duration)
- Digital divide (internet access)
- Neighborhood characteristics

### 4. Work & Purpose (BLS JOLTS)
- Worker agency (quit rate)
- Economic opportunity (job openings)
- Labor market dynamism
- Voluntary vs involuntary separation

### 5. Environmental Health (EPA AQS)
- Air quality and life expectancy
- Environmental justice
- Structural health determinants
- Geographic inequality

---

## Composite Wellbeing Indices

Based on the research, consider creating these composite indices:

### Financial Stress Composite (FSC)
```
FSC = weighted_average([
  TDSP (debt service ratio),
  DRCCLACBS (credit card delinquency),
  Eviction rates (external source),
  STLFSI4 (financial stress index)
])
```
**Alert Thresholds:** >50 = elevated stress, >70 = crisis

### Crisis Alert Composite (CAC)
```
CAC = normalized_sum([
  Drug overdose deaths (CDC WONDER),
  Suicide rates (CDC WONDER),
  Long-term unemployment (FRED)
])
```
**Leading indicator** - Spikes before economic metrics decline

### Community Health Composite (CHC)
```
CHC = inverse_weighted_average([
  Living alone rate (Census ACS),
  Long commute rate (Census ACS),
  No internet access (Census ACS)
])
```
**Measures social infrastructure** - Connection and opportunity access

### Worker Agency Index (WAI)
```
WAI = weighted_average([
  Quit rate (BLS JOLTS),
  Job openings rate (BLS JOLTS),
  Inverse of long-term unemployment (FRED)
])
```
**"Permission to Quit"** - Economic freedom and worker dignity

### Environmental Health Index (EHI)
```
EHI = inverse_weighted_average([
  PM2.5 concentration (EPA AQS),
  Ozone concentration (EPA AQS),
  Days exceeding AQI 100
])
```
**Structural health determinant** - Collective wellbeing constraint

---

## Update Schedule Recommendations

**Weekly:**
- FRED indicators (captures high-frequency economic stress)
- EPA AQS (tracks air quality events)

**Monthly:**
- FRED monthly indicators (unemployment, sentiment, saving rate)
- BLS JOLTS (labor market health)

**Quarterly:**
- FRED quarterly indicators (debt service, home prices)

**Annual:**
- Census ACS (social wellbeing indicators)
- CDC WONDER (mortality data has 1-2 year lag anyway)

---

## Data Quality Notes

### Completeness
- **FRED:** Excellent (long time series, rarely missing data)
- **CDC WONDER:** Good (cell suppression for privacy in low-count cells)
- **Census ACS:** Excellent (comprehensive US coverage)
- **BLS JOLTS:** Good (national reliable, state-level variable)
- **EPA AQS:** Good (monitoring gaps in rural areas and some underserved communities)

### Timeliness
- **FRED:** 1 week to 3 months depending on indicator
- **CDC WONDER:** 1-2 year lag (deaths require coding)
- **Census ACS:** 6-12 months (annual release)
- **BLS JOLTS:** 6 weeks (faster than most labor data)
- **EPA AQS:** Real-time to 6 months

### Geographic Granularity
- **FRED:** National only for wellbeing indicators (some state data available)
- **CDC WONDER:** National, State, County (excellent)
- **Census ACS:** National, State, County, City, Census Tract (exceptional)
- **BLS JOLTS:** National, limited State (national most reliable)
- **EPA AQS:** Monitoring station (lat/long), aggregates to county/state

---

## Known Limitations

### What These Sources CANNOT Tell You

1. **Individual-level wellbeing** - All are aggregated data (use surveys for individual experience)
2. **Real-time wellbeing** - All have lag (1 week to 2 years)
3. **Causation** - Correlation only (use experimental designs for causation)
4. **Subjective experience** - Behavioral/objective only (use Gallup/Pew for perceptions)
5. **International comparison** - US-only (use WHO GHO, UN SDG for global)

### Gaps to Fill with Additional Sources

- **Food insecurity** - USDA ERS needed
- **Homelessness** - HUD Point-in-Time Count needed
- **Substance abuse treatment** - SAMHSA needed
- **Mental health service utilization** - Multiple sources needed
- **Sleep quality** - CDC NHIS or NSF needed
- **Volunteering/civic engagement** - AmeriCorps/Pew needed

---

## Philosophy: Knowing the Actual State of People

**Why this matters:**

Traditional wellbeing measurement focuses on:
- GDP growth (economic output, not wellbeing)
- Unemployment rate (misses underemployment, quality)
- Survey happiness (subject to response bias, optimism)

**These new sources focus on:**
- **Crisis indicators** (overdoses, suicides) - Reveal breakdown
- **Behavioral truth** (quit rates, debt delinquency) - Actions > words
- **Structural determinants** (air quality, commute times) - Constraints on flourishing
- **Leading indicators** (financial stress before recession) - Early warning
- **Geographic granularity** (county-level) - No one left invisible

**Core insight:**
> "If we measure only GDP and unemployment, we will miss the slow-motion collapse of human thriving happening in plain sight."

**Purpose:**
> "When we theorize or propose solutions, we are informed by the actual state of people - not abstractions, not averages, not GDP."

---

## Next Steps

1. **Test all update scripts** with valid API keys
2. **Run initial data fetches** to populate data directories
3. **Create composite indices** (FSC, CAC, CHC, WAI, EHI)
4. **Build dashboards** for visualization
5. **Establish alert thresholds** for crisis detection
6. **Cross-reference** with Substrate Problems and Solutions
7. **Add remaining sources** from research (food insecurity, homelessness, etc.)
8. **Geographic analysis** - County-level maps of wellbeing
9. **Time-series analysis** - Trend detection and forecasting
10. **Integration** - Combine sources to find feedback loops and cascading failures

---

## Credits

**Research Date:** 2025-10-27
**Researcher:** Kai (Claude Code)
**Research Scope:** 100+ datasets evaluated, 5 prioritized for implementation
**Selection Criteria:** Free access, excellent APIs, high quality, leading indicators, behavioral truth
**Implementation:** Complete substrate-style documentation for each source

**Research Documents:**
- `/Users/daniel/.claude/history/research/2025-10/2025-10-27_wellbeing-substrate-datasets/`
- FRED research: 50+ series IDs identified
- Pew/Gallup research: 15 major datasets cataloged
- Alternative sources: 37 indicators across 6 categories

---

**END OF DOCUMENT**
