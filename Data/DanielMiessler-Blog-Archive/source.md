# Sources

| Source | What it provides | Access |
|--------|------------------|--------|
| danielmiessler.com build pipeline | Post frontmatter → metadata artifact | First-party (site owner) |
| https://danielmiessler.com/data/search-index.json | Live, always-current version of this dataset | Public HTTP |

## Provenance

Generated 2026-07-20 from the site's build-time metadata generator. The CSV and JSON here are derived from the identical artifact deployed to the live site the same day. Data quality notes: ~38 legacy entries with corrupt frontmatter slugs are excluded; literal `"null"` strings in legacy subtitle/date fields are blanked; titles that carried a `">-"` YAML artifact are replaced with slug-derived titles.
