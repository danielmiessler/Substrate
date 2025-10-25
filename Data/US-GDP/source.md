# U.S. Gross Domestic Product (GDP) - Real GDP Time Series

**Source ID:** DS-00002
**Record Created:** 2025-10-25
**Last Updated:** 2025-10-25
**Cataloger:** Substrate Data Curation
**Review Status:** Reviewed

---

## Bibliographic Information

### Title Statement
- **Main Title:** Real Gross Domestic Product (GDPC1, GDPCA)
- **Subtitle:** Quarterly and Annual U.S. GDP in Chained 2017 Dollars
- **Abbreviated Title:** Real GDP, GDPC1
- **Variant Titles:** U.S. Real GDP, Chained-Dollar GDP, Real Gross Domestic Product

### Responsibility Statement
- **Publisher/Issuing Body:** Federal Reserve Bank of St. Louis (FRED)
- **Department/Division:** Federal Reserve Economic Data (FRED) Division
- **Contributors:** Bureau of Economic Analysis (BEA - primary source), U.S. Department of Commerce
- **Contact Information:** stlsFRED@stls.frb.org

### Publication Information
- **Place of Publication:** St. Louis, Missouri, USA (FRED); Washington, D.C., USA (BEA)
- **Date of First Publication:** 1947 (quarterly), 1929 (annual)
- **Publication Frequency:** Quarterly (with three-stage revision process)
- **Current Status:** Active

### Edition/Version Information
- **Current Version:** Continuous updates (quarterly releases + annual comprehensive update)
- **Version History:** September annual comprehensive updates revise 5+ years of historical data
- **Versioning Scheme:** Three-stage quarterly revision (advance, second, third estimates) + annual September comprehensive

---

## Authority Statement

### Organizational Authority

**Issuing Organization Analysis:**
- **Official Name:** Federal Reserve Bank of St. Louis (FRED aggregator); Bureau of Economic Analysis (BEA - primary authority)
- **Type:** Federal Reserve Bank (FRED); Federal Government Statistical Agency (BEA)
- **Established:** FRED: 1991; BEA: 1972 (successor to earlier agencies dating to 1945)
- **Mandate:** Federal Reserve Act (FRED); BEA Act of 1972 - authority to compile, analyze, and publish economic statistics
- **Parent Organization:** Federal Reserve System (FRED); U.S. Department of Commerce (BEA)
- **Governance Structure:** Federal Reserve Bank board (FRED); Presidential appointment + Senate confirmation (BEA Director)

**Domain Authority:**
- **Subject Expertise:** Economic statistics, national accounts, GDP methodology (BEA 50+ years); economic data aggregation (FRED 30+ years)
- **Recognition:** BEA is U.S. principal statistical agency for economic accounts; FRED aggregates 841,000+ time series from 118 sources
- **Publication History:** GDP published since 1942 (annual), 1947 (quarterly); FRED since 1991
- **Peer Recognition:** Federal Reserve, Treasury, Congressional Budget Office, IMF, World Bank, OECD cite BEA GDP; FRED used by millions of researchers

**Quality Oversight:**
- **Peer Review:** BEA methodology reviewed by National Academies, academic economists
- **Editorial Board:** BEA Advisory Committee (academic economists, business representatives)
- **Scientific Committee:** Bureau of Economic Analysis leadership (professional economists)
- **External Audit:** Subject to Government Accountability Office (GAO) oversight
- **Certification:** Follows United Nations System of National Accounts (2008 SNA) international standards

**Independence Assessment:**
- **Funding Model:** Federal appropriations (no commercial interests)
- **Political Independence:** Professional statistical agency; BEA Director serves under civil service protections
- **Commercial Interests:** None (federal government mission)
- **Transparency:** Complete methodology documentation; data vintages preserved; revisions documented

### Data Authority

**Provenance Classification:**
- **Source Type:** Primary (BEA direct compilation from source data)
- **Data Origin:** BEA compiles GDP from ~400 source datasets (Census Bureau, IRS tax data, BLS surveys, industry reports)
- **Chain of Custody:** Source agencies → BEA compilation → National Income and Product Accounts (NIPA) → FRED aggregation → Public access

**Primary Source Characteristics:**
- BEA is the authoritative U.S. statistical agency for GDP compilation
- Direct compilation from administrative records, surveys, and other government statistical sources
- Legal mandate under BEA Act of 1972
- Follows internationally-recognized System of National Accounts (SNA) framework

---

## Scope Note

### Content Description

**Subject Coverage:**
- **Primary Subjects:** Macroeconomics, National Accounts, Economic Activity, GDP
- **Secondary Subjects:** Business Cycles, Economic Growth, Economic Forecasting
- **Subject Classification:**
  - LC: HB (Economic Theory), HC (Economic History and Conditions)
  - Dewey: 330.973 (U.S. Economics)
- **Keywords:** GDP, Gross Domestic Product, real GDP, economic output, national accounts, NIPA, chained dollars, economic growth, recession, business cycle

**Geographic Coverage:**
- **Spatial Scope:** United States (50 states + D.C. + territories)
- **Countries/Regions Included:** United States only
- **Geographic Granularity:** National aggregate (state-level GDP available in separate BEA datasets)
- **Coverage Completeness:** 100% of U.S. economic activity
- **Notable Exclusions:** Underground economy, informal sector estimated but not fully captured

**Temporal Coverage:**
- **Start Date:** 1947-Q1 (quarterly), 1929 (annual)
- **End Date:** Present (ongoing quarterly updates)
- **Historical Depth:** 78+ years (quarterly), 96+ years (annual)
- **Frequency of Observations:** Quarterly (4 times per year)
- **Temporal Granularity:** Quarter-level, Annual
- **Time Series Continuity:** Excellent; continuous data with documented revisions

**Population/Cases Covered:**
- **Target Population:** All economic activity within United States
- **Inclusion Criteria:** All goods and services produced within U.S. borders
- **Exclusion Criteria:** Economic activity outside U.S. borders (even by U.S. firms)
- **Coverage Rate:** Comprehensive national accounts
- **Sample vs. Census:** Combination - some components from Census data, others from sample surveys aggregated to national totals

**Variables/Indicators:**
- **Number of Variables:** 2 primary series (GDPC1 quarterly, GDPCA annual); 100+ related NIPA tables
- **Core Indicators:**
  - Real GDP (billions of chained 2017 dollars)
  - GDP growth rates (quarter-over-quarter, year-over-year)
  - Quarterly seasonally adjusted values
  - Annual values (not seasonally adjusted)
- **Derived Variables:** GDP growth rates, annualized quarterly growth, real per capita GDP
- **Data Dictionary Available:** Yes - BEA NIPA Handbook

### Content Boundaries

**What This Source IS:**
- Gold-standard measure of U.S. economic activity
- Primary indicator used by Federal Reserve for monetary policy
- Official U.S. government economic statistic
- Internationally-comparable using UN System of National Accounts framework
- Best source for understanding U.S. economic trends and business cycles

**What This Source IS NOT:**
- NOT a measure of economic well-being or quality of life
- NOT a complete measure of all economic value (excludes household production, volunteer work, environmental costs)
- NOT adjusted for income distribution or inequality
- NOT real-time (3-month lag from quarter end to third estimate)
- NOT granular below national level (use state GDP datasets for subnational analysis)

**Comparison with Similar Sources:**

| Source | Advantages Over This Source | Disadvantages vs. This Source |
|--------|----------------------------|-------------------------------|
| GDPNow (Atlanta Fed) | Real-time nowcast (within current quarter) | Not official data; frequently revised; less reliable |
| World Bank GDP Data | Global coverage; cross-country comparisons | Sources U.S. data from BEA anyway; use BEA directly for U.S. |
| OECD GDP Data | OECD member comparisons | Sources U.S. data from BEA anyway; use BEA directly for U.S. |
| Nominal GDP (not real) | Current dollar values for some analyses | Not inflation-adjusted; poor for historical comparisons |

---

## Access Conditions

### Technical Access

**API Information:**
- **Endpoint URL:** https://fred.stlouisfed.org/graph/fredgraph.csv?id=GDPC1 (quarterly), https://fred.stlouisfed.org/graph/fredgraph.csv?id=GDPCA (annual)
- **API Type:** Direct CSV download (HTTP GET); also FRED API available
- **API Version:** FRED API v1
- **OpenAPI/Swagger Spec:** https://fred.stlouisfed.org/docs/api/fred/
- **SDKs/Libraries:** Python (fredapi), R (fredr), unofficial libraries for other languages

**Authentication:**
- **Authentication Required:** No (for CSV); Yes for FRED API
- **Authentication Type:** API Key (free) for FRED API
- **Registration Process:** Sign up at https://fredaccount.stlouisfed.org/apikeys
- **Approval Required:** No (instant API key)
- **Approval Timeframe:** Immediate

**Rate Limits:**
- **Requests per Second:** Not documented for CSV download; reasonable use expected
- **Requests per Day:** FRED API: 120 requests/minute
- **Concurrent Connections:** Not specified
- **Throttling Policy:** API enforces rate limits with 429 status code
- **Rate Limit Headers:** Not provided for CSV; API includes rate limit info

**Query Capabilities:**
- **Filtering:** CSV downloads full series; FRED API supports date range filtering
- **Sorting:** Chronological (inherent in time series)
- **Pagination:** Not applicable (full series download)
- **Aggregation:** Pre-aggregated quarterly/annual data
- **Joins:** Not applicable (single time series)

**Data Formats:**
- **Available Formats:** CSV (direct download), JSON/XML (FRED API)
- **Format Quality:** Well-formed CSV; UTF-8 encoded; consistent schema
- **Compression:** Not compressed
- **Encoding:** UTF-8

**Download Options:**
- **Bulk Download:** Yes - full CSV download
- **Streaming API:** No
- **FTP/SFTP:** No
- **Torrent:** No
- **Data Dumps:** Full series download each time (not incremental)

**Reliability Metrics:**
- **Uptime:** Very high (99.9%+ estimated); Federal Reserve infrastructure
- **Latency:** <1 second for CSV download
- **Breaking Changes:** Schema stable for decades; BEA methodology changes documented years in advance
- **Deprecation Policy:** Federal Reserve commitment to long-term data availability
- **Service Level Agreement:** No formal SLA (federal government service)

### Legal/Policy Access

**License:**
- **License Type:** Public Domain (U.S. Government Work)
- **License Version:** N/A
- **License URL:** https://www.usa.gov/government-works
- **SPDX Identifier:** CC0-1.0 (effectively public domain for U.S. government data)

**Usage Rights:**
- **Redistribution Allowed:** Yes (public domain)
- **Commercial Use Allowed:** Yes (public domain)
- **Modification Allowed:** Yes (public domain)
- **Attribution Required:** Not legally required; citation recommended as scholarly best practice
- **Share-Alike Required:** No

**Cost Structure:**
- **Access Cost:** Free

**Terms of Service:**
- **TOS URL:** https://fred.stlouisfed.org/legal/
- **Key Restrictions:** No restrictions (public domain); standard disclaimer
- **Liability Disclaimers:** Federal Reserve not liable for decisions based on data
- **Privacy Policy:** FRED collects website analytics; no personal data in economic statistics

---

## Source Evaluation Narrative

### Methodological Assessment

**Data Collection Methodology:**

**Sampling Design:**
- **Method:** Combination - Census data (decennial census, economic census), administrative records (IRS, Social Security), sample surveys (BLS, Census Bureau monthly/quarterly surveys)
- **Sample Size:** Varies by source dataset (millions of firms for economic census)
- **Sampling Frame:** Universe of U.S. economic establishments and households
- **Stratification:** By industry, firm size, geographic region (varies by source data)
- **Weighting:** Post-stratification weights applied; benchmarking to census years

**Data Collection Instruments:**
- **Instrument Type:** Administrative records (tax filings), establishment surveys, household surveys
- **Validation:** BEA applies consistency checks across ~400 source datasets
- **Question Wording:** Varies by source agency (BLS, Census Bureau, etc.)
- **Mode:** Administrative data, mail/web surveys, in-person surveys

**Quality Control Procedures:**
- **Field Supervision:** Varies by source agency (BLS, Census Bureau have extensive QC)
- **Validation Rules:** BEA cross-validates source datasets; applies balancing identities (e.g., income = expenditure = product approaches must match)
- **Consistency Checks:** Three independent approaches to GDP (expenditure, income, product) cross-validated
- **Verification:** Benchmarking to quinquennial economic census
- **Outlier Treatment:** Statistical methods to identify and investigate outliers

**Error Characteristics:**
- **Sampling Error:** Varies by component; major components have low sampling error due to census/administrative data
- **Non-sampling Error:** Coverage gaps (underground economy estimated at ~1-2% of GDP); measurement error in service sector
- **Known Biases:** Informal economy undercounted; rapid technological change challenges deflation
- **Accuracy Bounds:** BEA does not publish official confidence intervals; academic estimates suggest ±0.5-1.0% for quarterly growth rates

**Methodology Documentation:**
- **Transparency Level:** 5/5 (Exemplary)
- **Documentation URL:** https://www.bea.gov/resources/methodologies/nipa-handbook
- **Peer Review Status:** BEA methods reviewed by National Academies; published in peer-reviewed journals
- **Reproducibility:** Methodology fully documented; data sources identified; replication possible with access to source data

### Currency Assessment

**Update Characteristics:**
- **Update Frequency:** Quarterly (three releases per quarter: advance, second, third estimates)
- **Update Reliability:** Extremely consistent; releases follow strict schedule (8:30 AM ET)
- **Update Notification:** BEA release calendar published; FRED email alerts available
- **Last Updated:** 2025-10-25 (check quarterly after BEA third estimate)

**Timeliness:**
- **Collection to Publication Lag:** ~30 days (advance), ~60 days (second), ~90 days (third estimate)
- **Factors Affecting Timeliness:** Availability of source data from partner agencies; quality review process
- **Historical Timeliness:** Consistent three-stage release process maintained for decades

**Currency for Different Uses:**
- **Real-time Analysis:** Unsuitable (3-month lag to third estimate); use GDPNow for nowcasting
- **Recent Trends:** Excellent (quarterly updates capture trends within 1-3 months)
- **Historical Research:** Excellent (continuous series 1947-present quarterly, 1929-present annual)

### Objectivity Assessment

**Potential Biases:**

**Political Bias:**
- **Government Influence:** Statistical agency independence protected by professional standards; BEA Director serves under civil service
- **Editorial Stance:** Professional statistical neutrality mandated
- **Political Pressure:** Rare instances of political commentary on GDP; methodology insulated from political pressure

**Commercial Bias:**
- **Funding Sources:** Federal appropriations (no commercial interests)
- **Advertising Influence:** Not applicable
- **Proprietary Interests:** None

**Cultural/Social Bias:**
- **Geographic Bias:** National aggregates mask regional differences
- **Social Perspective:** Market-based production; excludes household production, volunteer work
- **Language Bias:** English-language documentation
- **Selection Bias:** Market economy focus; informal/underground economy estimated but not directly measured

**Transparency:**
- **Bias Disclosure:** BEA acknowledges measurement challenges (services deflation, underground economy, etc.)
- **Limitations Stated:** Comprehensive in methodology documentation
- **Raw Data Available:** Aggregated data; underlying source data from partner agencies

### Reliability Assessment

**Consistency:**
- **Internal Consistency:** Three approaches to GDP (expenditure, income, product) must reconcile; statistical discrepancy published
- **Temporal Consistency:** Time series maintained with documented revisions; chained-dollar methodology ensures comparability
- **Cross-source Consistency:** BEA GDP corroborated by independent indicators (employment, industrial production, income)

**Stability:**
- **Definition Changes:** Rare major methodology changes (2013: comprehensive revision; 2018: adoption of 2008 SNA); changes documented years in advance
- **Methodology Changes:** Annual comprehensive updates each September refine historical estimates
- **Series Breaks:** Clearly documented when methodology changes; historical data revised for consistency

**Verification:**
- **Independent Verification:** Academic economists validate BEA methods; international organizations (IMF, OECD) review U.S. national accounts
- **Replication Studies:** Multiple academic papers use BEA GDP; discrepancies investigated and resolved
- **Audit Results:** GAO reviews BEA processes; no major data quality issues identified

### Accuracy Assessment

**Validation Evidence:**
- **Benchmark Comparisons:** Benchmarked to quinquennial economic census (high accuracy)
- **Coverage Assessments:** Estimated 98-99% coverage of market-based production
- **Error Studies:** Academic research suggests quarterly growth rate accuracy ±0.5-1.0 percentage points

**Accuracy for Different Uses:**
- **Point Estimates:** High reliability for quarterly/annual GDP levels
- **Trend Analysis:** Extremely reliable for medium-term trends (1+ years)
- **Cross-sectional Comparison:** Reliable for comparing U.S. to other countries using SNA framework
- **Sub-population Analysis:** Not available (national aggregates only; use state GDP for subnational)

---

## Known Limitations and Caveats

### Coverage Limitations

**Geographic Gaps:**
- National aggregates only (no subnational detail in this series)
- U.S. territories (Puerto Rico, Guam, etc.) reported separately

**Temporal Gaps:**
- Pre-1929 data not official BEA compilation (use MeasuringWorth for 1790-1928 estimates)

**Population Exclusions:**
- Underground economy (estimated at 1-2% of GDP) only partially captured
- Household production (home cooking, childcare, etc.) not included
- Volunteer work not included

**Variable Gaps:**
- No demographic breakdowns (by income, race, age)
- No distributional measures (GDP per capita available but not by income group)
- Environmental costs not deducted from GDP

### Methodological Limitations

**Sampling Limitations:**
- Smaller industries/services may have larger sampling error
- New industries (tech, gig economy) measurement challenges

**Measurement Limitations:**
- Service sector deflation challenging (quality improvements hard to price)
- Rapid technological change complicates inflation adjustment
- Software, R&D valuation subjective

**Processing Limitations:**
- Quarterly data seasonally adjusted (removes seasonal patterns but introduces estimation)
- Chained-dollar method creates non-additive components
- Revisions can be substantial (advance vs. third estimate)

### Comparability Limitations

**Cross-national Comparability:**
- Different countries use SNA framework but implementation varies
- Exchange rate fluctuations complicate international comparisons
- PPP adjustments needed for cross-country living standard comparisons

**Temporal Comparability:**
- Methodology changes (2013 comprehensive revision major) create series breaks
- Chained-dollar base year updated periodically (currently 2017)

**Sub-group Comparability:**
- National aggregates cannot be disaggregated by demographics

### Usage Caveats

**Inappropriate Uses:**
1. **DO NOT use GDP as sole measure of well-being** - use broader indicators (HDI, median income, etc.)
2. **DO NOT assume GDP growth benefits all equally** - use distributional data (Census income statistics)
3. **DO NOT use for real-time nowcasting** - use GDPNow or other nowcasting models
4. **DO NOT use for subnational analysis** - use state/metro GDP datasets from BEA

**Ecological Fallacy Risks:**
- National GDP growth does not imply all households/regions benefited
- Aggregate growth can mask rising inequality

**Correlation vs. Causation:**
- GDP is descriptive (what was produced), not explanatory (why it was produced)
- Associations with other variables do not imply causation

---

## Recommended Use Cases

### Ideal Applications

**Research Questions Well-Suited:**
1. "How has U.S. economic output changed over time?"
2. "Was the U.S. in a recession during a specific period?"
3. "How do different presidential administrations compare on economic growth?"
4. "What was the economic impact of major events (9/11, COVID-19, financial crisis)?"

**Analysis Types Supported:**
- Time series trend analysis
- Business cycle identification
- Economic growth comparisons across periods
- Recession dating and severity assessment
- Policy impact analysis (fiscal stimulus, tax changes)
- Forecasting and econometric modeling

### Appropriate Contexts

**Geographic Contexts:**
- U.S. national-level economic analysis
- International comparisons (U.S. vs. other countries)

**Temporal Contexts:**
- Quarterly analysis (1947-present)
- Annual analysis (1929-present)
- Long-term growth trends (multiple decades)

**Subject Contexts:**
- Macroeconomic research
- Business cycle analysis
- Economic policy evaluation
- Financial market analysis

### Use Warnings

**Avoid Using This Source For:**
1. **Income distribution analysis** → Use Census Bureau income statistics
2. **Subnational economic analysis** → Use BEA state GDP, metro GDP datasets
3. **Real-time nowcasting** → Use Atlanta Fed GDPNow
4. **Well-being measurement** → Use Human Development Index, Genuine Progress Indicator
5. **Individual household economic status** → Use microdata from Census, BLS surveys

**Recommended Alternatives For:**
- Income inequality → Census Bureau, IRS Statistics of Income
- State/regional economies → BEA Regional GDP data
- Real-time economic activity → GDPNow, weekly economic indicators
- International GDP → OECD, World Bank (for other countries)
- Sectoral detail → BEA NIPA detailed tables

---

## Citation

### Preferred Citation Format

**APA 7th:**
U.S. Bureau of Economic Analysis. (2025). *Real Gross Domestic Product* [GDPC1], retrieved from FRED, Federal Reserve Bank of St. Louis. https://fred.stlouisfed.org/series/GDPC1

**Chicago 17th:**
U.S. Bureau of Economic Analysis. "Real Gross Domestic Product [GDPC1]." FRED, Federal Reserve Bank of St. Louis. Accessed October 25, 2025. https://fred.stlouisfed.org/series/GDPC1.

**MLA 9th:**
U.S. Bureau of Economic Analysis. *Real Gross Domestic Product* [GDPC1]. FRED, Federal Reserve Bank of St. Louis, 2025, fred.stlouisfed.org/series/GDPC1.

**Vancouver:**
U.S. Bureau of Economic Analysis. Real Gross Domestic Product [GDPC1] [Internet]. St. Louis: FRED, Federal Reserve Bank of St. Louis; 2025 [cited 2025 Oct 25]. Available from: https://fred.stlouisfed.org/series/GDPC1

**BibTeX:**
```bibtex
@misc{bea_gdp_2025,
  author = {{U.S. Bureau of Economic Analysis}},
  title = {Real Gross Domestic Product [GDPC1]},
  year = {2025},
  howpublished = {FRED, Federal Reserve Bank of St. Louis},
  url = {https://fred.stlouisfed.org/series/GDPC1},
  note = {Accessed: 2025-10-25}
}
```

---

## Cross-Reference Section Structure

**Supports Claims:**
- (none yet - can be added later by entry maintainers)

**Documents Problems:**
- (none yet - can be added later by entry maintainers)

**Informs Arguments:**
- (none yet - can be added later by entry maintainers)

**Used in Projects:**
- (none yet - can be added later by entry maintainers)

*Cross-references can be added by entry maintainers as needed.*

---

**END OF SOURCE RECORD**
