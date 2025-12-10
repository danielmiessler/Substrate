# Treasury FiscalData - Federal Fiscal Statistics

**Source ID:** DS-00010
**Record Created:** 2025-12-01
**Last Updated:** 2025-12-01
**Cataloger:** DM-001
**Review Status:** Initial Entry

---

## Bibliographic Information

### Title Statement
- **Main Title:** FiscalData - U.S. Treasury Department Open Data
- **Subtitle:** Federal Government Fiscal Information
- **Abbreviated Title:** FiscalData, Treasury Data
- **Variant Titles:** Treasury Open Data, USAspending fiscal data

### Responsibility Statement
- **Publisher/Issuing Body:** U.S. Department of the Treasury
- **Department/Division:** Bureau of the Fiscal Service
- **Contributors:** Office of Management and Budget (OMB), Congressional Budget Office (CBO)
- **Contact Information:** https://fiscaldata.treasury.gov/contact-us/

### Publication Information
- **Place of Publication:** Washington, D.C., United States
- **Date of First Publication:** 2019 (FiscalData portal); Treasury data collection since 1789
- **Publication Frequency:** Daily (debt), Monthly (budget), Annual (comprehensive)
- **Current Status:** Active

### Edition/Version Information
- **Current Version:** FiscalData API v2
- **Version History:** Launched 2019, major updates 2020, 2023
- **Versioning Scheme:** RESTful API with versioned endpoints

---

## Authority Statement

### Organizational Authority

**Issuing Organization Analysis:**
- **Official Name:** U.S. Department of the Treasury
- **Type:** Cabinet-level federal executive department
- **Established:** 1789 (one of the oldest federal agencies)
- **Mandate:** Manage federal finances, collect revenue, pay bills, manage government debt
- **Parent Organization:** Executive Branch of U.S. Federal Government
- **Governance Structure:** Secretary of the Treasury (Cabinet position)

**Domain Authority:**
- **Subject Expertise:** 235+ years of federal financial management
- **Recognition:** THE authoritative source for U.S. federal fiscal data; no alternative
- **Publication History:** Daily Treasury Statement (1970s-present), Monthly Treasury Statement, Treasury Bulletins
- **Peer Recognition:** Used by Congressional Budget Office, Federal Reserve, Wall Street, international institutions

**Quality Oversight:**
- **Peer Review:** Internal audit processes; GAO oversight
- **Editorial Board:** Bureau of the Fiscal Service
- **External Audit:** Government Accountability Office (GAO), Treasury Inspector General
- **Certification:** Federal accounting standards (FASAB); GAAP for government

**Independence Assessment:**
- **Funding Model:** Federal appropriations
- **Political Independence:** Data collection is administrative (not discretionary); political leadership cannot alter debt figures
- **Commercial Interests:** None; constitutional obligation to report
- **Transparency:** Legal requirement to publish debt, receipts, expenditures

### Data Authority

**Provenance Classification:**
- **Source Type:** Primary (Treasury is the source; not aggregation)
- **Data Origin:** Treasury's own financial operations, tax collections, debt issuance
- **Chain of Custody:** Treasury operations → Financial systems → Publication

**Primary Source Characteristics:**
- Direct administrative data from Treasury operations
- Legal requirement to maintain accurate records
- Audited financial statements
- Real-time debt tracking from Treasury securities operations

---

## Scope Note

### Content Description

**Subject Coverage:**
- **Primary Subjects:** Federal debt, federal budget, government receipts, government spending
- **Secondary Subjects:** Treasury securities, interest payments, fiscal policy indicators
- **Subject Classification:**
  - LC: HJ (Public Finance), HG (Finance)
  - Dewey: 336 (Public Finance), 351.72 (Government Budgets)
- **Keywords:** National debt, federal deficit, government spending, tax revenue, Treasury bonds, fiscal policy

**Geographic Coverage:**
- **Spatial Scope:** United States federal government (national only)
- **Geographic Granularity:** National (federal government only; state/local separate)
- **Coverage Completeness:** 100% of federal fiscal operations
- **Notable Exclusions:** State/local government debt (separate sources); Federal Reserve balance sheet

**Temporal Coverage:**
- **Start Date:** Various; debt data to 1790s; modern format from 1970s
- **End Date:** Present (daily updates for debt)
- **Historical Depth:** 230+ years for some series
- **Frequency of Observations:** Daily (debt), Monthly (budget statements), Annual (comprehensive)
- **Time Series Continuity:** Excellent; methodology changes documented

**Variables/Indicators:**

**Core Indicators for US-Common-Metrics:**
- **Total Public Debt Outstanding** - Total federal debt (daily)
- **Debt Held by the Public** - Marketable Treasury securities held outside government
- **Intragovernmental Holdings** - Debt held by government accounts (Social Security, etc.)
- **Monthly Treasury Statement Receipts** - Federal tax/revenue collections
- **Monthly Treasury Statement Outlays** - Federal government spending
- **Budget Deficit/Surplus** - Receipts minus outlays

---

## Access Conditions

### Technical Access

**API Information:**
- **Endpoint URL:** https://api.fiscaldata.treasury.gov/services/api/fiscal_service/
- **API Type:** REST
- **API Documentation:** https://fiscaldata.treasury.gov/api-documentation/

**Authentication:**
- **Authentication Required:** No (public API)
- **Registration Process:** None required
- **Approval Required:** No

**Rate Limits:**
- **Rate Limiting:** Reasonable use policy (no strict limits published)
- **Throttling Policy:** May throttle excessive requests
- **Recommendation:** Implement caching; batch requests where possible

**Query Capabilities:**
- **Filtering:** By date, field values, record type
- **Sorting:** By any field (ascending/descending)
- **Pagination:** Supported (page[size], page[number])
- **Aggregation:** Limited built-in aggregation

**Data Formats:**
- **Available Formats:** JSON, CSV, XML
- **Format Quality:** Well-structured, validated
- **Encoding:** UTF-8

**Download Options:**
- **Bulk Download:** CSV exports available for full datasets
- **API Access:** Recommended for programmatic access
- **Direct Downloads:** Available via FiscalData portal

### Legal/Policy Access

**License:**
- **License Type:** Public Domain (U.S. Government Work)
- **License URL:** https://fiscaldata.treasury.gov/about-us/

**Usage Rights:**
- **Redistribution Allowed:** Yes
- **Commercial Use Allowed:** Yes
- **Modification Allowed:** Yes
- **Attribution Required:** Recommended ("Source: U.S. Department of the Treasury")

**Cost Structure:**
- **Access Cost:** Free

---

## Collection Development Policy Fit

### Relevance Assessment

**Substrate Mission Alignment:**
- **Human Progress Focus:** Federal fiscal health affects all Americans; debt levels impact future generations
- **Problem-Solution Connection:**
  - Links to Problems: National debt burden, deficit spending, fiscal sustainability
  - Links to Solutions: Fiscal policy reforms, spending prioritization, revenue policy
- **Evidence Quality:** Authoritative source; legally mandated reporting; audited

**Collection Priorities Match:**
- **Priority Level:** HIGH - essential for government/fiscal category
- **Uniqueness:** Only authoritative source for federal debt and budget data
- **Comprehensiveness:** Fills critical gap for fiscal metrics in US-Common-Metrics

---

## Source Evaluation Narrative

### Methodological Assessment

**Data Collection Methodology:**
- **Administrative Records:** Direct recording of Treasury operations
- **Completeness:** 100% - all federal fiscal transactions recorded
- **Validation:** Internal controls, GAO audit, reconciliation with Fed records
- **Timeliness:** Daily updates for debt; monthly for budget statements

**Error Characteristics:**
- **Measurement Error:** Minimal (administrative data, not surveys)
- **Known Issues:** Accounting treatments may change (documented); timing differences between cash and accrual
- **Revisions:** Some figures revised as transactions settle

### Currency Assessment

**Update Characteristics:**
- **Debt Data:** Daily (by 6 PM ET)
- **Monthly Treasury Statement:** ~8th business day of following month
- **Deficit/Surplus:** Monthly with annual final
- **Reliability:** Highly consistent; legal obligation to publish

### Objectivity Assessment

**Potential Biases:**
- **Political Bias:** Data is administrative (not discretionary); political leadership cannot alter figures
- **Presentation Bias:** Different administrations may emphasize different metrics, but underlying data unchanged
- **Transparency:** All data publicly available; methodology documented

### Reliability Assessment

**Consistency:**
- **Internal Consistency:** Reconciled with Federal Reserve, CBO figures
- **Temporal Consistency:** Long time series with consistent definitions
- **Cross-source Consistency:** Matches Fed Z.1 Financial Accounts, CBO estimates

### Accuracy Assessment

**Validation Evidence:**
- **GAO Audit:** Annual audit of Treasury financial statements
- **Reconciliation:** Daily reconciliation with Federal Reserve
- **Error Rate:** Minimal for administrative data

---

## Known Limitations and Caveats

### Coverage Limitations

**What's NOT Included:**
- State and local government debt (separate sources)
- Federal Reserve balance sheet (separate from Treasury debt)
- Off-budget items (some military, emergency spending may be tracked differently)
- Unfunded liabilities (Social Security, Medicare future obligations not counted as debt)

**Temporal Gaps:**
- Historical data format varies; modern APIs cover recent decades
- Some older data requires accessing archived reports

### Methodological Limitations

**Accounting Treatments:**
- Cash basis vs. accrual basis (MTS is cash; some reports accrual)
- Intragovernmental holdings (Social Security surplus) counted differently
- Debt ceiling periods may cause unusual timing patterns

**Interpretation Cautions:**
- "Debt ceiling" periods create artificial constraints/timing issues
- Debt-to-GDP ratio requires GDP from separate source (BEA)
- Nominal vs. inflation-adjusted comparisons require CPI data

### How to Use Responsibly

1. **Debt figures**: Total Public Debt Outstanding is headline number
2. **Debt Held by Public**: Better measure of government's market borrowing
3. **Deficit**: Use 12-month rolling or fiscal year (Oct-Sep) for trends
4. **Context**: Always provide GDP comparison for meaningful interpretation

---

## API Usage Examples

### Get Total Public Debt Outstanding

```bash
curl "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&page[size]=1"
```

### Get Monthly Treasury Statement Summary

```bash
curl "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_5?sort=-record_date&page[size]=12"
```

### TypeScript Example

```typescript
interface DebtResponse {
  data: Array<{
    record_date: string;
    tot_pub_debt_out_amt: string;
    debt_held_public_amt: string;
    intragov_hold_amt: string;
  }>;
}

async function getTotalDebt(): Promise<DebtResponse> {
  const response = await fetch(
    "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&page[size]=1"
  );
  return response.json();
}

// Returns debt in dollars (e.g., "34123456789012.34")
```

---

## Key Endpoints for US-Common-Metrics

| Metric | Endpoint | Update Frequency |
|--------|----------|------------------|
| Total Public Debt | `/v2/accounting/od/debt_to_penny` | Daily |
| Debt Held by Public | `/v2/accounting/od/debt_to_penny` | Daily |
| Monthly Receipts | `/v1/accounting/mts/mts_table_4` | Monthly |
| Monthly Outlays | `/v1/accounting/mts/mts_table_5` | Monthly |
| Deficit/Surplus | `/v1/accounting/mts/mts_table_1` | Monthly |
| Interest on Debt | `/v1/accounting/mts/mts_table_5` | Monthly |

---

## Credits

**Data Source:** U.S. Department of the Treasury, Bureau of the Fiscal Service
**API Documentation:** https://fiscaldata.treasury.gov/api-documentation/
**Cataloged for Substrate:** 2025-12-01
**Cataloger:** Kai (DM-001)

---

**END OF SOURCE DOCUMENTATION**
