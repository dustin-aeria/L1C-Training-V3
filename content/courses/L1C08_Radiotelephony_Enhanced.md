---
title: "L1C08 — Radiotelephony"
---

# L1C08 — Radiotelephony

> **Module Type:** Exam Content — TP 15530 Section 8
> **ICAO Competency Codes:** APK (Application of Procedures), KNO (Knowledge), PSD (Problem Solving and Decision Making), COM (Communication)
> **Estimated Duration:** 1.5–2 hours
> **TP 15530 Mapping:** Section 8 — Radiotelephony
> **Regulatory References:** TC AIM RAC Chapter; RIC-21 (ROC-A Study Guide); RBR-1; Radiocommunication Regulations Section 33; Canadian Table of Frequency Allocations (SF10759)

---

<div class="instructor-note-box">
<div class="instructor-note-header">
<span class="instructor-emoji">📝</span> Instructor Notes — Module Purpose
</div>
<div class="instructor-content">

Radiotelephony covers two distinct communication domains for L1C pilots: aeronautical VHF radio communication with other airspace users and ATC, and inter-crew communication between the pilot, visual observers, and other crew members. Both are critical for BVLOS safety. VHF monitoring provides awareness of manned traffic in the vicinity — an important supplement to DAA. Inter-crew communication IS the DAA system when using Standard 923 vision-based detect and avoid. If inter-crew communication fails, the DAA system has failed.

**Teaching approach:** Practice radio calls during this module. Have students compose and deliver blind broadcasts, routine ATC calls, and emergency (flyaway) broadcasts out loud. Radio communication is a skill that requires practice, not just knowledge. Play examples of real aviation radio traffic so students learn to parse radio communications at speed.

</div>
</div>

---

## LEARNING OBJECTIVES

After completing this module, you will be able to:

1. Interpret aeronautical radio communications including position and phase of flight
2. Communicate using standard radio terminology
3. Give an example of a routine blind broadcast
4. List the contents of a routine call to ATC
5. Give an example of an emergency (flyaway) broadcast
6. Distinguish between "height" and "altitude" in communications
7. Give examples of proper radio etiquette, including practices to avoid interfering with other communications
8. Describe VHF radio characteristics and their relevance to RPAS operations
9. Identify radio station licence requirements including ROC-A
10. Describe radio procedures in the traffic pattern and on enroute frequencies
11. Follow procedures and emergencies at towered airports with limited hours (TWR/MF)
12. Describe communication failure procedures and ATC contact methods
13. Describe inter-crew communication equipment selection, backup methods, and failure procedures

---

## SECTION 1: VHF Radio for RPAS Operations

![Various aviation radios used in RPAS operations](/images/radiotelephony/radios.jpg)

### 1.1 Characteristics of Very High Frequency (VHF) Radios

VHF radios operate in the 30 to 300 MHz range. The aeronautical frequency allocations within VHF are:

- **Aeronautical Radio Navigation:** 108.000 MHz to 117.975 MHz (navigation aids — VOR, ILS)
- **Aeronautical Mobile:** 117.975 MHz to 137.000 MHz (voice communication between aircraft and ground stations, and between aircraft)

**Key VHF characteristics for RPAS operations:**
- **Limited to line of sight** — VHF signals do not bend around terrain or follow the Earth's curvature. If there is a hill between your radio and the aircraft you're trying to hear, you may not receive their transmission.
- **Affected by transmit power and receiver sensitivity** — Range depends on both how powerful the transmitter is and how sensitive the receiver is.
- **Handheld units can transmit 5–10 NM but receive transmissions from much further** — This is important: even if you cannot transmit far enough to be heard by distant aircraft, you CAN hear their transmissions, building situational awareness of traffic in the area.

![Handheld VHF radios for RPAS operations](/images/radiotelephony/Handhelds.jpg)

> **Original course note:** "Ideal for communications with control towers, but suitable for close-in low-altitude aircraft. Great situational awareness tool for monitoring operations in controlled airspace."

### 1.2 Key Frequencies for L1C Operations

L1C operations occur in uncontrolled airspace (Class G), but manned aircraft operating VFR self-announce on specific frequencies. Monitoring these frequencies provides valuable traffic awareness:

**123.2 MHz** — At uncontrolled aerodromes without a published MF or ATF, this is the common frequency for the broadcast of aircraft position and the intentions of pilots flying in the vicinity of that aerodrome. (Transport Canada, 2025)

**126.7 MHz** — Pilots operating VFR en route in uncontrolled airspace when not communicating on a MF, ATF, or VFR on an airway should: continuously monitor 126.7 MHz, and whenever practicable, broadcast their identification, position, altitude, and intentions on this frequency to alert other VFR or IFR aircraft that may be in the vicinity. (Transport Canada, 2025)

**MF/ATF frequencies** — Published in the CFS for specific aerodromes. Even though L1C operations must be 5+ NM from these aerodromes, monitoring their frequency provides awareness of traffic arriving and departing that may transit through your operating area.

> **Key Concept — Hearing Traffic:** The TC AIM notes that one advantage an RPA pilot has over a pilot of a traditional aircraft is the ability to hear approaching traffic. The first indication an RPA pilot will have of approaching traffic will often be the noise from engines and/or rotors. Even though noise cues can be distorted by terrain, buildings, or wind, they are a credible means to focus attention on identifying approaching aircraft. Audio scanning should be practiced alongside visual scanning.

### 1.3 Monitoring Radio for Situational Awareness

While monitoring VHF radio, a pilot can build a mental picture of other traffic in the local area. Depending on the pilot's knowledge of aviation radio phraseology, they can use radio calls from other aircraft to determine potential hazards to the RPA operation — identifying traffic type, position, altitude, and intentions before the traffic is visible or detected by DAA.

Aviation frequencies can be found on aviation maps (VNC/VTA) and in the Canada Flight Supplement (CFS). The CFS lists the MF or ATF frequency, traffic radius, and procedures for every registered aerodrome.

**Using FltPlan Go to Find Frequencies:** FltPlan Go integrates CFS data and allows you to view aerodrome information including MF/ATF frequencies directly on the map interface. To find the frequency for a specific aerodrome: tap on the aerodrome symbol, select "Airport Info," and review the Communications section. This is faster than looking up the paper CFS during mission planning. The instructor should demonstrate this feature during class.

---

## SECTION 2: Radio Station Licences and Certification

![Radio communication tower](/images/radiotelephony/radio tower.jpg)

### 2.1 Radio Station Licence (Voice)

Operating a VHF aeronautical radio may require a radio station licence. Three categories exist:

**Aeronautical Base** — For ground-based stations: ATC towers, FBOs, UNICOM stations.

**Aeronautical Mobile** — For aircraft-installed radios. The traditional aviation radio licence category.

**Mobile Only** — For handheld radios not installed in aircraft (e.g., helicopter support crew, ground operations personnel). This is typically the most relevant category for RPAS pilots using handheld VHF radios at the GCS.

**Note:** You may need a radio station licence. Consult ISED's RBR-1 (Technical Requirements for the Operation of Mobile Stations in the Aeronautical Service) for specific requirements applicable to your operation.

### 2.2 Restricted Operator Certificate with Aeronautical Privileges (ROC-A)

In accordance with Section 33 of the Radiocommunication Regulations, a person may operate radio apparatus in the aeronautical service only where the person holds a Restricted Operator Certificate with Aeronautical Qualification (ROC-A), issued by Innovation, Science and Economic Development Canada (ISED).

A ROC-A is required by operators of radiotelephone equipment on board aircraft and at aeronautical land (fixed and mobile) radio stations using aeronautical mobile frequencies. RPAS pilots who use VHF aeronautical radios should obtain an ROC-A — it demonstrates competence in radio procedures and is required by regulation for operating on aeronautical frequencies.

The ROC-A study guide is RIC-21, available from ISED.

### 2.3 ISED Spectrum Management

Innovation, Science and Economic Development Canada (ISED) is the federal department responsible for radio frequency spectrum management in Canada. This includes:

- Allocating frequency bands for different uses (aeronautical, commercial, amateur, etc.)
- Licensing radio stations and operators
- Setting technical standards for radio equipment
- Enforcing compliance with radio regulations

The Canadian Table of Frequency Allocations (SF10759) documents all frequency allocations in Canada. RPAS operators should be aware that their C2 link frequencies (typically 900 MHz, 2.4 GHz, or 5.8 GHz ISM bands) are shared with other users and operate on an unlicensed, non-interference basis.

### 2.4 VHF Line-of-Sight Range

VHF radio range is limited to line of sight. The theoretical maximum range can be estimated using the formula:

**Range (NM) = 1.23 × (√h₁ + √h₂)**

Where h₁ = height of transmitter antenna in feet, h₂ = height of receiver antenna in feet.

For example, a ground station at 6 ft (GCS operator) communicating with an aircraft at 1,000 ft: Range = 1.23 × (√6 + √1000) = 1.23 × (2.45 + 31.6) ≈ 42 NM theoretical maximum.

In practice, actual range is significantly less due to terrain, buildings, atmospheric conditions, and equipment limitations. Handheld VHF radios typically achieve only 5-10 NM transmit range despite the theoretical formula suggesting more.

---

## SECTION 3: Radio Procedures

### 3.1 Standard Radio Terminology

L1C pilots must be able to interpret aeronautical radio communications, including understanding the position and phase of flight of reporting aircraft. Standard phraseology ensures clarity and reduces the risk of miscommunication. Key elements include: station identification, position reporting, altitude/height reporting, intentions, and acknowledgments.

### 3.2 Routine Blind Broadcast

A blind broadcast is a transmission made without expecting a response, intended to inform any listening station of your operations. RPAS pilots in uncontrolled airspace use blind broadcasts to alert manned traffic.

**Example routine blind broadcast:** "Traffic, [location name], unmanned aircraft operations, [aircraft type], operating [altitude] feet AGL, [distance and direction from nearest landmark or aerodrome], operations expected until [time]. Monitoring [frequency]."

### 3.3 Routine Call to ATC

If you need to contact ATC (e.g., to request information, or to report a situation), the contents of a routine call include: the station being called, your identification (operator name/callsign), your position (by reference to a known point), the nature of your message, and your request.

### 3.4 Emergency (Flyaway) Broadcast

If your RPA experiences a flyaway that may affect other aircraft or enter controlled airspace, you must broadcast an emergency notification.

**Example flyaway broadcast:** "[Nearest ATC facility or Traffic], this is [operator name], RPAS flyaway, [aircraft type], last known position [coordinates or description relative to known point], altitude [height] feet AGL, heading [direction if known]. Aircraft is not under control. Requesting advisory for traffic in the area. We are monitoring [frequency]."

### 3.5 Height vs. Altitude

This distinction is critical and frequently confused in radio communications:

**Height** — Vertical distance above ground level (AGL). When you say your aircraft is at "400 feet height," you mean 400 ft above the ground. RPAS typically reference height AGL.

**Altitude** — Vertical distance above mean sea level (ASL). When manned aircraft report "2,500 feet altitude," they mean 2,500 ft ASL — which might be only 500 ft above the ground depending on terrain elevation.

In radio communications with manned aviation, always clarify whether you are reporting height (AGL) or altitude (ASL). Confusing the two during a traffic conflict could lead to incorrect separation assessment.

### 3.6 Radio Etiquette

- Listen before transmitting — ensure the frequency is clear
- Keep transmissions brief and to the point
- Use standard phraseology whenever possible
- Do not interrupt other communications unless you have an emergency
- Identify yourself clearly on every transmission
- Acknowledge communications directed to you
- If uncertain whether a transmission was directed at you, ask for clarification
- Avoid "stepping on" other transmissions — wait for a clear pause before keying your radio

### 3.7 Radio Procedures at Towered Airports with Limited Hours (TWR/MF)

Some airports have ATC towers that operate only during specific hours. When the tower is open, the airport operates under MF procedures with ATC providing service. When the tower closes, the airport reverts to uncontrolled status — but may still have an MF or ATF frequency for pilot self-announcements. L1C pilots operating near (but outside 5 NM of) these airports should understand the transition between controlled and uncontrolled periods, as it affects the type and volume of traffic in the vicinity.

### 3.8 Communication Failure Procedures

If your VHF radio fails during operations, your ability to monitor traffic and broadcast your presence is lost. Communication failure procedures should address: what the pilot does (may need to cease BVLOS operations if radio monitoring is part of the DAA strategy), how to contact ATC if needed (cellular phone backup — phone app, email, phone call), and limitations/restrictions of using a handheld transmitter vs a phone.

**ATC contact methods when radio is unavailable:** Phone app (NAV Drone), email, or direct phone call to the FIC or tower. These are alternatives, not replacements — they have limitations including no real-time two-way capability, latency, and no monitoring of other traffic.

### 3.9 Enroute Frequency Procedures

L1C pilots must know how to find the appropriate enroute frequency for their operating area (from VNC charts or CFS) and how to use this information for monitoring traffic. Radio procedures on the enroute frequency involve listening for traffic position reports, building a mental model of traffic in the area, and broadcasting your own position and intentions when appropriate.

---

## SECTION 4: Inter-Crew Communication

![Drone and control station for RPAS operations](/images/radiotelephony/drone and control.jpg)

### 4.1 Communication Planning for BVLOS

Inter-crew communication between the pilot and visual observers is operationally critical in BVLOS. The operator must integrate communication planning into the ConOps, addressing five key questions:

**Method?** What technology will you use? Options include: cellular phones, FM two-way radios (walkie-talkies), direct voice (for nearby crew), or dedicated intercom systems. Each has different range, reliability, and regulatory implications.

**Backup?** What happens if the primary communication method fails? Every BVLOS operation must have a backup communication plan. If your primary method is cellular and you lose coverage, what is your fallback? If your FM radio battery dies, what do you do?

**Hands-free?** The pilot must be able to communicate with crew while simultaneously monitoring the GCS and controlling the aircraft. Headsets or speaker systems that allow hands-free operation are essential — holding a phone to your ear while managing a BVLOS emergency is not acceptable.

**Latency in communication?** Cellular and satellite communication methods introduce latency. A VO reporting traffic via cellular with 200 ms network latency adds delay to the already-critical 12.5-second detection-to-avoidance chain. Direct FM radio has negligible latency. The communication latency must be factored into your contingency volume calculations.

**Communication failure procedures?** What does the VO do if they cannot reach the pilot? What does the pilot do if they cannot reach the VO? In most SOPs, loss of inter-crew communication during BVLOS flight should trigger an immediate RTH or landing, because the DAA system (the VO) has been disconnected from the pilot who can manoeuvre the aircraft.

> **Key Concept — Communication IS DAA:** When using Standard 923 vision-based detect and avoid, the communication link between the VO and the pilot is not a convenience — it IS the detect-and-avoid system. The VO's eyes detect traffic. The communication link transmits the detection to the pilot. The pilot manoeuvres the aircraft to avoid. If any link in this chain breaks, the DAA system has failed. Plan and protect your inter-crew communication with the same rigour you would apply to any safety-critical system.

---

## SECTION 5: Knowledge Check — Radiotelephony Module

### Recall-Level Questions

**Q1.** What frequency should RPAS pilots monitor when operating VFR en route in uncontrolled airspace?
- A) 121.5 MHz
- B) 123.2 MHz
- C) 126.7 MHz
- D) 118.0 MHz
<details>
<summary>Click to reveal answer</summary>

**Answer: C.** 126.7 MHz is the frequency for VFR en route traffic in uncontrolled airspace when not on an MF, ATF, or airway frequency. 123.2 MHz is specifically for uncontrolled aerodromes without a published MF/ATF.

</details>

**Q2.** What is an ROC-A and when is it required?
- A) A drone pilot certificate required for all RPAS operations
- B) A Restricted Operator Certificate with Aeronautical Qualification, required for operating radio equipment on aeronautical mobile frequencies
- C) A maintenance certification for radio equipment
- D) A frequency allocation permit from NAV CANADA
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** Per Radiocommunication Regulations Section 33, an ROC-A issued by ISED is required to operate radio apparatus in the aeronautical service.

</details>

**Q3.** What is the difference between "height" and "altitude" in radio communications?
- A) They are the same thing
- B) Height is above ground level (AGL); altitude is above mean sea level (ASL)
- C) Height is above sea level; altitude is above ground
- D) Height is used by RPAS; altitude is used only by ATC
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** Height = AGL (above ground), altitude = ASL (above sea level). RPAS typically reference height; manned aviation references altitude. The distinction is critical for separation assessment.

</details>

**Q4.** What is the typical transmit range of a handheld VHF radio?
- A) 1–2 NM
- B) 5–10 NM
- C) 50–100 NM
- D) Unlimited with line of sight
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** Handheld VHF units can typically transmit 5–10 NM but can receive transmissions from much further. This asymmetry is valuable — you may hear traffic that cannot hear you.

</details>

### Application-Level Questions

**Q5.** You are operating BVLOS 7 NM from a small airport with a control tower that closes at 6 PM local time. It is now 5:45 PM. What changes should you anticipate in your radio monitoring and traffic awareness as the tower closes?
<details>
<summary>Click to reveal answer</summary>

**Answer:** When the tower closes, the Class D or C airspace reverts to Class E (still controlled) and traffic procedures change from ATC-directed to pilot self-announce on the MF/ATF frequency. VFR traffic that was receiving ATC separation services will now be self-separating. The frequency may become busier with self-announcement calls. Traffic may also change altitude or routing because they are no longer following ATC instructions. You should continue monitoring the MF/ATF frequency and increase your vigilance for traffic that may now be flying at lower altitudes without ATC direction — potentially bringing them closer to your operating altitude.

</details>

**Q6.** *Practical Exercise:* Compose an emergency flyaway broadcast for this scenario: Your small RPA has lost C2 link during a BVLOS pipeline survey. Last known position is 54.053°N, 112.778°W. Last known altitude is 350 ft AGL (terrain elevation approximately 2,100 ft ASL, so approximately 2,450 ft ASL). Last known heading is northeast. The nearest controlled airspace is a Class D zone at an airport 11 NM to the east. You are monitoring 126.7 MHz.

<details>
<summary>Click to reveal answer</summary>

**Model Answer:** "Traffic, 126.7, this is [operator name/callsign], RPAS flyaway. Small unmanned aircraft, [type]. Lost command and control link. Last known position 54.053 north, 112.778 west, approximately [reference to nearest known landmark]. Last known altitude approximately 2,450 ASL, 350 feet AGL. Last known heading northeast toward [airport name]. Aircraft is not under control. All traffic in the area please be advised. We are monitoring 126.7." *AND* contact the airport tower by phone if still operating, or the FIC, to ensure they are aware.

</details>

---

## SECTION 6: Discussion Prompts for Instructor-Led Session

### Radio Practice (15 minutes)
*"Each student composes and delivers three radio calls: a routine blind broadcast for your current training location, a routine call to the nearest ATC facility requesting traffic advisory, and an emergency flyaway broadcast. Class provides feedback on clarity, completeness, and standard phraseology."*

### Communication as DAA (10 minutes)
*"You are operating BVLOS with a VO positioned 4 km from the GCS. Your primary communication is cellular. Your VO's phone battery dies mid-mission with the aircraft 8 km out. What do you do? Could this have been prevented? How does your SOP address inter-crew communication failure?"*

### Hearing Traffic (5 minutes)
*"Close your eyes and listen for 30 seconds. What do you hear? In a field environment, you would be listening for engine and rotor sounds that indicate approaching aircraft. How would wind, your own RPAS motors, and environmental noise affect your ability to hear traffic? Is hearing traffic a reliable DAA method, or just a supplement?"*

### ATC Contact Methods (5 minutes)
*"Your VHF radio has failed. You need to notify ATC of a flyaway. Walk through each alternative contact method — phone app, email, phone call. How long does each take? What information do you need to have ready? Which method gets the fastest response?"*

---

---

## REFERENCES

- Canada Flight Supplement (CFS) — NAV CANADA
- Canadian Table of Frequency Allocations (SF10759) — ISED
- FltPlan Go — Flight Planning Application
- Innovation, Science and Economic Development Canada (ISED) — Spectrum Management
- Radiocommunication Regulations, Section 33
- RBR-1 — Technical Requirements for the Operation of Mobile Stations in the Aeronautical Service
- RIC-21 — ROC-A Study Guide
- TC AIM — RAC Chapter (Radio Procedures)
- Transport Canada (2025) — Aeronautical Information Manual

---

*End of Module L1C08 — Radiotelephony*
*Next Module: L1C09 — Flight Review Preparation*
