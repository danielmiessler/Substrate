# DS-00007 Setup Notes

## Current Status: API Testing Required

The data source has been created with comprehensive documentation and update script, but **API testing revealed the series IDs need verification**.

## Issue Discovered

When testing the BLS API v2 with series ID `JTS00000000QUR` (quit rate), the API returns:
```
"Series does not exist for Series JTS00000000QUR"
```

## Possible Causes

1. **Series ID Format Change (October 2020)**: BLS changed JOLTS series code structure on October 6, 2020 to support establishment size class data and future state/MSA data. The old format `JTS00000000QUR` may no longer be valid.

2. **FRED vs. BLS Series IDs**: FRED uses different series IDs (e.g., `JTSJOR`) that don't match BLS API series IDs directly.

3. **API Endpoint Issue**: The BLS API v2 may not support JOLTS series, or requires different authentication/parameters.

## Investigation Needed

### Option 1: Find Correct BLS Series IDs

Check the official BLS JOLTS series changes page:
- https://www.bls.gov/jlt/jlt_series_changes.htm
- Look for the new series ID format post-2020
- Test with curl to verify series exists

Example test command:
```bash
curl -X POST 'https://api.bls.gov/publicAPI/v2/timeseries/data/' \
  -H 'Content-Type: application/json' \
  -d '{"seriesid":["NEW_SERIES_ID"],"startyear":"2023","endyear":"2024"}'
```

### Option 2: Use FRED API Instead

FRED provides JOLTS data with simpler API and well-documented series IDs:
- FRED API: https://api.stlouisfed.org/fred/series/observations
- Series IDs confirmed working:
  - `JTSJOR` - Job Openings Rate
  - `JTSQUR` - Quit Rate
  - `JTSHIR` - Hire Rate
  - `JTSLD` - Layoff/Discharge Rate
  - `JTSTSR` - Total Separations Rate

FRED advantage: Already have working update script in DS-00004 (FRED Economic Wellbeing) that can be adapted.

### Option 3: Bulk Download from BLS

BLS provides bulk data downloads:
- https://download.bls.gov/pub/time.series/jt/
- Parse tab-delimited files directly
- No API rate limits
- Requires parsing file format

## Recommended Next Steps

1. **Quick Win**: Modify update.ts to use FRED API instead of BLS API
   - Copy pattern from DS-00004 FRED updater
   - Use FRED series IDs (JTSQUR, JTSJOR, JTSHIR, JTSLD, JTSTSR)
   - FRED_API_KEY already available in environment

2. **Long-term**: Research correct BLS JOLTS series IDs and document
   - Contact BLS support if needed
   - Update documentation with correct series IDs
   - Keep BLS as primary source, FRED as backup

3. **Alternative**: Use BLS bulk download parser
   - More complex implementation
   - No rate limits
   - Always most recent data

## Files Created

- ✅ `source.md` - Comprehensive 800+ line documentation (COMPLETE)
- ✅ `update.ts` - TypeScript/bun update script (NEEDS SERIES ID FIX)
- ✅ `data/README.md` - Data directory documentation (COMPLETE)
- ⚠️ API testing incomplete - series IDs need correction

## Series IDs to Verify

| Indicator | Old Format (Pre-2020?) | Status | Notes |
|-----------|------------------------|--------|-------|
| Quit Rate | JTS00000000QUR | ❌ Not found | Need new format |
| Job Openings Rate | JTS00000000JOR | ❌ Not found | Need new format |
| Hire Rate | JTS00000000HIR | ❌ Not found | Need new format |
| Layoff/Discharge Rate | JTS00000000LDR | ❌ Not found | Need new format |
| Total Separations Rate | JTS00000000TSR | ❌ Not found | Need new format |

## FRED Alternative (Known Working)

| Indicator | FRED Series ID | Status |
|-----------|----------------|--------|
| Quit Rate | JTSQUR | ✅ Available via FRED API |
| Job Openings Rate | JTSJOR | ✅ Available via FRED API |
| Hire Rate | JTSHIR | ✅ Available via FRED API |
| Layoff/Discharge Rate | JTSLD | ✅ Available via FRED API |
| Total Separations Rate | JTSTSR | ✅ Available via FRED API |

## Decision Required

**Should we:**
A) Fix BLS series IDs (maintain primary source authority)
B) Switch to FRED API (faster implementation, already working in DS-00004)
C) Use both (BLS primary, FRED fallback)

## Time Estimate

- Option A (Fix BLS): 30-60 minutes research + testing
- Option B (Switch to FRED): 15-20 minutes (copy existing pattern)
- Option C (Both): 45-75 minutes

## Contact for Help

- BLS Developer Support: blsdata_staff@bls.gov
- BLS JOLTS Contact: https://www.bls.gov/jlt/contact.htm
