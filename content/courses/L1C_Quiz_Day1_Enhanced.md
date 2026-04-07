---
title: "Aeria Solutions L1C Quiz — Day 1"
---

# Aeria Solutions L1C Quiz — Day 1

> **Coverage:** L1C01 Air Law, L1C02 Systems
> **Total Questions:** 21 (15 Air Law + 6 Systems questions visible, plus additional Systems questions)
> **Format:** Multiple choice, True/False, Select all that apply, Fill in the blank
> **Purpose:** Formative assessment after Day 1 modules

---

## Question 1
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall

What is an Accountable Executive?

- ☐ a) An executive of a company that has control of financial and human resources that are necessary for the activities and operations authorized under the certificate
- ☐ b) The President of the company
- ☐ c) An executive in the accounting department

<details>
<summary>Click to reveal answer</summary>

**Answer: a)** An executive of a company that has control of financial and human resources that are necessary for the activities and operations authorized under the certificate.

**Why this matters:** The Accountable Executive is a specific regulatory role defined in the CARs — it is not simply the company president or any executive. This person has ultimate responsibility for aviation safety within the organization and must have authority over the resources needed to maintain safety. This concept is central to the RPOC structure covered in L1C01 and L1C06.

**Reference:** CARs SOR/96-433 Aeronautics Act

</details>

---

## Question 2
**Category:** L1C02 Systems | **Bloom's Level:** Application

Select the conditions that apply to Standard 922.09 Command and Control (C2) Link Reliability and Lost Link Behaviour.

- ☐ a) The probability of occurrence of any combination of failures that may result in a loss of control of the Remotely Piloted Aircraft (RPA) at any point in flight is shown to be remote or less.
- ☐ b) The RPA behaves predictably and consistently if positive control is lost and in a manner that assists pilots in minimizing the probability that the RPA will create a hazard.
- ☐ c) The C2 link must be in a protected spectrum dedicated to Remotely Piloted Aircraft System (RPAS) operations.

<details>
<summary>Click to reveal answer</summary>

**Answer: a) and b)** Both apply. Option c) is incorrect — there is no requirement for a protected/dedicated spectrum. RPAS C2 links commonly operate on unlicensed frequencies (900 MHz, 2.4 GHz, 5.8 GHz) as covered in L1C02 Systems.

**Why this matters:** Standard 922.09 focuses on two things: reliability (failures leading to loss of control must be "remote or less") and predictability (the aircraft must behave consistently when control is lost). The lost-link behaviour must be programmable and known before flight — this directly connects to the contingency volume calculations in L1C06.

**Reference:** Standard 922 — RPAS Safety Assurance, CARs

</details>

---

## Question 3
**Category:** L1C02 Systems | **Bloom's Level:** Application

If a traditional aircraft altimeter indicates 2,300ft, and a Remotely Piloted Aircraft System (RPAS) Ground Control Station (GCS) indicates a true altitude of 2,300ft above sea level, are the 2 aircraft at the same altitude relative to each other?

- ☐ a) Yes
- ☐ b) No
- ☐ c) Yes, but only if the outside temperature is at International Standard Atmosphere (ISA)

<details>
<summary>Click to reveal answer</summary>

**Answer: c)** Yes, but only if the outside temperature is at ISA. A traditional aircraft altimeter is calibrated to indicate true altitude only in ISA conditions. Any deviation from ISA temperature causes the altimeter to indicate incorrectly — in cold air, the aircraft is lower than indicated; in warm air, higher. The RPAS GCS may derive altitude differently (barometric + GPS), so the two readings only agree when ISA conditions eliminate temperature error from the manned aircraft's altimeter.

**Why this matters:** This is the "high to low, watch out below" concept from L1C04 Meteorology and the altimeter errors discussion in L1C02 Systems. Understanding that RPAS and manned aircraft may reference altitude differently is critical for separation — especially during traffic conflicts reported via radio.

**Reference:** *From the Ground Up*, "Theory of Flight" (MacDonald, 2025)

</details>

---

## Question 4
**Category:** L1C02 Systems | **Bloom's Level:** Recall

Telemetry data has a much higher bitrate than that of a video transmitter.

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: b) False.** Video transmission requires significantly higher bitrate than telemetry. Telemetry data (position, altitude, battery voltage, motor RPM) is relatively small — a few kilobits per second. Video transmission requires megabits per second. This is why video links are more susceptible to range limitations and interference than telemetry links — they consume more bandwidth.

**Reference:** L1C02 Systems — Data Transmission Properties

</details>

---

## Question 5
**Category:** L1C02 Systems | **Bloom's Level:** Recall

Mandatory action means the inspection, repair, or modification of a Remotely Piloted Aircraft System (RPAS) is necessary to prevent an unsafe or potentially unsafe condition.

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: a) True.** A mandatory action (similar to an Airworthiness Directive in manned aviation) requires the operator to perform specific inspection, repair, or modification to prevent an unsafe condition. Failure to comply means the RPAS should not be flown.

**Reference:** CARs SOR/96-433 Aeronautics Act

</details>

---

## Question 6
**Category:** L1C02 Systems | **Bloom's Level:** Recall

Mode A and Mode C transponders repeatedly broadcast their location to other aircraft.

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: b) False.** Mode A and Mode C transponders are *secondary surveillance radar* — they only respond when interrogated by a radar station or TCAS-equipped aircraft. They do NOT broadcast continuously. Mode A provides identification (squawk code) and Mode C adds pressure altitude. Only ADS-B Out transmits continuously without interrogation.

**Why this matters:** Understanding transponder limitations affects DAA planning. You cannot rely on detecting Mode A/C-only aircraft with a passive receiver — you need an active interrogator or must rely on ADS-B In (which only detects ADS-B Out equipped aircraft).

**Reference:** *From the Ground Up*, "Radio Navigation" (MacDonald, 2025); L1C02 Systems — Transponders and ADS-B

</details>

---

## Question 7
**Category:** L1C02 Systems | **Bloom's Level:** Recall

On an aircraft with an internal combustion engine, fuel to power the motor is considered a payload.

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: b) False.** Fuel is part of the aircraft's operating weight, not its payload. Payload is defined as items carried by the aircraft that are not part of the aircraft system itself — sensors, cameras, cargo, etc. Fuel (or batteries in electric aircraft) powers the aircraft and is part of the system weight.

**Reference:** CARs SOR/96-433 Aeronautics Act; L1C02 Systems — Payloads

</details>

---

## Question 8
**Category:** L1C02 Systems | **Bloom's Level:** Recall

Real-Time Kinematic (RTK) requires a base station to calculate a GPS correction and broadcast that correction to a rover (Remotely Piloted Aircraft System [RPAS]).

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: a) True.** RTK GPS uses a stationary base station at a known position to calculate the difference between its known position and the GPS-indicated position. This correction is broadcast to the rover (the RPAS), which applies it to achieve centimetre-level accuracy. Without the base station, RTK cannot function.

**Reference:** L1C02 Systems — GNSS and Navigation Accuracy

</details>

---

## Question 9
**Category:** L1C02 Systems | **Bloom's Level:** Application

A traditional aircraft altimeter will always indicate true altitude.

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: b) False.** A traditional barometric altimeter only indicates true altitude when ISA conditions exist and the correct altimeter setting is applied. Temperature deviations from ISA, incorrect altimeter settings, and mountain wave effects all cause the altimeter to indicate incorrectly. This is why the phrase "high to low, watch out below" exists — and why RPAS altitude references (barometric + GPS from launch point) differ from manned aircraft altimeter references.

**Reference:** *From the Ground Up*, "Theory of Flight" (MacDonald, 2025); L1C04 Meteorology — Altimeter Errors

</details>

---

## Question 10
**Category:** L1C01 Air Regs | **Bloom's Level:** Application

What is the reason for the advisory area of CYA 102, Black Rock, BC? **Source:** *Designated Airspace Handbook*

- ☐ a) Acrobatic
- ☐ b) Military operations
- ☐ c) Training
- ☐ d) Aircraft test area

<details>
<summary>Click to reveal answer</summary>

**Answer: b) Military operations.** CYA designations use letter codes to indicate the type of activity. Students must be able to look up Class F airspace designations in the Designated Airspace Handbook (DAH) — a critical site survey skill for L1C operations.

**Why this matters:** Even though L1C operations occur in Class G uncontrolled airspace, Class F advisory areas may overlap with or be adjacent to your operating area. Knowing what activity occurs in nearby CYA areas helps assess air risk.

**Reference:** Designated Airspace Handbook (NAV CANADA, 2025); L1C01 Air Law — Class F Airspace

</details>

---

## Question 11
**Category:** L1C01 Air Regs | **Bloom's Level:** Application

Are all manufacturers required to make a declaration against Standard 922.10 Detect, Alert, and Avoid (DAA) systems? (In other words, are all Remotely Piloted Aircraft System [RPAS] manufacturers required to have an onboard DAA system?)

- ☐ a) No
- ☐ b) Yes
- ☐ c) No, but it is acceptable for the operator to use (human) vision-based DAA in accordance with Standard 923

<details>
<summary>Click to reveal answer</summary>

**Answer: c)** Standard 922.10 DAA is optional — manufacturers are NOT required to have onboard DAA. However, L1C operations still require a DAA capability. If the RPAS does not have onboard DAA declared under 922.10, the operator must use human vision-based DAA under Standard 923 (visual observers).

**Why this matters:** This is a fundamental L1C concept — most current RPAS do not have onboard DAA systems sophisticated enough for a 922.10 declaration. The vast majority of L1C operations will use Standard 923 VO-based DAA, which is why crew communication and VO placement are so heavily emphasized in L1C06 and L1C08.

**Reference:** CARs 901.95(2) and Standard 922.10

</details>

---

## Question 12
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall (Select All)

Select all of the applicable content that is required in a Remotely Piloted Aircraft System (RPAS) Operations Manual for the holder of an RPAS Operating Certificate (RPOC).

- ☐ a) A description of the roles and responsibilities of crew members before, during, and after a flight
- ☐ b) A description of the roles and responsibilities of all operational and maintenance personnel and the hierarchy and chain of command within management
- ☐ c) Safety processes
- ☐ d) Normal and emergency procedures
- ☐ e) Training program syllabus and a description of personnel training and qualifications

<details>
<summary>Click to reveal answer</summary>

**Answer: a), b), c), d), e) — ALL are applicable.** These are the five required elements of the RPAS Operations Manual under CARs 901.217, as covered in L1C01 Air Law and L1C06 Flight Operations.

**Reference:** CARs SOR/96-433, Section 901.217

</details>

---

## Question 13
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall

What is the minimum altitude an aeroplane may overfly within 2,000ft horizontally of a built-up area?

- ☐ a) 500ft Above Ground Level (AGL)
- ☐ b) 1,000ft AGL
- ☐ c) 1,000ft above the highest obstacle located within a horizontal distance of 2,000ft from the aeroplane

<details>
<summary>Click to reveal answer</summary>

**Answer: c)** 1,000ft above the highest obstacle located within a horizontal distance of 2,000ft from the aeroplane. This is important for RPAS pilots to understand because it tells you where manned traffic will be flying near built-up areas — at or above 1,000 ft above obstacles. RPAS operating at 400 ft AGL are well below this minimum, which provides vertical separation.

**Reference:** CARs SOR/96-433 Aeronautics Act; L1C01 Air Law — Part VI General Operating Rules

</details>

---

## Question 14
**Category:** L1C01 Air Regs | **Bloom's Level:** Application

If a Remotely Piloted Aircraft System (RPAS) has been modified, is the safety assurance declaration or pre-validated declaration still valid?

- ☐ a) Yes
- ☐ b) No
- ☐ c) Yes, if the RPAS modifier has made a new declaration to the Minister

<details>
<summary>Click to reveal answer</summary>

**Answer: c)** The original declaration is invalidated by modification. However, the modifier can make a new declaration to the Minister covering the modified system. This is critical — adding sensors, changing propellers, or modifying the airframe may void your existing declaration. You must either operate within the original declared configuration or obtain a new declaration.

**Reference:** Advisory Circular (AC) No. 922-001; L1C01 Air Law — Division XI Declarations

</details>

---

## Question 15
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall

What is a Remotely Piloted Aircraft System (RPAS) Operator?

- ☐ a) An RPAS pilot
- ☐ b) Any crew member of an RPAS operation
- ☐ c) The President of the company
- ☐ d) The holder of the RPAS Operator Certificate (RPOC)

<details>
<summary>Click to reveal answer</summary>

**Answer: d)** The RPAS Operator is specifically defined as the holder of the RPAS Operator Certificate (RPOC). This is a regulatory term — the "operator" is the entity (individual or organization) that holds the RPOC, not any individual crew member.

**Reference:** CARs SOR/96-433 Aeronautics Act

</details>

---

## Question 16
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall

When a helicopter is arriving at an uncontrolled aerodrome that lies within a Mandatory Frequency (MF) area, how long in advance must the pilot of the helicopter broadcast their intentions?

- ☐ a) 5 minutes
- ☐ b) 2 minutes
- ☐ c) No broadcast is required at an uncontrolled aerodrome
- ☐ d) 20 minutes

<details>
<summary>Click to reveal answer</summary>

**Answer: a) 5 minutes.** This is relevant for RPAS pilots because it tells you when to expect inbound traffic at nearby aerodromes — if you are monitoring the MF frequency, you will hear position reports at least 5 minutes before arrival. This gives you time to assess whether the traffic poses a conflict with your BVLOS operation.

**Reference:** CARs SOR/96-433 Aeronautics Act

</details>

---

## Question 17
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall

With respect to wildfires, *CARs 601.15* states that no person shall operate an aircraft over any area that is located within how many nautical miles of a forest fire area?

- ☐ a) 3 nautical miles
- ☐ b) 5 nautical miles
- ☐ c) 10 nautical miles
- ☐ d) 2 nautical miles

<details>
<summary>Click to reveal answer</summary>

**Answer: b)** 5 nautical miles. The 5 NM restriction around forest fires applies to ALL aircraft including RPAS. This is one of the absolute no-go conditions for any RPAS operation — no exceptions without specific authorization.

**Reference:** CARs SOR/96-433, Section 601.15; L1C01 Air Law — Forest Fire Restrictions

</details>

---

## Question 18
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall

Class F airspace is always considered controlled airspace.

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: b) False.** Class F airspace can be either restricted (CYR — essentially controlled, entry prohibited without authorization) or advisory (CYA — not controlled, but pilots are advised of the activity occurring within). The designation system uses letters after "CYR" or "CYA" to indicate the type of activity. Class F is a special-use designation that overlays the underlying airspace class.

**Reference:** TC AIM RAC 2.8.6; L1C01 Air Law — Class F Airspace

</details>

---

## Question 19
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall

It is acceptable to operate a Remotely Piloted Aircraft System (RPAS) while under the influence of a medication that impairs faculties if that medication has been prescribed by a doctor.

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: b) False.** A doctor's prescription does not override the prohibition on operating an aircraft while impaired. If a medication impairs your faculties (judgment, reaction time, cognitive function, vision), you may not operate an RPAS regardless of whether the medication was prescribed. This is covered in L1C03 Human Factors under the IM SAFE self-assessment.

**Reference:** CARs SOR/96-433 Aeronautics Act; L1C03 Human Factors — Crew Fitness

</details>

---

## Question 20
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall

A Remotely Piloted Aircraft System (RPAS) Operator Certificate (RPOC) is required to conduct Level 1 Complex (L1C) Beyond Visual Line of Sight (BVLOS) operations.

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: a) True.** The RPOC is one of the three pillars of L1C operations (Pilot + Procedure + Platform = the 3P framework). You cannot conduct L1C BVLOS operations without an RPOC.

**Reference:** CARs 901.88; L1C01 Air Law — Division VI L1C Procedures; L1C06 Flight Operations

</details>

---

## Question 21
**Category:** L1C01 Air Regs | **Bloom's Level:** Recall

A Remotely Piloted Aircraft System (RPAS) operator is not required to maintain an RPAS Operations Manual (ROM) if the organization has only one RPAS pilot.

- ☐ a) True
- ☐ b) False

<details>
<summary>Click to reveal answer</summary>

**Answer: b) False.** The RPAS Operations Manual is required for ALL RPOC holders regardless of organization size. Even a sole operator must maintain an operations manual covering all five required elements under CARs 901.217.

**Reference:** CARs SOR/96-433 Aeronautics Act; L1C01 Air Law — RPOC Manual Requirements

</details>

---

*End of Day 1 Quiz*
