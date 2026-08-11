# The Factual Record

The neutral company record, built primarily from SEC filings (read directly), court documents, procurement records, and FOIA productions. Confidence: **[HIGH]** = primary document or 2+ independent sources; **[MED]** = one credible source; conflicts flagged inline. Full citations in `../SOURCES.md`.

## What Palantir Sells

Four platforms: **Gotham** (defense/intel data integration; underpins ICE's FALCON and ICM), **Foundry** (enterprise data platform), **AIP** (AI/LLM layer over governed customer data), **Apollo** (deployment/delivery, including air-gapped environments). Revenue is software licensing plus deployment services. The company's SEC-filed position is that customers own their data and Palantir is a processor; its UK contract terms match. The company does not collect, buy, or sell data as a line of business. The substantive capability it sells is integration: making siloed data jointly searchable and operational. [HIGH]

## Financials (FY2025 10-K, read directly)

- Revenue: $4,475.4M (FY2025), up 56% from $2,865.5M (FY2024). Income from operations $1,414.0M. No debt. 4,429 employees. 954 customers. [HIGH]
- Government/commercial split: 53.7% / 46.3%—stable at ~54% government for three consecutive years. Claims that the company is "pivoting to defense" or "pivoting commercial" are both unsupported by segment data. [HIGH]
- Geography: US 74%, UK 10% (the second market by a wide margin, relevant to the NHS controversy's weight), rest of world 16%. [HIGH]
- The federal book is DoD-dominated, not ICE-dominated: largest awards are Defense Department contracts (Maven Smart System ~$1.3B ceiling through 2029; a 2025 Army enterprise agreement with a ceiling up to $10B—a consolidation ceiling for ~75 existing contracts, not new committed spend; NATO purchased Maven in 2025). ICE is a minority of federal revenue. [HIGH]

## The ICE Record

The **HSI/ERO distinction** is load-bearing and routinely collapsed. HSI (Homeland Security Investigations) is ICE's criminal-investigative division; ERO (Enforcement and Removal Operations) runs deportations.

- 2011–2014: FALCON and ICM built for HSI. [HIGH, FOIA]
- 2019: Palantir's public position was "We do not work for E.R.O." FOIA documents contradicted the practical effect: a 2016 DHS disclosure states "HSI and ERO personnel use the information in ICM." [HIGH]
- May 2017: FOIA'd documents describe the "Unaccompanied Alien Children Human Smuggling Disruption Initiative," explicitly joint ERO/HSI, with instructions to log arrivals and family information in ICM for enforcement follow-up. Outcome: 443 arrests, 35 criminal. [HIGH]
- October 2020: Palantir wrote to Amnesty International that it had "purposefully declined to take on contracts with ERO and CBP under the current Administration because we share your organization's concern with the potential serious human rights violations against migrants, refugees, and asylum seekers." [HIGH—the letter is published]
- April 2025: ICE modified the ICM task order to add **ImmigrationOS**, ~$30M, requested by ERO. The procurement language (ICE's own words) covers "Targeting and Enforcement Prioritization... streamlining selection and apprehension operations," "Self-Deportation Tracking... near real-time visibility," and "streamlined end to end immigration lifecycle from identification to removal." [HIGH—SAM.gov text reproduced in Amnesty's published letter]
- 2025–2026: a ~$29.9M ImmigrationOS renewal; a $34M sole-source next-generation ICM award; a February 2026 DHS-wide blanket purchase agreement up to $1B. [MED]
- July 2026: NPR reported, from court filings in a multi-state lawsuit, that Medicaid data improperly shared with ICE was passed to Palantir's ELITE targeting application; officials described the file as having been shared and deleted via a Microsoft Teams chat; Palantir said the data was purged. [MED]
- May 2025: thirteen former employees, including one who worked with the privacy and civil liberties team, published an open letter ("The Scouring of the Shire") saying the company's founding ethical principles "have now been violated, and are rapidly being dismantled." Thirteen of ~4,400 is numerically small; most departing employees sign non-disparagement agreements, so observable dissent is structurally suppressed. Both facts are relevant. [HIGH]

## Predictive Policing

- **New Orleans (2012–2018):** Palantir provided its platform free through a philanthropic arrangement with the mayor's office, which meant no procurement process and no city council review; council members did not know the program existed. It analyzed gang ties, criminal histories, and social media to predict who might commit or suffer violence. Exposed by The Verge/Type Investigations in February 2018; the city declined renewal within weeks. The program surfaced in criminal discovery (Hickerson, Lewis prosecutions). [HIGH]
- **LAPD Operation LASER (2011–2019):** used Palantir Gotham for point-scored "chronic offender" lists. The LAPD Inspector General's March 2019 audit found almost half of designated chronic offenders had zero or one violent-crime arrest, about 10% had no "quality interactions" with police, and inconsistent criteria with inadequate oversight; the list was 84% Black and Latino, which the audit itself noted mirrored violent-crime-arrest demographics rather than labeling it overrepresentation. LASER was terminated in April 2019. [HIGH—audit is public]
- **Germany:** Hesse police bought Gotham in 2017 ("HessenDATA") and used it thousands of times a year, including on people with no connection to crime. On February 16, 2023, the Federal Constitutional Court held the Hesse and Hamburg statutes authorizing automated data analysis unconstitutional—the ruling struck the legal basis, not the company by name. A fresh challenge argues the amended law still falls short. [HIGH—judgment published in English]
- Palantir's May 2025 letter to the UN states it "does not and has not supported predictive policing workflows in Israel—or indeed, anywhere else." Readers can weigh that sentence against this section and a Palantir crime-forecasting patent. [HIGH that both exist]

## Israel

Confirmed: a strategic partnership with Israel's Ministry of Defense announced January 12, 2024, agreed at a board meeting held in Tel Aviv, described by Palantir as supporting "war-related missions"; no further details ever disclosed; Palantir's letter states its Israeli MoD work began only after October 7, 2023, with prior Israeli sales going to civilian agencies. [HIGH]

Alleged: the UN Special Rapporteur's 2025 report found "reasonable grounds to believe" Palantir provided AI-platform capability supporting military targeting. This is an investigatory threshold from an independent expert (herself politically contested and later US-sanctioned), not an adjudicated finding. Palantir's response attacked the report's framing and provided no operational detail. Amnesty separately reported (August 2025) that Palantir and Babel Street tooling poses surveillance risks to pro-Palestine student protesters and migrants in the US. [documented as allegations]

## Ukraine

Verified: first-hand Washington Post reporting of Ukrainian officers using Palantir software in targeting workflows; named ministers attesting to uses across more than half a dozen agencies including demining (under the national strategy through 2033) and war-crimes evidence; reported as provided free of charge; 2026 reporting describes expanded deep-strike planning integration and Ukraine feeding military data to Palantir AI for training—the latter, if accurate, is in tension with the "customers own their data, we don't use it" framing and is unreconciled. [Mixed HIGH/MED]

## Governance

- **Share structure:** three classes. Class F (held by a founder voting trust for Karp, Thiel, and Cohen) carries variable voting power that automatically tops the founders up to 49.999999% of any vote, regardless of how many shares they sell. The 2026 annual meeting arithmetic confirms the insider block was almost exactly 50.0% of votes cast. This is materially stronger than ordinary dual-class structures. [HIGH—proxy statement, read directly]
- **Board:** seven members, three of them founders. [HIGH]
- **2026 shareholder votes:** proposals for an independent due-diligence report, a human-rights impact assessment, and political-spending disclosure all failed (roughly 8%, 12%, and 26% of votes cast), with Norway's sovereign wealth fund voting in favor of all three. A religious-investor group claimed 56% of non-insider shares supported the human-rights proposal; that figure could not be reproduced from the 8-K (our arithmetic yields ~25%), and should not be used without its methodology. [HIGH for the vote results]
- **CEO pay:** Karp's FY2025 total compensation was $8.6M against a median employee at $235K—a 37:1 ratio, unusually low for the market cap, and a fact that cuts against a common criticism. [HIGH]
- **Independent oversight:** no standing independent third-party audit of any Palantir deployment was locatable anywhere in the public record. The company's advisory council on privacy and civil liberties is, by Palantir's own description, compensated, confidential, and advisory: "any decisions that we make after consulting with the PCAP are entirely our own." External accountability has in practice come from journalism, FOIA litigation, civil-society legal challenges, customer-side auditors (the LAPD IG), and courts. [HIGH that none was locatable]

## Press and Legal

- Palantir sued the Swiss magazine Republik in February 2026 over an investigation into its failed Swiss government bids—a right-of-reply action under Swiss media law, not a libel/damages suit (a distinction most coverage blurred). In June 2026 the Zurich Commercial Court rejected 22 of its 23 requests and assessed 95% of costs to Palantir, which accepted the ruling. [HIGH]
- April 2026: Palantir posted a ~22-argument manifesto thread drawn from *The Technological Republic* (~32M views), including "Some cultures have produced vital advances; others remain dysfunctional and regressive" and calls to end the "postwar neutering" of Germany and Japan; it drew international criticism and some market reaction. A YouGov survey later that month tested the 22 statements on Americans without attribution: most polled acceptably; the two most distinctive prescriptions (mandatory national service; remilitarizing Germany and Japan) failed even unattributed. There is no polling on Palantir itself; any claim about the company's public favorability is unsupported. [HIGH]

## Contested / Do Not Assert

Reporting conflicts and unverifiable claims we explicitly flag: the NHS contract value (£330M per NHS England vs £480M in some coverage—likely tender ceiling vs award); cumulative federal obligations (~$5.1B circulates but traces to a social-media post); Palantir as vendor for Chicago's "heat list" (unestablished); any NYPD program specifics (unverified); KLP divestment (unverified); the claim that Palantir enabled the Lebanon pager attacks (single-source, a 2025 Karp biography, uncorroborated).
