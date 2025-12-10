# EPA Air Quality System (AQS) — Environmental Health & Quality of Life Indicators

**Source ID:** DS-00008
**Record Created:** 2025-10-27
**Last Updated:** 2025-10-27
**Cataloger:** DM-001
**Review Status:** Reviewed

---

## Bibliographic Information

### Title Statement
- **Main Title:** Air Quality System Data Mart
- **Subtitle:** Environmental Health and Quality of Life Indicators from National Air Monitoring Network
- **Abbreviated Title:** AQS
- **Variant Titles:** EPA Air Quality System, AQS Data Mart, Air Quality Monitoring Database

### Responsibility Statement
- **Publisher/Issuing Body:** United States Environmental Protection Agency
- **Department/Division:** Office of Air Quality Planning and Standards (OAQPS)
- **Contributors:** State and local air monitoring agencies, tribal monitoring programs
- **Contact Information:** aqs.support@epa.gov

### Publication Information
- **Place of Publication:** Research Triangle Park, North Carolina, USA
- **Date of First Publication:** 1971 (AQS system established)
- **Publication Frequency:** Continuous (real-time submissions), with 6-month validation lag
- **Current Status:** Active

### Edition/Version Information
- **Current Version:** AQS API v1.0
- **Version History:** AQS system modernized 2000s; API launched 2010s
- **Versioning Scheme:** Stable API; data continuously validated and updated

---

## Authority Statement

### Organizational Authority

**Issuing Organization Analysis:**
- **Official Name:** United States Environmental Protection Agency
- **Type:** Independent Federal Agency
- **Established:** 1970-12-02 (by Executive Order under President Nixon)
- **Mandate:** Clean Air Act (1970, amended 1990) — legal authority to set and enforce National Ambient Air Quality Standards (NAAQS)
- **Parent Organization:** Federal government, reports to President; independent from Cabinet departments
- **Governance Structure:** Administrator appointed by President, confirmed by Senate; 10 regional offices; headquarters in Washington, D.C.

**Domain Authority:**
- **Subject Expertise:** 50+ years of air quality monitoring; gold standard for ambient air quality data in United States
- **Recognition:** NAAQS standards legally binding on all states; AQS data used for regulatory compliance, health research, policy evaluation
- **Publication History:** Air quality data published continuously since 1971; annual Air Quality Reports; foundational dataset for environmental health research
- **Peer Recognition:** 100,000+ citations in scientific literature; AQS data used by NIH, CDC, academic researchers worldwide

**Quality Oversight:**
- **Peer Review:** Science Advisory Board provides independent scientific oversight
- **Editorial Board:** Office of Air Quality Planning and Standards technical experts
- **Scientific Committee:** Clean Air Scientific Advisory Committee (CASAC) reviews NAAQS scientific basis
- **External Audit:** Government Accountability Office (GAO) audits; Office of Inspector General oversight
- **Certification:** Quality Assurance protocols per 40 CFR Part 58 (federal regulations); Federal Reference/Equivalent Methods (FRM/FEM) required for NAAQS compliance

**Independence Assessment:**
- **Funding Model:** Congressional appropriations (federal budget); no commercial funding
- **Political Independence:** Independent agency; Administrator serves at pleasure of President but protected by civil service rules; scientific integrity policy protects staff
- **Commercial Interests:** Zero commercial interests; public health mission
- **Transparency:** All data publicly available; Federal Advisory Committee Act ensures open meetings; Freedom of Information Act applies

### Data Authority

**Provenance Classification:**
- **Source Type:** Primary (direct measurements from monitoring stations)
- **Data Origin:** 4,000+ ambient air monitoring stations operated by state/local/tribal agencies
- **Chain of Custody:** State/local/tribal monitors → AQS submission → EPA Quality Assurance review → Public database

**Primary Source Characteristics:**
- Direct measurement using Federal Reference Methods (FRM) or Federal Equivalent Methods (FEM)
- Continuous monitoring at fixed locations with GPS coordinates
- Rigorous calibration and quality control protocols (40 CFR Part 58)
- Raw measurements validated before publication (6-month lag for QA)
- Gold standard for air quality in United States — legally defensible data for regulatory enforcement

---

## Scope Note

### Content Description

**Subject Coverage:**
- **Primary Subjects:** Air Quality, Environmental Health, Atmospheric Chemistry, Pollution Monitoring, Public Health
- **Secondary Subjects:** Environmental Justice, Urban Planning, Respiratory Health, Climate Change, Transportation Policy
- **Subject Classification:**
  - LC: TD (Environmental Technology), RA (Public Health)
  - Dewey: 363.739 (Air Pollution), 614.7 (Environmental Health)
- **Keywords:** Air quality, PM2.5, particulate matter, ozone, air pollution, environmental health, respiratory disease, cardiovascular disease, environmental justice, NAAQS, criteria pollutants, hazardous air pollutants

**Geographic Coverage:**
- **Spatial Scope:** United States national coverage
- **Countries/Regions Included:** 50 states, District of Columbia, Puerto Rico, U.S. Virgin Islands, tribal lands
- **Geographic Granularity:** Monitoring site level (latitude/longitude); aggregatable to county, CBSA (Core-Based Statistical Area), state, national
- **Coverage Completeness:** 4,000+ active monitoring sites; denser in urban areas; rural coverage limited; disproportionate coverage in high-income areas (environmental justice concern)
- **Notable Exclusions:** Limited coverage in rural areas, tribal lands, territories; no coverage outside United States

**Temporal Coverage:**
- **Start Date:** 1980 (digital records); some sites have data back to 1971
- **End Date:** Present (6-month validation lag for finalized data; preliminary data more current)
- **Historical Depth:** 45 years of validated data (1980-present); variable by site and parameter
- **Frequency of Observations:**
  - Hourly for criteria pollutants (O3, CO, NO2, SO2)
  - 24-hour average for PM2.5, PM10
  - Continuous measurements stored at finest temporal resolution
- **Temporal Granularity:** Sub-hourly raw data available; hourly, daily, monthly, quarterly, annual aggregations
- **Time Series Continuity:** Excellent continuity for long-running sites; some sites added/removed over time (network changes documented)

**Population/Cases Covered:**
- **Target Population:** All U.S. residents exposed to ambient air pollution
- **Inclusion Criteria:** All monitoring stations reporting to EPA AQS (mandatory for NAAQS compliance)
- **Exclusion Criteria:** Indoor air quality (not measured); occupational exposures (different monitoring); non-ambient sources
- **Coverage Rate:** ~85% of U.S. population lives in counties with air quality monitors; urban areas well-covered; rural areas undercovered
- **Sample vs. Census:** Census of monitoring stations (all stations included); sample of geographic space (not every location monitored)

**Variables/Indicators:**
- **Number of Variables:** 1,000+ parameter codes (pollutants, meteorological variables)
- **Core Indicators (Criteria Pollutants — NAAQS):**
  - **88101** — PM2.5 (fine particulate matter) — **MOST CRITICAL FOR HEALTH**
  - **44201** — Ozone (O3) — respiratory irritant, smog precursor
  - **42401** — Sulfur Dioxide (SO2) — respiratory irritant
  - **42101** — Carbon Monoxide (CO) — cardiovascular stress
  - **42602** — Nitrogen Dioxide (NO2) — respiratory irritant, precursor
  - **81102** — PM10 (coarse particulate matter) — respiratory health
- **Additional Parameters:** Lead (Pb), meteorology (temp, humidity, wind), precursor gases, speciated PM2.5 (chemical composition)
- **Derived Variables:** Air Quality Index (AQI), exceedance days, design values (regulatory compliance metrics)
- **Data Dictionary Available:** Yes — https://aqs.epa.gov/aqsweb/documents/codetables/

### Content Boundaries

**What This Source IS:**
- **Authoritative source** for U.S. ambient air quality measurements
- **Legal basis** for Clean Air Act regulatory enforcement
- **Gold standard** for environmental health research in United States
- **Essential dataset** for environmental justice analysis (who breathes toxic air)
- **Primary evidence** for life expectancy and quality of life impacts

**What This Source IS NOT:**
- **NOT real-time** (6-month validation lag for finalized data; use AirNow API for current conditions)
- **NOT global** (U.S. only; no international coverage)
- **NOT indoor air quality** (ambient outdoor air only)
- **NOT source-specific** (measures ambient air, not facility emissions directly)
- **NOT evenly distributed** (urban bias; environmental justice gap in monitoring coverage)

**Comparison with Similar Sources:**

| Source | Advantages Over AQS | Disadvantages vs. AQS |
|--------|--------------------|-----------------------|
| AirNow API | Real-time current conditions (no lag) | Less historical depth; limited to current/recent data |
| PurpleAir (low-cost sensors) | Much denser spatial coverage; real-time; citizen science | Lower quality; not regulatory-grade; calibration issues; no long time series |
| OECD Air Quality Statistics | International comparability (OECD countries) | Limited to OECD members; less temporal granularity |
| Satellite Data (NASA MODIS, Sentinel) | Global coverage; spatial continuity | Lower accuracy than ground monitors; requires calibration; shorter time series |
| State/Local Air Agencies | More local context; faster validation | Limited to single jurisdiction; international comparability requires standardization |

---

## Access Conditions

### Technical Access

**API Information:**
- **Endpoint URL:** https://aqs.epa.gov/data/api/
- **API Type:** REST (HTTP GET requests, JSON responses)
- **API Version:** v1.0 (stable)
- **OpenAPI/Swagger Spec:** Not available (documentation at https://aqs.epa.gov/aqsweb/documents/data_api.html)
- **SDKs/Libraries:** Community Python packages (RAQSAPI, pyaqsapi); R package (RAQSAPI - EPA-supported)

**Authentication:**
- **Authentication Required:** Yes
- **Authentication Type:** API key + email
- **Registration Process:** Email aqs.support@epa.gov requesting API access OR use signup endpoint: `https://aqs.epa.gov/data/api/signup?email=your_email@example.com`
- **Approval Required:** No — automated approval
- **Approval Timeframe:** Immediate (automated key generation)

**Rate Limits:**
- **Requests per Minute:** 10 requests per minute (HARD LIMIT)
- **Requests per Day:** No daily limit specified
- **Requests per Month:** 10,000 estimated maximum (based on 10/min sustained usage)
- **Concurrent Connections:** Not specified (single-threaded recommended)
- **Throttling Policy:** Account suspension if limits violated
- **Rate Limit Headers:** Not provided (manual delay required)
- **Recommended Practice:** 6-second delay between requests (10 req/min = 1 req per 6 sec)

**Query Capabilities:**
- **Filtering:** By state, county, site, parameter code, date range, CBSA
- **Sorting:** Results sorted by date (ascending)
- **Pagination:** Not required (queries limited to 1,000,000 rows)
- **Aggregation:** Multiple aggregation endpoints (hourly sample data, daily summaries, quarterly, annual)
- **Joins:** Cannot join; query each parameter/location separately

**Data Formats:**
- **Available Formats:** JSON only
- **Format Quality:** Well-formed JSON; consistent structure
- **Compression:** Not supported (manual gzip possible)
- **Encoding:** UTF-8

**Download Options:**
- **Bulk Download:** Yes — annual data files available via https://aqs.epa.gov/aqsweb/airdata/download_files.html
- **Streaming API:** No
- **FTP/SFTP:** No (HTTP only)
- **Torrent:** No
- **Data Dumps:** Annual CSV files (updated yearly)

**Reliability Metrics:**
- **Uptime:** 99%+ estimated (no published SLA)
- **Latency:** <2 seconds median response time for daily data queries
- **Breaking Changes:** API stable since launch; no major breaking changes
- **Deprecation Policy:** No formal policy (federal system — stable by design)
- **Service Level Agreement:** No formal SLA (public service)

### Legal/Policy Access

**License:**
- **License Type:** Public Domain (U.S. Government Work)
- **License Version:** CC0 1.0 Universal (Public Domain Dedication)
- **License URL:** https://creativecommons.org/publicdomain/zero/1.0/
- **SPDX Identifier:** CC0-1.0

**Usage Rights:**
- **Redistribution Allowed:** Yes, unrestricted
- **Commercial Use Allowed:** Yes (public domain)
- **Modification Allowed:** Yes (no restrictions)
- **Attribution Required:** No (but recommended as scientific practice)
- **Share-Alike Required:** No (public domain)

**Cost Structure:**
- **Access Cost:** Free

**Terms of Service:**
- **TOS URL:** https://www.epa.gov/web-policies-and-procedures
- **Key Restrictions:** Rate limits (10 req/min); account suspension for violations; no warranty (data "as is")
- **Liability Disclaimers:** EPA not liable for decisions based on data; users responsible for verifying suitability; data subject to revision during validation period
- **Privacy Policy:** API does not collect personal data beyond email for authentication; EPA privacy policy applies to website

---

## Collection Development Policy Fit

### Relevance Assessment

**Substrate Mission Alignment:**
- **Human Progress Focus:** **CRITICAL** — Air quality is structural determinant of human wellbeing; you cannot "self-care" your way out of breathing toxic air
- **Problem-Solution Connection:**
  - **Links to Problems:** Respiratory disease, cardiovascular disease, cognitive decline, reduced life expectancy, environmental injustice, health inequity
  - **Links to Solutions:** Clean Air Act regulations, emissions reductions, environmental justice policy, urban planning, transportation electrification
- **Evidence Quality:** Gold-standard measurements; legally defensible; peer-reviewed methods; 50+ years of methodological refinement

**Why Air Quality Matters for Wellbeing (CRITICAL FRAMING):**

**Air Quality as Structural Wellbeing Determinant:**
- **PM2.5 reduces life expectancy** by months to years in polluted areas (AQLI estimates 1.8 years lost globally)
- **You cannot choose cleaner air** without economic resources to relocate (ZIP code determines exposure)
- **Environmental injustice:** Low-income communities, communities of color disproportionately exposed to air pollution (NEJM 2021 study: exposure disparities persist even controlling for income)
- **Invisible, involuntary harm:** You breathe ~20,000 times per day — air quality affects every breath
- **Measurable, preventable:** Unlike many health risks, air pollution is quantifiable, monitored, and addressable through policy

**Health Impacts (Evidence-Based):**
- **Mortality:** PM2.5 linked to all-cause mortality, cardiovascular mortality, respiratory mortality (Harvard Six Cities Study, ACS CPS-II)
- **Cardiovascular Disease:** Stroke, heart attack, atherosclerosis (AHA Scientific Statement 2010)
- **Respiratory Disease:** Asthma exacerbation, COPD, lung cancer (IARC Group 1 carcinogen)
- **Cognitive Decline:** Dementia, Alzheimer's, cognitive impairment in children (USC/KECK studies)
- **Pregnancy Outcomes:** Low birth weight, preterm birth (meta-analyses)
- **Life Expectancy:** Equivalent impact to smoking in highly polluted areas

**Economic and Quality of Life:**
- **Lost work/school days:** Respiratory illness costs billions in productivity
- **Healthcare costs:** Emergency visits, hospitalizations, medications
- **Restricted activity:** Cannot exercise outdoors on high pollution days
- **Mental health:** Psychological stress from environmental degradation

**Collection Priorities Match:**
- **Priority Level:** **CRITICAL** — Essential source for environmental health and wellbeing domain
- **Uniqueness:** Only authoritative, regulatory-grade, long-term ambient air quality dataset for United States
- **Comprehensiveness:** Fills critical gap — no other source provides combination of legal authority, data quality, temporal depth, spatial coverage

### Comparison with Holdings

**Overlapping Sources:**
- DS-00001 — WHO Global Health Observatory (includes air pollution mortality estimates globally)
- DS-00003 — World Bank Open Data (includes air quality indicators internationally)
- DS-00005 — CDC WONDER Mortality (cause-of-death data attributable to air pollution)

**Unique Contribution:**
- **Only primary measurement data** (others rely on modeling/aggregation)
- **Regulatory-grade quality** (legal defensibility)
- **Site-level granularity** (enables environmental justice analysis)
- **45-year time series** (long-term trends, policy evaluation)
- **U.S.-specific depth** (global sources lack detail)

**Preferred Use Cases:**
- **Environmental justice research** (local exposure disparities)
- **Policy evaluation** (Clean Air Act effectiveness)
- **Health studies** (exposure assessment for epidemiology)
- **Life expectancy modeling** (structural determinant of longevity)
- **Quality of life indicators** (structural wellbeing constraints)

---

## Technical Specifications

### Data Model

**Schema Documentation:**
- **Schema Type:** JSON (documented via examples)
- **Schema URL:** https://aqs.epa.gov/aqsweb/documents/data_api.html#sample
- **Schema Version:** v1.0 (stable)

**Entity Types:**
- **SampleData:** Hourly/sub-hourly measurements (finest granularity)
- **DailyData:** Midnight-to-midnight summaries (most commonly used)
- **QuarterlyData:** Q1-Q4 aggregates
- **AnnualData:** Yearly summaries
- **Monitors:** Monitoring station metadata (location, operator, methods)
- **Sites/Counties/States:** Geographic entities

**Key Relationships:**
- Monitor → Site → County → State (geographic hierarchy)
- SampleData → DailyData → QuarterlyData → AnnualData (temporal aggregation)
- Parameter → SampleData (one-to-many; each parameter measured separately)

**Primary Keys:**
- Monitor: site_number + POC (Parameter Occurrence Code)
- SampleData: site + parameter + date_time + POC
- DailyData: site + parameter + date + POC

**Foreign Keys:**
- SampleData.state_code → State.state_code
- SampleData.county_code → County.county_code
- SampleData.site_num → Site.site_num
- SampleData.parameter_code → Parameter.parameter_code

### Metadata Standards Compliance

**Standards Followed:**
- [x] Dublin Core (partial)
- [ ] DCAT (Data Catalog Vocabulary) — minimal
- [ ] Schema.org Dataset — not formally implemented
- [ ] SDMX (Statistical Data and Metadata eXchange) — not applicable
- [ ] DDI (Data Documentation Initiative) — not applicable
- [x] ISO 19115 (Geographic Information Metadata) — monitoring site coordinates use standard formats
- [ ] MARC
- Other: EPA Metadata Standards, Federal Geographic Data Committee (FGDC) standards for geospatial metadata

**Metadata Quality:**
- **Completeness:** 85% of elements populated (monitoring site metadata comprehensive; parameter metadata less standardized)
- **Accuracy:** High — metadata validated during site setup and annual reviews
- **Consistency:** Good — federal regulations ensure standardized metadata for NAAQS compliance

### API Documentation Quality

**Documentation Assessment:**
- **Completeness:** Good — all endpoints documented with parameter definitions; examples provided
- **Examples Provided:** Yes — sample requests/responses for each endpoint
- **Error Messages:** Basic HTTP status codes; JSON error messages (but not always informative)
- **Change Log:** Not maintained (stable API)
- **Tutorials:** Limited — R package vignette available; no official Python tutorial
- **Support Forum:** Email support only (aqs.support@epa.gov); no public forum; slow response time

---

## Source Evaluation Narrative

### Methodological Assessment

**Data Collection Methodology:**

**Monitoring Station Design:**
- **Method:** Continuous automated monitoring using Federal Reference Methods (FRM) or Federal Equivalent Methods (FEM)
- **Site Selection:** 40 CFR Part 58 Appendix D specifies site selection criteria (population-based, source-oriented, background sites)
- **Spatial Coverage:** 4,000+ active monitors; denser in urban areas; required monitors for NAAQS pollutants in metropolitan areas
- **Stratification:** Urban/suburban/rural; near-road/neighborhood/regional scales
- **Site Types:** SLAMS (State/Local Air Monitoring Stations), NAMS (National Air Monitoring Stations), PAMS (Photochemical Assessment Monitoring Stations), tribal monitors

**Measurement Instruments:**
- **Instrument Type:** FRM/FEM analyzers (e.g., Beta Attenuation Monitors for PM2.5, UV photometry for O3, chemiluminescence for NO2)
- **Validation:** All methods must demonstrate equivalence to FRM through EPA approval process
- **Calibration:** Regular calibration per 40 CFR Part 58 (daily zero/span checks, quarterly audits)
- **Mode:** Continuous automated measurement with data loggers; telemetry transmission to AQS

**Quality Control Procedures:**
- **Field QA:** Quarterly audits, collocated samplers (precision checks), flow rate audits, temperature/pressure checks
- **Validation Rules:** Automated flagging of invalid data (instrument malfunction, calibration failure, suspect data)
- **Consistency Checks:** Cross-parameter validation (meteorologically implausible conditions flagged)
- **Verification:** EPA regional offices review state/local data; annual data certification process
- **Outlier Treatment:** Flagged for review; extreme values verified or invalidated; natural events (wildfires, dust storms) documented

**Error Characteristics:**
- **Sampling Error:** Minimal (continuous monitoring, not statistical sampling)
- **Non-sampling Error:**
  - Instrument error: ±10-15% for PM2.5 (BAM vs. gravimetric FRM); ±5% for O3
  - Spatial representativeness: Monitor represents ~1-10 km radius depending on scale
  - Temporal gaps: Instrument downtime (maintenance, malfunctions)
- **Known Biases:**
  - Urban bias in monitoring network (rural areas undermonitored)
  - Environmental justice monitoring gap (low-income communities historically undermonitored)
  - Near-road monitors added only in 2010s (underestimated traffic impacts historically)
- **Accuracy Bounds:** FRM/FEM methods must demonstrate ±10% accuracy vs. reference methods; regulatory decisions use three-year averages to reduce uncertainty

**Methodology Documentation:**
- **Transparency Level:** 5/5 (Exhaustive)
- **Documentation URL:** 40 CFR Part 58 (federal regulations): https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-58
- **Peer Review Status:** Methods peer-reviewed through Federal Register notice-and-comment; Scientific Advisory Board oversight
- **Reproducibility:** Fully reproducible — FRM/FEM methods published; raw data available; QA procedures documented

### Currency Assessment

**Update Characteristics:**
- **Update Frequency:** Continuous (monitors transmit hourly); daily uploads to AQS; quarterly data validation cycles
- **Update Reliability:** Highly reliable (automated telemetry); 6-month lag for finalized validated data
- **Update Notification:** No API notifications; annual data certification announcements
- **Last Updated:** Data current through 6 months ago (validated); preliminary data more current via AirNow

**Timeliness:**
- **Collection to Publication Lag:**
  - Real-time to preliminary: <1 hour (via AirNow API)
  - Preliminary to validated: 6-12 months (quality assurance process)
  - Finalized data in AQS: 6-12 months after collection
- **Factors Affecting Timeliness:** State/local agency validation cycles; EPA review cycles; data corrections/resubmissions
- **Historical Timeliness:** Consistent 6-month lag; accelerated during COVID-19 for health surveillance

**Currency for Different Uses:**
- **Real-time Analysis:** Unsuitable for AQS (use AirNow API instead)
- **Recent Trends:** Suitable for annual/multi-year trends; unsuitable for month-to-month changes (validation lag)
- **Historical Research:** Excellent — 45-year validated time series

### Objectivity Assessment

**Potential Biases:**

**Political Bias:**
- **Government Influence:** EPA subject to political pressure (NAAQS standards controversial; industry lobbying); however, Clean Air Act statutory requirements limit discretion
- **Editorial Stance:** Scientific integrity policy protects staff; data publication non-discretionary (all validated data published)
- **Political Pressure:** Historical examples of political interference (Trump administration NAAQS delays); career staff maintain scientific standards; data integrity high despite political pressures

**Commercial Bias:**
- **Funding Sources:** Federal appropriations only; no commercial funding
- **Industry Influence:** Industry lobbying affects NAAQS stringency (standard-setting); does not affect monitoring data collection/publication
- **Proprietary Interests:** None

**Cultural/Social Bias:**
- **Geographic Bias:** **CRITICAL ENVIRONMENTAL JUSTICE ISSUE** — Urban bias in monitoring network; rural and low-income communities undermonitored; tribal lands historically excluded (improving)
- **Social Perspective:** Regulatory perspective (NAAQS compliance focus); less emphasis on cumulative exposures, indoor air quality, occupational exposures
- **Language Bias:** English only (no Spanish/multilingual data portal)
- **Selection Bias:** Monitoring site placement historically prioritized compliance monitoring (regulatory focus) over health equity (exposure disparities)

**Transparency:**
- **Bias Disclosure:** EPA acknowledges monitoring gaps in environmental justice communities; recent initiatives to expand monitoring in underserved areas
- **Limitations Stated:** QA flags documented; measurement uncertainty noted; network limitations acknowledged
- **Raw Data Available:** Yes — all validated data public; preliminary data via AirNow; QA data available

### Reliability Assessment

**Consistency:**
- **Internal Consistency:** Excellent — QA procedures ensure data coherence; collocated monitors show high agreement (r>0.9 for PM2.5)
- **Temporal Consistency:** Very good — methods stable over time; method changes documented (e.g., transition from dichot samplers to continuous monitors)
- **Cross-source Consistency:** Good agreement with satellite data (MODIS AOD), low-cost sensors (after calibration), research-grade monitors

**Stability:**
- **Definition Changes:** Rare — NAAQS revisions change regulatory standards (not measurement definitions); PM2.5 definition stable since 1997
- **Methodology Changes:** Infrequent — new FEM methods added periodically; FRM remains stable reference
- **Series Breaks:** Minimal — method transitions documented; historical data not revised (preserves time series integrity)

**Verification:**
- **Independent Verification:** Collocated monitors (precision audits); EPA audits (Performance Evaluation Programs); academic validation studies
- **Replication Studies:** Thousands of health studies use AQS data; measurement errors identified and corrected through peer review
- **Audit Results:** Quarterly audits required by 40 CFR Part 58; results public; high pass rates (>90%)

### Accuracy Assessment

**Validation Evidence:**
- **Benchmark Comparisons:** FRM/FEM methods validated against laboratory standards; field comparisons show ±10% agreement
- **Coverage Assessments:** Network adequacy reviewed in 5-year monitoring network assessments
- **Error Studies:** Measurement uncertainty quantified in method validation studies; typical uncertainty ±10-15% for PM2.5, ±5% for O3

**Accuracy for Different Uses:**
- **Point Estimates:** High accuracy for individual measurements (±10-15% typical)
- **Trend Analysis:** Very high reliability for multi-year trends (measurement error random, cancels over time)
- **Cross-sectional Comparison:** Reliable for comparing locations (standardized methods)
- **Sub-population Analysis:** **LIMITED** — Monitors represent area averages (~1-10 km); cannot assess within-neighborhood gradients or individual exposures (requires modeling)

---

## Known Limitations and Caveats

### Coverage Limitations

**Geographic Gaps:**
- **Rural areas severely undermonitored:** 85% of monitors in metropolitan areas; vast rural regions with no coverage
- **Environmental justice monitoring gap:** Low-income communities, communities of color historically undermonitored; fence-line communities near industrial sources lacking monitors
- **Tribal lands:** Limited tribal monitoring (improving under recent EPA grants)
- **Territories:** Limited coverage in Puerto Rico, U.S. Virgin Islands (worse after hurricanes)
- **Mobile sources:** Near-road monitors added only in 2010s; traffic exposure historically underestimated

**Temporal Gaps:**
- **Historical data:** Digital records begin 1980; pre-1980 data limited
- **Instrument downtime:** Maintenance, malfunctions cause data gaps (typically <10% missing data per site-year)
- **Discontinued sites:** Some long-term sites closed due to budget cuts (loss of historical continuity)

**Population Exclusions:**
- **Indoor air quality:** Not measured (people spend 90% of time indoors)
- **Occupational exposures:** Not captured (workplace exposures separate)
- **Personal exposures:** Monitor represents area average, not individual exposure (commuting, activity patterns affect personal exposure)

**Variable Gaps:**
- **Ultrafine particles (<0.1 μm):** Not routinely monitored (health concerns emerging)
- **Chemical speciation:** Limited speciated PM2.5 (metals, organics, ions) compared to total mass
- **Biological aerosols:** Pollen, mold spores not systematically monitored
- **Emerging pollutants:** PFAS, microplastics in air not monitored

### Methodological Limitations

**Spatial Limitations:**
- **Point measurements:** Monitors measure concentration at one location; spatial interpolation required to estimate exposures elsewhere (introduces uncertainty)
- **Spatial scale mismatch:** Monitor represents ~1-10 km radius; exposure disparities within neighborhoods missed
- **Topographic effects:** Complex terrain (mountains, valleys) creates microclimates; single monitor may not represent entire area

**Temporal Limitations:**
- **24-hour averages for PM:** Daily averages mask hour-to-hour variability (peak exposures missed)
- **Sampling frequency:** PM2.5 measured every 1-6 days at many sites (not continuous); introduces temporal aliasing
- **Long-term averages:** NAAQS compliance uses 3-year averages (smooths variability; short-term spikes averaged out)

**Measurement Limitations:**
- **Semi-volatile compounds:** PM2.5 measurement affected by temperature (semi-volatile organics evaporate from filters)
- **Instrument artifacts:** Positive artifacts (adsorption of gases onto filters), negative artifacts (evaporation of volatile PM)
- **Humidity effects:** Hygroscopic growth (particles absorb water; mass increases in humid conditions)

### Comparability Limitations

**Cross-site Comparability:**
- **Method differences:** FRM vs. FEM methods not perfectly equivalent (±10% differences possible)
- **Site characteristics:** Urban vs. rural, near-road vs. neighborhood, upwind vs. downwind (not directly comparable without context)
- **Operational differences:** State/local agencies vary in QA rigor (federal requirements ensure minimum standards but practices vary)

**Temporal Comparability:**
- **Method changes:** Transition from manual to automated methods (1990s-2000s); FRM to FEM (2000s-present)
- **Network changes:** Site additions/closures; near-road monitors added 2010s (changes network composition)
- **NAAQS revisions:** Regulatory standards change (PM2.5 standard added 1997, revised 2006, 2012, 2024); historical data comparable but compliance status not

**Parameter Comparability:**
- **Different averaging times:** PM2.5 (24-hr), O3 (8-hr), NO2 (1-hr, annual) — cannot directly compare across pollutants without standardization
- **Different health effects:** PM2.5 (chronic exposure) vs. O3 (acute exposure) — different exposure metrics relevant

### Usage Caveats

**Inappropriate Uses:**
1. **DO NOT use for real-time air quality alerts** — use AirNow API instead (AQS has 6-month validation lag)
2. **DO NOT use for individual exposure assessment** — monitors represent area averages, not personal exposure (requires exposure modeling)
3. **DO NOT assume unmonitored areas are clean** — absence of data ≠ absence of pollution (monitoring gap bias)
4. **DO NOT ignore environmental justice monitoring gaps** — undermonitoring in low-income communities creates data deserts (policy invisibility)
5. **DO NOT use for source attribution** — AQS measures ambient concentrations, not sources (requires source apportionment modeling)

**Ecological Fallacy Risks:**
- Area-level pollution does not equal individual exposure (activity patterns, microenvironments matter)
- County-level averages mask within-county disparities (ZIP code, neighborhood-level variation lost)

**Correlation vs. Causation:**
- AQS data appropriate for exposure assessment in epidemiological studies (with proper exposure modeling)
- Health effects studies require individual-level health data linked to exposure estimates (not possible with AQS alone)
- Natural experiments (policy changes, wildfires) useful for causal inference but require careful study design

**Environmental Justice Caveats:**
- **Monitoring gap = data invisibility:** Low-income communities, communities of color undermonitored → exposures underestimated → policy neglect reinforced
- **Regulatory compliance ≠ health equity:** Meeting NAAQS does not eliminate disparities (some communities exposed to higher pollution even when region meets standards)
- **Cumulative impacts missed:** AQS measures one pollutant at a time; cumulative burden of multiple pollutants, non-air stressors not captured

---

## Recommended Use Cases

### Ideal Applications

**Research Questions Well-Suited:**
1. "How has U.S. air quality changed since the Clean Air Act? (Policy evaluation)"
2. "Which communities are disproportionately exposed to PM2.5? (Environmental justice)"
3. "What is the relationship between PM2.5 and life expectancy across U.S. counties? (Health equity)"
4. "Do air quality trends differ between urban and rural areas? (Geographic disparities)"
5. "How do wildfire smoke events affect air quality in Western states? (Natural disasters)"

**Analysis Types Supported:**
- **Time series analysis:** Long-term trends (1980-present)
- **Geographic analysis:** Spatial patterns, exposure disparities, environmental justice hotspots
- **Policy evaluation:** Before/after regulatory changes (Clean Air Act amendments, state policies)
- **Exposure assessment:** Epidemiological studies linking air quality to health outcomes
- **Extreme event analysis:** Wildfires, dust storms, pollution episodes

### Appropriate Contexts

**Geographic Contexts:**
- **U.S. national trends** (aggregated data)
- **State/regional comparisons** (regulatory jurisdiction)
- **County-level analysis** (health departments, epidemiology)
- **Monitoring site-level** (exposure assessment, environmental justice)
- **Urban vs. rural disparities** (structural determinants)

**Temporal Contexts:**
- **Long-term trends** (decades; policy evaluation)
- **Seasonal patterns** (O3 in summer, PM2.5 in winter)
- **Annual averages** (NAAQS compliance, health studies)
- **Historical research** (Clean Air Act effectiveness)

**Subject Contexts:**
- **Environmental health** (PM2.5, O3 health effects)
- **Structural wellbeing determinants** (ZIP code determines exposure)
- **Environmental justice** (exposure disparities by race, income)
- **Quality of life** (outdoor activity restrictions on high pollution days)
- **Life expectancy modeling** (PM2.5 as longevity determinant)

### Use Warnings

**Avoid Using This Source For:**
1. **Individual exposure assessment** → Use personal monitors, exposure modeling, or indoor air quality data
2. **Real-time air quality** → Use AirNow API (current conditions)
3. **Global comparisons** → Use WHO Global Air Quality Database, satellite data (AQS is U.S. only)
4. **Source attribution** → Use EPA National Emissions Inventory, source apportionment modeling
5. **Indoor air quality** → Use indoor monitoring studies, building sensors

**Recommended Alternatives For:**
- **Real-time data** → AirNow API (https://www.airnow.gov/), PurpleAir (low-cost sensors)
- **Global coverage** → WHO Global Air Quality Database, OpenAQ, satellite data (NASA MODIS, Sentinel)
- **Higher spatial resolution** → Low-cost sensor networks (PurpleAir), land-use regression models, satellite data
- **Individual exposure** → Personal monitors (wearable sensors), GPS-based exposure modeling
- **Indoor air quality** → Indoor air quality monitors, EPA Indoor Air Quality Program

---

## Citation

### Preferred Citation Format

**APA 7th:**
U.S. Environmental Protection Agency. (2025). *Air Quality System (AQS)*. https://aqs.epa.gov/aqsweb/

**Chicago 17th:**
U.S. Environmental Protection Agency. "Air Quality System (AQS)." Accessed October 27, 2025. https://aqs.epa.gov/aqsweb/.

**MLA 9th:**
U.S. Environmental Protection Agency. *Air Quality System (AQS)*. EPA, 2025, aqs.epa.gov/aqsweb/.

**Vancouver:**
U.S. Environmental Protection Agency. Air Quality System (AQS) [Internet]. Research Triangle Park (NC): EPA; 2025 [cited 2025 Oct 27]. Available from: https://aqs.epa.gov/aqsweb/

**BibTeX:**
```bibtex
@misc{epa_aqs_2025,
  author = {{U.S. Environmental Protection Agency}},
  title = {Air Quality System (AQS)},
  year = {2025},
  url = {https://aqs.epa.gov/aqsweb/},
  note = {Accessed: 2025-10-27}
}
```

### Data Citation Principles

Following FORCE11 Data Citation Principles:
- **Importance:** EPA AQS is citable research output; cite in publications using air quality data
- **Credit and Attribution:** Citations credit EPA and state/local agencies operating monitors
- **Evidence:** Citations enable readers to verify research claims about air quality
- **Unique Identification:** URL + access date + parameter code + date range for reproducibility
- **Access:** Citation provides access method (API, bulk download)
- **Persistence:** EPA maintains stable URLs; data archived through NARA (National Archives)
- **Specificity and Verifiability:** Specify parameter code, geographic scope, date range for exact reproducibility
- **Interoperability:** Citation format compatible with reference managers, academic databases
- **Flexibility:** Adaptable to various research outputs (papers, reports, dashboards)

**Example of Specific Data Citation:**
U.S. Environmental Protection Agency. (2024). "PM2.5 Daily Average Concentrations, 2020-2023" [Parameter Code: 88101]. *Air Quality System*. https://aqs.epa.gov/aqsweb/. Accessed October 27, 2025.

---

## Version History

### Current Version
- **Version:** API v1.0
- **Date:** 2010s (API launch)
- **Changes:** Stable API since launch

### Previous Versions
- **Version:** AQS System Modernization | **Date:** 2000s | **Changes:** Database modernization; web interface; improved data submission
- **Version:** AQS Legacy System | **Date:** 1971-2000s | **Changes:** Initial system; paper-based submissions; limited digital access

---

## Review Log

### Internal Reviews
- **Date:** 2025-10-27 | **Reviewer:** DM-001 | **Status:** Approved | **Notes:** Initial catalog entry; comprehensive evaluation completed; emphasizes environmental health as structural wellbeing determinant

### Quality Checks
- **Last Metadata Validation:** 2025-10-27
- **Last Authority Verification:** 2025-10-27
- **Last Link Check:** 2025-10-27
- **Last Access Test:** 2025-10-27 (API documentation verified; API key registration process verified)

---

## Related Resources

### Cross-References

**Related Substrate Entities:**
- **Problems:**
  - PR-00XXX: Respiratory Disease Burden
  - PR-00XXX: Cardiovascular Disease Epidemic
  - PR-00XXX: Environmental Injustice and Health Inequity
  - PR-00XXX: Cognitive Decline and Air Pollution
  - PR-00XXX: Reduced Life Expectancy in Polluted Areas
- **Solutions:**
  - SO-00XXX: Clean Air Act Enforcement
  - SO-00XXX: Transportation Electrification
  - SO-00XXX: Renewable Energy Transition
  - SO-00XXX: Environmental Justice Monitoring Expansion
  - SO-00XXX: Urban Planning for Air Quality
- **Organizations:**
  - ORG-00XXX: U.S. Environmental Protection Agency
  - ORG-00XXX: State/Local Air Agencies
  - ORG-00XXX: American Lung Association
- **Other Data Sources:**
  - DS-00001: WHO Global Health Observatory (global air pollution mortality)
  - DS-00005: CDC WONDER Mortality (air pollution-attributable deaths)
  - DS-00006: Census ACS Social Wellbeing (demographic data for environmental justice analysis)

**External Resources:**
- **Alternative Sources:**
  - AirNow API (real-time): https://www.airnow.gov/
  - PurpleAir (low-cost sensors): https://www.purpleair.com/
  - OpenAQ (global): https://openaq.org/
- **Complementary Sources:**
  - EPA National Emissions Inventory: https://www.epa.gov/air-emissions-inventories
  - NASA MODIS Satellite Data: https://modis.gsfc.nasa.gov/
  - AQLI (Air Quality Life Index): https://aqli.epic.uchicago.edu/
- **Source Comparison Studies:**
  - Di et al. (2019). "An ensemble-based model of PM2.5 concentration across the contiguous United States..." *EHP*.
  - Barkjohn et al. (2021). "Development and application of a United States-wide correction for PM2.5 data collected with PurpleAir sensors" *ACP*.

### Additional Documentation

**User Guides:**
- AQS Data Mart API Documentation: https://aqs.epa.gov/aqsweb/documents/data_api.html
- AQS Code Tables: https://aqs.epa.gov/aqsweb/documents/codetables/
- 40 CFR Part 58 (Monitoring Requirements): https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-58

**Research Using This Source:**
- 100,000+ citations in Google Scholar
- Harvard Six Cities Study (seminal air pollution epidemiology)
- American Cancer Society CPS-II cohort (air pollution and mortality)
- Environmental justice literature (exposure disparities)

**Methodology Papers:**
- EPA FRM/FEM approval process: https://www.epa.gov/air-research/air-monitoring-methods-criteria-pollutants
- NAAQS scientific reviews: https://www.epa.gov/naaqs

---

## Cataloger Notes

**Internal Notes:**
- **CRITICAL SOURCE** for environmental health and structural wellbeing determinants
- Excellent data quality; regulatory-grade measurements; long time series
- **Environmental justice emphasis:** Monitoring gap in low-income communities = data invisibility = policy neglect
- **Unique framing:** Air quality as structural constraint on wellbeing (cannot self-care out of toxic air)
- API stable but slow (10 req/min rate limit); recommend 6-second delays between requests
- Consider integrating with Census ACS demographic data for environmental justice analysis

**To Do:**
- [ ] Create update.ts script with rate limiting (6-second delays)
- [ ] Test API with sample requests (PM2.5, Ozone)
- [ ] Cross-reference with CDC WONDER mortality data
- [ ] Link to environmental justice problems/solutions
- [ ] Consider creating derived dataset: "Life Expectancy Impact by County" (PM2.5 × AQLI conversion factors)

**Questions for Review:**
- Should we prioritize PM2.5 and Ozone exclusively (most health-relevant) or include all criteria pollutants?
- How to handle environmental justice monitoring gaps in documentation (acknowledge limitation prominently)?
- Should we create companion dataset for AirNow API (real-time) vs. AQS (historical)?

---

**END OF SOURCE RECORD**
