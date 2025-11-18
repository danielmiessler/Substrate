# U.S. Presidential Approval Ratings Dataset

## Overview

This directory contains authoritative U.S. presidential approval ratings data spanning from Franklin D. Roosevelt (1937) through Joe Biden (2025), compiled from multiple polling organizations with a primary focus on Gallup's consistent methodology. Presidential approval ratings are one of the most important indicators of presidential performance and public sentiment toward government.

## What's Inside

- **Historical-Approval-Polls-1937-2024.csv** - Individual approval polls (12,479 data points, 1937-2025)
- **Historical-Net-Approval-First-Terms.csv** - Daily average net approval ratings for first-term presidents (1,460 days)
- **Trump-Approval-2025.csv** - **CURRENT PRESIDENT** Trump second term approval polls (33 polls, Jan-Nov 2025)
- **Biden-Approval-2024-2025.csv** - Biden final year approval polls (81 polls, Jan 2024 - Jan 2025)
- **Trump-Approval-Analysis-2025.md** - **CURRENT YEAR ANALYSIS** Trump approval trend analysis
- **Trump-2025-Data-Methodology.md** - Data collection methodology for 2025 polls
- **Biden-Approval-Analysis-2024-2025.md** - Biden final year trend analysis
- **README.md** - This file
- **UPDATES.md** - Change log for data updates
- **RESOURCES.md** - Data sources and access information
- **source.md** - Detailed library science metadata and cataloging

## Data Source Research

### How This Source Was Identified

Research across multiple authoritative sources evaluated:
1. Gallup Organization's historical presidential approval data (1937-present)
2. American Presidency Project (UC Santa Barbara) aggregated polling
3. Roper Center for Public Opinion Research archives
4. FiveThirtyEight polling aggregation (discontinued 2024)
5. Individual polling organizations (Pew, AP-NORC, CNN, etc.)
6. Academic research datasets and GitHub repositories
7. Polling methodology and consistency standards
8. Public accessibility and data formats

### Primary Source Selected: **Multiple Polling Organizations (Aggregated)**

**Primary Data Source:**
- GitHub Repository: https://github.com/lorenzo-ruffino/approval_rate_usa_president
- Data Compiler: Lorenzo Ruffino (academic research compilation)
- Base Data: Multiple polling organizations including Gallup, Pew, AP-NORC, CNN, Reuters/Ipsos, Quinnipiac, and others

**Why This Source:**
- Comprehensive coverage from 1937 to present
- Includes data from 14 presidents across 87+ years
- Contains detailed poll-level data (12,000+ individual polls)
- Aggregates multiple polling organizations for robust coverage
- Open source and publicly accessible
- Includes metadata: polling dates, sample sizes, polling organizations
- Follows consistent data structure for cross-temporal analysis

**Historical Authority:** Gallup Organization
- Gold standard for presidential approval tracking since 1937
- Uses consistent question: "Do you approve or disapprove of the way [President] is handling his job as President?"
- Professional probability-based sampling methodology
- Published continuously for 87+ years
- Used by Federal Reserve, media, and policymakers

## Why This Source Is Reputable

### Authority & Credibility

1. **Gallup as Gold Standard**
   - Established 1935, pioneered scientific polling methodology
   - Consistent presidential approval question since FDR (1937)
   - Professional polling organization with rigorous methodology
   - Widely cited by academics, government, media
   - No partisan affiliation or commercial bias

2. **Multi-Source Aggregation**
   - Dataset includes polls from 15+ professional polling organizations
   - Cross-validation across multiple pollsters reduces single-source bias
   - Sample sizes typically 1,000+ respondents per poll
   - All included polls use probability-based sampling with live interviewers (phone) or high-quality online panels

3. **Scientific Rigor**
   - Standardized approval/disapproval question format
   - Documented sample sizes, polling dates, and margins of error
   - Representative national samples (U.S. adults, registered voters, likely voters)
   - Transparency in methodology and data collection

4. **Institutional Validation**
   - American Presidency Project (UC Santa Barbara) maintains official Gallup data
   - Roper Center (Cornell University) archives all major polls
   - Academic researchers use this data for peer-reviewed publications
   - Federal Reserve and government agencies track presidential approval

5. **Temporal Consistency**
   - 87+ years of continuous data (1937-2025)
   - 12,000+ individual polls across 14 presidents
   - Allows for robust cross-presidential comparisons
   - Captures approval trends through all major historical events

6. **Public Accessibility**
   - Open source data available on GitHub
   - No paywalls or institutional access requirements
   - Reproducible research enabled
   - Community validation and error correction possible

## Dataset Specifications

### Coverage

**Individual Polls (Historical-Approval-Polls-1937-2024.csv):**
- **Geographic**: United States (national samples)
- **Temporal**: 1937 - January 2025 (87+ years)
- **Polls**: 12,479 individual approval polls
- **Presidents**: 14 presidents (FDR through Biden)
- **Latest**: Biden approval at 37-41% (January 2025, multiple polls)

**First-Term Net Approval (Historical-Net-Approval-First-Terms.csv):**
- **Coverage**: First 1,460 days of presidency (4 years)
- **Presidents**: 14 presidents with first-term data
- **Metric**: Daily average net approval (approval % - disapproval %)
- **Format**: Time-series indexed by day number (1-1460)

**Recent Biden Data (Biden-Approval-2024-2025.csv):**
- **Temporal**: January 2024 - January 2025
- **Polls**: 81 individual polls
- **Organizations**: Gallup, AP-NORC, CNN, Quinnipiac, Reuters/Ipsos, American Research Group, Marquette Law School, and others

### Metrics

**Individual Polls Dataset:**
- President number and name
- Term number and term dates
- Poll start and end dates
- Polling organization
- Approval percentage
- Disapproval percentage
- No opinion/unsure percentage
- Sample size

**First-Term Net Approval Dataset:**
- Day number (1-1460 from inauguration)
- Net approval for each president (approval - disapproval)
- Comparable time-series across presidents

### Data Quality

- **Completeness**: 87 years of continuous data; some gaps for early presidents
- **Reliability**: Professional polling organizations using scientific methodology
- **Timeliness**: Updated regularly as new polls are published
- **Accessibility**: CSV format, no authentication required, open source

## Presidential Approval Context

Presidential approval ratings serve as:
- **Political Capital Indicator**: High approval enables legislative success
- **Reelection Predictor**: Approval >50% strongly correlates with reelection
- **Public Confidence Measure**: Reflects citizen trust in government
- **Policy Effectiveness Signal**: Approval responds to economic conditions, crises, policy outcomes
- **Historical Benchmark**: Enables comparison across administrations

### Approval Rating Ranges

**Typical Ranges:**
- **60-80%**: Honeymoon period, major crisis rally (9/11, Pearl Harbor)
- **50-60%**: Strong approval, likely reelection
- **40-50%**: Mixed approval, competitive reelection
- **30-40%**: Weak approval, difficult governing environment
- **Below 30%**: Historical lows (Truman 1952, Nixon 1974)

## Current Context (as of November 2025)

### CURRENT PRESIDENT: Donald Trump (Second Term)

**Trump Second Term Approval (November 2025):**
- **Current Approval**: 36-44% (average ~41%)
- **Current Disapproval**: 49-62% (average ~54%)
- **Net Approval**: -13 points (Nate Silver average)
- **Trend**: Declining (government shutdown impact)
- **Peak Approval**: 52% (late January 2025, post-inauguration)
- **Lowest Approval**: 36% (November 2025, AP-NORC)
- **Total Decline**: -11 points from peak (52% → 41%)

**Year-to-Date Pattern (2025):**
- **Jan-Feb**: Honeymoon period (48-52% approval)
- **Mar-May**: Post-honeymoon decline (44-48%)
- **Jun-Aug**: Summer plateau (44-46%)
- **Sep-Nov**: Autumn decline (36-44%)

**Key Factors:**
- Government shutdown began October 1, 2025
- Net approval declined from -9.3 (Oct 1) to -13.0 (Nov 17)
- Republican approval down 12 points since inauguration (91% → 79%)
- Economic approval underwater: Economy -17.6, Inflation -27.5

---

### Previous President: Biden Approval Trend (Final Year)

**January 2024**: 33-41% (range across polls)
**Q1 2024**: 37-46% (increased slightly)
**Q2 2024**: 36-42% (relatively stable)
**Q3 2024**: 36-44% (slight increase)
**Q4 2024**: 36-42% (stable through election)
**January 2025**: 36-41% (final approval ratings)

**Key Observations:**
- Biden's approval remained relatively stable 36-42% throughout final year
- Some polling variation based on organization and methodology
- Never exceeded 46% in 2024-2025 period
- Final approval ~40% consistent with term average

## Key Presidential Approval Moments in Dataset

### Highest Approval Ratings
- **George W. Bush**: 90% (September 2001, post-9/11 rally)
- **Harry Truman**: 87% (June 1945, WWII victory)
- **John F. Kennedy**: 83% (April 1961, early presidency)
- **Dwight Eisenhower**: 79% (December 1956)
- **Lyndon Johnson**: 79% (February 1964)

### Lowest Approval Ratings
- **Harry Truman**: 22% (February 1952, Korean War)
- **Richard Nixon**: 24% (July-August 1974, Watergate)
- **Jimmy Carter**: 28% (June 1979, economic crisis)
- **George W. Bush**: 25% (October 2008, financial crisis)
- **Donald Trump**: 34% (December 2017)

### Historical Inflection Points
- **Pearl Harbor** (December 1941): FDR approval surge to 84%
- **Watergate** (1973-1974): Nixon collapse from 67% to 24%
- **9/11** (September 2001): Bush surge from 51% to 90%
- **Financial Crisis** (2008): Bush decline from 37% to 25%
- **COVID-19** (2020): Trump remained relatively stable 42-49%

## Use Cases

This dataset supports:

- **Political Science Research**: Presidential performance analysis, election forecasting, public opinion dynamics
- **Policy Analysis**: Evaluating policy effectiveness through approval response
- **Economic Correlation**: Relationship between economic indicators and presidential approval
- **Crisis Response Studies**: How presidents gain or lose approval during national emergencies
- **Comparative Administration Analysis**: Cross-presidential performance comparisons
- **Media Analysis**: Presidential coverage impact on public opinion
- **Substrate Integration**: Supporting Claims, Arguments, and Plans with authoritative polling data

## Data Interpretation Notes

1. **Polling Variation**:
   - Different polling organizations show 3-7 point variation
   - Sample composition (adults vs. registered voters vs. likely voters) affects results
   - Polling methodology (phone vs. online) introduces variation
   - Use multiple polls or aggregated averages for robust analysis

2. **Approval vs. Job Performance**:
   - Presidential approval is general sentiment, not policy-specific
   - Approval responds to economic conditions, crises, scandals, media coverage
   - High approval doesn't guarantee policy success; low approval doesn't guarantee failure
   - Approval is one indicator among many for presidential effectiveness

3. **Temporal Dynamics**:
   - "Honeymoon period": First 100 days typically show highest approval
   - Midterm decline: Approval often drops by second year
   - Rally effect: Crises (wars, attacks) temporarily boost approval
   - Late-term stability: Approval often stabilizes in fourth year

4. **Net Approval**:
   - Net approval = Approval % - Disapproval %
   - Positive net approval (>0%) indicates more approve than disapprove
   - Negative net approval (<0%) indicates more disapprove than approve
   - Net approval more sensitive to changes than approval alone

5. **Sample Sizes**:
   - Typical poll: 1,000-1,200 respondents
   - Margin of error: ±3-4 percentage points (95% confidence)
   - Smaller samples have larger margins of error
   - Look for trends across multiple polls, not single poll results

## Maintenance

See **UPDATES.md** for detailed change log of data refreshes and updates.

**Update Schedule:**
- **As Published**: New polls added when released by polling organizations
- **Weekly-Monthly**: During active presidency, polls published frequently
- **Continuous**: Historical data maintained and validated

**Next Recommended Update:** Ongoing as new polling data is published

## Comparison with Other Political Indicators

Presidential approval should be considered alongside:
- **Congressional Approval**: Typically lower than presidential (15-30%)
- **Economic Indicators**: GDP growth, unemployment, inflation correlate with approval
- **Generic Ballot**: Democratic vs. Republican preference for Congress
- **Direction of Country**: "Right track" vs. "wrong track" polling
- **Policy-Specific Approval**: Ratings on economy, foreign policy, healthcare, etc.

---

**Last Updated**: 2025-11-17
**Maintained By**: Substrate Data Curation
**Update Frequency**: Continuous (as polls are published)
**Data Coverage**: 1937-2025 (87+ years, 12,000+ polls)
