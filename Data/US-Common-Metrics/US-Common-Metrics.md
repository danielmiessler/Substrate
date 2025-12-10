# US Common Metrics

**Last Updated:** 2025-12-02
**Data Sources:** 8+ authoritative government and institutional sources
**Coverage:** 60+ key U.S. economic and social indicators

---

## Quick Reference Dashboard

| Category | Key Metric | Value | Updated | Trend |
|----------|------------|-------|---------|-------|
| Economy | GDP Growth Rate (QoQ) | 3.8% | 2025-12-02 | → |
| Inflation | CPI-U All Items | 324.368 | 2025-12-02 | → |
| Employment | Unemployment Rate (U-3) | 4.4% | 2025-12-02 | → |
| Housing | 30-Year Mortgage Rate | 6.23% | 2025-12-02 | → |
| Markets | Fed Funds Rate | 3.88% | 2025-12-02 | → |
| Consumer | Consumer Sentiment | 53.6 | 2025-12-02 | → |
| Fiscal | Total Public Debt | 
*Values updated8.396T | 2025-12-02 | → |
| Energy | Gas Price (Regular) | 
*Values updated.061 | 2025-12-02 | → |

*Values updated8.396T | 2025-12-02 | → |
| Energy | Gas Price (Regular) | 
*Values updated.061 | 2025-12-02 | → |

*Values updated8.396T | 2025-12-02 | → |
| Energy | Gas Price (Regular) | 
*Values updated.061 | 2025-12-02 | → |

*Values updated8.396T | 2025-12-02 | → |
| Energy | Gas Price (Regular) | -- | -- | -- |

*Values updated8.396T | 2025-12-02 | → |
| Energy | Gas Price (Regular) | -- | -- | -- |

*Values updated automatically via `update.ts`*

---

## 1. Economic Output & Growth

| Metric | Value | Period | Updated | Source | FRED ID |
|--------|-------|--------|---------|--------|---------|
| Real GDP (Billions) |  | Q3 2024 | 3770.98B | Q3 2024 | 2025-12-02 | BEA/FRED | GDPC1 |
| Nominal GDP (Billions) |  | BEA/FRED | 0485.73B | Q3 2024 | 2025-12-02 | BEA/FRED | GDP |
| GDP Growth Rate (QoQ, SAAR) | 3.8% | Q3 2024 | 2025-12-02 | BEA/FRED | A191RL1Q225SBEA |
| GDP Growth Rate (YoY) | 2.1% | Q3 2024 | 2025-12-02 | BEA/FRED | A191RO1Q156NBEA |
| Industrial Production Index | 101.27 | Monthly | 2025-12-02 | Fed/FRED | INDPRO |
| Capacity Utilization | 75.8% | Monthly | 2025-12-02 | Fed/FRED | TCU |
| Durable Goods Orders | 313653M | Monthly | 2025-12-02 | Census/FRED | DGORDER |
| Retail Sales (Billions) | $733258.0B | Monthly | 2025-12-02 | Census/FRED | RSAFS |
| Retail Sales YoY Change | $733258.0B | Monthly | 2025-12-02 | Census/FRED | RSAFSNA |

### Source Documentation
- **Primary Source:** Bureau of Economic Analysis (BEA), Federal Reserve
- **Update Frequency:** Quarterly (GDP), Monthly (production, sales)
- **Methodology:** [Data/sources/DS-00004—FRED_Economic_Wellbeing/source.md](../sources/DS-00004—FRED_Economic_Wellbeing/source.md)

---

## 2. Inflation & Prices

| Metric | Value | Period | Updated | Source | FRED ID |
|--------|-------|--------|---------|--------|---------|
| CPI-U (All Urban Consumers) | 324.368 | Monthly | 2025-12-02 | BLS/FRED | CPIAUCSL |
| CPI YoY Change | -- | Monthly | -- | BLS/FRED | CPIAUCSL (calc) |
| Core CPI (Ex Food/Energy) | 330.542 | Monthly | 2025-12-02 | BLS/FRED | CPILFESL |
| Core CPI YoY Change | 330.542 | Monthly | 2025-12-02 | BLS/FRED | CPILFESL (calc) |
| PCE Price Index | 127.285 | Monthly | 2025-12-02 | BEA/FRED | PCEPI |
| Core PCE (Ex Food/Energy) | 126.705 | Monthly | 2025-12-02 | BEA/FRED | PCEPILFE |
| Producer Price Index (PPI) | 262.34 | Monthly | 2025-12-02 | BLS/FRED | PPIACO |
| Gas Price (Regular, US Avg) | -- | Weekly | -- | EIA | PET.EMM_EPMR_PTE_NUS_DPG.W |
| Oil Price (WTI Crude, $/bbl) | $59.11 | Daily | 2025-12-02 | EIA/FRED | DCOILWTICO |
| Gold Price ($/oz) | -- | Daily | -- | FRED | GOLDAMGBD228NLBM |

### Source Documentation
- **Primary Sources:** Bureau of Labor Statistics (BLS), Bureau of Economic Analysis (BEA), Energy Information Administration (EIA)
- **Update Frequency:** Monthly (CPI, PCE, PPI), Weekly (gas), Daily (oil, gold)
- **Methodology:** [Data/sources/DS-00009—EIA_Energy_Data/source.md](../sources/DS-00009—EIA_Energy_Data/source.md)

---

## 3. Employment & Labor

| Metric | Value | Period | Updated | Source | FRED ID |
|--------|-------|--------|---------|--------|---------|
| Unemployment Rate (U-3) | 4.4% | Monthly | 2025-12-02 | BLS/FRED | UNRATE |
| Underemployment Rate (U-6) | 8.0% | Monthly | 2025-12-02 | BLS/FRED | U6RATE |
| Nonfarm Payrolls (Thousands) | 159,626K | Monthly | 2025-12-02 | BLS/FRED | PAYEMS |
| Payroll Change (MoM) | -- | Monthly | -- | BLS/FRED | PAYEMS (calc) |
| Initial Jobless Claims | 216,000K | Weekly | 2025-12-02 | DOL/FRED | ICSA |
| Continuing Claims | 1,960,000K | Weekly | 2025-12-02 | DOL/FRED | CCSA |
| Job Openings (JOLTS, Thousands) | 7,227K | Monthly | 2025-12-02 | BLS/FRED | JTSJOL |
| Quit Rate (JOLTS) | 1.9% | Monthly | 2025-12-02 | BLS/FRED | JTSQUR |
| Hire Rate (JOLTS) | 3.2% | Monthly | 2025-12-02 | BLS/FRED | JTSHIR |
| Labor Force Participation Rate | 62.4% | Monthly | 2025-12-02 | BLS/FRED | CIVPART |
| Employment-Population Ratio | 59.7% | Monthly | 2025-12-02 | BLS/FRED | EMRATIO |
| Average Hourly Earnings |  | BLS/FRED | 6.67 | Monthly | 2025-12-02 | BLS/FRED | CES0500000003 |
| Average Weekly Hours | 34.2 | Monthly | 2025-12-02 | BLS/FRED | AWHAETP |
| Long-Term Unemployed (27+ wks) | -- | Monthly | -- | BLS/FRED | UEMP27OV |

### Source Documentation
- **Primary Sources:** Bureau of Labor Statistics (BLS), Department of Labor (DOL)
- **Update Frequency:** Monthly (employment), Weekly (claims)
- **Methodology:** [Data/sources/DS-00007—BLS_JOLTS_Labor_Market/source.md](../sources/DS-00007—BLS_JOLTS_Labor_Market/source.md)

---

## 4. Housing

| Metric | Value | Period | Updated | Source | FRED ID |
|--------|-------|--------|---------|--------|---------|
| Median Home Sales Price | MSPUS |10,800 | Quarterly | 2025-12-02 | Census/FRED | MSPUS |
| Case-Shiller Home Price Index | 328.94 | Monthly | 2025-12-02 | S&P/FRED | CSUSHPINSA |
| Existing Home Sales (SAAR) | 4,100,000K | Monthly | 2025-12-02 | NAR/FRED | EXHOSLUSM495S |
| New Home Sales (SAAR) | 800K | Monthly | 2025-12-02 | Census/FRED | HSN1F |
| Housing Starts (SAAR) | 1,307K | Monthly | 2025-12-02 | Census/FRED | HOUST |
| Building Permits (SAAR) | 1,330K | Monthly | 2025-12-02 | Census/FRED | PERMIT |
| Homeownership Rate | -- | Quarterly | -- | Census/FRED | RSAHORUSQ156S |
| 30-Year Mortgage Rate | 6.23% | Weekly | 2025-12-02 | Freddie Mac/FRED | MORTGAGE30US |
| 15-Year Mortgage Rate | 5.51% | Weekly | 2025-12-02 | Freddie Mac/FRED | MORTGAGE15US |
| Median Rent Index | -- | Monthly | -- | BLS/FRED | CUSR0000SEHA |
| Housing Affordability Index | -- | Monthly | -- | NAR/FRED | FIXHAI |

### Source Documentation
- **Primary Sources:** Census Bureau, National Association of Realtors (NAR), Freddie Mac
- **Update Frequency:** Quarterly (prices), Monthly (sales, starts), Weekly (rates)
- **Methodology:** [Data/sources/DS-00004—FRED_Economic_Wellbeing/source.md](../sources/DS-00004—FRED_Economic_Wellbeing/source.md)

---

## 5. Consumer & Personal Finance

| Metric | Value | Period | Updated | Source | FRED ID |
|--------|-------|--------|---------|--------|---------|
| Consumer Sentiment (UMich) | 53.6 | Monthly | 2025-12-02 | UMich/FRED | UMCSENT |
| Consumer Confidence (Conf Board) | -- | Monthly | -- | Conf Board | -- |
| Personal Income (Billions) |  | Monthly | 6279.9B | Monthly | 2025-12-02 | BEA/FRED | PI |
| Disposable Personal Income |  | Monthly | 3033.5B | Monthly | 2025-12-02 | BEA/FRED | DSPI |
| Personal Saving Rate | 4.6% | Monthly | 2025-12-02 | BEA/FRED | PSAVERT |
| Consumer Credit Outstanding | $5076636.0B | Monthly | 2025-12-02 | Fed/FRED | TOTALSL |
| Credit Card Delinquency Rate | 2.98% | Quarterly | 2025-12-02 | Fed/FRED | DRCCLACBS |
| Debt Service Ratio (DSR) | 11.25% | Quarterly | 2025-12-02 | Fed/FRED | TDSP |
| Auto Sales (SAAR, Millions) | 16.80M | Monthly | 2025-12-02 | BEA/FRED | TOTALSA |
| Real Personal Consumption | -- | Monthly | -- | BEA/FRED | PCEC96 |

### Source Documentation
- **Primary Sources:** University of Michigan, Federal Reserve, Bureau of Economic Analysis
- **Update Frequency:** Monthly (sentiment, income), Quarterly (delinquency, DSR)
- **Methodology:** [Data/sources/DS-00004—FRED_Economic_Wellbeing/source.md](../sources/DS-00004—FRED_Economic_Wellbeing/source.md)

---

## 6. Financial Markets & Interest Rates

| Metric | Value | Period | Updated | Source | FRED ID |
|--------|-------|--------|---------|--------|---------|
| Federal Funds Rate (Effective) | 3.88% | Daily | 2025-12-02 | Fed/FRED | FEDFUNDS |
| Fed Funds Target (Upper) | 4.00% | -- | 2025-12-02 | Fed/FRED | DFEDTARU |
| 10-Year Treasury Yield | 4.02% | Daily | 2025-12-02 | Treasury/FRED | DGS10 |
| 2-Year Treasury Yield | 3.47% | Daily | 2025-12-02 | Treasury/FRED | DGS2 |
| 10Y-2Y Spread (Yield Curve) | 0.55% | Daily | 2025-12-02 | FRED | T10Y2Y |
| 30-Year Treasury Yield | 4.67% | Daily | 2025-12-02 | Treasury/FRED | DGS30 |
| 3-Month Treasury Bill | 3.73% | Daily | 2025-12-02 | Treasury/FRED | DTB3 |
| Financial Stress Index (StL Fed) | -0.133 | Weekly | 2025-12-02 | StL Fed/FRED | STLFSI4 |
| S&P 500 Index | 6,812.63 | Daily | 2025-12-02 | S&P/FRED | SP500 |
| Dow Jones Industrial Avg | -- | Daily | -- | DJIA | DJIA |
| NASDAQ Composite | -- | Daily | -- | NASDAQ | NASDAQCOM |
| VIX (Volatility Index) | 16.35 | Daily | 2025-12-02 | CBOE/FRED | VIXCLS |
| Corporate Bond Spread (BAA-AAA) | -- | Monthly | -- | Moody's/FRED | BAAFFM |

### Source Documentation
- **Primary Sources:** Federal Reserve, U.S. Treasury, S&P, CBOE
- **Update Frequency:** Daily (rates, indices), Weekly (stress index)
- **Methodology:** [Data/sources/DS-00004—FRED_Economic_Wellbeing/source.md](../sources/DS-00004—FRED_Economic_Wellbeing/source.md)

---

## 7. Trade & International

| Metric | Value | Period | Updated | Source | FRED ID |
|--------|-------|--------|---------|--------|---------|
| Trade Balance (Billions) | $-59550.0B | Monthly | 2025-12-02 | Census/BEA/FRED | BOPGSTB |
| Exports (Billions) | | Exports (Billions) | 79019.0B | Monthly | 2025-12-02 | Census/FRED | BOPGEXP |
| Imports (Billions) |  | Monthly | 64627.0B | Monthly | 2025-12-02 | Census/FRED | BOPGIMP |
| Current Account Balance | -- | Quarterly | -- | BEA/FRED | NETFI |
| USD Index (DXY) | 121.43 | Daily | 2025-12-02 | ICE/FRED | DTWEXBGS |
| USD/EUR Exchange Rate | 1.1600 | Daily | 2025-12-02 | Fed/FRED | DEXUSEU |
| USD/CNY Exchange Rate | -- | Daily | -- | Fed/FRED | DEXCHUS |

### Source Documentation
- **Primary Sources:** Census Bureau, Bureau of Economic Analysis, Federal Reserve
- **Update Frequency:** Monthly (trade), Quarterly (current account), Daily (forex)

---

## 8. Government & Fiscal

| Metric | Value | Period | Updated | Source | ID |
|--------|-------|--------|---------|--------|---------|
| Federal Debt (Total Public, Trillions) | -- | Daily | -- | Treasury | -- |
| Debt Held by Public (Trillions) | -- | Daily | -- | Treasury | FYGFDPUN |
| Debt-to-GDP Ratio | 118.8% | Quarterly | 2025-12-02 | FRED | GFDEGDQ188S |
| Federal Budget Deficit (Billions) | -- | Monthly | -- | Treasury | -- |
| Federal Receipts (Billions) | $5622.8B | Monthly | 2025-12-02 | Treasury | FGRECPT |
| Federal Expenditures (Billions) | $7496.3B | Monthly | 2025-12-02 | Treasury | FGEXPND |
| Interest on Federal Debt | -- | Monthly | -- | Treasury | A091RC1Q027SBEA |

### Source Documentation
- **Primary Source:** U.S. Treasury (FiscalData.treasury.gov)
- **Update Frequency:** Daily (debt), Monthly (budget, receipts, spending)
- **Methodology:** [Data/sources/DS-00010—Treasury_FiscalData/source.md](../sources/DS-00010—Treasury_FiscalData/source.md)

---

## 9. Demographics & Social

| Metric | Value | Period | Updated | Source | ID |
|--------|-------|--------|---------|--------|---------|
| US Population (Millions) | 342555.0M | Annual | 2025-12-02 | Census | POPTHM |
| Population Growth Rate | -- | Annual | -- | Census | -- |
| GINI Index (Income Inequality) | 41.800 | Annual | 2025-12-02 | Census/FRED | SIPOVGINIUSA |
| Poverty Rate | -- | Annual | -- | Census | -- |
| Median Household Income | $83,730 | Annual | 2025-12-02 | Census | MEHOINUSA672N |
| Living Alone Rate | -- | Annual | -- | Census ACS | B11001_008E |
| No Internet Access Rate | -- | Annual | -- | Census ACS | B28002_013E |
| Mean Commute Time (Minutes) | -- | Annual | -- | Census ACS | B08303_001E |

### Source Documentation
- **Primary Source:** U.S. Census Bureau (American Community Survey)
- **Update Frequency:** Annual
- **Methodology:** [Data/sources/DS-00006—Census_ACS_Social_Wellbeing/source.md](../sources/DS-00006—Census_ACS_Social_Wellbeing/source.md)

---

## 10. Health & Crisis Indicators

| Metric | Value | Period | Updated | Source | ID |
|--------|-------|--------|---------|--------|---------|
| Drug Overdose Deaths | -- | Annual | -- | CDC WONDER | -- |
| Opioid-Specific Deaths | -- | Annual | -- | CDC WONDER | -- |
| Suicide Rate (per 100k) | -- | Annual | -- | CDC WONDER | -- |
| Life Expectancy at Birth | -- | Annual | -- | CDC | -- |
| All-Cause Mortality Rate | -- | Annual | -- | CDC WONDER | -- |
| PM2.5 (Annual Avg, ug/m3) | -- | Annual | -- | EPA AQS | 88101 |
| Days Exceeding AQI 100 | -- | Annual | -- | EPA AQS | -- |

### Source Documentation
- **Primary Sources:** CDC WONDER, Environmental Protection Agency (EPA)
- **Update Frequency:** Annual (1-2 year lag for mortality)
- **Methodology:** [Data/sources/DS-00005—CDC_WONDER_Mortality/source.md](../sources/DS-00005—CDC_WONDER_Mortality/source.md)

---

## Update Schedule Summary

| Frequency | Metrics |
|-----------|---------|
| **Daily** | Fed funds, Treasury yields, oil prices, stock indices, forex, federal debt |
| **Weekly** | Jobless claims, gas prices, mortgage rates, financial stress index |
| **Monthly** | CPI, PCE, employment/payrolls, retail sales, housing starts/sales, trade balance |
| **Quarterly** | GDP, home prices, debt service ratio, homeownership rate, current account |
| **Annual** | Population, GINI, poverty rate, life expectancy, mortality data, ACS demographics |

---

## Data Sources Index

| ID | Name | Metrics | Documentation |
|----|------|---------|---------------|
| DS-00004 | FRED Economic Wellbeing | Most economic indicators | [source.md](../sources/DS-00004—FRED_Economic_Wellbeing/source.md) |
| DS-00005 | CDC WONDER Mortality | Deaths of despair, mortality | [source.md](../sources/DS-00005—CDC_WONDER_Mortality/source.md) |
| DS-00006 | Census ACS Social | Demographics, isolation | [source.md](../sources/DS-00006—Census_ACS_Social_Wellbeing/source.md) |
| DS-00007 | BLS JOLTS Labor Market | Job openings, quit rate | [source.md](../sources/DS-00007—BLS_JOLTS_Labor_Market/source.md) |
| DS-00008 | EPA Air Quality | PM2.5, ozone, air quality | [source.md](../sources/DS-00008—EPA_Air_Quality_System/source.md) |
| DS-00009 | EIA Energy Data | Gas prices, oil, energy | [source.md](../sources/DS-00009—EIA_Energy_Data/source.md) |
| DS-00010 | Treasury FiscalData | Federal debt, budget | [source.md](../sources/DS-00010—Treasury_FiscalData/source.md) |
| DS-00011 | BLS Employment | Unemployment, payrolls | [source.md](../sources/DS-00011—BLS_Employment/source.md) |

---

## Notes on Data Quality

1. **Revisions**: Many economic indicators are revised multiple times after initial release. Values shown are the most recent available.

2. **Seasonal Adjustment**: Most monthly/quarterly metrics are seasonally adjusted (SA or SAAR) unless noted otherwise.

3. **Lag**: Different metrics have different publication lags:
   - Financial market data: Same day
   - Weekly indicators: 4-7 days
   - Monthly indicators: 2-4 weeks
   - Quarterly indicators: 1-3 months
   - Annual indicators: 6-18 months

4. **Sources of Truth**: All data comes from authoritative government agencies. See individual source documentation for methodology details.

---

## How to Use This Document

**For Research**: Find the metric you need, note the FRED ID or source, and access historical data via the source's API.

**For Fact-Checking**: Every metric includes its authoritative source. Follow the links to verify or dig deeper.

**For Arguments**: Reference specific metrics with their values, dates, and sources when building Substrate Arguments.

**For Automation**: Use `update.ts` to refresh all metrics programmatically.

---

**Last Updated:** 2025-12-01
**Automation:** `bun run update.ts`
**Maintained by:** Daniel Miessler / Kai
