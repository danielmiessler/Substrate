# Candidate dispositions

Every candidate the five lanes evaluated, with what happened to it. SHIP = in `Data/US-Societal-Health/series/`. CUT rows name the filter rule that failed (see METHODOLOGY.md) so a future pass can re-test the premise.

## Substance use

| Candidate | Disposition | Reason |
|---|---|---|
| NSDUH marijuana use, past year / past month (12+) | SHIP (`marijuanaPastYear`, `marijuanaPastMonth`) | 2002→2025; the 2020 gap and 2021 redesign seam are disclosed |
| NSDUH past-month illicit drug use (12+) | CUT | rule 3: comparable only 2015–2019 + 2021–2025 (two redesigns) |
| NSDUH prescription pain-reliever misuse; substance use disorder | CUT | rule 3/6: same short windows, plus DSM-IV→DSM-5 break |
| Monitoring the Future, 12th-grade past-30-day marijuana / alcohol / binge / cigarettes (via NCHS DQS) | SHIP (`teenMarijuana`, `teenAlcohol`, `teenBingeDrinking`, `teenCigarettes`) | 1980→2024 |
| Monitoring the Future past-year use 1975→ (MTF site) | CUT | rule 5: monitoringthefuture.org blocks every fetcher (Cloudflare 403) |
| NIAAA apparent per-capita ethanol | SHIP (`alcoholPerCapita`) | 1850→2023, PDF Table 1 |
| NCHS alcohol-induced deaths | CUT | rule 5: no machine path (cdc.gov / WONDER / stacks 403); NIAAA cirrhosis mortality offered as stand-in, not taken |
| BRFSS binge / heavy drinking | CUT | rule 2/6: the national row is a median of states; 2006 and 2011 breaks |
| CDC opioid dispensing rate; vaping | CUT | rule 5 / rule 3 |

## Health access and mortality by age

| Candidate | Disposition | Reason |
|---|---|---|
| NHIS nonreceipt of needed prescription drugs due to cost | SHIP, flagged (`rxCostBarrier`) | 1997→2019; the publisher retired the item at the 2019 redesign — shown ending at 2019 with the replacement adult item quoted in the note (rule 4 exception, explicit) |
| NHIS uninsured / Census CPS uninsured | SHIP via Census ACS (`uninsured`) | 2008→2024, 2020 blank (experimental year) |
| Suicide rates by age group (NCHS) | SHIP (`suicide10to14`, `suicide15to24`, `suicide25to44`, `suicide45to64`, `suicide65plus`) | 1950→2024, two NCHS tables spliced with a machine-checked 2018 overlap |
| Firearm death rate | CUT | rule 5/4: NCHS injury table ends 2016; VSRR provisional starts 2019; CDC WONDER unreachable |
| Adult obesity | CUT | rule 2: NHANES publishes multi-year windows; BRFSS is self-report with a 2011 break |
| Depression / psychological distress | CUT | rule 3: series too short or broken at 2019 |
| Infant mortality | SHIP (`infantMortality`) | 1915→2024, three NCHS tables spliced, overlaps agree |
| Maternal mortality | CUT | rule 6: 2018 method change, earlier years not comparable |
| Food insecurity (ERS) | SHIP (`foodInsecurity`) | 2001→2024 |
| Homelessness (HUD PIT) | CUT | rule 5: huduser.gov bot challenge, hudexchange 404 |
| Traffic fatality rate (NHTSA) | SHIP (`trafficDeaths`) | 1921→2024 |
| Teen birth rate | CUT (for now) | rule 5: machine path has a 2020–2023 gap that needs four hand-read NVSR values; revisit |
| Child poverty | SHIP (`childPoverty`) | 1959→2024 |

## Trust in institutions

| Candidate | Disposition | Reason |
|---|---|---|
| Gallup Confidence in Institutions, 15 items | SHIP (`gallup*`) | 1973/1993→2026, page tables |
| Gallup confidence in higher education | CUT | rule 3: six polls since 2015 — GSS confidence in education (1973→) stands in |
| Gallup confidence in large technology companies; science | CUT | rule 3: 2020→ / three points |
| Gallup trust in mass media | SHIP (`trustMedia`) | 1972/1997→2025 |
| GSS confidence items, 13 institutions | SHIP (`conf*`) | 1973→2024, computed from NORC microdata |
| ANES trust in government (direct) | CUT | rule 5: electionstudies.org 403 / login; Pew's compiled series already powers the site's trust-in-government row |
| Gallup honesty/ethics of professions | not taken | passes, but overlaps the confidence set; candidate for a later batch |
| Pew confidence in scientists | CUT | rule 3: 2016→ |

## Happiness and optimism

| Candidate | Disposition | Reason |
|---|---|---|
| GSS very happy; life exciting; satisfied with finances; finances better; better than parents; kids better off; hard work gets ahead; most people can be trusted | SHIP (8 keys) | 1972/1994→2024, computed from NORC microdata with WTSSPS |
| GSS GOODLIFE | CUT | rule 2: irregular ISSP-module waves |
| Michigan SCA better-off-than-a-year-ago; expect-better-off-next-year | SHIP (`betterOffThanYearAgo`, `expectBetterOffNextYear`) | 1978→2025 |
| Gallup satisfaction with the way things are going in the U.S. | SHIP (`satisfiedWithCountry`) | 1979→2026, annual mean of readings (disclosed) |
| Gallup satisfaction with personal life | CUT | rule 2: irregular, multi-year gaps |
| Gallup Cantril current life / future life (Well-Being Index) | SHIP (`lifeRatedHigh`, `optimismFutureLife`) | 2009→2026 — 18 points, kept on judgment as the direct "life will be better" item |
| World Happiness Report single-year US life evaluation | not taken here | the site already carries it from WHR's own data; the per-year endpoint is undocumented and the durable file is 3-year averages |
| Pew "children better off than parents"; Gallup "next generation better life" | CUT | rule 3/4: four comparable points / last asked 2022 |

## Household financial health and other societal indicators

| Candidate | Disposition | Reason |
|---|---|---|
| Credit card delinquency (Fed Board 30+, FRED); serious delinquency (NY Fed 90+) | SHIP (`creditCardDelinquency`, `creditCardSeriousDelinquency`) | 1991→ / 2003→ |
| Consumer bankruptcies (NY Fed CCP) | SHIP (`bankruptcies`) | 2003→2025; US Courts F-2 is .xls before 2009 and was not used |
| Fed SHED $400 emergency | CUT | rule 3: 2013→ |
| SCF median net worth | CUT | rule 2: triennial |
| SNAP participation (FNS) ÷ population | SHIP (`snapShare`) | 1969→2025 |
| SSDI beneficiaries | CUT | rule 5: ssa.gov 403 |
| Prime-age employment-population ratio | SHIP (`primeAgeEmployment`) | 1948→ |
| Union membership (BLS API) | SHIP (`unionMembership`) | 1983→2025 |
| Real median weekly earnings; real minimum wage | not taken | pass, but overlap the site's income rows; later batch |
| HS status dropout | CUT | rule 4: latest 2022 |
| NAEP long-term trend | CUT | rule 2: ~13 assessment years |
| Median age at first marriage; household size | not taken | pass, but Census ships them as .xls (no reader here yet) |
| Foreign-born share | CUT | rule 5: Census API requires a key |
| Volunteering; NICS background checks; veteran suicide | CUT | gapped / weak proxy / short |
