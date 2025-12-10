# Data

## Purpose

The Data directory contains curated, ground-truth datasets about important aspects of human life, society, and progress, along with documentation for external data sources. This is a collection of reliable, parseable data that can be used for analysis, research, and informed decision-making.

## Directory Structure

```
Data/
├── sources/                           # External data source catalog (APIs, endpoints, metadata)
│   ├── DS-00001—WHO_Global_Health_Observatory/
│   ├── DS-00002—UN_SDG_Indicators/
│   ├── DS-00003—World_Bank_Open_Data/
│   ├── DS-00004—FRED_Economic_Wellbeing/
│   ├── DS-00005—CDC_WONDER_Mortality/
│   ├── DS-00006—Census_ACS_Social_Wellbeing/
│   ├── DS-00007—BLS_JOLTS_Labor_Market/
│   ├── DS-00008—EPA_Air_Quality_System/
│   └── WELLBEING_DATA_SOURCES.md
├── Bay-Area-COVID-Wastewater/        # Curated datasets
├── Knowledge-Worker-Global-Salaries/
├── Pulitzer-Prize-Winners/
├── US-GDP/
├── US-Inflation/
├── README.md
└── UPDATES.md
```

**sources/** - Contains documentation and metadata for external data sources (APIs, endpoints, update frequencies, setup instructions). See `sources/WELLBEING_DATA_SOURCES.md` for details.

**Dataset directories** - Contain curated, processed data collections ready for analysis.

## Philosophy

**Ground Truth First**: All datasets should come from authoritative, verifiable sources. We prioritize data quality and transparency over volume.

**Human-Readable + Machine-Parseable**: Data is stored in CSV and Markdown formatsno opaque databases. Anyone (human or AI) should be able to read, understand, and analyze these datasets with minimal friction.

**Shared Knowledge  Progress**: Like the broader Substrate project, this is about creating a foundation of shared, trusted information from which we can work toward solutions and understanding.

## Dataset Categories

Data sources cover a wide range of human-relevant topics:

### Health & Public Safety
- COVID-19 metrics (cases, hospitalizations, wastewater surveillance)
- Disease surveillance data
- Public health indicators

### Economic Indicators
- Jobs and employment statistics
- Economic growth metrics
- Inflation and cost of living data

### Scientific & Academic
- Nobel Prize winners and recipients
- Major research publications
- Scientific discoveries and breakthroughs

### Social & Cultural
- Demographic trends
- Education statistics
- Cultural achievements and milestones

### Environmental
- Climate data
- Environmental quality metrics
- Sustainability indicators

### Other

- Anything else we need/want
 
## File Naming Convention

**Format**: `[CATEGORY]-[DESCRIPTION]-[DATE-RANGE].csv` or `.md`

**Examples**:
- `COVID-Wastewater-SF-Bay-Area-2020-2025.csv`
- `Nobel-Prize-Winners-Physics-1901-2024.csv`
- `US-Jobs-Report-Monthly-2020-2025.csv`

## Dataset Structure

### CSV Format
Each CSV should include:
- **Header row**: Clear column names
- **Date column**: When applicable, use ISO 8601 format (YYYY-MM-DD)
- **Source column**: URL or citation for verification
- **Units**: Clearly specified in column names (e.g., `cases_per_100k`)

### Metadata File
Each dataset should have an accompanying `.md` file with:
- **Data Source**: URL and organization
- **Update Frequency**: How often the source updates
- **Last Updated**: When this dataset was last refreshed
- **Coverage**: Geographic/temporal scope
- **Notes**: Any important caveats or methodology notes
- **License**: Data usage rights

## Example Metadata

```markdown
# COVID Wastewater Surveillance - SF Bay Area

**Source**: WastewaterSCAN / CDC NWSS
**URL**: https://www.cdc.gov/nwss/
**Update Frequency**: Weekly
**Last Updated**: 2025-10-07
**Coverage**: San Francisco Bay Area, 2020-2025
**Units**: Viral copies per mL
**License**: Public domain (U.S. government data)

**Notes**:
- Wastewater data is a leading indicator, typically showing trends 4-7 days before clinical testing
- Data represents population-level surveillance
```

## Contributing Datasets

When adding new datasets:

1. **Verify the source** - Use authoritative, primary sources when possible
2. **Document thoroughly** - Include metadata file
3. **Keep it updated** - Note the refresh date
4. **Make it parseable** - Clean CSV format, consistent date formats
5. **Cross-reference** - Link to related Substrate components (Problems, Solutions, etc.)

## Usage

These datasets are designed to be:
- **Queried by AI** for analysis and insights
- **Referenced in arguments** to support claims with data
- **Used in solutions** to inform evidence-based approaches
- **Shared openly** to promote transparency and collaboration

## Data Quality Standards

- **Accuracy**: Data must be from verified, authoritative sources
- **Completeness**: Note any gaps or missing data points
- **Timeliness**: Include last updated date
- **Transparency**: Always cite the original source
- **Reproducibility**: Provide enough information for others to verify or update

## Integration with Substrate

Data sources support other Substrate components:
- **Claims** can be backed by datasets (e.g., "CL-58970Anthropogenic Climate Change" supported by climate data)
- **Arguments** can reference specific data points
- **Solutions** can be evaluated using metrics from datasets
- **Plans** can track progress using ground-truth indicators

---

**Mission**: Build a trusted foundation of ground-truth data to support human understanding and progress.

## Relationship with Research Projects

The Data directory works in conjunction with `research/` directory to maintain clear traceability between research and resulting datasets.

**Research → Data Workflow:**

1. **Input**: Research projects use `Data/sources/` to access external data APIs and endpoints
2. **Analysis**: Research projects perform analysis, synthesis, and investigation  
3. **Output**: Research projects produce curated datasets stored in `Data/` top-level
4. **Documentation**: Research projects document their methodology, sources used, and resulting datasets

**Example Structure:**

```
research/knowledge-worker-compensation-study/
├── README.md                    # Research overview and methodology
├── SOURCES.md                   # Links to Data/sources/ used as inputs
├── findings/                    # Analysis and insights
└── [references Data/Knowledge-Worker-Global-Salaries/]

Data/Knowledge-Worker-Global-Salaries/
├── knowledge-worker-compensation-data.md    # Curated dataset (output)
└── source.md                               # Metadata linking back to research project
```

**Key Principles:**

- Each dataset in `Data/` should include `source.md` documenting origin (research project or direct source)
- Research projects should document which `Data/sources/` they used as inputs in their SOURCES.md
- Research findings and methodology live in `research/`, curated datasets live in `Data/`
- Bidirectional links maintain complete traceability from source → research → dataset

**Benefits:**

- Clear provenance: Always know where data came from and how it was produced
- Reproducibility: Research methodology is documented and linked to outputs  
- Reusability: Other research can reference existing datasets and their origins
- Quality: Traceability enables verification and validation of data quality
