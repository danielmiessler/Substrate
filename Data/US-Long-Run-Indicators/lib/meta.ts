// lib/meta.ts — frozen provenance for every series in this dataset: name, unit, publisher, source
// URLs, and the method-and-caveats note. Seeded from the usstats.io data file whose every value was
// primary-verified across the site's v1–v5 builds (see research/us-long-run-indicators-2026-08);
// hand-maintained here from now on. update.ts attaches these to the fetched values.
export type SeriesMeta = { name: string; unit: string; source: string; sourceUrl: string; historicalSourceUrls?: string[]; note: string; goodDirection?: "up" | "down" | "neutral" };
export const META: Record<string, SeriesMeta> = {
  "business": {
    "name": "New Business Applications",
    "unit": "applications per year",
    "source": "FRED BABATOTALSAUS",
    "sourceUrl": "https://fred.stlouisfed.org/series/BABATOTALSAUS",
    "note": "Census Business Formation Statistics; tracking began July 2004, so the series starts 2005. Partial years excluded.",
    "goodDirection": "up"
  },
  "violent": {
    "name": "Violent Crime Rate",
    "unit": "offenses per 100,000 people",
    "source": "FBI Crime Data Explorer, reported violent crime",
    "sourceUrl": "https://cde.ucr.cjis.gov/",
    "historicalSourceUrls": [
      "https://ucr.fbi.gov/crime-in-the-u.s/1995/95sec2.pdf",
      "https://ucr.fbi.gov/crime-in-the-u.s/2010/crime-in-the-u.s.-2010/tables/10tbl01.xls"
    ],
    "note": "Reported offenses per 100k. 2021 dip partly reflects the NIBRS reporting transition. 1976-1990 from FBI Crime in the United States 1995 Table 1 (UCR national estimates); 1991-1999 from the CIUS 2010 edition Table 1 (later revisions; overlap with the 1995 edition agrees within 0.3). LINEAGE SEAM at 2000: pre-2000 values are UCR estimated rates, 2000+ are FBI CDE reported rates — the two methodologies differ (UCR-estimated 2000 was 506.5 vs CDE-reported 534.4), so the 1999-2000 step is not a like-for-like change."
  },
  "property": {
    "name": "Property Crime Rate",
    "unit": "offenses per 100,000 people",
    "source": "FBI Crime Data Explorer, reported property crime",
    "sourceUrl": "https://cde.ucr.cjis.gov/",
    "historicalSourceUrls": [
      "https://ucr.fbi.gov/crime-in-the-u.s/1995/95sec2.pdf",
      "https://ucr.fbi.gov/crime-in-the-u.s/2010/crime-in-the-u.s.-2010/tables/10tbl01.xls"
    ],
    "note": "Reported offenses per 100k. 2021 dip partly reflects the NIBRS reporting transition. Same sourcing and lineage seam as the violent-crime series: 1976-1990 CIUS 1995 Table 1, 1991-1999 CIUS 2010 Table 1 (UCR estimates); 2000+ are CDE reported rates."
  },
  "debt": {
    "name": "Revolving Consumer Credit",
    "unit": "billions of dollars, year-end",
    "source": "FRED REVOLSL",
    "sourceUrl": "https://fred.stlouisfed.org/series/REVOLSL",
    "note": "Fed G.19 revolving credit (overwhelmingly credit cards), nominal; current year shows latest month. FRED serves millions; converted to billions.",
    "goodDirection": "down"
  },
  "unemployment": {
    "name": "Unemployment Rate",
    "unit": "percent, annual average",
    "source": "FRED UNRATE",
    "sourceUrl": "https://fred.stlouisfed.org/series/UNRATE",
    "note": "BLS U-3 unemployment rate, annual average of monthly figures.",
    "goodDirection": "down"
  },
  "laborforce": {
    "name": "Labor Force Participation",
    "unit": "percent, annual average",
    "source": "FRED CIVPART",
    "sourceUrl": "https://fred.stlouisfed.org/series/CIVPART",
    "note": "Share of the civilian population 16+ working or looking for work.",
    "goodDirection": "up"
  },
  "gdpGrowth": {
    "name": "Real GDP Growth",
    "unit": "percent per year",
    "source": "FRED A191RL1A225NBEA",
    "sourceUrl": "https://fred.stlouisfed.org/series/A191RL1A225NBEA",
    "note": "BEA real GDP, annual percent change.",
    "goodDirection": "up"
  },
  "inflation": {
    "name": "CPI Inflation",
    "unit": "percent per year",
    "source": "FRED CPIAUCSL",
    "sourceUrl": "https://fred.stlouisfed.org/series/CPIAUCSL",
    "note": "CPI-U year-over-year change; partial years compare matching months.",
    "goodDirection": "down"
  },
  "income": {
    "name": "Real Median Household Income",
    "unit": "2024 dollars",
    "source": "FRED MEHOINUSA672N",
    "sourceUrl": "https://fred.stlouisfed.org/series/MEHOINUSA672N",
    "note": "Census/BLS, inflation-adjusted; published with a one-year lag.",
    "goodDirection": "up"
  },
  "homePrice": {
    "name": "Median Home Sale Price",
    "unit": "dollars, annual average",
    "source": "FRED MSPUS",
    "sourceUrl": "https://fred.stlouisfed.org/series/MSPUS",
    "note": "Census/HUD median sales price of houses sold, nominal.",
    "goodDirection": "neutral"
  },
  "mortgage": {
    "name": "30-Year Mortgage Rate",
    "unit": "percent, annual average",
    "source": "FRED MORTGAGE30US",
    "sourceUrl": "https://fred.stlouisfed.org/series/MORTGAGE30US",
    "note": "Freddie Mac Primary Mortgage Market Survey.",
    "goodDirection": "neutral"
  },
  "gas": {
    "name": "Regular Gasoline Price",
    "unit": "dollars per gallon, annual average",
    "source": "FRED GASREGW",
    "sourceUrl": "https://fred.stlouisfed.org/series/GASREGW",
    "note": "EIA weekly US regular retail price, nominal.",
    "goodDirection": "down"
  },
  "saving": {
    "name": "Personal Saving Rate",
    "unit": "percent of disposable income",
    "source": "FRED PSAVERT",
    "sourceUrl": "https://fred.stlouisfed.org/series/PSAVERT",
    "note": "BEA personal saving as share of disposable personal income.",
    "goodDirection": "up"
  },
  "debtService": {
    "name": "Household Debt Service Ratio",
    "unit": "percent of disposable income",
    "source": "FRED TDSP",
    "sourceUrl": "https://fred.stlouisfed.org/series/TDSP",
    "note": "Fed: required debt payments as share of disposable income.",
    "goodDirection": "down"
  },
  "fedDebt": {
    "name": "Federal Debt to GDP",
    "unit": "percent of GDP",
    "source": "FRED GFDEGDQ188S",
    "sourceUrl": "https://fred.stlouisfed.org/series/GFDEGDQ188S",
    "note": "Total public debt as percent of GDP, annual average of quarters.",
    "goodDirection": "down"
  },
  "fedFunds": {
    "name": "Federal Funds Rate",
    "unit": "percent, annual average",
    "source": "FRED FEDFUNDS",
    "sourceUrl": "https://fred.stlouisfed.org/series/FEDFUNDS",
    "note": "Effective federal funds rate.",
    "goodDirection": "neutral"
  },
  "marriage": {
    "name": "Marriage Rate",
    "unit": "marriages per 1,000 population",
    "source": "CDC/NCHS National Vital Statistics System",
    "sourceUrl": "https://www.cdc.gov/nchs/nvss/marriage-divorce.htm",
    "historicalSourceUrls": [
      "https://www.cdc.gov/nchs/data/hestat/marriage_rate_2018/marriage_rate_2018.pdf"
    ],
    "note": "CDC/NCHS NVSS national table, per 1,000 total US population. 2023 latest; table titled Provisional; 2013-14 exclude Georgia, 2006 excludes Louisiana. 1970-1999 from NCHS Health E-Stat 'Marriage Rates in the United States, 1900-2018' (Curtin & Sutton 2020); its 2000-2018 overlap matches the NVSS table exactly."
  },
  "divorce": {
    "name": "Divorce Rate",
    "unit": "divorces per 1,000 population (reporting states)",
    "source": "CDC/NCHS National Vital Statistics System",
    "sourceUrl": "https://www.cdc.gov/nchs/nvss/marriage-divorce.htm",
    "historicalSourceUrls": [
      "https://stacks.cdc.gov/view/cdc/112483/cdc_112483_DS1.pdf",
      "https://www.cdc.gov/nchs/data/mvsr/mv41_12.pdf",
      "https://www.cdc.gov/nchs/data/mvsr/mv44_12.pdf",
      "https://www.cdc.gov/nchs/data/mvsr/mv46_12.pdf",
      "https://www.cdc.gov/nchs/data/nvsr/nvsr48/nvs48_19.pdf"
    ],
    "note": "CDC/NCHS NVSS. Rate is per 1,000 population of reporting areas only — California among others excluded most years (2017-2023 exclude CA, HI, IN, MN, NM). 2023 latest. 1970-1990 final rates from NCHS Advance Report of Final Divorce Statistics 1989-90 (MVSR 43-9S Table 1, all states); 1991-1996 NCHS provisional annual rates (MVSR annual summaries; NCHS ceased final divorce statistics in 1996); 1997-1999 rates exclude CA, CO, IN, LA (46 reporting states + DC) — the same reporting-states lineage the 2000+ series continues."
  },
  "fertility": {
    "name": "Total Fertility Rate",
    "unit": "births per woman (total fertility rate)",
    "source": "CDC/NCHS, Births: Final Data",
    "sourceUrl": "https://www.cdc.gov/nchs/data/nvsr/nvsr75/nvsr75-02.pdf",
    "historicalSourceUrls": [
      "https://www.cdc.gov/nchs/data/nvsr/nvsr66/nvsr66_01.pdf"
    ],
    "note": "NCHS TFR (stored per 1,000 women; 2,100 = replacement). 2010-2024 from Births: Final Data for 2024 (NVSR 75-2); 2000-2009 from Births: Final Data for 2015 revised rates; splice verified identical on 2010-2015 overlap. 2024 is final. 1970-1999 from Births: Final Data for 2015 (NVSR 66-1) Table 4, the census-revised TFR series spanning 1970-2015; its 2000 value matches the shipped series exactly, so the splice is a single lineage. Stored here per woman; NCHS publishes the rate per 1,000 women."
  },
  "happiness": {
    "name": "Happiness",
    "unit": "Cantril ladder score (0-10)",
    "source": "World Happiness Report (Gallup World Poll)",
    "sourceUrl": "https://data.worldhappiness.report/country/USA",
    "note": "World Happiness Report / Gallup World Poll, US single-year national average life evaluation by data year (not the 3-year ranking average). Series begins 2006; 2025 published in WHR 2026. 3-year means reproduce the published Figure 2.1 values exactly."
  },
  "homeownership": {
    "name": "Homeownership Rate",
    "unit": "percent of households, annual average",
    "source": "FRED RHORUSQ156N",
    "sourceUrl": "https://fred.stlouisfed.org/series/RHORUSQ156N",
    "note": "Census Housing Vacancies and Homeownership survey.",
    "goodDirection": "up"
  },
  "suicide": {
    "name": "Suicide Rate",
    "unit": "age-adjusted deaths per 100,000",
    "source": "CDC/NCHS, age-adjusted",
    "sourceUrl": "https://www.cdc.gov/nchs/data/databriefs/db433-tables.pdf",
    "note": "CDC/NCHS NVSS mortality files (ICD-10 U03, X60-X84, Y87.0), age-adjusted to the 2000 standard population. 2000-2001 from Data Brief 433, 2002-2022 from Data Brief 509, 2023 from Data Brief 541; all overlapping years identical across briefs. 2023 latest final. 2024 final (13.7) from Data Brief 548."
  },
  "overdose": {
    "name": "Drug Overdose Deaths",
    "unit": "age-adjusted deaths per 100,000",
    "source": "CDC/NCHS, age-adjusted",
    "sourceUrl": "https://www.cdc.gov/nchs/data/databriefs/db428-tables.pdf",
    "note": "CDC/NCHS NVSS mortality files (ICD-10 X40-X44, X60-X64, X85, Y10-Y14), age-adjusted. 2000-2002 from Data Brief 428, 2003-2023 from Data Brief 522; the 2003-2020 overlap is identical across briefs. 2023 latest final. 2024 final (23.1) from Data Brief 549 — a 26% single-year drop."
  },
  "lifeExpectancy": {
    "name": "Life Expectancy at Birth",
    "unit": "years at birth, both sexes",
    "source": "CDC/NCHS National Vital Statistics",
    "sourceUrl": "https://www.cdc.gov/nchs/data/nvsr/nvsr72/nvsr72-12.pdf",
    "note": "1970-1999 annual from US Life Tables 2021 (NVSR 72-12) Table 19; CDC/NCHS. 2000-2018 from Health, United States 2019 Table 4 (curated revised trend; the Socrata dataset is defective at 2003-2004 and was corrected against Table 4); 2011 from NVSR 63-3; 2019-2024 from Data Briefs 395/456/548. 2024 final = 79.0. Table 19 independently confirms 2000-2003 including the 77.2 correction."
  },
  "smoking": {
    "name": "Adult Smoking Rate",
    "unit": "percent of adults, current cigarette smokers (crude)",
    "source": "CDC National Health Interview Survey",
    "sourceUrl": "https://data.cdc.gov/resource/gj3i-hsbz.json",
    "note": "NHIS crude prevalence, adults 18+. 2000-2018 from the annual MMWR smoking-prevalence series; 2019-2024 from the NCHS Data Query System (NHIS Adult Summary Health Statistics). NHIS was redesigned in 2019, so the two legs are not strictly comparable across that boundary."
  },
  "underemployment": {
    "name": "Underemployment (U-6)",
    "unit": "percent, annual average",
    "source": "FRED U6RATE",
    "sourceUrl": "https://fred.stlouisfed.org/series/U6RATE",
    "note": "BLS U-6: unemployed plus marginally attached plus part-time for economic reasons. Published from 1994.",
    "goodDirection": "down"
  },
  "productivity": {
    "name": "Labor Productivity",
    "unit": "index, 2017 = 100",
    "source": "FRED OPHNFB",
    "sourceUrl": "https://fred.stlouisfed.org/series/OPHNFB",
    "note": "BLS nonfarm business output per hour, annual average of quarters.",
    "goodDirection": "up"
  },
  "manufacturing": {
    "name": "Manufacturing Jobs",
    "unit": "employees, annual average",
    "source": "FRED MANEMP",
    "sourceUrl": "https://fred.stlouisfed.org/series/MANEMP",
    "note": "BLS payroll employment in manufacturing, annual average of monthly figures. FRED serves thousands; converted to persons.",
    "goodDirection": "up"
  },
  "studentDebt": {
    "name": "Student Loan Debt",
    "unit": "billions of dollars, year-end",
    "source": "FRED SLOAS",
    "sourceUrl": "https://fred.stlouisfed.org/series/SLOAS",
    "note": "Fed G.19 student loans owned and securitized, nominal. The series was discontinued after 2024 Q4, so it ends there. FRED serves millions; converted to billions.",
    "goodDirection": "down"
  },
  "stocks": {
    "name": "Stock Market (NASDAQ)",
    "unit": "index, annual average of daily closes",
    "source": "FRED NASDAQCOM",
    "sourceUrl": "https://fred.stlouisfed.org/series/NASDAQCOM",
    "note": "NASDAQ Composite, annual average of daily closing values, nominal and not dividend-adjusted.",
    "goodDirection": "up"
  },
  "rent": {
    "name": "Rent",
    "unit": "CPI index, 1982-84 = 100",
    "source": "FRED CUUR0000SEHA",
    "sourceUrl": "https://fred.stlouisfed.org/series/CUUR0000SEHA",
    "note": "BLS CPI-U rent of primary residence, not seasonally adjusted. Shown as the published index; the row's change is the cumulative rise over the window.",
    "goodDirection": "down"
  },
  "electricity": {
    "name": "Electricity Price",
    "unit": "dollars per kilowatt-hour",
    "source": "FRED APU000072610",
    "sourceUrl": "https://fred.stlouisfed.org/series/APU000072610",
    "note": "BLS average consumer price, US city average, nominal.",
    "goodDirection": "down"
  },
  "housingStarts": {
    "name": "Housing Starts",
    "unit": "units per year",
    "source": "FRED HOUST",
    "sourceUrl": "https://fred.stlouisfed.org/series/HOUST",
    "note": "Census new privately-owned housing units started, annual average of monthly seasonally-adjusted annual rates. FRED serves thousands; converted to units.",
    "goodDirection": "up"
  },
  "tuition": {
    "name": "College Tuition",
    "unit": "CPI index, 1982-84 = 100",
    "source": "FRED CUSR0000SEEB",
    "sourceUrl": "https://fred.stlouisfed.org/series/CUSR0000SEEB",
    "note": "BLS CPI-U tuition, other school fees and childcare. Shown as the published index; the row's change is the cumulative rise over the window.",
    "goodDirection": "down"
  },
  "gini": {
    "name": "Income Inequality (Gini)",
    "unit": "Gini index, 0-100",
    "source": "FRED SIPOVGINIUSA",
    "sourceUrl": "https://fred.stlouisfed.org/series/SIPOVGINIUSA",
    "note": "World Bank Gini index for the United States, built on Census income data. Higher means more unequal.",
    "goodDirection": "down"
  },
  "topWealth": {
    "name": "Top 1% Wealth Share",
    "unit": "percent of household net worth",
    "source": "FRED WFRBST01134",
    "sourceUrl": "https://fred.stlouisfed.org/series/WFRBST01134",
    "note": "Fed Distributional Financial Accounts, share of total household net worth held by the top 1 percent, annual average of quarters. Published from 1989.",
    "goodDirection": "down"
  },
  "poverty": {
    "name": "Poverty Rate",
    "unit": "percent of people, all ages",
    "source": "FRED PPAAUS00000A156NCEN",
    "sourceUrl": "https://fred.stlouisfed.org/series/PPAAUS00000A156NCEN",
    "note": "Census SAIPE estimated percent of people of all ages in poverty. Published from 1989.",
    "goodDirection": "down"
  },
  "deficit": {
    "name": "Federal Deficit",
    "unit": "percent of GDP (negative = deficit)",
    "source": "FRED FYFSGDA188S",
    "sourceUrl": "https://fred.stlouisfed.org/series/FYFSGDA188S",
    "note": "Federal surplus or deficit as a percent of GDP; negative values are deficits.",
    "goodDirection": "up"
  },
  "co2": {
    "name": "CO2 Emissions",
    "unit": "million metric tons per year",
    "source": "EIA Monthly Energy Review, Table 11.1",
    "sourceUrl": "https://www.eia.gov/totalenergy/data/monthly/#environment",
    "note": "Total US energy-related carbon dioxide emissions, all fuels and all sectors. Energy emissions only — agriculture, industrial process, and land-use emissions are not counted.",
    "goodDirection": "down"
  },
  "renewables": {
    "name": "Renewable Share of Energy",
    "unit": "percent of total US energy consumption",
    "source": "EIA Monthly Energy Review, Tables 1.1 and 10.1",
    "sourceUrl": "https://www.eia.gov/totalenergy/data/monthly/#renewable",
    "note": "Total renewable energy consumption divided by total primary energy consumption, both as published by EIA. Covers all energy use, not electricity alone, so it sits below the widely-quoted renewable share of the power grid. Includes hydro, wind, solar, biomass, and geothermal.",
    "goodDirection": "up"
  },
  "homicide": {
    "name": "Homicide Rate",
    "unit": "offenses per 100,000 people",
    "source": "FBI Crime Data Explorer, reported homicide",
    "sourceUrl": "https://cde.ucr.cjis.gov/",
    "note": "FBI CDE reported homicide offenses, monthly rates per 100,000 summed to an annual rate. Reported figures, not the retired UCR estimates, so the series starts at 2000 and carries the same 2021 NIBRS-transition caveat as the other crime rows. Partial years are excluded.",
    "goodDirection": "down"
  },
  "unmarriedBirths": {
    "name": "Births to Unmarried Mothers",
    "unit": "percent of all US births",
    "source": "CDC/NCHS National Vital Statistics System",
    "sourceUrl": "https://data.cdc.gov/d/g6qk-ngsf",
    "note": "Births to unmarried women (NCHS, all age groups summed) divided by total US births (NCHS births and general fertility rates). Both numerator and denominator are NCHS-published counts; the ratio is the only arithmetic.",
    "goodDirection": "neutral"
  },
  "healthSpending": {
    "name": "Health Spending",
    "unit": "percent of GDP",
    "source": "CMS National Health Expenditure Accounts, via CDC/NCHS Data Query System",
    "sourceUrl": "https://data.cdc.gov/d/s57w-7gbe",
    "note": "Total US national health expenditures as a share of gross domestic product — public and private spending combined.",
    "goodDirection": "down"
  },
  "temperature": {
    "name": "US Average Temperature",
    "unit": "degrees Fahrenheit, annual mean",
    "source": "NOAA NCEI, Climate at a Glance",
    "sourceUrl": "https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/national/time-series",
    "note": "Contiguous US January–December average temperature, as published by NOAA in degrees Fahrenheit. The 48 contiguous states only; Alaska and Hawaii are separate NOAA regions.",
    "goodDirection": "neutral"
  },
  "popGrowth": {
    "name": "Population Growth",
    "unit": "percent per year",
    "source": "FRED B230RC0A052NBEA",
    "sourceUrl": "https://fred.stlouisfed.org/series/B230RC0A052NBEA",
    "note": "BEA/Census midyear US resident population, year-over-year percent change.",
    "goodDirection": "up"
  },
  "incarceration": {
    "name": "Imprisonment Rate",
    "unit": "percent of US residents in state or federal prison",
    "source": "BJS National Prisoner Statistics",
    "sourceUrl": "https://bjs.ojp.gov/library/publications/prisoners-2023-statistical-tables",
    "historicalSourceUrls": [
      "https://bjs.ojp.gov/library/publications/prisoners-2020-statistical-tables"
    ],
    "note": "State and federal prisoners serving sentences of more than a year, as a percent of US residents of all ages (BJS publishes the rate per 100,000; this is that rate divided by 1,000). Prisons only — local jails, which hold several hundred thousand more people, are counted separately by BJS. History from Prisoners in 2020 (Appendix Table 1), recent years from Prisoners in 2023 (Table 5); the overlapping years agree.",
    "goodDirection": "down"
  },
  "turnout": {
    "name": "Voter Turnout",
    "unit": "percent of voting-age population, presidential elections",
    "source": "Census Bureau, CPS Voting and Registration, Table A-1",
    "sourceUrl": "https://www.census.gov/data/tables/time-series/demo/voting-and-registration/voting-historical-time-series.html",
    "note": "Share of the voting-age population who told the Census they voted, presidential years only. Self-reported, so it runs several points above turnout counted from ballots; the trend, not the level, is the signal. The Census's citizen-only rate runs higher still but only exists from 1978, so this series uses the voting-age-population measure, which covers every election back to 1964. Midterms run structurally lower and are excluded.",
    "goodDirection": "up"
  },
  "attainment": {
    "name": "College Attainment",
    "unit": "percent of adults 25 and over",
    "source": "Census Bureau, CPS Historical Table A-2",
    "sourceUrl": "https://www.census.gov/data/tables/time-series/demo/educational-attainment/cps-historical-time-series.html",
    "note": "Share of people 25 and over who have completed four or more years of college. The question changed in 1992 from years completed to degree received, so figures before and after that seam are close but not identical in definition.",
    "goodDirection": "up"
  },
  "trustGov": {
    "name": "Trust in Government",
    "unit": "percent trusting the federal government",
    "source": "Pew Research Center, Public Trust in Government 1958-2025",
    "sourceUrl": "https://www.pewresearch.org/politics/2024/06/24/public-trust-in-government-1958-2024/",
    "note": "Percent saying they trust the federal government to do what is right just about always or most of the time. Pew's long series stitches its own surveys to ANES, Gallup, CBS/NYT, and others; years with no survey are absent rather than interpolated. Read from Pew's published series 2026-08-18; there is no machine-readable endpoint, so these values are checked in and re-verified on each data refresh.",
    "goodDirection": "up"
  },
  "payrollWomen": {
    "name": "Women's Share of Payroll Jobs",
    "unit": "percent of all nonfarm payroll jobs held by women",
    "source": "BLS Current Employment Statistics, via FRED (CES0000000010 ÷ PAYEMS)",
    "sourceUrl": "https://fred.stlouisfed.org/series/CES0000000010",
    "historicalSourceUrls": [
      "https://fred.stlouisfed.org/series/PAYEMS"
    ],
    "note": "Women employees as a share of all employees on total nonfarm payrolls (BLS Current Employment Statistics, seasonally adjusted, monthly since 1964; annual value is the mean of the months). Payroll jobs, not people: multiple jobholders are counted at each job, and farm work and self-employment are excluded. Women first crossed 50% in the monthly data in June 2009 (recession-driven, reversed May 2010), again from November 2019 until the pandemic (April 2020), touched it in August 2025, and crossed again in February 2026 — the first sustained majority.",
    "goodDirection": "neutral"
  },
  "payrollMen": {
    "name": "Men's Share of Payroll Jobs",
    "unit": "percent of all nonfarm payroll jobs held by men",
    "source": "BLS Current Employment Statistics, via FRED (100 − women's share)",
    "sourceUrl": "https://fred.stlouisfed.org/series/PAYEMS",
    "note": "Complement of the women's-share series: 100 minus women's percent of total nonfarm payroll employment. Rendered as the second line of the same chart.",
    "goodDirection": "neutral"
  }
};
export const KEYS = Object.keys(META);
