---
title: "L1C03 — Human Factors"
---

# L1C03 — Human Factors

> **Module Type:** Exam Content — TP 15530 Section 3
> **ICAO Competency Codes:** SAW (Situational Awareness), KNO (Knowledge), LTW (Leadership and Teamwork), WLM (Workload Management), PSB (Professional Standards and Behaviours)
> **Estimated Duration:** 2.5–3 hours
> **TP 15530 Mapping:** Section 3 — Human Factors
> **Regulatory References:** CARs 901.218, 901.219; TP 12863/TP 12864; TC AIM RPA Chapter (crew fitness); JARUS Methodology for Evaluation of Automation

---

<details>
<summary>Instructor Notes — Module Purpose</summary>

Human Factors is arguably the most important module for BVLOS operations. In VLOS, the pilot's direct sensory connection to the aircraft provides a natural safety buffer — you can see, hear, and intuitively sense problems. In BVLOS, this natural buffer disappears entirely. Every piece of situational awareness must be consciously constructed from instrument data, telemetry, checklists, and crew communication. Human Factors training is what prepares pilots to maintain performance in this fundamentally different cognitive environment.

**Teaching approach:** This module is the most discussion-oriented in the course. Human factors cannot be learned by memorizing definitions — students need to recognize these patterns in their own experience and behaviour. Use the HFACS framework to analyze real incidents. Ask students to identify their own hazardous attitude tendencies. Make it personal.

**Common student misconceptions:**
- "Human factors is soft stuff — the real content is in Systems and Air Law." → Human error is the primary cause of 70–80% of aviation accidents (including RPAS incidents). The Boeing Statistical Summary of Commercial Jet Airplane Accidents consistently shows human factors as the dominant accident cause category. According to Boeing data, flight crew error is a causal factor in approximately 53% of fatal accidents, making it the single largest contributor to aviation accidents worldwide.
- "I'm experienced — complacency doesn't apply to me." → Complacency is MORE dangerous for experienced operators. The 500th flight feels routine, which is precisely when critical checks get skipped.
- "My drone flies itself — automation handles everything." → Automation complacency is one of the most significant RPAS-specific human factors risks. When the system is doing the flying, the pilot's attention drifts, and they may not notice degrading conditions until they become critical.

</details>

---

## LEARNING OBJECTIVES

After completing this module, you will be able to:

| # | Objective |
|---|-----------|
| 1 | Describe good scanning techniques for visual observers detecting conflicting aircraft |
| 2 | Describe perspective illusion and its impact on judging distance to aircraft |
| 3 | Describe factors that affect alertness and the negative impact of fatigue on operations |
| 4 | Describe the effects of environmental factors on RPA operator performance |
| 5 | List the five hazardous attitudes in aviation and their antidotes |
| 6 | Describe the Dirty Dozen human factors preconditions |
| 7 | Recall James Reason's Unsafe Acts Model (slips, lapses, mistakes, violations) |
| 8 | Describe the full HFACS framework and apply it to incident analysis |
| 9 | Describe the importance of CRM in RPAS operations |
| 10 | Describe RPAS-specific human factors: lack of shared fate, automation complacency, and situational awareness degradation in BVLOS |
| 11 | Explain the IM SAFE checklist and crew fitness requirements including alcohol and cannabis rules |
| 12 | Describe the risk management process and apply the risk rating matrix |
| 13 | Describe the safety processes required under CARs 901.218 and the four pillars of SMS |
| 14 | Explain the benefits of SOPs, how to manage checklist interruptions, and the effects of reliance on automation |

---

## SECTION 1: Human Factors Science — Why This Matters

### 1.1 The Study of Human Performance in Aviation

Human Factors is the scientific study of how human capabilities and limitations interact with the systems, environment, and tasks involved in aviation operations. Researchers study the impact of these conditions on the rate of accidents and fatalities:

| Factor | Impact on Operations |
|--------|---------------------|
| **Fatigue** | Degraded alertness, reaction time, and decision-making |
| **Complacency** | Reduced vigilance due to familiarity and routine |
| **Decision making** | Errors in judgment under time pressure, uncertainty, or stress |
| **Physiological effects** | Temperature, noise, vibration, lighting affecting performance |
| **Errors/mistakes** | Unintentional actions that deviate from the intended outcome |
| **Communication** | Breakdowns between crew members, with ATC, or with clients |
| **Situational awareness** | The perception, comprehension, and projection of the operational environment |

Civil aviation authorities and airlines train crew members in human factors because decades of accident investigation have shown that the human operator is both the most capable and the most vulnerable component in any aviation system. The aircraft rarely breaks itself without human contribution to the causal chain.

> **Key Concept for BVLOS:** In manned aviation, human factors training addresses a pilot who is physically inside the aircraft, sharing the environment and the consequences. In RPAS — especially BVLOS — the pilot is separated from the aircraft. This separation creates unique human factors challenges that do not exist in manned aviation.

---

## SECTION 2: Aviation Physiology

### 2.1 Visual Scanning for Visual Observers

A Transportation Safety Board (TSB) of Canada study shows it typically takes a pilot **12.5 seconds** to identify and react to conflicting aircraft, progressing through four stages:

| Stage | Action | Description |
|-------|--------|-------------|
| 1 | **Seeing** | The aircraft enters the observer's field of vision |
| 2 | **Recognizing** | The observer identifies the object as an aircraft (not a bird, debris, etc.) |
| 3 | **Understanding** | The observer determines that the aircraft is on a collision course |
| 4 | **Adjusting** | The observer communicates with the pilot, who manoeuvres the RPA to avoid collision |

12.5 seconds is a significant amount of time. At typical GA approach speeds of 100 knots, a manned aircraft covers approximately 500 metres in 12.5 seconds. For visual observers using Standard 923 DAA, this means traffic must be detected at sufficient distance to allow the full see-recognize-understand-adjust sequence to complete before the conflict point.

**Good scanning techniques for visual observers:**

| Technique | Description |
|-----------|-------------|
| **Systematic pattern** | Don't randomly scan. Divide the sky into sectors and scan each sector sequentially. |
| **Small eye movements** | Move your eyes in small, overlapping steps rather than sweeping continuously. The human eye detects movement at the periphery but can only identify objects when focused directly. |
| **Screen breaks** | Take breaks from looking at GCS displays before scanning the sky — your eyes need time to readjust to distance focusing. |
| **Audio scanning** | Listen for approaching aircraft engines, especially in quiet rural environments where L1C operations typically occur. |

**Detection probability rates:** Research on visual detection of aircraft shows that detection probability varies significantly with scan technique:

| Scanning Method | Detection Rate | Notes |
|-----------------|----------------|-------|
| No systematic scan | ~10-15% | Random glances, easily distracted |
| Sector-by-sector scan | ~40-50% | Systematic coverage of entire hemisphere |
| Audio-cued visual search | ~60-70% | Sound directs visual attention |
| Combination (systematic + audio) | ~75-85% | Multiple cues improve detection |

These rates assume unobstructed visibility and alert observers. Factors like fatigue, distraction, sun glare, and background clutter significantly reduce detection rates. This is why multiple VOs with overlapping sectors are recommended for L1C operations.

### 2.2 Perspective Illusion

When observing distant aircraft, perspective illusion can cause incorrect judgments about the aircraft's distance, speed, and whether it is on a collision course. A constant-bearing, decreasing-range (CBDR) target — one on a direct collision course — appears stationary in your field of view. It does not appear to move laterally; it simply gets larger. This makes collision-course traffic the hardest to detect visually, because the human visual system is optimized to detect movement, not static objects that are slowly growing.

### 2.3 Factors Affecting Alertness

Alertness is affected by sleep quality and quantity, circadian rhythm (time of day), workload (both overload and underload), environmental conditions (temperature, noise, comfort), hydration and nutrition, stress, and medications. In BVLOS operations, where missions can be long and repetitive (e.g., multi-hour survey flights), alertness degradation is a significant concern — especially for visual observers who must maintain continuous airspace scanning.

### 2.4 Fatigue

Fatigue is as dangerous as drugs or alcohol when it comes to impairment and is often harder to detect. Fatigue influences judgment, motor response, and mental capability. Its effects can be present without the person realizing it, making it particularly dangerous.

Factors contributing to fatigue extend beyond just sleep: lack of sleep, work-related stress, family issues, emotional state, and general health all contribute. Transport Canada's Fatigue Risk Management System (FRMS) Toolbox provides a comprehensive guide to understanding, managing, and mitigating fatigue risks.

### 2.5 Environmental Effects on Operator Performance

RPAS pilots in the field face environmental stressors that office-based workers do not:

| Stressor | Effect on Operator |
|----------|-------------------|
| **Cold** | Reduces manual dexterity (affecting controller operation), impairs cognitive function, and shortens battery life |
| **Heat** | Causes dehydration, heat exhaustion, and reduces concentration |
| **Sun glare** | Makes GCS screens difficult to read, reducing telemetry awareness |
| **Wind** | Creates noise that interferes with communication and audio scanning |
| **Rain/precipitation** | Distracts the pilot, may damage equipment, reduces VO visibility |
| **Altitude** | At operational altitudes for the pilot, altitude effects are minimal, but in mountainous terrain, even moderate elevations can affect some individuals |

---

## SECTION 3: Aviation Psychology

### 3.1 The Five Hazardous Attitudes

Transport Canada identifies five hazardous attitudes that interfere with safe decision-making. Every pilot is susceptible to these — recognizing them in yourself is the first step to managing them:

| Attitude | Phrase | Description | Antidote |
|----------|--------|-------------|----------|
| **Macho** | "I already know how to do it." | The belief that you can handle anything, that rules and procedures are for less experienced pilots. Leads to taking unnecessary risks. | "Taking chances is foolish." |
| **Impulsivity** | "Do it quickly." | The urge to act immediately without thinking through consequences. In BVLOS, impulsive actions can create situations that are impossible to recover from. | "Not so fast. Think first." |
| **Resignation** | "What's the use?" | The feeling that you have no control over the outcome. Leads to passive acceptance of deteriorating conditions rather than active intervention. | "I'm not helpless. I can make a difference." |
| **Invulnerability** | "It won't happen to me." | The belief that accidents happen to other people — less experienced, less skilled, less careful people. Prevents pilots from taking precautions. | "It could happen to me." |
| **Anti-Authoritarian** | "Don't tell me what to do." | Resentment of rules, procedures, and oversight. Leads to skipping checklists, ignoring SOPs, and disregarding regulatory requirements. | "Follow the rules. They are usually right." |

> **Discussion Prompt #1:** *"Which of the five hazardous attitudes do you think you are most susceptible to? Think of a specific situation in your RPAS experience where one of these attitudes influenced your decision-making — even if nothing went wrong."*

### 3.2 James Reason's Unsafe Acts Model — The Swiss Cheese Model

James Reason's model describes how accidents occur when multiple layers of defence are breached simultaneously — like the holes in slices of Swiss cheese aligning to allow a hazard to pass through every barrier.

Each "slice of cheese" represents a layer of defence: regulations, training, SOPs, checklists, equipment redundancy, crew cross-checks. Each "hole" represents a weakness in that layer. Accidents rarely result from a single failure — they result from a chain of failures where multiple holes align.

**Reason's second level — Unsafe Acts — classifies human failures as:**

**ERRORS (Unintended Actions):**

| Type | Definition | Example |
|------|------------|---------|
| **Slip** | Correct action intended → Executed incorrectly | Meaning to select "Return to Home" but pressing "Flight Terminate" because the buttons are adjacent |
| **Lapse** | Correct action intended → Forgotten or omitted | Forgetting to check NOTAMs before a BVLOS mission because you were distracted by client communication |
| **Mistake** | Incorrect action deliberately chosen → Flawed reasoning | Continuing into deteriorating weather because you incorrectly assessed the wind limits of your RPAS |

**VIOLATIONS (Deliberate Deviations):**

| Type | Definition | Example |
|------|------------|---------|
| **Routine Violation** | Habitual non-compliance → Normalized behaviour | Routinely skipping compass calibration because "it always works fine" |
| **Exceptional Violation** | One-time deviation → Unusual circumstances | Flying beyond the declared boundary because the client's asset is 200 m outside the planned area |

### 3.3 The HFACS Framework

The Human Factors Analysis and Classification System (HFACS) provides a comprehensive framework for analyzing the causes of human error at four levels. It extends Reason's model from individual acts up through organizational influences:

| Level | Category | Description |
|-------|----------|-------------|
| **Level 1** | **Unsafe Acts** | The actions (or inactions) of the operator that directly led to the incident. Includes errors (skill-based, decision, perceptual) and violations (routine, exceptional). |
| **Level 2** | **Preconditions for Unsafe Acts** | The conditions that set the stage for unsafe acts. See breakdown below. |
| **Level 3** | **Unsafe Supervision** | Supervisory actions or inactions that contribute to the conditions for unsafe acts. See breakdown below. |
| **Level 4** | **Organizational Influences** | The highest-level factors that shape the operational environment. See breakdown below. |

**Level 2 — Preconditions Breakdown:**

| Category | Description |
|----------|-------------|
| **Environmental Factors** | Physical environment (weather, terrain, workspace) and technological environment (equipment design, GCS interface, automation) |
| **Conditions of Operators** | Adverse mental states (complacency, distraction, channelized attention), adverse psychological states (stress, anxiety, anger), and physical/mental limitations (fatigue, illness, impairment) |
| **Personal Factors** | Routine (personal readiness, fitness for duty) and Crew Resource Management (communication, coordination, teamwork) |

**Level 3 — Unsafe Supervision Breakdown:**

| Category | Description |
|----------|-------------|
| **Inadequate Supervision** | Failure to provide guidance, oversight, or training |
| **Planned Inappropriate Operations** | Authorizing operations that exceed crew capabilities, equipment limitations, or regulatory boundaries |
| **Failure to Correct Problem** | Knowing about a safety issue and not addressing it |
| **Supervisory Violations** | Supervisors who themselves violate rules or authorize violations |

**Level 4 — Organizational Influences Breakdown:**

| Category | Description |
|----------|-------------|
| **Resource Management** | Budget, equipment, staffing, and time pressure decisions |
| **Organizational Climate** | The culture of safety (or lack thereof) within the organization |
| **Organizational Process** | SOPs, training programs, oversight processes, and operational tempo |

> **Scenario for HFACS Analysis:** *A pilot conducting a BVLOS pipeline survey crashes the RPA into a power line. Investigation reveals: (L1) The pilot was focused on GCS telemetry and missed the power line on the terrain display (channelized attention — perceptual error). (L2) The pilot had been working 12 hours and was fatigued (adverse mental state / physical limitation). (L3) The supervisor scheduled the mission as the last task of a 14-hour work day (planned inappropriate operations). (L4) The company routinely schedules back-to-back missions to maximize billable hours (organizational process / resource management). At which level should corrective action focus?*

### 3.4 The Dirty Dozen

Transport Canada identifies twelve common human factors preconditions for errors and violations. These are available as TC aviation safety posters and should be memorized:

| # | Factor | Description |
|---|--------|-------------|
| 1 | **Lack of Communication** | Failure to transmit, receive, or understand critical information between crew members, ATC, or stakeholders |
| 2 | **Complacency** | Self-satisfaction with existing conditions, leading to relaxed vigilance and missed warning signs |
| 3 | **Lack of Knowledge** | Insufficient training, education, or experience to perform tasks safely and correctly |
| 4 | **Distraction** | Attention diverted from the primary task by external events, internal thoughts, or interruptions |
| 5 | **Lack of Teamwork** | Failure to work cooperatively toward common goals; poor coordination between crew members |
| 6 | **Fatigue** | Physical or mental exhaustion that degrades alertness, judgment, and reaction time |
| 7 | **Lack of Resources** | Insufficient tools, equipment, documentation, personnel, or time to complete tasks safely |
| 8 | **Pressure** | Real or perceived demands to meet schedules, budgets, or expectations that compromise safety |
| 9 | **Lack of Assertiveness** | Failure to speak up about safety concerns due to hierarchy, intimidation, or conflict avoidance |
| 10 | **Stress** | Mental or emotional strain from personal, professional, or environmental factors |
| 11 | **Lack of Awareness** | Failure to perceive or recognize hazards, conditions, or the consequences of actions |
| 12 | **Norms** | Acceptance of deviation from standards as "the way we do things here" — normalized non-compliance |

---

## SECTION 4: RPAS-Specific Human Factors

### 4.1 Lack of Shared Fate

In manned aviation, the pilot shares the consequences of every decision with the aircraft. A decision to fly into dangerous weather puts the pilot's own life at risk. This "shared fate" creates a powerful, instinctive motivation for conservative decision-making.

In RPAS operations, the pilot is on the ground. A crash destroys the aircraft — it does not kill the pilot. This fundamental difference can subtly shift risk tolerance. Pilots may accept levels of risk that they would never accept if they were onboard. This is not conscious recklessness — it is an unconscious reduction in the urgency of safety margins.

**Mitigating lack of shared fate:** Consciously remind yourself that even though you are safe on the ground, your RPA operates in shared airspace. A crash can injure people on the ground, damage property, or cause a mid-air collision with a manned aircraft whose occupants DO share fate with your decision-making.

### 4.2 Automation Complacency

When an autopilot flies the aircraft along a pre-programmed route, the pilot's role shifts from "flying" to "monitoring." Monitoring is psychologically demanding — maintaining vigilance over a system that is performing normally is one of the hardest cognitive tasks humans face. Research consistently shows that monitoring performance degrades significantly after 15–20 minutes of uneventful operation.

In BVLOS, automation complacency is compounded by the absence of visual cues. In VLOS, you can see the aircraft behaving normally even when you're not actively controlling it. In BVLOS, "normal" means numbers on a screen that aren't changing — which is exactly what you would see whether everything is fine OR if your telemetry link has frozen and is displaying stale data.

**Mitigating automation complacency:**
- Set regular interval checks — every 60 seconds, actively verify a different system parameter (battery, GPS, C2 link quality, wind speed, altitude)
- Cross-reference multiple data sources — if your GCS shows the aircraft at 300 ft, does the battery consumption rate match what you'd expect at that altitude?
- Practice manual interventions periodically — don't let your manual flying skills atrophy through exclusive reliance on automation
- Establish "gates" in your mission planning — specific waypoints where you actively assess go/no-go for the next segment

### 4.3 Responsibility for Flight Termination

Unlike manned aviation where the pilot's natural instinct is to save the aircraft (because they are in it), RPAS pilots may face the decision to deliberately terminate a flight — to crash their aircraft — to prevent a worse outcome. This decision is psychologically difficult: it requires deliberately destroying expensive equipment when the situation might still be recoverable. The tendency to delay flight termination ("maybe the link will come back," "maybe the wind will die down") can lead to worse outcomes than acting decisively.

### 4.4 Disposability of the RPA

The perception that the aircraft is "disposable" (compared to a manned aircraft) can lead to reduced maintenance discipline, more aggressive operational decisions, and acceptance of degraded system states. While a $2,000 drone is certainly more replaceable than a $200,000 helicopter, the consequences of its failure in shared airspace are not proportionally less serious.

---

## SECTION 5: Threat and Error Management (TEM)

### 5.1 The TEM Model

TEM provides a practical framework for managing threats and errors in real-time operations:

| Concept | Definition | Examples |
|---------|------------|----------|
| **Threats** | Events or conditions external to the pilot that increase operational complexity and require management | Deteriorating weather, unexpected air traffic, terrain masking of C2 link, client pressure |
| **Errors** | Pilot actions or inactions that deviate from intentions or expectations. Errors are inevitable — the goal is to detect and manage them. | Incorrect waypoint entry, missed checklist item, misread telemetry |
| **Undesired Aircraft States** | Conditions where the aircraft is outside normal operational parameters | Deviation from planned route, altitude exceedance, proximity to obstacles, controlled airspace incursion, loss of C2 link |

**The TEM Process:**

| Step | Action |
|------|--------|
| **Anticipate** | Identify threats during planning |
| **Recognize** | Detect threats and errors during operations |
| **Manage** | Address threats and errors before they become undesired states |
| **Recover** | Return from undesired states if they occur |

### 5.2 Building Situational Awareness

Situational awareness has three levels:

| Level | Question | Examples |
|-------|----------|----------|
| **Level 1 — Perception** | What is happening right now? | Reading telemetry, observing weather, hearing traffic calls |
| **Level 2 — Comprehension** | What does it mean? | Interpreting the telemetry, understanding the weather trend, recognizing the traffic conflict |
| **Level 3 — Projection** | What will happen next? | Predicting how conditions will evolve, anticipating where traffic will be in 30 seconds, projecting whether battery will be sufficient for RTH |

In BVLOS, Level 1 SA is entirely dependent on instruments and technology. If your telemetry display doesn't show a piece of information, you don't have it. This makes the design and monitoring of your GCS display a critical human factors consideration.

> **Discussion Prompt #2:** *"Describe a situation where you had good Level 1 SA (you could see the data) but poor Level 2 SA (you didn't understand what it meant). What was the consequence? What would you do differently now?"*

---

## SECTION 6: Crew Resource Management (CRM)

### 6.1 CRM in RPAS Operations

CRM is a training and management system focusing on non-technical skills that are essential for safe operations. In RPAS, CRM applies to interactions between the pilot, visual observers, payload operators, and any other crew members.

**The Four Pillars of RPAS CRM:**

| Pillar | Description |
|--------|-------------|
| **Adherence to SOPs** | Standard Operating Procedures exist to ensure consistent, safe performance. Deviations from SOPs should be deliberate, communicated, and documented — never casual. |
| **Proper Use of Checklists** | Checklists prevent omission errors. In BVLOS operations, where the consequences of a missed step may not become apparent until the aircraft is kilometres away, checklists are critical. When interrupted, go back at least one item before the interruption point. |
| **Communication** | Clear, concise, unambiguous communication between crew members. Use standardized phraseology. Close the loop — confirm message received and understood. In BVLOS, communication between pilot and VOs IS the DAA system. |
| **Coordination** | During the flight review, candidates coordinate with the VO for normal procedures (pre-flight, take-off, landing) and emergency procedures (fly-away, lost link, traffic avoidance). |

### 6.2 Interpersonal Relations

TP 15530 requires that L1C pilots be able to:

| Requirement | Description |
|-------------|-------------|
| **Resolve differences peacefully** | Disagreements about operational decisions must be resolved constructively, not through authority or intimidation |
| **Promote open communications** | Create an environment where any crew member feels safe raising safety concerns without fear of retribution |
| **Place safety over hierarchy** | The most junior visual observer who sees traffic has the same authority to call "STOP" as the most senior pilot. Safety is not hierarchical |

---

## SECTION 7: Crew Fitness and the IM SAFE Checklist

### 7.1 Self-Assessment Before Every Operation

It is the responsibility of individual crew members to conduct a self-assessment to ensure they are fit before accepting duties. The **IM SAFE** checklist provides a structured approach:

| Letter | Factor | Question |
|---|---|---|
| **I** | Illness | Are you suffering from any illnesses that could impair your ability to complete your duties? |
| **M** | Medication | Are you under the influence of any drugs (over-the-counter, prescription, or recreational) that will impair your ability? |
| **S** | Stress | Are personal or professional matters causing stress to the point of distraction or impairment? |
| **A** | Alcohol | Have you consumed any alcohol within the previous 12 hours? |
| **F** | Fatigue | Are you feeling tired? (Sufficient rest in the previous 24 hours, feeling alert?) |
| **E** | Eating/Emotion | Have you eaten properly? Are emotional issues affecting your concentration? |

If the answer to ANY of these questions is "Yes," you are likely not fit to act as a crew member. The pilot-in-command must be informed immediately of any crew member incapacitation.

### 7.2 Substance Rules

**Alcohol — 12-hour rule:** No crew member (pilot or VO) may operate within 12 hours of consuming alcohol.

**Cannabis — 28-day rule:** All aircraft pilots and flight crew members, including RPA pilots and visual observers, must abstain from cannabis use for at least 28 days when conducting operations with an RPAS. This applies whether cannabis is used recreationally or medically.

> **Key Concept:** The 28-day cannabis rule is significantly longer than the 12-hour alcohol rule because cannabis metabolites persist in the body much longer than alcohol and can continue to affect cognitive function, reaction time, and decision-making for weeks after use.

---

## SECTION 8: Risk Management

### 8.1 The Risk Management Process

Risk management follows a three-step cycle:

**Step 1 — Identify Risk:** What could go wrong? Systematically identify hazards in the operating environment, equipment, weather, airspace, crew fitness, and mission complexity.

**Step 2 — Rate Risk:** How likely is it, and how bad would it be? Use the risk rating matrix to assess each hazard.

**Step 3 — Control Risk:** What can we do about it? Implement mitigations to reduce the risk to an acceptable level. If it cannot be reduced sufficiently, the mission should not proceed.

### 8.2 Risk Rating Matrix

| | Very Unlikely | Unlikely | Possible | Likely | Very Likely |
|---|---|---|---|---|---|
| **Severe** | Low Med | Medium | Med High | High | High |
| **Significant** | Low | Low Med | Medium | Med High | High |
| **Moderate** | Low | Low Med | Medium | Med High | Med High |
| **Minor** | Low | Low Med | Low Med | Medium | Med High |
| **Negligible** | Low | Low | Low Med | Medium | Medium |

Risk ratings of "High" typically require the mission to be cancelled or fundamentally restructured. "Med High" ratings require active mitigations documented before proceeding. "Medium" ratings require awareness and monitoring. "Low" ratings are acceptable with standard procedures.

> **Discussion Prompt #3:** *"Use the risk rating matrix to assess this scenario: You are planning a BVLOS survey. The weather forecast calls for winds increasing from 15 km/h to 35 km/h during your mission window. Your RPAS is rated for 40 km/h max wind. The survey area has scattered power lines at 30 m AGL. Rate the risk and describe your mitigation strategy."*

---

## SECTION 9: Safety Management

### 9.1 Safety Processes (CARs 901.218)

Every RPOC holder must establish safety processes that include:

| Process | Description |
|---------|-------------|
| **Goals** | Setting goals for the improvement of aviation safety, measuring the attainment of those goals, and addressing instances when those goals are not met |
| **Hazards** | Identifying and documenting hazards to aviation safety and evaluating, managing, and documenting the associated risks |
| **Mitigation Evaluation** | Evaluating the effectiveness of measures taken to mitigate or remove the hazards and associated risks |
| **Internal Reporting** | Internally reporting and analyzing hazards, incidents, and accidents, and taking corrective actions to prevent their recurrence |

### 9.2 Safety Management System (SMS) — The Four Pillars

A complete SMS is built on four pillars:

| Pillar | Description |
|--------|-------------|
| **Policy** | The organization's commitment to safety, documented and communicated. Includes a non-punitive safety reporting policy that encourages crew members to report hazards without fear of discipline. |
| **Safety Risk Management** | The systematic process of identifying hazards, assessing risks, and implementing mitigations. This is the operational application of the risk management cycle. |
| **Safety Assurance** | Monitoring and measurement of safety performance. Includes auditing, investigation, and continuous improvement. Ensures that mitigations are actually working. |
| **Safety Promotion** | Training, communication, and culture-building that keeps safety awareness high across the organization. Includes CRM training, safety bulletins, lessons-learned sharing, and recurrent training. |

### 9.3 Training Requirements (CARs 901.219)

The RPOC training program must include:

| Requirement | Description |
|-------------|-------------|
| **Indoctrination training** | Familiarization with the organization's safety policies, procedures, and culture |
| **Initial and annual training** | Skills and knowledge development for all operational roles |
| **Competency evaluation** | Assessment to evaluate the effectiveness of training (not just attendance) |
| **Documentation** | Training program documented in the RPAS Operations Manual |

---

## SECTION 10: Pilot–Equipment Relationship

### 10.1 Standard Operating Procedures and Lessons Learned

SOPs are the codified experience of an organization. They represent the best-known way to perform each task safely and consistently. Following SOPs eliminates the need to make decisions from scratch every time — freeing cognitive resources for the novel decisions that actually require judgment.

**Lessons learned** — whether from your own incidents, near-misses, or industry reports — should be systematically captured and integrated into SOPs. An organization that does not learn from incidents is condemned to repeat them.

### 10.2 Managing Checklist Interruptions

When a checklist is interrupted (phone call, radio communication, crew question, client request), there is a high risk of resuming at the wrong point — skipping one or more critical items. Best practice: go back at least one item before the interruption point and physically re-confirm that item before continuing. Some operators use a physical marker (finger, pen, sticky note) to hold their place in the checklist.

### 10.3 Effects of Reliance on Automation

Automation changes the pilot's role from operator to monitor. This creates several human factors challenges:

| Challenge | Description |
|-----------|-------------|
| **Skill degradation** | Manual flying skills atrophy when the autopilot does all the flying. If automation fails during a BVLOS mission, the pilot may need to manually fly the aircraft home — and may not be proficient. |
| **Mode confusion** | Complex autopilot systems have multiple modes. Pilots may not always know which mode is active, leading to unexpected aircraft behaviour. |
| **Automation surprise** | When the autopilot does something unexpected, the pilot must first understand what happened, then decide how to respond, then execute the response. This takes time — time that may not be available in an emergency. |
| **Complacency** | As discussed in Section 4.2, monitoring a well-functioning automated system is cognitively demanding and inherently unsustainable over long periods. |

---

## SECTION 11: Knowledge Check — Human Factors Module

### Recall-Level Questions

**Q1.** According to the TSB study cited in this module, how long does it typically take a pilot to see, recognize, understand, and react to conflicting traffic?
- A) 5 seconds
- B) 8.5 seconds
- C) 12.5 seconds
- D) 20 seconds
<details>
<summary>Click to reveal answer</summary>

**Answer: C.** The TSB study shows it typically takes 12.5 seconds to progress through seeing, recognizing, understanding the collision course, and adjusting the aircraft course.

</details>

**Q2.** Which of the following is NOT one of the five hazardous attitudes?
- A) Macho
- B) Complacency
- C) Resignation
- D) Invulnerability
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** Complacency is one of the Dirty Dozen, not one of the five hazardous attitudes. The five are Macho, Impulsivity, Resignation, Invulnerability, and Anti-Authoritarian.

</details>

**Q3.** How long must RPAS crew members abstain from cannabis use before operations?
- A) 12 hours
- B) 24 hours
- C) 7 days
- D) 28 days
<details>
<summary>Click to reveal answer</summary>

**Answer: D.** All RPA pilots and visual observers must abstain from cannabis for at least 28 days before conducting RPAS operations.

</details>

**Q4.** In James Reason's Unsafe Acts Model, what is the difference between a "slip" and a "mistake"?
- A) Slips are intentional; mistakes are unintentional
- B) Slips involve correct intention but incorrect execution; mistakes involve incorrect intention based on flawed reasoning
- C) Slips are minor; mistakes are major
- D) There is no difference; they are synonymous
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** A slip is when you intend the right action but execute it incorrectly. A mistake is when you deliberately choose an incorrect action based on flawed reasoning or inadequate knowledge.

</details>

### Application-Level Questions

**Q5.** You are 3 hours into a BVLOS pipeline survey. The mission has been routine — no weather changes, no traffic, no system anomalies. You notice you have been checking the GCS telemetry less frequently over the past hour and are thinking about your evening plans. Which human factors concepts are at play?
- A) Anti-authoritarian attitude and fatigue
- B) Automation complacency and reduced situational awareness
- C) Resignation and lack of resources
- D) Impulsivity and complacency
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** The routine nature of the flight has led to automation complacency (reduced monitoring of an automated system performing normally) and degraded situational awareness (reduced Level 1 perception because you are checking the display less frequently).

</details>

**Q6.** Your visual observer reports seeing a low-flying aircraft but you cannot see it on your ADS-B display. Your VO is relatively new and seems uncertain. Using CRM principles, what should you do?
- A) Dismiss the report — if it's not on ADS-B, it's probably not a threat
- B) Take the VO's report seriously, immediately manoeuvre the RPA to avoid the reported area, and search for the traffic
- C) Ask the VO to confirm the sighting before taking action
- D) Continue the mission but increase your monitoring
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** CRM principles require placing safety over hierarchy. The VO's report should be treated as valid regardless of their experience level. Many aircraft in uncontrolled airspace below 400 ft do not carry ADS-B transponders. The safest action is to immediately respond to the report and verify afterward.

</details>

### Analysis-Level Questions

**Q7.** *Discussion/Essay:* Apply the HFACS framework to analyze this scenario: An L1C operator crashes an RPA during a BVLOS survey when the aircraft collides with an unmarked communications tower. The pilot had conducted a site survey using only satellite imagery and had not checked the VNC chart for obstacles. The company's SOP requires VNC chart review, but several pilots have told management that they skip this step because "Google Earth shows everything" and management has not enforced the requirement.

<details>
<summary>Click to reveal answer</summary>

**Model Answer Elements:** Level 1 (Unsafe Acts): Decision error — the pilot chose to rely on satellite imagery alone, which does not reliably show thin vertical obstacles like towers and wires. Level 2 (Preconditions): Conditions of Operators — complacency with the site survey process; Personal Factors — inadequate crew resource management (no second person cross-checking the survey). Level 3 (Unsafe Supervision): Failure to Correct Problem — management knew pilots were skipping VNC review and did not enforce the SOP. This is also potentially a Supervisory Violation if management tacitly approved the shortcut. Level 4 (Organizational Influences): Organizational Process — the SOP exists but is not enforced, creating a norm of non-compliance. Organizational Climate — a culture where deviations from SOPs are tolerated erodes the value of all SOPs. Corrective action should focus primarily on Levels 3 and 4 — individual retraining at Level 1 will not be effective if the organizational culture continues to tolerate SOP deviations.

</details>

---

## SECTION 12: Discussion Prompts for Instructor-Led Session

### Shared Fate (10 minutes)
*"A manned helicopter pilot would never fly into conditions they weren't confident they could handle — because their life depends on it. As an RPAS pilot, your life doesn't depend on it. How does this change your risk calculus? Be honest. Have you ever made a decision with an RPAS that you would never have made if you were onboard?"*

### Automation Trust (10 minutes)
*"How much do you trust your autopilot? Would you launch a BVLOS mission in terrain you've never visited if the flight plan looks good on screen? At what point does trust in automation become complacency? Where is the line?"*

### The Dirty Dozen in Your Operation (10 minutes)
*"Go through the Dirty Dozen list. For each one, give a specific example of how it could manifest during an L1C BVLOS operation. Which three do you think are the highest risk for YOUR specific type of operations?"*

### CRM Failure Scenario (5 minutes)
*"Your client is the CEO of a major pipeline company. They are standing at the GCS watching the survey. Weather is deteriorating. They ask you to 'just finish this last section — we need this data for a board meeting tomorrow.' What do you do? How do you communicate your decision?"*

---

---

## REFERENCES

- Boeing Statistical Summary of Commercial Jet Airplane Accidents — Worldwide Operations
- Canadian Aviation Regulations (CARs) SOR/96-433, Sections 901.218, 901.219
- Human Factors Analysis and Classification System (HFACS) Framework
- James Reason, *Human Error* (Cambridge University Press)
- JARUS Methodology for Evaluation of Automation
- Transport Canada AIM — RPA Chapter (Crew Fitness)
- Transport Canada TP 12863 / TP 12864 — Human Factors for Aviation
- Transport Canada TP 15530 — Level 1 Complex RPAS Pilot Training
- Transport Canada Fatigue Risk Management System (FRMS) Toolbox
- Transportation Safety Board of Canada (TSB) — Visual Detection Studies

---

*End of Module L1C03 — Human Factors*
*Next Module: L1C04 — Meteorology*
