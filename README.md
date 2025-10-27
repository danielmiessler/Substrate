<div align="center">

<img src="https://github.com/user-attachments/assets/2137f529-e5de-4d8e-9ae2-3d67a797d0c9" width="250"/>

# Substrate

**An open-source framework for capturing, organizing, and analyzing different aspects of human civilization**

![GitHub last commit](https://img.shields.io/github/last-commit/danielmiessler/Substrate)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![GitHub Repo stars](https://img.shields.io/github/stars/danielmiessler/Substrate)

[About](#about) • [Updates](#-recent-updates) • [Data](#-data-directory) • [Docs](#-documentation) • [Contributing](#how-to-contribute)

</div>

---

## About

### The Philosophy

Substrate is built on a simple but powerful idea: **meaningful progress requires connecting ideas to evidence, and claims to data**.

We face an information crisis—not from lack of data, but from fragmented knowledge. Claims float without evidence. Arguments lack supporting data. Problems are discussed without reference to proven solutions. Data exists in silos, disconnected from the debates it could inform.

Substrate addresses this by creating an **interconnected knowledge system** where every component links to related components:

- **Claims** ↔ **Arguments** ↔ **Data** → Build evidence-based positions
- **Problems** ↔ **Solutions** ↔ **Experiments** → Test what actually works
- **Organizations** ↔ **People** ↔ **Projects** → Track who's doing what
- **Values** ↔ **Models** ↔ **Ideas** → Connect worldviews to frameworks
- **Authoritative Datasets** → Ground everything in verified facts

### Human & AI Collaboration

Everything in Substrate is designed to be parsed and analyzed by **both humans and AI systems**:

- **Human-readable formats** - CSV and Markdown files anyone can open and understand
- **Machine-parseable structures** - Consistent formats AI can query and analyze
- **Complete documentation** - Full methodology and source evaluation for every dataset
- **Cross-referenced entities** - Deep links between related concepts across the system

This dual accessibility enables a new kind of collaboration: humans contribute knowledge and judgment, AI systems help find patterns and connections across thousands of data points that would be impossible to process manually.

### The Vision

By connecting claims to arguments, arguments to data, and data to authoritative sources, Substrate creates a **foundation for mutual understanding**. When we disagree, we can trace our reasoning back through evidence to see exactly where our perspectives diverge. When we agree, we can build on verified knowledge rather than assumptions.

This isn't just an academic exercise—it's infrastructure for human progress. Whether you're a researcher seeking ground-truth data, a policymaker evaluating solutions, or a citizen trying to understand complex issues, Substrate provides a trusted foundation built on transparency and evidence.

### History

Substrate was launched in **July 2024** with a vision to create shared infrastructure for human knowledge. The project began with 17 core object types (Problems, Solutions, Ideas, Plans, Values, Models, Arguments, Claims, etc.) and has grown through community contributions and a major data infrastructure initiative in October 2025.

**Mission:** Build a trusted foundation of ground-truth data and structured knowledge to support human understanding and progress.

<details>
<summary><strong>🎬 Watch Introduction Video</strong></summary>

<br/>

<div align="center">
<a href="https://www.youtube.com/watch?v=ky7ejowc_qY">
  <img src="https://img.youtube.com/vi/ky7ejowc_qY/0.jpg" alt="Watch the Substrate Intro Video" width="500">
</a>
</div>

</details>

**Blog Post:** [Introducing Substrate](https://danielmiessler.com/p/introducing-substrate)

---

## 🚀 Recent Updates

> [!IMPORTANT]
> **🔥 October 2025:** Major data infrastructure upgrade complete!
>
> - 5 authoritative datasets added (1,700+ data points)
> - Library science methodology implementation
> - TypeScript automation with Bun runtime
> - Comprehensive documentation suite

<details>
<summary><strong>📅 View detailed changelog</strong></summary>

### Recent Changes

**2025-10-25 - Dataset Updates**
- ✅ Pulitzer Prize, GDP, and inflation data refreshed
- ✅ Knowledge Worker Salaries validation completed

**2025-10-18 - New Dataset**
- 🆕 Knowledge Worker Global Compensation added

**2025-10-16 - Infrastructure**
- 🏗️ Library science methodology (8-dimension evaluation)
- ⚡ TypeScript automation with auto-discovery
- 📊 Central logging and health monitoring
- 📚 Documentation suite (Getting Started, Technical Summary, Quick Reference)

**2025-10-07 - Major Datasets**
- 🆕 Pulitzer Prize Winners (1918-2024, 249 winners)
- 🆕 Bay Area COVID Wastewater (161 weeks, 2022-2025)

**2025-10-06 - Automation & Data**
- 🤖 GitHub Actions workflows (Code Review, PR Assistant)
- 🆕 U.S. Inflation dataset (945 months, 1947-2025)

**2024-09 - Community**
- 📝 Claims, Arguments, and Values frameworks established
- 🌍 Multiple community contributions

**2024-07 - Foundation**
- 🏗️ Single-repo structure
- 🚀 Public launch

### Project Stats (2025-10-27)

**Data:** 5 datasets • 1,700+ points • 107-year span (1918-2025)

**Infrastructure:** TypeScript automation • Library science framework • GitHub Actions

**Community:** 6+ contributors • 10+ merged PRs • 17 object types

**Docs:** 8,000+ lines markdown • 25+ documentation files

**[→ Full update history](./UPDATES.md)**

</details>

---

## 📊 Data Directory

Substrate includes **5 authoritative datasets** with 1,700+ data points spanning 107 years (1918-2025):

| Dataset | Coverage | Data Points | Source |
|---------|----------|-------------|--------|
| **US-GDP** | 1929-2025 | 96 years annual<br>314 quarters | FRED/BEA |
| **US-Inflation** | 1947-2025 | 945 months | FRED/BLS |
| **Bay Area COVID Wastewater** | 2022-2025 | 161 weeks | CDPH |
| **Pulitzer Prize Winners** | 1918-2024 | 249 winners | Wikidata |
| **Knowledge Worker Salaries** | Global | Multi-region | Research |

**Data Quality:**
- ✅ Library science methodology with 8-dimension source evaluation
- ✅ Authoritative sources only (government agencies, verified databases)
- ✅ Complete documentation and methodology for each dataset
- ✅ TypeScript automation with quality assurance
- ✅ CSV, JSON, and Markdown formats

**[→ Explore Data Directory](./Data/README.md)**

---

## 📚 Documentation

### Getting Started
- **[Getting Started Guide](./GETTING_STARTED.md)** - Complete setup and usage
- **[Quick Reference](./QUICK_REFERENCE.md)** - Command cheatsheet
- **[Data Directory Guide](./Data/README.md)** - Data philosophy and standards

### Technical
- **[Project Summary](./PROJECT_SUMMARY.md)** - Architecture overview
- **[Library Science Framework](./Data/README-LIBRARY-SCIENCE.md)** - Methodology
- **[Migration Guide](./Data/MIGRATION-GUIDE.md)** - Structure changes

### Updates & Changes
- **[UPDATES.md](./UPDATES.md)** - Complete project changelog
- **[Data Updates](./Data/UPDATES.md)** - Dataset-specific logs
- Individual dataset update logs in `Data/*/UPDATES.md`

---

## How to Contribute

Contribute by submitting PRs to modify Substrate object files in directories like `Problems/`, `Solutions/`, `Ideas/`, etc.

**Contributing Datasets:**
- See **[Data/README.md](./Data/README.md)** for data quality standards
- Follow **[Getting Started Guide](./GETTING_STARTED.md)** for step-by-step instructions

**Note:** We're developing a web-based contribution interface for non-coders.

> [!NOTE]
> **July 27, 2024** — We moved to a single-repo structure to make the project easier to manage.

---

## Roadmap

### ✅ Completed

**Phase 1: Foundation (July 2024)**
- Single-repo structure with 17+ object types
- Core framework and documentation
- Public launch

**Phase 2: Community (Aug-Sep 2024)**
- Community contributions and frameworks
- Claims, Arguments, and Values established

**Phase 3: Data Infrastructure (Oct 2025)**
- 5 authoritative datasets added
- Library science methodology
- TypeScript automation system
- Comprehensive documentation

### 🚧 Planned

**Phase 4: Enhanced Access**
- Web-based contribution interface
- Interactive visualizations
- RESTful API

**Phase 5: Dataset Expansion**
- Additional authoritative datasets (UNICEF, OECD, IHME)
- Real-time data feeds
- Community-driven requests

**Phase 6: Advanced Features**
- Machine-readable catalog (DCAT/CKAN)
- Automated quality scoring
- Email/Slack notifications

---

## Meta

### Special Thanks

**Inspiration & Contributions:**
- _Jonathan Dunn_ - Similar goals and collaboration
- _Joel Parish_ - Structure wisdom
- _Joseph Thacker_ - Continuous flow of ideas

### Primary Contributors

<a href="https://github.com/xssdoctor"><img src="https://avatars.githubusercontent.com/u/9218431?v=4" title="Jonathan Dunn" width="50" height="50"></a>

### Community Contributors

Special thanks to all contributors: @ThatNateGuy, @JaymanW, @karai114, @DesertEaglePWN, @ktfth

### Created By

`Substrate` was created by <a href="https://danielmiessler.com/subscribe" target="_blank">Daniel Miessler</a> in July 2024.

<a href="https://twitter.com/intent/user?screen_name=danielmiessler">![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/danielmiessler)</a>

---

<div align="center">

**[↑ Back to Top](#substrate)**

</div>
