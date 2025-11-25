# Detailed Findings: Net Effects of Offensive Security Tooling

**Research Date:** November 24, 2025

---

## 1. Vulnerability Disclosure and Patch Behavior

### Key Study: Arora, Krishnan, Telang, Yang (2008)

**Title:** "An Empirical Analysis of Software Vendors' Patch Release Behavior"
**Publication:** Information Systems Research, Vol. 21, No. 1, pp. 115-132
**Methodology:** Analyzed CERT/CC and SecurityFocus vulnerability databases

**Findings:**

| Metric | Value |
|--------|-------|
| Patch likelihood increase after disclosure | **137%** |
| Early disclosure (within 10 days) effect | Patches released **20 days faster** |
| Open source vs closed source | Open source patches **significantly faster** |
| Public disclosure impact | **Doubles** instantaneous probability of patch release |

**Interpretation:** Vendors respond to public pressure. Disclosure creates accountability that accelerates defensive action.

---

## 2. Exploitation Rates for Public Vulnerabilities

### Key Finding: Low Exploitation Rate

**Source:** Multi-year CVE/NVD analysis (2009-2018)

| Metric | Value |
|--------|-------|
| Vulnerabilities with published exploit code | 12.8% of total |
| Actually exploited in the wild | **~5%** of those with exploits |
| Exploitation gap | 95% of vulnerabilities with exploits are NOT exploited |

**Interpretation:** Exploit availability ≠ exploitation. The bottleneck is not tool availability but attacker targeting decisions.

---

## 3. Time-to-Exploit Trends

### Key Studies: Mandiant/Google Cloud (2023), VulnCheck (2025)

**Historical Trend:**

| Year | Mean Time-to-Exploit | Change |
|------|---------------------|--------|
| Pre-2020 | 32 days | Baseline |
| 2023 | 15 days | -53% |
| 2024-2025 | **5 days** | -84% from baseline |

**Exploitation Timing (2025 Data):**

| Timing | Percentage |
|--------|------------|
| On or before CVE disclosure | 32.1% |
| Within 24 hours of disclosure | 28.3% |
| Within first week | ~60% |

**Zero-Day vs N-Day (2023 Mandiant):**

| Category | Percentage |
|----------|------------|
| Exploited as zero-days (before patch) | 70% (97/138) |
| Exploited as n-days (after patch) | 30% (41/138) |

**Interpretation:** The exploitation window has collapsed dramatically. However, this timing pressure exists regardless of tool publication—it reflects attacker sophistication and vulnerability research capabilities.

---

## 4. Zero-Day Lifespan and Collision Rates

### Key Study: RAND Corporation (2017)

**Title:** "Zero Days, Thousands of Nights: The Life and Times of Zero-Day Vulnerabilities"
**Authors:** Lillian Ablon, Timothy Bogart
**Report ID:** RAND RR1751
**Sample Size:** 200+ zero-day exploits over 14 years (2002-2016)

**Findings:**

| Metric | Value |
|--------|-------|
| Mean zero-day lifespan | **6.9 years** (2,521 days) |
| 25th percentile lifespan | 1.5 years |
| 75th percentile lifespan | 9.5 years |
| Median exploit development time | 22 days |

**Collision/Rediscovery Rates:**

| Timeframe | Collision Rate |
|-----------|---------------|
| 90 days | 0.87% |
| 1 year | **5.7%** |
| 14-year window | 40% |

**Interpretation:**
- Attackers have years of advance knowledge before public disclosure
- Low collision rate (5.7%/year) means independent discovery is rare
- Restricting tools doesn't prevent attacker discovery—they have separate pipelines

---

## 5. Zero-Day Market Pricing

### Current Market Data (2024)

**Source:** Crowdfense, Zerodium, Operation Zero pricing

| Target | Price Range | Source |
|--------|-------------|--------|
| iOS full chain | $5-7 million | Crowdfense |
| Android full chain | Up to $5 million | Crowdfense |
| WhatsApp/iMessage | $3-5 million | Crowdfense |
| iOS zero-click RCE | Up to $2.5 million | Zerodium |
| Mobile attack chain | Up to $20 million | Operation Zero (Russia) |

**Market Trends:**
- 44% annualized inflation in exploit pricing (2022 research)
- Criminal forums: Windows exploits $50,000-$250,000
- Prices rising because mitigations make exploitation harder

**Interpretation:** The existence of a multi-million dollar zero-day market proves:
1. Sophisticated attackers have independent supply chains
2. They don't need public tools
3. Restricting public tools doesn't affect their capabilities

---

## 6. Defender Benefits from Offensive Testing

### Key Source: IBM/Ponemon Cost of a Data Breach (2023)

**Sample Size:** 553 organizations

| Metric | With Testing | Without Testing | Difference |
|--------|--------------|-----------------|------------|
| Time-to-Detection | 214 days | 322 days | **108 days faster** |
| Cost per Breach | $3.60M | $5.36M | **$1.76M savings** |

### Veracode State of Software Security

**Sample:** 27 million scans across 750,000 applications

| Metric | Impact |
|--------|--------|
| DAST users fix speed | **17.5 days faster** |
| Scan frequency effect | 60% reduction in flaw probability with continuous scanning |

### Kenna Security/Cyentia Institute

**Sample:** 9 million assets, 6 billion vulnerabilities

| Metric | Value |
|--------|-------|
| Remediation efficiency with offensive intelligence | **29x increase** |
| Risk reduction with weaponization-focused patching | 33% lower risk density |

### Red Team Exercise Improvements (Mandiant)

| Metric | Pre-Exercise | Post-Exercise | Improvement |
|--------|--------------|---------------|-------------|
| Detection Rate | 15-20% | 60-90% | **3-4x** |
| Breach Lifecycle | 270+ days | <200 days | **26% faster** |
| MITRE ATT&CK Coverage | 16-20% | Near 100% | **5x** |

**Baseline Problem (Mandiant):**
- 53% of attacks infiltrate without detection
- 91% of attacks generate no SIEM alert

---

## 7. Bug Bounty Program Economics

### Key Sources: HackerOne, Bugcrowd, IDC

**Platform Statistics (2023):**

| Platform | Metric | Value |
|----------|--------|-------|
| HackerOne | Total payouts all-time | >$300M |
| HackerOne | 2022 vulnerabilities reported | 65,000+ |
| Bugcrowd | Critical payout growth | +105% YoY |
| Bugcrowd | Submission growth | +94% YoY |

**Discovery Effectiveness:**

| Metric | Value |
|--------|-------|
| First vulnerability typically found | <24 hours after program launch |
| Bug bounties vs traditional pentest | **40% more vulnerabilities** (Synack) |
| Severity distribution | ~25% High/Critical findings |
| Patch rate before public disclosure | **95%** (HackerOne) |

**ROI Data (IDC/HackerOne):**

| Metric | Value |
|--------|-------|
| 3-year ROI | **544%** |
| "Hack the Pentagon" | $150k for 138 vulnerabilities vs estimated $1M+ traditional |

---

## 8. Exploit Publication Timing

### Key Source: Unit 42 (Palo Alto Networks) 2024

**Finding:**

| Metric | Value |
|--------|-------|
| Exploits published BEFORE CVE | **80%** |
| Average lead time | Exploits appear **23 days before** CVE publication |
| Exploits with no CVE at all | **75%** |

**Interpretation:** Attackers don't wait for public disclosure. They have access to vulnerability information through independent channels before the security community documents it publicly.

---

## 9. Penetration Testing Industry Data

### Market Growth (2018-2025)

| Year | Market Size | Notes |
|------|-------------|-------|
| 2018 | $0.9-1.1B | Baseline |
| 2021 | $1.61B | Remote work, cloud adoption |
| 2025 | $3.0-4.5B (projected) | PTaaS, continuous testing |

**CAGR:** 21-24% (Fortune Business Insights, MarketsandMarkets)

### Adoption Statistics

| Metric | Value | Source |
|--------|-------|--------|
| Organizations using penetration testing | **81%** | Industry surveys |
| Organizations using third-party pentesters | 81% | Industry data |
| Pentesters using free + commercial tools | 78% | Practitioner surveys |

### Finding Severity (BreachLock 2025)

| Severity | Percentage |
|----------|------------|
| Critical | 15% |
| High | 30% |
| Critical + High | **45%** |

---

## 10. Historical Precedent Analysis

### Cryptography: Kerckhoffs's Principle (1883)

**Principle:** "A cryptosystem should be secure even if everything about the system, except the key, is public knowledge."

**Historical Validation:**
- DES, AES, RSA: All publicly analyzed, all massively hardened by adversarial peer review
- Closed-source crypto (GCHQ's initial rejection of AES): Created backdoors and weaknesses
- Every major cryptographic breakthrough came from open publication and attack

**150-Year Track Record:** Open algorithms consistently stronger than secret ones.

### Aviation Safety: FAA Disclosure Policy

**Policy:** Mandates detailed public disclosure of failures, near-misses, and accident investigations

**Outcome:**
- Commercial aviation: Safest transportation mode on Earth
- Transparency created redundancy, automation, distributed responsibility
- "Here's what failed, here's why" enables industry-wide learning

### Medicine: Open Publication

**Model:** Textbooks show exactly how to perform procedures, including failure modes

**Historical Contrast:**
- Medieval era (guild secrets): Mortality was catastrophic
- Modern era (open knowledge): Accountability, competition, exponential improvement

---

## 11. Attacker vs Defender Timing Asymmetry

### Current State (2024-2025)

| Metric | Attacker | Defender |
|--------|----------|----------|
| Time to weaponize | 5 days median | N/A |
| Time to detect breach | N/A | 214 days (with testing) |
| Time to patch | N/A | 14+ days (non-critical) |
| Resources needed | 1 exploit | Protect ALL surfaces |

### Patch Lag Reality

| Organization Type | Typical Patch Timeline |
|-------------------|------------------------|
| Fortune 500 with mature security | <7 days for critical |
| Mid-market enterprises | 14-30 days |
| SMBs | 30-90 days |
| Healthcare/legacy systems | 6-18 months |
| Industrial control systems | Years (if ever) |

---

## 12. Coordinated Disclosure Effectiveness

### Bug Bounty Performance

| Metric | Value |
|--------|-------|
| Patch rate before public disclosure | 95% |
| Median patch time for critical issues | <30 days |
| Submissions that go unaddressed | <2% |

### CVD Programme Challenges (2022 Research)

**Source:** ScienceDirect academic study

**Findings:**
- CVD programmes face "similar fears and issues identified in earlier studies"
- High volumes of low-quality reports burden operators
- Little development in preventing prevalent problems

### Open Source Disclosure Patterns (2023 ACM Research)

| Metric | Value |
|--------|-------|
| Practitioners supporting CVD in theory | 80% |
| Vulnerabilities conforming to CVD in practice | 55% |
| Vulnerabilities discussed publicly before disclosure | 42% |
| Experienced reporters favoring full disclosure | Majority |

---

## 13. Geographic/Policy Comparison

### China's Disclosure Law (2021)

**Requirement:** 48-hour disclosure to government before any public disclosure

**Impact (per Microsoft analysis):**
- "The increased use of zero days over the last year from China-based actors likely reflects the first full year of China's vulnerability disclosure requirements"
- Law provides "nearly exclusive early access to a steady stream of zero-day vulnerabilities"

**Interpretation:** Mandatory early government disclosure enables state offensive operations. This is the risk of non-transparent disclosure policies.

### United States

- Vulnerability Equities Process (VEP) guides government decisions on disclosure vs retention
- 80% of CVEs contributed by US-based CNAs
- Voluntary disclosure supplemented by sector-specific regulations

---

## 14. Convergent Agent Findings

### From 64+ Agent Analysis

**5+ agents independently converged on:**

**Supporting Net Positive:**
- Historical precedent uniformly supports transparency
- Sophisticated attackers have tools regardless
- Publication creates accountability pressure
- Defenders genuinely benefit from understanding attacks

**Supporting Net Negative (distributional):**
- Benefits concentrate in mature organizations
- Long-tail defenders bear disproportionate harm
- Timing asymmetry is real and unfavorable
- Script kiddie empowerment is bounded but genuine

**Key Insight from Synthesis:**
"The argument is really about defender capability distribution, not tool publication per se."

---

## Summary Data Table

| Finding | Value | Confidence | Source |
|---------|-------|------------|--------|
| Patch acceleration from disclosure | 137% | High | Arora 2008 |
| Exploitation rate for vulns with public exploits | 5% | High | 2009-2018 |
| Zero-day average lifespan | 6.9 years | High | RAND 2017 |
| Annual collision rate | 5.7% | High | RAND 2017 |
| Exploits published before CVE | 80% | High | Unit 42 2024 |
| Time-to-exploit (current) | 5 days | High | Mandiant 2025 |
| Breach cost savings with offensive testing | $1.76M | High | IBM/Ponemon |
| Detection improvement after red team | 3-4x | High | Mandiant |
| Bug bounty ROI | 544% | High | IDC/HackerOne |
| Patch rate before disclosure (bug bounties) | 95% | High | HackerOne |
| Organizations using pentesting | 81% | High | Industry surveys |
| iOS zero-day market price | $5-7M | Medium | Crowdfense |

---

**Document:** Detailed Findings
**Research Date:** November 24, 2025
