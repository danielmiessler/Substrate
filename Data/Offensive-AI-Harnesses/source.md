# Source Record: Offensive AI Harnesses

## Source of record

The Offsec Harness Index keeps its data in four files (evidence, field roster, sources, use tags) plus GitHub facts, in its own repository. The site renders the page and https://offsecharnesses.ai/data.json from them; `update.ts` here copies `/data.json` and flattens it, so corrections go to the site, never to these files. Report errors as an issue or pull request on this repository.

## How a harness is tied to an attack

A harness is in the evidence table only when a security vendor, IR firm, CERT, government agency or AI lab names it in its own report of a real operation. It is never tied to an attack from overlapping TTPs, shared tooling or the compiler's own judgment. Forum posts, marketing and news stories that cite no primary report do not count. When a report hedges ("experimentation", "not used against victims"), the row says so.

- **Confirmed** — the report shows the harness in a real operation.
- **Observed** — aimed at real targets or found on attacker infrastructure, no breach stated.
- **No attack on record** — none in primary reporting.

Every evidence pass is reviewed by an independent model against the linked reports before it ships. A README tag is the project's own claim, not a tested result.

## Use tags

Seven tags, defined in `harnesses.json` → `use_tags`. Two bases:

- **attack report** — the use appears in a report of a real operation; `source` is that report and `quote` is the report's own sentence.
- **project docs** — the project's own README states it; `quote` is the README sentence (verbatim, markdown included), `source` is the README. A tool table that lists sqlmap does not earn Exploitation: the README has to say the project attacks targets. Projects with no README, or general agents whose README describes no offensive use, carry no docs tags.

The site's refresh re-fetches every README and fails if a tagged sentence is no longer there.

## Field roster rule

Public GitHub repository, OSI license, an LLM in the loop of offensive security work (pentest agent, red-team harness, offensive skill pack or MCP server), 100 stars or more; candidates came from awesome-ai-pentesting lists and vendor reporting and were each checked against the GitHub API. Source-available projects (CAI) and commercial agents (Claude Code, Codex, Gemini CLI) are out of scope for the tables; they are in the research notes.

## Refresh

- GitHub facts and README tag sentences: every site refresh.
- Attack evidence: re-reviewed at most every 21 days; the site's refresh fails once the review is older. `evidence_reviewed` in `harnesses.json` dates the last pass.
- This dataset: `bun Data/Offensive-AI-Harnesses/update.ts` after a site deploy.
