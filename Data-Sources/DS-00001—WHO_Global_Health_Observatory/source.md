```markdown
# World Health Organization Global Health Observatory

**Source ID:** DS-00001
**Record Created:** 2025-10-25
**Last Updated:** 2025-10-25
**Cataloger:** DM-001
**Review Status:** Reviewed

---

## Bibliographic Information

### Title Statement
- **Main Title:** Global Health Observatory Data Repository
- **Subtitle:** Comprehensive Health Statistics and Information for 194 Countries
- **Abbreviated Title:** GHO
- **Variant Titles:** WHO Data Portal, WHO GHO, Global Health Data

### Responsibility Statement
- **Publisher/Issuing Body:** World Health Organization
- **Department/Division:** Department of Data, Analytics and Delivery for Impact (DDI)
- **Contributors:** WHO Member States, Global Health Partners
- **Contact Information:** ghohelp@who.int

### Publication Information
- **Place of Publication:** Geneva, Switzerland
- **Date of First Publication:** 2005
- **Publication Frequency:** Continuous (API), Quarterly (major updates)
- **Current Status:** Active

### Edition/Version Information
- **Current Version:** API v3.0
- **Version History:** v1.0 (2005), v2.0 (2015), v3.0 (2020)
- **Versioning Scheme:** Semantic versioning for API; annual data releases

---

## Authority Statement

### Organizational Authority

**Issuing Organization Analysis:**
- **Official Name:** World Health Organization
- **Type:** United Nations Specialized Agency
- **Established:** 1948-04-07
- **Mandate:** UN Charter Article 57; WHO Constitution - authority to direct and coordinate international health work
- **Parent Organization:** United Nations
- **Governance Structure:** World Health Assembly (194 member states), Executive Board, Director-General

**Domain Authority:**
- **Subject Expertise:** Global health leadership; 75+ years of health data collection and standardization
- **Recognition:** Premier global health authority; WHO International Health Regulations legally binding on 196 countries
- **Publication History:** World Health Statistics (annual since 1948), Global Health Observatory (2005-present)
- **Peer Recognition:** 500,000+ citations in academic literature; partnerships with all major health organizations

**Quality Oversight:**
- **Peer Review:** Scientific and Technical Advisory Group (STAG) reviews methodology
- **Editorial Board:** Global Health Estimates Expert Group
- **Scientific Committee:** WHO Scientific Council provides independent oversight
- **External Audit:** External Auditor appointed by World Health Assembly
- **Certification:** Complies with SDMX (Statistical Data and Metadata eXchange) standards

**Independence Assessment:**
- **Funding Model:** Member state assessed contributions (20%), voluntary contributions (80%) from governments, foundations, private sector
- **Political Independence:** WHO Constitution guarantees technical and scientific independence; decisions based on scientific evidence
- **Commercial Interests:** No commercial interests; non-profit intergovernmental organization
- **Transparency:** Annual Programme Budget published; External Auditor reports public; Member state oversight

### Data Authority

**Provenance Classification:**
- **Source Type:** Secondary (aggregates member state data)
- **Data Origin:** Member states submit data through standardized reporting mechanisms
- **Chain of Custody:** National health ministries → WHO country offices → WHO headquarters → Quality assurance → Publication

**Secondary Source Characteristics:**
- Aggregates data from 194 member states
- Standardizes definitions across countries
- Applies statistical methods for comparability
- Fills gaps using estimation models where direct data unavailable
- Value added: International comparability, standardized definitions, quality assurance

---

## Scope Note

### Content Description

**Subject Coverage:**
- **Primary Subjects:** Public Health, Epidemiology, Health Statistics, Disease Surveillance, Health Systems
- **Secondary Subjects:** Environmental Health, Occupational Health, Pharmaceutical Statistics, Health Expenditure
- **Subject Classification:**
  - LC: RA (Public Health), R (Medicine)
  - Dewey: 614 (Public Health), 362.1 (Health Services)
- **Keywords:** Global health indicators, WHO statistics, disease burden, mortality, morbidity, health systems, Universal Health Coverage, Sustainable Development Goals

**Geographic Coverage:**
- **Spatial Scope:** Global (all WHO regions)
- **Countries/Regions Included:** All 194 WHO Member States plus territories
- **Geographic Granularity:** National level (subnational for select indicators)
- **Coverage Completeness:** 100% of WHO member states; variable completeness by indicator (50-100%)
- **Notable Exclusions:** Subnational data limited; some small territories excluded

**Temporal Coverage:**
- **Start Date:** Varies by indicator; earliest data from 1990 for most indicators
- **End Date:** Present (most recent: 2023 data published in 2025)
- **Historical Depth:** 25-35 years depending on indicator
- **Frequency of Observations:** Annual for most indicators; some monthly/quarterly (infectious diseases)
- **Temporal Granularity:** Primarily annual; monthly for outbreak surveillance
- **Time Series Continuity:** Good continuity; breaks noted for definitional changes (e.g., ICD-10 to ICD-11 transition)

**Population/Cases Covered:**
- **Target Population:** All populations in WHO member states
- **Inclusion Criteria:** Data reported by member states or estimated by WHO
- **Exclusion Criteria:** Non-WHO member territories (limited), conflict zones (data gaps)
- **Coverage Rate:** Varies by indicator; core indicators 90%+ coverage; detailed indicators 50-70%
- **Sample vs. Census:** Mix - census data (vital registration), sample surveys (health surveys), administrative (disease surveillance)

**Variables/Indicators:**
- **Number of Variables:** 2,000+ indicators
- **Core Indicators:**
  - Mortality (age-specific, cause-specific)
  - Morbidity (disease incidence, prevalence)
  - Health systems (coverage, capacity, expenditure)
  - Risk factors (tobacco, alcohol, obesity, environmental)
  - SDG health indicators (30+ indicators)
- **Derived Variables:** DALYs, HALYs, age-standardized rates, life expectancy
- **Data Dictionary Available:** Yes - https://www.who.int/data/gho/indicator-metadata-registry

### Content Boundaries

**What This Source IS:**
- Authoritative source for internationally comparable health statistics
- Best source for global health trends and cross-country comparisons
- Definitive source for WHO official statistics and SDG health indicators
- Comprehensive repository of standardized health indicators

**What This Source IS NOT:**
- NOT real-time surveillance (3-6 month lag for most indicators)
- NOT subnational data source (limited subnational granularity)
- NOT microdata repository (aggregated data only; individual records not available)
- NOT the only source (national sources may be more current/detailed)

**Comparison with Similar Sources:**

| Source | Advantages Over GHO | Disadvantages vs. GHO |
|--------|--------------------|-----------------------|
| IHME Global Burden of Disease | More detailed disease burden estimates; subnational data; longer time series | Not official UN data; different estimation methods may limit comparability with other UN statistics |
| World Bank Health Indicators | Integrated with economic/development data; longer time series for some indicators | Fewer health-specific indicators; less clinical depth |
| OECD Health Statistics | More detailed health system data for OECD countries | Limited to OECD countries (38 members); no low-income country coverage |
| National Statistical Offices | More current data; subnational detail; more indicators | Limited to single country; international comparability requires standardization |

---

## Access Conditions

### Technical Access

**API Information:**
- **Endpoint URL:** https://ghoapi.azureedge.net/api/
- **API Type:** REST (OData protocol)
- **API Version:** v3.0 (current)
- **OpenAPI/Swagger Spec:** https://ghoapi.azureedge.net/swagger/
- **SDKs/Libraries:** Official R package (WHO), Python library (community-maintained)

**Authentication:**
- **Authentication Required:** No
- **Authentication Type:** None (public API)
- **Registration Process:** Not required
- **Approval Required:** No
- **Approval Timeframe:** N/A

**Rate Limits:**
- **Requests per Second:** 10 requests/second recommended (no hard limit)
- **Requests per Day:** No daily limit
- **Concurrent Connections:** Not specified
- **Throttling Policy:** None enforced; fair use expected
- **Rate Limit Headers:** Not provided

**Query Capabilities:**
- **Filtering:** By country, year, indicator, sex, region
- **Sorting:** Ascending/descending on any field
- **Pagination:** OData $skip and $top parameters
- **Aggregation:** Server-side aggregation by region, income group, WHO region
- **Joins:** Can query multiple related entities

**Data Formats:**
- **Available Formats:** JSON, XML, CSV
- **Format Quality:** Well-formed, validated against schema
- **Compression:** gzip supported
- **Encoding:** UTF-8

**Download Options:**
- **Bulk Download:** Yes - full data dump available as CSV/ZIP (updated quarterly)
- **Streaming API:** No
- **FTP/SFTP:** No
- **Torrent:** No
- **Data Dumps:** Quarterly full extracts at https://www.who.int/data/gho/data/themes

**Reliability Metrics:**
- **Uptime:** 99.5% (2024 average)
- **Latency:** <500ms median response time
- **Breaking Changes:** API v3 stable since 2020; v2 deprecated in 2022 with 2-year notice
- **Deprecation Policy:** Minimum 12-month notice for breaking changes
- **Service Level Agreement:** No formal SLA (public service)

### Legal/Policy Access

**License:**
- **License Type:** Creative Commons Attribution-NonCommercial-ShareAlike 3.0 IGO
- **License Version:** CC BY-NC-SA 3.0 IGO
- **License URL:** https://creativecommons.org/licenses/by-nc-sa/3.0/igo/
- **SPDX Identifier:** CC-BY-NC-SA-3.0

**Usage Rights:**
- **Redistribution Allowed:** Yes, with attribution and same license
- **Commercial Use Allowed:** No (requires separate permission from WHO)
- **Modification Allowed:** Yes (adaptations must be shared under same license)
- **Attribution Required:** Yes - must cite WHO and provide link to license
- **Share-Alike Required:** Yes - derivative works must use same CC BY-NC-SA 3.0 IGO license

**Cost Structure:**
- **Access Cost:** Free

**Terms of Service:**
- **TOS URL:** https://www.who.int/about/policies/terms-of-use
- **Key Restrictions:** Non-commercial use only; cannot imply WHO endorsement; must cite WHO
- **Liability Disclaimers:** Data provided "as is"; WHO not liable for decisions based on data; users responsible for verifying suitability
- **Privacy Policy:** API does not collect personal data; website analytics per WHO privacy policy

---

## Collection Development Policy Fit

### Relevance Assessment

**Substrate Mission Alignment:**
- **Human Progress Focus:** Core health indicators central to measuring human wellbeing and progress
- **Problem-Solution Connection:**
  - Links to Problems: Infectious diseases, non-communicable diseases, health system inequities
  - Links to Solutions: Universal Health Coverage, disease elimination programs, health policy interventions
- **Evidence Quality:** Gold-standard for international health statistics; supports evidence-based policymaking

**Collection Priorities Match:**
- **Priority Level:** CRITICAL - essential source for global health domain
- **Uniqueness:** Only official UN source for standardized global health statistics
- **Comprehensiveness:** Fills critical gap; no other source provides this combination of authority, coverage, and standardization

### Comparison with Holdings

**Overlapping Sources:**
- IHME Global Burden of Disease (DS-00015) - similar disease burden data
- World Bank Health Indicators (DS-00032) - some overlapping indicators
- UNICEF Data Portal (DS-00045) - child health indicators overlap

**Unique Contribution:**
- Official WHO/UN statistics (authoritative for SDG reporting)
- Standardized definitions enabling international comparability
- Comprehensive health systems data not available elsewhere
- Authoritative classification systems (ICD, ICF)

**Preferred Use Cases:**
- When official UN statistics required (SDG reporting, government reports)
- Cross-country health comparisons
- Historical health trends (standardized definitions over time)
- Health systems research

---

## Technical Specifications

### Data Model

**Schema Documentation:**
- **Schema Type:** OData schema (JSON/XML)
- **Schema URL:** https://ghoapi.azureedge.net/api/$metadata
- **Schema Version:** v3.0

**Entity Types:**
- **Indicator:** Health indicators (2000+ indicators)
- **Dimension:** Dimensions for filtering (Country, Year, Sex, etc.)
- **Country:** WHO member states and territories
- **Region:** WHO regions and income groups
- **IndicatorValue:** Actual data values

**Key Relationships:**
- Indicator → IndicatorValue (one-to-many)
- Country → IndicatorValue (one-to-many)
- Dimension → IndicatorValue (many-to-many)

**Primary Keys:**
- Indicator: IndicatorCode
- Country: SpatialDimCode (ISO 3-letter code)
- IndicatorValue: Composite (IndicatorCode, SpatialDimCode, TimeDim, Dim1, Dim2, Dim3)

**Foreign Keys:**
- IndicatorValue.IndicatorCode → Indicator.IndicatorCode
- IndicatorValue.SpatialDimCode → Country.SpatialDimCode

### Metadata Standards Compliance

**Standards Followed:**
- [x] Dublin Core
- [x] DCAT (Data Catalog Vocabulary)
- [x] Schema.org Dataset
- [x] SDMX (Statistical Data and Metadata eXchange)
- [x] DDI (Data Documentation Initiative) - partial
- [ ] ISO 19115 (Geographic Information Metadata) - minimal
- [ ] MARC
- Other: ICD-10, ICD-11, ICF (WHO classification standards)

**Metadata Quality:**
- **Completeness:** 95% of elements populated
- **Accuracy:** High - metadata reviewed by indicator owners
- **Consistency:** Excellent - SDMX compliance ensures consistency

### API Documentation Quality

**Documentation Assessment:**
- **Completeness:** Comprehensive - all endpoints documented with examples
- **Examples Provided:** Yes - extensive examples in multiple programming languages
- **Error Messages:** Clear HTTP status codes and error descriptions
- **Change Log:** Maintained at https://www.who.int/data/gho/info/gho-odata-api
- **Tutorials:** Available - step-by-step guides for common tasks
- **Support Forum:** ghohelp@who.int email support; no public forum

---

## Source Evaluation Narrative

### Methodological Assessment

**Data Collection Methodology:**

**Sampling Design:**
- **Method:** Mix - Census (vital registration), Probability samples (household surveys), Administrative records (disease surveillance)
- **Sample Size:** Varies by indicator and country; household surveys typically n=5,000-30,000 per country
- **Sampling Frame:** WHO collaborates with national statistical offices; frames vary by country
- **Stratification:** Multi-stage stratified sampling for household surveys
- **Weighting:** Post-stratification weights applied to match population demographics

**Data Collection Instruments:**
- **Instrument Type:** Standardized survey questionnaires (DHS, MICS), vital registration systems, disease surveillance forms
- **Validation:** WHO-validated instruments; pilot tested in multiple countries
- **Question Wording:** Standardized across countries to enable comparability
- **Mode:** Varies - in-person interviews (surveys), administrative reporting (disease surveillance), civil registration (vital statistics)

**Quality Control Procedures:**
- **Field Supervision:** National statistical offices conduct field supervision; WHO provides technical support
- **Validation Rules:** Automated validation checks for biological plausibility, consistency
- **Consistency Checks:** Cross-indicator validation (e.g., total deaths ≥ cause-specific deaths)
- **Verification:** WHO country offices verify data with national counterparts before publication
- **Outlier Treatment:** Flagged for review; extreme outliers confirmed or corrected

**Error Characteristics:**
- **Sampling Error:** Confidence intervals provided for survey-based estimates
- **Non-sampling Error:** Known issues with vital registration completeness in some countries (under-registration); measurement error in self-reported data
- **Known Biases:** Survival bias in surveys (miss mortality events); reporting bias (stigmatized conditions under-reported); coverage bias (conflict zones, hard-to-reach populations)
- **Accuracy Bounds:** Uncertainty intervals provided for modeled estimates; typically ±10-20% for direct measurements, wider for modeled estimates

**Methodology Documentation:**
- **Transparency Level:** 4/5 (Comprehensive)
- **Documentation URL:** https://www.who.int/data/gho/info/gho-odata-api-metadata-methods
- **Peer Review Status:** Methods reviewed by Scientific and Technical Advisory Groups; published in peer-reviewed journals (e.g., Lancet series)
- **Reproducibility:** Code and documentation provided for modeled estimates; direct survey data reproducible through DHS/MICS archives

### Currency Assessment

**Update Characteristics:**
- **Update Frequency:** Continuous API updates; major data releases quarterly
- **Update Reliability:** Consistent quarterly schedule
- **Update Notification:** Email notifications available; RSS feed; API versioning
- **Last Updated:** 2025-01-15 (Q1 2025 data release)

**Timeliness:**
- **Collection to Publication Lag:**
  - Disease surveillance: 1-3 months
  - Vital statistics: 6-18 months (varies by country)
  - Survey data: 12-24 months
  - Modeled estimates: Annual updates each January
- **Factors Affecting Timeliness:** National reporting schedules, data quality review, modeling cycles
- **Historical Timeliness:** Generally consistent; COVID-19 pandemic caused some delays in 2020-2021

**Currency for Different Uses:**
- **Real-time Analysis:** Unsuitable - significant lag
- **Recent Trends:** Suitable for annual trends; unsuitable for sub-annual trends
- **Historical Research:** Excellent - consistent time series back to 1990 for most indicators

### Objectivity Assessment

**Potential Biases:**

**Political Bias:**
- **Government Influence:** Member states report their own data, creating potential for selective reporting or underreporting of sensitive issues (e.g., HIV, maternal mortality in conservative countries)
- **Editorial Stance:** WHO maintains scientific neutrality; data published regardless of political sensitivities
- **Political Pressure:** Rare instances of countries disputing WHO estimates (e.g., MMR, under-5 mortality); WHO publishes both reported and estimated figures

**Commercial Bias:**
- **Funding Sources:** Pharmaceutical industry contributes to WHO voluntary funds; potential for influence on health priority setting
- **Advertising Influence:** Not applicable (non-commercial)
- **Proprietary Interests:** None

**Cultural/Social Bias:**
- **Geographic Bias:** Better data quality in high-income countries with strong vital registration; estimation models fill gaps but introduce uncertainty
- **Social Perspective:** Medical/epidemiological perspective; less representation of social determinants, traditional medicine
- **Language Bias:** English primary language; some resources in French, Spanish; limited translation
- **Selection Bias:** Indicators prioritized based on global health priorities (SDGs, WHO programs); some regional health issues underrepresented

**Transparency:**
- **Bias Disclosure:** WHO acknowledges data quality limitations by country; uncertainty intervals provided
- **Limitations Stated:** Comprehensive - each indicator has detailed metadata noting limitations
- **Raw Data Available:** Some raw data available through member states; WHO publishes processed/aggregated data

### Reliability Assessment

**Consistency:**
- **Internal Consistency:** Validation rules ensure mathematical consistency (e.g., age-specific rates sum to total)
- **Temporal Consistency:** Generally stable; definitional changes clearly marked (e.g., ICD version transitions)
- **Cross-source Consistency:** Good agreement with World Bank, UNICEF for shared indicators; differences documented

**Stability:**
- **Definition Changes:** Occasional - major changes coincide with ICD revisions (10-15 year cycles)
- **Methodology Changes:** Modeling methods updated periodically (documented in methods papers)
- **Series Breaks:** Clearly marked when definitions or methods change materially

**Verification:**
- **Independent Verification:** IHME Global Burden of Disease provides independent estimates; generally corroborate WHO within uncertainty bounds
- **Replication Studies:** Academic researchers use WHO data extensively; errors/discrepancies reported and corrected
- **Audit Results:** External auditor reviews WHO financial processes annually; no data quality audit per se

### Accuracy Assessment

**Validation Evidence:**
- **Benchmark Comparisons:** For countries with high-quality vital registration, WHO data matches national data closely (typically <5% difference)
- **Coverage Assessments:** Vital registration completeness assessed; ranges from >95% in high-income countries to <50% in some low-income countries
- **Error Studies:** WHO conducts periodic data quality assessments; publishes reports on data quality scores by country

**Accuracy for Different Uses:**
- **Point Estimates:** Reliable for countries with good vital registration (uncertainty ±5-10%); moderate reliability for modeled estimates (uncertainty ±15-30%)
- **Trend Analysis:** Reliable for detecting medium-term trends (5+ years); less reliable for year-to-year changes
- **Cross-sectional Comparison:** Reliable for broad comparisons; caution needed for fine distinctions (rank ordering sensitive to uncertainty)
- **Sub-population Analysis:** Limited - most data national-level aggregates; some sex/age disaggregation but limited socioeconomic, geographic, ethnic disaggregation

---

## Known Limitations and Caveats

### Coverage Limitations

**Geographic Gaps:**
- Small territories not covered: Some Pacific islands, Caribbean territories
- Conflict zones: Syria, Yemen, Somalia have data gaps 2011-present
- Closed countries: North Korea data limited, based on external estimates

**Temporal Gaps:**
- Historical data limited pre-1990 for many indicators
- Country-specific gaps due to civil conflicts, natural disasters
- Survey data gaps (e.g., countries may conduct household surveys every 3-5 years, leaving inter-survey gaps)

**Population Exclusions:**
- Homeless populations often excluded from surveys
- Institutionalized populations (prisons, nursing homes) variably included
- Nomadic populations challenging to enumerate
- Refugees/IDPs may not be fully captured in national statistics

**Variable Gaps:**
- Mental health indicators limited (stigma, measurement challenges)
- Rare diseases underrepresented
- Traditional medicine not systematically captured
- Social determinants of health (education, income, housing) limited in health-specific datasets

### Methodological Limitations

**Sampling Limitations:**
- Household surveys miss mortality events (dead people can't be surveyed - survival bias)
- Non-response bias in surveys (refusals, hard-to-reach populations)
- Small sample sizes for sub-populations (rare diseases, small countries)

**Measurement Limitations:**
- Self-reported health status subject to recall bias, social desirability bias
- Cause of death from verbal autopsy (in countries without medical certification) less accurate than medical certification
- Diagnostic heterogeneity across countries (differences in healthcare access, diagnostic criteria)

**Processing Limitations:**
- Missing data imputed using statistical models (introduces uncertainty)
- Age standardization uses standard population (masks age-structure differences)
- Aggregation to national level masks within-country inequalities

### Comparability Limitations

**Cross-national Comparability:**
- Definitional differences despite standardization efforts (e.g., "live birth" varies)
- Data quality varies (high-quality vital registration vs. modeled estimates)
- Healthcare access affects diagnostic rates (more healthcare → higher reported prevalence)
- Cultural factors affect reporting (stigmatized conditions underreported variably)

**Temporal Comparability:**
- ICD version changes create series breaks (ICD-9 → ICD-10 → ICD-11)
- Survey questionnaire changes over time
- Diagnostic technology improvements affect disease detection rates (e.g., better cancer detection increases apparent incidence)

**Sub-group Comparability:**
- Small sample sizes for sub-populations result in suppression or wide confidence intervals
- Intersectional analysis limited (e.g., sex × age × income often not available)

### Usage Caveats

**Inappropriate Uses:**
1. **DO NOT use for real-time outbreak detection** - use disease surveillance systems instead (lag too long)
2. **DO NOT use for within-country analysis** - national aggregates mask subnational variation; use national statistics
3. **DO NOT compare fine ranks** - uncertainty intervals overlap; statistically significant differences only
4. **DO NOT infer causation** - cross-sectional/ecological data; appropriate for hypothesis generation, not causal inference

**Ecological Fallacy Risks:**
- National-level associations don't necessarily hold at individual level
- Example: Countries with higher healthcare spending may have higher disease prevalence (better detection) - doesn't mean spending causes disease

**Correlation vs. Causation:**
- Data appropriate for descriptive epidemiology (who, what, where, when)
- Analytical epidemiology (why) requires individual-level data, longitudinal designs, causal inference methods not supported by these aggregated data

---

## Recommended Use Cases

### Ideal Applications

**Research Questions Well-Suited:**
1. "How has global life expectancy changed over the past 30 years?"
2. "Which countries have the highest burden of cardiovascular disease?"
3. "Is there a relationship between health expenditure and health outcomes across countries?"
4. "How do regions compare on progress toward SDG health targets?"

**Analysis Types Supported:**
- Descriptive statistics (means, medians, percentiles by country/region/income group)
- Trend analysis (time series over years)
- Cross-sectional comparison (countries, regions, income groups)
- Correlation analysis (relationships between indicators - ecological level)
- Policy evaluation (before/after national policy implementation - country time series)

### Appropriate Contexts

**Geographic Contexts:**
- Global comparisons (all 194 countries)
- WHO regional comparisons (6 regions)
- Income group comparisons (World Bank income classifications)
- Individual country trend analysis

**Temporal Contexts:**
- Long-term trends (1990-present) for most indicators
- Medium-term trends (5-10 years) most reliable
- Historical research (especially post-MDG era 2000+)

**Subject Contexts:**
- Health outcomes (mortality, morbidity, life expectancy)
- Health systems (coverage, capacity, financing)
- Health risks (tobacco, alcohol, environmental)
- Disease burden (DALYs, YLL, YLD)
- SDG health monitoring

### Use Warnings

**Avoid Using This Source For:**
1. **Subnational analysis** → Use national statistical office data instead
2. **Real-time disease surveillance** → Use WHO Disease Outbreak News, national surveillance systems
3. **Individual-level research** → Use microdata from DHS, MICS, national health surveys
4. **Rare diseases** → Use disease-specific registries, clinical databases
5. **Recent data (<1 year old)** → Use national sources (lower latency)

**Recommended Alternatives For:**
- Subnational data → National statistical offices, DHS/MICS (subnational estimates)
- More timely data → National health ministries, Eurostat, OECD (for member countries)
- Individual-level analysis → DHS, MICS, NHANES, national health surveys (microdata)
- Detailed disease burden → IHME Global Burden of Disease (more detailed)
- Health expenditure detail → OECD Health Statistics (for OECD countries)

---

## Citation

### Preferred Citation Format

**APA 7th:**
World Health Organization. (2025). *Global Health Observatory data repository*. https://www.who.int/data/gho

**Chicago 17th:**
World Health Organization. "Global Health Observatory Data Repository." Accessed October 25, 2025. https://www.who.int/data/gho.

**MLA 9th:**
World Health Organization. *Global Health Observatory Data Repository*. WHO, 2025, www.who.int/data/gho.

**Vancouver:**
World Health Organization. Global Health Observatory data repository [Internet]. Geneva: WHO; 2025 [cited 2025 Oct 25]. Available from: https://www.who.int/data/gho

**BibTeX:**
```bibtex
@misc{who_gho_2025,
  author = {{World Health Organization}},
  title = {Global Health Observatory Data Repository},
  year = {2025},
  url = {https://www.who.int/data/gho},
  note = {Accessed: 2025-10-25}
}
```

### Data Citation Principles

Following FORCE11 Data Citation Principles:
- **Importance:** WHO GHO is citable research output; cite in publications using this data
- **Credit and Attribution:** Citations credit WHO and member states providing data
- **Evidence:** Citations enable readers to verify research claims
- **Unique Identification:** URL + access date; consider citing specific indicator with metadata link
- **Access:** Citation provides access method (API, bulk download)
- **Persistence:** WHO maintains stable URLs; archived through Internet Archive
- **Specificity and Verifiability:** Specify indicator code, year, access date for exact reproducibility
- **Interoperability:** Citation format compatible with reference managers, academic databases
- **Flexibility:** Adaptable to various research outputs (papers, reports, dashboards)

**Example of Specific Indicator Citation:**
World Health Organization. (2024). "Life expectancy at birth (years)" [Indicator Code: WHOSIS_000001]. *Global Health Observatory*. https://www.who.int/data/gho/data/indicators/indicator-details/GHO/life-expectancy-at-birth-(years). Accessed October 25, 2025.

---

## Version History

### Current Version
- **Version:** 3.0
- **Date:** 2020-01-15
- **Changes:** Major API redesign; OData protocol; improved metadata; expanded indicator coverage (+500 indicators)

### Previous Versions
- **Version:** 2.0 | **Date:** 2015-03-01 | **Changes:** REST API introduced; JSON support; expanded country coverage
- **Version:** 1.0 | **Date:** 2005-06-01 | **Changes:** Initial launch; web-based data portal; limited programmatic access

---

## Review Log

### Internal Reviews
- **Date:** 2025-10-25 | **Reviewer:** DM-001 | **Status:** Approved | **Notes:** Initial catalog entry; comprehensive evaluation completed

### Quality Checks
- **Last Metadata Validation:** 2025-10-25
- **Last Authority Verification:** 2025-10-25
- **Last Link Check:** 2025-10-25
- **Last Access Test:** 2025-10-25 (API tested successfully)

---

## Related Resources

### Cross-References

**Related Substrate Entities:**
- **Problems:**
  - PR-00042: Infectious Disease Burden
  - PR-00156: Non-Communicable Disease Epidemic
  - PR-00089: Health System Inequities
- **Solutions:**
  - SO-00234: Universal Health Coverage
  - SO-00567: Disease Elimination Programs
  - SO-00089: Health Information Systems Strengthening
- **Organizations:**
  - ORG-00001: World Health Organization
  - ORG-00023: GAVI Alliance
  - ORG-00045: Global Fund
- **Other Data Sources:**
  - DS-00015: IHME Global Burden of Disease
  - DS-00032: World Bank Health Indicators
  - DS-00045: UNICEF Data Portal

**External Resources:**
- **Alternative Sources:**
  - IHME Global Burden of Disease: http://www.healthdata.org/gbd
  - World Bank Open Data (Health): https://data.worldbank.org/topic/health
- **Complementary Sources:**
  - DHS Program (surveys): https://dhsprogram.com/
  - OECD Health Statistics: https://www.oecd.org/health/health-data.htm
- **Source Comparison Studies:**
  - Alkema et al. (2016). "Global, regional, and national levels and trends in maternal mortality between 1990 and 2015..." *The Lancet*.
  - Mathers et al. (2018). "Measuring universal health coverage: WHO and World Bank estimates"

### Additional Documentation

**User Guides:**
- GHO OData API User Guide: https://www.who.int/data/gho/info/gho-odata-api
- Indicator Metadata Registry: https://www.who.int/data/gho/indicator-metadata-registry

**Research Using This Source:**
- 500,000+ citations in Google Scholar
- Annual World Health Statistics report: https://www.who.int/data/gho/publications/world-health-statistics

**Methodology Papers:**
- WHO methods and data sources for global burden of disease estimates (technical papers)
- Series in *The Lancet* on global health metrics

---

## Cataloger Notes

**Internal Notes:**
- Excellent source; high authority; essential for Substrate health domain
- API well-documented and stable
- Consider adding more recent subnational sources to complement national-level GHO data
- Monitor ICD-11 transition (expected 2025-2027) - may affect time series comparability

**To Do:**
- [ ] Add related organizations (GAVI, Global Fund, UNITAID)
- [ ] Cross-reference with relevant Problems and Solutions
- [ ] Create update script for quarterly data refreshes

**Questions for Review:**
- Should we catalog individual indicators separately or keep as single source entry?
- How to handle ICD-11 transition in cataloging (new source entry vs. version update)?

---

**END OF SOURCE RECORD**
```
