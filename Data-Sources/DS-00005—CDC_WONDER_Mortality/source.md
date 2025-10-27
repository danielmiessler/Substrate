```markdown
# CDC WONDER Mortality Database

**Source ID:** DS-00005
**Record Created:** 2025-10-27
**Last Updated:** 2025-10-27
**Cataloger:** DM-001
**Review Status:** Reviewed

---

## Bibliographic Information

### Title Statement
- **Main Title:** Wide-ranging ONline Data for Epidemiologic Research (WONDER) - Mortality Database
- **Subtitle:** Comprehensive US Mortality Statistics with Crisis Indicators
- **Abbreviated Title:** CDC WONDER Mortality
- **Variant Titles:** CDC WONDER, WONDER System, National Vital Statistics System (NVSS) Mortality

### Responsibility Statement
- **Publisher/Issuing Body:** Centers for Disease Control and Prevention
- **Department/Division:** National Center for Health Statistics (NCHS)
- **Contributors:** State vital registration systems, US Census Bureau
- **Contact Information:** wonder@cdc.gov

### Publication Information
- **Place of Publication:** Hyattsville, Maryland, USA
- **Date of First Publication:** 1999 (WONDER System); ICD-10 mortality data 1999-present
- **Publication Frequency:** Continuous (API), Annual data releases with 1-2 year lag
- **Current Status:** Active

### Edition/Version Information
- **Current Version:** ICD-10 (1999-present)
- **Version History:** ICD-9 (1979-1998), ICD-10 (1999-present), ICD-11 transition planned
- **Versioning Scheme:** Follows International Classification of Diseases (ICD) revisions

---

## Authority Statement

### Organizational Authority

**Issuing Organization Analysis:**
- **Official Name:** Centers for Disease Control and Prevention (CDC)
- **Type:** US Federal Government Agency
- **Established:** 1946-07-01 (as Communicable Disease Center)
- **Mandate:** Public Health Service Act (42 U.S.C. §241) - authority to collect and analyze vital statistics
- **Parent Organization:** US Department of Health and Human Services
- **Governance Structure:** CDC Director appointed by HHS Secretary, Congressional oversight

**Domain Authority:**
- **Subject Expertise:** Premier US public health agency; 75+ years of vital statistics collection
- **Recognition:** Gold standard for US mortality data; legal authority under PHSA
- **Publication History:** National Vital Statistics Reports (continuous since 1946), WONDER system (1999-present)
- **Peer Recognition:** 1,000,000+ citations in academic literature; CDC NCHS is authoritative source for US vital statistics

**Quality Oversight:**
- **Peer Review:** National Committee on Vital and Health Statistics (NCVHS) provides oversight
- **Editorial Board:** NCHS Office of Analysis and Epidemiology
- **Scientific Committee:** CDC/NCHS Board of Scientific Counselors
- **External Audit:** GAO audits federal data systems; OMB compliance reviews
- **Certification:** Complies with OMB Statistical Policy Directive No. 1; CIPSEA protections

**Independence Assessment:**
- **Funding Model:** Federal appropriations (direct Congressional funding)
- **Political Independence:** Protected under Federal statistical system rules; scientific integrity policy
- **Commercial Interests:** No commercial interests; public service mission
- **Transparency:** Public data access mandated by law; methods fully documented

### Data Authority

**Provenance Classification:**
- **Source Type:** Secondary (aggregates state vital registration data)
- **Data Origin:** State vital registration offices submit death certificates to NCHS
- **Chain of Custody:** Death event → Medical certifier → State vital records office → NCHS → Quality assurance → Publication

**Secondary Source Characteristics:**
- Aggregates data from all 50 states, DC, and US territories
- Standardizes definitions across jurisdictions
- Applies statistical methods for comparability
- Conducts extensive quality control and consistency checks
- Value added: National completeness, standardized coding, long time series, research-ready formats

---

## Scope Note

### Content Description

**Subject Coverage:**
- **Primary Subjects:** Mortality Statistics, Cause of Death, Vital Statistics, Drug Overdoses, Suicide, Public Health Surveillance
- **Secondary Subjects:** Behavioral Health Crises, Occupational Mortality, Injury Epidemiology, Premature Death
- **Subject Classification:**
  - LC: RA (Public Health), HV (Social Pathology)
  - Dewey: 614.1 (Forensic Medicine, Mortality), 362.29 (Substance Abuse)
- **Keywords:** Drug overdose deaths, opioid epidemic, suicide rates, mortality rates, ICD-10 codes, cause of death, deaths of despair, behavioral health crisis indicators

**Geographic Coverage:**
- **Spatial Scope:** United States national data
- **Countries/Regions Included:** All 50 US states, District of Columbia, Puerto Rico, US territories
- **Geographic Granularity:** National, state, county level (county data subject to suppression rules)
- **Coverage Completeness:** ~100% (census of deaths, not sample); all deaths legally required to be registered
- **Notable Exclusions:** US citizens dying abroad not consistently captured

**Temporal Coverage:**
- **Start Date:** 1999-01-01 (ICD-10 era; ICD-9 data 1979-1998 in separate database)
- **End Date:** Present (most recent: 2023 provisional data; final 2022 data as of 2024)
- **Historical Depth:** 25+ years (ICD-10 era); 45+ years (including ICD-9)
- **Frequency of Observations:** Daily deaths aggregated to annual releases; provisional monthly/quarterly releases
- **Temporal Granularity:** Annual (final data); monthly (provisional data)
- **Time Series Continuity:** Excellent continuity within ICD-10 era (1999+); series break at ICD-9/ICD-10 transition

**Population/Cases Covered:**
- **Target Population:** All deaths occurring in the United States
- **Inclusion Criteria:** All deaths of US residents + non-residents dying in US; legally required registration
- **Exclusion Criteria:** Fetal deaths (separate database), US citizens dying abroad (usually not included)
- **Coverage Rate:** ~100% - universal death registration required by law; estimated 99%+ completeness
- **Sample vs. Census:** Census (complete enumeration, not sample)

**Variables/Indicators:**
- **Number of Variables:** 100+ variables per death record
- **Core Indicators:**
  - All-cause mortality rates (crude, age-adjusted)
  - Cause-specific mortality (ICD-10 codes: 113 selected causes + detailed subcategories)
  - Drug overdose deaths (X40-X44, X60-X64, X85, Y10-Y14)
  - Opioid-specific deaths (T40.0-T40.4, T40.6)
  - Suicide deaths (X60-X84, Y87.0, U03)
  - Alcohol-induced deaths (E24.4, G31.2, G62.1, G72.1, I42.6, K29.2, K70, K85.2, K86.0, R78.0, X45, X65, Y15)
  - Years of Potential Life Lost (YPLL)
  - Age-specific mortality rates (10-year age groups)
- **Derived Variables:** Age-adjusted rates, YPLL before age 75, crude rates per 100,000
- **Data Dictionary Available:** Yes - https://wonder.cdc.gov/wonder/help/ucd.html

### Content Boundaries

**What This Source IS:**
- Authoritative source for US mortality statistics (legal authority)
- Best source for "deaths of despair" - drug overdoses, suicides, alcohol-related deaths
- Census data (complete enumeration, not sample)
- Leading indicator of population wellbeing breakdown (behavioral revealed preference)
- County-level granularity shows geographic variation in health crises

**What This Source IS NOT:**
- NOT real-time surveillance (1-2 year lag for final data; months for provisional)
- NOT individual-level microdata (aggregated to protect privacy; individual records require restricted use agreement)
- NOT international data (US only)
- NOT nonfatal outcomes (deaths only; injury/morbidity in separate systems)

**Comparison with Similar Sources:**

| Source | Advantages Over CDC WONDER | Disadvantages vs. CDC WONDER |
|--------|---------------------------|------------------------------|
| State Vital Statistics | More timely (6-12 month lag vs. 1-2 years); may have additional state-specific variables | Single state only; interstate comparisons require standardization; state definitions may vary |
| WHO Mortality Database | International coverage; standardized for cross-country comparison | US data less timely than CDC WONDER; less detailed cause-of-death coding; no county-level data |
| Surveillance, Epidemiology, and End Results (SEER) | Cancer-specific detail; treatment data; survival analysis | Cancer only; limited to SEER registry areas (~48% of US population) |
| National Violent Death Reporting System (NVDRS) | Detailed incident circumstances for violent deaths (suicide, homicide, overdose) | Limited geographic coverage (not all states); smaller sample; more recent history (2003+) |

---

## Access Conditions

### Technical Access

**API Information:**
- **Endpoint URL:** https://wonder.cdc.gov/controller/datarequest/
- **API Type:** XML-based POST request/response
- **API Version:** Current (no formal versioning; backwards compatible)
- **OpenAPI/Swagger Spec:** Not available (documented at https://wonder.cdc.gov/wonder/help/WONDER-API.html)
- **SDKs/Libraries:** Community-maintained (wonderapi R package, Python scripts)

**Authentication:**
- **Authentication Required:** No
- **Authentication Type:** None (public API)
- **Registration Process:** Not required for API; optional registration for saved queries
- **Approval Required:** No (for aggregated data); Yes (for restricted-use microdata)
- **Approval Timeframe:** N/A for API; 6-12 months for restricted-use microdata application

**Rate Limits:**
- **Requests per Second:** Not specified (fair use expected)
- **Requests per Day:** Not specified (fair use expected)
- **Concurrent Connections:** Not specified
- **Throttling Policy:** None documented; recommend 1 request/second to be conservative
- **Rate Limit Headers:** Not provided

**Query Capabilities:**
- **Filtering:** By state, county, year, age group, sex, race/ethnicity, ICD-10 cause code, place of death, weekday
- **Sorting:** Not applicable (results sorted by selected grouping variables)
- **Pagination:** Not applicable (single result set per query; max 2000 rows per query)
- **Aggregation:** Server-side aggregation by selected group-by variables
- **Joins:** Not applicable (single data source)

**Data Formats:**
- **Available Formats:** XML (API response), CSV, TXT (web interface)
- **Format Quality:** Well-formed XML; validated against schema
- **Compression:** Not supported
- **Encoding:** UTF-8

**Download Options:**
- **Bulk Download:** No (API returns aggregated data only; microdata requires restricted-use agreement)
- **Streaming API:** No
- **FTP/SFTP:** No
- **Torrent:** No
- **Data Dumps:** No public bulk download (use API for aggregated data)

**Reliability Metrics:**
- **Uptime:** ~99% (2024 estimate; occasional maintenance windows)
- **Latency:** 2-30 seconds per query (depends on query complexity)
- **Breaking Changes:** Rare; backwards compatibility maintained; ICD-11 transition will be announced years in advance
- **Deprecation Policy:** No formal policy; major changes announced via website/email
- **Service Level Agreement:** No formal SLA (public service)

### Legal/Policy Access

**License:**
- **License Type:** Public Domain (US Government Work)
- **License Version:** 17 U.S.C. §105 (US Copyright Law)
- **License URL:** https://www.usa.gov/government-works
- **SPDX Identifier:** Not applicable (public domain)

**Usage Rights:**
- **Redistribution Allowed:** Yes (public domain)
- **Commercial Use Allowed:** Yes (no restrictions)
- **Modification Allowed:** Yes (no restrictions)
- **Attribution Required:** No (but recommended: cite CDC/NCHS as source)
- **Share-Alike Required:** No

**Cost Structure:**
- **Access Cost:** Free

**Terms of Service:**
- **TOS URL:** https://wonder.cdc.gov/wonder/help/main.html#Privacy-Policy.html
- **Key Restrictions:**
  - Cell suppression rules: Counts <10 suppressed to protect privacy
  - Population <100,000 may have suppressed rates
  - Must not attempt to re-identify individuals
  - Prohibited to use for commercial marketing (e.g., targeting individuals)
- **Liability Disclaimers:** Data provided "as is"; CDC not liable for decisions based on data; users responsible for verifying suitability
- **Privacy Policy:** CIPSEA protections; no personal data collected via API; website analytics per HHS policy

---

## Collection Development Policy Fit

### Relevance Assessment

**Substrate Mission Alignment:**
- **Human Progress Focus:** Critical crisis indicators - drug overdoses and suicides are leading indicators of wellbeing breakdown
- **Problem-Solution Connection:**
  - Links to Problems: Opioid epidemic, behavioral health crisis, "deaths of despair", healthcare access gaps
  - Links to Solutions: Harm reduction programs, mental health interventions, addiction treatment, prescription drug monitoring
- **Evidence Quality:** Gold-standard US vital statistics; census data (not sample); legal authority

**Collection Priorities Match:**
- **Priority Level:** CRITICAL - essential for understanding US wellbeing crises
- **Uniqueness:** Only official source for county-level drug overdose and suicide mortality in US
- **Comprehensiveness:** Fills critical gap; reveals behavioral truth that surveys miss (revealed preference vs. stated preference)

### Comparison with Holdings

**Overlapping Sources:**
- WHO Mortality Database (DS-00001) - includes US data but less timely/detailed
- National Violent Death Reporting System (future DS) - more detail on circumstances but limited coverage
- State vital statistics (various) - single-state focus

**Unique Contribution:**
- Official US mortality statistics with legal authority
- County-level granularity for geographic variation analysis
- Complete census (not sample) - captures all deaths
- Leading indicator of population wellbeing crises (behaviors revealed in deaths)
- ICD-10 detailed cause-of-death coding

**Preferred Use Cases:**
- Monitoring opioid epidemic and drug overdose trends
- Suicide rate analysis (national, state, county level)
- "Deaths of despair" research
- Geographic variation in mortality crises
- Premature death analysis (YPLL)
- Policy evaluation (state-level interventions)

---

## Technical Specifications

### Data Model

**Schema Documentation:**
- **Schema Type:** XML schema (request and response)
- **Schema URL:** https://wonder.cdc.gov/wonder/help/WONDER-API.html (documentation)
- **Schema Version:** Current (undated)

**Entity Types:**
- **DeathRecord:** Individual death records (aggregated in API responses)
- **GroupBy:** Grouping variables (state, county, year, age group, etc.)
- **Measure:** Count variables (deaths, crude rate, age-adjusted rate, YPLL)
- **Filter:** Filtering criteria (ICD-10 codes, demographics, geography, time)

**Key Relationships:**
- DeathRecord aggregated by GroupBy dimensions
- Filtered by Filter criteria
- Summarized into Measure values

**Primary Keys:**
- Composite key: All GroupBy variables selected in query (e.g., State + County + Year + Age Group + Cause)

**Foreign Keys:**
- Not applicable (single aggregated dataset)

### Metadata Standards Compliance

**Standards Followed:**
- [ ] Dublin Core - minimal
- [ ] DCAT (Data Catalog Vocabulary) - minimal
- [ ] Schema.org Dataset - minimal
- [ ] SDMX - no
- [ ] DDI (Data Documentation Initiative) - minimal
- [ ] ISO 19115 (Geographic Information Metadata) - minimal
- [ ] MARC - no
- Other: ICD-10 (International Classification of Diseases), FIPS (Federal Information Processing Standards) codes for geography

**Metadata Quality:**
- **Completeness:** 70% of elements populated (documentation comprehensive but not formally structured as metadata)
- **Accuracy:** High - documentation reviewed by NCHS epidemiologists
- **Consistency:** Good - definitions consistent across time within ICD-10 era

### API Documentation Quality

**Documentation Assessment:**
- **Completeness:** Good - core functionality documented; some advanced features require experimentation
- **Examples Provided:** Yes - XML request examples provided for common queries
- **Error Messages:** Basic HTTP status codes; XML error messages sometimes cryptic
- **Change Log:** Not maintained publicly
- **Tutorials:** Available - step-by-step guide for API usage at https://wonder.cdc.gov/wonder/help/WONDER-API.html
- **Support Forum:** Email support (wonder@cdc.gov); no public forum; Stack Overflow community questions

---

## Source Evaluation Narrative

### Methodological Assessment

**Data Collection Methodology:**

**Sampling Design:**
- **Method:** Census (complete enumeration, not sample)
- **Sample Size:** N/A (all deaths in US)
- **Sampling Frame:** N/A (universal death registration)
- **Stratification:** N/A (census)
- **Weighting:** Not applicable (census data)

**Data Collection Instruments:**
- **Instrument Type:** US Standard Certificate of Death (standardized form used by all states)
- **Validation:** Form developed by NCHS in collaboration with states; legally mandated
- **Question Wording:** Standardized across all states
- **Mode:** Medical certifier completes cause of death; funeral director completes demographic information; filed with state vital records office

**Quality Control Procedures:**
- **Field Supervision:** State vital registrars oversee completeness and timeliness
- **Validation Rules:** NCHS automated coding and quality checks (ACME - Automated Classification of Medical Entities)
- **Consistency Checks:** Age/cause consistency, geographic code validation, demographic completeness checks
- **Verification:** Query resolution process for problematic records; state vital registrars verify and correct
- **Outlier Treatment:** Statistical outliers flagged; investigated if data quality issue suspected

**Error Characteristics:**
- **Sampling Error:** None (census, not sample)
- **Non-sampling Error:**
  - Misclassification of cause of death (especially for drug-involved deaths - toxicology delays)
  - Underreporting of suicides (coroner determination variability; stigma leading to misclassification)
  - Geographic misattribution (death location vs. residence; some states report location of death)
  - Timeliness issues (toxicology delays can cause 6-12 month lag in drug-involved death counts)
- **Known Biases:**
  - Suicide undercounting (stigma; medicolegal determination inconsistency across jurisdictions)
  - Drug overdose specificity varies (some states better at toxicology testing/reporting)
  - Racial/ethnic misclassification (especially for American Indian/Alaska Native populations)
- **Accuracy Bounds:**
  - Overall mortality: 99%+ complete (near-universal death registration)
  - Cause of death: 90-95% accuracy for broad categories; 70-85% for specific subcategories
  - Drug-involved deaths: ~10-20% undercount estimated due to lack of toxicology testing or pending investigations

**Methodology Documentation:**
- **Transparency Level:** 5/5 (Comprehensive)
- **Documentation URL:** https://www.cdc.gov/nchs/nvss/mortality_methods.htm
- **Peer Review Status:** Methods published in peer-reviewed journals (Vital Statistics Reports series); reviewed by NCVHS
- **Reproducibility:** High - ICD-10 coding rules publicly available; ACME software documented

### Currency Assessment

**Update Characteristics:**
- **Update Frequency:** Annual (final data); quarterly (provisional data)
- **Update Reliability:** Consistent annual release schedule (December for prior year's final data)
- **Update Notification:** Email notifications available; NCHS website announcements; RSS feed
- **Last Updated:** 2024-12-15 (2022 final data released); 2025-06-01 (2023 provisional data)

**Timeliness:**
- **Collection to Publication Lag:**
  - Provisional data: 3-6 months (quarterly releases)
  - Final data: 12-24 months (annual release, typically 11-14 months after year-end)
  - Factors: State reporting timelines, toxicology testing delays, quality assurance, ICD-10 coding
- **Factors Affecting Timeliness:**
  - State vital registrars' submission schedules (vary by state)
  - Toxicology testing delays (drug-involved deaths)
  - Medicolegal investigations (homicides, suicides, overdoses)
  - Quality review and coding processes
- **Historical Timeliness:** Generally consistent; COVID-19 pandemic accelerated provisional data releases (2020-2021)

**Currency for Different Uses:**
- **Real-time Analysis:** Unsuitable - 3-24 month lag
- **Recent Trends:** Suitable for annual trends (provisional data); unsuitable for sub-annual trends
- **Historical Research:** Excellent - consistent time series 1999-present (ICD-10 era)

### Objectivity Assessment

**Potential Biases:**

**Political Bias:**
- **Government Influence:** Data collection mandated by law; NCHS has scientific independence protections; political pressure rare but possible (e.g., pressure to downplay opioid crisis)
- **Editorial Stance:** NCHS maintains scientific neutrality; publishes data regardless of political implications
- **Political Pressure:** Occasional controversies (e.g., CDC gun violence research restrictions 1996-2018); generally data publication protected

**Commercial Bias:**
- **Funding Sources:** Federal appropriations only; no industry funding
- **Advertising Influence:** Not applicable (government agency)
- **Proprietary Interests:** None

**Cultural/Social Bias:**
- **Geographic Bias:** Better data quality in states with well-resourced vital registration systems and comprehensive toxicology testing; rural areas may have less complete death investigation
- **Social Perspective:** Biomedical model of cause of death; limited capture of social determinants (poverty, discrimination, etc. not coded)
- **Language Bias:** English; Spanish translations limited
- **Selection Bias:** Suicide and overdose definitions subject to medicolegal determination - social stigma and local practices affect classification consistency

**Transparency:**
- **Bias Disclosure:** NCHS acknowledges data quality limitations by state; documentation notes known issues (e.g., suicide undercount, toxicology testing variation)
- **Limitations Stated:** Comprehensive - technical documentation details limitations
- **Raw Data Available:** Aggregated data public; individual death records available under restricted-use agreement with strict confidentiality protections

### Reliability Assessment

**Consistency:**
- **Internal Consistency:** High - validation rules ensure logical consistency (age/cause, location codes)
- **Temporal Consistency:** Excellent within ICD-10 era (1999+); series break at ICD-9/ICD-10 transition (1998-1999)
- **Cross-source Consistency:** Matches state vital statistics (NCHS aggregates state data); minor discrepancies due to timing differences

**Stability:**
- **Definition Changes:** Rare within ICD-10 era; ICD-11 transition planned (multi-year advance notice)
- **Methodology Changes:** ACME coding updates documented; typically minor; comparability maintained
- **Series Breaks:** Major break at ICD-9/ICD-10 transition (1998-1999); ICD-11 transition will create future break (planned for late 2020s with bridge-coding period)

**Verification:**
- **Independent Verification:** State vital statistics are primary source; academic researchers validate using hospital records, medical examiner reports (generally corroborate NCHS)
- **Replication Studies:** Extensive academic use; errors reported and corrected in subsequent releases
- **Audit Results:** GAO audits of federal statistical programs; NCHS passes audits; data quality assessments published periodically

### Accuracy Assessment

**Validation Evidence:**
- **Benchmark Comparisons:** Comparison with state vital statistics: 99%+ agreement for counts; <1% differences attributable to timing and geography coding
- **Coverage Assessments:** Death registration completeness estimated >99%; periodic studies confirm near-universal coverage
- **Error Studies:**
  - Cause-of-death accuracy studies: 70-95% agreement depending on cause specificity (higher for broad categories, lower for specific subcategories)
  - Drug-involved death studies: Estimated 10-20% undercount due to lack of toxicology testing or pending investigations

**Accuracy for Different Uses:**
- **Point Estimates:** Highly reliable for all-cause mortality (99%+ complete); reliable for major causes (90-95%); moderate reliability for drug/suicide subcategories (70-90% due to classification challenges)
- **Trend Analysis:** Highly reliable for multi-year trends (5+ years); be cautious with year-to-year changes (can reflect changes in investigation/testing practices, not just true mortality changes)
- **Cross-sectional Comparison:** Reliable for state comparisons; caution for county comparisons (small counties have cell suppression; rate instability)
- **Sub-population Analysis:** Reliable for sex, broad age groups, major racial/ethnic categories; limited for detailed age, race/ethnicity intersections (small cell suppression)

---

## Known Limitations and Caveats

### Coverage Limitations

**Geographic Gaps:**
- US citizens dying abroad generally not included (consular reports incomplete)
- Some territories have incomplete coverage (American Samoa, Guam variable completeness)
- Tribal lands: Data completeness varies; some tribes opt out of state reporting

**Temporal Gaps:**
- ICD-9 to ICD-10 transition (1998-1999) creates comparability break
- Provisional data subject to revision (can change by 5-10% when finalized)
- Toxicology-delayed deaths appear in later data releases (can shift apparent temporal patterns)

**Population Exclusions:**
- Fetal deaths excluded (separate database)
- Non-residents dying in US included in total counts but can be excluded in analyses
- Missing race/ethnicity data (5-10% of records have race/ethnicity categorized as "unknown")

**Variable Gaps:**
- Social determinants (income, education, occupation) captured incompletely on death certificate
- Mental health history not systematically captured (unless contributory cause of death)
- Substance use history limited (only if documented as cause of death)
- Intent determination (suicide vs. unintentional vs. undetermined) varies by jurisdiction

### Methodological Limitations

**Sampling Limitations:**
- Not applicable (census data)

**Measurement Limitations:**
- **Cause of death accuracy:**
  - Depends on certifier knowledge and diagnostic information available
  - Toxicology testing not universal (drug-involved deaths undercounted)
  - Autopsy rates declining (less diagnostic certainty)
  - Multiple cause coding: ICD allows only one underlying cause; contributing causes captured but less commonly analyzed
- **Suicide undercounting:**
  - Requires medicolegal determination of intent
  - Stigma may discourage suicide classification
  - Coroner/medical examiner practices vary by jurisdiction
  - Estimated 20-35% undercount (academic studies)
- **Drug overdose specificity:**
  - Requires toxicology testing (not always performed)
  - Some states better at specific drug identification (opioid type, fentanyl vs. heroin)
  - "Unspecified" drug codes used when testing incomplete

**Processing Limitations:**
- ACME automated coding: Can misclassify complex cases (human review limited to flagged records)
- ICD-10 coding rules: May not align with clinical understanding (e.g., diabetes contributory but not underlying cause)
- Geographic coding: Death occurrence location vs. residence - API default is residence but some analyses use occurrence
- Cell suppression: Counts <10 suppressed (limits small-area analysis)

### Comparability Limitations

**Cross-national Comparability:**
- ICD-10 coding rules vary slightly by country (WHO provides guidelines but countries adapt)
- Medicolegal systems differ (coroner vs. medical examiner; death investigation resources)
- Toxicology testing practices vary internationally
- Use WHO Mortality Database for international comparisons (standardized for comparability)

**Temporal Comparability:**
- ICD-9 to ICD-10 transition (1998-1999): Major break; NCHS provides comparability ratios for selected causes
- Within ICD-10 era: Generally comparable but be aware of:
  - Changes in autopsy rates (declining over time)
  - Changes in toxicology testing practices (fentanyl testing increased post-2015)
  - Changes in suicide investigation practices (some jurisdictions more consistent over time)
  - Opioid prescribing changes affect overdose patterns (prescription monitoring programs, prescribing guidelines)

**Sub-group Comparability:**
- Small counties: Cell suppression and rate instability
- Racial/ethnic groups: Misclassification issues (especially American Indian/Alaska Native - estimated 30-40% misclassified)
- Age groups: Comparability high; infant mortality in separate specialized reports
- Intersectional analysis: Limited by small cell suppression (e.g., sex × race × county × cause)

### Usage Caveats

**Inappropriate Uses:**
1. **DO NOT use for real-time surveillance** - 3-24 month lag; use syndromic surveillance for real-time
2. **DO NOT assume suicide counts are complete** - 20-35% estimated undercount; use as lower bound
3. **DO NOT compare small counties without considering rate instability** - use multi-year aggregates or suppress unstable rates
4. **DO NOT infer causation from geographic correlations** - ecological fallacy; state-level associations don't imply individual-level
5. **DO NOT attempt to re-identify individuals** - violation of CIPSEA; cell suppression protects privacy

**Ecological Fallacy Risks:**
- County-level associations (e.g., unemployment rate and overdose deaths) don't necessarily hold at individual level
- State-level policies correlated with outcomes may reflect confounding (states adopting policies differ in other ways)
- Example: States with higher opioid prescribing have higher overdose deaths - doesn't mean all overdose decedents had prescriptions (ecological correlation)

**Correlation vs. Causation:**
- Data appropriate for descriptive epidemiology (who, what, where, when)
- Analytical epidemiology (why) requires individual-level data, confounding control, causal inference methods
- Geographic/temporal correlations can generate hypotheses but not test causal mechanisms

---

## Recommended Use Cases

### Ideal Applications

**Research Questions Well-Suited:**
1. "How have drug overdose deaths changed over time in the United States?"
2. "Which states and counties have the highest suicide rates?"
3. "What is the geographic pattern of opioid-involved deaths?"
4. "How do premature death rates (YPLL) vary by state?"
5. "What are the leading causes of death in the United States by age group?"
6. "How did state opioid prescribing policies correlate with overdose trends?"

**Analysis Types Supported:**
- Descriptive statistics (counts, rates by geography/demographics)
- Trend analysis (time series 1999-present)
- Geographic analysis (state, county-level mapping)
- Age-standardization for comparability across populations
- Premature death burden (YPLL before age 75)
- Multiple cause-of-death analysis (contributing causes)
- Policy evaluation (ecological studies of state interventions)

### Appropriate Contexts

**Geographic Contexts:**
- US national trends
- State-level comparisons (all 50 states + DC)
- County-level analysis (caution: small counties have suppression and rate instability; use multi-year aggregates)
- Regional aggregations (Census regions, HHS regions)

**Temporal Contexts:**
- Long-term trends (1999-present for ICD-10 era)
- Medium-term trends (5-10 years most reliable)
- Annual trends (final data preferred; provisional data for recent years)
- Historical research (especially post-1999 ICD-10 transition)

**Subject Contexts:**
- Opioid epidemic research (overdose deaths by drug type)
- Suicide prevention (suicide trends by demographics, geography, method)
- "Deaths of despair" (combined drug/alcohol/suicide mortality)
- Premature death burden (YPLL)
- All-cause mortality trends
- Cause-specific mortality (heart disease, cancer, accidents, etc.)

### Use Warnings

**Avoid Using This Source For:**
1. **Real-time outbreak detection** → Use syndromic surveillance, poison control data
2. **Individual-level research** → Use restricted-use microdata (requires RUA)
3. **Small-area analysis (<100,000 population)** → Use multi-year aggregates; accept suppression limits
4. **Complete suicide counts** → Treat as lower bound (20-35% undercount)
5. **International comparisons** → Use WHO Mortality Database (standardized for comparability)
6. **Nonfatal outcomes** → Use NEISS, HCUP, emergency department data

**Recommended Alternatives For:**
- Real-time surveillance → NSSP (syndromic surveillance), NNDSS (notifiable diseases)
- Individual-level analysis → Restricted-use NCHS microdata (requires RUA)
- Nonfatal injuries → NEISS (National Electronic Injury Surveillance System)
- Detailed violent death circumstances → NVDRS (National Violent Death Reporting System)
- More timely state data → State vital statistics departments (6-12 month lag)
- International data → WHO Mortality Database (standardized for cross-country comparisons)

---

## Citation

### Preferred Citation Format

**APA 7th:**
Centers for Disease Control and Prevention, National Center for Health Statistics. (2024). *Wide-ranging ONline Data for Epidemiologic Research (WONDER)*. http://wonder.cdc.gov

**Chicago 17th:**
Centers for Disease Control and Prevention, National Center for Health Statistics. "Wide-ranging ONline Data for Epidemiologic Research (WONDER)." Accessed October 27, 2025. http://wonder.cdc.gov.

**MLA 9th:**
Centers for Disease Control and Prevention, National Center for Health Statistics. *Wide-ranging ONline Data for Epidemiologic Research (WONDER)*. CDC, 2024, wonder.cdc.gov.

**Vancouver:**
Centers for Disease Control and Prevention, National Center for Health Statistics. Wide-ranging ONline Data for Epidemiologic Research (WONDER) [Internet]. Atlanta (GA): CDC; 2024 [cited 2025 Oct 27]. Available from: http://wonder.cdc.gov

**BibTeX:**
```bibtex
@misc{cdc_wonder_2024,
  author = {{Centers for Disease Control and Prevention, National Center for Health Statistics}},
  title = {Wide-ranging ONline Data for Epidemiologic Research (WONDER)},
  year = {2024},
  url = {http://wonder.cdc.gov},
  note = {Accessed: 2025-10-27}
}
```

### Data Citation Principles

Following FORCE11 Data Citation Principles:
- **Importance:** CDC WONDER is citable research output; cite in publications using this data
- **Credit and Attribution:** Citations credit CDC/NCHS and state vital registrars providing data
- **Evidence:** Citations enable readers to verify research claims
- **Unique Identification:** URL + access date; specify database (e.g., "Underlying Cause of Death, 1999-2020")
- **Access:** Citation provides access method (web interface or API)
- **Persistence:** CDC maintains stable URLs; archived through Internet Archive
- **Specificity and Verifiability:** Specify database version, years, ICD-10 codes, access date for exact reproducibility
- **Interoperability:** Citation format compatible with reference managers, academic databases
- **Flexibility:** Adaptable to various research outputs (papers, reports, dashboards)

**Example of Specific Query Citation:**
Centers for Disease Control and Prevention, National Center for Health Statistics. (2024). "Underlying Cause of Death, 1999-2020, Drug/Alcohol Induced Causes" [ICD-10 Codes: X40-X44, X60-X64, X85, Y10-Y14]. *WONDER Online Database*. http://wonder.cdc.gov/ucd-icd10.html. Accessed October 27, 2025.

---

## Version History

### Current Version
- **Version:** ICD-10 (1999-present)
- **Date:** 1999-01-01 (ICD-10 implementation)
- **Changes:** Transitioned from ICD-9 to ICD-10 coding; expanded cause-of-death detail; XML API introduced ~2005

### Previous Versions
- **Version:** ICD-9 | **Date:** 1979-1998 | **Changes:** Earlier coding system (separate database); web interface WONDER 1.0 launched 1999
- **Version:** ICD-8 | **Date:** 1968-1978 | **Changes:** Predecessor classification system (not in WONDER; available via other NCHS data systems)

### Planned Changes
- **Version:** ICD-11 | **Date:** Late 2020s (tentative) | **Changes:** Next major classification revision; WHO approved 2019; US implementation timeline TBD (multi-year advance notice expected); bridge-coding period planned to maintain comparability

---

## Review Log

### Internal Reviews
- **Date:** 2025-10-27 | **Reviewer:** DM-001 | **Status:** Approved | **Notes:** Initial catalog entry; comprehensive evaluation completed; critical source for US wellbeing crisis indicators

### Quality Checks
- **Last Metadata Validation:** 2025-10-27
- **Last Authority Verification:** 2025-10-27
- **Last Link Check:** 2025-10-27
- **Last Access Test:** 2025-10-27 (API documentation reviewed; test query pending update.ts implementation)

---

## Related Resources

### Cross-References

**Related Substrate Entities:**
- **Problems:**
  - PR-XXXX: Opioid Epidemic
  - PR-XXXX: Behavioral Health Crisis
  - PR-XXXX: "Deaths of Despair"
  - PR-XXXX: Suicide Rate Increases
  - PR-XXXX: Healthcare Access Inequities
- **Solutions:**
  - SO-XXXX: Harm Reduction Programs
  - SO-XXXX: Medication-Assisted Treatment (MAT)
  - SO-XXXX: Prescription Drug Monitoring Programs (PDMPs)
  - SO-XXXX: Mental Health Crisis Intervention
  - SO-XXXX: Community-Based Prevention
- **Organizations:**
  - ORG-XXXX: Centers for Disease Control and Prevention (CDC)
  - ORG-XXXX: Substance Abuse and Mental Health Services Administration (SAMHSA)
  - ORG-XXXX: National Institute on Drug Abuse (NIDA)
- **Other Data Sources:**
  - DS-00001: WHO Global Health Observatory (international mortality comparisons)
  - DS-XXXX: National Violent Death Reporting System (NVDRS) - detailed violent death circumstances
  - DS-XXXX: National Survey on Drug Use and Health (NSDUH) - nonfatal substance use data

**External Resources:**
- **Alternative Sources:**
  - State vital statistics departments: More timely state-specific data (6-12 month lag)
  - WHO Mortality Database: International comparisons
- **Complementary Sources:**
  - NVDRS: Detailed incident circumstances for violent deaths
  - NSDUH: Nonfatal substance use patterns
  - TEDS: Treatment Episode Data Set (substance use treatment admissions)
  - PDMP: Prescription Drug Monitoring Programs (state-level prescribing data)
- **Source Comparison Studies:**
  - Ruhm, C.J. (2018). "Deaths of Despair or Drug Problems?" *NBER Working Paper*.
  - Hedegaard et al. (2020). "Issues in Developing a Surveillance Case Definition for Nonfatal Opioid Overdose." *NCHS Data Brief*.

### Additional Documentation

**User Guides:**
- WONDER API Guide: https://wonder.cdc.gov/wonder/help/WONDER-API.html
- Underlying Cause of Death Documentation: https://wonder.cdc.gov/wonder/help/ucd.html
- ICD-10 Codes: https://www.cdc.gov/nchs/icd/icd10cm.htm

**Research Using This Source:**
- 100,000+ citations in Google Scholar
- Case & Deaton (2015): "Rising morbidity and mortality in midlife among white non-Hispanic Americans in the 21st century" *PNAS*
- Case & Deaton (2017): "Mortality and morbidity in the 21st century" *Brookings Papers*

**Methodology Papers:**
- NCHS methods: https://www.cdc.gov/nchs/nvss/mortality_methods.htm
- Cause-of-death accuracy studies (Vital Statistics Reports series)
- Comparability studies for ICD revisions

---

## Cataloger Notes

**Internal Notes:**
- **CRITICAL SOURCE** for Substrate: Reveals behavioral truth (revealed preference) that surveys miss
- Drug overdoses and suicides are **leading indicators** of wellbeing breakdown - precede economic decline
- County-level granularity enables geographic analysis (shows "left behind" places)
- Census data (not sample) - captures all deaths
- Main limitation: 1-2 year lag (but still best available US mortality data)
- Suicide undercounting known issue (~20-35% undercount) - use as lower bound
- API is XML-based (not REST/JSON) - more complex than WHO API but well-documented

**To Do:**
- [x] Create update.ts script for XML API
- [ ] Test API with sample drug overdose query (ICD-10: X40-X44)
- [ ] Cross-reference with relevant Problems (opioid epidemic, suicide, deaths of despair)
- [ ] Cross-reference with relevant Solutions (harm reduction, MAT, PDMPs)
- [ ] Add NVDRS as complementary source when cataloged
- [ ] Monitor ICD-11 transition timeline (check NCHS announcements)

**Questions for Review:**
- Should we catalog multiple WONDER databases separately (mortality vs. natality vs. cancer) or keep as related sources?
- How to handle provisional vs. final data in updates (separate files or versioning)?
- County suppression rules - how to represent suppressed cells in Substrate format?

---

**END OF SOURCE RECORD**
```
