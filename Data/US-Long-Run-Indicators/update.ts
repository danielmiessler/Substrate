#!/usr/bin/env bun
// update.ts — regenerates every series in this dataset from its primary publisher.
// Run: bun update.ts [--only group1,group2]   (groups: fred, payroll, cde, eia, nchs, noaa, civic, checkedin)
// Output: series/<key>.json  { _meta: {...provenance}, data: { "YYYY": value } }  +  index.json
// Prerequisites: bun; `unzip` on PATH for the BJS/Census workbooks. No API keys required:
// FRED series use the public fredgraph.csv endpoint and EIA the public MER csv.php endpoint.
// The FBI CDE call uses process.env.FBI_CDE_API_KEY when set, else api.data.gov's DEMO_KEY
// (rate-limited but sufficient for three national queries).
// Values that no publisher serves machine-readably are checked in under data/ with their
// citations (the NCHS marriage/divorce PDF tables, WHR workbook readings, NCHS mortality
// data-brief tables, Pew's trust series) and re-verified against the publisher on refresh.

import { mkdir, writeFile, appendFile } from "node:fs/promises";
import { join } from "node:path";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { sheetRows } from "./lib/xlsx.ts";
import { META, KEYS, type SeriesMeta } from "./lib/meta.ts";

const DIR = import.meta.dir;
const SERIES = join(DIR, "series");
const DATA = join(DIR, "data");
const UA = "substrate-us-long-run-indicators/1.0 (+https://github.com/danielmiessler/substrate)";
const NOW = new Date().toISOString();
const NOW_YEAR = new Date().getFullYear();
const only = (() => { const i = process.argv.indexOf("--only"); return i >= 0 ? new Set(process.argv[i + 1].split(",")) : null; })();

function invariant(cond: unknown, msg: string): asserts cond { if (!cond) throw new Error(`InvariantViolation: ${msg}`); }
async function getText(url: string): Promise<string> {
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`HTTP ${r.status} ${url}`);
  return r.text();
}
async function getJSON<T>(url: string): Promise<T> { return JSON.parse(await getText(url)) as T; }
const work = mkdtempSync(join(tmpdir(), "uslri-"));
async function download(url: string, name: string): Promise<string> {
  const p = join(work, name);
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`HTTP ${r.status} ${url}`);
  await Bun.write(p, await r.arrayBuffer());
  return p;
}
const round = (n: number, d = 1) => Number(n.toFixed(d));

type Extra = { partialYear?: number; partialThrough?: string };
const written: Record<string, { years: number; first: number; last: number }> = {};
async function save(key: string, data: Record<string, number>, bounds: [number, number], extra: Extra = {}) {
  const meta = META[key] as SeriesMeta | undefined;
  invariant(meta, `${key}: no meta entry`);
  const years = Object.keys(data).map(Number).sort((a, b) => a - b);
  invariant(years.length >= 10, `${key}: only ${years.length} years`);
  for (const y of years) invariant(data[y] >= bounds[0] && data[y] <= bounds[1], `${key} ${y}: ${data[y]} outside [${bounds}]`);
  const ordered: Record<string, number> = {};
  for (const y of years) ordered[String(y)] = data[String(y)];
  await mkdir(SERIES, { recursive: true });
  await writeFile(join(SERIES, `${key}.json`), JSON.stringify({
    _meta: { key, ...meta, ...extra, coverage: `${years[0]}–${years[years.length - 1]}`, fetched: NOW },
    data: ordered,
  }, null, 2));
  written[key] = { years: years.length, first: years[0], last: years[years.length - 1] };
  console.log(`✓ ${key.padEnd(16)} ${years[0]}–${years[years.length - 1]} (${years.length}y)  latest ${data[String(years[years.length - 1])]}`);
}
const errors: Record<string, string> = {};
async function run(group: string, fn: () => Promise<void>) {
  if (only && !only.has(group)) return;
  try { await fn(); } catch (e) { errors[group] = String(e); console.error(`✗ ${group}: ${String(e).slice(0, 400)}`); }
}

// ---------- FRED (public fredgraph.csv — full history, no key) ----------
type Obs = { date: string; value: number };
async function fredObs(id: string, start: string): Promise<Obs[]> {
  const text = await getText(`https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}`);
  const obs: Obs[] = [];
  for (const line of text.trim().split("\n").slice(1)) {
    const [date, v] = line.split(",");
    if (v && v !== "." && date >= start) obs.push({ date, value: Number(v) });
  }
  invariant(obs.length > 0, `${id}: no observations`);
  return obs;
}
function byYear(obs: Obs[]): Map<string, number[]> {
  const m = new Map<string, number[]>();
  for (const o of obs) { const y = o.date.slice(0, 4); if (!m.has(y)) m.set(y, []); m.get(y)!.push(o.value); }
  return m;
}
const annualAvg = (obs: Obs[], dp: number) => { const out: Record<string, number> = {}; for (const [y, v] of byYear(obs)) out[y] = round(v.reduce((a, b) => a + b, 0) / v.length, dp); return out; };
const annualLast = (obs: Obs[], dp: number) => { const out: Record<string, number> = {}; for (const [y, v] of byYear(obs)) out[y] = round(v[v.length - 1], dp); return out; };
const annualSum = (obs: Obs[]) => { const out: Record<string, number> = {}; for (const [y, v] of byYear(obs)) { if (v.length < 12) continue; out[y] = v.reduce((a, b) => a + b, 0); } return out; };
/** YoY % from a monthly/annual index, matching partial-year months against the prior year. */
function yoyFromIndex(obs: Obs[], dp: number): Record<string, number> {
  const m = byYear(obs); const out: Record<string, number> = {};
  for (const [y, vals] of m) {
    const prev = m.get(String(Number(y) - 1)); if (!prev) continue;
    const n = Math.min(vals.length, prev.length);
    const cur = vals.slice(0, n).reduce((a, b) => a + b, 0) / n;
    const base = prev.slice(0, n).reduce((a, b) => a + b, 0) / n;
    out[y] = round((cur / base - 1) * 100, dp);
  }
  return out;
}
type FredSpec = { key: string; id: string; t: (o: Obs[]) => Record<string, number>; start?: string; bounds: [number, number] };
const div1000 = (f: (o: Obs[], dp: number) => Record<string, number>, dp: number) => (o: Obs[]) => { const r = f(o, dp); for (const k of Object.keys(r)) r[k] = round(r[k] / 1000, dp); return r; };
const mul1000 = (f: (o: Obs[], dp: number) => Record<string, number>, dp: number) => (o: Obs[]) => { const r = f(o, dp); for (const k of Object.keys(r)) r[k] = Math.round(r[k] * 1000); return r; };
const FRED: FredSpec[] = [
  { key: "unemployment", id: "UNRATE", t: (o) => annualAvg(o, 1), bounds: [1, 30] },
  { key: "laborforce", id: "CIVPART", t: (o) => annualAvg(o, 1), bounds: [50, 75] },
  { key: "gdpGrowth", id: "A191RL1A225NBEA", t: (o) => annualAvg(o, 1), bounds: [-20, 25] },
  { key: "inflation", id: "CPIAUCSL", t: (o) => yoyFromIndex(o, 1), start: "1946-01-01", bounds: [-5, 25] },
  { key: "income", id: "MEHOINUSA672N", t: (o) => annualAvg(o, 0), bounds: [30000, 150000] },
  { key: "homePrice", id: "MSPUS", t: (o) => annualAvg(o, 0), bounds: [10000, 800000] },
  { key: "homeownership", id: "RHORUSQ156N", t: (o) => annualAvg(o, 1), bounds: [55, 75] },
  { key: "mortgage", id: "MORTGAGE30US", t: (o) => annualAvg(o, 2), bounds: [2, 20] },
  { key: "gas", id: "GASREGW", t: (o) => annualAvg(o, 2), bounds: [0.5, 8] },
  { key: "saving", id: "PSAVERT", t: (o) => annualAvg(o, 1), bounds: [0, 35] },
  { key: "debtService", id: "TDSP", t: (o) => annualAvg(o, 1), bounds: [5, 20] },
  { key: "fedDebt", id: "GFDEGDQ188S", t: (o) => annualAvg(o, 1), bounds: [20, 150] },
  { key: "fedFunds", id: "FEDFUNDS", t: (o) => annualAvg(o, 2), bounds: [0, 25] },
  { key: "debt", id: "REVOLSL", t: div1000(annualLast, 1), bounds: [1, 3000] },
  { key: "business", id: "BABATOTALSAUS", t: annualSum, start: "2005-01-01", bounds: [1_000_000, 10_000_000] },
  { key: "underemployment", id: "U6RATE", t: (o) => annualAvg(o, 1), bounds: [4, 30] },
  { key: "productivity", id: "OPHNFB", t: (o) => annualAvg(o, 1), bounds: [10, 200] },
  { key: "manufacturing", id: "MANEMP", t: mul1000(annualAvg, 1), bounds: [8_000_000, 22_000_000] },
  { key: "studentDebt", id: "SLOAS", t: div1000(annualLast, 1), start: "2006-01-01", bounds: [100, 3000] },
  { key: "stocks", id: "NASDAQCOM", t: (o) => annualAvg(o, 0), start: "1971-01-01", bounds: [50, 60000] },
  { key: "rent", id: "CUUR0000SEHA", t: (o) => annualAvg(o, 1), bounds: [10, 900] },
  { key: "electricity", id: "APU000072610", t: (o) => annualAvg(o, 3), bounds: [0.01, 1] },
  { key: "housingStarts", id: "HOUST", t: mul1000(annualAvg, 1), bounds: [400_000, 3_000_000] },
  { key: "tuition", id: "CUSR0000SEEB", t: (o) => annualAvg(o, 1), bounds: [10, 2000] },
  { key: "gini", id: "SIPOVGINIUSA", t: (o) => annualAvg(o, 1), bounds: [30, 55] },
  { key: "topWealth", id: "WFRBST01134", t: (o) => annualAvg(o, 1), bounds: [15, 45] },
  { key: "poverty", id: "PPAAUS00000A156NCEN", t: (o) => annualAvg(o, 1), bounds: [5, 25] },
  { key: "popGrowth", id: "B230RC0A052NBEA", t: (o) => yoyFromIndex(o, 2), bounds: [-1, 3] },
  { key: "deficit", id: "FYFSGDA188S", t: (o) => annualAvg(o, 1), bounds: [-35, 10] },
];
await run("fred", async () => {
  for (const s of FRED) {
    const obs = await fredObs(s.id, s.start ?? "1930-01-01");
    const data = s.t(obs);
    const lastObs = obs[obs.length - 1].date;
    const partial: Extra = String(NOW_YEAR) in data && !lastObs.startsWith(`${NOW_YEAR}-12`)
      ? { partialYear: NOW_YEAR, partialThrough: lastObs.slice(0, 7) } : {};
    await save(s.key, data, s.bounds, partial);
  }
});

// ---------- payroll gender pair (BLS CES via fredgraph.csv) ----------
await run("payroll", async () => {
  const monthly = async (id: string) => {
    const out: Record<string, number> = {};
    for (const o of await fredObs(id, "1900-01-01")) out[o.date.slice(0, 7)] = o.value;
    return out;
  };
  const women = await monthly("CES0000000010");
  const total = await monthly("PAYEMS");
  const months = Object.keys(women).filter((m) => total[m]).sort();
  invariant(months.length > 700, `payroll: only ${months.length} overlapping months`);
  const by: Record<string, number[]> = {};
  for (const m of months) { const sh = (100 * women[m]) / total[m]; invariant(sh > 25 && sh < 60, `payroll: implausible share ${sh} at ${m}`); (by[m.slice(0, 4)] ??= []).push(sh); }
  const w: Record<string, number> = {}, men: Record<string, number> = {};
  for (const [y, vs] of Object.entries(by)) { const mean = vs.reduce((a, b) => a + b, 0) / vs.length; w[y] = round(mean, 2); men[y] = round(100 - mean, 2); }
  const last = months[months.length - 1];
  const ty = last.slice(0, 4);
  const partial: Extra = by[ty].length < 12 ? { partialYear: Number(ty), partialThrough: last } : {};
  // the crossover note ends with the live latest-month reading
  const dyn = ` Latest month (${last}): ${((100 * women[last]) / total[last]).toFixed(2)}% women.`;
  const saveWith = async (key: string, data: Record<string, number>, noteSuffix: string) => {
    const meta = META[key];
    const patched = { ...META, [key]: { ...meta, note: meta.note + noteSuffix } };
    const orig = META[key]; (META as Record<string, SeriesMeta>)[key] = patched[key];
    await save(key, data, [30, 70], partial);
    (META as Record<string, SeriesMeta>)[key] = orig;
  };
  await saveWith("payrollWomen", w, dyn);
  await saveWith("payrollMen", men, "");
});

// ---------- FBI CDE (reported crime, 2000→; monthly rates per 100k summed to annual) ----------
await run("cde", async () => {
  const key = process.env.FBI_CDE_API_KEY ?? "DEMO_KEY";
  const hist = await Bun.file(join(DATA, "historical-extensions.json")).json();
  const offense = async (name: string): Promise<Record<string, number>> => {
    const j = await getJSON<{ offenses: { rates: Record<string, Record<string, number>> } }>(
      `https://api.usa.gov/crime/fbi/cde/summarized/national/${name}?from=01-2000&to=12-${NOW_YEAR}&API_KEY=${key}`);
    const rates = j.offenses.rates["United States Offenses"];
    invariant(rates && Object.keys(rates).length > 100, `${name}: no national rates`);
    const by = new Map<string, number[]>();
    for (const [k, v] of Object.entries(rates)) { const y = k.slice(3); if (!by.has(y)) by.set(y, []); by.get(y)!.push(Number(v)); }
    const data: Record<string, number> = {};
    for (const [y, months] of by) {
      // CDE pads not-yet-reported months with 0 — a year counts only with 12 real months.
      if (months.length < 12 || months.some((m) => !(m > 0))) continue;
      data[y] = round(months.reduce((a, b) => a + b, 0), 1);
    }
    invariant(Object.keys(data).length >= 15, `${name}: short series`);
    return data;
  };
  for (const [key2, name] of [["violent", "violent-crime"], ["property", "property-crime"], ["homicide", "homicide"]] as const) {
    const fresh = await offense(name);
    const ext = hist[key2]?.values ?? {};
    const merged: Record<string, number> = { ...ext, ...fresh }; // fetched years win; extension fills 1976–1999
    await save(key2, merged, [0, 7000]);
  }
});

// ---------- EIA Monthly Energy Review (public csv.php; annual rows are YYYY13) ----------
await run("eia", async () => {
  const msn = async (tbl: string, code: string): Promise<Record<string, number>> => {
    const text = await getText(`https://www.eia.gov/totalenergy/data/browser/csv.php?tbl=${tbl}`);
    const out: Record<string, number> = {};
    for (const line of text.split("\n")) {
      if (!line.startsWith(`"${code}"`)) continue;
      const c = line.split(",").map((x) => x.replace(/^"|"$/g, ""));
      if (!/^\d{4}13$/.test(c[1])) continue; // MER's 13th period = the annual value
      const v = Number(c[2]);
      if (Number.isFinite(v) && Number(c[1].slice(0, 4)) >= 1949) out[c[1].slice(0, 4)] = v;
    }
    invariant(Object.keys(out).length >= 40, `${tbl}/${code}: short series`);
    return out;
  };
  const co2 = await msn("T11.01", "TETCEUS");
  const total = await msn("T01.03", "TETCBUS");
  const renew = await msn("T01.03", "RETCBUS");
  // the public MER CSV begins at 1973; pre-MER years (1949-1972) are checked in from the EIA API (see data/eia-co2-pre1973.json)
  const pre = (await Bun.file(join(DATA, "eia-co2-pre1973.json")).json()).co2.values as Record<string, number>;
  const co2Data: Record<string, number> = { ...pre };
  for (const [y, v] of Object.entries(co2)) co2Data[y] = round(v, 0);
  const renewData: Record<string, number> = {};
  for (const [y, tot] of Object.entries(total)) { const r = renew[y]; if (r !== undefined && tot) renewData[y] = round((r / tot) * 100, 1); }
  await save("co2", co2Data, [1500, 7000]);
  await save("renewables", renewData, [1, 40]);
});

// ---------- CDC/NCHS open data (SODA, no key) ----------
await run("nchs", async () => {
  const soda = <T,>(id: string, q: string) => getJSON<T[]>(`https://data.cdc.gov/resource/${id}.json?${q}`);
  const unmarried = await soda<{ year: string; birth_number: string }>("g6qk-ngsf", "$limit=50000");
  const totals = await soda<{ year: string; birth_number: string }>("e6fc-ccez", "$limit=5000");
  const uBy = new Map<string, number>();
  for (const r of unmarried) { const n = Number(r.birth_number); if (Number.isFinite(n)) uBy.set(r.year, (uBy.get(r.year) ?? 0) + n); }
  const tBy = new Map<string, number>();
  for (const r of totals) { const n = Number(r.birth_number); if (Number.isFinite(n)) tBy.set(r.year, n); }
  const share: Record<string, number> = {};
  for (const [y, u] of uBy) { const t = tBy.get(y); if (!t) continue; const pct = (u / t) * 100; invariant(pct > 0 && pct < 100, `unmarriedBirths ${y}: ${pct}`); share[y] = round(pct, 1); }
  await save("unmarriedBirths", share, [0, 60]);
  const spending = await soda<{ time_period: string; group: string; estimate?: string }>("s57w-7gbe", `${new URLSearchParams({ estimate_type: "Percent of U.S. GDP" })}&$limit=500`);
  const hs: Record<string, number> = {};
  for (const r of spending) { const v = Number(r.estimate); if (Number.isFinite(v) && /^\d{4}$/.test(r.time_period) && r.group === "Total") hs[r.time_period] = round(v, 1); }
  await save("healthSpending", hs, [3, 25]);
});

// ---------- NOAA NCEI (Climate at a Glance, no key) ----------
await run("noaa", async () => {
  const j = await getJSON<{ description: { units: string }; data: Record<string, { value: string | number }> }>(
    `https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/national/time-series/110/tavg/12/12/1895-${NOW_YEAR}/data.json`);
  invariant(/Fahrenheit/i.test(j.description.units), `NOAA units changed: ${j.description.units}`);
  const data: Record<string, number> = {};
  for (const [k, v] of Object.entries(j.data)) { const n = Number(v.value); if (Number.isFinite(n) && n >= 30 && n <= 70) data[k.slice(0, 4)] = round(n, 2); }
  invariant(Object.keys(data).length >= 100, "temperature: short series");
  await save("temperature", data, [45, 60]);
});

// ---------- BJS / Census workbooks + the checked-in Pew series ----------
await run("civic", async () => {
  const num = (s: string | undefined) => Number(String(s ?? "").replace(/[",\s]/g, ""));
  const csvRow = (line: string) => { const out: string[] = []; let cur = "", q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === "," && !q) { out.push(cur); cur = ""; } else cur += ch; } out.push(cur); return out; };
  const unzipText = async (zip: string, memberName: string) => {
    const p = Bun.spawn(["unzip", "-p", zip, memberName], { stdout: "pipe", stderr: "pipe" });
    const buf = new Uint8Array(await new Response(p.stdout).arrayBuffer());
    invariant((await p.exited) === 0, `unzip ${memberName} failed`);
    return new TextDecoder("latin1").decode(buf);
  };
  // imprisonment: two BJS publications, overlap-verified, ÷1,000 to a percent of residents
  const p20 = await download("https://bjs.ojp.gov/content/pub/sheets/p20st.zip", "p20st.zip");
  const p23 = await download("https://bjs.ojp.gov/document/p23st.zip", "p23st.zip");
  const historical: Record<string, number> = {};
  for (const line of (await unzipText(p20, "p20stat01.csv")).split(/\r?\n/)) { const c = csvRow(line); const y = String(c[0]).trim(); if (!/^\d{4}$/.test(y)) continue; const r = num(c[1]); if (Number.isFinite(r) && r > 0) historical[y] = r; }
  invariant(Object.keys(historical).length >= 40, "BJS 1978-2020 parsed too few years");
  const recent: Record<string, number> = {};
  for (const line of (await unzipText(p23, "p23stt05.csv")).split(/\r?\n/)) { const c = csvRow(line); const y = String(c[0]).trim(); if (!/^\d{4}$/.test(y)) continue; const r = num(c[2]); if (Number.isFinite(r) && r > 0) recent[y] = r; }
  invariant(Object.keys(recent).length >= 8, "BJS 2013-2023 parsed too few years");
  let overlaps = 0;
  for (const [y, v] of Object.entries(recent)) { if (historical[y] === undefined) continue; overlaps++; invariant(Math.abs(historical[y] - v) <= 2, `BJS overlap mismatch ${y}: ${historical[y]} vs ${v}`); }
  invariant(overlaps >= 5, `BJS overlap too small (${overlaps})`);
  const incarceration: Record<string, number> = {};
  for (const [y, r] of Object.entries({ ...historical, ...recent })) incarceration[y] = Number((r / 1000).toFixed(3));
  await save("incarceration", incarceration, [0, 1]);
  // voter turnout: Census CPS Table A-1, presidential years, voting-age population
  const vote = await download("https://www2.census.gov/programs-surveys/cps/tables/time-series/voting-historical-time-series/hst_vote01.xlsx", "hst_vote01.xlsx");
  const turnout: Record<string, number> = {};
  for (const row of await sheetRows(vote)) {
    const y = String(row.A ?? "");
    if (!/^\d{4}$/.test(y) || Number(y) % 4 !== 0) continue;
    const pct = Number(row.C);
    if (!Number.isFinite(pct) || pct <= 0 || pct >= 100) continue;
    if (turnout[y] !== undefined) break; // later sections repeat years by demographic
    turnout[y] = round(pct, 1);
  }
  invariant(Object.keys(turnout).length >= 12, `turnout parsed too few elections`);
  await save("turnout", turnout, [40, 80]);
  // college attainment: Census CPS historical Table A-2
  const edu = await download("https://www2.census.gov/programs-surveys/demo/tables/educational-attainment/time-series/cps-historical-time-series/taba-2.xlsx", "taba-2.xlsx");
  const attainment: Record<string, number> = {};
  let inSection = false;
  for (const row of await sheetRows(edu)) {
    const label = String(row.A ?? "");
    if (/Years and Over, Completed 4 Years of College or more/i.test(label)) { inSection = true; continue; }
    if (inSection && /Years, Completed/i.test(label)) break;
    if (!inSection || !/^\d{4}$/.test(label)) continue;
    const pct = Number(row.B);
    if (Number.isFinite(pct) && pct > 0 && pct < 100) attainment[label] = round(pct, 1);
  }
  invariant(Object.keys(attainment).length >= 40, "attainment parsed too few years");
  await save("attainment", attainment, [3, 60]);
  // trust in government: Pew's published series, checked in with citation (no machine endpoint)
  const pew = await Bun.file(join(DATA, "pew-trust.json")).json();
  const trustGov: Record<string, number> = {};
  for (const [y, v] of Object.entries(pew.values as Record<string, number>)) trustGov[y] = v;
  invariant(Object.keys(trustGov).length >= 40, "pew-trust.json parsed too few years");
  await save("trustGov", trustGov, [10, 90]);
});

// ---------- checked-in NCHS/WHR series (publishers with no machine endpoint) ----------
await run("checkedin", async () => {
  type Social = { values: Record<string, number | null> };
  const family = await Bun.file(join(DATA, "nchs-family.json")).json() as Record<string, Social>;
  const mortality = await Bun.file(join(DATA, "nchs-mortality.json")).json() as Record<string, Social>;
  const hist = await Bun.file(join(DATA, "historical-extensions.json")).json() as Record<string, Social>;
  const vals = (s: Social | undefined): Record<string, number> => {
    const out: Record<string, number> = {};
    for (const [y, v] of Object.entries(s?.values ?? {})) if (v !== null) out[y] = v;
    return out;
  };
  const merged = (key: string, base: Record<string, Social>) => ({ ...vals(hist[key]), ...vals(base[key]) }); // base (newer, verified) wins
  await save("marriage", merged("marriage", family), [4, 14]);
  await save("divorce", merged("divorce", family), [1, 7]);
  const fert = merged("fertility", family);
  const perWoman: Record<string, number> = {};
  for (const [y, v] of Object.entries(fert)) perWoman[y] = round(v > 100 ? v / 1000 : v, 4); // NCHS publishes per 1,000 women; stored per woman
  await save("fertility", perWoman, [1, 4]);
  await save("happiness", vals(family.happiness), [5, 9]);
  await save("suicide", vals(mortality.suicide), [8, 20]);
  await save("overdose", vals(mortality.overdose), [4, 40]);
  await save("lifeExpectancy", vals(mortality.lifeExpectancy), [65, 85]);
  await save("smoking", vals(mortality.smoking), [5, 45]);
});

// ---------- index + partition invariant + log ----------
const files = (await Array.fromAsync(new Bun.Glob("*.json").scan(SERIES))).map((f) => f.replace(/\.json$/, "")).sort();
if (!only) {
  invariant(files.length === KEYS.length && KEYS.every((k) => files.includes(k)), `series/ holds ${files.length} files but meta names ${KEYS.length} keys`);
}
const index: Record<string, unknown> = {};
for (const k of files) { const j = await Bun.file(join(SERIES, `${k}.json`)).json(); index[k] = { name: j._meta.name, unit: j._meta.unit, source: j._meta.source, coverage: j._meta.coverage, fetched: j._meta.fetched }; }
await writeFile(join(DIR, "index.json"), JSON.stringify({ generated: NOW, series: index }, null, 2));
// never write absolute machine paths into the log: the repo is public
const scrub = (e: string) => e.split(DIR).join(".").split(work).join("./tmp").slice(0, 160);
await appendFile(join(DIR, "update.log"), `${NOW} wrote ${Object.keys(written).length} series; errors: ${Object.keys(errors).length ? Object.entries(errors).map(([k, e]) => `${k}: ${scrub(e)}`).join(" | ") : "none"}\n`);
console.log(`\n${Object.keys(written).length} series written, ${files.length} in index; errors: ${Object.keys(errors).length}`);
if (Object.keys(errors).length) process.exit(1);
