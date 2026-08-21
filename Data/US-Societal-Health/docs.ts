#!/usr/bin/env bun
// docs.ts — regenerates README.md and SUMMARY.md from index.json + series/*.json so the docs can never
// drift from the data. Run after update.ts:  bun docs.ts
import { join } from "node:path";
import { writeFile } from "node:fs/promises";

const DIR = import.meta.dir;
const index = await Bun.file(join(DIR, "index.json")).json();
const keys: string[] = Object.keys(index.series).sort();
const S: Record<string, any> = {};
for (const k of keys) S[k] = await Bun.file(join(DIR, "series", `${k}.json`)).json();
const today = new Date().toISOString().slice(0, 10);

const GROUPS: [string, string[]][] = [
  ["Happiness & outlook", ["veryHappy", "lifeExciting", "lifeRatedHigh", "optimismFutureLife", "satisfiedWithCountry", "satisfiedFinances", "financesBetter", "betterOffThanYearAgo", "expectBetterOffNextYear", "betterThanParents", "kidsBetterOff", "hardWorkGetsAhead"]],
  ["Trust in people and institutions — Gallup (great deal + quite a lot)", ["peopleCanBeTrusted", "trustMedia", "gallupCongress", "gallupPresidency", "gallupSupremeCourt", "gallupPolice", "gallupCriminalJustice", "gallupMilitary", "gallupPublicSchools", "gallupMedical", "gallupBigBusiness", "gallupSmallBusiness", "gallupBanks", "gallupReligion", "gallupLabor", "gallupNewspapers", "gallupTvNews"]],
  ["Confidence in institutions — GSS (great deal)", ["confPress", "confTv", "confCongress", "confExecutive", "confSupremeCourt", "confEducation", "confScience", "confMedicine", "confBusiness", "confBanks", "confMilitary", "confReligion", "confLabor"]],
  ["Substance use", ["marijuanaPastYear", "marijuanaPastMonth", "teenMarijuana", "teenAlcohol", "teenBingeDrinking", "teenCigarettes", "alcoholPerCapita"]],
  ["Health access & mortality", ["rxCostBarrier", "uninsured", "infantMortality", "suicide10to14", "suicide15to24", "suicide25to44", "suicide45to64", "suicide65plus", "trafficDeaths"]],
  ["Household financial health", ["creditCardDelinquency", "creditCardSeriousDelinquency", "bankruptcies", "primeAgeEmployment", "unionMembership", "childPoverty", "snapShare", "foodInsecurity"]],
];
const placed = new Set(GROUPS.flatMap(([, ks]) => ks));
const rest = keys.filter((k) => !placed.has(k));
if (rest.length) GROUPS.push(["Other", rest]);

const last = (k: string) => { const ys = Object.keys(S[k].data); const y = ys[ys.length - 1]; return { y, v: S[k].data[y], first: ys[0], fv: S[k].data[ys[0]], n: ys.length }; };
const fmt = (k: string, v: number) => (k === "alcoholPerCapita" ? `${v.toFixed(2)} gal` : `${v}%`);
const row = (k: string) => { const m = S[k]._meta, l = last(k); return `| [${m.name}](series/${k}.json) | ${fmt(k, l.v)} (${l.y}) | ${fmt(k, l.fv)} (${l.first}) | ${m.coverage} · ${l.n} pts | ${m.source} |`; };
const tables = GROUPS.filter(([, ks]) => ks.some((k) => S[k])).map(([title, ks]) => `### ${title}\n\n| Series | Latest | First | Coverage | Publisher |\n|---|---|---|---|---|\n${ks.filter((k) => S[k]).map(row).join("\n")}`).join("\n\n");

// honest superlatives, computed
function rank(k: string): string {
  const d = S[k].data; const ys = Object.keys(d); const y = ys[ys.length - 1]; const v = d[y];
  const lows = ys.filter((yy) => d[yy] < v).length, highs = ys.filter((yy) => d[yy] > v).length;
  if (lows === 0) return `the lowest of ${ys.length} readings since ${ys[0]}`;
  if (highs === 0) return `the highest of ${ys.length} readings since ${ys[0]}`;
  return `${highs} of ${ys.length} readings since ${ys[0]} were higher`;
}
const head = (k: string) => { const l = last(k); return `| **${S[k]._meta.name}** | **${fmt(k, l.v)}** (${l.y}) | ${rank(k)} | ${S[k]._meta.source} |`; };
const HEADLINE = ["veryHappy", "optimismFutureLife", "peopleCanBeTrusted", "trustMedia", "gallupCongress", "confScience", "marijuanaPastYear", "teenMarijuana", "alcoholPerCapita", "rxCostBarrier", "suicide15to24", "creditCardDelinquency", "infantMortality"].filter((k) => S[k]);

await writeFile(join(DIR, "SUMMARY.md"), `# US Societal Health: Executive Summary

---

## 🎯 BEST ESTIMATE

| Metric | Value | Where it sits in its own history | Source |
|--------|-------|----------------------------------|--------|
${HEADLINE.map(head).join("\n")}

**One-liner:** Americans report less happiness, less trust, and more worry than at any point in these series.

**Caveat:** Survey series carry mode breaks (GSS went web-first in 2021, NSDUH redesigned in 2021, Michigan moved online 2017–2024); each series' note names its seam and the values either side are not strictly comparable.

---

## Quick Context

${keys.length} annual national US series on the non-economic side of how the country is doing: happiness and optimism, trust in people and institutions, substance use, health access, and household financial stress. Every value is read from the organization that produces it (NORC, Gallup, Michigan, SAMHSA, NIAAA, CDC/NCHS, …), the GSS items directly from NORC's public microdata. Nothing is interpolated or smoothed; where a survey skipped a year the series skips it too.

Confidence: **Very High (95%+)** for published agency/survey figures copied as-is; **High (85–94%)** for the GSS items, which are computed here from the microdata with NORC's weight (the computation is reproducible by \`update.ts\` and was cross-checked against an independent computation to the decimal).

---

## Methodology Summary

**Approach:** one re-runnable script (\`update.ts\`) fetches each series from its primary publisher and writes one JSON file per series with a provenance block; \`docs.ts\` regenerates this summary and the README from those files.

**Sources:** see [source.md](source.md) — every URL, table, and column.

**Definition used:** the publisher's own definition, restated in each series' \`_meta.note\` with its question wording and breaks.

---

## Update Schedule

| Series | Cadence | Typical lag |
|---|---|---|
| Gallup confidence / media / satisfaction | annual (June / September), monthly satisfaction | weeks |
| Michigan Surveys of Consumers | monthly, annual aggregates | weeks |
| GSS | every two years | ~1 year after fieldwork |
| NSDUH | annual | ~10 months |
| Monitoring the Future (via NCHS) | annual | ~1 year |
| NIAAA per-capita alcohol | annual report each spring | ~16 months |

Last regenerated: ${today}.

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| 2026-08-21 | Dataset created with ${keys.length} series | Powers the Happiness & Outlook, Trust & Institutions, and Substance Use sections of https://usstats.io |
`);

await writeFile(join(DIR, "README.md"), `# US Societal Health

**${keys.length} long-run annual US series on happiness and optimism, trust in people and institutions, substance use, health access, and household financial stress — every value from its primary publisher, in one machine-readable place.**

Companion to [US-Common-Metrics](../US-Common-Metrics/) (economic indicators) and [US-National-Debt](../US-National-Debt/). Powers the societal-health sections of the live almanac **https://usstats.io** (each row there links to a page with the full series and these sources).

## Quick Start

\`\`\`bash
cat SUMMARY.md                     # the answer first
cat index.json                     # what's here: name, unit, source, coverage per series
cat series/veryHappy.json          # one series: { _meta: {...provenance}, data: { "1972": 30.3, ... } }
bun update.ts                      # refresh everything from the publishers (needs unzip + pdftotext)
bun update.ts --only gss,michigan  # refresh a subset
bun docs.ts                        # regenerate README.md + SUMMARY.md from the data
\`\`\`

## Contents

| File | Description |
|------|-------------|
| \`SUMMARY.md\` | Answer-first summary with headline numbers (generated) |
| \`index.json\` | Catalog of every series: name, unit, source, coverage, fetch time |
| \`series/<key>.json\` | One file per series: \`_meta\` provenance block + \`data\` year→value |
| \`source.md\` | Every source: URL, table, column, question wording, breaks |
| \`update.ts\` | Re-runnable fetcher (no keys; caches large downloads in \`.cache/\`) |
| \`lib/stata.ts\` | Minimal Stata .dta (release 117/118) reader used to read NORC's GSS cumulative file directly |
| \`docs.ts\` | Regenerates this README and SUMMARY.md from the data |
| \`update.log\` | One line per refresh |

## Series format

\`\`\`json
{
  "_meta": {
    "key": "veryHappy",
    "name": "Very Happy",
    "unit": "percent of adults \\"very happy\\"",
    "source": "NORC General Social Survey (cumulative file 1972–2024)",
    "sourceUrl": "https://gss.norc.org/get-the-data/stata.html",
    "historicalSourceUrls": ["…"],
    "goodDirection": "up",
    "note": "question wording, method, every known break",
    "method": "exactly how the number was derived (variable, codes, weight / table, column)",
    "coverage": "1972–2024",
    "fetched": "ISO timestamp"
  },
  "data": { "1972": 30.3, "1973": 36.8, "…": 0 }
}
\`\`\`

Rules this dataset runs on:

- **Primary publisher only.** Aggregators (KFF, Statista, OWID, Wikipedia) are never a source; the agency or survey organization is.
- **No interpolation, no smoothing.** A survey year that was skipped is absent. Charts should break the line across gaps rather than draw through them.
- **Breaks are named, never smoothed over.** GSS 2021 web mode, NSDUH 2021 redesign, Michigan 2017–2024 web transition, Gallup panel transition 2018–2020.
- **Partial years are flagged** (\`partialYear\` / \`partialThrough\`) and never presented as full-year values.
- **Computed values say so.** GSS percentages are computed here from microdata (and how); Gallup annual satisfaction is an annual mean of Gallup's readings. Everything else is the publisher's own figure.

## Series

${tables}

## Not included, and why

| Candidate | Why not (yet) |
|---|---|
| Gallup confidence in higher education | 6 polls since 2015 — not yet a series. GSS confidence in education (1973→) stands in. |
| NSDUH past-month illicit drug use | comparable only 2015–2019 and 2021–2025 (two redesigns) |
| NSDUH prescription misuse / substance use disorder | short windows plus a DSM-IV→DSM-5 break |
| BRFSS binge / heavy drinking | the national row is a median of states, with 2006 and 2011 breaks |
| Monitoring the Future past-year use 1975→ | monitoringthefuture.org blocks automated fetches; the NCHS mirror (1980→, past-30-day) is used |
| Alcohol-induced deaths (NCHS) | no machine-readable path reachable (CDC WONDER / stacks block fetchers) |
| Pew "children better off than parents", Gallup "next generation" | 4 comparable points / last asked 2022 |
| Pew trust in scientists, Gallup large-tech confidence | too short (2016→ / 2020→) |

## Data Sources

See [source.md](source.md). Publishers: NORC (GSS), Gallup, University of Michigan Survey Research Center, SAMHSA, NIAAA, University of Michigan Monitoring the Future via CDC/NCHS.

## Research provenance

[research/us-societal-health-2026-08/](../../research/us-societal-health-2026-08/) — the research question, the quality filter, the candidate dispositions, and what the data shows.

---

*Last regenerated ${today} by \`docs.ts\`.*
`);
const srcRows = keys.map((k) => { const m = S[k]._meta; const urls = [m.sourceUrl, ...(m.historicalSourceUrls ?? [])].map((u) => `<${u}>`).join(" · "); return `### ${m.name} (\`${k}\`)\n\n- **Publisher:** ${m.source}\n- **Where:** ${urls}\n- **Unit:** ${m.unit}\n- **Coverage:** ${m.coverage}${m.partialYear ? ` (${m.partialYear} partial)` : ""}\n- **Method:** ${m.method}\n- **Note:** ${m.note}`; }).join("\n\n");
await writeFile(join(DIR, "source.md"), `# Sources — US Societal Health\n\nGenerated by \`docs.ts\` from each series\x27 \`_meta\` block; regenerate after \`update.ts\`. Access date for everything below: ${today}. Every number in this dataset traces to one of these entries; \`method\` is the exact table/column/variable the script reads.\n\n## Publishers\n\n| Publisher | Access path | Keys |\n|---|---|---|\n${Object.entries(keys.reduce<Record<string, string[]>>((acc, k) => { (acc[S[k]._meta.source] ??= []).push(k); return acc; }, {})).map(([src, ks]) => `| ${src} | ${S[ks[0]]._meta.sourceUrl} | ${ks.join(", ")} |`).join("\n")}\n\n## Blocked or unusable paths (probed 2026-08-21)\n\nmonitoringthefuture.org (403 to every fetcher) · www.cdc.gov, wonder.cdc.gov, stacks.cdc.gov (403) · electionstudies.org (403) · ssa.gov (403) · huduser.gov (bot challenge) · bls.gov HTML tables (403; the API works) · gssdataexplorer.norc.org (login-gated export) · WHR per-year panel files (removed) · api.census.gov without a key.\n\n## Series\n\n${srcRows}\n`);
console.log(`README.md + SUMMARY.md + source.md regenerated for ${keys.length} series`);
