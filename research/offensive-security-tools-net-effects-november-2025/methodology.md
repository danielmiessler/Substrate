# Research Methodology: Net Effects of Offensive Security Tooling

**Date:** November 24, 2025
**By:** Daniel Miessler (with Kai)

---

> **Important caveat:** This research was executed entirely by AI systems (Claude, Gemini, Perplexity/OpenAI) with scaffolding designed to emulate research rigor. The data was gathered by AI agents and analyzed by AI agents. While we tried to be thorough and cite real sources, this should NOT be considered equivalent to research conducted by a human research team. It's an experiment in AI-assisted research, and the findings are open for debate and discussion. Take it as a starting point, not a definitive answer.

---

## How We Did This

We threw a bunch of AI agents at this problem from different angles, then red-teamed both sides of the argument:

1. **Phase 1:** Gather data using parallel research agents (Claude, Perplexity, Gemini)
2. **Phase 2:** Break down each argument into 24 atomic claims
3. **Phase 3:** Have 32 specialized agents attack each argument
4. **Phase 4:** Figure out where agents converged (what held up)
5. **Phase 5:** Build the strongest version of each argument, then attack it

---

## Phase 1: Gathering the Data

### The AI Platforms We Used

- **Claude (Anthropic):** Deep technical analysis, attacker knowledge research
- **Perplexity:** Real-time web research, academic studies, industry data
- **Gemini (Google):** Ecosystem analysis, defender benefit quantification

### What Each Agent Looked For

**Agent 1: perplexity-researcher**
*Topic:* Does disclosure actually make vendors patch faster?
*Focus:* Academic papers on patch rates, disclosure timing studies, vendor behavior, CERT/CC data, time-to-exploit vs time-to-patch

**Agent 2: claude-researcher**
*Topic:* Do sophisticated attackers already have these tools?
*Focus:* Zero-day lifespan studies, collision rates, zero-day market prices, attacks-in-the-wild before disclosure, how long it takes attackers to develop tools

**Agent 3: gemini-researcher**
*Topic:* How much do defenders actually benefit?
*Focus:* Penetration testing industry data, bug bounty ROI, red team exercise outcomes, breach cost comparisons, detection improvements

---

## Phase 2: Breaking Down the Arguments

### The Approach

We broke each argument (Net Negative and Net Positive) into exactly **24 atomic claims**—specific statements that could be individually challenged.

**What made a good atomic claim:**
- Self-contained (understandable on its own)
- Specific (not vague or general)
- Attackable (someone could reasonably push back on it)

### Net Negative Argument: 24 Claims

1. Publishing exploit code makes it trivially easy for unskilled attackers to compromise systems
2. Script kiddies who couldn't develop exploits independently now have weaponized tools
3. The time-to-exploit has collapsed from 32 days to 5 days, largely due to tool availability
4. Metasploit modules are used in 10.5% of malware C2 servers, proving criminal adoption
5. Defenders already have vendor patches; they don't need exploit code to protect systems
6. The information asymmetry structurally favors attackers who need only one vulnerability
7. Publishing exploits expands the total attack surface by enabling more attackers
8. Sophisticated attackers already have private capabilities; public tools only help amateurs
9. Bug bounty and pen testing could function with private, licensed tools instead
10. The "defenders need it" argument assumes defenders are more likely to use tools than attackers
11. Attacks increase by up to 5 orders of magnitude after public disclosure
12. The zero-day market proves attackers pay millions for exclusive access—public tools destroy that exclusivity for free
13. Coordinated disclosure works; full disclosure with exploit code is unnecessary
14. China's 48-hour disclosure law shows governments weaponize vulnerability information
15. The window for defensive action is now too short—30% exploitation within 24 hours
16. Most organizations lack resources to act on vulnerability information regardless
17. Restricting tools would create friction for attackers without eliminating their capabilities
18. The "attacker knowledge asymmetry" claim lacks empirical measurement
19. Medical and other regulated fields restrict dangerous knowledge; security should too
20. The original Metasploit rationale assumed a pre-cloud, pre-automation threat landscape
21. Open source offensive tools enable adversarial nation-states without procurement costs
22. The security industry financially benefits from attack tools existing; conflict of interest
23. Enterprise defenders use commercial tools anyway; open source benefits attackers more
24. Every public exploit is a free force multiplier for criminal organizations

### Net Positive Argument: 24 Claims

1. Sophisticated attackers already possess offensive capabilities independent of public tools
2. Zero-day lifespan of 6.9 years proves attackers have years of advance knowledge
3. Only 5% of vulnerabilities with public exploits are actually exploited in the wild
4. Vulnerability disclosure accelerates vendor patching by 137% (Arora et al. 2008)
5. Organizations using offensive testing have $1.76M lower breach costs (IBM/Ponemon)
6. 81% of organizations now use penetration testing, creating massive defender capability
7. Bug bounty programs achieve 544% ROI and find 40% more vulnerabilities than traditional testing
8. Red team exercises improve detection rates by 3-4x (Mandiant data)
9. The 5.7% annual collision rate means restricting tools doesn't prevent attacker discovery
10. 80% of exploits appear BEFORE their CVE—attackers don't wait for public disclosure
11. Restricting tools primarily harms defenders who need to test their own systems
12. The zero-day market ($5-20M for iOS) proves sophisticated attackers have alternative supply chains
13. Penetration testing training produces better incident responders and threat hunters
14. MITRE ATT&CK coverage improves from 16-20% to near 100% after red team exercises
15. Script kiddies using public tools are easier to detect than sophisticated attackers using private tools
16. Medical analogy fails: doctors share disease knowledge; security obscuring attacks doesn't prevent them
17. Defenders must protect all attack surfaces; knowing the attacks enables prioritization
18. 95% patch rate before public disclosure via bug bounties proves coordinated disclosure works
19. Open tools enable security research that benefits the entire ecosystem
20. Countries/organizations that restrict security knowledge have worse security outcomes
21. The "friction for attackers" argument ignores that friction doesn't stop motivated adversaries
22. Offensive training develops "adversarial thinking" that correlates with better defensive outcomes
23. Enterprise commercial tools exist BECAUSE open source proved the concept; ecosystem benefit
24. Every SOC analyst needs to understand offensive techniques to detect and investigate attacks

---

## Phase 3: Red-Teaming Both Sides

### How We Ran the Analysis

**32 agents per argument**, all launched in parallel.

Each agent got:
1. The full original argument
2. The 24-claim breakdown
3. A specific personality and attack angle
4. Instructions to find BOTH strengths AND weaknesses

### Agent Roster: 8 Principal Engineers

Technical and logical folks:

| Agent | Personality | Perspective |
|-------|-------------|-------------|
| PE-1 | Skeptical Systems Thinker | "Where does this break at scale?" |
| PE-2 | Evidence Demander | "Show me the numbers that prove this." |
| PE-3 | Edge Case Hunter | "What happens when X is not true?" |
| PE-4 | Historical Pattern Matcher | "We tried this in 2008 and here's what happened." |
| PE-5 | Complexity Realist | "This is harder than it sounds because..." |
| PE-6 | Dependency Tracer | "This assumes X, which assumes Y, which is false." |
| PE-7 | Failure Mode Analyst | "Here are 5 ways this fails catastrophically." |
| PE-8 | Technical Debt Accountant | "The real price of this approach is..." |

### Agent Roster: 8 Architects

Big-picture thinkers:

| Agent | Personality | Perspective |
|-------|-------------|-------------|
| AR-1 | Big Picture Thinker | "This ignores how it fits into the larger system." |
| AR-2 | Trade-off Illuminator | "You gain X but lose Y, and Y matters more." |
| AR-3 | Abstraction Questioner | "These aren't the same category of problem." |
| AR-4 | Incentive Mapper | "Who benefits from this being true?" |
| AR-5 | Second-Order Effects Tracker | "This causes A, which causes B, which destroys C." |
| AR-6 | Integration Pessimist | "This doesn't compose with existing reality." |
| AR-7 | Scalability Skeptic | "This works for 10, not 10,000." |
| AR-8 | Reversibility Analyst | "Once you do this, you can't go back." |

### Agent Roster: 8 Pentesters

Adversarial thinkers:

| Agent | Personality | Perspective |
|-------|-------------|-------------|
| PT-1 | Red Team Lead | "Here's how I'd exploit this logic." |
| PT-2 | Assumption Breaker | "This depends on X, and X is false." |
| PT-3 | Game Theorist | "A smart opponent would simply..." |
| PT-4 | Social Engineer | "People will route around this because..." |
| PT-5 | Precedent Finder | "This is just [past example] in a new dress." |
| PT-6 | Defense Evaluator | "This defense fails because attackers can..." |
| PT-7 | Threat Modeler | "You've left this entire surface undefended." |
| PT-8 | Asymmetry Spotter | "Attackers have unlimited time; defenders don't." |

### Agent Roster: 8 Interns

Fresh eyes and contrarians:

| Agent | Personality | Perspective |
|-------|-------------|-------------|
| IN-1 | Naive Questioner | "But why do we assume X in the first place?" |
| IN-2 | Analogy Finder | "This is just like [other field] where it failed." |
| IN-3 | Contrarian | "What if the exact opposite is true?" |
| IN-4 | Common Sense Checker | "This violates basic intuition because..." |
| IN-5 | Zeitgeist Reader | "In practice, nobody actually does this because..." |
| IN-6 | Simplicity Advocate | "The simpler explanation is..." |
| IN-7 | Edge Lord | "If this is true, then [absurd consequence] must also be true." |
| IN-8 | Devil's Intern | "The uncomfortable truth nobody wants to say is..." |

### What Each Agent Had to Return

Each agent gave us:

```
**[AGENT ID] ANALYSIS:**

**Strongest Point FOR the Argument:** [Claim #X]
[2-3 sentences on why this is valid]
Take seriously because: [1 sentence]

**Strongest Point AGAINST the Argument:** [Claim #Y]
[2-3 sentences on the flaw]
Problematic because: [1 sentence]

**Overall Assessment:** [One sentence verdict]
```

---

## Phase 4: Finding What Held Up

### How We Identified Convergence

**Strong Convergence (5+ agents):**
- Marked as CRITICAL finding
- Weighted heavily in final analysis

**Moderate Convergence (3-4 agents):**
- Marked as SIGNIFICANT finding
- Weighted secondarily

**Unique Insights (1-2 agents):**
- Marked as NOTABLE
- Kept for completeness

### How We Categorized Findings

**Strengths:**
- Valid Evidence
- Sound Logic
- Real Problem Identified
- Historical Support

**Weaknesses:**
- Logical Fallacies
- Missing Evidence
- Hidden Assumptions
- Counterexamples
- Precedent Contradictions
- Second-Order Effects

---

## Phase 5: Steelmanning Then Attacking

### Building the Strongest Version

For each argument, we built the **strongest possible version** before attacking it.

**Format:** 8 points, 12-16 words each

**Why:** To make sure we weren't attacking a straw man

### Then Attacking the Strong Version

We applied first-principles analysis:

1. Identify what type of claim it is (causal, comparative, categorical, predictive, normative)
2. Surface hidden assumptions
3. Check historical precedent
4. Test logical validity
5. Make sure the counter defeats the STEELMAN, not a weaker version

**Format:** 8 points, 12-16 words each

---

## How We Tried to Keep It Honest

### Multi-Source Validation

- Minimum 3 sources per major claim
- Cross-checked across platforms (Claude, Perplexity, Gemini)
- Prioritized academic papers and official documentation
- Weighted industry reports higher than marketing claims

### Bias Mitigation

- Used multiple AI platforms so no single model dominated
- Explicitly told agents to challenge assumptions
- Required both strengths AND weaknesses from each agent
- Documented contradictory evidence
- Assigned confidence levels

### What We Know We're Missing

- **Counterfactual problem:** No data on what the world looks like without public tools
- **Rapidly evolving:** 2024-2025 sources, may shift
- **Selection bias:** Breach data only from orgs that report
- **Distribution hard to quantify:** We know smaller orgs get hurt but hard to measure exactly
- **Speculation about future:** Any forward-looking claims are inherently speculative

---

## How Long Did This Take?

| Phase | Time | What Happened |
|-------|------|---------------|
| Phase 1 | ~5 min | Parallel empirical research (3 agents) |
| Phase 2 | ~3 min | Broke down arguments (24 claims each) |
| Phase 3 | ~10 min | Red team analysis (64+ agents in parallel) |
| Phase 4 | ~5 min | Figured out what held up |
| Phase 5 | ~5 min | Built steelmans and counter-arguments |
| **Total** | **~30 min** | Complete research cycle |

---

## Sources We Used

### Academic Papers

1. Arora, A., Krishnan, R., Telang, R., Yang, Y. (2008). "An Empirical Analysis of Software Vendors' Patch Release Behavior." *Information Systems Research*, 21(1), 115-132.
2. Arora, A., Nandkumar, A., Telang, R. (2006). "Does Information Security Attack Frequency Increase with Vulnerability Disclosure?" *Springer*.
3. Bilge, L., Dumitras, T. (2012). "Before We Knew It: An Empirical Study of Zero-Day Attacks." *ACM CCS*.
4. Van Goethem, T., et al. (2022). Zero-day vulnerability patch timing survival analysis.
5. Frei, S., et al. (2008). "Modeling the Security Ecosystem." *Black Hat Conference*.

### Government/Research Reports

6. Ablon, L., Bogart, T. (2017). "Zero Days, Thousands of Nights." *RAND Corporation RR1751*.
7. NIST SP 800-53, SP 800-184 - Coordinated Disclosure Policy
8. CISA Known Exploited Vulnerabilities (KEV) catalog

### Industry Research

9. IBM/Ponemon - Cost of a Data Breach Report (2022-2024)
10. Mandiant/Google Cloud - Time-to-Exploit Trends (2023)
11. Unit 42 (Palo Alto Networks) - State of Exploit Development (2024)
12. VulnCheck - Exploitation Trends (2025)
13. HackerOne - Hacker-Powered Security Report (2024)
14. Bugcrowd - Inside the Mind of a Hacker (2023)
15. Kenna Security/Cyentia Institute - Prioritization to Prediction
16. EPSS Working Group (2021). "Exploit Prediction Scoring System." *FIRST.org*
17. Crowdfense, Zerodium - Zero-day market pricing
18. BreachLock - Penetration Testing Report (2025)

---

**Research Date:** November 24, 2025
