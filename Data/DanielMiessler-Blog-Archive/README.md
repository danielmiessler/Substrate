# Daniel Miessler Blog Archive

Metadata for every published post on [danielmiessler.com](https://danielmiessler.com) — 3,027 posts from 1996 through 2026.

**Answer first:** see [SUMMARY.md](./SUMMARY.md).

## Schema

`danielmiessler-blog-archive.csv`:

| Column | Type | Notes |
|--------|------|-------|
| title | string | Post title (legacy corrupt titles replaced with slug-derived fallbacks) |
| subtitle | string | May be empty |
| url | string | Absolute URL on danielmiessler.com |
| date | YYYY-MM-DD | Publication date; empty when unparseable (1 post) |
| tags | string | Pipe-delimited, e.g. `ai\|technology` |

`search-index.json` is the same data as compact tuples `[title, subtitle, path, date, tags]` — the exact artifact the live site's ⌘K command palette fetches.

## Refresh

Regenerated from the site build whenever the archive materially changes. The live version is always at [danielmiessler.com/data/search-index.json](https://danielmiessler.com/data/search-index.json).
