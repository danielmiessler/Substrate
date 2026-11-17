# Sweep findings

What the sweep found, as of 2026-11-17. Every count is a count of published reports; none is a rate, and a bigger number in a row means more was published and found, not more happened. See [METHODOLOGY.md](../METHODOLOGY.md) for how each figure was made and what it cannot show.

## The ledger

- 286 incidents: 145 Confirmed (51%), 109 Strong (38%), 32 Suspected (11%).
- 219 cite at least one primary source; 230 carry a written reason for resting on one publisher; 31 rest on incident-database records alone.
- 65 name an agent harness or framework; 119 name a model, 167 do not.

| Year of incident | Incidents |
|---|---|
| 2023 | 5 |
| 2024 | 27 |
| 2025 | 80 |
| 2026 | 174 |

Years are dated by when the activity or disclosure happened, and reporting lags: recent months are thin because reports have not been written yet, and 2023 is thin because less was published and found.

| Actor type as the source describes it | Incidents |
|---|---|
| criminal | 134 |
| unknown | 77 |
| nation-state | 73 |
| hacktivist | 2 |

| What the AI did (an incident can have several roles) | Incidents |
|---|---|
| malware-dev | 88 |
| agentic-intrusion | 78 |
| social-engineering | 73 |
| recon | 59 |
| fraud | 56 |
| ops-automation | 55 |
| deepfake | 51 |
| phishing-content | 51 |
| exploit-dev | 40 |
| evasion | 32 |
| data-analysis | 22 |
| vuln-research | 20 |
| llmjacking | 16 |
| supply-chain | 14 |
| agent-hijack | 12 |
| malware-runtime-llm | 6 |

| Model vendor named by the source (an incident can name several) | Incidents |
|---|---|
| Anthropic | 45 |
| Google | 33 |
| OpenAI | 29 |
| DeepSeek | 18 |
| Zhipu AI | 6 |
| Amazon | 5 |
| xAI | 5 |
| Alibaba | 3 |
| Microsoft | 2 |
| Moonshot AI | 2 |
| Anysphere | 1 |
| ByteDance | 1 |

119 incidents name a model and 167 do not. Vendor counts follow what a source chose to name, and a vendor appears most where it reports on its own platform.

| Harness kind | Incidents |
|---|---|
| none | 221 |
| open-source | 32 |
| custom | 17 |
| commercial-agent | 16 |

| Harness named most often | Incidents |
|---|---|
| Claude Code | 19 |
| ARTEX | 12 |
| Cairn | 5 |
| Hermes | 5 |
| OpenClaw | 4 |
| PentAGI | 4 |
| Strix | 3 |
| Cursor | 2 |
| CyberStrikeAI | 2 |
| HexStrike-AI MCP | 2 |

| Sector hit (an incident can hit several) | Incidents |
|---|---|
| enterprise-broad | 62 |
| government | 55 |
| technology | 54 |
| individuals | 47 |
| crypto | 28 |
| finance | 26 |
| unknown | 22 |
| defense | 19 |
| ai-platforms | 17 |
| software-supply-chain | 16 |

| Country attributed by a source | Incidents |
|---|---|
| North Korea | 32 |
| China | 30 |
| Iran | 13 |
| Russia | 8 |
| Hong Kong | 6 |
| Japan | 3 |
| Cambodia | 2 |
| Taiwan | 2 |
| Algeria | 1 |
| Brazil | 1 |

Countries are shown for the 102 incidents where a source attributes one; the other 184 name none, or give language or infrastructure clues only. This is the source's attribution, repeated, not ours.

## Who publishes the evidence

| Publisher (incidents citing it) | Incidents |
|---|---|
| Google Threat Intelligence Group | 41 |
| AI Threat Watch | 34 |
| AI Incident Database | 22 |
| Anthropic | 20 |
| Microsoft | 20 |
| OpenAI | 18 |
| Palo Alto Networks Unit 42 | 10 |
| Sysdig | 8 |
| Trend Micro | 8 |
| CrowdStrike | 7 |
| FBI | 7 |
| BleepingComputer | 6 |

79 of 286 incidents (28%) cite at least one of Google, Mandiant, Anthropic or OpenAI, and those publishers supply 82 of 410 citations (20%). This is the visibility bias in numbers: the list shows what a handful of large vendors and model providers can and choose to report on their own platforms.

## The sweep

| Family file | Swept | Sources swept | Candidates | Admitted | Merged | Excluded |
|---|---|---|---|---|---|---|
| databases-press | 2026-11-17 | 82 | 150 | 81 | 42 | 27 |
| heldout-gap | 2026-11-17 | 11 | 12 | 11 | 0 | 1 |
| provider-gov | 2026-11-17 | 28 | 68 | 46 | 6 | 16 |
| vendor-ti | 2026-11-17 | 165 | 141 | 34 | 69 | 38 |

371 candidates reviewed in all: 172 admitted, 117 merged into an incident already on file, 82 excluded with a reason. The registry holds 278 sources: 164 vendor-ti, 59 press, 16 government, 16 incident-database, 9 model-provider, 9 regional-cert, 3 academic, 2 court-record.

## Held-out result

The independent list held 70 incidents. The sweep alone found 58 (83%). The 12 it missed, each fetched separately from its own URL:

| Held-out entry the sweep missed | Disposition | Source kind |
|---|---|---|
| Canadian grandparents AI voice-clone emergency scams | excluded | not registered |
| Jennifer DeStefano fake kidnapping voice clone (Arizona) | admitted | press |
| Baotou AI face-swap video-call fraud (Inner Mongolia police) | admitted | press |
| Kerala deepfake WhatsApp video-call scam | admitted | press |
| Hong Kong deepfake loan-application syndicate | admitted | press |
| Hong Kong deepfake romance-scam syndicate (HK$360M) | admitted | press |
| 'Brad Pitt' deepfake romance scam (France) | admitted | press |
| Rakuten Mobile intrusion by teens using a ChatGPT-built program (Japan) | admitted | press |
| 'Grokking' malvertising via X's Grok | admitted | press |
| postmark-mcp malicious MCP server | admitted | vendor-ti |
| Gisele Bundchen deepfake ad fraud ring (Brazil) | admitted | press |
| Singapore PM Lawrence Wong deepfake Zoom scam (S$4.9M) | admitted | government |

## Second grading

286 of 286 incidents have a second grade; the graders agreed on 205 (72%).

## What left the ledger or changed grade

| Incident | Change | Source | Reason |
|---|---|---|---|
| php2shell-fragnesia-firewall-intrusions | removed | https://theinjection.dev/category/incident/ | Its only source is a category listing whose text no longer describes this incident (the evidence fetch found only an ARTEX item there), and the original Dream Research report was not found. Removed until a source that describes it is cited. |
| prc-apts-gemini-2025 | removed | https://cloud.google.com/blog/topics/threat-intelligence/adversarial-misuse-generative-ai | A report-wide aggregate of 'over 20' PRC groups, not one incident. The report names one PRC actor on its own, APT41, and only for an unsuccessful attempt to learn about Gemini's infrastructure, which is not an attack; the remainder is dropped. |
| russian-apts-gemini-2025 | removed | https://cloud.google.com/blog/topics/threat-intelligence/adversarial-misuse-generative-ai | A report-wide aggregate of Russian APT actors with 'limited use' and no actor named on its own; dropped. |
| dprk-apts-gemini-2025 | merged into apt43-public-ai-tools-research-2025 | https://cloud.google.com/blog/topics/threat-intelligence/adversarial-misuse-generative-ai | A report-wide aggregate of nine North Korean groups. The one actor the report describes on its own, APT43, becomes its own incident; the remainder is dropped. |
| unit42-ai-agents-ransomware-10-hours | merged into unit42-ai-assisted-intrusion-investigation-2026 | https://unit42.paloaltonetworks.com/ai-assisted-cyber-attack-inside-a-unit-42-investigation/ | Renamed: Unit 42 updated its post to clarify the attack was an intrusion, not a ransomware attack, so the id and title no longer describe it. |
| cardin-kuleba-deepfake-zoom-2024 | confidence: STRONG to SUSPECTED | https://www.nbcnews.com/politics/congress/ben-cardin-targeted-apparent-deep-fake-call-dmytro-kuleba-rcna172776 | Second grader: Cardin's statement, quoted verbatim by NBC, says only that the caller was "posing as a known individual"; the Senate notice says the call "appeared to be a live audio-video connection". Neither party says AI or deepfake; that word is NBC's and Punchbowl's. An AI claim reported only second-hand is SUSPECTED. |
| crosetto-voice-clone-italian-tycoons-2025 | confidence: STRONG to SUSPECTED | https://www.euronews.com/2025/02/10/scammers-clone-italian-defence-ministers-voice-with-ai-in-ransom-scheme | Second grader: Euronews headline says AI clone, but its body: 'It is unclear whether Crosetto's voice was a pre-recorded message or a filter created with artificial intelligence'. No victim or prosecutor statement on AI quoted. |
| eleven-nation-alert-dprk-realtime-deepfake-2026 | confidence: CONFIRMED to STRONG | https://www.techtimes.com/articles/322688/20260802/north-korean-it-workers-use-real-time-deepfakes-beat-hiring-checks-eleven-nations-warn.htm | Second grader: Cited source is TechTimes. The State Department alert (read via the Wayback snapshot 20261110084543; the live page answers 403) says workers use 'the integration of AI, to obfuscate their identities', but on deepfakes only lists as a red flag 'video feeds that appear to be manipulated or artificially generated'. The real-time-deepfake claim in the title is hedged in the primary, and the alert covers a scheme, not one operation. |
| evilai-fake-apps-ai-generated-code | confidence: STRONG to SUSPECTED | https://www.trendmicro.com/en_us/research/25/i/evilai.html | Second grader: Trend asserts 'AI-generated, legitimate-looking code' but the fetched page shows no artifact basis; its supporting sentence is generic ('Increasingly, attackers are leveraging AI tools...'). Thin evidence, not an artifact inference. |
| ferrari-ceo-voice-clone-attempt-2024 | confidence: STRONG to SUSPECTED | https://www.jalopnik.com/ferrari-exec-nearly-duped-by-deepfake-voice-of-ceo-bene-1851608088/ | Second grader: Jalopnik relays Automotive News/Bloomberg's unnamed 'people'; 'Representatives for the ... company declined to comment'. No victim or investigator statement. |
| fideuram-intesa-voice-clone-95m-2026 | confidence: STRONG to SUSPECTED | https://gulfnews.com/world/europe/ai-voice-cloning-scam-hits-italian-bank-fake-executives-trigger-95m-overseas-transfers-1.500688692 | Second grader: Gulf News relays Reuters relaying 'two people familiar with the matter': 'According to the sources cited by Reuters, AI technology was used to replicate the lawyer's voice'. Victim 'declined to comment'; no investigator or prosecutor statement on AI in the source. |
| honestcue-gemini-downloader-2025 | confidence: CONFIRMED to STRONG | https://cloud.google.com/blog/topics/threat-intelligence/distillation-experimentation-integration-ai-adversarial-use | Second grader: The Gemini API call is certain, but GTIG frames it as experimentation: families 'that experiment with using Gemini's API'; 'likely in the proof-of-concept stage'; no victim. Scope question: method excludes PoC tools that never touched a victim. |
| jadepuffer-agentic-ransomware-langflow | confidence: CONFIRMED to STRONG | https://www.theregister.com/security/2026/07/02/smooth-ai-criminal-drives-first-end-to-end-agentic-ransomware-attack/5266073 | Second grader: The Register quoting Sysdig; Sysdig's basis is artifact inference: payloads with 'the kind of detailed annotations that ... LLM-generated code produces reflexively'. Sysdig's own JadePuffer post not cited. |
| openai-dprk-deceptive-employment-2025 | confidence: STRONG to CONFIRMED | https://cdn.openai.com/threat-intelligence-reports/5f73af09-a3a3-4a55-992e-069237681620/disrupting-malicious-uses-of-ai-june-2025.pdf | Second grader: Provider banned accounts that 'used OpenAI's models to develop materials'; DPRK link is hedged ('potential DPRK-linked'). Data note: the Korea Herald source is dated 2025-02-22 and covers OpenAI's February report, not the June one the incident date uses. |
| openai-korean-operators-xenorat-2025 | confidence: STRONG to CONFIRMED | https://cdn.openai.com/threat-intelligence-reports/7d662b68-952f-4dfd-a2f2-fe55b041cc4a/disrupting-malicious-uses-of-ai-october-2025.pdf | Second grader: Provider banned the accounts after observing malware/C2 development use; the tie to the Trellix XenoRAT campaign is hedged ('It is possible that the same operators...'). |
| operation-snowball-european-telecom | confidence: CONFIRMED to STRONG | https://www.scworld.com/brief/autonomous-ai-agent-executes-multi-week-cyberattack-on-european-telecommunications-provider | Second grader: Only source is SC Media relaying Infosecurity relaying Malbear Labs; investigator's own wording not cited. CONFIRMED only if Malbear Labs report is added. |
| promptflux-gemini-malware-2025 | confidence: CONFIRMED to STRONG | https://cloud.google.com/blog/topics/threat-intelligence/threat-actor-usage-of-ai-tools | Second grader: GTIG: 'experimental dropper malware ... suggests threat actors are experimenting with LLMs'; 'likely still in research and development'; self-modification 'commented out'. Experimentation, no victim; scope question under /method/'s PoC exclusion. |
| quietvault-ai-credential-stealer-2025 | confidence: STRONG to CONFIRMED | https://cloud.google.com/blog/topics/threat-intelligence/threat-actor-usage-of-ai-tools | Second grader: GTIG malware analysis: QUIETVAULT 'leverages an AI prompt and on-host installed AI CLI tools to search for other potential secrets'. Malware that drives an LLM at runtime. |
| recon-agentic-credential-harvest-2026 | confidence: STRONG to CONFIRMED | https://cloud.google.com/blog/topics/threat-intelligence/from-prompting-to-autonomy-the-evolution-of-adversarial-ai | Second grader: GTIG examined the exposed C2 with agent configs: 'By leveraging autonomous AI agents to research vulnerabilities ... the adversary automated the end-to-end post-exploitation pipeline'. |
| retool-deepfake-voice-vishing-2023 | confidence: CONFIRMED to STRONG | https://retool.com/blog/mfa-isnt-mfa | Second grader: Retool says in its own post that the caller "deepfaked our employee's actual voice", a first-hand public account with specifics, but shows no recording or artifact. That makes it STRONG, not CONFIRMED. |
| rubio-signal-ai-voice-impersonation-2025 | confidence: CONFIRMED to STRONG | https://www.cbsnews.com/news/marco-rubio-ai-impersonator-state-department-cable | Second grader: The cable counts as a primary source, reached through CBS, but its only verbatim sentence about AI is hedged: the impostor "likely aimed to manipulate targeted individuals using AI-generated text and voice messages". NPR attributes the AI link to "two senior officials and a cable" without quoting it. The ledger's CONFIRMED overstates the cable's own wording. |
| unc1069-deepfake-zoom-crypto-fintech-2026 | confidence: STRONG to SUSPECTED | https://cloud.google.com/blog/topics/threat-intelligence/unc1069-targets-cryptocurrency-ai-social-engineering | Second grader: Mandiant: 'Mandiant was unable to recover forensic evidence to independently verify the use of AI models in this specific instance'; the deepfake rests on the victim's report that the video 'appeared to be a deepfake'. Borderline STRONG via Mandiant's general 'known use of AI tools by the threat actor for editing images or videos'. |
| vidoc-deepfake-candidates-2025 | confidence: STRONG to CONFIRMED | https://www.theregister.com/2025/02/11/it_worker_scam | Second grader: The victim shows evidence: the co-founder recorded the second interview and published the video ("Yes, this is a real recording, it happened today"). He is quoted on the record by The Register. The first candidate is only "almost certainly using an AI filter"; the grade rests on the recorded one. |
| voidlink-ai-built-linux-malware-framework | confidence: CONFIRMED to STRONG | https://research.checkpoint.com/2026/voidlink-early-ai-generated-malware-framework/ | Second grader: Check Point 'believes' VoidLink was 'authored almost entirely by artificial intelligence, likely under the direction of a single individual'; basis is development artifacts. Also not shown deployed against a victim. |
| wiz-ceo-deepfake-voice-attempt-2024 | confidence: CONFIRMED to STRONG | https://techcrunch.com/2024/10/28/wiz-ceo-says-company-was-targeted-with-deepfake-attack-that-used-his-voice/ | Second grader: the CEO's first-hand account on the record is quoted by TechCrunch ("Dozens of my employees got a voice message from me"). It has specifics but no evidence shown, so it is STRONG. |
| wpp-ceo-deepfake-meeting-attempt-2024 | confidence: CONFIRMED to STRONG | https://www.theguardian.com/technology/article/2024/may/10/ceo-wpp-deepfake-scam | Second grader: The CEO's email to staff, quoted by the Guardian, is a first-hand account with specifics (a fake WhatsApp account, a Teams meeting, a voice clone and YouTube footage), but no evidence is shown. Read's only verbatim AI line is "We all need to be vigilant to the techniques that go beyond emails to take advantage of virtual meetings, AI and deepfakes." |

