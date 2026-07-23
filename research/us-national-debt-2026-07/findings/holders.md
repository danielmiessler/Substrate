# Who Holds the US National Debt — Sourced Findings

**Compiled:** 2026-07-23 (all access dates 2026-07-23 unless noted)
**Rule:** every figure carries a source URL + as-of date. Primary sources preferred (Treasury FiscalData, TIC, CRS, SSA/OPM/DoD trustee reports, Federal Reserve).

Note on "latest": the most recent hard fiscal-year close is **September 30, 2025 (FY2025)** from Treasury's Monthly Statement of the Public Debt / Debt Position report. Foreign-holder detail is latest at **December 2025** (TIC, via CRS RS22331 updated 2026-04-22). Some secondary trackers cite ~$39T "as of March 2026" — that is the running Debt-to-the-Penny total, later than the FY2025 close.

---

## 1. Total gross debt split (FY2025, as of 2025-09-30)

Source: Treasury *Debt Position and Activity Report*, 2025-09-30 (extracted from `pd_debtposactrpt_202509.pdf`), consistent with the Monthly Statement of the Public Debt.
URL: https://treasurydirect.gov/files/government/public-debt-reports/pd/ · https://fiscaldata.treasury.gov/datasets/monthly-statement-public-debt/

| Component | Amount | % of gross |
|---|---|---|
| **Total public debt outstanding (gross)** | **$37,637,553M ≈ $37.64T** | 100% |
| Debt held by the public | $30,277,766M ≈ $30.28T | 80.45% |
| Intragovernmental holdings | $7,359,787M ≈ $7.36T | 19.55% |
| — Marketable | $29,714,713M ≈ $29.71T | 78.95% |
| — Nonmarketable | $7,922,840M ≈ $7.92T | 21.05% |
| — of which Savings Bonds | $150,989M | 0.40% |
| — of which GAS (Gov't Account Series, ≈ intragov) | $7,666,474M | 20.37% |

Average interest rate on the debt: **3.363%** (2025-09-30, same source).

Running total later in FY2026 is higher: CRS and PGPF both frame it as **~$39T "as of March 2026"** (Debt-to-the-Penny). PGPF: debt held by public ~80%, intragovernmental ~20%. Source: https://www.pgpf.org/article/the-federal-government-has-borrowed-trillions-but-who-owns-all-that-debt/ (as of 2026-03-17).

---

## 2. Intragovernmental holdings — which trust funds (~$7.36T total, 2025-09-30)

The intragovernmental $7.36T is the Government Account Series (GAS) special-issue Treasuries held by federal trust funds. Largest holders:

| Trust fund | Reserves / holdings | As-of | Source |
|---|---|---|---|
| Social Security **OASI** | $2,338.3B (often cited "$2.4T ≈ 33% of intragov") | end-2025 | SSA 2026 Trustees / https://www.ssa.gov/oact/trsum/ |
| Social Security **DI** | $223.0B | end-2025 | SSA 2026 Trustees / https://www.ssa.gov/oact/trsum/ |
| **Military Retirement Fund** | $1,604.7B total assets (≈$1.5T in Treasuries) | 2024-09-30 (FY2024 audited) | DoD FY2024 MRF AFR / https://comptroller.war.gov/Portals/45/Documents/afr/fy2024/DoD_Components/2024_AFR_MRF.pdf |
| **Civil Service Retirement & Disability Fund (CSRDF)** | ~$1.1T | FY2024 est. | CRS 98-972 / https://www.congress.gov/crs-product/98-972 ; OPM FY2025 CSRDF report / https://www.opm.gov/about-us/reports-publications/agency-reports/fy-2025-csrdf-annual-report.pdf |
| Medicare **HI** (Hospital Insurance) | $255.7B | end-2025 | SSA/CMS 2026 Trustees / https://www.ssa.gov/oact/trsum/ |
| Medicare **SMI** (Supplementary Medical Insurance) | $168.4B | end-2025 | SSA/CMS 2026 Trustees / https://www.ssa.gov/oact/trsum/ |
| Others (FERS, Unemployment Trust Fund, Highway Trust Fund, etc.) | remainder to $7.36T | 2025 | PGPF / CBO 56541 https://www.cbo.gov/publication/56541 |

PGPF direct quote: "the largest holder of intragovernmental debt is the Social Security Old-Age and Survivors Insurance Trust Fund, which holds $2.4 trillion (33 percent of intragovernmental debt)." Source: PGPF (above).

**Flag/caveat:** SSA "reserves" (asset balances) are the standard proxy for each fund's Treasury holdings but are measured at end-2025; the MRF and CSRDF figures are FY2024 audited/estimated (latest clean numbers). A search result claiming MRF held "$2.086T" appears to conflate cumulative purchases with the balance — the audited FY2024 total-assets figure is $1,604.7B and should be used.

---

## 3. Federal Reserve (SOMA) Treasury holdings — now vs QE peak

| Measure | Amount | As-of | Source |
|---|---|---|---|
| SOMA **total** securities held outright | $6.27T | 2026-03-25 | PrimeRates Fed balance-sheet tracker (NY Fed data) / https://primerates.com/primerate/fed-balance-sheet/ |
| — Treasury notes & bonds | $3.59T (57.2% of SOMA) | 2026-03-25 | same |
| — Treasury bills | $381.6B | 2026-03-25 | same |
| — TIPS | $288.7B | 2026-03-25 | same |
| — Treasury notes & bonds | $3,605.8B | 2026-07-15 | CEIC (Fed H.4.1) / https://www.ceicdata.com/en/united-states/system-open-market-account-holdings-of-domestic-securities |
| — Treasury bills | $505.9B | 2026-07-15 | same |
| Fed total Treasury holdings (PGPF's figure) | ~$4.6T (12.6% of total debt) | ~2024-25 | PGPF / economicsinsider (below) |

**QE peak narrative:** The Fed roughly doubled its Treasury holdings during COVID (2020→2022) and has been shrinking the balance sheet ("QT") since **June 2022**. Source: PGPF (above). The Fed's total balance sheet peaked ~$8.97T in April 2022; its Treasury component peaked ~$5.7T mid-2022 and has since fallen to the ~$4.2–4.6T range above.
**Flag:** the exact SOMA-Treasury peak (~$5.7T) is widely reported but I did not pin it to a single primary Fed release in this pass — treat as approximate. Current SOMA component figures (2026-03-25, 2026-07-15) are sourced.

---

## 4. Domestic private holders of publicly-held debt

Best breakdown (dollar amounts) from PGPF, reproduced via economicsinsider; percentages of shifts from CRS/Fed Z.1 (Financial Accounts, Table L.210). Amounts are ~2024–2025.

| Holder | Amount | Share | Source |
|---|---|---|---|
| Federal Reserve | ~$4.6T | 12.6% | PGPF via https://economicsinsider.com/who-owns-us-debt/ |
| Mutual funds | ~$4.5T | 12.4% | same |
| Banks / depository institutions | ~$1.9T | 5.1% | same |
| State & local governments | ~$1.7T | 4.6% | same |
| Pension funds (public + private, combined) | $955.7B | ~2.6% | same |
| Insurance companies | — | 2.2% | CRS/Fed Z.1 (below) |
| Individuals / household sector (incl. savings bonds) | — | ~10.3% | CRS/Fed Z.1 (below) |

**Share-shift trend (Fed Z.1 L.210, via CRS/CEPAL analysis, 2021→2025):**
- Mutual funds: 15.0% → **17.9%** (rising, strong inflows)
- Household/individual sector: 8.3% → **10.3%** (rising)
- Pension funds: 5.0% → **3.9%** (falling — higher rates improved funding ratios)
- Insurance companies: 2.4% → **2.2%** (falling)
Sources: CEPAL "Evolving trends in the ownership" https://www.cepal.org/sites/default/files/news/files/s2500563_en.pdf ; primary series Fed Z.1 Table L.210 https://www.federalreserve.gov/datadownload (guide: https://www.federalreserve.gov/apps/fof/Guide/z1_tables_description.pdf).

**Note:** stablecoin issuers have become a notable new marginal buyer of short-dated bills (2025). Source: CRS R48734 https://www.congress.gov/crs-product/R48734.

**Flag:** these are percentages of different bases in different sources (some % of total debt, some % of marketable/publicly-held). PGPF %s are of total gross debt; CRS/Z.1 share-shifts are of marketable Treasuries held by the public. Directionally consistent; do not sum across the two tables.

---

## 5. Foreign holders (TIC, latest December 2025)

Primary: Treasury TIC "Major Foreign Holders" (https://ticdata.treasury.gov/Publish/mfhhis01.txt — timed out on direct fetch; values below are from CRS RS22331, which tabulates TIC). CRS RS22331 "Foreign Holdings of Federal Debt," updated **2026-04-22**, data current as of **2026-03-19** for country table. URL: https://www.congress.gov/crs_external_products/RS/PDF/RS22331/RS22331.52.pdf

**Totals (December 2025), verbatim from CRS:**
- "As of December 2025, foreign holdings of federal debt totaled approximately **$9.2 trillion, or 31% of total U.S. publicly held debt ($30.1 trillion)**."
- "Foreign holdings can be divided into official (governmental) and private sources: **41.9% ($3.9 trillion)** … held by governmental sources, and the other **58.1% ($5.4 trillion)** … held by private investors."
- "Interest on the debt paid to foreigners in 2025 was **$282.4 billion**."
- Foreign share peaked at ~49% (2011) and has declined since as total debt outgrew foreign holdings.

**Top holders — CRS Table 2 (Dec 2025 vs Dec 2021), high confidence:**

| Rank | Country | Dec 2025 | % of foreign | Dec 2021 |
|---|---|---|---|---|
| 1 | Japan | $1,185.5B | 12.79% | $1,300.8B (16.81%) |
| 2 | United Kingdom | $866.0B | 9.34% | $649.3B (8.39%) |
| 3 | Mainland China | $683.5B | 7.37% | $1,040.3B (13.44%) |
| 4 | Belgium | $477.3B | 5.15% | $271.6B (3.51%) |
| 5 | Canada | $468.2B | 5.05% | — |
| 6 | Luxembourg | $435.1B | 4.69% | $327.8B (4.23%) |
| 7 | Cayman Islands | $421.2B | 4.54% | $262.8B (3.40%) |
| 8 | France | $368.9B | 3.98% | — |
| 9 | Ireland | $340.7B | 3.67% | $334.5B (4.32%) |

(Note: the Dec-2021 column ordering differs; blanks are where that country wasn't in the 2021 top-10.)

**Ranks 10–16 (medium confidence — from economicsinsider/Deena Zaidi citing TIC Dec 2025, not yet cross-checked to CRS table):**
Taiwan $310.6B · Switzerland $294.1B · Singapore $278.4B · Hong Kong $267.8B · Norway $208.1B · India $182.9B · Brazil $168.7B.
Sources: https://economicsinsider.com/top-15-largest-us-treasury-holders/ · https://deenazaidi.com/who-holds-us-debt-foreign-treasury-holders-2025

**Custodial caveat — CRS verbatim (footnote 6):** "A Chinese investor who buys U.S. securities and keeps them in the custody of a Belgian bank would have those assets counted under Belgium, not Mainland China. This helps explain why such large holdings appear in major banking hubs (e.g., Belgium, Caribbean countries, Luxembourg, Switzerland)." Also: "The Treasury Department's data track the location of an asset, not its owner's nationality." Source: CRS RS22331 (above).

**Setser / CFR on hidden China holdings:** Brad Setser (CFR) argues that adjusting for offshore custodians (esp. Euroclear, recorded under Belgium), China's true holdings of US assets look "basically stable at between **$1.8 and $1.9 trillion**," i.e., official TIC data materially undercounts China's exposure. Post-2022 (G7 immobilizing Russian reserves) China appears to have reduced Euroclear use, dispersing holdings into UK/France/Luxembourg. Sources: CFR "Finding China in the U.S. TIC Data" https://www.cfr.org/articles/finding-china-and-the-u-s-tic-data ; "China Isn't Shifting Away From the Dollar or Dollar Bonds" https://www.cfr.org/articles/china-isnt-shifting-away-dollar-or-dollar-bonds

---

## 6. The "China owns America" reality check

- **China now (Dec 2025):** $683.5B = **7.37% of foreign holdings**, ≈ **2.3% of publicly-held debt** ($683.5B / $30,100B), ≈ **1.8% of gross debt** ($683.5B / $37,640B). Source: CRS RS22331.
- **China peak:** ~$1.32T in **November 2013** (down >47% since). Source: SCMP/Global Times citing TIC https://www.scmp.com/economy/china-economy/article/3337010/ · https://www.globaltimes.cn/page/202601/1353386.shtml
- **CRS-tabulated recent peak:** $1,040.3B (Dec 2021, 13.44% of foreign) → $683.5B (Dec 2025, 7.37%). Source: CRS RS22331 Table 2.
- **Trend:** 5+ consecutive monthly reductions through 2025; China's holdings hit the **lowest level since 2008/2009** (~$652B at one 2026 reading). CRS: "While China remains a large holder of federal debt, its holdings have fallen in both nominal terms and as a share of total foreign holdings." Sources: CNBC https://www.cnbc.com/2026/05/19/central-banks-offload-us-treasuries-china-holdings-at-18-year-low.html ; Benzinga/State Street https://www.benzinga.com/markets/bonds/26/05/52739694/
- **Japan is #1** at $1,185.5B (Dec 2025), though below its own $1,300.8B (Dec 2021) / ~$1.325T (Nov 2021) peak. UK is now #2 ($866B), ahead of China. Source: CRS RS22331 Table 2.
- **Caveat (see §5):** on a custody-adjusted basis (Setser/CFR), China's real exposure may be ~$1.8–1.9T — so the "China holds ~2% of the debt" line is the TIC/legal-location number, not necessarily beneficial ownership.

---

## 7. How much of the debt does the US owe to itself?

Computed from the figures above (gross debt $37.64T, 2025-09-30 base; Fed ~$4.4T current SOMA Treasuries):

| Bucket | Amount | % of gross debt |
|---|---|---|
| Intragovernmental (trust funds) | $7.36T | 19.6% |
| Federal Reserve (SOMA Treasuries) | ~$4.2–4.6T | ~11–12% |
| **Subtotal owed to the government / central bank** | **~$11.6–12.0T** | **~31%** |
| Domestic private (mutual funds, banks, pensions, insurers, state/local, individuals) | ~$18–19T | ~48–50% |
| **Total held domestically (incl. Fed + intragov)** | **~$28.4T** | **~75–76%** |
| Foreign (official + private) | ~$9.2T | ~24% of gross (= 31% of publicly-held) |

**Bottom line:** roughly **three-quarters of the gross debt is held domestically**, and about **31% is literally owed to arms of the federal government itself (trust funds) plus the Federal Reserve**. Foreign holders own ~24% of the gross debt (31% of the publicly-held portion), and no single foreign country holds more than ~3.1% of gross debt (Japan). Sources: computed from Treasury Debt Position 2025-09-30, CRS RS22331, PGPF, SOMA data (all above).

---

## Authoritative framings / quotes

1. **CRS RS22331 (2026-04-22):** "Although gross federal debt is the broadest measure of the debt, the debt measure that is relevant in an economic sense is debt held by the public. … Intragovernmental debt, by contrast, is both an asset and a liability to the federal government."
2. **CRS RS22331:** "Because the total debt has increased faster than the debt held by foreigners, the share of federal debt held by foreigners has declined in recent years. In December 2025, foreigners held 31% of the publicly held debt."
3. **PGPF:** "American mutual funds, pension funds, insurance companies, banks, and the Federal Reserve together hold over 70% of publicly held debt" — the debt is overwhelmingly domestically owned.

---

## Discrepancies flagged

- **Total debt:** $37.64T (Treasury, 2025-09-30 close) vs "~$39T" (CRS/PGPF running total, ~Mar 2026). Timing, not conflict.
- **Debt held by public:** $30.28T (2025-09-30, Treasury) vs $30.1T (Dec 2025, CRS). Different months.
- **Foreign total:** $9.2T / 31% (CRS, Dec 2025) is the current best. One older secondary search returned "$8.5T / 23.5%" with a 41.9%/58.1% official/private split — the 41.9%/58.1% split matches CRS, but the $8.5T total is stale; use $9.2T.
- **Fed holdings:** PGPF "$4.6T" vs SOMA Treasury components summing to ~$4.26T (2026-03-25) / ~$4.11T (2026-07-15 partial). Different dates + whether TIPS/bills fully included. Range ~$4.1–4.6T.
- **MRF:** audited $1,604.7B (FY2024) vs a search claim of "$2.086T" — use the audited figure.
- **Country ranks 10–16:** medium confidence (secondary trackers), not yet reconciled to the CRS/TIC primary table.
