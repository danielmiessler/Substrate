# U.S. GDP: Executive Summary

---

## 🎯 BEST ESTIMATE

| Metric | Value | Confidence | Last Updated |
|--------|-------|------------|--------------|
| **U.S. Real GDP (Q2 2025)** | **$23.77 trillion** | 99% | October 2025 |
| **GDP Growth Rate (QoQ)** | **3.8%** | 99% | October 2025 |
| **Annual Real GDP (2024)** | **$23.36 trillion** | 99% | October 2025 |

**One-liner:** U.S. real GDP is $23.77 trillion (Q2 2025), growing at 3.8% quarterly.

**Caveat:** GDP figures are revised three times after initial release; final revisions may adjust by ±0.5%.

---

## The Big Picture

[Gross Domestic Product (GDP)](https://www.bea.gov/data/gdp/gross-domestic-product) is the most comprehensive measure of economic output—the total value of all goods and services produced within the United States. The [Bureau of Economic Analysis (BEA)](https://www.bea.gov/), part of the U.S. Department of Commerce, is the authoritative source for this data.

Real GDP (inflation-adjusted, [chained 2017 dollars](https://www.bea.gov/help/faq/520)) enables valid comparisons across time by removing the effects of price changes. This dataset covers:
- **Quarterly data**: Q1 1947 – Q2 2025 (314 observations)
- **Annual data**: 1929 – 2024 (96 observations)

---

## Why This Number Matters

GDP is the benchmark metric for:
- **Economic health**: Is the economy growing or shrinking?
- **Policy decisions**: Federal Reserve interest rates, fiscal policy
- **Business strategy**: Market sizing, demand forecasting, investment planning
- **International comparison**: How the U.S. economy compares globally

A [1% change in GDP growth](https://fred.stlouisfed.org/series/A191RL1Q225SBEA) represents approximately $240 billion in annual economic output.

---

## Current Data Highlights

### Recent Performance
| Period | Real GDP | Growth Rate | Source |
|--------|----------|-------------|--------|
| Q2 2025 | [$23.77T](https://fred.stlouisfed.org/series/GDPC1) | +3.8% (QoQ) | [BEA](https://www.bea.gov/) |
| Q1 2025 | $23.55T | Baseline | [BEA](https://www.bea.gov/) |
| Full Year 2024 | [$23.36T](https://fred.stlouisfed.org/series/GDPCA) | +2.8% (YoY) | [BEA](https://www.bea.gov/) |

### Historical Milestones
| Year | Real GDP | Context |
|------|----------|---------|
| 1929 | $1.19T | Pre-Depression peak |
| 1933 | $0.88T | Depression trough (-26%) |
| 1947 | $2.18T | Post-WWII era begins (quarterly data starts) |
| 2000 | $13.13T | Dot-com peak |
| 2009 | $14.42T | Great Recession trough |
| 2020 Q2 | $17.26T | COVID trough (-31.4% annualized) |
| 2025 Q2 | $23.77T | Current |

---

## How the Number Is Calculated

The BEA uses the [expenditure approach](https://www.bea.gov/resources/methodologies/nipa-handbook):

**GDP = C + I + G + (X − M)**

| Component | Description | Share of GDP |
|-----------|-------------|--------------|
| **C** | Personal consumption expenditures | ~68% |
| **I** | Gross private domestic investment | ~18% |
| **G** | Government consumption & investment | ~17% |
| **(X-M)** | Net exports (exports minus imports) | ~-3% |

### Real vs. Nominal
- **Nominal GDP**: Measured in current prices (~$29T in 2024)
- **Real GDP** (this dataset): Adjusted for inflation using [chained 2017 dollars](https://www.bea.gov/help/faq/520)
- Real GDP enables valid comparisons across time periods

---

## Revision Process

GDP is revised multiple times as more complete data becomes available:

| Release | Timing | Typical Revision |
|---------|--------|------------------|
| **Advance Estimate** | ~30 days after quarter end | Initial estimate |
| **Second Estimate** | ~60 days after quarter end | ±0.3-0.5 pp |
| **Third Estimate** | ~90 days after quarter end | ±0.1-0.2 pp |
| **Annual Revision** | September (5+ years) | May revise history |

**Bottom line**: Current-quarter GDP is a provisional estimate. Use third estimates or annual revisions for precision.

---

## Data Sources

| Source | What It Provides | Link |
|--------|-----------------|------|
| [Bureau of Economic Analysis (BEA)](https://www.bea.gov/) | Official U.S. GDP (primary authority) | [GDP Data](https://www.bea.gov/data/gdp) |
| [FRED](https://fred.stlouisfed.org/) | Easy API access to BEA data | [GDPC1](https://fred.stlouisfed.org/series/GDPC1), [GDPCA](https://fred.stlouisfed.org/series/GDPCA) |

**FRED Series IDs:**
- `GDPC1` - Real GDP, Quarterly, Seasonally Adjusted Annual Rate
- `GDPCA` - Real GDP, Annual, Not Seasonally Adjusted

---

## Confidence Assessment

| Component | Confidence | Explanation |
|-----------|------------|-------------|
| **Current Quarterly GDP** | 95% | Advance estimate; will be revised |
| **Third-Estimate GDP** | 99% | Final quarterly revision; highly reliable |
| **Historical GDP (5+ years)** | 99%+ | Fully revised; official government statistic |

This is among the highest-confidence economic data available—produced by the U.S. government using rigorous methodology with full transparency.

---

## Known Limitations

1. **Revision lag**: Current-quarter figures are provisional estimates
2. **Base year**: Uses 2017 as reference (updated periodically by BEA)
3. **Pre-1947**: Quarterly data not available before 1947
4. **Seasonal adjustment**: May mask genuine short-term fluctuations
5. **Real economy**: GDP measures production, not welfare or sustainability

---

## How to Access the Data

### Quick Access
```bash
# View quarterly data (1947-2025)
cat Real-GDP-Quarterly-1947-2025.csv

# View annual data (1929-2024)
cat Real-GDP-Annual-1929-2024.csv
```

### Update to Latest
```bash
# Download latest quarterly data from FRED
curl -L "https://fred.stlouisfed.org/graph/fredgraph.csv?id=GDPC1" -o Real-GDP-Quarterly.csv

# Download latest annual data from FRED
curl -L "https://fred.stlouisfed.org/graph/fredgraph.csv?id=GDPCA" -o Real-GDP-Annual.csv
```

---

## Supporting Documentation

| Document | Description |
|----------|-------------|
| [US-GDP-1929-2025.md](./US-GDP-1929-2025.md) | Full dataset documentation with historical context |
| [source.md](./source.md) | Detailed methodology and provenance |
| [Real-GDP-Quarterly-1947-2025.csv](./Real-GDP-Quarterly-1947-2025.csv) | Quarterly data (314 observations) |
| [Real-GDP-Annual-1929-2024.csv](./Real-GDP-Annual-1929-2024.csv) | Annual data (96 observations) |

---

## Research Metadata

| Attribute | Value |
|-----------|-------|
| **Research Date** | October 2025 |
| **Researcher** | Kai (10-agent parallel synthesis) |
| **Method** | Multi-source corroboration via Perplexity, Claude, Gemini |
| **Confidence Level** | 99% (official government statistic) |
| **Known Gaps** | Pre-1947 quarterly data unavailable |

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| **December 2025** | Added SUMMARY.md with executive overview | Standardizing Substrate datasets to "Answer First" schema |
| **October 2025** | Initial dataset creation | Comprehensive U.S. GDP data collection |

---

## External Resources

- [BEA GDP FAQ](https://www.bea.gov/help/faq/520) - Methodology questions
- [BEA NIPA Handbook](https://www.bea.gov/resources/methodologies/nipa-handbook) - Full methodology
- [BEA Release Schedule](https://www.bea.gov/news/schedule) - Upcoming GDP releases
- [FRED GDP Series](https://fred.stlouisfed.org/categories/18) - All GDP-related data
