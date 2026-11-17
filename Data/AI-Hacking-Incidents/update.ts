// Rebuilds the derived files of this dataset from its four JSON files: incidents.csv, sources.csv, SUMMARY.md, and a line in update.log.
// Usage: bun Data/AI-Hacking-Incidents/update.ts [--live]
//   --live  also read https://hackingincidents.ai/status.json and report whether its incident count matches incidents.json (no key, one GET).
// The four JSON files are exported from the site's data by the site's own export step (see source.md); they are the source of record here.
// Importing this file runs nothing; `derive(dir)` is what the export step calls.
import { appendFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = import.meta.dir;

interface Src { title: string; publisher: string; url: string; date?: string; primary?: boolean; verified_on?: string; fetch_status?: number; archive_url?: string; aggregator_only?: boolean; primary_via_party?: string }
interface Enrichment { models: { name: string; vendor: string; openness: string; kind: string }[]; harness: { used: boolean; names: string[]; kind: string }; countries: string[]; country_basis: string; sectors: string[] }
interface Incident { id: string; title: string; date: string; actor: string; actor_type: string; nexus?: string | null; targets: string; ai_role: string[]; models: string[]; model_basis: string; autonomy?: string; outcome: string; confidence: string; confidence_reason: string; summary: string; quote?: string; single_source_reason?: string; sources: Src[]; enrichment?: Enrichment }
interface Registered { publisher: string; url: string; kind: string; role: string; swept?: string; note?: string; incidents_citing: number }
interface Regrade { first: string; second: string; final: string; agree: boolean; reason?: string; primary_sources: string[] }

const read = <T>(dir: string, f: string): T => JSON.parse(readFileSync(join(dir, f), "utf8")) as T;
const tally = <T>(xs: T[], key: (x: T) => string | string[]): [string, number][] => {
  const m = new Map<string, number>();
  for (const x of xs) for (const k of [key(x)].flat()) m.set(k, (m.get(k) ?? 0) + 1);
  return [...m].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};
const pct = (n: number, d: number): string => (d ? `${Math.round((100 * n) / d)}%` : "n/a");

/** One cell. Cells that a spreadsheet would read as a formula get a leading apostrophe. */
function cell(v: unknown): string {
  let s = v == null ? "" : String(v).replace(/<[^>]+>/g, "");
  if (/^[=+@\t\r]/.test(s)) s = `'${s}`;
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
const csv = (rows: unknown[][]): string => rows.map((r) => r.map(cell).join(",")).join("\n") + "\n";

export interface Derived { incidents: number; sources: number; candidates: number; regraded: number; dataset_date: string }

export function derive(dir: string = DIR): Derived {
  const inc = read<{ updated: string; incidents: Incident[] }>(dir, "incidents.json");
  const reg = read<{ updated: string; sources: Registered[] }>(dir, "sources.json");
  const cand = read<{ updated: string; counts: Record<string, number>; families: { family: string; swept: string; candidates: unknown[] }[]; curation: { distinct: unknown[]; exclude: Record<string, string>; heldout: Record<string, string> }; changes: { id: string; field: string; old: string; new: string | null; reason: string }[] }>(dir, "candidates.json");
  const rg = read<{ updated: string; regrade: Record<string, Regrade> }>(dir, "regrade.json");
  const I = inc.incidents;
  if (I.length === 0) throw new Error("incidents.json holds no incidents");
  const date = inc.updated;

  // ---- CSV ----
  writeFileSync(join(dir, "incidents.csv"), csv([
    ["id", "date", "title", "grade", "grade_reason", "actor", "actor_type", "nexus", "targets", "ai_roles", "autonomy", "models_named_by_source", "model_basis", "harness_kind", "harness_names", "attributed_countries", "country_basis", "sectors", "outcome", "sources", "primary_sources", "single_source_reason", "source_urls", "summary", "quote"],
    ...I.map((i) => [i.id, i.date, i.title, i.confidence, i.confidence_reason, i.actor, i.actor_type, i.nexus ?? "", i.targets, i.ai_role.join(" "), i.autonomy ?? "", i.models.join("; "), i.model_basis, i.enrichment?.harness.kind ?? "", (i.enrichment?.harness.names ?? []).join("; "), (i.enrichment?.countries ?? []).join(" "), i.enrichment?.country_basis ?? "", (i.enrichment?.sectors ?? []).join(" "), i.outcome, i.sources.length, i.sources.filter((s) => s.primary).length, i.single_source_reason ?? "", i.sources.map((s) => s.url).join(" "), i.summary, i.quote ?? ""]),
  ]));
  writeFileSync(join(dir, "sources.csv"), csv([["publisher", "kind", "role", "last_swept", "incidents_citing", "url", "note"], ...reg.sources.map((s) => [s.publisher, s.kind, s.role, s.swept ?? "", s.incidents_citing, s.url, s.note ?? ""])]));

  // ---- SUMMARY.md ----
  const grade = (g: string): number => I.filter((i) => i.confidence === g).length;
  const conf = grade("CONFIRMED"), strong = grade("STRONG"), susp = grade("SUSPECTED");
  const rows = Object.entries(rg.regrade);
  const agreed = rows.filter(([, r]) => r.agree).length;
  const swept = reg.sources.filter((s) => s.role === "swept").length;
  const unreachable = reg.sources.filter((s) => s.role === "unreachable").length;
  const lastSweep = reg.sources.map((s) => s.swept ?? "").sort().pop() || "not recorded";
  const withPrimary = I.filter((i) => i.sources.some((s) => s.primary)).length;
  const single = I.filter((i) => i.single_source_reason).length;
  const years = tally(I, (i) => i.date.slice(0, 4)).sort((a, b) => a[0].localeCompare(b[0]));
  const autonomy = tally(I, (i) => i.autonomy ?? "not stated");
  const kinds = tally(reg.sources, (s) => s.kind);
  const citingByKind = new Map<string, number>();
  for (const s of reg.sources) citingByKind.set(s.kind, (citingByKind.get(s.kind) ?? 0) + s.incidents_citing);
  const WEIGHT: Record<string, [string, string, string]> = {
    "model-provider": ["Sees its own platform; names the model and the account", "Reports only what it chooses to publish, and only on its own platform", "High"],
    "vendor-ti": ["Telemetry and forensic detail; investigates the intrusion itself", "Has a commercial reason to publish; sees only its own customers", "High"],
    government: ["Advisories and indictments are on-record and attributable", "Slow, and often silent on how AI was used", "High"],
    "court-record": ["Sworn or adjudicated; names the facts that were proven", "Rare, and late", "High"],
    "incident-database": ["Finds cases the other families miss; links to originals", "Restates other reports; not counted as independent corroboration", "Low"],
    academic: ["Systematic, with method sections", "Often measures capability, not a real operation", "Medium"],
    press: ["Reaches fraud, arrests and victims that vendors never see", "Repeats claims; counts as primary only when it quotes a named party on the record", "Medium"],
    "regional-cert": ["Local-language reporting from the affected region", "Terse, and hard to cross-check", "Medium"],
  };
  const oneLiner = `${I.length} published AI-assisted attacks on file, ${conf} confirmed by primary sources.`;
  const other = (() => {
    const o: string[] = [];
    const a = join(dir, "..", "Vulnerability-And-Breach-Data", "ai-incidents.json"), h = join(dir, "..", "Offensive-AI-Harnesses", "harnesses.json");
    if (existsSync(a)) { const n = (JSON.parse(readFileSync(a, "utf8")) as { incidents: unknown[] }).incidents.length; o.push(`| **${n} ledger rows** | [Vulnerability-And-Breach-Data/ai-incidents.json](../Vulnerability-And-Breach-Data/ai-incidents.json) | One row per actor or tool per primary document, defender demonstrations included | A different unit and a narrower sweep; it feeds vulnerabilitydata.io and is not replaced by this dataset |`); }
    if (existsSync(h)) { const d = JSON.parse(readFileSync(h, "utf8")) as { harnesses: { table: string }[] }; const n = d.harnesses.filter((x) => x.table === "evidence").length; o.push(`| **${n} harnesses with attacker use** | [Offensive-AI-Harnesses](../Offensive-AI-Harnesses/SUMMARY.md) | Open-source agent harnesses named in attack reports | Counts tools, not incidents; one incident can name several harnesses and most incidents name none |`); }
    return o;
  })();
  const updates = existsSync(join(dir, "UPDATES.md")) ? readFileSync(join(dir, "UPDATES.md"), "utf8") : "";
  const log = updates.split(/\n(?=## \d{4}-\d{2}-\d{2} — )/).slice(1).map((sec) => {
    const head = /^## (\d{4}-\d{2}-\d{2}) — (.+)$/m.exec(sec);
    const why = /^Why: (.+)$/m.exec(sec);
    return head ? `| ${head[1]} | ${head[2]} | ${why ? why[1] : "See UPDATES.md"} |` : "";
  }).filter(Boolean);
  const changeRows = cand.changes.map((c) => `| by ${date} | ${c.field === "removed" ? (c.new ? `Merged into \`${c.new}\`` : "Removed") : `Grade ${c.old} to ${c.new}`}: \`${c.id}\` | ${c.reason.replace(/\|/g, "/").replace(/\n/g, " ")} |`);

  writeFileSync(join(dir, "SUMMARY.md"), `# AI Hacking Incidents: Executive Summary

> Generated by \`update.ts\` from the four JSON files in this directory (dataset date ${date}). Do not edit by hand.

## 🎯 BEST ESTIMATE

| Metric | Value | Confidence | Last Updated |
|--------|-------|------------|--------------|
| **Publicly reported AI-assisted attacks on file** | **${I.length}** | 60% (a floor: only what was published and found) | ${date} |
| **Confirmed by a primary source** | **${conf}** (${pct(conf, I.length)}) | 85% (written rubric, second grader) | ${date} |
| **Strong or Suspected** | **${strong}** Strong, **${susp}** Suspected | 75% (judgment against the same rubric) | ${date} |
| **Sources swept** | **${swept}** (${reg.sources.length} in the registry: ${unreachable} unreachable, ${reg.sources.length - swept - unreachable} cited only) | 95% | ${lastSweep} |
| **Sweep candidates reviewed** | **${cand.counts.reviewed}** (${cand.counts.admitted} admitted, ${cand.counts.merged} merged, ${cand.counts.excluded} excluded) | 90% | ${lastSweep} |

**One-liner:** ${oneLiner}

**Caveat:** This counts published reports, not attacks; an attack nobody wrote up is invisible here.

---

## Quick Context

Each row is one operation against real targets in which attackers used AI, or in which credible evidence says they probably did, from January 2023. A grade says how strong the evidence of AI use is; it does not say how bad the attack was. The count rises when more is published and found, which is not the same as more happening, and what vendors and model providers can see on their own platforms is over-represented.

---

## Methodology Summary

**Approach:** Sweep a registry of sources, disposition every candidate (admitted, merged, or excluded with a reason), check each supporting quote against the fetched text of its own sources, and grade each incident twice, the second time by a grader who did not extract it.

**Sources:** ${swept} swept; ${reg.sources.length} in the registry, in ${kinds.length} families: ${kinds.map(([k, n]) => `${n} ${k}`).join(", ")}. See [sources.csv](./sources.csv).

**Definition Used:** An incident is one operation, with real targets, where the source says AI did part of the attacker's work. Attribution is the source's, never ours. Full rules: [research/ai-hacking-incidents-2026-11/METHODOLOGY.md](../../research/ai-hacking-incidents-2026-11/METHODOLOGY.md).

---

## Detailed Findings

| Grade | Incidents | Share | Meaning |
|-------|-----------|-------|---------|
| Confirmed | ${conf} | ${pct(conf, I.length)} | The provider, victim, a government or the investigating firm states AI use, with evidence |
| Strong | ${strong} | ${pct(strong, I.length)} | A credible firm or agency attributes AI use from artifacts, or a victim gives a first-hand account with specifics |
| Suspected | ${susp} | ${pct(susp, I.length)} | Reported and plausible, evidence thin, secondary or second-hand |

| Year | Incidents |
|------|-----------|
${years.map(([y, n]) => `| ${y} | ${n} |`).join("\n")}

| Autonomy as the source describes it | Incidents |
|-------------------------------------|-----------|
${autonomy.map(([k, n]) => `| ${k} | ${n} |`).join("\n")}

- ${withPrimary} of ${I.length} incidents cite at least one primary source (${pct(withPrimary, I.length)}).
- ${single} carry a written reason for resting on a single publisher.
- Counts by year follow publication and discovery as much as events; the earlier years are thin because less was published about them, not because less happened.

---

## Source Analysis

### Why These Sources?

| Source family | Strengths | Weaknesses | Weight Given | Registered | Incident citations |
|---------------|-----------|------------|--------------|------------|--------------------|
${kinds.map(([k, n]) => { const w = WEIGHT[k] ?? ["", "", "Medium"]; return `| **${k}** | ${w[0]} | ${w[1]} | ${w[2]} | ${n} | ${citingByKind.get(k) ?? 0} |`; }).join("\n")}

Incident citations count an incident once per registered source it cites, so an incident that cites two sources of one family counts twice there.

### Key Source Conflicts

1. **Two graders disagreed** on ${rows.length - agreed} of ${rows.length} regraded incidents (${pct(rows.length - agreed, rows.length)}); each disagreement has a written reason in [regrade.json](./regrade.json), and the ledger carries the final grade.
2. **One report, many operations.** A single vendor report often covers several actors. Each named actor the report describes on its own is one incident; the rest of the report is not counted.
3. **Same actor, different vendors.** ${cand.curation.distinct.length} pairs that look alike (same named actor within a month, or the same quote) are kept as separate incidents, each with the reason in [candidates.json](./candidates.json) under \`curation.distinct\`.

---

## Research Metadata

| Attribute | Value |
|-----------|-------|
| **Research Date** | ${lastSweep} (last sweep); dataset ${date} |
| **Researcher** | AI agents under a written method, reviewed by a person before each update |
| **Method** | Registry sweep, dispositioned candidates, quote check against fetched text, independent second grading |
| **Confidence Level** | 60% on the count (a floor); 85% on the grades |
| **Known Gaps** | Unpublished attacks; English-language reporting is read best; activity on platforms the large vendors cannot see; ${I.length - withPrimary} incidents with no primary source |

---

## Alternative Estimates & Why We Differ

| Estimate | Source | What It Actually Measures | Why It Differs |
|----------|--------|--------------------------|----------------|
${other.join("\n")}
| **${I.length} incidents** | This dataset | Operations with a source, graded by strength of evidence of AI use | Counts published operations only, with attackers using AI as the test |

### Why Our Approach

- One incident is one operation with real targets, so a count means something the reader can check against the source.
- The grade is separate from severity, so a small incident with strong evidence is not ranked below a large one with weak evidence.
- Related cases we do not count (agents that left an evaluation, AI used only as infrastructure, influence operations with no hacking, researcher proofs of concept) are named in the methodology, not silently dropped.

**Key insight:** Trackers that report different numbers are usually counting different things, and none of them counts attacks.

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
${[...log, ...changeRows].join("\n") || "| " + date + " | Dataset created | First export from the site's data |"}

---

## Full Data

[incidents.json](./incidents.json) · [incidents.csv](./incidents.csv) · [sources.json](./sources.json) · [sources.csv](./sources.csv) · [candidates.json](./candidates.json) · [regrade.json](./regrade.json) · method: [source.md](./source.md) · research: [research/ai-hacking-incidents-2026-11](../../research/ai-hacking-incidents-2026-11/README.md)
`);

  // ---- update.log: one line per distinct state, so re-running changes nothing ----
  const logFile = join(dir, "update.log");
  const sig = `dataset=${date} incidents=${I.length} sources=${reg.sources.length} candidates=${cand.counts.reviewed} regraded=${rows.length}`;
  const last = existsSync(logFile) ? readFileSync(logFile, "utf8").trimEnd().split("\n").pop() ?? "" : "";
  if (!last.endsWith(sig)) appendFileSync(logFile, `${new Date().toISOString()} ${sig}\n`);
  return { incidents: I.length, sources: reg.sources.length, candidates: cand.counts.reviewed, regraded: rows.length, dataset_date: date };
}

if (import.meta.main) {
  const d = derive(DIR);
  console.log(`wrote incidents.csv, sources.csv, SUMMARY.md: ${d.incidents} incidents, ${d.sources} sources, ${d.candidates} candidates, ${d.regraded} regraded, dataset ${d.dataset_date}`);
  if (process.argv.includes("--live")) {
    try {
      const live = (await (await fetch("https://hackingincidents.ai/status.json")).json()) as { incident_count: number; dataset_date: string };
      console.log(live.incident_count === d.incidents ? `live site agrees: ${live.incident_count} incidents (${live.dataset_date})` : `live site differs: ${live.incident_count} incidents (${live.dataset_date}) against ${d.incidents} here`);
    } catch {
      console.log("live site did not return status.json; nothing compared");
    }
  }
}
