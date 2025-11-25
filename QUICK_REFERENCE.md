# Substrate Quick Reference

Command cheatsheet for working with Substrate.

---

## Setup

```bash
# Clone repository
git clone https://github.com/danielmiessler/Substrate.git
cd Substrate

# Install Bun (if needed)
curl -fsSL https://bun.sh/install | bash

# Install dependencies
bun install
```

---

## Browse Data

```bash
# List core datasets
ls Data/

# List wellbeing data sources
ls Data-Sources/

# View a specific dataset
cat Data/US-GDP/us-gdp-annual.csv | head -20

# Open in spreadsheet app (macOS)
open Data/US-GDP/us-gdp-annual.csv
```

---

## Update Data

### Single Dataset

```bash
cd Data/US-GDP
bun run update.ts
```

### Wellbeing Sources (Require API Keys)

```bash
# Set API key first
export FRED_API_KEY="your_key"

# Then run update
cd Data-Sources/DS-00004—FRED_Economic_Wellbeing
bun run update.ts
```

### All Datasets

```bash
bun run scripts/update-all.ts
```

---

## API Keys

| Source | Get Key | Env Variable |
|--------|---------|--------------|
| FRED | [fred.stlouisfed.org/docs/api](https://fred.stlouisfed.org/docs/api/api_key.html) | `FRED_API_KEY` |
| Census | [api.census.gov/data/key_signup](https://api.census.gov/data/key_signup.html) | `CENSUS_API_KEY` |
| EPA | Email: aqs.support@epa.gov | `EPA_KEY` |
| BLS | [bls.gov/developers/home](https://www.bls.gov/developers/home.htm) | `BLS_API_KEY` |
| CDC WONDER | No key needed | — |

```bash
# Set all keys at once
export FRED_API_KEY="xxx"
export CENSUS_API_KEY="xxx"
export EPA_KEY="xxx"
export BLS_API_KEY="xxx"
```

---

## Contributing

### Fork & Clone

```bash
# Fork on GitHub, then:
git clone https://github.com/YOUR_USERNAME/Substrate.git
cd Substrate
git remote add upstream https://github.com/danielmiessler/Substrate.git
```

### Create Branch

```bash
git checkout -b add-my-contribution
```

### Commit & Push

```bash
git add .
git commit -m "Add: description"
git push origin add-my-contribution
```

### Stay Updated

```bash
git fetch upstream
git merge upstream/main
```

---

## Directory Quick Reference

| Directory | Contains | ID Format |
|-----------|----------|-----------|
| `Data/` | Core datasets | Folder names |
| `Data-Sources/` | Wellbeing sources | `DS-00001` |
| `Problems/` | Documented challenges | `PR-00001` |
| `Solutions/` | Proven approaches | `SO-00001` |
| `Arguments/` | Reasoning chains | `AR-00001` |
| `Claims/` | Evidence-linked assertions | `CL-00001` |
| `Plans/` | Actionable strategies | `PL-00001` |
| `Ideas/` | Frameworks | `ID-00001` |
| `People/` | Researchers | `PE-00001` |
| `Organizations/` | Groups | `OR-00001` |
| `Projects/` | Initiatives | `PJ-00001` |
| `Values/` | Principles | `VA-00001` |

---

## Data Sources Quick Reference

| ID | Source | Key Indicators |
|----|--------|----------------|
| DS-00001 | WHO Global Health | Health indicators (194 countries) |
| DS-00002 | UN SDG | Sustainable Development Goals |
| DS-00003 | World Bank | Development metrics |
| DS-00004 | FRED Economic | Debt, unemployment, inequality |
| DS-00005 | CDC WONDER | Overdoses, suicides, mortality |
| DS-00006 | Census ACS | Social isolation, commute, digital divide |
| DS-00007 | BLS JOLTS | Quit rate, job openings, layoffs |
| DS-00008 | EPA Air Quality | PM2.5, ozone, air quality |

---

## Common Tasks

### Find a Dataset

```bash
# Search by name
ls Data/ | grep -i gdp
ls Data-Sources/ | grep -i fred

# Search in README files
grep -r "unemployment" Data-Sources/*/README.md
```

### Check Data Freshness

```bash
# View last update time
ls -la Data/US-GDP/*.csv
cat Data/US-GDP/update-log.md | tail -20
```

### Validate Data

```bash
# Count rows
wc -l Data/US-GDP/us-gdp-annual.csv

# Check for missing values
grep -c ",," Data/US-GDP/us-gdp-annual.csv
```

---

## Links

- **README**: [./README.md](./README.md)
- **Getting Started**: [./GETTING_STARTED.md](./GETTING_STARTED.md)
- **Updates**: [./UPDATES.md](./UPDATES.md)
- **Data Philosophy**: [./Data/README.md](./Data/README.md)
- **Library Science**: [./Data/README-LIBRARY-SCIENCE.md](./Data/README-LIBRARY-SCIENCE.md)

---

**[← Back to README](./README.md)** | **[Getting Started →](./GETTING_STARTED.md)**
