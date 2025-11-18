# U.S. Presidential Approval Ratings - Historical Polling Data

**Source ID:** DS-00009
**Record Created:** 2025-11-17
**Last Updated:** 2025-11-17
**Cataloger:** Substrate Data Curation
**Review Status:** Reviewed

---

## Bibliographic Information

### Title Statement
- **Main Title:** U.S. Presidential Approval Ratings - Historical Polling Data (1937-2025)
- **Subtitle:** Multi-Source Aggregated Presidential Job Approval Polls
- **Abbreviated Title:** Presidential Approval, POTUS Approval
- **Variant Titles:** Presidential Job Approval Ratings, Gallup Presidential Approval, Presidential Performance Ratings

### Responsibility Statement
- **Publisher/Issuing Body:** Lorenzo Ruffino (Data Compiler), GitHub Open Source
- **Primary Sources:** Gallup Organization, Pew Research Center, AP-NORC, CNN, Reuters/Ipsos, Quinnipiac University, American Research Group, and 10+ additional polling organizations
- **Contributors:** American Presidency Project (UC Santa Barbara), Roper Center for Public Opinion Research (Cornell University)
- **Contact Information:** GitHub: lorenzo-ruffino/approval_rate_usa_president

### Publication Information
- **Place of Publication:** GitHub (distributed), Washington D.C. (Gallup HQ)
- **Date of First Publication:** 1937 (Gallup presidential approval tracking begins)
- **Publication Frequency:** Continuous (weekly to monthly during active presidencies)
- **Current Status:** Active and continuously updated

### Edition/Version Information
- **Current Version:** Continuous updates through January 2025
- **Version History:** Dataset expanded from Gallup-only to multi-source aggregation
- **Versioning Scheme:** Rolling updates as new polls are published

---

## Authority Statement

### Organizational Authority

**Issuing Organization Analysis (Primary: Gallup Organization):**
- **Official Name:** Gallup, Inc. (formerly The Gallup Organization)
- **Type:** Private research-based consultancy, global analytics and advice firm
- **Established:** 1935 by George Gallup
- **Mandate:** Public opinion polling, organizational consulting, performance management
- **Parent Organization:** Independent (private company)
- **Governance Structure:** Private corporate governance

**Domain Authority:**
- **Subject Expertise:** Public opinion research pioneer, 89+ years polling experience
- **Recognition:** Invented scientific polling methodology, "Gallup Poll" is synonymous with public opinion polling
- **Publication History:** Presidential approval polling since 1937 (Franklin D. Roosevelt)
- **Peer Recognition:** Cited by Federal Reserve, U.S. government, media organizations, academic researchers worldwide

**Quality Oversight:**
- **Peer Review:** Member of American Association for Public Opinion Research (AAPOR)
- **Methodology Standards:** Follows AAPOR Code of Professional Ethics and Practices
- **Scientific Committee:** Ph.D. social scientists, statisticians, survey methodologists
- **External Audit:** Methodology publicly documented, transparent sampling and weighting procedures
- **Certification:** Adheres to industry best practices for probability sampling

**Independence Assessment:**
- **Funding Model:** Commercial polling services, consulting revenue (no government funding)
- **Political Independence:** Nonpartisan organization, polls for clients across political spectrum
- **Commercial Interests:** Revenue from consulting and polling services, not dependent on any single client or ideology
- **Transparency:** Complete methodology documentation, sample demographics, weighting procedures published

### Data Authority

**Provenance Classification:**
- **Source Type:** Primary (direct polling of representative samples)
- **Data Origin:** Telephone and online surveys of national probability-based samples (U.S. adults, registered voters, likely voters)
- **Chain of Custody:** Polling organizations → Individual poll results → Data aggregation → Public datasets → Substrate curation

**Primary Source Characteristics:**
- Gallup and other professional polling organizations are authoritative sources for U.S. public opinion
- Direct measurement of public sentiment through scientific sampling methodology
- Standardized question format: "Do you approve or disapprove of the way [President] is handling his job as President?"
- Multi-organization aggregation reduces single-source bias

**Secondary Source Note:**
- This dataset is a compiled aggregation from multiple primary polling sources
- Each poll is from a primary source (Gallup, Pew, AP-NORC, etc.)
- Compilation adds value through consistency, completeness, and accessibility
- Source attribution maintained for each individual poll

---

## Scope Note

### Content Description

**Subject Coverage:**
- **Primary Subjects:** Presidential Approval, Public Opinion, Political Science, American Politics, Presidential Performance
- **Secondary Subjects:** Elections, Political Behavior, Presidential Studies, Survey Research, Public Sentiment
- **Subject Classification:**
  - LC: JK (Political Institutions - United States), JA (Political Science - General Works)
  - Dewey: 324.973 (Elections - United States), 353.03 (Executive Branch)
- **Keywords:** presidential approval, job approval, Gallup poll, public opinion, approval ratings, presidential performance, political polling, presidential studies, approval trends, net approval

**Geographic Coverage:**
- **Spatial Scope:** United States (national)
- **Countries/Regions Included:** United States only
- **Geographic Granularity:** National aggregate (some polls include state or regional crosstabs, not included in this dataset)
- **Coverage Completeness:** 100% national U.S. public opinion (representative samples)
- **Notable Exclusions:** State-level approval, international opinion of U.S. presidents

**Temporal Coverage:**
- **Start Date:** 1937 (Franklin D. Roosevelt, first Gallup presidential approval poll)
- **End Date:** January 2025 (Joe Biden, ongoing)
- **Historical Depth:** 87+ years (14 presidents)
- **Frequency of Observations:** Varies by presidency and time period (weekly to monthly during active presidencies, less frequent during early years)
- **Temporal Granularity:** Individual poll level (each poll typically 2-7 days of fielding)
- **Time Series Continuity:** Excellent for Truman onward (1945+); some gaps for FDR and early Truman

**Population/Cases Covered:**
- **Target Population:** U.S. adults (18+), registered voters, likely voters (varies by poll)
- **Inclusion Criteria:** Nationally representative probability-based samples
- **Exclusion Criteria:** Non-probability samples (internet opt-in panels), partisan polls, non-national polls
- **Coverage Rate:** Representative samples of 1,000-1,500 respondents per poll (margin of error ±3-4%)
- **Sample vs. Census:** Sample-based (probability sampling with random digit dialing or address-based sampling)

**Variables/Indicators:**
- **Number of Variables:** 12 primary variables per poll
- **Core Indicators:**
  - President number (33-46, FDR through Biden)
  - President name
  - Term number (1st term, 2nd term)
  - Term start and end dates
  - Poll start and end dates (field dates)
  - Polling organization/institute
  - Approval percentage
  - Disapproval percentage
  - No opinion/unsure percentage
  - Sample size
- **Derived Variables:** Net approval (approval - disapproval), rolling averages, trend lines
- **Data Dictionary Available:** Yes (column names self-documenting, README provides definitions)

### Content Boundaries

**What This Source IS:**
- Authoritative measurement of U.S. public opinion on presidential job performance
- Gold standard for tracking presidential approval over time and across presidents
- Multi-source aggregated dataset reducing single-pollster bias
- Scientific probability-based sampling with rigorous methodology
- Best available data for understanding presidential approval dynamics 1937-2025

**What This Source IS NOT:**
- NOT a measure of presidential effectiveness or policy success (opinion ≠ objective performance)
- NOT predictive of election outcomes (approval is one factor among many)
- NOT policy-specific approval (general job approval, not issue-by-issue ratings)
- NOT real-time (polls typically 3-7 days old when published)
- NOT granular below national level (no state or county approval ratings in this dataset)

**Comparison with Similar Sources:**

| Source | Advantages Over This Source | Disadvantages vs. This Source |
|--------|----------------------------|-------------------------------|
| FiveThirtyEight Aggregated Approval | Weighted aggregation model, poll quality adjustments | FiveThirtyEight discontinued 2024; shorter historical coverage |
| RealClearPolitics Average | Current polling averages, easy visualization | No historical depth; simple averaging (no quality weighting) |
| Roper Center Presidential Approval | Institutional authority, comprehensive archive | Requires membership access; less accessible for public use |
| Gallup Analytics | Official Gallup data, granular crosstabs | Requires paid subscription; Gallup-only (no multi-source) |
| American Presidency Project | Official aggregated Gallup data, UC Santa Barbara authority | Web interface only; no bulk download; Gallup-only |

---

## Currency Statement

### Update Frequency

**Regular Updates:**
- Continuously updated as new presidential approval polls are published
- During active presidencies: Weekly to monthly (varies by news cycle and polling organization)
- Between presidencies: No updates (approval only measured for sitting presidents)

**Last Major Update:**
- **January 2025**: Biden final approval ratings added (term ending January 20, 2025)
- **Continuous**: Polls added as published throughout 2024-2025

**Historical Updates:**
- Dataset retroactively expanded to include historical polls from 1937 onward
- Archival Gallup data incorporated for FDR, Truman, Eisenhower, Kennedy, Johnson
- Multi-source aggregation expanded beyond Gallup for Clinton forward (1990s+)

### Timeliness

**Data Lag:**
- Individual polls: Published 1-7 days after field dates complete
- Dataset updates: Added to repository within days to weeks of publication
- Real-time tracking: Some polling organizations publish preliminary results same-day

**Currency Indicators:**
- Most recent poll: January 16-19, 2025 (Biden final approval)
- Dataset current through end of Biden presidency (January 20, 2025)
- Next major updates: New presidency approval tracking begins (if available)

---

## Methodology Statement

### Data Collection Methods

**Primary Collection (Polling Organizations):**
- **Sampling Frame**: Random digit dialing (RDD) for telephone surveys, address-based sampling (ABS) for mail/online
- **Sample Size**: Typically 1,000-1,500 respondents per poll
- **Mode**: Telephone (live interviewer), online probability panels, combination
- **Response Rate**: Varies 5-15% (industry standard for modern polling)
- **Weighting**: Samples weighted to match U.S. population demographics (age, gender, race, education, region)

**Standardized Question:**
- Gallup: "Do you approve or disapprove of the way [President Name] is handling his job as President?"
- Other organizations use similar wording with minor variations
- Response options: Approve, Disapprove, No Opinion/Don't Know

**Quality Standards:**
- Probability-based sampling (no opt-in internet panels)
- Live interviewer or high-quality online panels
- Transparent methodology documentation
- Member organizations of AAPOR (American Association for Public Opinion Research)

### Data Processing

**Aggregation Methodology:**
- Individual polls compiled from published results
- Source attribution maintained (polling organization, dates, sample size)
- No weighting or adjustment applied to individual poll results
- Data presented as published by original polling organizations

**Quality Control:**
- Only professional polling organizations included
- Partisan polls excluded
- Minimum sample size thresholds (typically 500+ respondents)
- Transparent methodology requirement

**Data Structure:**
- CSV format for accessibility
- One row per poll
- Consistent variable naming and formatting
- ISO 8601 date formats

---

## Accuracy Statement

### Known Limitations

**Sampling Error:**
- Margin of error ±3-4% for typical polls (1,000-1,500 sample, 95% confidence)
- Small changes (1-2%) may be within statistical noise
- Look for trends across multiple polls, not single-poll movements

**Response Bias:**
- Survey response rates have declined (5-15% typical)
- Non-response bias possible if respondents differ from non-respondents
- Weighting adjusts for known demographics but may miss unmeasured factors

**Mode Effects:**
- Telephone vs. online surveys may show systematic differences
- Cell phone vs. landline differences in respondent characteristics
- Combination methods attempt to balance mode effects

**Question Wording:**
- Minor variations in question wording across organizations
- "Do you approve" vs. "How would you rate" may elicit different responses
- Most use standardized Gallup question format

**Temporal Gaps:**
- Early years (1937-1950s) have fewer polls, larger gaps between measurements
- Some presidents have denser polling than others
- Between-term periods have no data (only sitting presidents polled)

### Data Quality Indicators

**Reliability:**
- High reliability for Gallup data (consistent methodology 1937-2025)
- Multi-source aggregation increases reliability through cross-validation
- Professional polling organizations with documented methodology

**Validity:**
- Face validity: Measures what it claims (public approval of president)
- Construct validity: Correlates with election outcomes, presidential success
- Predictive validity: Approval >50% strongly predicts reelection

**Completeness:**
- 87+ years coverage (1937-2025)
- 12,479+ individual polls
- 14 presidents (FDR through Biden)
- Some gaps in early years; comprehensive coverage 1945 onward

---

## Coverage Completeness

### Geographic Coverage

**Included:**
- United States (all 50 states + D.C.)
- National representative samples
- Some polls include regional or state crosstabs (not in this dataset)

**Excluded:**
- State-level approval ratings
- County or local approval
- International opinion of U.S. presidents

**Coverage Assessment:** 100% for national U.S. public opinion

### Temporal Coverage

**Strong Coverage:**
- 1945-2025 (Truman through Biden): Continuous, frequent polling
- 1960s-2025: Very dense coverage (weekly to monthly polls)

**Moderate Coverage:**
- 1937-1945 (FDR): Less frequent polling (technology limitations, WWII)

**Gaps:**
- Between presidencies: No polling (only sitting presidents measured)
- Some presidents have gaps of months between polls (early years)

### Demographic Coverage

**Standard Demographics (via weighting):**
- Age (18+)
- Gender
- Race/ethnicity
- Education
- Region
- Party affiliation (some polls)

**Limitations:**
- Some polls survey "adults," others "registered voters" or "likely voters"
- Sample composition affects results (registered voters typically more Republican-leaning)
- Demographic crosstabs not included in this aggregated dataset

---

## Access and Use Conditions

### Access Rights

**Public Availability:**
- ✅ Publicly accessible via GitHub
- ✅ No authentication required
- ✅ Open source (MIT License implied)
- ✅ Free for commercial and non-commercial use

**Repository:**
- GitHub: https://github.com/lorenzo-ruffino/approval_rate_usa_president
- Download: Direct CSV download from repository
- Clone: `git clone https://github.com/lorenzo-ruffino/approval_rate_usa_president.git`

### Use Restrictions

**Licensing:**
- Open source repository (no explicit restrictive license)
- Individual polls: Data published by polling organizations, generally public domain for analysis
- Compiled dataset: Aggregation adds value, attribution to compiler recommended

**Citation Requirements:**
- Attribute to polling organizations (Gallup, Pew, AP-NORC, etc.) for individual polls
- Attribute to Lorenzo Ruffino compilation for aggregated dataset
- Cite Substrate for this curated version

**Recommended Citation:**
```
Ruffino, L. (2025). U.S. Presidential Approval Ratings - Historical Polling Data (1937-2025).
GitHub. https://github.com/lorenzo-ruffino/approval_rate_usa_president

Curated by Substrate Project. https://github.com/danielmiessler/Substrate
```

---

## Technical Specifications

### File Formats

- **Primary Format:** CSV (Comma-Separated Values)
- **Encoding:** UTF-8
- **Line Endings:** Unix (LF)
- **Size:** ~1.2 MB (12,479 polls)

### Data Structure

**Historical-Approval-Polls-1937-2024.csv:**
```csv
president_number,president,term_number,term_start,term_end,poll_start,poll_end,polling_institute,approval,disapproval,no_opinion,sample_size
```

**Historical-Net-Approval-First-Terms.csv:**
```csv
days,Joe Biden,Donald Trump,Barack Obama,George W. Bush,Bill Clinton,...
```

### Technical Quality

- **Consistency:** Standardized column names, data types
- **Completeness:** No missing critical fields (dates, polling organization, approval %)
- **Accuracy:** Data matches published poll results
- **Accessibility:** Standard CSV format, no proprietary software required

---

## Related Data Sources

### Complementary Sources

**Original Polling Sources:**
- Gallup Analytics (subscription): https://news.gallup.com/analytics/
- American Presidency Project: https://www.presidency.ucsb.edu/statistics/data/presidential-job-approval
- Roper Center for Public Opinion Research: https://ropercenter.cornell.edu/presidential-approval

**Alternative Aggregations:**
- FiveThirtyEight Presidential Approval (discontinued 2024): https://projects.fivethirtyeight.com/
- RealClearPolitics Approval Average: https://www.realclearpolitics.com/
- Pollster (HuffPost, discontinued): https://elections.huffingtonpost.com/pollster

**Related Political Data:**
- Generic Congressional Ballot polling
- Direction of country ("right track/wrong track")
- Economic confidence indices
- Policy-specific approval ratings

### Integration Opportunities

**Substrate Components:**
- **Claims**: "Presidential approval correlates with reelection probability"
- **Arguments**: "High approval enables legislative success"
- **Data**: Economic indicators (GDP, unemployment) vs. approval ratings
- **Plans**: Political campaign strategies based on approval trends

---

## Cataloger Notes

### Data Strengths

1. **Temporal Breadth**: 87+ years, 14 presidents, unprecedented historical depth
2. **Multi-Source**: Aggregates 15+ polling organizations, reduces bias
3. **Accessibility**: Open source, free, CSV format
4. **Granularity**: Individual poll level with dates, organizations, sample sizes
5. **Standardization**: Consistent question format enables cross-presidential comparison

### Data Limitations

1. **Methodology Variation**: Different polling organizations use slightly different methods
2. **Sampling Challenges**: Low response rates in modern era, potential non-response bias
3. **Temporal Gaps**: Early years less frequent, some presidents more polled than others
4. **No Crosstabs**: Aggregated dataset lacks demographic breakdowns
5. **Between Terms**: No data for ex-presidents post-presidency

### Recommended Use Cases

**Strongly Recommended:**
- Historical analysis of presidential approval trends
- Cross-presidential comparisons of approval trajectories
- Event study analysis (crisis impact on approval)
- Correlation with economic indicators
- Political science research on presidential performance

**Use With Caution:**
- Predicting election outcomes (approval is one factor among many)
- Inferring policy-specific support (general approval ≠ issue approval)
- State or local analysis (national data only)
- Real-time decision making (polls have lag time)

### Future Enhancements

**Potential Additions:**
- Demographic crosstabs (when available from individual polls)
- Party affiliation breakdowns (approval by Democrat/Republican/Independent)
- Methodology tagging (telephone vs. online, adults vs. registered voters)
- Margin of error calculations
- Automated updates from polling APIs

---

**Cataloging Completed:** 2025-11-17
**Cataloger:** Substrate Data Curation (Kai)
**Review Status:** Complete
**Next Review:** As major dataset updates occur
