# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Substrate** is an open-source framework for human understanding, meaning, and progress. It's a structured knowledge system for capturing, organizing, and analyzing different aspects of civilization—from problems and solutions to values, plans, and experiments.

The project uses a hierarchical directory structure where each category contains structured markdown files that can reference each other. The primary interface for working with Substrate is AI-powered analysis, which can hold multiple components in context simultaneously and analyze relationships between them.

## Repository Structure

The repository is organized into distinct categories, each containing individual entries as markdown files or directories:

- **Arguments/** - Structured logical arguments (deductive, inductive, etc.) about claims
- **Claims/** - Assertions that can be supported by arguments
- **Data-Sources/** - References to data that supports or refutes claims
- **Experiments/** - Scientific or social experiments related to hypotheses
- **Frames/** - Mental models or worldviews that shape how plans are created
- **Funding-Sources/** - Potential or actual funding for projects
- **Ideas/** - Concepts that could become solutions or projects
- **Models/** - Ways of understanding the world (beliefs, frameworks)
- **Organizations/** - Groups working on related problems/solutions
- **Outcomes/** - Results from projects or experiments
- **People/** - Individuals relevant to the project
- **Plans/** - Comprehensive governance plans (like `us-plan1-miessler.md`)
- **Problems/** - Issues facing humanity at various scales
- **Projects/** - Active initiatives working toward solutions
- **Results/** - Specific outputs from experiments or projects
- **Risks/** - Potential negative consequences of plans or projects
- **Solutions/** - Proposed approaches to problems
- **Threats/** - External challenges to plans or values
- **Values/** - Core principles that guide decision-making

## File Naming Convention

Files use a structured naming format:
- **Format**: `[CATEGORY-ID]—[Descriptive_Name]`
- **Example**: `AR-12934—AIs_Are_Capable_of_Understanding`
- The ID helps with cross-referencing between components
- Underscores separate words in the descriptive name

## Working with Substrate

### Key Principles

1. **Interconnected System**: Components reference each other (Problems link to Solutions, Plans reference Values, etc.)
2. **Transparency**: Plans and arguments should be explicit about their reasoning and assumptions
3. **AI-First Interface**: The system is designed to be navigated and analyzed by AI, which can hold multiple components in context
4. **Structured Thinking**: Each category has a specific purpose and format

### Plans Structure

Plans (like `us-plan1-miessler.md`) follow the Telos framework and include:
- **SCOPE**: What entity the plan covers
- **CHALLENGES**: Key problems facing the entity
- **MISSION**: Primary objectives
- **STRATEGIES**: High-level approaches
- **IDEAL WORLD**: Vision of desired future state

Plans can also reference:
- Problems, Solutions, Values, Models, Projects, Budgets, Metrics

### Arguments Structure

Arguments follow formal logical structures:
- **Claim**: The assertion being argued
- **Argument Style**: Type (deductive, inductive, abductive, etc.)
- **Argument**: Step-by-step logical progression
- Each step builds on previous ones to reach a conclusion

## Common Development Tasks

### Adding New Entries

When adding new Problems, Solutions, Ideas, etc.:
1. Create file with proper naming convention: `[CATEGORY-ID]—[Name]`
2. Follow the structure of existing entries in that category
3. Include cross-references to related components where appropriate
4. Consider which Plans, Values, or Models the entry relates to

### Analyzing Relationships

When analyzing Substrate content:
1. Read multiple related files to understand connections
2. Look for explicit and implicit references between components
3. Consider how Models/Values shape Plans and Solutions
4. Trace Problems → Solutions → Projects → Outcomes chains

### Contributing

The project welcomes contributions via pull requests to modify Substrate object files. A web-based interface is planned to make contributions easier for non-coders.

## Important Context

- **Single-repo structure**: As of July 27, 2024, all components live in this monorepo
- **Primary creator**: Daniel Miessler
- **Video introduction**: https://www.youtube.com/watch?v=ky7ejowc_qY
- **Blog post**: https://danielmiessler.com/p/introducing-substrate
- **Mission**: Visualize human progress through structured knowledge

## When Working with This Repo

- Respect the structured format of each category
- Maintain the naming conventions
- Consider cross-references and relationships between components
- Plans are meant to be comprehensive and transparent
- The system is designed for AI analysis—keep content machine-readable
- Most README.md files in subdirectories are minimal placeholders
