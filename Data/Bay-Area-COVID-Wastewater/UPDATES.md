# Dataset Update Log

This file tracks all updates to the Bay Area COVID-19 Wastewater Surveillance dataset.

## Update Format

Each entry should include:
- **Date**: When the update was made
- **Data Period**: Which time period the new data covers
- **Source**: URL or reference to the data source
- **Changes**: What was added, modified, or corrected
- **Latest Value**: Most recent data point added

---

## 2025-10-07 - Initial Dataset Creation

**Data Period**: 2022-07-09 to 2025-08-02
**Source**: CDPH California Wastewater Surveillance
**URL**: https://data.chhs.ca.gov/dataset/1184f641-313f-47ee-b126-9e8c42699be5/resource/726752d3-afe6-4733-99bd-ffb9f400348c/download/wastewater.csv

### Changes
- Created initial dataset with 161 weekly data points
- Downloaded raw California statewide wastewater data from CDPH
- Processed data:
  - Converted dates from MM/DD/YYYY to ISO 8601 format (YYYY-MM-DD)
  - Rounded viral concentration values to 2 decimal places
  - Added data_source and region columns for clarity
  - Added notes column specifying units (Log10 viral gene copies/mL)

### Latest Value
- **Week Ending**: 2025-08-02
- **SARS-CoV-2**: 5.60 log10 copies/mL
- **Trend**: Elevated, increasing from summer lows
- **Status**: HIGH wastewater activity in California

### Coverage
- **Start Date**: 2022-07-09 (earliest available data)
- **End Date**: 2025-08-02 (most recent data)
- **Total Records**: 161 weekly measurements
- **Completeness**: 100% (no gaps)

### Files Created
- `COVID-Wastewater-California-Statewide-2022-2025.csv` (main dataset)
- `COVID-Wastewater-SF-Bay-Area-2023-2025.md` (metadata documentation)
- `README.md` (dataset documentation)
- `UPDATES.md` (this file)

### Data Quality Notes
- All 161 weeks have complete data
- No missing values or gaps in time series
- Data validates against CDC NWSS for consistency
- Peak value: 18.97 log10 (2022-07-09, early Omicron period)
- Low value: 1.60 log10 (2025-03-15, spring trough)

---


## 2025-10-14 - Automated Data Update

**Data Period**: 2022-07-09 to 2022-07-09
**Source**: CDPH California Wastewater Surveillance
**URL**: https://data.chhs.ca.gov/dataset/1184f641-313f-47ee-b126-9e8c42699be5/resource/726752d3-afe6-4733-99bd-ffb9f400348c/download/wastewater.csv

### Changes
- Updated dataset with latest wastewater measurements
- Total records: 161

### Latest Value
- **Week Ending**: Jul 8, 2022
- **SARS-CoV-2**: 18.97 log10 copies/mL

---

## 2025-11-12 - Automated Data Update

**Data Period**: 2022-07-09 to 2022-07-09
**Source**: CDPH California Wastewater Surveillance
**URL**: https://data.chhs.ca.gov/dataset/1184f641-313f-47ee-b126-9e8c42699be5/resource/726752d3-afe6-4733-99bd-ffb9f400348c/download/wastewater.csv

### Changes
- Updated dataset with latest wastewater measurements
- Total records: 161

### Latest Value
- **Week Ending**: Jul 8, 2022
- **SARS-CoV-2**: 18.97 log10 copies/mL

---

## 2025-11-21 - Multi-Pathogen Surveillance Update + Interactive Dashboard

**Data Period**: Nov 2024 to Nov 2025 (12-month rolling window)
**Source**: CDPH California Wastewater Surveillance via CHHS Open Data Portal
**URL**: https://data.chhs.ca.gov/dataset/wastewater-surveillance-data-california

### Changes
- Updated California-Wastewater-Surveillance-Latest.csv with 334,229 total samples
- Added multi-pathogen tracking: COVID-19, Influenza A, RSV, Mpox, Norovirus
- Created interactive D3.js dashboard for data visualization
- Added 12-month trend analysis with monthly averages

### Latest Values (November 2025)
- **COVID-19**: 21.7k copies/g (⬇️ 38.5% vs Oct) - LOW RISK
- **Influenza A**: 2.6k copies/g (⬇️ 11.2% vs Oct)
- **RSV**: 3.3k copies/g (⬆️ 30.5% vs Oct)

### Trend Highlights
- COVID summer 2025 surge (Aug peak: 213.5k) has resolved
- Influenza seasonal decline from Jan 2025 peak (92.3k)
- RSV beginning seasonal uptick entering winter
- Overall risk assessment: LOW across all pathogens

### Files Added
- `dashboard.html` (interactive D3.js visualization)
- `California-Wastewater-Surveillance-Latest.csv` (updated)

### Coverage
- **Total Samples**: 334,229 wastewater measurements
- **Pathogens**: SARS-CoV-2, Influenza A & B, RSV, Mpox, Norovirus
- **Geographic Coverage**: All California wastewater treatment plants
- **Update Frequency**: Daily from CDPH

---
## Future Updates

New updates will be added above this line in reverse chronological order (newest first).
