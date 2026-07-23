#!/usr/bin/env bun
// update.ts — regenerates every JSON file in this dataset from authoritative US-debt APIs.
// No deps. Run: bun update.ts  (appends a line to update.log)
// FRED key is read from ~/.claude/.env (FRED_API_KEY=...).

import { mkdir, writeFile, readFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

const DATA_DIR = import.meta.dir;
const FISCAL = "https://api.fiscaldata.treasury.gov/services/api/fiscal_service";
const NOW = () => new Date().toISOString();

async function fredKey(): Promise<string | null> {
  if (process.env.FRED_API_KEY) return process.env.FRED_API_KEY;
  try {
    const env = await readFile(join(homedir(), ".claude", ".env"), "utf8");
    const m = env.match(/^FRED_API_KEY=(.+)$/m);
    return m ? m[1].trim().replace(/^["']|["']$/g, "") : null;
  } catch {
    return null;
  }
}

async function getJSON(url: string): Promise<any> {
  const r = await fetch(url, { headers: { "User-Agent": "usdebt-data/1.0" } });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return r.json();
}

async function getText(url: string): Promise<string> {
  const r = await fetch(url, { headers: { "User-Agent": "usdebt-data/1.0" } });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return r.text();
}

async function save(name: string, obj: unknown): Promise<number> {
  const path = join(DATA_DIR, name);
  const body = JSON.stringify(obj, null, 2);
  await writeFile(path, body);
  return Buffer.byteLength(body);
}

// Follow fiscaldata pagination up to a page cap.
async function fiscalAll(path: string, pageSize = 10000, maxPages = 20): Promise<any[]> {
  let page = 1;
  const out: any[] = [];
  while (page <= maxPages) {
    const url = `${FISCAL}${path}${path.includes("?") ? "&" : "?"}page[number]=${page}&page[size]=${pageSize}`;
    const j = await getJSON(url);
    out.push(...(j.data ?? []));
    const total = j.meta?.["total-pages"] ?? 1;
    if (page >= total) break;
    page++;
  }
  return out;
}

const results: Record<string, { bytes?: number; error?: string; note?: string }> = {};
const summary: Record<string, any> = {};

async function step(name: string, fn: () => Promise<void>) {
  try {
    await fn();
  } catch (e: any) {
    results[name] = { error: String(e?.message ?? e) };
    console.error(`FAIL ${name}: ${e?.message ?? e}`);
  }
}

async function main() {
  await mkdir(DATA_DIR, { recursive: true });
  const key = await fredKey();

  // 1. Debt to the Penny — latest + daily
  await step("debt_latest+daily", async () => {
    const latest = await getJSON(
      `${FISCAL}/v2/accounting/od/debt_to_penny?sort=-record_date&page[size]=1`,
    );
    const latestRec = latest.data[0];
    const bLatest = await save("debt_latest.json", {
      _meta: {
        source: "US Treasury Fiscal Data — Debt to the Penny",
        url: `${FISCAL}/v2/accounting/od/debt_to_penny`,
        fetched: NOW(),
        record_date_range: latestRec.record_date,
      },
      record_date: latestRec.record_date,
      tot_pub_debt_out_amt: latestRec.tot_pub_debt_out_amt,
      debt_held_public_amt: latestRec.debt_held_public_amt,
      intragov_hold_amt: latestRec.intragov_hold_amt,
      tot_pub_debt_out: Number(latestRec.tot_pub_debt_out_amt),
      debt_held_public: Number(latestRec.debt_held_public_amt),
      intragov_hold: Number(latestRec.intragov_hold_amt),
    });

    const daily = await getJSON(
      `${FISCAL}/v2/accounting/od/debt_to_penny?sort=-record_date&page[size]=400`,
    );
    const rows = daily.data.map((d: any) => ({
      record_date: d.record_date,
      tot_pub_debt_out_amt: d.tot_pub_debt_out_amt,
      debt_held_public_amt: d.debt_held_public_amt,
      intragov_hold_amt: d.intragov_hold_amt,
      tot_pub_debt_out: Number(d.tot_pub_debt_out_amt),
    }));
    const bDaily = await save("debt_daily.json", {
      _meta: {
        source: "US Treasury Fiscal Data — Debt to the Penny",
        url: `${FISCAL}/v2/accounting/od/debt_to_penny`,
        fetched: NOW(),
        record_date_range: `${rows[rows.length - 1].record_date} .. ${rows[0].record_date}`,
        count: rows.length,
      },
      data: rows,
    });
    results["debt_latest+daily"] = { bytes: bLatest + bDaily };
    summary.debt_latest = {
      record_date: latestRec.record_date,
      total: Number(latestRec.tot_pub_debt_out_amt),
      held_public: Number(latestRec.debt_held_public_amt),
      intragov: Number(latestRec.intragov_hold_amt),
    };
  });

  // 2. Annual debt outstanding 1790 -> present
  await step("debt_annual", async () => {
    const j = await getJSON(
      `${FISCAL}/v2/accounting/od/debt_outstanding?page[size]=300&sort=record_date`,
    );
    const rows = j.data.map((d: any) => ({
      record_date: d.record_date,
      debt_outstanding_amt: d.debt_outstanding_amt,
      debt_outstanding: Number(d.debt_outstanding_amt),
    }));
    const bytes = await save("debt_annual.json", {
      _meta: {
        source: "US Treasury Fiscal Data — Historical Debt Outstanding",
        url: `${FISCAL}/v2/accounting/od/debt_outstanding`,
        fetched: NOW(),
        record_date_range: `${rows[0]?.record_date} .. ${rows[rows.length - 1]?.record_date}`,
        count: rows.length,
      },
      data: rows,
    });
    results.debt_annual = { bytes };
  });

  // 3. Interest expense
  await step("interest_expense", async () => {
    const j = await getJSON(
      `${FISCAL}/v2/accounting/od/interest_expense?sort=-record_date&page[size]=600`,
    );
    const rows = j.data.map((d: any) => ({
      record_date: d.record_date,
      expense_catg_desc: d.expense_catg_desc,
      expense_group_desc: d.expense_group_desc,
      month_expense_amt: d.month_expense_amt,
      fytd_expense_amt: d.fytd_expense_amt,
      fytd_expense: Number(d.fytd_expense_amt),
    }));
    // The endpoint has no explicit "total" row: categories are
    // "INTEREST EXPENSE ON PUBLIC ISSUES" and "...ON GOVT ACCOUNT SERIES",
    // each split into groups. FY total = sum of every group's FYTD at the
    // latest record_date. month total = sum of month_expense_amt likewise.
    const latestDate = rows[0]?.record_date;
    const latestRows = rows.filter((r: any) => r.record_date === latestDate);
    const sumFY = (rs: any[]) => rs.reduce((a, r) => a + (r.fytd_expense || 0), 0);
    const sumMo = (rs: any[]) => rs.reduce((a, r) => a + (Number(r.month_expense_amt) || 0), 0);
    const publicIssues = latestRows.filter((r: any) => /PUBLIC ISSUES/i.test(r.expense_catg_desc));
    const gas = latestRows.filter((r: any) => /GOVT ACCOUNT/i.test(r.expense_catg_desc));
    const latestFYTD = sumFY(latestRows);
    const bytes = await save("interest_expense.json", {
      _meta: {
        source: "US Treasury Fiscal Data — Interest Expense on the Public Debt Outstanding",
        url: `${FISCAL}/v2/accounting/od/interest_expense`,
        fetched: NOW(),
        record_date_range: `${rows[rows.length - 1]?.record_date} .. ${rows[0]?.record_date}`,
        count: rows.length,
        note: "No explicit total row in source; totals here are summed across all expense groups at the latest record_date. FYTD = fiscal-year-to-date (FY starts Oct 1).",
      },
      latest_total_interest: {
        record_date: latestDate,
        fytd_total: latestFYTD,
        fytd_public_issues: sumFY(publicIssues),
        fytd_govt_account_series: sumFY(gas),
        month_total: sumMo(latestRows),
        rows: latestRows,
      },
      data: rows,
    });
    results.interest_expense = { bytes };
    summary.interest_expense = {
      record_date: latestDate,
      fytd_total: latestFYTD,
      fytd_public_issues: sumFY(publicIssues),
      fytd_gas: sumFY(gas),
    };
  });

  // 4. Average interest rates
  await step("avg_rates", async () => {
    const j = await getJSON(
      `${FISCAL}/v2/accounting/od/avg_interest_rates?sort=-record_date&page[size]=200`,
    );
    const rows = j.data.map((d: any) => ({
      record_date: d.record_date,
      security_type_desc: d.security_type_desc,
      security_desc: d.security_desc,
      avg_interest_rate_amt: d.avg_interest_rate_amt,
      avg_interest_rate: Number(d.avg_interest_rate_amt),
    }));
    const latestDate = rows[0]?.record_date;
    const latest = rows.filter((r: any) => r.record_date === latestDate);
    const marketable = latest.find(
      (r: any) => /total marketable/i.test(r.security_desc ?? "") &&
        /marketable/i.test(r.security_type_desc ?? ""),
    );
    const interestBearing = latest.find(
      (r: any) => /total interest-bearing/i.test(r.security_desc ?? ""),
    );
    const bytes = await save("avg_rates.json", {
      _meta: {
        source: "US Treasury Fiscal Data — Average Interest Rates on U.S. Treasury Securities",
        url: `${FISCAL}/v2/accounting/od/avg_interest_rates`,
        fetched: NOW(),
        record_date_range: `${rows[rows.length - 1]?.record_date} .. ${rows[0]?.record_date}`,
        count: rows.length,
      },
      latest_date: latestDate,
      latest_total_marketable: marketable ?? null,
      latest_total_interest_bearing: interestBearing ?? null,
      latest_all: latest,
      data: rows,
    });
    results.avg_rates = { bytes };
    summary.avg_rates = {
      record_date: latestDate,
      total_marketable: marketable?.avg_interest_rate_amt ?? null,
      total_interest_bearing: interestBearing?.avg_interest_rate_amt ?? null,
    };
  });

  // 5. TIC Major Foreign Holders — SLT Table 5 (current monthly publication).
  // ⚠️ The legacy https://ticdata.treasury.gov/Publish/mfh.txt is FROZEN at Jan 2023 — never use it.
  await step("foreign_holders", async () => {
    const URL_T5 = "https://ticdata.treasury.gov/resource-center/data-chart-center/tic/Documents/slt_table5.txt";
    const txt5 = await getText(URL_T5);
    const lines5 = txt5.split("\n").map((l) => l.replace(/\r/g, "")).filter((l) => l.trim());
    const headerIdx = lines5.findIndex((l) => l.startsWith("Country\t"));
    if (headerIdx < 0) throw new Error("SLT table 5 format changed — no Country header row");
    const months = lines5[headerIdx].split("\t").slice(1).map((s) => s.trim()).filter(Boolean);
    const holders: any[] = [];
    let grandTotal: Record<string, number> | null = null;
    let foreignOfficial: Record<string, number> | null = null;
    for (const line of lines5.slice(headerIdx + 1)) {
      const cells = line.split("\t").map((s) => s.trim());
      const name = cells[0];
      if (!name) continue;
      const series: Record<string, number> = {};
      months.forEach((mo, i) => {
        const v = parseFloat(cells[i + 1]);
        if (!Number.isNaN(v)) series[mo] = v;
      });
      if (/^Grand Total/i.test(name)) grandTotal = series;
      else if (/^Of Which: Foreign Official$/i.test(name)) foreignOfficial = series;
      else if (!/^Of Which/i.test(name)) holders.push({ country: name, holdings_billions: series[months[0]], series });
    }
    if (!grandTotal || holders.length < 15) throw new Error("SLT table 5 parse failure");
    if (grandTotal[months[0]] < 7000 || grandTotal[months[0]] > 13000)
      throw new Error("grand total implausible: " + grandTotal[months[0]]);
    const bytes = await save("foreign_holders.json", {
      _meta: {
        source: "US Treasury TIC — SLT Table 5, Major Foreign Holders of Treasury Securities",
        url: URL_T5,
        fetched: NOW(),
        as_of_month: months[0],
        record_date_range: `${months[months.length - 1]} .. ${months[0]}`,
        units: "billions of USD",
        note: "Legacy Publish/mfh.txt is frozen at Jan 2023; SLT Table 5 is the current monthly publication.",
      },
      as_of_month: months[0],
      grand_total_billions: grandTotal[months[0]],
      foreign_official_billions: foreignOfficial ? foreignOfficial[months[0]] : null,
      grand_total_series: grandTotal,
      foreign_official_series: foreignOfficial,
      holders,
    });
    results.foreign_holders = { bytes };
    summary.foreign_holders = {
      as_of_month: months[0],
      grand_total_billions: grandTotal[months[0]],
      top5: holders.slice(0, 5).map((h) => ({ country: h.country, holdings_billions: h.holdings_billions })),
    };
    return;
  });

  // 6. Fed SOMA holdings summary
  await step("soma", async () => {
    const j = await getJSON("https://markets.newyorkfed.org/api/soma/summary.json");
    const summaryArr = j.soma?.summary ?? [];
    const latest = summaryArr[summaryArr.length - 1] ?? summaryArr[0];
    const bytes = await save("soma.json", {
      _meta: {
        source: "Federal Reserve Bank of New York — SOMA Holdings Summary",
        url: "https://markets.newyorkfed.org/api/soma/summary.json",
        fetched: NOW(),
        record_date_range: latest?.asOfDate ?? "unknown",
      },
      latest,
      all: summaryArr,
    });
    results.soma = { bytes };
    const treasuryTotal =
      (Number(latest?.notesbonds || 0) + Number(latest?.bills || 0) + Number(latest?.tips || 0) +
        Number(latest?.frn || 0) + Number(latest?.tipsInflationCompensation || 0));
    summary.soma = {
      asOfDate: latest?.asOfDate,
      notesbonds: latest?.notesbonds,
      bills: latest?.bills,
      tips: latest?.tips,
      frn: latest?.frn,
      total_treasury: treasuryTotal,
      raw_total: latest?.total,
    };
  });

  // 7. MSPD table 1 — marketable vs nonmarketable
  await step("mspd", async () => {
    const j = await getJSON(
      `${FISCAL}/v1/debt/mspd/mspd_table_1?sort=-record_date&page[size]=30`,
    );
    const latestDate = j.data[0]?.record_date;
    const latestRows = j.data.filter((d: any) => d.record_date === latestDate).map((d: any) => ({
      record_date: d.record_date,
      security_type_desc: d.security_type_desc,
      security_class_desc: d.security_class_desc,
      debt_held_public_mil_amt: d.debt_held_public_mil_amt,
      intragov_hold_mil_amt: d.intragov_hold_mil_amt,
      total_mil_amt: d.total_mil_amt,
    }));
    const bytes = await save("mspd.json", {
      _meta: {
        source: "US Treasury Fiscal Data — Monthly Statement of the Public Debt (MSPD) Table 1",
        url: `${FISCAL}/v1/debt/mspd/mspd_table_1`,
        fetched: NOW(),
        record_date_range: latestDate,
      },
      latest_date: latestDate,
      latest: latestRows,
      data: j.data,
    });
    results.mspd = { bytes };
    summary.mspd = { record_date: latestDate, rows: latestRows.length };
  });

  // 8. Debt as % of GDP — FRED GFDEGDQ188S
  await step("debt_gdp", async () => {
    if (key) {
      const j = await getJSON(
        `https://api.stlouisfed.org/fred/series/observations?series_id=GFDEGDQ188S&api_key=${key}&file_type=json`,
      );
      const obs = j.observations.map((o: any) => ({
        date: o.date,
        value: o.value,
        pct: o.value === "." ? null : Number(o.value),
      }));
      const latest = [...obs].reverse().find((o: any) => o.pct !== null);
      const bytes = await save("debt_gdp.json", {
        _meta: {
          source: "FRED — Federal Debt: Total Public Debt as Percent of GDP (GFDEGDQ188S)",
          url: "https://api.stlouisfed.org/fred/series/observations?series_id=GFDEGDQ188S",
          fetched: NOW(),
          record_date_range: `${obs[0]?.date} .. ${obs[obs.length - 1]?.date}`,
          count: obs.length,
        },
        latest,
        data: obs,
      });
      results.debt_gdp = { bytes };
      summary.debt_gdp = { date: latest?.date, pct: latest?.pct };
    } else {
      results.debt_gdp = { error: "no FRED_API_KEY", note: "skipped, no fabrication" };
    }
  });

  // 9. Gift contributions (fun fact) — skip cleanly on 404
  await step("gift_contributions", async () => {
    try {
      const j = await getJSON(
        `${FISCAL}/v2/accounting/od/gift_contributions?sort=-record_date&page[size]=50`,
      );
      const rows = j.data.map((d: any) => ({
        record_date: d.record_date,
        gift_amt: d.gift_amt ?? d.gift_contribution_amt,
        ...d,
      }));
      const bytes = await save("gift_contributions.json", {
        _meta: {
          source: "US Treasury Fiscal Data — Gift Contributions to Reduce the Public Debt",
          url: `${FISCAL}/v2/accounting/od/gift_contributions`,
          fetched: NOW(),
          record_date_range: `${rows[rows.length - 1]?.record_date} .. ${rows[0]?.record_date}`,
          count: rows.length,
        },
        data: rows,
      });
      results.gift_contributions = { bytes };
      summary.gift_contributions = { latest: rows[0]?.record_date, count: rows.length };
    } catch (e: any) {
      if (/HTTP 404/.test(String(e?.message))) {
        results.gift_contributions = { note: "404 — endpoint absent, skipped cleanly" };
      } else throw e;
    }
  });

  console.log("\n=== RESULTS ===");
  console.log(JSON.stringify({ results, summary }, null, 2));
}

await main();
// append update log
const line = `${NOW()} | update.ts | latest=${summary.debt_latest?.record_date} total=$${(summary.debt_latest?.total / 1e12).toFixed(3)}T | foreign=${summary.foreign_holders?.as_of_month} $${summary.foreign_holders?.grand_total_billions}B | soma=${summary.soma?.asOfDate} | errors=${Object.values(results).filter((r: any) => r.error).length}\n`;
await writeFile(join(DATA_DIR, "update.log"), (await readFile(join(DATA_DIR, "update.log"), "utf8").catch(() => "")) + line);
console.log(line.trim());
