---
title: "L1C01 — Air Law, Air Traffic Rules and Procedures"
---

# L1C01 — Air Law, Air Traffic Rules and Procedures

> **Module Type:** Exam Content — TP 15530 Section 1
> **ICAO Competency Code:** APK (Application of Procedures)
> **Estimated Duration:** 4–5 hours (recommend splitting across two sessions)
> **TP 15530 Mapping:** Section 1 — Air Law, Air Traffic Rules and Procedures
> **Regulatory References:** Aeronautics Act; CARs Parts I, VI, IX; Standards 921, 922, 923; AC 903-001; AC 901-002; AC 922-001

---

<div class="instructor-note-box">
<div class="instructor-note-header">
<span class="instructor-emoji">📝</span> Instructor Notes — Module Purpose
</div>
<div class="instructor-content">

This is the densest module in the entire L1C ground school. Air Law establishes the legal framework within which every other module operates — systems, human factors, meteorology, navigation, flight operations, theory of flight, and radiotelephony all exist within the boundaries defined here. Students who do not thoroughly understand Air Law will struggle to apply knowledge from other modules in operationally meaningful ways.

**Teaching approach:** Resist the temptation to read regulations aloud. Instead, frame every regulation as the answer to a question: "What problem does this rule solve?" or "What went wrong that made this rule necessary?" Regulations are encoded safety lessons — teach the lesson, then show the regulation that codifies it.

**Common student misconceptions:**
- "Advanced rules don't apply to me anymore — I'm L1C now." → L1C *builds on* Advanced. Division III rules (901.23–901.27) apply to ALL small and medium RPA operations regardless of category. L1C pilots must know Basic, Advanced, AND L1C regulations.
- "I can fly BVLOS anywhere in Class G." → Class G is necessary but not sufficient. You also need to be below 400 ft, 5+ NM from aerodromes, away from populated areas (with SAD) or sparsely populated areas (requires PVD), and outside forest fire NOTAMs, CYR areas, and Section 5.1 restricted airspace.
- "The declaration means my drone is certified." → Declarations are manufacturer self-assessments, not government certifications. The manufacturer declares compliance; TC does not test or certify the aircraft.

**Recommended session split:** Cover Sections 1–5 (Aeronautics Act through Part VI Airspace) in Session 1. Cover Sections 6–12 (Part IX Divisions through SFOC) in Session 2.

</div>
</div>

---

## LEARNING OBJECTIVES

After completing this module, you will be able to:

1. Demonstrate a basic understanding of the Aeronautics Act and its relevance to RPAS operations
2. Identify which parts of the Canadian Aviation Regulations apply to RPAS operations
3. Define key RPAS terms as used in CARs Parts I and IX
4. Describe the horizontal and vertical limits of all Canadian airspace classifications
5. Explain the structure of CARs Part IX and its Divisions
6. Differentiate between Basic, Advanced, Level 1 Complex, and SFOC operations
7. State the operating rules that apply to all small and medium RPA operations (Division III)
8. Define how Division VI applies to Level 1 Complex operations including both 901.87(a) and 901.87(b) pathways
9. Explain the 3P framework (Pilot, Procedure, Platform) and the requirements for each
10. Describe the RPAS Operator Certificate requirements and the contents of the RPAS Operations Manual
11. Explain the role and responsibilities of RPAS Safety Assurance Declarations under Division XI and Standard 922
12. Describe when a Special Flight Operations Certificate is required

---

## SECTION 1: The Aeronautics Act

### 1.1 Foundation of Canadian Aviation Law

The Aeronautics Act (R.S.C., 1985, c. A-2) is the federal statute that gives the Minister of Transport authority to regulate all of aviation in Canada — including remotely piloted aircraft. Everything else in aviation law flows from this Act: the CARs, the Standards, the Advisory Circulars, all of it exists because the Aeronautics Act grants the Minister the power to create them.

As an L1C pilot, you need a basic understanding of the Act, not detailed knowledge of every section. The key points are:

**The Minister's Authority:** The Act grants the Minister of Transport broad authority to regulate aviation safety, including the power to make regulations, issue certificates, conduct inspections, and take enforcement action. When we say "the Minister issues a pilot certificate," this is the statutory authority behind it.

**Section 5.1 — Ministerial Orders:** The Minister can restrict any airspace by order, without going through the full regulation-making process. These orders appear as NOTAMs and can be issued rapidly in response to emergencies, security events, or other urgent situations. As a drone pilot, you MUST check NOTAMs before every flight — a Section 5.1 order could restrict your planned operating area with little advance notice.

**Offences and Enforcement:** The Act establishes that violations of the regulations can result in administrative monetary penalties, certificate suspension or cancellation, and in serious cases, criminal prosecution. RPAS-specific penalties include fines of up to $1,000 for individuals and $5,000 for corporations for many violations, with higher penalties for more serious offences.

> **Why This Matters Operationally:** The Aeronautics Act is not abstract legal theory. When a peace officer, immigration officer, or the Minister demands to inspect your aviation documents at a job site, the authority for that demand comes directly from this Act. When a NOTAM suddenly restricts the airspace over your planned survey corridor because of a security event, that restriction carries the full force of federal law.

> **Discussion Prompt #1:** *"Has anyone here ever been asked to produce aviation documents during a field operation? What did that look like? What documents would you need to have immediately available during an L1C BVLOS mission?"*

---

## SECTION 2: The Three Main Aviation Agencies in Canada

Before diving into the regulations themselves, it is essential to understand the three main agencies that govern aviation in Canada:

### 2.1 Transport Canada (TC)

Transport Canada is a **department of the Government of Canada**. TC creates regulations and policies governing aviation, including all RPAS regulations under Part IX of the CARs. Transport Canada:
- Develops and enforces aviation regulations
- Issues pilot certificates and RPAS Operator Certificates
- Administers examinations through the Drone Management Portal
- Conducts compliance inspections

### 2.2 NAV CANADA

NAV CANADA is a **non-profit organization** that owns and operates Canada's air navigation system. NAV CANADA:
- Controls high-level and low-level airspace around airports
- Provides air traffic control services
- Publishes the Canada Flight Supplement (CFS) and NOTAM services
- Operates NAV Drone for RPAS airspace authorization
- Evolved out of Transport Canada in 1996 when ATC services were privatized

### 2.3 Transportation Safety Board of Canada (TSB)

The TSB is an **independent agency** that advances transportation safety by investigating transportation occurrences. The TSB:
- Investigates aviation accidents and incidents (including RPAS)
- Issues safety recommendations
- Publishes investigation reports
- Does NOT assign fault or determine liability — its mandate is safety improvement

> **Key Concept:** These three agencies have distinct roles. Transport Canada makes the rules. NAV CANADA manages the airspace. The TSB investigates when things go wrong. L1C pilots interact with all three.

---

## SECTION 3: Canadian Aviation Regulations (CARs) — Overview

### 3.1 The Ten Parts of the CARs

The Canadian Aviation Regulations (SOR/96-433) are organized into ten parts. As an RPAS pilot, three parts are directly relevant to your operations, while the others provide important context:

**Part I — General Provisions** ← *Directly relevant*
Contains the master list of definitions (CAR 101.01) used throughout all aviation regulations, plus rules on document inspection and record keeping. Many RPAS-specific terms (RPA, RPAS, BVLOS, etc.) are defined here.

**Part II — Aircraft Registration**
Covers identification and registration of aircraft. RPAS registration is handled under Part IX, but Part II establishes the broader framework.

**Part III — Airports**
Covers aerodromes, airports, and heliports. Relevant because L1C operations must be 5+ NM from aerodromes listed in the CFS or CWAS.

**Part IV — Licensing and Training**
Covers pilot licensing for manned aircraft. RPAS pilot certification is handled under Part IX, but Part IV establishes principles that Part IX builds upon.

**Part V — Airworthiness**
Covers aircraft airworthiness for manned aircraft. RPAS safety assurance is handled through the declaration system under Part IX (Standard 922), which is deliberately different from traditional airworthiness certification.

**Part VI — General Operating and Flight Rules** ← *Directly relevant*
Contains airspace structure and classification (601), operating restrictions including forest fire rules (601.15–601.17), and flight rules that apply to all aircraft including RPA.

**Part VII — Commercial Air Services**
Covers air operators. RPAS commercial operations do NOT require an Air Operator Certificate — they operate under Part IX. However, CARs prohibit using RPAS for commercial air service (carrying passengers or cargo for hire) without appropriate authorization.

**Part VIII — Air Navigation Services**
Covers NAV CANADA's responsibilities. Relevant because NAV CANADA provides RPAS airspace authorization through NAV Drone.

**Part IX — Remotely Piloted Aircraft Systems** ← *Core focus of this module*
The dedicated RPAS regulatory framework. Contains everything from registration through pilot certification, operational categories, declarations, training, and SFOC requirements.

**Part X — Greenhouse Gas Emissions**
Not directly relevant to RPAS operations.

### 2.2 The Difference Between Regulations and Standards

This distinction is important and frequently tested:

**Regulations (CARs)** are law. They are made under the authority of the Aeronautics Act, published in the Canada Gazette, and enforceable with penalties. The CARs tell you WHAT you must do.

**Standards** are referenced by the CARs and have the force of regulation. They provide the technical details of HOW to comply. For RPAS, the key Standards are:
- **Standard 921** — Remotely Piloted Aircraft (pilot certification, training provider requirements, flight reviewer requirements)
- **Standard 922** — RPAS Safety Assurance (the technical requirements for manufacturer declarations)
- **Standard 923** — Vision-Based Detect and Avoid (performance requirements for DAA systems)

**Advisory Circulars (ACs)** describe acceptable means of compliance. They are NOT law, but following them gives you confidence that TC will accept your approach. Key ACs include AC 903-001 (operational risk assessment/SORA), AC 901-002 (RPOC manual development), and AC 922-001 (safety assurance guidance).

> **Key Concept:** If a regulation says "the pilot must establish procedures for loss of C2 link" (CARs 901.23), the Standard might specify what elements those procedures must contain, and the Advisory Circular might provide a template or example of acceptable procedures. The regulation is mandatory; the AC's specific format is one acceptable way to comply.

### 3.3 Understanding CARs Numbering Structure

The CARs numbering system follows a logical structure that helps you navigate regulations quickly:

**Example: CARs 901.56**
- **First digit (9)** = Identifies the Part (Part IX — RPAS)
- **Second digit (0)** = Indicates regulation vs. standard (0 = regulation, 2 = standard)
- **Third digit (1)** = Identifies the Subpart (Subpart 1 — Small and Medium RPAS)
- **After the decimal (.56)** = The specific section within that Subpart

**Examples of this structure:**
- **901.xx** = Part IX, Subpart 1, Regulations
- **921.xx** = Part IX, Subpart 1, Standards (Standard 921)
- **922.xx** = Part IX, Subpart 1, Standards (Standard 922)
- **903.xx** = Part IX, Subpart 3 (SFOC)

This numbering system allows you to quickly identify which part of the CARs applies to any given regulation.

---

## SECTION 3: CARs Part I — General Provisions

### 3.1 Key Definitions (CAR 101.01)

Part I provides the master definitions used across all CARs. Several definitions are critical for L1C operations. Note that some definitions that were previously in Part IX have been moved to Part I under SOR/2025-70 to standardize terminology across the CARs.

**Remotely Piloted Aircraft (RPA):** A navigable aircraft, other than a balloon, rocket, or kite, that is operated by a pilot who is not on board.

**Remotely Piloted Aircraft System (RPAS):** A set of configurable elements consisting of an RPA, its control station, the command and control links, and any other system elements required during flight operation.

**Command and Control Link (C2 Link):** The data link between an RPA and a control station that is used in the management of a flight.

**Control Station:** The collection of facilities and equipment from which an RPA is controlled and monitored.

**Medium Remotely Piloted Aircraft:** An RPA that has an operating weight of more than 25 kg but not more than 150 kg.

> **Why The Distinction Between RPA and RPAS Matters:** The *aircraft* is the RPA. The *system* is the RPAS — which includes the aircraft, the control station, the C2 links, and everything else needed for flight. When regulations refer to the "RPAS" they mean the entire system. When they refer to the "RPA" they mean just the aircraft. Registration applies to the RPA. Declarations apply to the RPAS. This distinction matters for compliance.

### 3.2 Document Inspection (CAR 103.01)

Any person operating an RPAS shall produce Canadian aviation documents, technical records, or other documents for inspection when demanded by:
- A **peace officer** (RCMP, municipal police, etc.)
- An **immigration officer**
- **The Minister** (or Transport Canada inspectors acting on behalf of the Minister)

This means you must have your pilot certificate, certificate of registration, RPOC (or evidence of operating under one), and any other required documents readily accessible during operations. "Readily accessible" does not necessarily mean printed on paper — digital access through the Drone Management Portal is acceptable.

### 3.3 Record Keeping (CAR 103.04)

Records may be stored digitally provided they are:
- **Protected** against loss, destruction, and tampering
- Able to be **printed on paper and provided to the Minister** with reasonable notice

This applies to flight logs, maintenance records, training records, and all other documentation required by the CARs.

> **Scenario:** *You are conducting a pipeline survey BVLOS when an RCMP officer arrives at your launch site and asks to see your documentation. What documents must you be able to produce? What if your pilot certificate is only accessible through the Drone Management Portal on your phone, and you have no cell service?*

---

## SECTION 4: CARs Part VI — Airspace Structure, Classification, and Use

### 4.1 Why L1C Pilots Must Understand ALL Airspace Classes

Level 1 Complex operations are restricted to Class G (uncontrolled) airspace. So why do you need to learn about Classes A through F? Three reasons:

First, **knowing what to avoid is as important as knowing where to fly.** If you cannot identify controlled airspace on a chart, you cannot confirm that your operating area is actually Class G.

Second, **airspace changes.** Class C and D airspace reverts to Class E when the associated ATC tower closes for the night (CARs 601.08(3) and 601.09(3)). Class E is still controlled airspace — it does NOT become Class G. Understanding these transitions prevents you from accidentally operating in controlled airspace.

Third, **contingency planning.** If your RPA experiences a fly-away during a BVLOS mission, it could enter controlled airspace. You must be able to identify what airspace is nearby so you can notify ATC if a fly-away is likely to enter their airspace (per CARs 901.47).

### 4.2 Canadian Domestic Airspace (CDA)

Canadian Domestic Airspace (CDA) includes all airspace over the Canadian land mass, the Canadian Arctic, and the Canadian Arctic Archipelago, plus areas of the high seas within Canada's airspace boundaries. CDA is divided into two major regions:

**Southern Domestic Airspace (SDA):**
- The standard operating environment for most L1C operations
- Standard rules apply as covered throughout this course
- Class A airspace begins at FL 180

**Northern Domestic Airspace (NDA):**
- Different rules apply in certain respects
- Contains **ARC-A (atypical) airspace** for RPAS operators — areas with very low air traffic where air risk is minimal
- Class A airspace begins at FL 230 or FL 270 depending on location

> **Note for Northern Operations:** If conducting L1C operations in Northern Domestic Airspace, be aware that the ARC (Air Risk Class) determination may differ from southern operations. The DSST-2 tool and AC 903-001 Annex C address these differences.

### 4.3 Canadian Airspace Classification

CDA is divided into seven classes:

**Class A — High-Level Controlled Airspace**
Starts at FL 180 (approximately 18,000 ft) in Southern Domestic Airspace, FL 230 in Northern Domestic Airspace, and FL 270 in Arctic Domestic Airspace. IFR only. Not depicted on VFR charts. Requires SFOC and NAV CANADA authorization for RPA operations. Practically irrelevant for L1C operations, but important for regulatory literacy.

**Class B — Low-Level Controlled Airspace**
Generally exists between 12,500 ft ASL and the floor of Class A airspace. Can also include some terminal control areas and control areas at lower altitudes. Requires SFOC and NAV CANADA authorization for RPA operations. Can include airways at 12,500 ft ASL.

**Class C — Controlled Airspace Around Large Airports**
Generally extends from the surface to 3,000 ft AGL around large airports. The exact dimensions depend on local airspace management needs. Requires Advanced certificate + declaration + NAV CANADA authorization for Advanced RPA operations. **Critical detail:** When the associated ATC unit is not in operation, Class C airspace becomes Class E controlled airspace (CARs 601.08(3)). Depicted on VNC and VTA charts and in the Designated Airspace Handbook.

**Class D — Controlled Airspace Around Medium Airports**
Similar to Class C but around medium-sized airports. Generally extends from the surface to 3,000 ft AGL. Same requirements as Class C for RPA operations. **Also reverts to Class E when ATC is closed** (CARs 601.09(3)). Depicted on VNC and VTA charts and in the DAH.

**Class E — Controlled Airspace for IFR Aircraft**
Can exist as control zones around airports, transition areas (often starting at 700 ft AGL), or control area extensions (often starting at 2,200 ft AGL). Also extends as low-level airways from 12,500 ft ASL down. Class E is controlled airspace — RPA operations require Advanced certificate + declaration + NAV CANADA authorization. When a Class C or D control zone's ATC closes, the airspace becomes Class E (still controlled, still requires authorization).

**Class F — Special Use Airspace**
Can be either restricted or advisory. Class F can be controlled airspace, uncontrolled airspace, or a combination of both depending on the airspace surrounding it. Updated every 56 days in the Designated Airspace Handbook.

**Class F Restricted (CYR):** Denoted as CYR followed by three numbers (e.g., CYR123). Should be avoided by ALL aircraft, including all RPAs, except by those approved by the user agency identified in the DAH. Found over prisons, military training areas, etc. The letter D (for danger area) is used if the restricted area is established over international waters. To gain access, contact the user agency listed in the DAH for the specific block of airspace.

**Class F Advisory (CYA):** Denoted as CYA followed by three numbers (e.g., CYA123). Reserved for specific activities: A = Acrobatic, F = Aircraft Test Area, H = Hang Gliding, M = Military, P = Parachuting, S = Soaring, T = Training. RPA pilots are NOT restricted from operating in advisory airspace and no special permission is required, but you should be aware of the activity and mitigate additional risks. Many CYA activities bring traditional aircraft below 400 ft AGL, creating elevated risk for RPA operations.

**Designation Format Example — CYA113(A):**
- CY = Canada
- A = Advisory (or R = Restricted, D = Danger)
- 113 = Area identification number
- (A) = Activity type suffix (A = Acrobatic)

**Class G — Uncontrolled Airspace**
Exists in any space that is not Class A, B, C, D, E, or F. Class G is uncontrolled and is the operating environment for L1C operations, provided all other conditions (altitude, aerodrome distance, population density) are also met.

### 4.3 Airspace Vertical Profile

Understanding the vertical structure of Canadian airspace is critical for identifying where Class G exists:

At a typical large airport: The control zone (Class B, C, or D) extends from the surface to 3,000 ft AAE (Above Aerodrome Elevation). A transition area (Class E) may begin at 700 ft AGL beyond the control zone. A control area extension (Class E) typically starts at 2,200 ft AGL further out. Above that, Class B airspace begins, with Class A starting at FL 180.

Between airports: Class G extends from the surface up to where Class E begins (typically 700 ft AGL near transition areas, or higher in remote areas). In truly remote areas, Class G can extend from the surface to 12,500 ft ASL where the low-level airway system (Class B) begins.

**For L1C operations at or below 400 ft AGL, 5+ NM from aerodromes:** You will almost always be in Class G. However, you MUST verify this using VNC/VTA charts, the Designated Airspace Handbook, and NAV Drone, because transition areas, control area extensions, and Class F airspace can exist in unexpected locations.

### 4.4 Where to Find Airspace Dimensions

**Designated Airspace Handbook (DAH):** The ultimate authority for airspace dimensions. Includes user/controlling agency for Class F airspace (CYA, CYR), effective dates, and precise boundary definitions. Updated every 56 days. Available on the NAV CANADA website.

**VNC / VTA Charts:** Visual Navigation Charts and Visual Terminal Area Charts depict airspace boundaries graphically. Essential for visual identification of controlled airspace boundaries.

**NAV Drone:** NAV CANADA's digital platform shows airspace boundaries overlaid on a map, with real-time NOTAM integration.

**NRCAN Drone Site Selection Tool (DSST-2):** Provides airspace and aerodrome proximity analysis for specific locations.

### 4.5 Forest Fire Operating Restrictions (CARs 601.15–601.17)

This is a hard rule with no L1C exception:

**No person shall operate an aircraft:**
- **(a)** over a forest fire area, or over any area that is located within 5 nautical miles of a forest fire area, at an altitude of less than 3,000 ft AGL; or
- **(b)** in any airspace that is described in a NOTAM issued pursuant to section 601.16.

The only exception is aircraft operating under the direction of the fire suppression authority. This means that if a forest fire develops within 5 NM of your BVLOS operating area during your mission, you must immediately cease operations — even if you were there first. Forest fire NOTAMs can be issued with very little advance notice.

> **Key Concept — Forest Fires and BVLOS:** This restriction is especially critical for L1C operations because many BVLOS missions (pipeline surveys, agricultural monitoring, forestry) operate in exactly the types of terrain where forest fires occur. Always check for forest fire NOTAMs before flight AND have a procedure for checking during long BVLOS missions. Air tankers and helicopters operating on forest fires may descend rapidly into the low-level airspace where your RPA is operating.

### 4.6 Other Part VI Rules Relevant to RPAS

**LIDAR Operations:** Operating a LIDAR (Light Detection and Ranging) system on an RPA requires compliance with specific laser safety regulations. The use of LIDAR on an RPA requires approval from Transport Canada's Aeronautical Product Safety Branch.

**Minimum VFR Weather:** For VFR flight in uncontrolled airspace (relevant because L1C operates in Class G), the minimum visibility for manned aircraft is 1 SM below 1,000 ft AGL in the daytime. RPAS-specific weather minimums are set under Part IX.

**Aerodromes and Traffic Patterns:** L1C pilots must understand traffic patterns around both controlled and uncontrolled aerodromes — not because you will be operating at them (you must be 5+ NM away), but because understanding where manned traffic operates helps you assess air risk in your operating area. Aircraft on extended approaches or departures may pass through your operating volume even at 5+ NM.

> **Discussion Prompt #2:** *"You are planning a BVLOS survey 6 NM from a small unregistered aerodrome that is NOT listed in the CFS or CWAS. Do you need to worry about air traffic from this aerodrome? Does the 5 NM rule under 901.47 apply?"*
>
> **Instructor Note:** The 5 NM rule under 901.47 applies to aerodromes listed in the CFS or CWAS. Unregistered aerodromes are not covered by this specific rule, but the pilot still has obligations under 901.24 (pre-flight information), 901.27 (site survey — proximity of other aircraft operations), and general safety obligations. This is a great scenario for teaching beyond minimum compliance.

### 4.7 L1C Airspace Decision Checklist

Before EVERY BVLOS mission, systematically confirm ALL of the following. A single "No" makes the location ineligible for L1C operations:

| Check | Source | If Failed |
|-------|--------|-----------|
| Class G airspace confirmed? | VNC chart + NAV Drone + DAH | STOP — L1C not permitted in controlled airspace |
| Transition area floor >400 ft AGL? | DAH (check control area extensions) | STOP — Would be operating in Class E |
| No CYR (restricted) areas? | DAH (updated every 56 days) | STOP — Contact user agency or select different location |
| No Section 5.1 restrictions (TFRs)? | Current NOTAMs (within 2 hours) | STOP — Comply with restriction |
| No forest fire within 5 NM? | NOTAMs + provincial fire website | STOP — CARs 601.15 prohibition applies |
| Distance to CFS/CWAS aerodrome >5 NM? | DSST-2 + CFS | STOP — L1C not permitted (would need SFOC) |

**All checks passed?** Proceed to population density assessment (Section 10).

> **SORA Context:** This checklist verifies that air risk is within L1C-acceptable levels. Each item addresses a specific air risk factor: airspace class (traffic density), aerodrome proximity (encounter probability), and temporary restrictions (dynamic hazards).

---

## SECTION 5: CARs Part IX — Structure and Overview

### 5.1 How Part IX is Organized

Part IX is the dedicated RPAS regulatory framework. Understanding its structure helps you quickly locate the regulations that apply to any given situation:

**Subpart 0 — All RPAS (900.xxx)**
- Division I — General Provisions (definitions specific to Part IX)
- Division II — General Operating and Flight Rules (rules for ALL RPAS regardless of size)
- Division III — Registration of RPAS

**Subpart 1 — Small and Medium RPAS (901.xxx)**
- Division I — General Provisions
- Division III — General Operating and Flight Rules for all small/medium RPAS
- Division IV — Basic Operations (VLOS)
- Division V — Advanced Operations (VLOS + EVLOS + Sheltered)
- Division VI — Level 1 Complex Operations (BVLOS)
- Division X — Training and Flight Review
- Division XI — RPAS Safety Assurance Declarations
- Division XII — RPAS Operator Certificate

**Subpart 3 — Special Flight Operations (903.xxx)**
- Special Flight Operations Certificate — RPAS (SFOC)

> **Key Concept — Layered Application:** Division III rules (901.23–901.27) apply to ALL small and medium RPA operations — Basic, Advanced, AND Level 1 Complex. Division VI rules LAYER ON TOP of Division III, they do not replace them. An L1C pilot must comply with Division III AND Division VI simultaneously.

---

## SECTION 5.5: SORA Framework — Understanding WHY Regulations Exist

### 5.5.1 What is SORA?

The **Specific Operations Risk Assessment (SORA)** is an internationally recognized methodology developed by JARUS (Joint Authorities for Rulemaking on Unmanned Systems) that provides a structured approach to assessing the risk of drone operations. Rather than creating arbitrary rules, SORA uses data-driven analysis to determine what safety measures are needed for different types of operations.

**Canada adopted SORA principles** into its regulatory framework through:
- **CARs Part IX** — The operational categories (Basic, Advanced, L1C) are pre-validated SORA risk levels
- **AC 903-001** — The SFOC risk assessment process directly implements SORA methodology
- **Standard 922** — The technical requirements map to SORA Operational Safety Objectives (OSOs)

Understanding SORA transforms your perspective from "what rules must I follow?" to "what risks am I managing?" — which makes you a safer, more adaptable pilot.

### 5.5.2 Ground Risk vs Air Risk

SORA separates risk into two categories that require different mitigations:

**Ground Risk** — The risk to people and property ON THE GROUND if the RPA crashes
- Determined by: Population density, RPA size/weight, operating altitude, containment measures
- Measured as: Ground Risk Class (GRC) from 1 (lowest) to 10 (highest)
- Mitigated by: Operating over unpopulated areas, containment systems (geofencing), parachutes, flight termination systems

**Air Risk** — The risk of mid-air collision with OTHER AIRCRAFT
- Determined by: Airspace class, traffic density, operating altitude, visibility conditions
- Measured as: Air Risk Class (ARC) from ARC-a (atypical/lowest) to ARC-d (highest)
- Mitigated by: Operating in uncontrolled airspace, DAA systems, altitude restrictions, strategic deconfliction

> **Key Concept:** L1C operations minimize both risks by design — operating in Class G (low air traffic), below 400 ft AGL (below most manned traffic), away from aerodromes (further reduces encounters), and over unpopulated/sparsely populated areas (low ground risk).

### 5.5.3 Why 400 ft AGL? — SORA Air Risk Analysis

The 400 ft AGL altitude limit is not arbitrary. SORA air risk analysis shows that:

- **General aviation traffic** typically operates above 500 ft AGL except during takeoff/landing phases
- **Helicopter traffic** is most common between 500–1500 ft AGL in transit
- **Agricultural aviation** may descend below 500 ft AGL during operations (hence additional restrictions near agricultural operations)
- **Encounter probability** drops significantly below 400 ft AGL for routine operations away from aerodromes

At 400 ft AGL, the statistical probability of encountering manned aircraft is low enough that routine L1C operations can proceed with standard mitigations (DAA, anti-collision lighting) rather than requiring active ATC coordination.

**When is 400 ft NOT safe?** Near aerodromes (approach/departure paths), in mountainous terrain with helicopter operations, near hospital heliports, and during aerial firefighting operations — hence the specific restrictions for these scenarios.

### 5.5.4 Why 5 NM from Aerodromes? — Encounter Probability

The 5 NM aerodrome buffer comes from analysis of:

- **Traffic pattern dimensions:** Standard traffic patterns extend approximately 1–2 NM from runways
- **Approach/departure paths:** IFR and VFR traffic may be below 400 ft AGL within 5 NM on approach or departure
- **Missed approach procedures:** Aircraft executing missed approaches may descend to low altitudes before climbing
- **Helicopter operations:** Helicopters may transit at low altitude near heliports

At 5 NM horizontal distance, even an aircraft on a 3° glideslope would be approximately 1,580 ft AGL — well above your 400 ft operating ceiling. This provides adequate vertical separation without requiring real-time ATC coordination.

### 5.5.5 Why Population Density Thresholds? — Ground Risk Classification

The population density thresholds (5, 25 pp/km²) map directly to SORA Ground Risk Classes:

| Population Density | SORA Ground Risk | L1C Pathway | Rationale |
|-------------------|------------------|-------------|-----------|
| **≤5 pp/km²** (Unpopulated) | GRC 2-3 | 901.87(a) — SAD | Very low probability of striking a person; standard containment sufficient |
| **>5 to ≤25 pp/km²** (Sparsely Populated) | GRC 4 | 901.87(b) — PVD (small RPA only) | Moderate probability; requires enhanced reliability (922.07) |
| **>25 pp/km²** (Populated) | GRC 5+ | SFOC required | Higher probability; requires mitigations beyond L1C scope |

The thresholds represent points where additional mitigations become necessary to maintain acceptable risk levels. At >25 pp/km², the combination of population exposure and potential RPA failure rates exceeds what can be managed through standard L1C measures.

### 5.5.6 Why Class G Only? — ATC Coordination Complexity

L1C operations are restricted to Class G (uncontrolled) airspace because:

- **No ATC coordination required:** In controlled airspace, each RPA operation would require real-time ATC integration, creating workload that doesn't scale
- **See-and-avoid principle:** In Class G, all aircraft are responsible for their own separation; RPA DAA systems can fulfill this role
- **Regulatory simplicity:** Class G operations can proceed with declarations; controlled airspace requires case-by-case authorization

SFOC operations in controlled airspace require detailed airspace coordination, specific ATC procedures, and often dedicated frequencies — mitigations that are beyond the scope of routine L1C operations.

### 5.5.7 SORA Annexes Overview

SORA consists of a main body and five annexes, each addressing specific aspects of the risk assessment:

| Annex | Title | Purpose | L1C Relevance |
|-------|-------|---------|---------------|
| **Annex A** | Ground Risk | Methodology for determining ground risk class | Population density requirements come from this |
| **Annex B** | Air Risk | Methodology for determining air risk class | Airspace restrictions come from this |
| **Annex C** | Operational Safety Objectives (OSOs) | Safety objectives that must be met based on risk | Standard 922 sections implement these |
| **Annex D** | TMPR (Tactical Mitigation Performance Requirements) | Requirements for DAA and other tactical systems | Standard 922.10 and 923 implement these |
| **Annex E** | Integrity and Assurance Levels | How to demonstrate compliance at different assurance levels | PVD vs SAD distinction comes from this |

### 5.5.8 How Standard 922 Maps to SORA OSOs

Each Standard 922 section addresses specific SORA Operational Safety Objectives:

| Standard 922 Section | SORA OSO Reference | What It Ensures |
|---------------------|-------------------|-----------------|
| **922.04** (Controlled airspace) | OSO#19, #22 | RPA won't interfere with ATC or other traffic in controlled airspace |
| **922.05** (Near people) | OSO#24, #10 | Acceptable risk to bystanders when operating near (but not over) people |
| **922.06** (Over people) | OSO#24, #10 | Acceptable risk to people directly below the flight path |
| **922.07** (Safety & reliability - PVD) | OSO#01-#05 | Enhanced design/manufacturing assurance for higher-risk operations |
| **922.08** (Containment) | OSO#17, #12 | RPA stays within defined operational volume |
| **922.09** (C2 link and lost-link) | OSO#13, #05 | Predictable behavior when control link is interrupted |
| **922.10** (Detect and Avoid) | OSO#12, #21 | Collision avoidance with other aircraft |
| **922.11** (Remote pilot station) | OSO#22 | Pilot has information needed to operate safely |
| **922.12** (Environmental envelope) | OSO#14 | RPA operates within tested conditions |

> **Why This Matters:** When you understand that each 922 requirement addresses a specific safety objective, you can make better operational decisions. If conditions change (weather, unexpected traffic, equipment issues), you can assess which safety objectives are affected and respond appropriately.

### 5.5.9 SORA Context for L1C Boundaries

The L1C operational boundaries aren't arbitrary restrictions — they're the result of SORA analysis showing where risk can be adequately managed without case-by-case review:

| L1C Requirement | SORA Justification |
|-----------------|-------------------|
| Class G airspace | Air risk acceptable without ATC coordination (ARC-b or lower) |
| ≤400 ft AGL | Below most manned traffic; acceptable encounter probability |
| >5 NM from aerodromes | Outside traffic pattern/approach areas; low encounter probability |
| Population density limits | Ground risk manageable with standard containment (GRC ≤4) |
| DAA requirement | Residual air risk managed through detection capability |
| Anti-collision lighting | Visual conspicuity reduces collision risk |

> **Discussion Prompt:** *"You're explaining to a skeptical client why their 'simple' BVLOS survey requires so much documentation. Using SORA concepts, explain what risk each requirement addresses. How would you frame these requirements as protections rather than bureaucratic obstacles?"*

---

## SECTION 6: Part IX Division I — General Provisions (Definitions)

### 6.1 Part IX-Specific Definitions

These definitions have specific legal meaning within Part IX. Some were previously in Part I but have been moved or duplicated in Part IX:

**Advertised Event:** An outdoor event that is advertised to the general public, including a concert, festival, market, or sporting event. RPA operations at advertised events require an SFOC.

**BVLOS Operation:** An operation of an RPA that is not in VLOS, but does not include an extended VLOS (EVLOS) operation or a sheltered operation. This is important — EVLOS and sheltered operations are Advanced operations, NOT L1C operations, even though the aircraft goes beyond the pilot's direct visual contact.

**Contingency Procedures:** The procedures to be followed to address conditions that could lead to an unsafe situation.

**Contingency Volume:** The area immediately surrounding the flight geography within which contingency procedures are intended to be used to return an RPA to the flight geography or safely terminate the flight.

**Extended VLOS (EVLOS) Operation:** An operation of an RPA that is not in VLOS but during which unaided visual contact is maintained with the airspace in which the aircraft is operating in a manner sufficient to detect conflicting air traffic and other hazards and take action to avoid them. This is an Advanced operation under Division V.

**Flight Geography:** The area within which an RPA is intended to fly for a specific operation.

**Fly-away:** In respect of an RPA, an interruption or loss of the command and control link, such that the pilot is no longer able to control the aircraft and the aircraft is no longer following its preprogrammed procedures or operating in a predictable or planned manner.

**Operational Volume:** The area that is composed of the flight geography, contingency volume, and ground risk buffer. This is the total three-dimensional space that must be assessed for risk.

**Payload:** A system, object, or collection of objects, including a slung load, that is on board or is otherwise connected to an RPA but that is not required for flight.

**Populated Area:** An area with more than 5 people per square kilometre. Note: areas with more than 25 pp/km² are the threshold for "populated" versus "sparsely populated" for L1C purposes, but the Part IX Division I definition of "populated area" uses the >5 pp/km² threshold.

> **IMPORTANT CLARIFICATION on Population Density Definitions:** The definitions can be confusing because they overlap. For L1C operations under 901.87, the operational distinctions are: **Unpopulated** = 5 or fewer pp/km² (both SAD and PVD operations permitted); **Sparsely Populated** = more than 5 but not more than 25 pp/km² (small RPA with PVD only); **Populated** = more than 25 pp/km² (L1C operations must be at least 1 km away, or not permitted depending on declaration type). Always use the NRCAN DSST-2 tool or Statistics Canada population density data by Dissemination Area to determine population density for your operating area.

**RPAS Ground School Instruction:** Instructor-led training given to one or more persons, delivered in-person or virtually, and provided through an organized program of lectures, homework, or self-paced study. This is the type of training you are receiving now.

**RPAS Operations Manual:** The manual established by an RPAS operator under section 901.217. Required for all L1C operations under the RPOC.

**Sparsely Populated Area:** An area with more than 5 but not more than 25 people per square kilometre.

**Visual Line-of-Sight (VLOS):** Unaided visual contact maintained with an RPA in a manner sufficient to maintain control of the aircraft, know its location, and scan the airspace in which it is operating to detect conflicting air traffic and other hazards and take action to avoid them.

**Visual Observer (VO):** A crew member who is trained to assist the pilot in ensuring the safe conduct of a flight. VOs are used in EVLOS operations (Advanced) and may also be used in L1C BVLOS operations as part of the DAA strategy.

---

## SECTION 7: Part IX Division III — General Operating and Flight Rules (901.23–901.27)

These rules apply to ALL small and medium RPA operations — Basic, Advanced, AND Level 1 Complex. They are the foundational operating rules that every RPAS pilot must follow.

### 7.1 Normal and Emergency Procedures (CARs 901.23)

Before any flight, the pilot must establish procedures for both normal operations and the following emergency situations:

**Normal Procedures:**
- Pre-flight checks
- Take-off / launch procedures
- Normal flight operations
- Landing / recovery procedures

**Emergency Procedures (901.23(1)(b)):**
- **(i)** Control station failure
- **(ii)** Equipment failure
- **(iii)** Failure of the RPA
- **(iv)** Loss of command and control link (C2)
- **(v)** Fly-away
- **(vi)** Flight termination
- **(vii)** Detection and avoidance of conflicting air traffic and other hazards

If the RPAS manufacturer or the person who made the safety assurance declaration provides instructions on these topics, the pilot's procedures MUST reflect those instructions (901.23(2)).

**Critical requirement:** These procedures must be **reviewed before the flight** by each crew member and must be **immediately available** to each crew member during the operation (901.23(3)). You cannot operate if your crew hasn't reviewed the procedures, even if they've done the same operation a hundred times before.

> **Scenario:** *Your RPAS manufacturer's operating manual specifies that upon loss of C2 link, the aircraft will hover for 30 seconds, then return to home at 50 m altitude. You want to use a different lost-link procedure that has the aircraft immediately descend vertically. Can you do this?*
>
<details>
<summary>Click to reveal answer</summary>

**Answer:** No. CARs 901.23(2) requires that your procedures reflect the manufacturer's instructions. You can add supplementary procedures, but you cannot contradict the manufacturer's specified lost-link behaviour unless you modify the system and make your own declaration.

</details>

### 7.2 Pre-Flight Information (CARs 901.24)

Before commencing any flight, the pilot must be familiar with information relevant to the intended flight, including:

**(a)** The results of the **site survey** conducted under section 901.27
**(b)** Any **declaration** referred to in section 901.194 made in respect of the model of RPAS to be used
**(c)** The **qualifications of all crew members**

This is not a suggestion — it is a regulatory requirement. "Be familiar with" means you must have actually reviewed this information, not just have it available somewhere.

### 7.3 Maximum Altitude (CARs 901.25)

No pilot shall operate an RPA at an altitude greater than:

**(a)** 400 feet (122 m) AGL; or
**(b)** 100 feet (30 m) above any building or structure, if the aircraft is being operated at a distance of less than 200 feet (61 m), measured horizontally, from the building or structure.

The 100 ft / 200 ft rule creates a "sheltered" zone near tall structures where you can exceed 400 ft AGL — this is also the basis for the "sheltered operations" category under Advanced operations (Division V). Operations above 400 ft AGL outside this sheltered zone require an SFOC (901.25(2)).

### 7.4 Horizontal Distance from Persons (CARs 901.26)

Unless operating under Division V (Advanced with appropriate declarations):

**(a)** Small RPA in VLOS: minimum **100 feet (30 m)** horizontally from any person not involved in the operation
**(b)** Medium RPA in VLOS: minimum **500 feet (152.4 m)** horizontally from any person not involved in the operation

Note: These distances apply to VLOS operations under Division III. L1C BVLOS operations have different distance requirements based on population density rather than individual person distance.

### 7.5 Site Survey Requirements (CARs 901.27)

The site survey is one of the most important pre-flight activities. For L1C BVLOS operations, the site survey cannot be done casually — it requires systematic assessment of multiple factors. The following table mirrors the original course materials and identifies both the required assessment factors AND where to find the information:

| Site Survey Factor | Information Source |
|---|---|
| Airspace and requirements | Designated Airspace Handbook (DAH), NOTAMs |
| Altitudes and routes to be used | Determined by the mission |
| Proximity of other aircraft operations | Aeronautical charts (VNC), CFS, NOTAMs |
| Proximity of airports, heliports, and other aerodromes | Canada Flight Supplement (CFS), DSST-2, NAV Drone |
| Location and height of obstacles (wires, masts, buildings, cell phone towers, wind turbines) | Aeronautical charts (VNC), NOTAMs, digital terrain/surface models |
| Weather conditions and forecast | NAV CANADA AWWS (Aviation Weather Web Site) |
| VLOS: EVLOS or sheltered operation — horizontal distance from any person not involved | In-person site survey |
| BVLOS: Distance from populated or sparsely populated areas | DSST-2, Statistics Canada population density by Dissemination Area |

> **Key Concept — BVLOS Site Surveys Are Different:** In VLOS, you can physically visit your launch site and visually assess obstacles, people, and airspace. In BVLOS, your aircraft will fly kilometres away from your position — you MUST use charts, digital tools, and remote sensing data to assess conditions along the entire flight path, not just at the launch site. A thorough BVLOS site survey may take more time than the actual flight.

> **Discussion Prompt #3:** *"Your client wants you to fly a BVLOS pipeline survey next week. The route is 15 km long through mixed terrain. How would you conduct the site survey? What tools would you use? What would cause you to reject the mission or modify the route?"*

### 7.6 Division III Pre-Flight Compliance Checklist

Use this checklist to verify compliance with Division III requirements (901.23–901.27) before EVERY flight. These requirements apply to Basic, Advanced, AND L1C operations.

**CARs 901.23 — Procedures Established**

| Requirement | Verified |
|-------------|----------|
| Normal procedures documented and available | |
| Emergency procedures for ALL 7 categories documented | |
| — (i) Control station failure | |
| — (ii) Equipment failure | |
| — (iii) Failure of the RPA | |
| — (iv) Loss of C2 link | |
| — (v) Fly-away | |
| — (vi) Flight termination | |
| — (vii) DAA / traffic avoidance | |
| Procedures reflect manufacturer instructions | |
| ALL crew members reviewed procedures | |
| Procedures immediately available to crew | |

**CARs 901.24 — Pre-Flight Information**

| Requirement | Verified |
|-------------|----------|
| Site survey results reviewed (per 901.27) | |
| Declaration type confirmed (SAD/PVD) | |
| Declaration conditions understood | |
| Declaration current (not withdrawn) | |
| PIC: Valid L1C certificate, recency current | |
| VOs: Minimum Basic certificate, VO training complete | |
| Other crew: Qualifications per ROM | |

**CARs 901.25 — Altitude Confirmation**

| Requirement | Verified |
|-------------|----------|
| Maximum operating altitude set at ≤400 ft AGL | |
| GCS altitude settings verified | |
| Geofence altitude limits configured | |

**CARs 901.27 — Site Survey Complete**

| Requirement | Verified |
|-------------|----------|
| Airspace verified (Class G, no restrictions) | |
| Aerodrome distances confirmed (>5 NM) | |
| Obstacles identified and documented | |
| Weather conditions assessed | |
| Population density determined | |
| Other aircraft operations identified | |

**All items checked?** Proceed to Division VI pathway determination. If NO, address deficiencies before flight.

> **SORA Context:** The 100 ft horizontal distance from persons (CARs 901.26) derives from SORA ground risk modeling — at 100 ft, a person has approximately 3 seconds to react to a falling drone, significantly reducing injury probability compared to closer distances.

---

## SECTION 8: Part IX Division IV — Basic Operations

While L1C pilots will not be conducting Basic operations, understanding Division IV provides context for how the regulatory framework builds progressively:

**Basic Operations requirements:**
- Small RPAS only (250 g – 25 kg)
- VLOS only
- RPAS must be registered
- Uncontrolled airspace (Class G)
- Below 400 ft AGL
- Greater than 3 NM from an airport or 1 NM from a heliport
- Greater than 100 ft (30 m) measured horizontally from any person not involved in the operation
- Pilot certificate — Basic (minimum age 14, online exam at DMP, recency requirements within 24 months)
- No flight review required
- No manufacturer declaration required

---

## SECTION 9: Part IX Division V — Advanced Operations

Advanced operations add significant privileges over Basic, and the 2025 amendments (SOR/2025-70) expanded them considerably:

### 9.1 Core Advanced Privileges

- VLOS operations with small RPA closer to people (with appropriate declarations)
- VLOS operations in controlled airspace (with NAV CANADA authorization + declaration)
- Medium RPA VLOS operations (new under SOR/2025-70)
- Within 3 NM of airports or 1 NM of heliports (with NAV CANADA authorization)

**Requirements:** Advanced exam (TP 15263), flight review, registered RPAS with valid Safety Assurance Declaration, pilot certificate — Advanced (minimum age 16), NRCAN DSST-2 for site selection.

### 9.2 Extended VLOS Operations (CARs 901.74) — New Under SOR/2025-70

EVLOS allows the aircraft to fly beyond the pilot's direct visual contact, but a trained visual observer (VO) maintains unaided visual contact with the airspace:

- Pilot and control station located at the site for take-off and recovery
- RPA within **2 NM** of pilot, VO, and control station
- RPA always greater than 100 ft (30 m) horizontally from any person
- VO maintains unaided visual contact with the airspace (not necessarily the aircraft itself — contact with the airspace to detect traffic and hazards)
- Below 400 ft AGL
- VO must hold at minimum a Basic RPAS pilot certificate

> **Key Distinction:** EVLOS is an Advanced operation, NOT an L1C operation, even though the aircraft is beyond the pilot's direct line of sight. The critical difference is that in EVLOS, a human observer is watching the airspace. In true BVLOS (L1C), there may be no human watching the airspace at all — detect-and-avoid relies on technology or procedural mitigations.

### 9.3 Sheltered Operations (CARs 901.74) — New Under SOR/2025-70

Sheltered operations allow BVLOS within close proximity of structures:

- Pilot and control station located at the site for take-off and landing
- RPA within **2 NM** of pilot and control station
- RPA within **200 ft (61 m) horizontal** and **100 ft (30 m) vertical** of a building or structure
- RPA always greater than 100 ft (30 m) horizontally from any person
- Below 400 ft AGL

This covers operations like bridge inspections, tower inspections, and building facade surveys where the RPA goes behind or around structures and temporarily leaves VLOS.

---

## SECTION 10: Part IX Division VI — Level 1 Complex Operations

### 10.1 Applicability (CARs 901.87)

Division VI defines TWO pathways for L1C operations, distinguished by population density and aircraft size:

**901.87(a) — Standard L1C BVLOS**
The operation of a small RPA or a medium RPA holding a Safety Assurance Declaration (SAD) to conduct a BVLOS operation in:
- Uncontrolled airspace
- At a distance of **not less than 1 km from a populated area** (i.e., over areas with 5 or fewer pp/km²)
- Below 400 ft AGL (per 901.25)
- More than 5 NM from aerodromes listed in the CFS or CWAS (per 901.47)

**901.87(b) — L1C BVLOS with Pre-Validated Declaration**
The operation of a **small RPA only** (not medium) holding a Pre-Validated Declaration (PVD) to conduct a BVLOS operation in:
- Uncontrolled airspace
- Over a **sparsely populated area** (5–25 pp/km²) OR at a distance of **less than 1 km from a populated area**
- Below 400 ft AGL (per 901.25)
- More than 5 NM from aerodromes listed in the CFS or CWAS (per 901.47)

### 10.2 L1C Platform Requirements — Declaration Matrix

The type of Safety Assurance Declaration required depends on the aircraft size and the specific operation:

| Operation | Small RPA (250g–25kg) | Medium RPA (25–150kg) |
|---|---|---|
| 901.87(a): BVLOS, ≥1 km from populated area, over unpopulated | SAD 922.08(1,2) + 922.09 + 922.10 + 922.11 | SAD 922.08(3,4,5,6) + 922.09 + 922.10 + 922.11 |
| 901.87(b): BVLOS, <1 km from populated area OR over sparsely populated | PVD 922.07 + 922.09 + 922.10 + 922.11 + 922.12 | **Not permitted under L1C** (requires SFOC) |

#### L1C Pathway Decision Guide

**Step 1: Verify Airspace Eligibility**
Is airspace Class G, >5 NM from CFS/CWAS aerodromes, with no restrictions?
- **NO** → STOP — L1C not eligible. Check Section 4.7 checklist.
- **YES** → Proceed to Step 2

**Step 2: Determine Population Density**
Use DSST-2 — take the HIGHEST density value within your operational volume.

**Step 3: Match to Pathway Using Table Below**

| Population Density | Distance from Populated | RPA Size | Pathway | Declaration |
|-------------------|------------------------|----------|---------|-------------|
| ≤5 pp/km² | ≥1 km | Small | 901.87(a) | SAD |
| ≤5 pp/km² | ≥1 km | Medium | 901.87(a) | SAD |
| ≤5 pp/km² | <1 km | Small | 901.87(b) | PVD |
| ≤5 pp/km² | <1 km | Medium | **SFOC** | N/A |
| >5 to ≤25 pp/km² | Any | Small | 901.87(b) | PVD |
| >5 to ≤25 pp/km² | Any | Medium | **SFOC** | N/A |
| >25 pp/km² | Any | Any | **SFOC** | N/A |

**Key Decision Points:**
- **901.87(a)** = SAD acceptable, both small AND medium RPA
- **901.87(b)** = PVD required, small RPA ONLY
- **>25 pp/km²** = SFOC required regardless of other factors

> **SORA Context:** These population density thresholds map directly to SORA Ground Risk Classes. Operating over unpopulated areas (≤5 pp/km²) represents GRC 2-3, which can be managed with standard containment. Sparsely populated (>5-25 pp/km²) represents GRC 4, requiring the enhanced reliability assurance of a PVD. Populated areas (>25 pp/km²) exceed GRC 4 and require the case-by-case risk assessment of an SFOC.

**What the Standard 922 references mean:**
- **922.04** — Controlled airspace safety assurance
- **922.05** — Near people safety assurance
- **922.06** — Over people safety assurance
- **922.07** — Safety and reliability (PVD) — the higher bar for closer-to-people operations
- **922.08** — Containment (geofencing, lost-link behaviour)
- **922.09** — Command and control link and lost-link behaviour
- **922.10** — Detect and Avoid (optional — can use vision-based DAA per Standard 923 instead)
- **922.11** — Remote pilot station design
- **922.12** — Environmental envelope (only required for PVD operations)

### 10.3 The 3P Framework for L1C

All three elements must be in place simultaneously:

**PILOT (CARs 901.89–901.91):**
- L1C pilot certificate (18+ years old)
- Recency maintained within 24 months
- Person under 18 may participate under direct supervision of L1C certificate holder

**PROCEDURE (CARs 901.88, Division XII):**
- RPAS Operator Certificate (RPOC)
- Pilot must be the RPAS operator, or an employee/agent/representative of the operator
- Must comply with conditions in the RPOC
- Requires RPAS Operations Manual (901.217)

**PLATFORM (CARs 901.95, Standard 922):**
- Registered and marked small or medium RPA
- Valid Safety Assurance Declaration appropriate for the intended operation
- Listed on the Transport Canada "Choose the right drone" website
- Listed on the Certificate of Registration

### 10.4 Additional L1C Operating Rules

Beyond the Division VI-specific requirements, L1C pilots must also comply with:

- **RPA gives way to crewed aircraft at all times** — no exceptions
- **Minimum visibility** for BVLOS operations as specified in the regulations
- **Notify ATC** if a fly-away is likely to enter controlled airspace (CARs 901.47)
- **Anti-collision lighting** required for all BVLOS operations (CARs 901.38.1): white, visible in NVGs if operating at night, flashing at 40–100 flashes per minute, visible in all directions within ±75° of the horizontal plane with no more than 0.5 steradians obscured, visible at distances up to 1 statute mile
- **Night operations** require position lights sufficient to allow the aircraft to be visible to the pilot and any VO (CARs 901.39(1))
- Operations must remain within **Canadian Domestic Airspace** (CARs 901.13). Failure to remain within CDA can result in penalties of up to $1,000 for individuals and $5,000 for corporations.

### 10.5 Detect and Avoid (DAA) Systems — Critical for BVLOS

Detect and Avoid (DAA) is arguably the most critical safety system for BVLOS operations. In VLOS, the pilot visually scans for traffic and takes evasive action — "see and avoid." In BVLOS, this capability must be replaced by other means.

#### 10.5.1 Why DAA Replaces "See and Avoid"

Under CARs 900.06, the RPA must give way to manned aircraft at ALL times. In VLOS operations, the pilot fulfills this by visually detecting traffic and maneuvering the RPA. In BVLOS, the pilot cannot see the airspace around the RPA — so an alternative method is required.

Standard 922.10 requires that BVLOS operations have a declared DAA capability, unless using vision-based DAA under Standard 923.

#### 10.5.2 DAA Methods Comparison

| Method | Standard Reference | Distance Limit | Best Application | Limitations |
|--------|-------------------|----------------|------------------|-------------|
| **Visual Observer Network** | 922.10(a) | ≤2 NM between observers | Fixed-area operations, linear surveys | Labor-intensive, requires trained personnel |
| **Cooperative Systems** (ADS-B, FLARM, transponder) | 922.10(b) | Varies by system | High-traffic areas, coordinated airspace | Only detects equipped aircraft |
| **Non-Cooperative Systems** (radar, EO/IR cameras) | 922.10(c) | Varies by technology | Remote areas, aircraft without transponders | High cost, weight, complexity |
| **Vision-Based DAA** | Standard 923 | ≤4 NM to GCS | New technology platforms | Specific weather/lighting requirements |

#### 10.5.3 Visual Observer Network Strategy

For many L1C operations, a network of Visual Observers provides the most practical DAA solution:

**Requirements:**
- VOs must maintain unaided visual contact with the **airspace** (not necessarily the RPA itself)
- Each VO must have reliable communication with the pilot
- RPA must remain within **2 NM** of at least one VO at all times (per 922.10(a))
- VOs must be trained in traffic detection, right-of-way rules, and communication protocols

**Network Design:**
- For a 10 km linear survey: VOs positioned every ~3.5 km (ensuring <2 NM overlap)
- For area coverage: Grid positioning with overlapping 4 NM circles
- Communication: VHF radio or reliable cellular with backup

**Advantages:** Low equipment cost, uses existing personnel, works regardless of traffic equipage
**Disadvantages:** Labor-intensive for long missions, requires trained VO team, weather-dependent

#### 10.5.4 Cooperative DAA Systems

Cooperative systems detect aircraft that are transmitting position information:

**ADS-B In:**
- Receives ADS-B Out transmissions from other aircraft
- Displays traffic on ground station or airborne display
- Effective range: typically 20–50 NM depending on equipment
- **Limitation:** Only detects ADS-B Out equipped aircraft (not mandatory for all aircraft in Class G)

**FLARM:**
- Popular in glider and light aircraft communities
- Short-range collision warning system
- Common in mountainous areas with soaring activity
- **Limitation:** Not widely used in commercial aviation

**Transponder Interrogation:**
- Active system that interrogates Mode A/C/S transponders
- Provides range and altitude information
- **Limitation:** Requires airborne interrogator, complex, heavy

#### 10.5.5 Non-Cooperative DAA Systems

Non-cooperative systems detect ALL aircraft, regardless of equipage:

**Primary Radar:**
- Detects aircraft by reflected radio energy
- Range: Several NM to 50+ NM depending on power and antenna
- **Limitation:** Expensive, heavy, power-hungry, requires expertise

**Electro-Optical/Infrared (EO/IR) Cameras:**
- Computer vision algorithms detect aircraft against sky background
- Can be mounted on ground station or aircraft
- Emerging technology with improving performance
- **Limitation:** Weather-dependent, sun angle limitations, processing delays

**Acoustic Detection:**
- Microphone arrays detect aircraft engine/propeller noise
- Useful as backup or cueing system
- **Limitation:** Short range, environment-dependent

#### 10.5.6 Standard 923 — Vision-Based DAA Requirements

Standard 923 establishes specific requirements for vision-based DAA systems:

**Weather Requirements:**
- Ground visibility ≥3 SM
- Ceiling ≥1000 ft AGL
- Operation must be clear of cloud

**Sun Position Restrictions:**
- Sun elevation must be ≥45° above horizon, OR
- RPA must be operating outside the 90° quadrant centered on the sun azimuth

**Visual Observer Requirements (even with vision-based DAA):**
- A visual observer must maintain unaided visual contact with the airspace
- VO provides backup to the technical system
- VO must be able to communicate with pilot immediately

**Distance Limitation:**
- RPA must remain within **4 NM** of the ground control station

> **Key Point:** Vision-based DAA under Standard 923 doesn't eliminate the VO requirement — it reduces the number of VOs needed and extends the operational envelope, but human backup remains part of the safety case.

#### 10.5.7 Choosing Your DAA Strategy

| Mission Profile | Standard 923 Equipped | Recommended DAA Strategy |
|-----------------|----------------------|--------------------------|
| Fixed location (tower, facility) | Either | Single VO at location |
| Linear route <4 NM | Yes | Single VO + vision-based DAA |
| Linear route <4 NM | No | Single VO with clear sightlines |
| Linear route 4–10 NM | Yes | 2-3 VOs with overlapping coverage |
| Linear route 4–10 NM | No | VO network every 3.5 km |
| Linear route >10 NM | Either | VO network OR radar/EO system |
| Area coverage <12 km² | Either | VO network at corners/perimeter |
| Area coverage >12 km² | Either | Technical DAA or extensive VO team |

**Budget-Constrained Options:**
- Cannot afford multiple VOs? → Consider mission segmentation
- Cannot afford technical DAA? → Limit range to VO network capabilities

#### 10.5.8 When DAA Fails — Contingency Requirements

Your emergency procedures (CARs 901.23) must include procedures for when DAA capability is lost:

**If VO loses visual contact with airspace:**
- Immediately notify pilot
- Pilot initiates contingency procedures (hover, reduced altitude, RTH)
- Consider terminating flight if contact cannot be reestablished

**If technical DAA system fails:**
- Revert to VO-only operations if coverage exists
- If no VO coverage, initiate lost-DAA contingency (typically immediate RTH or land)
- Log the failure for post-flight analysis

**If traffic is detected and cannot be avoided:**
- Immediately descend or climb to create vertical separation
- If evasion not possible, initiate flight termination
- Priority is ALWAYS to protect manned aircraft

> **Discussion Prompt:** *"Your client wants a 15 km linear pipeline survey. Design a DAA strategy that doesn't require purchasing expensive radar equipment. What's your minimum VO requirement? Where would you position them? What weather limitations would you impose?"*

### 10.6 Fly-Away Management and ATC Notification

A fly-away is one of the most dangerous situations in BVLOS operations. Unlike lost C2 link (where the aircraft follows pre-programmed procedures), a fly-away means the aircraft is no longer behaving predictably. Understanding the distinction and knowing exactly what to do is critical.

#### 10.6.1 Lost Link vs Fly-Away — Critical Distinction

| Scenario | Definition | Aircraft Behavior | Pilot Action |
|----------|------------|-------------------|--------------|
| **Lost C2 Link** | Link interrupted but aircraft responds to pre-programmed commands | Follows RTH, hover, or land procedure per 922.09 | Monitor, attempt link recovery, prepare for recovery |
| **Fly-Away** | Link lost AND aircraft not following pre-programmed response | Unpredictable — may continue last command, drift, or behave erratically | Emergency — notify ATC if applicable, prepare for worst case |

**How to distinguish:**
- Lost link: Aircraft telemetry shows it executing expected lost-link behavior (position, altitude, heading consistent with RTH)
- Fly-away: Aircraft deviates from expected path, altitude changes unexpectedly, or telemetry shows impossible values

#### 10.6.2 CARs 901.47 — When ATC Notification is MANDATORY

The regulation requires notification when a fly-away is likely to affect controlled airspace or other aircraft:

> **CARs 901.47:** The pilot-in-command of an RPA shall notify the appropriate air traffic control unit in the event of a fly-away if the fly-away is likely to result in the RPA entering controlled airspace or posing a hazard to other aircraft.

**Notification is REQUIRED when:**
- Fly-away trajectory is toward controlled airspace
- RPA has already entered controlled airspace during fly-away
- RPA may pose hazard to other air traffic (near airports, traffic patterns, known routes)

**Notification SHOULD be made when:**
- Uncertain whether controlled airspace will be entered
- Uncertain about traffic in the area
- In doubt — notify

#### 10.6.3 How to Notify ATC — Step by Step

**BEFORE YOU FLY — Preparation:**
1. Identify the nearest ATC facility for your operating area
2. Obtain the frequency from the Canada Flight Supplement (CFS)
3. Have the phone number as backup (CFS or NAV CANADA website)
4. Pre-brief your crew on who makes the call and what information to provide
5. Calculate worst-case fly-away distance: Maximum Speed × Maximum Battery Time

**DURING FLY-AWAY — Immediate Actions:**
1. Attempt to regain control (if safe to do so)
2. If control not regained within 30 seconds, initiate ATC notification
3. Use VHF radio if equipped; otherwise use phone

**Making the Radio Call:**

> *"[ATC Facility], this is [Your Identifier], drone fly-away in progress, position [coordinates], altitude approximately [XXX] feet, heading [direction], request you advise traffic."*

**Example:**

> *"Edmonton Centre, this is RPAS Alpha-Seven-Two, drone fly-away in progress, position 53 degrees 32 minutes north, 113 degrees 29 minutes west, altitude approximately 350 feet, heading northwest toward Edmonton International, request you advise traffic."*

**Information to Provide:**
- Your identifier (company name, registration, or callsign)
- "Drone fly-away in progress"
- Last known position (coordinates or reference to landmark)
- Last known altitude
- Last known heading and direction of travel
- Aircraft description (size, color if visible)
- Estimated battery time remaining
- Your contact information for updates

#### 10.6.4 Post-Notification Actions

**While fly-away is active:**
- Remain available to ATC for updates
- Continue attempting to regain control
- Track aircraft position if any telemetry available
- Document timeline of events
- Do NOT leave the scene

**After fly-away concludes (crash/landing/recovery):**
- Notify ATC that the emergency is concluded
- Provide final position if known
- Secure the aircraft if possible
- Begin documentation for reporting

#### 10.6.5 Reporting Requirements After Fly-Away

**RPOC Internal Reporting:**
- Document in flight log with full details
- Complete occurrence report per your ROM
- Analyze root cause

**Mandatory TSB Reporting (if applicable):**
Under TSB regulations, you MAY need to report if the fly-away resulted in:
- Collision with another aircraft
- Injury to any person
- Damage to property
- Near-collision with manned aircraft

**Transport Canada Notification:**
- Service Difficulty Report if equipment malfunction caused fly-away
- Occurrence report if regulations were violated during fly-away

#### 10.6.6 Pre-Planning for Fly-Away

Every BVLOS mission should include fly-away contingency planning:

**Calculate Worst-Case Fly-Away Distance:**

**Formula:** Maximum Range = Maximum Speed × Maximum Battery Time

| Parameter | Example Value |
|-----------|---------------|
| RPA maximum speed | 60 km/h (16.7 m/s) |
| Battery time at furthest point | 25 minutes |
| **Maximum fly-away distance** | **60 × (25/60) = 25 km** |

**Assess Fly-Away Risk Zones:**
- Draw a circle of maximum fly-away distance from your furthest operating point
- Identify any controlled airspace, aerodromes, or populated areas within that circle
- Pre-identify ATC facilities and contact information for those areas

**Document in Mission Plan:**
- ATC contact information (frequency and phone)
- Worst-case fly-away scenario description
- Pre-briefed phraseology
- Designated crew member for ATC communication

> **Scenario Activity:** *"You're flying BVLOS 6 NM southeast of Edmonton International (CYEG) at 350 ft. Your RPA stops responding to commands and begins flying northwest toward the airport at 30 km/h. Battery shows 18 minutes remaining. What's your immediate response sequence? Who do you call? What do you say? What's the maximum distance the aircraft could travel?"*

> **Model Response Sequence:**
> 1. Immediately attempt to regain control (toggle modes, check link, try RTH command)
> 2. Within 30 seconds, if no response, initiate ATC notification
> 3. Call Edmonton Terminal on frequency (check CFS — typically 127.4 or similar)
> 4. State: "Edmonton Terminal, RPAS [identifier], drone fly-away, 6 miles southeast of the airport, 350 feet, heading northwest toward CYEG, 18 minutes battery remaining, request traffic advisory"
> 5. Maximum range: 30 km/h × (18/60) hr = 9 km — aircraft COULD reach the airport
> 6. Remain on frequency, provide updates, coordinate with ATC
> 7. Document everything for post-incident reporting

---

## SECTION 11: Part IX Division X — Training and Flight Review

### 11.1 Standard 921 — Training Framework

Standard 921 establishes the framework for RPAS pilot certification and training:

- **Basic pilot certificate** — Online exam based on TP 15263
- **Advanced pilot certificate** — Exam + flight review
- **L1C pilot certificate** — Advanced exam pass + 20 hours ground school (TP 15530) + L1C exam + flight review
- **Flight reviewer rating** — Additional qualification for conducting flight reviews
- **Recency requirements** — All certificate holders must meet recency within every 24 months

### 11.2 Retaking Examinations (CARs 901.178)

If you fail the L1C exam, you may rewrite after a **24-hour** waiting period. There is no limit on the number of attempts, but each attempt requires the 24-hour waiting period.

### 11.3 Declared Training Provider Requirements

Training providers operate under a **self-declaration model** (Standard 921.08). The declaration must include:
- Organization name
- Course name and number
- Training duration (hours of classroom and/or online, all instructor-led)
- Training locations
- Name of the Chief Ground Instructor (must hold L1C certificate with Flight Reviewer rating)
- Confirmation that training covers all TP 15530 subjects
- Confirmation of the 20-hour minimum

Changes in CGI appointment must be reported to the Minister within 30 days.

---

## SECTION 12: Part IX Division XI — RPAS Safety Assurance Declarations

### 12.1 The Declaration Model (Not Certification)

This is fundamentally different from traditional manned aircraft airworthiness. Transport Canada does NOT test, inspect, or certify RPAS. Instead, the **manufacturer** (or modifier) self-declares that their RPAS meets the applicable safety standards. This is a regulatory design choice that enables faster innovation while placing safety responsibility on the manufacturer.

**Responsibilities of the declarant (manufacturer/modifier):**
- Make a "declaration" to the Minister assuring target levels of safety for the required standards
- Establish a maintenance program
- Issue mandatory actions for continued compliance/airworthiness
- Provide an RPAS Operations Manual (pilot's handbook)
- Maintain records substantiating the declaration
- Submit service difficulty reports (required for PVD)
- Submit annual reporting to the Minister (required for PVD)

### 12.2 Standard 922 Declaration Standards

| Standard | Coverage |
|---|---|
| 922.04 | Controlled airspace safety assurance |
| 922.05 | Near people safety assurance |
| 922.06 | Over people safety assurance |
| 922.07 | Safety and reliability (PVD — higher bar) |
| 922.08 | Containment (geofencing, lost-link behaviour) |
| 922.09 | C2 link and lost-link behaviour |
| 922.10 | Detect and Avoid (optional) |
| 922.11 | Remote pilot station design |
| 922.12 | Environmental envelope (PVD only) |

#### Standard 922 Plain-Language Translation

The regulatory language in Standard 922 can be dense. Here's what each section actually means in operational terms:

| Standard | Regulatory Language | What It Actually Means for You |
|----------|---------------------|--------------------------------|
| **922.04** | Controlled airspace safety assurance | Your drone won't accidentally fly into an airport's airspace — it knows where controlled airspace is and will respect those boundaries |
| **922.05** | Near people safety assurance | When flying close to (but not directly over) people, the drone is unlikely to suddenly veer into them — you can maintain safe lateral distance |
| **922.06** | Over people safety assurance | If your drone fails while flying over people, the design ensures it's unlikely to kill or seriously injure anyone directly below |
| **922.07** | Safety and reliability (PVD) | The drone is built and tested to a HIGHER standard — it's REALLY unlikely to fail catastrophically; required for higher-risk operations |
| **922.08** | Containment | The drone stays where you tell it — geofences actually work, altitude limits are enforced, and it won't drift outside the operational volume |
| **922.09** | C2 link and lost-link | When your connection drops, the drone does something PREDICTABLE and SAFE — it doesn't just fall out of the sky or fly away randomly |
| **922.10** | Detect and Avoid | The drone (or you, with help from VOs or technology) can SEE other aircraft and AVOID them before collision |
| **922.11** | Remote pilot station | Your controller/ground station shows you EVERYTHING you need to fly safely — battery status, GPS lock, attitude, telemetry are all visible |
| **922.12** | Environmental envelope | The drone actually WORKS in the temperature, wind, and humidity conditions you'll encounter — it's tested for those conditions |

> **SORA Context:** Each 922 section directly implements SORA Operational Safety Objectives (OSOs). For example, 922.08 (containment) implements OSO#17 (Operational Volume definition and adherence), ensuring the RPA stays within its defined flight geography and contingency volume.

### 12.3 Operational Categories Requiring Safety Assurances

**VLOS (Advanced) Declaration Matrix:**

| Weight Class | Away From People | Controlled Airspace | Near People | Over People |
|---|---|---|---|---|
| 150 kg+ | SFOC | SFOC | SFOC | SFOC |
| 25–150 kg | Declaration 922.08 | Declaration 922.04 | PVD 922.07 (<150m, >30m) | PVD 922.07 (<30m) |
| 250g–25 kg | N/A | Declaration 922.04 | Declaration 922.05 (<30m, >50m) | Declaration 922.06 (<5m) |

**BVLOS (L1C) Declaration Matrix:**

| Weight Class | >1 km from Populated | Sparsely Populated | Controlled Airspace / <5 NM Aerodrome |
|---|---|---|---|
| 150 kg+ | SFOC | SFOC | SFOC |
| 25–150 kg | SAD 922.08(3,4,5,6) + 922.09–922.11 | SFOC | SFOC |
| 250g–25 kg | SAD 922.08(1,2) + 922.09–922.11 | PVD 922.07 + 922.09–922.12 | SFOC |

---

## SECTION 13: Part IX Division XII — RPAS Operator Certificate (RPOC)

### 13.1 RPOC Manual Requirements

The RPOC requires five key elements, each documented in the RPAS Operations Manual or supporting manuals:

**Safety Program (CARs 901.218):**
- Improvement goals for aviation safety
- Aviation hazard identification and documentation
- Evaluation of mitigations for identified hazards
- Internal reporting and analyzing of hazards

**Maintenance Control Manual (MCM) (CARs 901.221):**
- Authorization to conduct maintenance
- Maintenance records
- Procedures for servicing and ground handling

**Training Program (CARs 901.219):**
- Indoctrination training for new personnel
- Initial and annual training
- Competency assessment to evaluate effectiveness of training
- Training program documented in the RPAS Operations Manual

**Record Keeping (CARs 901.223):**
- Crew and flight time of each flight
- Names of employees/agents
- Training records
- Registration numbers of RPA used
- Maintenance actions performed
- Available on request by the Minister
- Retention period: 12–24 months depending on record type

**Normal and Emergency Procedures (CARs 901.23):**
- All seven emergency procedure categories (control station failure, equipment failure, RPA failure, loss of C2, fly-away, flight termination, DAA/traffic avoidance)
- Reviewed before each flight by all crew members

### 13.2 RPAS Operations Manual (CARs 901.217)

The Operations Manual must include:
1. Description of roles and responsibilities of crew members before, during, and after flight
2. Description of roles and responsibilities of all operational and maintenance personnel, including hierarchy and chain of command
3. Safety processes established under section 901.218
4. Normal and emergency procedures established under section 901.23
5. Description of personnel training and qualifications, including a detailed syllabus of the training program under section 901.219

### 13.3 Developing Your RPAS Operations Manual — Practical Guidance

The ROM is your operational playbook. A well-developed ROM doesn't just satisfy TC requirements — it makes your operations safer, more consistent, and more defensible. This section provides practical guidance based on AC 901-002.

#### 13.3.1 ROM Section-by-Section Development Guide

**Section 1: Company Overview and Organization**

This section introduces your organization and establishes the framework for everything that follows.

*Required Elements:*
- Legal name of the operator
- Contact information (address, phone, email)
- RPOC number (once issued)
- Scope of operations authorized under the RPOC
- Organizational structure

*Example Text:*
> "[Company Name] is an RPAS operator holding RPOC [number], authorized to conduct Level 1 Complex BVLOS operations under CARs Part IX Division VI. Our primary operations include [aerial survey, inspection, mapping, etc.] using [aircraft types]. Operations are conducted in Class G uncontrolled airspace over unpopulated and sparsely populated areas within Canada."

**Section 2: Roles and Responsibilities**

This section must clearly define WHO does WHAT. Use a table format for clarity:

| Role | Responsibilities | Qualifications Required |
|------|------------------|------------------------|
| **Accountable Executive (AE)** | Overall accountability for safety; resource allocation; final authority on operational decisions | Control of financial/human resources per CARs 106.01 |
| **Chief Pilot** | Pilot training and standards; flight operations oversight; ROM compliance | L1C certificate with Flight Reviewer rating recommended |
| **Pilot-in-Command (PIC)** | Pre-flight planning; safe conduct of flight; crew briefing; go/no-go decisions | L1C certificate, current recency |
| **Visual Observer (VO)** | Traffic detection; hazard identification; communication with PIC | Basic certificate minimum; VO training per ROM |
| **Maintenance Personnel** | Aircraft maintenance per MCM; maintenance records | Training per MCM requirements |

*Critical Point:* The AE must have actual control over resources — they cannot be a figurehead. TC auditors will verify that the named AE can actually make resource decisions affecting safety.

**Section 3: Normal Operating Procedures**

Organize procedures chronologically for easy reference:

*Pre-Mission (24+ hours before flight):*
- Site survey per CARs 901.27
- Population density determination (DSST-2)
- Airspace verification (NAV Drone, DAH)
- NOTAM check
- Weather forecast review
- DAA strategy confirmation
- Equipment availability check
- Crew scheduling and briefing notice

*Day-of-Mission:*
- Weather confirmation
- NOTAM update
- Equipment inspection
- Battery status verification
- Crew briefing (roles, procedures, emergency review)
- Site-specific hazard assessment
- Go/no-go decision

*Mission Execution:*
- Pre-flight checklist completion
- System checks (GPS lock, C2 link, telemetry)
- Launch procedures
- In-flight monitoring requirements
- VO protocols
- Communication procedures
- Normal recovery procedures

*Post-Flight:*
- Aircraft inspection
- Battery handling and storage
- Flight log completion
- Data backup
- Anomaly documentation
- Maintenance requirements identification

**Section 4: Emergency Procedures**

CARs 901.23 requires procedures for SEVEN specific emergency categories. Each must be documented:

| Emergency Category | Required Elements |
|-------------------|-------------------|
| **(i) Control Station Failure** | Symptoms recognition; immediate actions; alternate control methods; recovery procedures |
| **(ii) Equipment Failure** | Type-specific procedures (GPS, compass, motor, sensor failures); continue/abort criteria |
| **(iii) Failure of RPA** | Partial failure procedures; catastrophic failure response; flight termination criteria |
| **(iv) Loss of C2 Link** | Recognition; expected aircraft behavior per 922.09; monitoring procedures; recovery attempts |
| **(v) Fly-Away** | Recognition (vs lost link); ATC notification procedures; tracking; documentation |
| **(vi) Flight Termination** | Criteria for deliberate termination; termination methods; post-termination procedures |
| **(vii) DAA / Traffic Avoidance** | Detection procedures; avoidance maneuvers; right-of-way compliance; near-miss reporting |

*Emergency Procedure Decision Tree Example (Lost C2 Link):*

| Situation | Question | Action |
|-----------|----------|--------|
| Link lost detected | Was it momentary (<5 sec)? | If YES: Monitor, document, continue if stable |
| Link lost >5 seconds | Is aircraft following expected lost-link behavior? | If YES: Monitor position, prepare for recovery, DO NOT interfere |
| | | If NO: This is a FLY-AWAY → Initiate fly-away procedures |
| Aircraft moving | Is aircraft entering controlled airspace? | If YES: Notify ATC immediately |
| Recovery | Link recovered? | If YES: Verify control, assess, continue/abort decision |
| | | If NO: Continue monitoring until aircraft lands or fly-away confirmed |

**Section 5: SORA Documentation (for SFOC preparation)**

Even though L1C operations are pre-validated, your ROM should include:
- Concept of Operations (ConOps) template for your typical missions
- Ground risk assessment methodology
- Air risk assessment methodology
- Mitigation measures implemented

This prepares you for eventual SFOC applications and demonstrates operational maturity.

#### 13.3.2 Common ROM Deficiencies Found in TC Audits

Based on TC guidance and industry experience, these are the most common deficiencies that result in audit findings:

| Deficiency | Why It's a Problem | How to Fix |
|------------|-------------------|------------|
| **Incomplete emergency procedures** | All 7 categories required by 901.23; missing any is non-compliant | Review against the list; add any missing categories |
| **Vague procedures ("follow manufacturer guidance")** | Too vague to be operationally useful; what if manual isn't available? | Extract specific procedures from manufacturer manual into ROM |
| **Missing change management process** | ROM must be a living document; changes must be controlled | Add ROM revision control section with approval process |
| **Outdated regulatory references** | Regulations change; outdated references show lack of maintenance | Review annually; update after regulatory changes |
| **No crew qualification documentation** | Must document training and qualification requirements | Add qualification standards for each crew role |
| **Missing RPAS-specific procedures** | Generic procedures don't address RPAS-specific issues | Customize procedures for each aircraft type in your fleet |
| **No pre-flight briefing requirements** | 901.23(3) requires crew review before flight | Document briefing content and verification method |

#### 13.3.3 ROM Quality vs TC Compliance

There's a difference between a ROM that passes a TC audit and one that actually makes your operations safer:

**Minimum Compliance ROM:**
- Contains all required sections
- Uses correct regulatory references
- Has procedures for required categories
- May be generic or template-based

**Operational Excellence ROM:**
- All of the above, PLUS:
- Procedures are specific to YOUR aircraft, YOUR operations, YOUR environment
- Decision aids (flowcharts, checklists) are practical and tested
- Lessons learned from your operations are incorporated
- Regular crew feedback improves procedures
- Emergency procedures are practiced, not just documented

> **Discussion Prompt:** *"What's the difference between a ROM that passes a TC audit and one that actually makes your operations safer? Are they the same thing? Where might they diverge?"*

#### 13.3.4 ROM Gap Analysis Exercise

**Activity:** Review a sample ROM section against AC 901-002 requirements and identify deficiencies.

*Sample Emergency Procedure (Intentionally Flawed):*
> "In the event of a control station failure, the pilot will attempt to regain control. If unsuccessful, the pilot will follow appropriate procedures."

**Identify the deficiencies:**
1. ________________________
2. ________________________
3. ________________________

**Corrected Version:**
> "In the event of control station failure:
> 1. Immediately announce 'Control station failure' to all crew
> 2. If backup control station is available, initiate switchover within 30 seconds
> 3. If no backup available, observe aircraft for expected lost-link behavior (hover for 30 seconds, then RTH)
> 4. If aircraft is following expected behavior, monitor and prepare for recovery
> 5. If aircraft is NOT following expected behavior, treat as fly-away
> 6. Document control station failure symptoms for post-flight analysis
> 7. Do not attempt further flights until control station issue is diagnosed and resolved"

---

## SECTION 14: CARs Subpart III — Special Flight Operations (903)

### 14.1 When an SFOC is Required

Any RPAS operation that falls outside the boundaries of Basic, Advanced, or Level 1 Complex operations requires a Special Flight Operations Certificate — RPAS. This includes:

- BVLOS over populated areas (>25 pp/km²)
- BVLOS in controlled airspace
- BVLOS within 5 NM of aerodromes listed in CFS/CWAS
- Operations above 400 ft AGL (outside the 100 ft/200 ft shelter rule)
- Operations with RPA over 150 kg
- Operations at advertised events
- Foreign operators
- Carriage of dangerous goods
- Medium RPA BVLOS over sparsely populated areas

### 14.2 Advanced vs. L1C vs. SFOC — Use Case Comparison

| Operation Type | Advanced | L1C | SFOC |
|---|---|---|---|
| RPAS / mRPAS VLOS training | ✓ | | |
| Bridge/roof/tower/flare stack inspection (sheltered) | ✓ | | |
| Recreational BVLOS/FPV (EVLOS within 2 NM) | ✓ | | |
| Large area survey flights (BVLOS) | | ✓ | |
| BVLOS RPAS with onboard DAA | | ✓ | |
| Foreign pilots | | ✓ | |
| BVLOS without VO DAA | | ✓ | ✓ |
| Carriage of dangerous goods | | | ✓ |

### 14.3 AC 903-001 — Operational Risk Assessment

Advisory Circular 903-001 Issue 02 provides the framework for operational risk assessment for SFOC applications. It is based on the JARUS SORA methodology. Key components include:

- **Ground Risk Determination:** Assessing the risk to people and property on the ground using population density, operating weight, and mitigation measures
- **Air Risk Determination:** Assessing the risk of mid-air collision using airspace classification, encounter categories, and strategic/tactical mitigations

While SORA is not required for L1C operations (TC pre-validated the risk for L1C conditions), understanding the AC 903-001 framework prepares you for eventual SFOC applications and deepens your understanding of why L1C boundaries are set where they are.

---

## SECTION 15: Knowledge Check — Air Law Module

### Recall-Level Questions

**Q1.** Which three persons can demand to inspect your aviation documents during operations?
- A) A peace officer, a fire marshal, or the Minister
- B) A peace officer, an immigration officer, or the Minister
- C) An RCMP officer, a municipal inspector, or Transport Canada
- D) Any person with a reasonable concern about aviation safety
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** CARs 103.01 specifies a peace officer, an immigration officer, or the Minister.

</details>

**Q2.** What is the maximum altitude for operating an RPA under normal rules?
- A) 400 ft ASL
- B) 400 ft AGL, or 100 ft above a structure if within 200 ft horizontally
- C) 500 ft AGL
- D) 400 ft AGL with no exceptions
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** CARs 901.25 sets 400 ft AGL as the maximum, with an exception allowing 100 ft above a building or structure if operating within 200 ft horizontally.

</details>

**Q3.** What happens to Class C airspace when the associated ATC tower closes?
- A) It becomes Class G uncontrolled airspace
- B) It becomes Class F restricted airspace
- C) It becomes Class E controlled airspace
- D) It remains Class C but with reduced services
<details>
<summary>Click to reveal answer</summary>

**Answer: C.** CARs 601.08(3) specifies that Class C becomes Class E when the ATC unit is not in operation. It remains controlled airspace.

</details>

**Q4.** What does the designation "CYA113(A)" indicate?
- A) Canadian restricted airspace area 113, acrobatic activity
- B) Canadian advisory airspace area 113, acrobatic activity
- C) Canadian danger area 113, alert activity
- D) Canadian advisory airspace area 113, alert activity
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** CY = Canada, A = Advisory, 113 = area number, (A) = Acrobatic.

</details>

**Q5.** How long must you wait before rewriting the L1C exam after a failed attempt?
- A) 14 days
- B) 72 hours
- C) 24 hours
- D) 7 days
<details>
<summary>Click to reveal answer</summary>

**Answer: C.** CARs 901.178 allows rewriting after a 24-hour period.

</details>

### Application-Level Questions

**Q6.** You are planning a BVLOS survey with a 30 kg fixed-wing RPA (medium RPA) over an area with 3 people per square kilometre, 8 NM from the nearest aerodrome listed in the CFS, in Class G airspace at 300 ft AGL. Which declarations does your RPAS need?
- A) PVD 922.07 + 922.09–922.12
- B) SAD 922.08(3,4,5,6) + 922.09–922.11
- C) SAD 922.08(1,2) + 922.09–922.11
- D) This operation requires an SFOC
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** This is a medium RPA operating under 901.87(a) — BVLOS in uncontrolled airspace, over an unpopulated area (3 pp/km² < 5 pp/km²), more than 1 km from any populated area. The applicable declarations for medium RPA under 901.87(a) are SAD 922.08(3,4,5,6) + 922.09 + 922.10 + 922.11.

</details>

**Q7.** A forest fire is reported 4 NM from your active BVLOS survey area. You are operating at 350 ft AGL. What must you do?
- A) Continue operations — you are more than 3 NM away
- B) Immediately cease operations — the restriction applies within 5 NM at altitudes below 3,000 ft AGL
- C) Reduce altitude to 200 ft AGL and continue
- D) Continue operations but monitor the fire's progression
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** CARs 601.15(a) prohibits operations within 5 NM of a forest fire area at altitudes below 3,000 ft AGL. At 350 ft AGL and 4 NM from the fire, you are within the restricted zone and must cease operations immediately.

</details>

**Q8.** Your small RPA (15 kg) holds a SAD under 922.08(1,2). You are planning a BVLOS operation over an area classified as sparsely populated (15 pp/km²). Can you conduct this operation under L1C?
- A) Yes, the SAD covers all L1C operations
- B) No, the RPA needs a PVD under 922.07 for operations over sparsely populated areas
- C) Yes, but only if you stay at least 1 km from any populated area
- D) No, sparsely populated areas always require an SFOC
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** Operations over sparsely populated areas (5–25 pp/km²) fall under 901.87(b), which requires a PVD under 922.07 (plus 922.09–922.12). A standard SAD under 922.08 only covers 901.87(a) operations which must be at least 1 km from populated areas over unpopulated areas.

</details>

### Analysis-Level Questions

**Q9.** *Discussion/Essay:* Explain why Transport Canada chose to use a manufacturer self-declaration model (Standard 922) rather than traditional airworthiness certification for RPAS. What are the advantages and risks of this approach? How does it affect you as an L1C pilot?

> **Model Answer Elements:** Traditional airworthiness certification (type certificates, supplemental type certificates, TC involvement in design review and testing) was designed for manned aircraft with long development cycles, high unit costs, and decades-long operational lifespans. RPAS technology evolves rapidly (12–18 month product cycles), unit costs are relatively low, and the industry encompasses thousands of manufacturers worldwide. A traditional certification model would create a bottleneck that would prevent most RPAS from being legally operated. The self-declaration model places responsibility on the manufacturer to assess and declare compliance, which enables faster market access. The risk is that manufacturers may make declarations that are not fully substantiated — there is no pre-market government testing. This affects L1C pilots because they must understand the limitations of the declaration system: a declared aircraft is NOT a government-certified aircraft. Pilots should review the manufacturer's declared capabilities and limitations carefully, and should not assume that a declaration guarantees airworthiness in the traditional sense. The PVD (Pre-Validated Declaration) for higher-risk operations requires additional substantiation including service difficulty reporting and annual reporting to the Minister, providing a higher level of assurance.

**Q10.** *Discussion/Essay:* A pilot with an L1C certificate is asked by a client to fly a small RPA BVLOS to inspect a bridge that passes over a river between two towns. The bridge is 3 km from the pilot's position. The area around the bridge has a population density of 18 pp/km². The airspace is Class G, there are no aerodromes within 10 NM, and the RPA holds a SAD under 922.08(1,2). Analyze whether this operation can be conducted under L1C, and if not, what changes would be needed.

> **Model Answer Elements:** This operation CANNOT proceed as described. The population density of 18 pp/km² makes this a sparsely populated area (5–25 pp/km²). Under 901.87(a), the SAD under 922.08(1,2) only covers operations at least 1 km from populated areas over unpopulated areas (≤5 pp/km²). Operating over a sparsely populated area requires 901.87(b), which requires a PVD under 922.07 (plus 922.09–922.12), and is only available for small RPA (not medium). Changes needed: (1) obtain an RPAS with a PVD under 922.07 that covers 901.87(b) operations, or (2) apply for an SFOC, or (3) if the bridge itself can be inspected using the sheltered operations provision under Advanced (Division V) — within 200 ft horizontal / 100 ft vertical — that might be an alternative approach that avoids BVLOS entirely, though the 3 km distance from the pilot would likely still require L1C or SFOC authority for transit.

---

## SECTION 16: Discussion Prompts for Instructor-Led Session

### Regulations vs. Reality (10 minutes)
*"Regulations define the minimum legal standard. But minimums don't always equal safe. Can you think of a situation where you would legally be allowed to conduct an L1C operation, but where doing so would be a bad decision? What factors beyond the regulations would you consider?"*

### Airspace Edge Cases (10 minutes)
*"You are operating BVLOS at 350 ft AGL in what your VNC chart shows as Class G airspace, 6 NM from an airport with a Class D control zone. It is 10 PM and the tower closed at 9 PM. Is your airspace still Class G? What happened to the Class D zone? Could any Class E transition areas extend to your position?"*

**Instructor facilitation notes:** The Class D zone reverted to Class E (still controlled). Students should check whether Class E transition areas (often starting at 700 ft AGL) extend to their position — at 350 ft AGL they would likely be below the transition area and still in Class G, but this depends on the specific DAH depiction for that location. The point is that "Class G" is not a permanent label — it depends on time of day, ATC operating hours, and the specific airspace structure at that location.

### Declaration Awareness (5 minutes)
*"You are shopping for an RPAS for L1C operations. The manufacturer says their drone has a 'Safety Assurance Declaration.' What specific questions would you ask to determine whether that declaration covers YOUR intended operations?"*

**Instructor facilitation notes:** Students should ask: Which specific Standard 922 sections does the declaration cover? Is it a SAD or a PVD? Does it cover 901.87(a), 901.87(b), or both? What are the declared operating limitations? What are the lost-link procedures? What maintenance program must be followed? Is the RPAS listed on the Transport Canada "Choose the right drone" website?

### SFOC Boundary (5 minutes)
*"A client asks you to fly BVLOS over an area where the population density is 26 pp/km². This is 'just barely' over the populated area threshold. Is there any L1C pathway for this operation?"*

**Instructor facilitation notes:** No. 26 pp/km² exceeds the sparsely populated threshold of 25 pp/km², making this a populated area. L1C operations cannot be conducted over populated areas under any declaration type. The only options are SFOC (Subpart 3, Section 903) or restructuring the operation to avoid the populated area.

### SORA Understanding (10 minutes)
*"If Canada used a simple 'fly anywhere below 400 ft' rule instead of SORA-based regulations, what risks would remain unaddressed? What incidents might we see? How does the current framework address risks that a simple altitude rule would miss?"*

**Instructor facilitation notes:** Guide discussion toward: ground risk (population density not considered in altitude-only rule), air risk near aerodromes (extended approaches/departures), dynamic risks (forest fires, TFRs), platform reliability (no declaration requirements), and pilot competence (no training requirements). The SORA-based framework addresses multiple risk vectors that a simple altitude rule would ignore.

### DAA Strategy Decisions (10 minutes)
*"Your budget allows ONE DAA solution for your L1C operations. Given your typical mission profile, which would you choose and why? What are the tradeoffs between visual observer networks, cooperative systems (ADS-B), and non-cooperative systems (radar)?"*

**Instructor facilitation notes:** There's no single "right" answer — it depends on mission type. For fixed-area operations, a single VO may suffice. For long linear surveys, VO networks require significant personnel. Cooperative systems only detect equipped aircraft. Non-cooperative systems are expensive but comprehensive. Guide students to consider their ACTUAL operating environment.

### Enforcement Reality (5 minutes)
*"A competitor in your area was caught flying illegally and fined. How might this affect YOU and other legitimate operators? What's the ripple effect in terms of client perception, regulatory scrutiny, and industry reputation?"*

**Instructor facilitation notes:** Discuss: increased client skepticism about all drone operators; potential for increased TC surveillance in the region; reputational damage to the entire industry; opportunity to differentiate on compliance and professionalism; potential for more restrictive regulations if violations continue.

### ROM Quality vs Compliance (5 minutes)
*"What's the difference between a ROM that passes a TC audit and one that actually makes your operations safer? Are they the same thing? Where might they diverge?"*

**Instructor facilitation notes:** A ROM can be technically compliant but operationally useless if it's generic or not actually used. The best ROMs are living documents that crews actually reference, that are updated based on operational experience, and that provide genuine decision support — not just regulatory box-checking.

---

## SECTION 16.5: Scenario Activities for Practice

These activities give students hands-on practice applying L1C regulations to realistic situations.

### Activity 1: Complete Mission Planning Exercise

**Scenario:** Your company has been contracted to survey a 12 km section of pipeline east of Drayton Valley, Alberta. The survey requires BVLOS operation using your company's DJI Matrice 300 RTK (small RPA with SAD covering 922.08(1,2), 922.09-922.11).

**Coordinates for evaluation:** 53.2156° N, 114.8234° W (midpoint of survey)

**Your task — Complete a full L1C eligibility assessment:**

1. **Airspace Verification**
   - What airspace class is this location?
   - What is the distance to the nearest CFS-listed aerodrome?
   - Are there any CYR areas affecting the operational volume?
   - Source each answer with the tool you used.

2. **Population Density Assessment**
   - Using DSST-2, determine the population density classification
   - Is this unpopulated, sparsely populated, or populated?
   - What L1C pathway applies?

3. **Declaration Verification**
   - Does your RPAS declaration cover the required operation?
   - If not, what declaration would be needed?

4. **DAA Strategy**
   - Design a DAA approach for a 12 km linear survey
   - How many VOs would you need and where would you position them?
   - What alternatives exist if VOs are not available?

5. **Go/No-Go Decision**
   - Based on your analysis, is this operation L1C eligible?
   - If yes, document the pathway and requirements
   - If no, explain what would need to change

### Activity 2: Fly-Away Response Drill

**Scenario:** You are conducting BVLOS operations 8 NM southeast of Calgary International Airport (CYYC) at 380 ft AGL. Your RPA suddenly stops responding to commands and begins flying northwest at approximately 40 km/h. Telemetry shows battery at 22 minutes remaining. The aircraft is NOT following its programmed lost-link behavior (which should be hover-then-RTH).

**Practice the following:**

1. **Recognition** — Is this a lost-link situation or a fly-away? How do you know?

2. **Immediate Actions** — What do you do in the first 30 seconds?

3. **ATC Notification** — Write out the exact radio call you would make:
   - What facility would you contact?
   - What information must you provide?
   - Practice the phraseology out loud.

4. **Worst-Case Calculation**
   - At 40 km/h with 22 minutes battery, what is the maximum distance the aircraft could travel?
   - Could it reach controlled airspace?
   - Could it reach the airport?

5. **Post-Event Actions** — What happens after the fly-away concludes?

### Activity 3: Declaration Selection Quiz

For each scenario, determine the correct pathway (901.87a, 901.87b, or SFOC required):

**Scenario A:** Small RPA (12 kg), BVLOS survey, area population density 3 pp/km², operating 7 NM from nearest CFS aerodrome, Class G airspace.
→ Pathway: __________ Declaration needed: __________

**Scenario B:** Medium RPA (35 kg), BVLOS inspection, area population density 8 pp/km², operating 6 NM from nearest aerodrome, Class G airspace.
→ Pathway: __________ Declaration needed: __________

**Scenario C:** Small RPA (8 kg), BVLOS mapping, area population density 18 pp/km², operating 12 NM from nearest aerodrome, Class G airspace.
→ Pathway: __________ Declaration needed: __________

**Scenario D:** Small RPA (15 kg), BVLOS survey, area population density 4 pp/km², but operating 0.8 km from an area with 30 pp/km², Class G airspace.
→ Pathway: __________ Declaration needed: __________

**Scenario E:** Medium RPA (45 kg), BVLOS pipeline survey, area population density 4 pp/km², 1.5 km from nearest populated area (>25 pp/km²), 8 NM from aerodrome.
→ Pathway: __________ Declaration needed: __________

**Answer Key:**
- A: 901.87(a), SAD 922.08(1,2) + 922.09-922.11
- B: SFOC required (Medium RPA over sparsely populated area)
- C: 901.87(b), PVD 922.07 + 922.09-922.12
- D: 901.87(b), PVD 922.07 + 922.09-922.12 (within 1 km of populated area)
- E: 901.87(a), SAD 922.08(3-6) + 922.09-922.11

### Activity 4: ROM Gap Analysis

**Review this sample emergency procedure and identify all deficiencies:**

*Sample (Intentionally Flawed):*
> "Emergency Procedure: Fly-Away
> If a fly-away occurs, the pilot should try to regain control. If unsuccessful, the pilot will follow company procedures. ATC should be notified if necessary."

**Identify at least 5 deficiencies and explain why each is problematic:**

1. ____________________________________________________________
2. ____________________________________________________________
3. ____________________________________________________________
4. ____________________________________________________________
5. ____________________________________________________________

**Write a corrected version that addresses all deficiencies.**

---

## SECTION 16.6: Quick Reference Materials

### L1C Pathway Decision Card (One-Page Summary)

**Prerequisite Checks** (All must be YES)

| Check | Status |
|-------|--------|
| Class G airspace? | |
| >5 NM from CFS/CWAS aerodrome? | |
| No active restrictions (TFRs, forest fires, CYR)? | |
| ≤400 ft AGL? | |

**Population Density → Pathway**

| Density | Distance | Pathway | Small RPA | Medium RPA |
|---------|----------|---------|-----------|------------|
| ≤5 pp/km² | ≥1 km from populated | 901.87(a) | SAD: 922.08(1,2) + 922.09-922.11 | SAD: 922.08(3-6) + 922.09-922.11 |
| ≤5 pp/km² | <1 km from populated | 901.87(b) | PVD: 922.07 + 922.09-922.12 | SFOC REQUIRED |
| >5 to ≤25 pp/km² | Any | 901.87(b) | PVD: 922.07 + 922.09-922.12 | SFOC REQUIRED |
| >25 pp/km² | Any | SFOC | SFOC REQUIRED | SFOC REQUIRED |

**Additional Requirements**

| Requirement | Status |
|-------------|--------|
| RPOC with valid ROM | |
| L1C pilot certificate (current recency) | |
| DAA strategy implemented | |
| Anti-collision lighting (BVLOS) | |
| Emergency procedures reviewed by all crew | |

### Emergency Contacts Card

**ATC Facilities** (Verify current frequencies in CFS)

| Facility | Contact |
|----------|---------|
| Vancouver ACC | Check CFS for applicable frequency |
| Edmonton ACC | Check CFS for applicable frequency |
| Winnipeg ACC | Check CFS for applicable frequency |
| Toronto ACC | Check CFS for applicable frequency |
| Montreal ACC | Check CFS for applicable frequency |
| Moncton ACC | Check CFS for applicable frequency |
| NAV CANADA Customer Service | 1-800-876-4693 |

**Transport Canada**

| Contact | Information |
|---------|-------------|
| TC Drone Hotline | tc.dronescivil-civildrones.tc.gc.ca |
| Civil Aviation Issues | 1-800-305-2059 |

**TSB Reporting** (if applicable)

| Contact | Information |
|---------|-------------|
| 24-Hour Hotline | 1-819-997-7887 |
| Website | tsb.gc.ca |

*Report required for: collision with aircraft, injury, property damage, near-miss with manned aircraft*

**Provincial Forest Fire Info** (Check applicable province before each flight)

| Province | Website |
|----------|---------|
| Alberta | wildfire.alberta.ca |
| BC | bcwildfire.ca |
| Saskatchewan | saskatchewan.ca/fire |
| Ontario | ontario.ca/forestfires |

---

## SECTION 17: Additional Regulatory Requirements

### 17.1 CAR 106.01 Accountable Executive

The Accountable Executive is a defined regulatory role under CARs:

> *"...to be responsible for operations or activities authorized under the certificate and accountable on their behalf for meeting the requirements of these Regulations..."*
>
> *"...no person shall be appointed [as Accountable Executive] unless they have control of the financial and human resources that are necessary for the activities and operations authorized under the certificate..."*

The Accountable Executive must have the authority to make resource decisions that affect safety — they cannot be a figurehead without real power.

### 17.2 CARs 900.8 Emergency Security Perimeter

No person shall operate an RPA over or within the security perimeter established by a public authority in response to an emergency, **unless** the operation is conducted in service of a public authority responding to that emergency. This applies to police cordons, fire scenes, accident sites, and any other emergency perimeter.

### 17.3 CARs 900.09 Commercial Air Service and Carriage of Goods

RPAS operations providing specialty air service with operating weight of 250g or more are subject to additional requirements:
- Person providing service must be Canadian, or an employee/agent of an RPAS operator
- Non-residents and non-Canadian corporations must operate under a free trade agreement with Canada
- All others require an SFOC

**Carriage of Goods (Cargo):** Requires a certificate from the Canadian Transportation Agency (CTA) in addition to RPAS operational authorization.

### 17.4 CARs 901.35 Icing Conditions

**(1)** Regarding operations where icing conditions are **observed, reported to exist, or likely to be encountered**: Pilots must assess whether their RPAS is equipped to operate in icing conditions and must not operate if it is not.

**(2)** Regarding **ground icing**: No operation shall be conducted with frost, ice, or snow adhering to any of the **critical surfaces** of the RPA.

### 17.5 CARs 901.38 First-Person View (FPV) Devices

A pilot **cannot use FPV** devices as the primary means of maintaining visual contact unless a **visual observer** maintains unaided visual contact with the airspace surrounding the RPA.

**FPV Device Definition:** A device that provides a pilot with an image of the RPA's flight path from the perspective of the RPA.

FPV alone does not satisfy VLOS requirements — it supplements but does not replace visual observation by the pilot or VO.

### 17.6 CARs 901.34 Minimum Weather Conditions (Detailed)

Weather minimums vary by operation type:

| Operation Type | Weather Requirements |
|----------------|---------------------|
| **VLOS sRPAS** | IAW manufacturer operating manual; pilot/VO maintain line-of-sight |
| **BVLOS sRPAS** | IAW manufacturer operating manual; visibility 3 SM or greater; operated clear of cloud |
| **VLOS mRPAS** | IAW manufacturer operating manual; if visibility is 4 SM or less, mRPAS distance no more than 1/2 visibility |
| **BVLOS mRPAS** | IAW manufacturer operating manual; visibility 3 SM or greater; operated clear of cloud |

### 17.7 Timeline of Part IX Development

Understanding the regulatory history helps contextualize current requirements:

| Year | Development |
|------|-------------|
| **2019** | CARs Part IX created; SFOC process manages operations not addressed by Part IX |
| **2020** | NPA (Notice of Proposed Amendments) for Lower-Risk BVLOS published |
| **2023** | Canada Gazette, Part I — Lower-Risk BVLOS proposed changes |
| **2025** | Canada Gazette, Part II — Lower-Risk BVLOS enacted, fully coming into effect November 4, 2025 (SOR/2025-70) |

This timeline shows that L1C is a recent regulatory development — many BVLOS operations that previously required SFOCs can now be conducted under the L1C framework.

### 17.8 Service Fees Reference

Fees for RPAS services are published in the Canada Gazette and include:
- Drone registration
- L1C operations exam
- L1C operations pilot certificate: **$125**
- Pre-validated declarations
- RPAS Operator Certificate: **$125**
- SFOC (very low, medium, and high complexity) — fees vary

### 17.9 ROM Guidance Resources

For developing your RPAS Operations Manual:
- **Advisory Circular AC 901-002** — Guidance on Manual Development for RPAS Operator Certificate (RPOC)
- **Scriptorium** — Professional Compliance and Writing Services (third-party provider)

---

## SECTION 18: Practical Tools Tutorial

These tools are essential for L1C mission planning. This section provides step-by-step guidance you can use immediately.

### 18.1 NAV Drone — Airspace Authorization and Visualization

**What it does:** NAV Drone is NAV CANADA's official platform for RPAS airspace visualization, NOTAM integration, and controlled airspace authorization requests.

**Website:** https://www.navcanada.ca/en/flight-planning/drone-flight-planning.aspx

#### Step-by-Step: Setting Up NAV Drone

**Step 1: Create Account**
1. Navigate to NAV Drone registration page
2. Provide email, create password
3. Verify email address
4. Complete profile with operator information

**Step 2: Set Up RPAS Profile**
1. Log in to NAV Drone
2. Navigate to "My Aircraft" or "RPAS Profile"
3. Add each RPAS you operate:
   - Registration number
   - Make/model
   - Maximum operating weight
   - Declaration type (SAD/PVD)
4. Save profile

**Step 3: Plan a Mission**
1. Select "Plan Flight" or "New Mission"
2. Enter operating location (coordinates, address, or map selection)
3. Define operating area (point, radius, or polygon)
4. Set operating altitude (remember: ≤400 ft AGL for L1C)
5. Set date/time of operation
6. System displays:
   - Airspace classification
   - Any NOTAMs affecting the area
   - Proximity to aerodromes
   - Any restrictions or requirements

**Step 4: Understanding the Display**
- **Green zones:** Typically Class G, no authorization required
- **Yellow zones:** Caution — may be near controlled airspace or have NOTAMs
- **Red zones:** Controlled airspace — authorization required for Advanced operations, NOT permitted for L1C
- **NOTAM overlay:** Active restrictions displayed with details

**Step 5: For Advanced Operations (not L1C) — Authorization Request**
1. If operating in controlled airspace (Advanced only), select "Request Authorization"
2. Complete required information
3. Submit request (allow 24-48 hours minimum)
4. Receive authorization or denial
5. If approved, print/save authorization for field use

#### Common NAV Drone Mistakes

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Same-day authorization request | Request denied — processing takes time | Submit 24-48+ hours in advance |
| Not checking authorization conditions | Operating outside approved parameters | Read ALL conditions before flying |
| Relying solely on NAV Drone | Missing information from other sources | Cross-reference with CFS, DAH, NOTAMs |
| Not refreshing before flight | Operating with stale NOTAM data | Refresh data on day of operation |

### 18.2 NRCAN DSST-2 — Population Density Determination

**What it does:** The Drone Site Selection Tool (DSST-2) helps determine population density classification for your operating area using Statistics Canada Dissemination Area data.

**Website:** https://www.nrcan.gc.ca/maps-tools-and-publications/satellite-imagery-air-photos/drone-site-selection-tool/23143

#### Step-by-Step: Using DSST-2

**Step 1: Navigate to the Tool**
1. Go to NRCAN DSST-2 website
2. Accept terms of use
3. Wait for map interface to load

**Step 2: Enter Your Location**
1. Use the search bar to enter coordinates or address
2. Alternatively, navigate on the map to your location
3. Zoom to appropriate scale (typically 1:50,000 or closer)

**Step 3: Define Your Operational Area**
1. Select the polygon/shape tool
2. Draw the boundary of your operational volume on the map
3. Include your flight geography PLUS contingency volume PLUS ground risk buffer
4. The tool will calculate the area

**Step 4: Access Population Density Data**
1. With your area defined, the tool accesses Statistics Canada Dissemination Area data
2. Population density is displayed for each DA within your operational area
3. Note the HIGHEST density value within your area — this determines your pathway

**Step 5: Interpret the Results**

| DSST-2 Result | Classification | L1C Pathway | Required Declaration |
|---------------|----------------|-------------|---------------------|
| **≤5 pp/km²** | Unpopulated | 901.87(a) | SAD |
| **>5 to ≤25 pp/km²** | Sparsely Populated | 901.87(b) — small RPA only | PVD |
| **>25 pp/km²** | Populated | Not L1C eligible | SFOC required |

#### Worked Example: Population Density Analysis

**Scenario:** You're planning a BVLOS pipeline survey at coordinates 53.5461° N, 113.4938° W (east of Edmonton).

**Step 1:** Enter coordinates in DSST-2
**Step 2:** Draw polygon following pipeline corridor plus 500m buffer on each side
**Step 3:** Tool shows the following Dissemination Areas:
- DA 48110567: 2.1 pp/km² (unpopulated)
- DA 48110568: 4.8 pp/km² (unpopulated)
- DA 48110569: 12.3 pp/km² (sparsely populated) ← **Highest value**

**Analysis:** The operational area crosses through sparsely populated terrain (>5 pp/km²). Therefore:
- 901.87(a) pathway: NOT eligible (area exceeds 5 pp/km²)
- 901.87(b) pathway: Eligible with small RPA + PVD
- Medium RPA: Would require SFOC

**Decision:** Either use a small RPA with PVD declaration, or redesign the route to avoid DA 48110569.

#### Edge Cases and Guidance

**Edge Case 1: Boundary of a Populated Area**
If your operational volume is at the edge of a populated area (>25 pp/km²), you must maintain ≥1 km buffer from that area to use 901.87(a). Use DSST-2 to measure distances carefully.

**Edge Case 2: Mixed Density Areas**
If your route crosses multiple density classifications, the HIGHEST density determines your pathway. You cannot use 901.87(a) for part of the flight and 901.87(b) for another part — the entire operation must comply with the most restrictive requirement.

**Edge Case 3: New Development**
Statistics Canada data may be from the most recent census and might not reflect new developments. If you observe significant construction or population growth not reflected in DSST-2, conduct additional verification.

### 18.3 NOTAMs — Where and How to Check

**What are NOTAMs?** Notices to Air Missions (formerly Notices to Airmen) are official notices containing information essential to personnel involved in flight operations. For RPAS, NOTAMs can restrict your operating area with little advance notice.

#### Where to Find NOTAMs

**Primary Source: NAV CANADA**
- Website: https://www.navcanada.ca/en/notam.aspx
- Also accessible through NAV Drone (integrated display)
- CFPS (Collaborative Flight Planning Services)

**Backup Sources:**
- Aviation Weather Web Site (AWWS) includes NOTAMs
- ForeFlight and similar aviation apps
- Direct from FSS (Flight Service Station) by phone

#### How to Read a NOTAM

NOTAMs use standardized ICAO format. Here's how to decode them:

**Example NOTAM:**
```
CYHZ 041200 CZQM UNTIL 041600 FOREST FIRE TFR WI 5NM OF 44.5N 63.5W SFC TO 3000FT AGL
```

**Decoded:**
| Element | Meaning |
|---------|---------|
| CYHZ | Affected location (Halifax area) |
| 041200 | Effective from 1200Z on the 4th |
| CZQM | Issued by Moncton FIC |
| UNTIL 041600 | Effective until 1600Z on the 4th |
| FOREST FIRE TFR | Temporary Flight Restriction for forest fire |
| WI 5NM OF 44.5N 63.5W | Within 5 NM of coordinates 44.5°N, 63.5°W |
| SFC TO 3000FT AGL | From surface to 3000 ft AGL |

**Local Time Conversion:**
- NOTAM times are in Zulu (UTC)
- Eastern: UTC-5 (standard) / UTC-4 (daylight)
- Central: UTC-6 (standard) / UTC-5 (daylight)
- Mountain: UTC-7 (standard) / UTC-6 (daylight)
- Pacific: UTC-8 (standard) / UTC-7 (daylight)

**Example:** 041200Z in Eastern Daylight Time = 0800 local (April 4)

#### NOTAM Types Relevant to RPAS

| NOTAM Type | What It Means | L1C Impact |
|------------|---------------|------------|
| **Forest Fire TFR** | Temporary flight restriction for firefighting | PROHIBITED within 5 NM |
| **VIP TFR** | Security restriction for dignitary | PROHIBITED within restriction |
| **Military Exercise** | Temporary military activity | Check if affects your area |
| **Aerodrome Closure** | Airport closed or limited | May affect traffic patterns |
| **Airspace Reconfiguration** | Temporary airspace changes | Verify Class G status |
| **Special Event** | Air show, balloon event, etc. | May create temporary restrictions |

#### Pre-Flight NOTAM Checklist

Before EVERY L1C flight, verify:
- [ ] No forest fire NOTAMs within 5 NM of operating area
- [ ] No TFRs affecting operating area
- [ ] No airspace reconfiguration affecting Class G status
- [ ] No military exercises creating restrictions
- [ ] NOTAMs checked within 2 hours of operation start

### 18.4 TC Drone Management Portal

**What it does:** The Transport Canada Drone Management Portal is your official source for pilot certification, RPA registration, and declaration verification.

**Website:** https://tc.canada.ca/en/aviation/drone-safety/registering-your-drone/drone-management-portal

#### Key Functions

**Checking Your Pilot Certificate:**
1. Log in to Drone Management Portal
2. Navigate to "My Certificates"
3. Verify certificate status: Active, Expired, or Suspended
4. Check recency date (must maintain within 24 months)
5. Download/print certificate if needed

**Verifying RPA Registration:**
1. Navigate to "My Aircraft"
2. Verify each RPA is registered with current information
3. Check that registration is linked to correct declarations
4. Update if aircraft sold, transferred, or modified

**Understanding Limitation Codes:**
Declarations may include limitation codes that restrict operations:
- Review any limitation codes on your RPAS declaration
- Ensure your intended operation complies with all limitations
- Contact manufacturer if limitation codes are unclear

**Checking Declaration Status:**
1. Navigate to "Declarations" or use Transport Canada's declaration lookup
2. Enter RPAS make/model or registration number
3. Verify:
   - Declaration is current (not withdrawn or expired)
   - Correct Standard 922 sections covered
   - Any limitations or conditions

#### Practical Activity: Complete Mission Evaluation

**Using these tools, evaluate a mission site at 53.5461° N, 113.4938° W for L1C compliance.**

**Your task — document the following:**

1. **Airspace Class:** Use NAV Drone to determine airspace classification
2. **Nearest Aerodrome Distance:** Use DSST-2 or CFS to identify nearest CFS/CWAS-listed aerodrome and calculate distance
3. **Population Density Classification:** Use DSST-2 to determine pp/km²
4. **Active NOTAMs:** Check NAV CANADA NOTAM site for any restrictions
5. **L1C Eligibility:** Based on findings, determine:
   - Is this location L1C eligible?
   - If yes, which pathway (901.87(a) or 901.87(b))?
   - What declaration type is required?

---

## SECTION 19: Enforcement, Penalties, and Case Studies

Understanding the real consequences of non-compliance — and learning from actual incidents — makes regulations tangible and memorable.

### 19.1 Administrative Monetary Penalties (AMPs) Framework

Transport Canada uses Administrative Monetary Penalties as a primary enforcement tool for aviation violations. The amounts depend on violation severity and whether the violator is an individual or corporation.

#### Penalty Ranges for RPAS Violations

| Violation Category | Individual Maximum | Corporation Maximum |
|-------------------|-------------------|---------------------|
| **General Part IX violations** | $1,000 | $5,000 |
| **Serious violations** (endangering safety) | $3,000 | $15,000 |
| **Reckless endangerment** | $5,000 | $25,000 |

**Additional Consequences:**
- Pilot certificate suspension (typically 30-180 days)
- Pilot certificate cancellation (permanent)
- RPOC suspension or cancellation
- Operating restrictions
- Required remedial training
- Enhanced surveillance (more frequent TC inspections)

#### Penalty Determination Factors

TC considers several factors when determining penalties:
- **Severity of the violation:** Did it create actual danger?
- **Intent:** Deliberate vs. negligent vs. inadvertent
- **History:** First offence vs. repeat violator
- **Cooperation:** Did the operator self-report? Cooperate with investigation?
- **Remediation:** Has the operator taken steps to prevent recurrence?

### 19.2 Case Study #1: TSB A21O0069 — Buttonville Drone-Aircraft Collision

**Date:** August 2021
**Location:** Buttonville Municipal Airport (CYKZ), Ontario
**Aircraft Involved:** York Regional Police DJI Matrice M210 (drone) and Cessna 172N

#### What Happened

A York Regional Police drone operator was conducting an aerial search operation near Buttonville Municipal Airport. The DJI Matrice M210 collided with a Cessna 172N that was on final approach to Runway 33 at CYKZ.

The drone struck the underside of the Cessna's right wing, causing minor damage to the wing fabric and navigation light lens. The Cessna landed safely with no injuries. The drone was destroyed.

#### Key Findings from TSB Investigation

**Finding 1: Visual Observer Training Gap**
- A visual observer was assigned to the operation
- The VO was not trained on VLOS/BVLOS requirements
- The VO was unaware of their responsibility to detect traffic
- **Lesson:** VO training is MANDATORY, not optional

**Finding 2: Authorization Bypass**
- The operation was within the control zone requiring NAV CANADA authorization
- The pilot bypassed standard authorization procedures due to "operational urgency"
- Police operations do not automatically exempt RPAS from CARs requirements
- **Lesson:** Urgency does not bypass safety procedures

**Finding 3: Task Saturation**
- The pilot was simultaneously managing:
  - Camera operation
  - Police radio communications
  - VHF aviation radio monitoring
  - Crew coordination
  - Flight control
- This excessive workload contributed to the loss of situational awareness
- **Lesson:** Task saturation is real — crew coordination is critical

**Finding 4: Checklist Non-Compliance**
- Pre-flight checklist was not retrieved before flight
- Pilot relied on memory for pre-flight procedures
- Crew briefing was incomplete
- **Lesson:** SOPs and checklists exist for a reason

#### Regulatory Outcome

This was the **first confirmed drone-aircraft collision in Canadian history**. The TSB investigation resulted in safety recommendations regarding:
- Enhanced training requirements for public safety RPAS operations
- Clearer procedures for emergency RPAS deployments
- Improved coordination between RPAS operators and ATC

#### Lessons for L1C Pilots

1. **Training for ALL crew members is mandatory** — VOs must understand their role and responsibilities
2. **SOPs exist for a reason** — urgency doesn't bypass safety procedures
3. **Task saturation is real** — properly resource your crew
4. **Use your checklists** — memory is not reliable under pressure
5. **Controlled airspace rules apply to everyone** — including emergency services

### 19.3 Case Study #2: Forest Fire Airspace Incursion (Composite)

**Note:** This is a composite case based on multiple real incidents, anonymized for training purposes.

#### What Happened

A commercial RPAS operator was conducting an agricultural survey in northern Alberta. While operating BVLOS approximately 15 km from the operator's position, a forest fire was reported 3 NM from the operating area.

The operator:
- Was aware of smoke in the distance
- Did not check NOTAMs during the operation
- Continued the survey, reasoning that "no aircraft were visible"
- Was detected by a fire suppression helicopter crew who reported the drone

#### Investigation Findings

- The operator violated CARs 601.15 (forest fire restriction)
- The operator violated CARs 901.24 (pre-flight information — no NOTAM check during extended operation)
- The helicopter crew had to alter their approach due to the drone presence
- The drone came within approximately 800m of the helicopter

#### Regulatory Outcome

- **Administrative Monetary Penalty:** $1,000
- **Pilot Certificate Suspension:** 90 days
- **Required Remedial Training:** RPAS safety course
- **Enhanced Surveillance:** Operator subject to TC inspection within 6 months

#### Lessons for L1C Pilots

1. **Forest fire restrictions are absolute** — 5 NM horizontal, 3000 ft AGL vertical
2. **"No aircraft visible" is not adequate** — firefighting aircraft may approach at any time
3. **NOTAM checks must be continuous for long operations** — conditions change
4. **Your BVLOS position provides no situational awareness** — you cannot see what's happening 15 km away
5. **Reporting is nearly automatic** — firefighting crews are trained to report drones

### 19.4 How Transport Canada Finds Violations

Understanding how violations are detected helps you appreciate why compliance matters:

#### Detection Methods

**ATC Reports**
- ATC facilities have radar that can detect RPAS in some cases
- Controllers report unauthorized operations in controlled airspace
- Approaching pilots report drone sightings to ATC
- ATC shares data with TC enforcement

**Police Reports**
- Local police respond to drone complaints
- RCMP has dedicated aviation enforcement resources
- Police can request TC enforcement action
- Police drones are also subject to CARs (as the Buttonville case shows)

**Public Complaints**
- Increasing drone awareness means more public reporting
- TC has a drone incident reporting system
- Complaints are tracked and investigated
- Repeat complaints about the same operator trigger enforcement action

**Social Media Evidence**
- Operators who post footage of illegal flights create evidence
- TC investigators monitor social media
- Metadata (location, time) in posted videos can prove violations
- "Viral" drone footage often leads to investigations

**Accident/Incident Investigations**
- Any accident or reportable incident triggers review
- TSB investigations can reveal regulatory violations
- Near-misses reported by pilots are investigated
- Insurance claims may trigger TC notification

**Random Surveillance**
- TC inspectors conduct random site visits
- Higher frequency in urban areas and near airports
- Inspectors verify documentation, declarations, and compliance
- Finding one violation often leads to discovery of others

### 19.5 Self-Reporting and Compliance

**TC's Approach to Self-Reporting:**
Transport Canada generally looks favorably on operators who:
- Self-report violations or near-misses
- Cooperate fully with investigations
- Implement corrective actions
- Demonstrate genuine commitment to safety

Self-reporting does NOT guarantee immunity from penalties, but it typically results in reduced penalties and demonstrates good faith.

**Building a Compliance Culture:**
- Document everything — flight logs, site surveys, weather checks
- Regular internal audits of your ROM and procedures
- Ongoing training beyond the minimum requirements
- Learn from industry incidents (TSB reports, industry forums)
- Report your own close calls internally and learn from them

> **Discussion Prompt:** *"A competitor in your area was caught flying illegally and fined. How might this affect you and other legitimate operators? What's the ripple effect in terms of client perception, regulatory scrutiny, and industry reputation?"*

---

## REFERENCES

### Primary Regulatory Documents

- Aeronautics Act (R.S.C., 1985, c. A-2)
- Canadian Aviation Regulations (SOR/96-433)
- Canada Gazette, Part II, SOR/2025-70 — Lower-Risk BVLOS Amendments

### Standards

- Standard 921 — Remotely Piloted Aircraft (Pilot Certification)
- Standard 922 — RPAS Safety Assurance Declarations
- Standard 923 — Vision-Based Detect and Avoid

### Advisory Circulars

- Advisory Circular AC 903-001 Issue 02 — Operational Risk Assessment (SORA)
- Advisory Circular AC 901-002 — RPOC Manual Development Guidance
- Advisory Circular AC 922-001 Issue 02 — Technical Means of Compliance for Standard 922

### SORA Documentation

- JARUS SORA v2.5 Main Body — Framework explanation and overall methodology
- JARUS SORA Annex A — Ground Risk Determination methodology
- JARUS SORA Annex B — Air Risk Determination methodology
- JARUS SORA Annex C — Operational Safety Objectives (OSOs)
- JARUS SORA Annex D — Tactical Mitigation Performance Requirements (TMPR)
- JARUS SORA Annex E — Integrity and Assurance Levels

### NAV CANADA Publications

- Canada Flight Supplement (CFS) — Aerodrome information
- Canadian Water Aerodrome Supplement (CWAS) — Water aerodrome information
- Designated Airspace Handbook (DAH) — Airspace dimensions and boundaries
- NOTAMs — Notices to Air Missions

### Transport Canada Publications

- Transport Publication TP 14371 — Aeronautical Information Manual (AIM)
- Transport Publication TP 15530 — Study and Reference Guide: Level 1 Complex Operations
- Transport Publication TP 15263 — Study and Reference Guide: Advanced Operations

### Investigation Reports

- TSB Report A21O0069 — Collision between drone and Cessna 172N, Buttonville, Ontario, 12 August 2021

### Online Tools and Resources

- NAV Drone — https://www.navcanada.ca/en/flight-planning/drone-flight-planning.aspx
- NRCAN Drone Site Selection Tool (DSST-2) — https://www.nrcan.gc.ca/maps-tools-and-publications/satellite-imagery-air-photos/drone-site-selection-tool/23143
- Transport Canada Drone Management Portal — https://tc.canada.ca/en/aviation/drone-safety
- Transport Canada "Choose the Right Drone" — Declaration verification

---

*End of Module L1C01 — Air Law, Air Traffic Rules and Procedures*
*Next Module: L1C02 — RPA Airframes, Power Plants, Propulsion, and Systems*
