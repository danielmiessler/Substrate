# EPA AQS Data Directory

This directory contains air quality data fetched from the EPA Air Quality System (AQS).

## Data Files

Data files are named using the pattern:
```
aqs_YYYY_STATE1-STATE2_TIMESTAMP.json
```

Example:
```
aqs_2023_CA-NY-TX_2025-10-27.json
```

## File Structure

Each data file contains:

```json
{
  "metadata": {
    "source": "EPA Air Quality System (AQS)",
    "dataSourceId": "DS-00008",
    "fetchedAt": "ISO 8601 timestamp",
    "parameters": ["88101", "44201"],
    "states": ["CA", "NY"],
    "year": 2023
  },
  "dailyData": [
    {
      "state_code": "06",
      "county_code": "037",
      "site_num": "1103",
      "parameter_code": "88101",
      "poc": 3,
      "latitude": 34.06653,
      "longitude": -118.22676,
      "datum": "WGS84",
      "parameter_name": "PM2.5 - Local Conditions",
      "sample_duration": "24 HOUR",
      "pollutant_standard": "PM25 24-hour 2012",
      "date_local": "2023-01-01",
      "units_of_measure": "Micrograms/cubic meter (LC)",
      "event_type": "None",
      "observation_count": 1,
      "observation_percent": 100.0,
      "arithmetic_mean": 12.3,
      "first_max_value": 12.3,
      "first_max_hour": 0,
      "aqi": 51,
      "method_code": "170",
      "method_name": "BAM-1020",
      "local_site_name": "Los Angeles-North Main Street",
      "address": "1630 N. Main Street",
      "state": "California",
      "county": "Los Angeles",
      "city": "Los Angeles",
      "cbsa_name": "Los Angeles-Long Beach-Anaheim, CA"
    }
  ],
  "monitorMetadata": [
    {
      "state_code": "06",
      "county_code": "037",
      "site_number": "1103",
      "parameter_code": "88101",
      "poc": 3,
      "latitude": 34.06653,
      "longitude": -118.22676,
      "datum": "WGS84",
      "first_year_of_data": 2000,
      "last_sample_date": "2023-12-31",
      "monitor_type": "State/Local",
      "reporting_agency": "California Air Resources Board",
      "method_code": "170",
      "method_name": "BAM-1020",
      "measurement_scale": "NEIGHBORHOOD",
      "objective": "POPULATION EXPOSURE"
    }
  ],
  "summary": {
    "totalRecords": 12450,
    "stateCount": 2,
    "parameterCount": 2,
    "dateRange": {
      "start": "2023-01-01",
      "end": "2023-12-31"
    }
  }
}
```

## Parameter Codes

| Code | Parameter | Health Impact |
|------|-----------|---------------|
| 88101 | PM2.5 | **MOST CRITICAL** — Fine particulate matter linked to mortality, cardiovascular disease, respiratory disease, cognitive decline |
| 44201 | Ozone (O3) | Respiratory irritant, smog precursor, asthma exacerbation |
| 42401 | Sulfur Dioxide (SO2) | Respiratory irritant |
| 42101 | Carbon Monoxide (CO) | Cardiovascular stress |
| 42602 | Nitrogen Dioxide (NO2) | Respiratory irritant, precursor to ozone/PM |
| 81102 | PM10 | Coarse particulate matter, respiratory health |

## Air Quality Index (AQI) Interpretation

| AQI Range | Category | Health Implications |
|-----------|----------|---------------------|
| 0-50 | Good | Air quality satisfactory, little or no health risk |
| 51-100 | Moderate | Acceptable; unusually sensitive people may experience respiratory symptoms |
| 101-150 | Unhealthy for Sensitive Groups | Sensitive groups (children, elderly, respiratory/cardiovascular conditions) may experience health effects |
| 151-200 | Unhealthy | Everyone may begin to experience health effects; sensitive groups more serious effects |
| 201-300 | Very Unhealthy | Health alert — everyone may experience serious health effects |
| 301+ | Hazardous | Health warning — emergency conditions; entire population likely affected |

## Environmental Health Context

**Air quality is a structural determinant of wellbeing.**

- **PM2.5 reduces life expectancy** by months to years in polluted areas (Air Quality Life Index estimates 1.8 years lost globally)
- **Environmental injustice:** Low-income communities and communities of color disproportionately exposed to air pollution
- **Involuntary exposure:** You breathe ~20,000 times per day — cannot "self-care" your way out of toxic air
- **ZIP code determines exposure:** Structural constraint on wellbeing (requires resources to relocate)

## Data Quality Notes

- **Validation lag:** 6-12 months from collection to finalized data in AQS
- **Spatial coverage:** Urban bias — rural areas undermonitored
- **Environmental justice monitoring gap:** Low-income communities historically undermonitored
- **FRM/FEM methods:** Federal Reference/Equivalent Methods — regulatory-grade quality
- **Missing data:** Instrument downtime, maintenance typically results in <10% missing data per site-year

## Usage Examples

### Calculate annual average PM2.5 by county
```typescript
const data = await Bun.file('aqs_2023_CA_2025-10-27.json').json();
const pm25Data = data.dailyData.filter(d => d.parameter_code === '88101');

const byCounty = new Map();
for (const record of pm25Data) {
  const key = `${record.state}_${record.county}`;
  if (!byCounty.has(key)) {
    byCounty.set(key, []);
  }
  byCounty.get(key).push(record.arithmetic_mean);
}

for (const [county, values] of byCounty.entries()) {
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  console.log(`${county}: ${avg.toFixed(2)} µg/m³`);
}
```

### Identify environmental justice hotspots (high PM2.5 areas)
```typescript
const highPM25Sites = pm25Data
  .filter(d => d.arithmetic_mean > 12.0) // EPA annual standard: 12.0 µg/m³
  .map(d => ({
    site: d.local_site_name,
    city: d.city,
    county: d.county,
    latitude: d.latitude,
    longitude: d.longitude,
    pm25: d.arithmetic_mean,
  }));

// Cross-reference with Census demographic data for environmental justice analysis
```

## Related Datasets

- **DS-00001** — WHO Global Health Observatory (global air pollution mortality)
- **DS-00005** — CDC WONDER Mortality (air pollution-attributable deaths)
- **DS-00006** — Census ACS Social Wellbeing (demographic data for environmental justice analysis)

## References

- EPA Air Quality System: https://aqs.epa.gov/
- Air Quality Life Index (AQLI): https://aqli.epic.uchicago.edu/
- Clean Air Act: https://www.epa.gov/clean-air-act-overview
- 40 CFR Part 58 (Monitoring Requirements): https://www.ecfr.gov/current/title-40/chapter-I/subchapter-C/part-58
