# Getting Started with Substrate

This guide walks you through setting up and using Substrate, the infrastructure for human knowledge and progress.

---

## Prerequisites

### Required
- **Git** - To clone the repository
- A text editor or IDE

### Optional (for automation)
- **[Bun](https://bun.sh)** - JavaScript/TypeScript runtime for running update scripts
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/danielmiessler/Substrate.git
cd Substrate
```

### 2. Explore the Structure

```bash
# Core datasets (GDP, inflation, COVID wastewater, etc.)
ls Data/

# Wellbeing data sources (FRED, CDC, Census, BLS, EPA)
ls Data-Sources/

# Knowledge components
ls Problems/
ls Solutions/
ls Arguments/
ls Claims/
```

### 3. Install Dependencies (Optional)

If you want to run the TypeScript automation scripts:

```bash
bun install
```

---

## Viewing the Data

All data is stored in human-readable formats:

- **CSV files** - Raw data you can open in Excel, Google Sheets, or any spreadsheet app
- **Markdown files** - Documentation and metadata

No special tools required - just browse the repository!

### Example: View US GDP Data

```bash
# See the data files
ls Data/US-GDP/

# View the CSV in terminal
cat Data/US-GDP/us-gdp-annual.csv | head -20

# Or open in your favorite spreadsheet app
open Data/US-GDP/us-gdp-annual.csv
```

---

## Running Updates

> **Note:** This is optional. The data is already included in the repository.

### Update a Single Dataset

```bash
cd Data/US-GDP
bun run update.ts
```

### Update a Wellbeing Data Source

Most wellbeing sources require API keys:

```bash
# Set your API key
export FRED_API_KEY="your_key_here"

# Run the update
cd Data-Sources/DS-00004—FRED_Economic_Wellbeing
bun run update.ts
```

### Update All Datasets

```bash
bun run scripts/update-all.ts
```

---

## API Keys

Most data sources are free but require registration:

| Data Source | Get Key | Rate Limit |
|-------------|---------|------------|
| **FRED Economic** | [fred.stlouisfed.org/docs/api](https://fred.stlouisfed.org/docs/api/api_key.html) | 120 req/min |
| **Census ACS** | [api.census.gov/data/key_signup](https://api.census.gov/data/key_signup.html) | 500 req/day |
| **EPA Air Quality** | Email: aqs.support@epa.gov | 10 req/min |
| **BLS JOLTS** | [bls.gov/developers/home](https://www.bls.gov/developers/home.htm) | 500 req/day |
| **CDC WONDER** | No key required | Fair use |

### Setting Up Environment Variables

Create a `.env` file in the repository root:

```bash
FRED_API_KEY=your_fred_key
CENSUS_API_KEY=your_census_key
EPA_EMAIL=your_email@example.com
EPA_KEY=your_epa_key
BLS_API_KEY=your_bls_key
```

Or export them in your shell:

```bash
export FRED_API_KEY="your_fred_key"
export CENSUS_API_KEY="your_census_key"
```

---

## Contributing

We welcome contributions! Here's how to add to Substrate:

### What You Can Contribute

| Type | Directory | Description |
|------|-----------|-------------|
| **Problems** | `Problems/` | Documented challenges with evidence |
| **Solutions** | `Solutions/` | Proven approaches with results |
| **Arguments** | `Arguments/` | Reasoning chains with quality scores |
| **Claims** | `Claims/` | Assertions linked to evidence |
| **Data** | `Data/` or `Data-Sources/` | Authoritative datasets |
| **People** | `People/` | Researchers and practitioners |
| **Organizations** | `Organizations/` | Groups working on problems |
| **Projects** | `Projects/` | Active initiatives |
| **Plans** | `Plans/` | Actionable strategies |
| **Ideas** | `Ideas/` | Frameworks and concepts |
| **Values** | `Values/` | Guiding principles |

### How to Submit

1. **Fork the repository** on GitHub

2. **Create a branch** for your contribution:
   ```bash
   git checkout -b add-my-contribution
   ```

3. **Add your content** following the format in each directory's README

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add: description of your contribution"
   ```

5. **Push and create a Pull Request**:
   ```bash
   git push origin add-my-contribution
   ```

### Contribution Guidelines

- **Follow existing formats** - Check the README in each directory for templates
- **Include evidence** - Link claims to data sources where possible
- **Use clear IDs** - Follow the naming conventions (e.g., `PR-00001` for problems)
- **Document your sources** - Include provenance and methodology
- **Be specific** - Vague contributions are harder to use

### Quality Standards

We don't gatekeep ideas, but we do maintain quality:

- **Problems** should be specific and evidence-backed
- **Solutions** should include outcomes or expected results
- **Arguments** should have clear reasoning chains
- **Data** should include methodology and limitations

---

## Directory Structure

```
Substrate/
├── Data/                    # Core datasets
│   ├── US-GDP/             # US GDP data (1929-present)
│   ├── US-Inflation/       # US inflation data
│   ├── Bay-Area-COVID/     # COVID wastewater monitoring
│   ├── Pulitzer-Prize/     # Pulitzer Prize winners
│   └── Knowledge-Worker-Salaries/
│
├── Data-Sources/            # Wellbeing data sources
│   ├── DS-00001—WHO_Global_Health_Observatory/
│   ├── DS-00002—UN_SDG_Indicators/
│   ├── DS-00003—World_Bank_Open_Data/
│   ├── DS-00004—FRED_Economic_Wellbeing/
│   ├── DS-00005—CDC_WONDER_Mortality/
│   ├── DS-00006—Census_ACS_Social_Wellbeing/
│   ├── DS-00007—BLS_JOLTS_Labor_Market/
│   └── DS-00008—EPA_Air_Quality_System/
│
├── Problems/                # Documented challenges
├── Solutions/               # Proven approaches
├── Arguments/               # Reasoning chains
├── Claims/                  # Evidence-linked assertions
├── Plans/                   # Actionable strategies
├── Ideas/                   # Frameworks and concepts
├── People/                  # Researchers and practitioners
├── Organizations/           # Groups working on issues
├── Projects/                # Active initiatives
├── Values/                  # Guiding principles
│
├── scripts/                 # Automation scripts
├── README.md               # Main documentation
├── GETTING_STARTED.md      # This file
├── QUICK_REFERENCE.md      # Command cheatsheet
└── UPDATES.md              # Changelog
```

---

## Next Steps

1. **Explore the data** - Browse `Data/` and `Data-Sources/` to see what's available
2. **Read the documentation** - Each dataset has its own README with methodology
3. **Try the automation** - Run an update script to see how data is refreshed
4. **Contribute** - Add a problem, solution, or data source you care about

---

## Getting Help

- **Issues** - [github.com/danielmiessler/Substrate/issues](https://github.com/danielmiessler/Substrate/issues)
- **Discussions** - Start a discussion in the repository
- **Twitter** - [@danielmiessler](https://twitter.com/danielmiessler)

---

## Related Projects

- **[TELOS](https://github.com/danielmiessler/Telos)** - Goals and strategy framework
- **[Fabric](https://github.com/danielmiessler/fabric)** - AI augmentation framework

---

**[← Back to README](./README.md)** | **[Quick Reference →](./QUICK_REFERENCE.md)**
