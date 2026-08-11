# Fact-Check: The Folklore, Both Directions

Claim-by-claim verdicts on the most widely circulated claims about Palantir. Verdicts: **SUBSTANTIATED / EXAGGERATED / UNSUPPORTED / FALSE / UNKNOWABLE-CLASSIFIED**. Sources in `../SOURCES.md`.

## Anti-Palantir Claims

### "Palantir owns, collects, or sells your data"—FALSE
The FY2025 10-K describes revenue as software subscriptions, licenses, and professional services. The company's SEC-filed position: "We are not in the business of collecting, mining, or selling data." Contract terms (e.g., UK G-Cloud) leave data ownership with the customer. No documented resale case exists. The substantive critique is different: Palantir builds the integration layer that makes otherwise-siloed government data operationally usable. That claim is true and important, and conflating it with "they sell your data" discredits it. One live tension: the FT reported (May 2026, from an internal briefing note) that NHS England allowed Palantir employees broad access to patient data; NHS England later apologized and admitted engineers could access identifiable patient information in ways its impact assessment had not reflected. Contractual ownership and operational access are different questions.

### "Palantir built Lavender / Gospel / Israel's Gaza targeting AI"—UNSUPPORTED
The original +972 Magazine/Local Call reporting attributes Lavender and Gospel to Israeli military intelligence, not Palantir. Palantir's May 22, 2025 letter to the UN Special Rapporteur denies both by name: "Palantir did not provide the technology for, nor is it involved with, Gospel or Lavender." No public evidence contradicts the denial. Two precision notes: the letter does not address "Where's Daddy," which the Rapporteur also named; and the UN report's standard is "reasonable grounds to believe"—an investigatory threshold, not a finding of fact. What IS confirmed: a self-announced strategic partnership with the Israeli Ministry of Defense (January 2024), scope never disclosed. See the steel-man-against file for why the confirmed version is the serious argument.

### "Palantir built the Muslim registry"—FALSE
No such contract existed. The December 2016 neveragain.tech pledge and January 2017 protests at Palantir HQ were pre-emptive protests about capability, not responses to a documented build. Thiel and Karp both denied on the record that they would build one. The protests now circulate as history of a thing that happened; it didn't.

### "Palantir runs a master database / mass surveillance on all Americans"—EXAGGERATED, UNRESOLVED IN PART
The architecture claim is false as stated: deployments are per-agency instances; the government holds the data; Snopes found no evidence of a unified citizen database. What is documented: the May 2025 NYT reporting on cross-agency data-sharing direction following a March 2025 executive order; Palantir engineers embedded at the IRS on an API project; a Senate letter (Wyden/Ocasio-Cortez and others) demanding answers—which is a set of questions citing the NYT, not an independent finding, and is frequently miscited as one; a February 2026 DHS-wide blanket purchase agreement worth up to $1B; and Snowden-era documents (published September 2025) showing Palantir software processing data queried through NSA's XKEYSCORE. Palantir's rebuttal ("not a vendor on any master database project") is specific and unrefuted on its own terms. The mosaic question—whether integration of lawfully held silos constitutes a new surveillance capability nobody authorized as a whole—is the real open issue, and a German constitutional court answered a version of it against the deploying state in 2023.

### "Palantir software directly causes wrongful deportations/arrests"—SUBSTANTIATED as material contribution, UNSUPPORTED as named wrongful-arrest cases
FOIA-obtained documents show Palantir's ICM system was used in the May 2017 "Unaccompanied Alien Children" initiative targeting relatives of migrant children: 443 arrests, of which 35 were criminal arrests; the rest were civil immigration arrests of parents and caregivers who came forward to claim children. An ICE agent's affidavit places Palantir-processed tips in the workflow of the August 2019 Mississippi raids (680 arrested). The 2026-reported ELITE application produces per-person dossiers with address "confidence scores" drawing on Medicaid-derived and data-broker data. What the record lacks: a named individual whose wrongful detention is publicly traced to a specific software output. Named-case anchors that do exist are from New Orleans criminal prosecutions (Kentrell Hickerson; Evans Lewis) where the secret program surfaced in discovery.

## Pro-Palantir Claims

### "Palantir found Osama bin Laden"—UNSUPPORTED (underlying truth UNKNOWABLE-CLASSIFIED)
A documented laundering chain: Mark Bowden's *The Finish* (2012) praised Palantir without claiming it was used in the hunt; a 2013 WSJ column upgraded this to Palantir being "known to have been key in locating bin Laden"; Palantir then hosted the column's PDF on its own website. BuzzFeed News reported the claim rankled CIA insiders, one noting it "would probably be a true statement for almost any contracting company." Palantir never asserted the claim directly, and never corrected it.

### "Palantir has prevented specific terror attacks"—UNSUPPORTED / UNKNOWABLE-CLASSIFIED
Karp has claimed "innumerable" and "hundreds" of prevented attacks. Not one specific attack is publicly documented as Palantir-attributed by any government, journalist, or the company itself. The most-cited "example"—the Mike Fikri scenario (speeding ticket, Cairo ticket, connected dots)—is a fictional character from Palantir's own product demos that has recirculated as a real case since 2011.

### "Palantir is why Ukraine held off Russia / does most of the targeting"—EXAGGERATED
"Responsible for most of the targeting in Ukraine" is Karp's own claim, reported without independent verification; he later softened it. Ukraine's indigenous systems (Delta, GIS Arta) handle substantial targeting work. What IS verified: first-hand Washington Post reporting of Ukrainian officers using Palantir software for targeting workflows near Bakhmut; named Ukrainian ministers attesting to demining, war-crimes evidence, and reconstruction uses across more than half a dozen agencies; software reportedly provided free. The real record is strong; the superlative is vendor marketing.

### "Palantir refuses to work with authoritarian regimes"—EXAGGERATED
The China/Russia refusal is real, categorical, and SEC-disclosed. The broader claim fails: Palantir sells in the Gulf (a Dubai Holding joint venture; UAE defense collaboration; pursued Saudi business), and Karp concedes these clients "have their own code of ethics which is not exactly the same as ours." The refusal line tracks the US alliance map, not a democracy/authoritarian line.

### "Palantir's privacy engineering makes abuse impossible"—FALSE
The controls are real; their operation is customer-configured. Two documented failures: a JPMorgan insider-threat executive used Palantir tooling to read senior executives' emails (Bloomberg, 2018), and New Orleans ran a Palantir program for six years without the city council knowing it existed. Audit logs make abuse discoverable by the operator; they do not prevent it, and they do not help when the operator is the abuser.

### "Karp wrote his dissertation under Habermas"—FALSE
Karp's 2002 Goethe University doctorate was supervised by Karola Brede (with Hans-Joachim Busch), in a different division than Habermas taught in. Documented by Moira Weigel (*boundary 2*, 2020). The legend appears in most profiles and is repeated by both camps.

## Quotes Commonly Used Out of Context

- **"...to scare enemies and on occasion, kill them"**—real (Q4 2024 earnings call, February 2025), and the context does not soften it; Karp presents lethality as part of the mission. A different quote from the same call ("some people can get their heads cut off") IS metaphorical, about institutional disruption, and is regularly misquoted as literal.
- **"Don't work here"** (Davos, January 2023)—real but usually truncated. The full quote includes "You may not agree with that, and bless you." It is a statement of self-selection, not a threat.
- **Peter Thiel: "I no longer believe that freedom and democracy are compatible"**—real, from a 2009 Cato Institute essay. It is the chairman's personal stated view, from 17 years ago, and is not corporate policy; it is also not nothing, given the governance structure documented in the factual record.

## Political Donations (FEC primary data)

Both partisan narratives are wrong. Through October 2024, Karp gave heavily to Democratic committees (DSCC, DCCC, multiple Democratic candidates). On December 12, 2024—after the election—he gave $1,000,000 to MAGA Inc. In 2025 he gave heavily to Republican committees while continuing some Democratic giving. "Lifelong Democrat" and "always MAGA" are both false; the observable shape is a post-election pivot layered on continued bipartisan access-giving.

## Genuinely Unknowable, and Why It Matters

Classification makes the following publicly unknowable: any specific counterterrorism contribution; the technical role inside Israeli MoD systems; operational error rates of immigration-enforcement tools; whether any Palantir software touched the bin Laden operation.

The asymmetry deserves emphasis: classification protects the company's positive marketing claims (they cannot be falsified, so they persist) while blocking accountability claims (they cannot be proven, so they die). Treating the evidentiary gaps as neutral is itself an analytical error.
