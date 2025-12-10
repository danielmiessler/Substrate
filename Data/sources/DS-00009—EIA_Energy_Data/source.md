# Energy Information Administration - Energy Data

**Source ID:** DS-00009
**Record Created:** 2025-12-01
**Last Updated:** 2025-12-01
**Cataloger:** DM-001
**Review Status:** Initial Entry

---

## Bibliographic Information

### Title Statement
- **Main Title:** U.S. Energy Information Administration Open Data
- **Subtitle:** Comprehensive Energy Statistics for the United States
- **Abbreviated Title:** EIA
- **Variant Titles:** EIA Open Data, EIA API

### Responsibility Statement
- **Publisher/Issuing Body:** U.S. Energy Information Administration
- **Department/Division:** Office of Energy Statistics, U.S. Department of Energy
- **Contributors:** State energy agencies, private sector energy companies
- **Contact Information:** https://www.eia.gov/about/contact/

### Publication Information
- **Place of Publication:** Washington, D.C., United States
- **Date of First Publication:** 1977 (EIA established); API launched 2012
- **Publication Frequency:** Continuous (weekly, monthly, annual updates depending on data type)
- **Current Status:** Active

### Edition/Version Information
- **Current Version:** API v2
- **Version History:** API v1 (2012-2020), API v2 (2020-present)
- **Versioning Scheme:** Major version changes require migration

---

## Authority Statement

### Organizational Authority

**Issuing Organization Analysis:**
- **Official Name:** U.S. Energy Information Administration
- **Type:** Federal statistical agency within U.S. Department of Energy
- **Established:** 1977 (Department of Energy Organization Act)
- **Mandate:** Collect, analyze, and disseminate independent and impartial energy information
- **Parent Organization:** U.S. Department of Energy
- **Governance Structure:** Administrator appointed by President, confirmed by Senate

**Domain Authority:**
- **Subject Expertise:** 45+ years of comprehensive U.S. and international energy data collection
- **Recognition:** Principal federal agency for energy statistics; cited by government, industry, researchers globally
- **Publication History:** Monthly Energy Review (1974-present), Annual Energy Review, Short-Term Energy Outlook, Annual Energy Outlook
- **Peer Recognition:** Used by OPEC, IEA, World Bank; gold standard for U.S. energy statistics

**Quality Oversight:**
- **Peer Review:** Internal quality review processes; statistical methods peer-reviewed
- **Editorial Board:** Office of Statistical Methods and Research
- **Scientific Committee:** Energy Statistics Advisory Committee
- **External Audit:** Government Accountability Office (GAO), DOE Inspector General
- **Certification:** Follows federal statistical standards; OMB Statistical Policy Directives

**Independence Assessment:**
- **Funding Model:** Federal appropriations (U.S. Department of Energy budget)
- **Political Independence:** Statutory independence in data collection and analysis (DOE Organization Act)
- **Commercial Interests:** None; public service mission
- **Transparency:** All methodology documented; data freely available

### Data Authority

**Provenance Classification:**
- **Source Type:** Primary (collects directly from industry, utilities) and Secondary (aggregates state data)
- **Data Origin:** Mandatory reporting from energy companies, utilities, refineries, importers/exporters
- **Chain of Custody:** Industry reports → EIA validation → Publication via website/API

**Primary Source Characteristics:**
- Mandatory reporting requirements (legal obligation for energy industry)
- Direct surveys of refineries, utilities, producers
- Administrative records (import/export documentation)
- Real-time price data from market sources

---

## Scope Note

### Content Description

**Subject Coverage:**
- **Primary Subjects:** Energy prices, production, consumption, trade, stocks, forecasts
- **Secondary Subjects:** Electricity generation, renewable energy, petroleum, natural gas, coal
- **Subject Classification:**
  - LC: TJ (Energy, Fuel), HD9502 (Energy Industry)
  - Dewey: 333.79 (Energy Resources), 338.2 (Energy Industry)
- **Keywords:** Gas prices, oil prices, petroleum, natural gas, electricity, renewable energy, energy production, energy consumption

**Geographic Coverage:**
- **Spatial Scope:** United States (primary), international (petroleum, natural gas trade)
- **Countries/Regions Included:** All 50 states + D.C., U.S. territories; international energy trade partners
- **Geographic Granularity:** National, regional (PADDs), state, some sub-state (refinery, utility level)
- **Coverage Completeness:** 100% for U.S. national data; comprehensive state-level; variable international
- **Notable Exclusions:** Limited real-time retail pricing in some regions

**Temporal Coverage:**
- **Start Date:** Varies by series; petroleum data to 1949, electricity to 1973, comprehensive data 1977+
- **End Date:** Present (ongoing data collection)
- **Historical Depth:** 50-75+ years for core petroleum/energy series
- **Frequency of Observations:** Hourly (electricity grid), daily (prices), weekly (petroleum), monthly (most data), annual (comprehensive)
- **Temporal Granularity:** High-frequency data available for prices and electricity
- **Time Series Continuity:** Excellent; breaks documented for methodology changes

**Population/Cases Covered:**
- **Target Population:** U.S. energy industry, energy markets, consumers
- **Inclusion Criteria:** All energy production, consumption, trade, pricing in U.S. jurisdiction
- **Exclusion Criteria:** Some proprietary trading data; some small producers below reporting thresholds
- **Coverage Rate:** >95% of U.S. energy sector by volume
- **Sample vs. Census:** Mix of census (large reporters) and sample surveys (smaller entities)

**Variables/Indicators:**

**Core Indicators for US-Common-Metrics:**
- **PET.EMM_EPMR_PTE_NUS_DPG.W** - U.S. Regular All Formulations Retail Gasoline Prices (Dollars per Gallon)
- **PET.RWTC.W** - Cushing, OK WTI Spot Price FOB (Dollars per Barrel)
- **NG.RNGWHHD.W** - Henry Hub Natural Gas Spot Price (Dollars per Million Btu)
- **ELEC.PRICE.US-ALL.M** - U.S. Average Retail Price of Electricity (Cents per Kilowatthour)

---

## Access Conditions

### Technical Access

**API Information:**
- **Endpoint URL:** https://api.eia.gov/v2/
- **API Type:** REST
- **API Version:** v2 (current)
- **Documentation:** https://www.eia.gov/opendata/documentation.php

**Authentication:**
- **Authentication Required:** Yes
- **Authentication Type:** API key
- **Registration Process:** Free at https://www.eia.gov/opendata/register.php
- **Approval Required:** No (instant)
- **Approval Timeframe:** Immediate upon registration

**Rate Limits:**
- **Requests per Second:** Not specified
- **Requests per Hour:** 1,000 requests/hour (registered users)
- **Requests per Day:** No daily limit for reasonable use
- **Throttling Policy:** 429 error if exceeded; exponential backoff recommended

**Query Capabilities:**
- **Filtering:** By series ID, date range, frequency, facets (state, product, sector)
- **Sorting:** Chronological
- **Pagination:** Supported (offset, length parameters)
- **Aggregation:** API can aggregate by different time periods

**Data Formats:**
- **Available Formats:** JSON, XML
- **Format Quality:** Well-structured, validated
- **Encoding:** UTF-8

**Download Options:**
- **Bulk Download:** Available via Open Data bulk files
- **API Access:** Preferred method for programmatic access
- **Excel Downloads:** Available for individual datasets

### Legal/Policy Access

**License:**
- **License Type:** Public Domain (U.S. Government Work)
- **License URL:** https://www.eia.gov/about/copyrights_reuse.php

**Usage Rights:**
- **Redistribution Allowed:** Yes
- **Commercial Use Allowed:** Yes
- **Modification Allowed:** Yes
- **Attribution Required:** Recommended ("Source: U.S. Energy Information Administration")
- **Share-Alike Required:** No

**Cost Structure:**
- **Access Cost:** Free

**Terms of Service:**
- **TOS URL:** https://www.eia.gov/about/copyrights_reuse.php
- **Key Restrictions:** None for data; trademarks/logos require permission
- **Liability Disclaimers:** Data provided "as is"; not liable for decisions based on data

---

## Collection Development Policy Fit

### Relevance Assessment

**Substrate Mission Alignment:**
- **Human Progress Focus:** Energy prices directly impact cost of living, transportation, heating/cooling
- **Problem-Solution Connection:**
  - Links to Problems: Energy affordability, fossil fuel dependence, energy security
  - Links to Solutions: Renewable energy adoption, efficiency improvements, policy interventions
- **Evidence Quality:** Gold-standard government energy statistics; legally mandated reporting

**Collection Priorities Match:**
- **Priority Level:** HIGH - essential source for energy/price indicators
- **Uniqueness:** Only authoritative source for comprehensive U.S. energy data
- **Comprehensiveness:** Fills critical gap for gas prices, oil prices in US-Common-Metrics

---

## Source Evaluation Narrative

### Methodological Assessment

**Data Collection Methodology:**
- **Survey Design:** Mandatory reporting forms for refineries, utilities, producers, importers
- **Census vs. Sample:** Census for large entities; sample surveys for smaller (weighted to population)
- **Validation:** Cross-validation with administrative records, industry data, state reports
- **Quality Control:** Automated edit checks, analyst review, reconciliation with supply/demand balances

**Error Characteristics:**
- **Sampling Error:** Low (mandatory reporting covers >95% of market by volume)
- **Non-sampling Error:** Minimal (legal reporting requirements reduce non-response)
- **Known Biases:** Small producers below threshold may be undercounted; spot prices may not reflect all transactions

**Methodology Documentation:**
- **Transparency Level:** 5/5 (Excellent) - comprehensive methodology documentation
- **Documentation URL:** https://www.eia.gov/survey/
- **Reproducibility:** High - published methodology allows verification

### Currency Assessment

**Update Characteristics:**
- **Update Frequency:**
  - Gasoline prices: Weekly (Monday release for prior week)
  - Crude oil prices: Daily (with 1-day lag)
  - Natural gas prices: Weekly
  - Electricity prices: Monthly
- **Update Reliability:** Highly consistent; follows published release schedule
- **Timeliness:** 1-7 days for most price data; monthly data within 60 days

### Objectivity Assessment

**Potential Biases:**
- **Political Bias:** Statutory independence protects against political interference
- **Commercial Bias:** None (public agency, no commercial interests)
- **Selection Bias:** Comprehensive coverage minimizes selection effects

### Reliability Assessment

**Consistency:**
- **Internal Consistency:** Excellent - data validated against supply/demand balances
- **Temporal Consistency:** Long time series with consistent methodology
- **Cross-source Consistency:** Reconciled with OPEC, IEA international data

### Accuracy Assessment

**Validation Evidence:**
- **Benchmark Comparisons:** Validated against industry data, international organizations
- **Error Studies:** Published confidence intervals for survey estimates
- **Accuracy for Different Uses:** Excellent for trend analysis and point estimates

---

## Known Limitations and Caveats

### Coverage Limitations

**Geographic Gaps:**
- Real-time retail gas prices vary by station; EIA reports regional averages
- Some remote areas underrepresented in price surveys

**Temporal Gaps:**
- Daily oil prices available; daily gas prices not (weekly only)
- Some historical data less frequent than current

**Variable Gaps:**
- Retail gas prices are averages; actual prices vary by station
- Some proprietary trading data not captured

### Methodological Limitations

**Sampling Limitations:**
- Gas price surveys sample stations; not census of all stations
- Spot prices may not reflect all market transactions

**Measurement Limitations:**
- Retail prices are survey-based (may lag actual market)
- Some prices are spot/futures; retail prices differ

### How to Use Responsibly

1. **Gas prices**: Use as indicator of trends; actual prices vary by location/station
2. **Oil prices**: WTI is benchmark; actual crude prices vary by grade/location
3. **Time lag**: Account for 1-7 day publication lag in analysis
4. **Attribution**: Always cite EIA as source

---

## API Usage Examples

### Get Weekly Gas Prices

```bash
curl "https://api.eia.gov/v2/petroleum/pri/gnd/data/?api_key=${EIA_API_KEY}&frequency=weekly&data[0]=value&facets[product][]=EPMR&facets[duession][]=Y&sort[0][column]=period&sort[0][direction]=desc&length=10"
```

### Get WTI Crude Oil Price

```bash
curl "https://api.eia.gov/v2/petroleum/pri/spt/data/?api_key=${EIA_API_KEY}&frequency=daily&data[0]=value&facets[series][]=RWTC&sort[0][column]=period&sort[0][direction]=desc&length=30"
```

### TypeScript Example

```typescript
const EIA_API_KEY = process.env.EIA_API_KEY;

async function getGasPrices() {
  const response = await fetch(
    `https://api.eia.gov/v2/petroleum/pri/gnd/data/?api_key=${EIA_API_KEY}&frequency=weekly&data[0]=value&facets[product][]=EPMR&facets[duession][]=Y&sort[0][column]=period&sort[0][direction]=desc&length=1`
  );
  const data = await response.json();
  return data.response.data[0];
}
```

---

## Credits

**Data Source:** U.S. Energy Information Administration
**API Documentation:** https://www.eia.gov/opendata/documentation.php
**Cataloged for Substrate:** 2025-12-01
**Cataloger:** Kai (DM-001)

---

**END OF SOURCE DOCUMENTATION**
