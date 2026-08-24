#!/usr/bin/env bun
// docs.ts — regenerates README.md, SUMMARY.md, and source.md from index.json + series/*.json so the
// docs can never drift from the data. Run after update.ts:  bun docs.ts
import { join } from "node:path";
import { writeFile } from "node:fs/promises";

const DIR = import.meta.dir;
const index = await Bun.file(join(DIR, "index.json")).json();
const keys: string[] = Object.keys(index.series).sort();
const S: Record<string, any> = {};
for (const k of keys) S[k] = await Bun.file(join(DIR, "series", `${k}.json`)).json();
const today = new Date().toISOString().slice(0, 10);

const GROUPS: [string, string[]][] = [
  ["Economy & work", ["unemployment", "underemployment", "laborforce", "gdpGrowth", "productivity", "inflation", "income", "manufacturing", "business", "payrollWomen", "payrollMen"]],
  ["Money & debt", ["debt", "studentDebt", "saving", "debtService", "fedDebt", "fedFunds", "mortgage", "stocks"]],
  ["Cost of living", ["homePrice", "rent", "homeownership", "housingStarts", "gas", "electricity"]],
  ["Wealth, poverty & education", ["gini", "topWealth", "poverty", "attainment", "tuition"]],
  ["Health", ["lifeExpectancy", "healthSpending", "suicide", "overdose", "smoking"]],
  ["Crime & justice", ["violent", "property", "homicide", "incarceration"]],
  ["Family & society", ["marriage", "divorce", "fertility", "unmarriedBirths", "popGrowth", "happiness", "trustGov", "turnout"]],
  ["Government, energy & environment", ["deficit", "co2", "renewables", "temperature"]],
];
const placed = new Set(GROUPS.flatMap(([, ks]) => ks));
const rest = keys.filter((k) => !placed.has(k));
if (rest.length) GROUPS.push(["Other", rest]);

const last = (k: string) => { const ys = Object.keys(S[k].data); const y = ys[ys.length - 1]; return { y, v: S[k].data[y], first: ys[0], fv: S[k].data[ys[0]], n: ys.length }; };
const row = (k: string) => { const m = S[k]._meta, l = last(k); return `| [${m.name}](series/${k}.json) | ${l.v} (${l.y}) | ${l.fv} (${l.first}) | ${m.unit} | ${m.coverage} · ${l.n} pts | ${m.source} |`; };
const tables = GROUPS.filter(([, ks]) => ks.some((k) => S[k])).map(([title, ks]) => `### ${title}\n\n| Series | Latest | First | Unit | Coverage | Publisher |\n|---|---|---|---|---|---|\n${ks.filter((k) => S[k]).map(row).join("\n")}`).join("\n\n");

const points = keys.reduce((n, k) => n + Object.keys(S[k].data).length, 0);

const readme = `# US Long-Run Indicators

**${keys.length} long-run annual US series on the economy, money and debt, cost of living, wealth and education, health, crime, family, and energy — every value from its primary publisher, in one machine-readable place.**

Companion to [US-Societal-Health](../US-Societal-Health/) (happiness, trust, substance use, household stress) — together the two datasets are the complete source of record for the live almanac **https://usstats.io** (every row there links to a page with the full series and these sources, and https://usstats.io/data/ serves the combined data as JSON and CSV).

## Quick Start

\`\`\`bash
cat SUMMARY.md                     # the answer first
cat index.json                     # what's here: name, unit, source, coverage per series
cat series/unemployment.json       # one series: { _meta: {...provenance}, data: { "1948": 3.8, ... } }
bun update.ts                      # refresh everything from the publishers (no API keys required)
bun update.ts --only fred,eia      # refresh a subset (groups: fred, payroll, cde, eia, nchs, noaa, civic, checkedin)
bun docs.ts                        # regenerate README.md + SUMMARY.md + source.md from the data
\`\`\`

## Contents

| File | Description |
|------|-------------|
| \`SUMMARY.md\` | Answer-first summary with headline numbers (generated) |
| \`index.json\` | Catalog of every series: name, unit, source, coverage, fetch time |
| \`series/<key>.json\` | One file per series: \`_meta\` provenance block + \`data\` year→value |
| \`source.md\` | Every source: URL, tables read, breaks disclosed (generated) |
| \`update.ts\` | Re-runnable fetcher — keyless (fredgraph.csv, EIA MER csv.php, NCEI, CDC SODA, BJS/Census files; FBI CDE uses \`FBI_CDE_API_KEY\` or DEMO_KEY) |
| \`data/\` | Checked-in citation series for publishers with no machine endpoint (NCHS marriage/divorce PDF tables, WHR readings, NCHS mortality briefs, Pew trust) |
| \`docs.ts\` | Regenerates this README, SUMMARY.md, and source.md from the data |
| \`update.log\` | One line per refresh |

${keys.length} series · ${points} annual values · updated ${today}

## The Series

${tables}

## Rules

- Primary publishers only. Aggregators are finding aids, never sources.
- No value beyond a publisher's real coverage: series start late and end early where the data does.
- Methodology breaks are named in each series' \`note\` (the FBI's 2000 UCR→CDE lineage seam, the Census attainment question change in 1992, partial current years), never smoothed over.
- Derived series are ratios of two published series from the same publisher (renewables = EIA renewable ÷ total primary energy), never estimates of our own.
- Fertility is stored per woman; NCHS publishes per 1,000 women (the one unit normalization, named in its note).
`;

const pick = (k: string) => { const l = last(k); return `| **${S[k]._meta.name}** | **${l.v}** (${l.y}) | ${l.fv} (${l.first}) | ${S[k]._meta.source} |`; };
const summary = `# US Long-Run Indicators: Executive Summary

---

## 🎯 BEST ESTIMATE

| Metric | Latest | First | Source |
|--------|--------|-------|--------|
${["unemployment", "inflation", "income", "debt", "homePrice", "lifeExpectancy", "violent", "fertility", "co2", "payrollWomen"].map(pick).join("\n")}

**One-liner:** ${keys.length} primary-sourced annual series tracing US life back as far as ${Math.min(...keys.map((k) => Number(Object.keys(S[k].data)[0])))}.

**Caveat:** Partial current years are year-to-date figures, and each series' \`note\` names its methodology seams; read it before comparing across one.

---

## Quick Context

These are the long-run economic, social, and environmental indicators behind https://usstats.io — unemployment to fertility to CO2 — each pulled straight from the agency that publishes it (BLS, BEA, Census, the Fed, FBI, CDC/NCHS, BJS, EIA, NOAA, Gallup-derived WHR, Pew). The dataset exists so an analysis can start from verified numbers instead of aggregator copies.

## Methodology Summary

**Approach:** \`update.ts\` refetches every series from its primary publisher (keyless endpoints throughout); values a publisher only ships in PDFs or one-off tables are checked in under \`data/\` with their citations and re-verified on refresh. Every series carries a \`_meta\` provenance block naming the exact source and its caveats.

**Confidence:** Very High (95%+) — official government and survey publishers, read directly.

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| ${today} | Latest refresh: ${keys.length} series, ${points} values | \`bun update.ts\` |
| 2026-08-24 | Dataset created — the 51 usstats.io series not already in US-Societal-Health migrated here | Substrate becomes the site's single source of record |
`;

const byPublisher = new Map<string, { url: string; keys: string[] }>();
for (const k of keys) { const m = S[k]._meta; const e = byPublisher.get(m.source) ?? { url: m.sourceUrl, keys: [] as string[] }; e.keys.push(k); byPublisher.set(m.source, e); }
const source = `# Sources — US Long-Run Indicators

Generated by \`docs.ts\` from each series' \`_meta\` block; regenerate after \`update.ts\`. Every number in this dataset traces to one of these entries; each series' \`note\` names the exact tables read and every methodology break.

## Publishers

| Publisher | Access path | Keys |
|---|---|---|
${[...byPublisher.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([src, e]) => `| ${src} | ${e.url} | ${e.keys.sort().join(", ")} |`).join("\n")}

## Historical sources

Series stitched from more than one publication carry every document in \`_meta.historicalSourceUrls\`:

${keys.filter((k) => S[k]._meta.historicalSourceUrls?.length).map((k) => `- **${S[k]._meta.name}** (\`${k}\`): ${S[k]._meta.historicalSourceUrls.join(" · ")}`).join("\n")}
`;

await writeFile(join(DIR, "README.md"), readme);
await writeFile(join(DIR, "SUMMARY.md"), summary);
await writeFile(join(DIR, "source.md"), source);
console.log(`README.md, SUMMARY.md, source.md regenerated (${keys.length} series, ${points} values)`);
