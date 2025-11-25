# Detailed Findings: Net Effects of Offensive Security Tooling

**Date:** November 24, 2025
**By:** Daniel Miessler (with Kai)

---

> **Important caveat:** This research was executed entirely by AI systems (Claude, Gemini, Perplexity/OpenAI) with scaffolding designed to emulate research rigor. The data was gathered by AI agents and analyzed by AI agents. While we tried to be thorough and cite real sources, this should NOT be considered equivalent to research conducted by a human research team. It's an experiment in AI-assisted research, and the findings are open for debate and discussion. Take it as a starting point, not a definitive answer.

---

## 1. Do Vendors Patch Faster After Disclosure?

### Key Study: Arora, Krishnan, Telang, Yang (2008)

**Paper:** "An Empirical Analysis of Software Vendors' Patch Release Behavior"
**Where:** Information Systems Research, Vol. 21, No. 1
**How:** Analyzed CERT/CC and SecurityFocus vulnerability databases

**What they found:**

| Metric | Value |
|--------|-------|
| Patch likelihood increase after disclosure | **137%** |
| Early disclosure (within 10 days) effect | Patches released **20 days faster** |
| Open source vs closed source | Open source patches **significantly faster** |
| Public disclosure impact | **Doubles** instantaneous probability of patch release |

**What this means:** Vendors respond to public pressure. Disclosure creates accountability that makes patching happen.

---

## 2. How Often Are Public Exploits Actually Used?

### Key Finding: Not That Often

**Source:** Multi-year CVE/NVD analysis (2009-2018)

| Metric | Value |
|--------|-------|
| Vulnerabilities with published exploit code | 12.8% of total |
| Actually exploited in the wild | **~5%** of those with exploits |
| Exploitation gap | 95% of vulnerabilities with exploits are NOT exploited |

**What this means:** Just because an exploit is public doesn't mean attackers use it. The bottleneck is attacker targeting decisions, not tool availability.

---

## 3. How Fast Are Attackers Exploiting Vulnerabilities?

### Key Studies: Mandiant/Google Cloud (2023), VulnCheck (2025)

**The window has gotten way smaller:**

| Year | Mean Time-to-Exploit | Change |
|------|---------------------|--------|
| Pre-2020 | 32 days | Baseline |
| 2023 | 15 days | -53% |
| 2024-2025 | **5 days** | -84% from baseline |

**When exploitation happens (2025 data):**

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

**What this means:** The exploitation window has collapsed dramatically. But this timing pressure exists whether or not tools are public—it reflects attacker sophistication and vulnerability research capabilities.

---

## 4. How Long Do Zero-Days Live? Do People Find the Same Ones?

### Key Study: RAND Corporation (2017)

**Paper:** "Zero Days, Thousands of Nights: The Life and Times of Zero-Day Vulnerabilities"
**Authors:** Lillian Ablon, Timothy Bogart
**Report:** RAND RR1751
**Sample:** 200+ zero-day exploits over 14 years (2002-2016)

**How long zero-days survive:**

| Metric | Value |
|--------|-------|
| Mean zero-day lifespan | **6.9 years** (2,521 days) |
| 25th percentile lifespan | 1.5 years |
| 75th percentile lifespan | 9.5 years |
| Median exploit development time | 22 days |

**How often do different people find the same vulnerability?**

| Timeframe | Collision Rate |
|-----------|---------------|
| 90 days | 0.87% |
| 1 year | **5.7%** |
| 14-year window | 40% |

**What this means:**
- Attackers have years of advance knowledge before public disclosure
- Low collision rate (5.7%/year) means independent discovery is rare
- Restricting tools doesn't prevent attacker discovery—they have separate pipelines

---

## 5. What Do Zero-Days Cost on the Market?

### Current Prices (2024)

**Sources:** Crowdfense, Zerodium, Operation Zero pricing

| Target | Price Range | Source |
|--------|-------------|--------|
| iOS full chain | $5-7 million | Crowdfense |
| Android full chain | Up to $5 million | Crowdfense |
| WhatsApp/iMessage | $3-5 million | Crowdfense |
| iOS zero-click RCE | Up to $2.5 million | Zerodium |
| Mobile attack chain | Up to $20 million | Operation Zero (Russia) |

**What's happening to prices:**
- 44% annualized inflation in exploit pricing (2022 research)
- Criminal forums: Windows exploits $50,000-$250,000
- Prices are rising because defenses are getting better

**Why this matters:** The existence of a multi-million dollar zero-day market proves:
1. Sophisticated attackers have their own supply chains
2. They don't need public tools
3. Restricting public tools doesn't affect their capabilities

---

## 6. Do Defenders Actually Benefit from Offensive Testing?

### Key Source: IBM/Ponemon Cost of a Data Breach (2023)

**Sample:** 553 organizations

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

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Detection Rate | 15-20% | 60-90% | **3-4x** |
| Breach Lifecycle | 270+ days | <200 days | **26% faster** |
| MITRE ATT&CK Coverage | 16-20% | Near 100% | **5x** |

**How bad is the baseline? (Mandiant):**
- 53% of attacks get in without detection
- 91% of attacks generate no SIEM alert

---

## 7. Do Bug Bounty Programs Actually Work?

### Key Sources: HackerOne, Bugcrowd, IDC

**Platform numbers (2023):**

| Platform | Metric | Value |
|----------|--------|-------|
| HackerOne | Total payouts all-time | >$300M |
| HackerOne | 2022 vulnerabilities reported | 65,000+ |
| Bugcrowd | Critical payout growth | +105% YoY |
| Bugcrowd | Submission growth | +94% YoY |

**How effective are they?**

| Metric | Value |
|--------|-------|
| First vulnerability typically found | <24 hours after program launch |
| Bug bounties vs traditional pentest | **40% more vulnerabilities** (Synack) |
| Severity distribution | ~25% High/Critical findings |
| Patch rate before public disclosure | **95%** (HackerOne) |

**What's the ROI? (IDC/HackerOne):**

| Metric | Value |
|--------|-------|
| 3-year ROI | **544%** |
| "Hack the Pentagon" | $150k for 138 vulnerabilities vs estimated $1M+ traditional |

---

## 8. When Do Exploits Actually Appear?

### Key Source: Unit 42 (Palo Alto Networks) 2024

**The finding:**

| Metric | Value |
|--------|-------|
| Exploits published BEFORE CVE | **80%** |
| Average lead time | Exploits appear **23 days before** CVE publication |
| Exploits with no CVE at all | **75%** |

**What this means:** Attackers don't wait for public disclosure. They have access to vulnerability information through their own channels before the security community even documents it.

---

## 9. How Big Is the Penetration Testing Industry?

### Market Growth (2018-2025)

| Year | Market Size | Notes |
|------|-------------|-------|
| 2018 | $0.9-1.1B | Baseline |
| 2021 | $1.61B | Remote work, cloud adoption |
| 2025 | $3.0-4.5B (projected) | PTaaS, continuous testing |

**CAGR:** 21-24% (Fortune Business Insights, MarketsandMarkets)

### Who's Actually Using It?

| Metric | Value | Source |
|--------|-------|--------|
| Organizations using penetration testing | **81%** | Industry surveys |
| Organizations using third-party pentesters | 81% | Industry data |
| Pentesters using free + commercial tools | 78% | Practitioner surveys |

### What Are They Finding? (BreachLock 2025)

| Severity | Percentage |
|----------|------------|
| Critical | 15% |
| High | 30% |
| Critical + High | **45%** |

---

## 10. What Does History Tell Us?

### Cryptography: Kerckhoffs's Principle (1883)

**The principle:** "A cryptosystem should be secure even if everything about the system, except the key, is public knowledge."

**What happened:**
- DES, AES, RSA: All publicly analyzed, all massively hardened by adversarial peer review
- Closed-source crypto (GCHQ's initial rejection of AES): Created backdoors and weaknesses
- Every major cryptographic breakthrough came from open publication and attack

**150-year track record:** Open algorithms consistently beat secret ones.

### Aviation Safety: FAA Disclosure Policy

**The policy:** Mandates detailed public disclosure of failures, near-misses, and accident investigations

**What happened:**
- Commercial aviation: Became the safest transportation mode on Earth
- Transparency created redundancy, automation, distributed responsibility
- "Here's what failed, here's why" enables industry-wide learning

### Medicine: Open Publication

**The model:** Textbooks show exactly how to perform procedures, including failure modes

**The contrast:**
- Medieval era (guild secrets): Mortality was catastrophic
- Modern era (open knowledge): Accountability, competition, exponential improvement

---

## 11. The Timing Problem: Attackers vs Defenders

### Current State (2024-2025)

| Metric | Attacker | Defender |
|--------|----------|----------|
| Time to weaponize | 5 days median | N/A |
| Time to detect breach | N/A | 214 days (with testing) |
| Time to patch | N/A | 14+ days (non-critical) |
| Resources needed | 1 exploit | Protect ALL surfaces |

### How Long Does Patching Actually Take?

| Organization Type | Typical Patch Timeline |
|-------------------|------------------------|
| Fortune 500 with mature security | <7 days for critical |
| Mid-market enterprises | 14-30 days |
| SMBs | 30-90 days |
| Healthcare/legacy systems | 6-18 months |
| Industrial control systems | Years (if ever) |

---

## 12. Does Coordinated Disclosure Work?

### Bug Bounty Performance

| Metric | Value |
|--------|-------|
| Patch rate before public disclosure | 95% |
| Median patch time for critical issues | <30 days |
| Submissions that go unaddressed | <2% |

### The Challenges (2022 Research)

**Source:** ScienceDirect academic study

**What they found:**
- CVD programs still face "similar fears and issues identified in earlier studies"
- High volumes of low-quality reports burden operators
- Little progress in preventing common problems

### What Actually Happens in Practice (2023 ACM Research)

| Metric | Value |
|--------|-------|
| Practitioners supporting CVD in theory | 80% |
| Vulnerabilities conforming to CVD in practice | 55% |
| Vulnerabilities discussed publicly before disclosure | 42% |
| Experienced reporters favoring full disclosure | Majority |

---

## 13. What Are Different Countries Doing?

### China's Disclosure Law (2021)

**The rule:** 48-hour disclosure to government before any public disclosure

**What happened (per Microsoft analysis):**
- "The increased use of zero days over the last year from China-based actors likely reflects the first full year of China's vulnerability disclosure requirements"
- Law provides "nearly exclusive early access to a steady stream of zero-day vulnerabilities"

**What this means:** Mandatory early government disclosure enables state offensive operations. This is what happens when you don't have transparent disclosure.

### United States

- Vulnerability Equities Process (VEP) guides government decisions on disclosure vs retention
- 80% of CVEs contributed by US-based CNAs
- Voluntary disclosure supplemented by sector-specific regulations

---

## 14. What Did Our 64+ Agents Agree On?

### Where Multiple Agents Converged (5+)

**Supporting Net Positive:**
- Historical precedent uniformly supports transparency
- Sophisticated attackers have tools regardless
- Publication creates accountability pressure
- Defenders genuinely benefit from understanding attacks

**Supporting Net Negative (distributional):**
- Benefits concentrate in mature organizations
- Smaller orgs bear disproportionate harm
- Timing asymmetry is real and unfavorable
- Script kiddie empowerment is bounded but genuine

**The key insight:**
"This debate is really about defender capability distribution, not tool publication per se."

---

## Quick Reference: All the Numbers in One Place

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

**Research Date:** November 24, 2025
