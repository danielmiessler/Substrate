# UN Sustainable Development Goals Indicators Database

**Source ID:** DS-00002
**Record Created:** 2025-10-25
**Last Updated:** 2025-10-25
**Cataloger:** DM-001
**Review Status:** Reviewed

---

## Bibliographic Information

### Title Statement
- **Main Title:** UN Sustainable Development Goals Indicators Global Database
- **Subtitle:** Official Data on 17 SDGs and 231 Unique Indicators
- **Abbreviated Title:** UN SDG Indicators
- **Variant Titles:** SDG Indicators Database, Global SDG Database, UN Stats SDG

### Responsibility Statement
- **Publisher/Issuing Body:** United Nations Statistics Division (UNSD)
- **Department/Division:** Statistics Division, Department of Economic and Social Affairs
- **Contributors:** UN Member States, International Organizations, Statistical Agencies
- **Contact Information:** statistics@un.org

### Publication Information
- **Place of Publication:** New York, United States
- **Date of First Publication:** 2015 (with 2030 Agenda adoption)
- **Publication Frequency:** Continuous (API), Biannual major updates
- **Current Status:** Active

### Edition/Version Information
- **Current Version:** API v1.8.0
- **Version History:** v1.0 (2016), v1.5 (2020), v1.8 (2024)
- **Versioning Scheme:** Semantic versioning for API; annual data releases

---

## Authority Statement

### Organizational Authority

**Issuing Organization Analysis:**
- **Official Name:** United Nations Statistics Division
- **Type:** International Organization - UN Department
- **Established:** 1946
- **Mandate:** UN Charter Article 55 - promote international cooperation on economic/social problems
- **Parent Organization:** United Nations Department of Economic and Social Affairs
- **Governance Structure:** Directed by UN Statistical Commission (49 member states)

**Domain Authority:**
- **Subject Expertise:** Global statistical standards setter; 75+ years coordinating international statistics
- **Recognition:** Authoritative source for global development indicators
- **Publication History:** SDG indicators (2015-present), MDG indicators (2000-2015), development statistics (1946-present)
- **Peer Recognition:** Primary source for UN agencies, World Bank, regional development banks

**Quality Oversight:**
- **Peer Review:** Inter-Agency and Expert Group on SDG Indicators (IAEG-SDGs) reviews methodology
- **Editorial Board:** UN Statistical Commission provides governance
- **Scientific Committee:** Expert groups for each SDG (academics, statisticians, domain experts)
- **External Audit:** UN Board of Auditors reviews data processes
- **Certification:** Complies with SDMX, Fundamental Principles of Official Statistics

**Independence Assessment:**
- **Funding Model:** UN regular budget (assessed contributions from member states)
- **Political Independence:** UN Statistical Commission operates independently under Fundamental Principles
- **Commercial Interests:** None - non-profit international organization
- **Transparency:** Public data, open methodology, annual reports to Statistical Commission

### Data Authority

**Provenance Classification:**
- **Source Type:** Secondary (aggregates national statistical office data)
- **Data Origin:** National Statistical Offices → International Organizations → UNSD compilation
- **Chain of Custody:** NSOs collect → Custodian agencies verify → UNSD compiles → Publication

**Secondary Source Characteristics:**
- Aggregates data from 193 UN member states
- Standardizes definitions across countries (metadata harmonization)
- Custodian agencies (48 UN/international orgs) responsible for specific indicators
- Gap-filling using modeled estimates where national data unavailable
- Value added: Global comparability, SDG framework alignment, quality assurance

---

## Scope Note

### Content Description

**Subject Coverage:**
- **Primary Subjects:** Sustainable Development, Development Economics, Social Progress, Environmental Sustainability
- **Secondary Subjects:** Poverty, Health, Education, Gender Equality, Water, Energy, Climate, Biodiversity
- **Subject Classification:**
  - LC: HC (Economic Development), HD (Economic History), HN (Social Conditions)
  - Dewey: 338.9 (Development Economics), 363 (Social Problems)
- **Keywords:** SDG, sustainable development goals, 2030 agenda, development indicators, global goals, progress monitoring

**Geographic Coverage:**
- **Spatial Scope:** Global (all UN regions)
- **Countries/Regions Included:** All 193 UN Member States plus some territories
- **Geographic Granularity:** National level (limited subnational)
- **Coverage Completeness:** Varies by indicator - core indicators 75-95%, tier 3 indicators <50%
- **Notable Exclusions:** Subnational data limited; some small territories; non-UN members

**Temporal Coverage:**
- **Start Date:** Varies by indicator - historical baselines often 2000-2010
- **End Date:** Present (most recent: 2022-2023 data published in 2024-2025)
- **Historical Depth:** 10-25 years depending on indicator
- **Frequency of Observations:** Annual for most indicators; some monthly/quarterly
- **Temporal Granularity:** Primarily annual
- **Time Series Continuity:** Good for Tier 1/2 indicators; breaks for Tier 3 (methodology development)

**Population/Cases Covered:**
- **Target Population:** All populations in UN member states
- **Inclusion Criteria:** Data from national statistical systems or international estimates
- **Exclusion Criteria:** Non-UN member states; conflict zones with incomplete data
- **Coverage Rate:** Tier 1 indicators: 90%+; Tier 2: 70-90%; Tier 3: <70%
- **Sample vs. Census:** Mix - censuses, household surveys, administrative records, geospatial data

**Variables/Indicators:**
- **Number of Variables:** 231 unique indicators across 17 SDGs
- **Core Indicators:**
  - SDG 1: Poverty (poverty rate, social protection)
  - SDG 3: Health (mortality, UHC, infectious diseases)
  - SDG 4: Education (enrollment, literacy, completion)
  - SDG 5: Gender (discrimination, violence, participation)
  - SDG 13: Climate (emissions, climate finance)
  - SDG 16: Peace/Justice (violence, corruption, access to justice)
- **Derived Variables:** Regional/global aggregates, growth rates, index scores
- **Data Dictionary Available:** Yes - https://unstats.un.org/sdgs/metadata/

### Content Boundaries

**What This Source IS:**
- Official UN source for SDG progress monitoring
- Best source for tracking global development goals (2015-2030)
- Authoritative for international reporting and accountability
- Comprehensive across all 17 SDGs

**What This Source IS NOT:**
- NOT real-time (1-3 year lag for most indicators)
- NOT subnational (limited city/regional breakdowns)
- NOT microdata (aggregated statistics only)
- NOT the only source (national data may be more detailed/current)

**Comparison with Similar Sources:**

| Source | Advantages Over UN SDG DB | Disadvantages vs. UN SDG DB |
|--------|---------------------------|-----------------------------|
| World Bank World Development Indicators | Longer time series; more economic indicators; better data portal | Fewer social/environmental indicators; not SDG-aligned framework |
| OECD Development Statistics | More detailed for OECD countries; better data quality | Only 38 OECD countries; excludes most developing countries |
| IHME Global Burden of Disease | More health detail; subnational estimates | Only health; different methods limit UN comparability |
| Our World in Data | Better visualizations; user-friendly | Not official source; synthesizes from multiple sources |

---

## Access Conditions

### Technical Access

**API Information:**
- **Endpoint URL:** https://unstats.un.org/sdgapi/v1/
- **API Type:** REST
- **API Version:** 1.8.0
- **OpenAPI/Swagger Spec:** https://unstats.un.org/sdgapi/swagger/
- **SDKs/Libraries:** R package (unstats), Python library (sdg-data)

**Authentication:**
- **Authentication Required:** No
- **Authentication Type:** None (public API)
- **Registration Process:** Not required
- **Approval Required:** No
- **Approval Timeframe:** N/A

**Rate Limits:**
- **Requests per Second:** 10 requests/second recommended
- **Requests per Day:** No hard limit
- **Concurrent Connections:** Not specified
- **Throttling Policy:** Fair use expected
- **Rate Limit Headers:** Not provided

**Query Capabilities:**
- **Filtering:** By goal, target, indicator, country, year, sex, age group
- **Sorting:** By any dimension
- **Pagination:** Offset-based ($skip, $top)
- **Aggregation:** Regional aggregates pre-calculated
- **Joins:** Not supported (denormalized data)

**Data Formats:**
- **Available Formats:** JSON, CSV, Excel
- **Format Quality:** Well-formed, schema-validated
- **Compression:** gzip supported
- **Encoding:** UTF-8

**Download Options:**
- **Bulk Download:** Yes - full database as CSV/ZIP (updated biannually)
- **Streaming API:** No
- **FTP/SFTP:** No
- **Torrent:** No
- **Data Dumps:** Biannual full extracts

**Reliability Metrics:**
- **Uptime:** 99.2% (2024 average)
- **Latency:** <1s median response time
- **Breaking Changes:** Rare; v1 API stable since 2016
- **Deprecation Policy:** 12-month notice for breaking changes
- **Service Level Agreement:** No formal SLA

### Legal/Policy Access

**License:**
- **License Type:** Creative Commons Attribution 3.0 IGO
- **License Version:** CC BY 3.0 IGO
- **License URL:** https://creativecommons.org/licenses/by/3.0/igo/
- **SPDX Identifier:** CC-BY-3.0

**Usage Rights:**
- **Redistribution Allowed:** Yes, with attribution
- **Commercial Use Allowed:** Yes
- **Modification Allowed:** Yes
- **Attribution Required:** Yes - must cite UN and custodian agencies
- **Share-Alike Required:** No

**Cost Structure:**
- **Access Cost:** Free

**Terms of Service:**
- **TOS URL:** https://www.un.org/en/about-us/terms-of-use
- **Key Restrictions:** Must attribute UN; cannot imply UN endorsement
- **Liability Disclaimers:** Data provided "as is"; UN not liable
- **Privacy Policy:** API does not collect personal data

---

## Collection Development Policy Fit

### Relevance Assessment

**Substrate Mission Alignment:**
- **Human Progress Focus:** Core SDGs measure progress on poverty, health, education, environment
- **Problem-Solution Connection:**
  - Links to Problems: All 17 SDGs correspond to global problems
  - Links to Solutions: Indicators track solution effectiveness
- **Evidence Quality:** Official UN data; highest international authority

**Collection Priorities Match:**
- **Priority Level:** CRITICAL - essential for development/progress domain
- **Uniqueness:** Only official source for SDG monitoring
- **Comprehensiveness:** Covers all dimensions of sustainable development

### Comparison with Holdings

**Overlapping Sources:**
- WHO GHO (DS-00001) - health indicators overlap (SDG 3)
- World Bank Data (DS-00003) - economic indicators overlap
- UNICEF Data Portal - child indicators overlap (SDG 2, 3, 4)

**Unique Contribution:**
- Official UN SDG framework alignment
- Comprehensive across all 17 goals
- Authoritative for international reporting
- Tracks 2030 Agenda commitments

**Preferred Use Cases:**
- SDG progress monitoring and reporting
- Cross-sectoral development analysis
- International comparisons on development goals
- Policy evaluation against global commitments

---

## Known Limitations and Caveats

### Coverage Limitations

**Geographic Gaps:**
- Small island states often have incomplete data
- Conflict zones (Syria, Yemen, South Sudan) - significant gaps
- Non-UN members (Taiwan, Kosovo) not included

**Temporal Gaps:**
- Tier 3 indicators have short time series (<5 years)
- Pandemic disrupted data collection (2020-2021 gaps)
- Historical baseline data limited (pre-2015)

**Population Exclusions:**
- Refugees/IDPs variably counted
- Homeless populations often excluded
- Indigenous peoples sometimes undercounted

**Variable Gaps:**
- Tier 3 indicators (30+ indicators) still lack established methodology
- Disaggregation limited (sex/age available, but income/disability often not)
- Environmental indicators have quality issues in many countries

### Methodological Limitations

**Sampling Limitations:**
- Household surveys miss institutionalized populations
- Small countries use census rather than sample (no sampling error estimates)
- Non-response bias in surveys

**Measurement Limitations:**
- Self-reported data subject to bias
- Administrative data completeness varies
- Proxy indicators used when direct measurement infeasible

**Processing Limitations:**
- Gap-filling models introduce uncertainty
- Harmonization adjustments may not fully account for definitional differences
- Aggregation masks within-country inequality

### Comparability Limitations

**Cross-national Comparability:**
- Definitional differences despite harmonization
- Data quality varies dramatically (high-income vs. low-income)
- Collection methods differ (surveys, censuses, admin records)

**Temporal Comparability:**
- Methodology changes for Tier 3 indicators
- Survey instruments updated over time
- New data sources introduced

---

## Recommended Use Cases

### Ideal Applications

**Research Questions Well-Suited:**
1. "How is the world progressing toward ending extreme poverty (SDG 1)?"
2. "Which countries are on track to meet SDG targets by 2030?"
3. "What is the relationship between education (SDG 4) and health (SDG 3) outcomes?"
4. "How has climate action (SDG 13) progressed since 2015?"

**Analysis Types Supported:**
- Descriptive statistics (global/regional progress)
- Trend analysis (SDG indicator trajectories)
- Cross-country comparison (leader/laggard identification)
- Correlation analysis (inter-SDG relationships)
- Gap analysis (target vs. actual)

### Use Warnings

**Avoid Using This Source For:**
1. **Real-time monitoring** → Use national dashboards, specialized systems
2. **Subnational analysis** → Use national statistical offices
3. **Microdata analysis** → Use household survey microdata (DHS, MICS)
4. **Causal inference** → Use experimental/quasi-experimental designs
5. **Forecasting beyond 2030** → Indicators designed for 2030 endpoint

---

## Citation

### Preferred Citation Format

**APA 7th:**
United Nations Statistics Division. (2025). *SDG Indicators Global Database*. United Nations. https://unstats.un.org/sdgs/dataportal

**Chicago 17th:**
United Nations Statistics Division. "SDG Indicators Global Database." Accessed October 25, 2025. https://unstats.un.org/sdgs/dataportal.

**MLA 9th:**
United Nations Statistics Division. *SDG Indicators Global Database*. United Nations, 2025, unstats.un.org/sdgs/dataportal.

**BibTeX:**
```bibtex
@misc{unsd_sdg_2025,
  author = {{United Nations Statistics Division}},
  title = {SDG Indicators Global Database},
  year = {2025},
  url = {https://unstats.un.org/sdgs/dataportal},
  note = {Accessed: 2025-10-25}
}
```

---

## Version History

### Current Version
- **Version:** API v1.8.0
- **Date:** 2024-01-15
- **Changes:** Added Tier 3 indicators, improved disaggregation, enhanced metadata

### Previous Versions
- **Version:** v1.5.0 | **Date:** 2020-03-01 | **Changes:** Major revision post-2019 review
- **Version:** v1.0.0 | **Date:** 2016-07-15 | **Changes:** Initial launch

---

## Review Log

### Internal Reviews
- **Date:** 2025-10-25 | **Reviewer:** DM-001 | **Status:** Approved | **Notes:** Comprehensive SDG source; critical for development domain

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
  - PR-84721: Wealth Inequality
  - PR-27836: Aging Population
  - PR-68147: Teen Depression
  - All problems map to one or more SDGs
- **Solutions:**
  - SO-00234: Universal Health Coverage (SDG 3.8)
  - SO-00156: Quality Education Access (SDG 4)
  - SO-00789: Renewable Energy (SDG 7)

---

**END OF SOURCE RECORD**
