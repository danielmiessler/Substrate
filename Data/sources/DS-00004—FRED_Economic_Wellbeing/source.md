```markdown
# Federal Reserve Economic Data - Economic Wellbeing Indicators

**Source ID:** DS-00004
**Record Created:** 2025-10-27
**Last Updated:** 2025-10-27
**Cataloger:** DM-001
**Review Status:** Initial Entry

---

## Bibliographic Information

### Title Statement
- **Main Title:** Federal Reserve Economic Data
- **Subtitle:** Economic Wellbeing Indicators for the United States
- **Abbreviated Title:** FRED
- **Variant Titles:** St. Louis Fed FRED, FRED Economic Data

### Responsibility Statement
- **Publisher/Issuing Body:** Federal Reserve Bank of St. Louis
- **Department/Division:** Research Division
- **Contributors:** Federal Reserve System, Bureau of Labor Statistics, U.S. Census Bureau, Bureau of Economic Analysis
- **Contact Information:** https://fred.stlouisfed.org/contactus/

### Publication Information
- **Place of Publication:** St. Louis, Missouri, United States
- **Date of First Publication:** 1991
- **Publication Frequency:** Continuous (real-time updates via API)
- **Current Status:** Active

### Edition/Version Information
- **Current Version:** API v1.0 (stable)
- **Version History:** Database launched 1991; API launched 2012
- **Versioning Scheme:** Database continuously updated; API versioned with backward compatibility

---

## Authority Statement

### Organizational Authority

**Issuing Organization Analysis:**
- **Official Name:** Federal Reserve Bank of St. Louis
- **Type:** Regional Federal Reserve Bank
- **Established:** 1914 (St. Louis Fed); FRED launched 1991
- **Mandate:** Federal Reserve Act of 1913 - maintain maximum employment, stable prices, and moderate long-term interest rates
- **Parent Organization:** Federal Reserve System (established 1913)
- **Governance Structure:** Board of Directors (9 members), President, Federal Reserve Board of Governors oversight

**Domain Authority:**
- **Subject Expertise:** Economic data aggregation and dissemination; 110+ years Federal Reserve System experience; 30+ years FRED database operation
- **Recognition:** Premier economic data platform; 1.3 million+ series from 100+ sources; trusted by economists, policymakers, researchers globally
- **Publication History:** FRED database (1991-present); Federal Reserve Economic Data publications; research papers
- **Peer Recognition:** 100,000+ citations in academic research; used by Federal Reserve System, U.S. government agencies, international institutions

**Quality Oversight:**
- **Peer Review:** Federal Reserve System research standards
- **Editorial Board:** Research Division oversight; Federal Reserve Bank of St. Louis
- **Scientific Committee:** Federal Reserve System economists review methodology
- **External Audit:** Federal Reserve Board oversight; Office of Inspector General
- **Certification:** Follows federal statistical standards; OMB Statistical Policy Directives

**Independence Assessment:**
- **Funding Model:** Federal Reserve System funding (independent within government; self-funded through operations)
- **Political Independence:** Federal Reserve independence established by Federal Reserve Act; insulated from political pressure
- **Commercial Interests:** No commercial interests; public service mission
- **Transparency:** Data sources documented; methodology transparent; open API access

### Data Authority

**Provenance Classification:**
- **Source Type:** Secondary (aggregates data from federal agencies, Federal Reserve banks, international organizations)
- **Data Origin:** Bureau of Labor Statistics, Census Bureau, Bureau of Economic Analysis, Federal Reserve banks, Treasury, other federal agencies
- **Chain of Custody:** Source agencies → FRED database → Quality validation → Publication via API/web interface

**Secondary Source Characteristics:**
- Aggregates data from 100+ authoritative sources
- Standardizes formats and metadata
- Provides unified access to disparate economic data
- Adds value through data cleaning, frequency conversion, seasonal adjustment
- Original source attribution maintained for all series

---

## Scope Note

### Content Description

**Subject Coverage:**
- **Primary Subjects:** Economics, Economic Indicators, Labor Markets, Financial Markets, Consumer Behavior, Housing Markets
- **Secondary Subjects:** Monetary Policy, Banking, Interest Rates, Inflation, Employment, Income, Inequality
- **Subject Classification:**
  - LC: HB (Economic Theory), HC (Economic History and Conditions), HG (Finance)
  - Dewey: 330 (Economics), 332 (Financial Economics)
- **Keywords:** Economic indicators, unemployment, inflation, consumer sentiment, financial stress, income inequality, mortgage rates, housing prices, debt service, economic wellbeing

**Geographic Coverage:**
- **Spatial Scope:** Primarily United States (national level); includes some state/metropolitan data and international series
- **Countries/Regions Included:** United States (primary); 200+ countries/territories (international economic data)
- **Geographic Granularity:** National (primary); state-level; metropolitan statistical areas (MSAs) for select indicators
- **Coverage Completeness:** 100% U.S. national indicators; variable state/local coverage (50-80% depending on indicator)
- **Notable Exclusions:** Limited county-level data; some territories have limited coverage

**Temporal Coverage:**
- **Start Date:** Varies by indicator; historical series date to 1776 (some economic data); most modern indicators 1947+ (post-WWII)
- **End Date:** Present (most recent data within days/weeks of collection)
- **Historical Depth:** 50-250+ years depending on indicator
- **Frequency of Observations:** Daily, weekly, monthly, quarterly, annual (varies by series)
- **Temporal Granularity:** High-frequency data available (daily/weekly for financial markets); monthly for most economic indicators
- **Time Series Continuity:** Excellent continuity; breaks noted for definitional/methodological changes

**Population/Cases Covered:**
- **Target Population:** U.S. economy; U.S. labor force; U.S. households; U.S. financial markets
- **Inclusion Criteria:** Data from official U.S. statistical agencies and Federal Reserve sources
- **Exclusion Criteria:** Unofficial data; non-peer-reviewed estimates
- **Coverage Rate:** Varies by series; labor force surveys ~60,000 households; financial data complete market coverage
- **Sample vs. Census:** Mix - census data (administrative records), sample surveys (household surveys, establishment surveys), complete enumeration (financial markets)

**Variables/Indicators:**
- **Number of Variables:** 1,300,000+ time series (FRED database); 10 core wellbeing indicators selected for this source
- **Core Indicators (Wellbeing Focus):**
  - TDSP - Household Debt Service Payments as Percent of Disposable Personal Income
  - DRCCLACBS - Delinquency Rate on Credit Card Loans, All Commercial Banks
  - STLFSI4 - St. Louis Fed Financial Stress Index (weekly)
  - LNS13327709 - Total Unemployed Plus Marginally Attached Plus Part Time for Economic Reasons (U-6 Rate)
  - UEMP27OV - Number of Civilians Unemployed for 27 Weeks and Over
  - UMCSENT - University of Michigan Consumer Sentiment Index
  - SIPOVGINIUSA - GINI Index for the United States
  - MORTGAGE30US - 30-Year Fixed Rate Mortgage Average
  - MSPUS - Median Sales Price of Houses Sold for the United States
  - PSAVERT - Personal Saving Rate
- **Derived Variables:** Percent changes, indexes, seasonally adjusted series, moving averages
- **Data Dictionary Available:** Yes - https://fred.stlouisfed.org/docs/api/fred/ and series-specific metadata

### Content Boundaries

**What This Source IS:**
- Authoritative source for U.S. economic indicators measuring household economic wellbeing
- Best source for standardized, high-quality economic time series
- Comprehensive repository for financial stress, employment, consumer sentiment, housing affordability
- Real-time or near-real-time data for tracking economic conditions

**What This Source IS NOT:**
- NOT microdata (aggregated indicators only; no individual household records)
- NOT international focus (primarily U.S.-centric; limited international coverage)
- NOT forward-looking (historical and current data; not forecasts)
- NOT the original source (aggregates from official agencies; not primary data collector)

**Comparison with Similar Sources:**

| Source | Advantages Over FRED | Disadvantages vs. FRED |
|--------|---------------------|------------------------|
| BLS Data Portal | Original source for labor data; more detailed breakdowns | Less user-friendly interface; no unified access across economic domains |
| Census Bureau Data | Original source for demographic/income data; microdata available | Fragmented across multiple portals; less frequent updates for some series |
| World Bank Data | International coverage; cross-country comparisons | Less detailed U.S. data; longer publication lag |
| Bloomberg Terminal | Real-time financial data; proprietary analytics | Expensive subscription; commercial use only; limited historical depth for some series |

---

## Access Conditions

### Technical Access

**API Information:**
- **Endpoint URL:** https://api.stlouisfed.org/fred/
- **API Type:** REST
- **API Version:** v1.0 (stable)
- **OpenAPI/Swagger Spec:** Not specified
- **SDKs/Libraries:** Community libraries available for Python (fredapi), R (fredr), Julia, MATLAB

**Authentication:**
- **Authentication Required:** Yes
- **Authentication Type:** API key
- **Registration Process:** Free registration at https://fred.stlouisfed.org/docs/api/api_key.html
- **Approval Required:** No (instant approval)
- **Approval Timeframe:** Immediate upon registration

**Rate Limits:**
- **Requests per Second:** 2 requests/second recommended
- **Requests per Minute:** 120 requests/minute (hard limit)
- **Requests per Day:** No daily limit specified
- **Concurrent Connections:** Not specified
- **Throttling Policy:** 429 error returned if rate limit exceeded; exponential backoff recommended
- **Rate Limit Headers:** Not provided in standard API response

**Query Capabilities:**
- **Filtering:** By series ID, date range, observation frequency
- **Sorting:** Chronological by observation date
- **Pagination:** Not applicable (returns all observations for date range)
- **Aggregation:** Frequency conversion (daily→monthly→quarterly→annual); aggregation methods (average, sum, end-of-period)
- **Joins:** Not supported (single series per request; multiple requests needed for multiple series)

**Data Formats:**
- **Available Formats:** JSON, XML
- **Format Quality:** Well-formed, validated
- **Compression:** gzip supported
- **Encoding:** UTF-8

**Download Options:**
- **Bulk Download:** Not available (API-based access only)
- **Streaming API:** No
- **FTP/SFTP:** No
- **Torrent:** No
- **Data Dumps:** No bulk download; must use API to fetch series

**Reliability Metrics:**
- **Uptime:** 99.9% (high reliability; Federal Reserve infrastructure)
- **Latency:** <200ms median response time
- **Breaking Changes:** API v1.0 stable since 2012; no breaking changes
- **Deprecation Policy:** Minimum 12-month notice for API changes
- **Service Level Agreement:** No formal SLA (public service)

### Legal/Policy Access

**License:**
- **License Type:** Public Domain (U.S. Government Work)
- **License Version:** N/A
- **License URL:** https://fred.stlouisfed.org/legal/
- **SPDX Identifier:** Not applicable (public domain)

**Usage Rights:**
- **Redistribution Allowed:** Yes (public domain)
- **Commercial Use Allowed:** Yes (public domain)
- **Modification Allowed:** Yes (public domain)
- **Attribution Required:** Recommended but not required; proper citation encouraged
- **Share-Alike Required:** No

**Cost Structure:**
- **Access Cost:** Free

**Terms of Service:**
- **TOS URL:** https://fred.stlouisfed.org/legal/
- **Key Restrictions:** None (public domain); API key required for access but free; fair use expected (respect rate limits)
- **Liability Disclaimers:** Data provided "as is"; Federal Reserve not liable for decisions based on data; users responsible for verifying suitability
- **Privacy Policy:** API key registration requires email; no tracking of data usage

---

## Collection Development Policy Fit

### Relevance Assessment

**Substrate Mission Alignment:**
- **Human Progress Focus:** Economic wellbeing central to measuring human flourishing and quality of life
- **Problem-Solution Connection:**
  - Links to Problems: Economic inequality, financial insecurity, unemployment, housing unaffordability, household debt burden
  - Links to Solutions: Economic policy interventions, social safety nets, financial literacy programs, housing policy
- **Evidence Quality:** Gold-standard for U.S. economic indicators; authoritative Federal Reserve data

**Collection Priorities Match:**
- **Priority Level:** CRITICAL - essential source for economic wellbeing domain
- **Uniqueness:** Federal Reserve's authoritative economic data platform; unified access to key wellbeing indicators
- **Comprehensiveness:** Fills critical gap for real-time economic wellbeing measurement; complements health/education data sources

### Comparison with Holdings

**Overlapping Sources:**
- World Bank Indicators (DS-00002) - some overlapping economic indicators
- OECD Data (DS-00023) - overlapping U.S. economic indicators
- BLS Data (DS-00018) - overlapping labor market data

**Unique Contribution:**
- Unified access to diverse economic wellbeing indicators
- Real-time/near-real-time updates (weekly/monthly)
- Financial stress and consumer sentiment indicators not available elsewhere in standardized form
- Historical depth (decades of consistent time series)

**Preferred Use Cases:**
- Tracking U.S. household economic wellbeing over time
- Measuring financial stress and economic insecurity
- Analyzing relationships between employment, income, housing, and consumer confidence
- Real-time economic condition monitoring

---

## Technical Specifications

### Data Model

**Schema Documentation:**
- **Schema Type:** REST API returning JSON/XML
- **Schema URL:** https://fred.stlouisfed.org/docs/api/fred/
- **Schema Version:** v1.0

**Entity Types:**
- **Series:** Economic time series (e.g., TDSP, UMCSENT)
- **Observation:** Individual data points (date + value)
- **Source:** Data provider (e.g., BLS, Census Bureau, Federal Reserve)
- **Release:** Publication schedule for series
- **Category:** Hierarchical classification of series

**Key Relationships:**
- Series → Observations (one-to-many)
- Series → Source (many-to-one)
- Series → Release (many-to-one)
- Series → Categories (many-to-many)

**Primary Keys:**
- Series: series_id (e.g., "TDSP", "UMCSENT")
- Observation: Composite (series_id, observation_date)
- Source: source_id
- Release: release_id

**Foreign Keys:**
- Observation.series_id → Series.series_id
- Series.source_id → Source.source_id
- Series.release_id → Release.release_id

### Metadata Standards Compliance

**Standards Followed:**
- [x] Dublin Core (partial)
- [x] Schema.org Dataset (partial)
- [ ] DCAT (Data Catalog Vocabulary)
- [x] SDMX (Statistical Data and Metadata eXchange) - partial
- [ ] DDI (Data Documentation Initiative)
- [ ] ISO 19115 (Geographic Information Metadata)
- [ ] MARC

**Metadata Quality:**
- **Completeness:** 90% of elements populated (series title, source, units, frequency, seasonal adjustment)
- **Accuracy:** High - metadata maintained by FRED staff and source agencies
- **Consistency:** Excellent - standardized metadata fields across all series

### API Documentation Quality

**Documentation Assessment:**
- **Completeness:** Comprehensive - all endpoints documented with parameter descriptions
- **Examples Provided:** Yes - code examples for multiple programming languages
- **Error Messages:** Clear HTTP status codes (200, 400, 429, 500) with error descriptions
- **Change Log:** Not explicitly maintained; API stable since 2012
- **Tutorials:** Available - quick start guides, video tutorials
- **Support Forum:** Email support; active community Q&A; Stack Overflow tag

---

## Source Evaluation Narrative

### Methodological Assessment

**Data Collection Methodology:**

**Sampling Design:**
- **Method:** FRED aggregates data from source agencies; methodologies vary by source
  - BLS labor data: Probability samples (Current Population Survey ~60,000 households; Current Employment Statistics ~145,000 businesses)
  - Financial data: Complete market data (mortgage rates, interest rates)
  - Federal Reserve data: Administrative records (debt service ratios from Flow of Funds)
- **Sample Size:** Varies by source; CPS ~60,000 households; CES ~145,000 establishments
- **Sampling Frame:** BLS uses Master Address File; employment surveys use BLS establishment database
- **Stratification:** Multi-stage stratified sampling for household surveys
- **Weighting:** Post-stratification weights to match population demographics

**Data Collection Instruments:**
- **Instrument Type:** Varies by source - survey questionnaires (BLS), administrative records (Federal Reserve), market data feeds (financial indicators)
- **Validation:** Source agencies conduct validation; FRED performs consistency checks
- **Question Wording:** Standardized by source agencies (e.g., BLS labor force questions unchanged since 1994)
- **Mode:** Computer-assisted telephone/personal interviews (CPS); online/mail (establishment surveys); automated (financial markets)

**Quality Control Procedures:**
- **Field Supervision:** Conducted by source agencies (e.g., BLS field staff)
- **Validation Rules:** FRED validates data consistency; checks for missing values, outliers, series breaks
- **Consistency Checks:** Cross-series validation where applicable
- **Verification:** Source agency quality control; FRED staff review data upon ingestion
- **Outlier Treatment:** Flagged for review; extreme values investigated

**Error Characteristics:**
- **Sampling Error:** Standard errors provided for survey-based estimates (BLS publishes confidence intervals)
- **Non-sampling Error:** Measurement error in surveys (recall bias, response bias); coverage error (homeless, institutionalized populations often excluded)
- **Known Biases:** Response bias in sentiment surveys; survivorship bias in labor surveys (excludes institutionalized)
- **Accuracy Bounds:** Varies by series; CPS unemployment rate typically ±0.2 percentage points (95% CI); financial market data highly accurate

**Methodology Documentation:**
- **Transparency Level:** 4/5 (Comprehensive) - source agencies publish detailed methodology; FRED documents sources
- **Documentation URL:** https://fred.stlouisfed.org/docs/api/fred/ and source agency websites (e.g., BLS.gov)
- **Peer Review Status:** Source agencies use peer-reviewed methods; BLS methodology reviewed by federal statistical standards
- **Reproducibility:** High - published data reproducible using source agency methodology documentation

### Currency Assessment

**Update Characteristics:**
- **Update Frequency:** Varies by series
  - STLFSI4 (Financial Stress): Weekly (every Friday)
  - UMCSENT (Consumer Sentiment): Monthly (preliminary mid-month, final end-of-month)
  - Unemployment indicators: Monthly (first Friday of month)
  - GINI Index: Annual (September release)
  - Debt Service Ratio: Quarterly (2-3 months after quarter end)
- **Update Reliability:** Highly consistent; follows published release schedules
- **Update Notification:** Email notifications available; RSS feeds; API can query release schedules
- **Last Updated:** 2025-10-27 (current as of catalog entry)

**Timeliness:**
- **Collection to Publication Lag:**
  - Financial indicators: 0-7 days (near real-time)
  - Monthly employment indicators: 10-14 days
  - Quarterly indicators: 60-90 days
  - Annual indicators: 9-12 months (e.g., GINI Index)
- **Factors Affecting Timeliness:** Source agency processing schedules, data quality review, seasonal adjustment calculations
- **Historical Timeliness:** Consistent; rare delays during government shutdowns or data collection disruptions

**Currency for Different Uses:**
- **Real-time Analysis:** Suitable for weekly/monthly indicators (financial stress, unemployment, consumer sentiment)
- **Recent Trends:** Excellent for tracking monthly/quarterly economic conditions
- **Historical Research:** Excellent - decades of consistent time series for most indicators

### Objectivity Assessment

**Potential Biases:**

**Political Bias:**
- **Government Influence:** Federal Reserve independence protects against political interference; data published regardless of political implications
- **Editorial Stance:** Federal Reserve mandate is economic stability, not political advocacy; data presented objectively
- **Political Pressure:** Federal Reserve Act guarantees independence; rare instances of political criticism of data, but data not altered

**Commercial Bias:**
- **Funding Sources:** Federal Reserve self-funded through operations; not dependent on appropriations or commercial funding
- **Advertising Influence:** Not applicable (non-commercial)
- **Proprietary Interests:** None - public service mission

**Cultural/Social Bias:**
- **Geographic Bias:** U.S.-centric; limited international coverage
- **Social Perspective:** Economic perspective; traditional economic indicators may not capture all dimensions of wellbeing (e.g., unpaid work, environmental quality)
- **Language Bias:** English primary language; limited translation
- **Selection Bias:** Indicators reflect Federal Reserve priorities (employment, inflation, financial stability); some aspects of wellbeing underrepresented

**Transparency:**
- **Bias Disclosure:** Source agencies acknowledge limitations; FRED provides source attribution and methodology links
- **Limitations Stated:** Documented in series notes and source agency methodology documents
- **Raw Data Available:** FRED provides access to source agency data; microdata available from some sources (e.g., Census Bureau)

### Reliability Assessment

**Consistency:**
- **Internal Consistency:** High - automated consistency checks; series follow established patterns
- **Temporal Consistency:** Excellent - long-running time series with consistent methodology; breaks clearly documented
- **Cross-source Consistency:** Good agreement with other authoritative sources (e.g., OECD, World Bank for overlapping series)

**Stability:**
- **Definition Changes:** Infrequent - BLS unemployment definitions stable since 1994; changes clearly marked
- **Methodology Changes:** Source agencies announce methodology changes in advance; revisions documented
- **Series Breaks:** Clearly marked in series notes; historical data often revised for consistency

**Verification:**
- **Independent Verification:** Academic researchers, think tanks, international organizations use and validate FRED data
- **Replication Studies:** Extensive use in published research; errors/discrepancies rare and corrected promptly
- **Audit Results:** Federal Reserve subject to Office of Inspector General audits; data quality maintained

### Accuracy Assessment

**Validation Evidence:**
- **Benchmark Comparisons:** BLS labor data validated against population benchmarks (decennial Census); financial data validated against market sources
- **Coverage Assessments:** BLS publishes coverage rates (e.g., establishment survey covers ~30% of employment universe, weighted to 100%)
- **Error Studies:** BLS publishes sampling error estimates; confidence intervals available for survey-based indicators

**Accuracy for Different Uses:**
- **Point Estimates:** Highly accurate for administrative/market data (debt service, mortgage rates, financial stress); accurate within sampling error for survey data (unemployment ±0.2 pp)
- **Trend Analysis:** Excellent for detecting medium-term trends (6+ months); month-to-month volatility within normal statistical variation
- **Cross-sectional Comparison:** Reliable for comparing across time periods; caution needed for small changes within margin of error
- **Sub-population Analysis:** Limited in FRED aggregated data; source agencies provide demographic breakdowns (available through direct agency access)

---

## Known Limitations and Caveats

### Coverage Limitations

**Geographic Gaps:**
- U.S. territories have limited coverage for some indicators
- International data limited (primarily U.S. focus)
- State/local data available for some series but not all wellbeing indicators

**Temporal Gaps:**
- Historical data limited pre-1940s for most modern economic indicators
- Some series discontinued or redefined over time (breaks in continuity)
- Survey data may have gaps during collection disruptions (e.g., government shutdowns)

**Population Exclusions:**
- Homeless populations typically excluded from household surveys
- Institutionalized populations (prisons, nursing homes) excluded from labor force surveys
- Undocumented immigrants underrepresented in surveys

**Variable Gaps:**
- Limited demographic disaggregation in FRED aggregated data (detailed breakdowns require source agency access)
- Wellbeing indicators focused on economic/financial dimensions; non-economic wellbeing (health, relationships, meaning) not captured
- Underground economy not measured in official statistics

### Methodological Limitations

**Sampling Limitations:**
- Household surveys subject to sampling error (confidence intervals provided)
- Non-response bias in surveys (some demographics less likely to respond)
- Survey redesigns can create discontinuities in time series

**Measurement Limitations:**
- Self-reported data subject to recall bias, social desirability bias (sentiment surveys)
- Consumer sentiment may not perfectly predict behavior
- Credit card delinquency rates may lag actual financial distress (late fees, forbearance)
- GINI index measures income inequality but not wealth inequality (wealth more concentrated than income)

**Processing Limitations:**
- Seasonal adjustment can obscure actual values (seasonally adjusted vs. not seasonally adjusted)
- Revisions common (preliminary→final data); early estimates subject to revision
- Aggregation to national level masks regional/local variation

### Comparability Limitations

**Cross-national Comparability:**
- U.S.-specific definitions may differ from international standards
- Limited comparability with non-U.S. sources without careful definitional alignment
- FRED primarily U.S.-focused; international comparisons require supplementary sources

**Temporal Comparability:**
- Methodological changes over decades create series breaks (e.g., CPS redesign 1994)
- Revisions to historical data (benchmark revisions can change entire series)
- Inflation adjustment requires careful attention to base year

**Sub-group Comparability:**
- Aggregated data in FRED limits demographic comparisons
- Intersectional analysis not available (e.g., unemployment by race × age × education requires source agency data)

### Usage Caveats

**Inappropriate Uses:**
1. **DO NOT use for individual/household-level analysis** - aggregated data only; use source agency microdata (e.g., Census Bureau, BLS) for individual-level research
2. **DO NOT assume causation from correlations** - time series correlations do not imply causality; appropriate for hypothesis generation, not causal inference
3. **DO NOT ignore revisions** - preliminary data subject to revision; use final/revised data for research
4. **DO NOT compare across countries without adjusting for definitional differences** - U.S. definitions may differ from international standards
5. **DO NOT use solely for comprehensive wellbeing assessment** - economic indicators only; supplement with health, education, social indicators

**Ecological Fallacy Risks:**
- National-level trends don't necessarily apply to all individuals/regions
- Example: National unemployment rate declining doesn't mean all regions/demographics experiencing improvement

**Correlation vs. Causation:**
- FRED data appropriate for tracking economic conditions over time
- Causal inference requires careful research design (natural experiments, instrumental variables, etc.), not simple time series analysis
- Correlations between series may be spurious (common trends, third variable causation)

---

## Recommended Use Cases

### Ideal Applications

**Research Questions Well-Suited:**
1. "How has household debt burden changed over the past 20 years?"
2. "Is there a relationship between financial stress and unemployment?"
3. "How do mortgage rate changes affect housing affordability?"
4. "How has consumer sentiment tracked with major economic events (recessions, recoveries)?"
5. "What is the trend in long-term unemployment during economic downturns?"

**Analysis Types Supported:**
- Descriptive statistics (trends, levels, volatility)
- Time series analysis (trends, seasonality, cycles)
- Correlation analysis (relationships between economic indicators)
- Event studies (impact of policy changes, economic shocks)
- Forecasting (using historical patterns to predict short-term trends)

### Appropriate Contexts

**Geographic Contexts:**
- United States national-level analysis
- State-level analysis for select indicators (when state series available)
- International comparisons (limited; requires supplementary sources)

**Temporal Contexts:**
- Post-WWII economic analysis (1947-present for most indicators)
- Recent trends (monthly/quarterly data available within weeks)
- Historical research (decades of consistent data for most series)

**Subject Contexts:**
- Household economic wellbeing and financial security
- Labor market conditions and employment
- Consumer confidence and sentiment
- Housing affordability and mortgage markets
- Income inequality and economic disparities
- Financial system stress and stability

### Use Warnings

**Avoid Using This Source For:**
1. **Individual/household microdata analysis** → Use Census Bureau, BLS microdata instead
2. **International comparisons without careful alignment** → Use World Bank, OECD for cross-country analysis
3. **Subnational granularity beyond state-level** → Use state/local statistical agencies
4. **Non-economic wellbeing dimensions** → Use health, education, social indicator sources
5. **Real-time intraday economic data** → Use commercial financial data providers (Bloomberg, Reuters)

**Recommended Alternatives For:**
- Individual-level analysis → Census Bureau microdata (IPUMS), BLS microdata (CPS, NLSY)
- International comparisons → World Bank Open Data, OECD Data
- Subnational detail → State labor departments, metropolitan statistical area data from source agencies
- Non-economic wellbeing → WHO GHO (health), UN SDG (comprehensive development), Gallup World Poll (subjective wellbeing)
- Comprehensive inequality → World Inequality Database (wealth inequality, income inequality with more detail)

---

## Citation

### Preferred Citation Format

**APA 7th:**
Federal Reserve Bank of St. Louis. (2025). *Federal Reserve Economic Data* [Data set]. https://fred.stlouisfed.org/

**Chicago 17th:**
Federal Reserve Bank of St. Louis. "Federal Reserve Economic Data." Accessed October 27, 2025. https://fred.stlouisfed.org/.

**MLA 9th:**
Federal Reserve Bank of St. Louis. *Federal Reserve Economic Data*. FRED, 2025, fred.stlouisfed.org/.

**Vancouver:**
Federal Reserve Bank of St. Louis. Federal Reserve Economic Data [Internet]. St. Louis (MO): FRED; 2025 [cited 2025 Oct 27]. Available from: https://fred.stlouisfed.org/

**BibTeX:**
```bibtex
@misc{fred_2025,
  author = {{Federal Reserve Bank of St. Louis}},
  title = {Federal Reserve Economic Data},
  year = {2025},
  url = {https://fred.stlouisfed.org/},
  note = {Accessed: 2025-10-27}
}
```

### Data Citation Principles

Following FORCE11 Data Citation Principles:
- **Importance:** FRED is citable research output; cite in publications using this data
- **Credit and Attribution:** Citations credit Federal Reserve Bank of St. Louis and original source agencies
- **Evidence:** Citations enable readers to verify research claims
- **Unique Identification:** Series ID + URL + access date for exact reproducibility
- **Access:** Citation provides access method (API, web interface)
- **Persistence:** FRED maintains stable URLs; series IDs persistent
- **Specificity and Verifiability:** Specify series ID, observation period, access date for reproducibility
- **Interoperability:** Citation format compatible with reference managers, academic databases
- **Flexibility:** Adaptable to various research outputs (papers, reports, dashboards)

**Example of Specific Series Citation:**
Federal Reserve Bank of St. Louis. (2025). "Household Debt Service Payments as a Percent of Disposable Personal Income" [Series ID: TDSP]. *Federal Reserve Economic Data*. https://fred.stlouisfed.org/series/TDSP. Accessed October 27, 2025.

---

## Version History

### Current Version
- **Version:** API v1.0 (stable)
- **Date:** 2012 (API launch)
- **Changes:** Database continuously updated; API stable since launch

### Previous Versions
- **Version:** Database only (pre-API) | **Date:** 1991 | **Changes:** FRED launched as web-based database; no API
- **Version:** N/A | **Date:** N/A | **Changes:** API has not undergone breaking version changes since 2012 launch

---

## Review Log

### Internal Reviews
- **Date:** 2025-10-27 | **Reviewer:** DM-001 | **Status:** Initial Entry | **Notes:** Initial catalog entry; comprehensive evaluation completed; API tested successfully

### Quality Checks
- **Last Metadata Validation:** 2025-10-27
- **Last Authority Verification:** 2025-10-27
- **Last Link Check:** 2025-10-27
- **Last Access Test:** 2025-10-27 (API tested successfully)

---

## Related Resources

### Cross-References

**Related Substrate Entities:**
- **Problems:**
  - PR-00123: Economic Inequality
  - PR-00234: Household Financial Insecurity
  - PR-00345: Unemployment and Underemployment
  - PR-00456: Housing Unaffordability
- **Solutions:**
  - SO-00123: Economic Policy Interventions
  - SO-00234: Social Safety Nets
  - SO-00345: Financial Literacy Programs
  - SO-00456: Affordable Housing Policy
- **Organizations:**
  - ORG-00012: Federal Reserve System
  - ORG-00034: Bureau of Labor Statistics
  - ORG-00056: U.S. Census Bureau
  - ORG-00078: Bureau of Economic Analysis
- **Other Data Sources:**
  - DS-00001: WHO Global Health Observatory
  - DS-00002: UN Sustainable Development Goals
  - DS-00023: OECD Data
  - DS-00032: World Bank Indicators

**External Resources:**
- **Alternative Sources:**
  - Bureau of Labor Statistics: https://www.bls.gov/data/
  - U.S. Census Bureau: https://data.census.gov/
  - World Bank Data: https://data.worldbank.org/
- **Complementary Sources:**
  - OECD Data: https://data.oecd.org/
  - Eurostat: https://ec.europa.eu/eurostat
  - IMF Data: https://www.imf.org/en/Data
- **Source Comparison Studies:**
  - Not specified

### Additional Documentation

**User Guides:**
- FRED API Documentation: https://fred.stlouisfed.org/docs/api/fred/
- Series Search: https://fred.stlouisfed.org/search
- Data Download Guide: https://fred.stlouisfed.org/docs/api/fred/series_observations.html

**Research Using This Source:**
- 100,000+ citations in academic research (Google Scholar)
- Widely used in Federal Reserve research publications, academic papers, policy reports

**Methodology Papers:**
- BLS Handbook of Methods: https://www.bls.gov/opub/hom/
- Federal Reserve Flow of Funds Methodology: https://www.federalreserve.gov/releases/z1/

---

## Cataloger Notes

**Internal Notes:**
- Excellent source; high authority; essential for Substrate economic wellbeing domain
- API well-documented, stable, and easy to use
- Selected 10 core wellbeing indicators from 1.3M+ series for focused tracking
- Weekly financial stress indicator provides high-frequency wellbeing monitoring
- Consider adding state-level economic indicators as separate entries or expanded coverage

**To Do:**
- [ ] Add related organizations (Federal Reserve System, BLS, Census Bureau, BEA)
- [ ] Cross-reference with relevant Problems and Solutions
- [ ] Create update script for regular data refreshes
- [ ] Test update script with sample API calls
- [ ] Monitor API changes and rate limit compliance

**Questions for Review:**
- Should we expand to more indicators beyond core 10 wellbeing series?
- How to handle state-level data (separate source entry vs. expanded coverage)?
- Should we create separate entries for different economic domains (labor, housing, finance)?

---

**END OF SOURCE RECORD**
```
