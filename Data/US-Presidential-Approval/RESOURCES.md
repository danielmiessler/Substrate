# Resources - U.S. Presidential Approval Ratings

## Primary Data Source

### GitHub Repository (Aggregated Dataset)

**Repository:** lorenzo-ruffino/approval_rate_usa_president

**URLs:**
- Main Repository: https://github.com/lorenzo-ruffino/approval_rate_usa_president
- Raw Data (Individual Polls): https://raw.githubusercontent.com/lorenzo-ruffino/approval_rate_usa_president/main/historical_approval_polls.csv
- Raw Data (First Term Net Approval): https://raw.githubusercontent.com/lorenzo-ruffino/approval_rate_usa_president/main/historical_net_approval_rate_first_term.csv

**Access:**
- Free, open source, no authentication required
- Clone: `git clone https://github.com/lorenzo-ruffino/approval_rate_usa_president.git`
- Direct CSV download from repository

**Data Compiler:**
- Lorenzo Ruffino (academic research compilation)
- Aggregates data from 15+ professional polling organizations
- Continuous updates as new polls are published

---

## Original Polling Sources

### Gallup Organization (Primary Historical Source)

**Organization:** Gallup, Inc.
**Established:** 1935
**Presidential Approval Since:** 1937 (Franklin D. Roosevelt)

**URLs:**
- Presidential Approval Center: https://news.gallup.com/interactives/507569/presidential-job-approval-center.aspx
- Historical Statistics: https://news.gallup.com/poll/116677/presidential-approval-ratings-gallup-historical-statistics-trends.aspx
- Gallup Analytics (Subscription): https://news.gallup.com/analytics/

**Access:**
- Interactive visualizations: Free
- Individual poll results: Free (published on website)
- Bulk data download: Requires Gallup Analytics subscription
- Export from interactive tools: Available

**Standardized Question:**
"Do you approve or disapprove of the way [President Name] is handling his job as President?"

---

### Other Major Polling Organizations

**Pew Research Center**
- URL: https://www.pewresearch.org/
- Access: Free, all data publicly available
- Methodology: High-quality probability sampling

**AP-NORC Center for Public Affairs Research**
- URL: https://apnorc.org/
- Access: Free, all data publicly available
- Methodology: AmeriSpeak® panel (probability-based)

**CNN Polls**
- URL: https://www.cnn.com/specials/politics/polls
- Access: Free, published on website
- Methodology: SSRS telephone polling

**Reuters/Ipsos**
- URL: https://www.reuters.com/politics/
- Access: Free, published on website
- Methodology: Online probability panel

**Quinnipiac University Polling**
- URL: https://poll.qu.edu/
- Access: Free, all data publicly available
- Methodology: Live interviewer telephone polls

**American Research Group**
- URL: http://americanresearchgroup.com/
- Access: Free, published on website
- Methodology: Telephone polling

---

## Academic and Institutional Sources

### American Presidency Project (UC Santa Barbara)

**Organization:** University of California, Santa Barbara
**URL:** https://www.presidency.ucsb.edu/statistics/data/presidential-job-approval

**Data Available:**
- Presidential Job Approval (All Data): https://www.presidency.ucsb.edu/statistics/data/presidential-job-approval-all-data
- Individual President Pages (e.g., Biden): https://www.presidency.ucsb.edu/statistics/data/joseph-r-biden-public-approval
- Final Approval Ratings: https://www.presidency.ucsb.edu/statistics/data/final-presidential-job-approval-ratings

**Access:**
- Free, web interface
- Data tables with Gallup polling
- Charts and visualizations
- No bulk CSV download (web interface only)

**Authority:**
- Academic institution (UC Santa Barbara)
- Authoritative source for presidential data
- Widely cited in research

---

### Roper Center for Public Opinion Research (Cornell University)

**Organization:** Cornell University
**URL:** https://ropercenter.cornell.edu/presidential-approval

**Data Available:**
- Presidential Approval Interactive Tool: https://ropercenter.cornell.edu/presidential-approval
- Highs & Lows Comparison: https://ropercenter.cornell.edu/presidential-approval/highslows
- RoperTrends Database: Additional approval data

**Access:**
- Interactive tool: Free (web interface)
- Data download: Email request to presidential-approval@roper.center (for member institutions)
- Full archive: Requires institutional membership
- Nearly 6,000 approval polls (FDR through Trump as of 2020)

**Authority:**
- Premier archive for public opinion research
- Cornell University institutional backing
- Comprehensive historical coverage

---

## Alternative Aggregators (Historical)

### FiveThirtyEight (Discontinued 2024)

**Note:** FiveThirtyEight was acquired by ABC News and discontinued their public data products in 2024.

**Historical Data:**
- Trump Approval (2017-2021): https://github.com/fivethirtyeight/data/tree/master/trump-approval-ratings
- Biden Approval (archived): May exist in GitHub archives

**Legacy Value:**
- Weighted polling aggregation methodology
- Poll quality adjustments
- Historical reference for methodology development

### RealClearPolitics

**URL:** https://www.realclearpolitics.com/epolls/other/president-biden-job-approval-7320.html

**Data Available:**
- Current approval polling averages
- Recent polling history (usually past 1-2 years)
- Multiple presidents available

**Access:**
- Free, web interface
- No bulk download
- Simple averaging (no weighting)

**Use Case:**
- Current snapshot of approval
- Quick reference for recent trends
- Comparison of multiple recent polls

---

## Data Analysis Tools and Code

### GitHub Code Examples

**Historical Approval Ratings Analysis (Elliott Morris):**
- Gist: https://gist.github.com/elliottmorris/8775a074deffbfc5a9be098e754a5167
- Includes R code for processing and visualizing approval data
- Historical dataset included (FDR through Obama)

**Political Data R Package:**
- Repository: https://github.com/elliottmorris/politicaldata
- Function: `get_president_approval()`
- Aggregates FiveThirtyEight approval polls (historical)

**Approval Rate USA President:**
- Repository: https://github.com/lorenzo-ruffino/approval_rate_usa_president (primary source)
- Contains update scripts and data processing code

---

## Additional Research Resources

### Academic Datasets

**Harvard Dataverse:**
- Search: "Presidential Approval"
- URL: https://dataverse.harvard.edu/
- Contains archived polling datasets from academic research

**Kaggle:**
- Presidential Approval Ratings: https://www.kaggle.com/datasets/huffingtonpost/presidential-approval
- Note: May be outdated (2017 data)

### Professional Associations

**American Association for Public Opinion Research (AAPOR):**
- URL: https://www.aapor.org/
- Professional standards for polling methodology
- Code of ethics for survey research
- Transparency requirements

---

## API Access (Where Available)

### Gallup Analytics API

**Access:** Requires paid subscription
**Data:** Comprehensive Gallup polling data with crosstabs
**URL:** Contact Gallup for API documentation

### Roper Center API

**Access:** Requires institutional membership
**Data:** Historical polling archive
**URL:** Contact Roper Center for API documentation

---

## Methodology Documentation

### Gallup Methodology

**Documentation:**
- How Polls Are Conducted: https://news.gallup.com/poll/101872/how-does-gallup-polling-work.aspx
- Presidential Job Approval Methodology: Available on individual poll pages
- Sampling and Weighting: Documented in technical notes

### AAPOR Best Practices

**Code of Professional Ethics:** https://www.aapor.org/Standards-Ethics/AAPOR-Code-of-Ethics.aspx
**Transparency Initiative:** https://www.aapor.org/Standards-Ethics/Transparency-Initiative.aspx

---

## Citation Guidelines

### Citing Original Polls

**Gallup Example:**
```
Gallup Organization. (2025, January 2-15). Presidential Job Approval.
Retrieved from https://news.gallup.com/poll/329384/presidential-approval-ratings-joe-biden.aspx
```

### Citing Aggregated Dataset

**GitHub Repository:**
```
Ruffino, L. (2025). U.S. Presidential Approval Ratings - Historical Polling Data (1937-2025).
GitHub. https://github.com/lorenzo-ruffino/approval_rate_usa_president
```

### Citing Substrate Curated Version

**Substrate:**
```
Substrate Project. (2025). U.S. Presidential Approval Ratings Dataset.
GitHub. https://github.com/danielmiessler/Substrate/tree/main/Data/US-Presidential-Approval
```

---

## Contact Information

### For Dataset Questions

**Substrate Curation:**
- GitHub Issues: https://github.com/danielmiessler/Substrate/issues
- Primary Maintainer: Daniel Miessler

**Original Compiler:**
- GitHub: https://github.com/lorenzo-ruffino/approval_rate_usa_president
- Issues: Use GitHub Issues for data questions

### For Polling Methodology Questions

**Gallup:**
- Email: stlsFRED@stls.frb.org (for FRED-related Gallup data)
- Website: https://news.gallup.com/

**Roper Center:**
- Email: roper@cornell.edu
- Presidential Approval: presidential-approval@roper.center

**American Presidency Project:**
- Email: Contact through website
- Website: https://www.presidency.ucsb.edu/contact

---

**Last Updated:** 2025-11-17
**Maintained By:** Substrate Data Curation
