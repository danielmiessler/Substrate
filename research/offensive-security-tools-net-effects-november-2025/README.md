# Net Effects of Offensive Security Tooling on Cybersecurity Defense

**Date:** November 24, 2025
**By:** Daniel Miessler (with Kai)

---

> **Important caveat:** This research was executed entirely by AI systems (Claude, Gemini, Perplexity/OpenAI) with scaffolding designed to emulate research rigor. The data was gathered by AI agents and analyzed by AI agents. While we tried to be thorough and cite real sources, this should NOT be considered equivalent to research conducted by a human research team. It's an experiment in AI-assisted research, and the findings are open for debate and discussion. Take it as a starting point, not a definitive answer.

---

## What This Is

We did a bunch of research on the classic debate: does publishing offensive security tools like Metasploit help defenders more than attackers, or the other way around?

We threw a lot of AI agents at this from different angles—looked at academic papers, industry data, historical examples from other fields—and then red-teamed both sides of the argument to see what holds up.

**What we found:** The data pretty clearly supports that publishing these tools is **net positive for defenders overall**, but there's a real catch: the benefits mostly go to organizations with mature security programs, while smaller orgs (SMBs, hospitals, schools) bear more of the attacker burden without getting much defensive benefit.

**The bigger insight:** This debate isn't really about whether to publish tools. It's about how fast defenders can actually respond. If everyone could patch in 48 hours, publication would be obviously good. But most orgs take weeks or months, so publication creates winners and losers.

---

## The Questions We Tried to Answer

**Main question:** Does publishing offensive security tools help or hurt defenders?

**Specific things we looked at:**
1. Does disclosure actually make vendors patch faster?
2. Do sophisticated attackers already have these tools anyway?
3. How does the timing work out (attackers exploit fast, defenders patch slow)?
4. What happened in other fields that faced similar debates (crypto, aviation, medicine)?
5. Who actually benefits and who gets hurt?

---

## How We Did This

We used a bunch of AI research agents across different platforms (Claude, Perplexity, Gemini) to dig into the data from multiple angles. Then we red-teamed both sides—had 32 agents attack the "net negative" argument and 32 agents attack the "net positive" argument to see what actually holds up under scrutiny.

**Sources we pulled from:** Academic papers, RAND Corporation studies, IBM/Ponemon breach reports, Mandiant threat intel, CVE databases, industry surveys—basically anything with actual data rather than just opinions.

### The Red Team Approach

We had different "personalities" analyze both arguments—skeptics demanding evidence, people looking for edge cases, game theorists modeling attacker behavior, contrarians arguing the opposite, etc. The idea was to stress-test both sides and see what breaks.

See `methodology.md` for the full agent roster if you're curious about the specific perspectives.

---

## What's In This Folder

- **README.md** - You're reading it
- **executive-summary.md** - The short version with recommendations
- **findings.md** - All the data we found, with tables
- **methodology.md** - How we did the research
- **red-team-analysis.md** - The best arguments for and against both positions

### Main Sources We Used

- RAND Corporation (2017): "Zero Days, Thousands of Nights"
- Arora et al. (2008): Patch behavior study
- IBM/Ponemon (2023): Cost of a Data Breach
- Mandiant/Google Cloud (2023): Time-to-Exploit Trends
- Unit 42 (2024): Exploit development research
- VulnCheck (2025): Exploitation data
- HackerOne (2024): Bug bounty data

---

## What We Found

### Bottom Line: Net Positive, But It's Complicated

The data supports that publishing these tools is net positive overall, but there's a real distributional problem:

| Factor | Evidence | Confidence |
|--------|----------|------------|
| Patch acceleration | 137% more likely to patch after disclosure | High (Arora 2008) |
| Low exploitation rate | Only 5% of vulns with exploits are exploited | High (2009-2018 data) |
| Defender savings | $1.76M lower breach costs with offensive testing | High (IBM/Ponemon) |
| Detection improvement | 3-4x after red team exercises | High (Mandiant) |
| Attacker advance knowledge | 6.9-year average zero-day lifespan | High (RAND 2017) |
| Timing asymmetry | 5 days to exploit vs 14+ days to patch | High (VulnCheck/Mandiant) |

### Historical Precedent is Pretty Clear

Every comparable field we looked at shows transparency works better:

- **Cryptography:** Open algorithms have been stronger than secret ones for 150+ years (Kerckhoffs's principle)
- **Aviation:** FAA requires public disclosure of failures → aviation became the safest transportation mode
- **Medicine:** Open publication of techniques → exponential improvement vs. the guild-secret medieval era

### The Timing Problem is Real

There's a genuine issue with timing:

- Attackers can weaponize vulnerabilities in about 5 days now (down from 32 days historically)
- 30% of vulnerabilities get exploited within 24 hours of disclosure
- Most defenders take 14+ days to patch non-critical systems
- So there's a window where attackers have the advantage

**But here's the thing:** This timing problem exists whether or not the tools are public. The bottleneck is patch speed, not tool availability.

### Who Wins and Who Loses

**The benefits go to:**
- Big companies with dedicated security teams
- Organizations doing continuous pentesting
- Companies with bug bounty programs

**The costs fall on:**
- Small businesses without security staff
- Healthcare orgs with legacy systems
- Schools and local governments
- Anyone who can't patch quickly

This is the real ethical tension in the debate—it's not a clean win.

---

## How Confident Are We?

### Pretty confident about:
- Disclosure speeds up patching by ~137%
- Only about 5% of vulns with public exploits actually get exploited
- Sophisticated attackers have their own tools regardless (the zero-day market proves this)
- Historical precedent from other fields supports transparency
- Orgs doing offensive testing have better outcomes

### Somewhat confident about:
- Benefits concentrate in mature orgs
- Script kiddie empowerment is real but limited
- The timing asymmetry favors attackers short-term

### Less confident about:
- Exactly how much harm goes to smaller orgs
- Whether restricting tools would actually reduce attacks (we don't have that counterfactual)
- What the optimal disclosure timing should be

---

## What We Think Should Happen

### For Policy Makers

Don't restrict tool publication. The evidence suggests:
- Sophisticated attackers have tools anyway
- Restriction mostly hurts legitimate defenders
- No real evidence that restriction reduces attacks

Instead, focus on:
- Helping defenders patch faster (that's the real bottleneck)
- Getting security resources to smaller orgs that need them
- Coordinated disclosure timelines

### For Security Practitioners

Use these tools defensively. The numbers are pretty clear:
- ~$1.76M lower breach costs with offensive testing
- 3-4x detection improvement after red team exercises
- 544% ROI on bug bounty programs

### For Researchers

Keep publishing. Transparency creates accountability, and secrecy mostly benefits elite attackers.

---

## What We Don't Know

### Limitations of this research

1. We don't have data on what the world would look like without public tools (no counterfactual)
2. Hard to quantify exactly how much harm goes to smaller orgs
3. This landscape changes fast—findings might shift
4. The data we have is biased toward orgs that can measure things

### Things worth researching more

1. Track outcomes for small businesses and healthcare over time
2. Look at jurisdictions with different disclosure policies
3. Better quantify who wins and loses from specific disclosures
4. Figure out optimal disclosure timing

---

## Bottom Line

Publishing offensive security tools is net positive overall, but the benefits mostly go to orgs that are already good at security, while the costs fall on orgs that aren't.

Both sides of this debate are partially right:
- Pro-publication folks are right about aggregate benefits but ignore who gets hurt
- Anti-publication folks are right about timing problems but wrong about the cause

The real issue isn't whether to publish tools—it's whether defenders can respond fast enough. Focus on that instead of restricting tools.

---

## Other Files

- `executive-summary.md` - Short version
- `findings.md` - All the data
- `methodology.md` - How we did this
- `red-team-analysis.md` - Best arguments for both sides

---

**Research Date:** November 24, 2025
**By:** Daniel Miessler with Kai
