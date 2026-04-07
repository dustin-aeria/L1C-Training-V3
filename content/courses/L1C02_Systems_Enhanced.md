---
title: "L1C02 — RPA Airframes, Power Plants, Propulsion, and Systems"
---

# L1C02 — RPA Airframes, Power Plants, Propulsion, and Systems

> **Module Type:** Exam Content — TP 15530 Section 2
> **ICAO Competency Code:** KNO (Knowledge)
> **Estimated Duration:** 4–5 hours (recommend splitting across two sessions)
> **TP 15530 Mapping:** Section 2 — RPAS Airframes, Power Plants, Propulsion, and Systems
> **Regulatory References:** Standard 922 (all sections); Standard 923; AC 922-001 Issue 02; CARs 901.23, 901.211, 901.219, 901.221, 901.223

---

<div class="instructor-note-box">
<div class="instructor-note-header">
<span class="instructor-emoji">📝</span> Instructor Notes — Module Purpose
</div>
<div class="instructor-content">

This is the most technically detailed module in the L1C ground school. It covers the aircraft itself, the ground control station, the command and control links that connect them, the sensors that provide situational awareness, and the systems (autopilot, GNSS, DAA) that make BVLOS operations possible. The goal is NOT to make students into engineers — it is to ensure they understand their systems deeply enough to make informed operational decisions, recognize failure modes, and know the limits of their equipment.

**Teaching approach:** This module benefits from hands-on elements wherever possible. If you can have an RPAS available for students to examine during the electrical systems and airframe sections, do so. For the RF/C2 link sections, practical demonstrations of signal strength variation with antenna orientation and distance are far more effective than theory alone.

**Common student misconceptions:**
- "My drone just works — I don't need to understand the internals." → In BVLOS, you cannot see your aircraft. Your ONLY awareness of its status comes through telemetry from these systems. If you don't understand what the IMU does, you won't recognize when it's giving you bad data.
- "GPS is always accurate." → GPS accuracy varies dramatically with satellite geometry (DOP), atmospheric conditions, terrain masking, multipath reflections, and intentional or unintentional interference. A BVLOS mission in a narrow valley may have completely different GPS performance than one over flat terrain.
- "Lost link means the drone is lost." → A well-designed RPAS with a proper 922.09 declaration will behave predictably after C2 link loss. Understanding lost-link behaviour is one of the most critical aspects of BVLOS operations.

**Recommended session split:** Cover Sections 1–10 (Wake Turbulence through Batteries) in Session 1. Cover Sections 11–17 (Autopilots through Discussion Prompts) in Session 2.

</div>
</div>

---

## LEARNING OBJECTIVES

After completing this module, you will be able to:

1. Identify aircraft class/category based on ICAO definitions and describe applicable operational principles
2. Identify airframe components and describe how to assess airworthiness during pre-flight inspection
3. Describe typical RPAS electrical system components, including servos and their failure indications
4. Identify single points of failure in an RPAS and explain the value of redundancy
5. Describe the purpose, function, and limitations of C2 links including radio, cellular, and satellite options
6. Explain the inverse-square law, radio wave propagation, Fresnel zones, multipath effects, and spatial diversity
7. Identify sources of EMI and describe how to assess an RF environment
8. Describe battery types, capacity variables, and associated risks including transport and fire hazards
9. Explain autopilot functions, autonomy levels, control loops, and flight termination procedures
10. Describe the function and limitations of magnetometers, barometers, airspeed indicators, and IMUs
11. Explain GNSS principles, error sources (DOP, terrain masking, multipath, jamming), and accuracy limitations
12. Describe Detect and Avoid systems, Standard 922.10, and Standard 923 vision-based DAA
13. Identify transponder types (Mode A, C, S, ADS-B) and their relevance to RPAS DAA
14. Explain RPAS maintenance requirements and record-keeping obligations

---

## SECTION 1: NAV CANADA Aircraft Wake Turbulence Separation

### 1.1 Wake Turbulence Categories

![Wake Turbulence](/images/systems/wake%20turbulence.avif)

Understanding manned aircraft categories is important for RPAS pilots because wake turbulence separation requirements affect how Air Traffic Control manages traffic near your operating area. NAV CANADA classifies aircraft into three primary wake turbulence categories:

| Category | Maximum Certified Take-Off Weight | Examples |
|---|---|---|
| **Light (L)** | 7,000 kg (15,500 lbs) or less | Cessna 172, Piper Cherokee, most GA aircraft |
| **Medium (M)** | More than 7,000 kg up to 136,000 kg | Regional jets, turboprops, smaller airliners |
| **Heavy (H)** | More than 136,000 kg (300,000 lbs) | Boeing 747, Airbus A380, large cargo aircraft |

**Why this matters for L1C operations:** Wake turbulence from heavy and medium aircraft can persist for several minutes and descend below the flight path. While L1C operations are typically in Class G airspace away from major traffic, understanding these categories helps you assess the risk when operating near approach/departure paths or when manned traffic is reported in your area.

---

## SECTION 2: Standard 922 Overview — Safety Assurance Framework

### 2.1 The Standard 922 Declaration Framework

Standard 922 establishes the safety assurance requirements that RPAS manufacturers must meet when declaring their systems for L1C operations. The framework is organized into distinct sections, each addressing a specific aspect of RPAS safety:

| Standard | Topic | Description |
|---|---|---|
| 922.01 | General Requirements | Overall declaration requirements and applicability |
| 922.02 | System Safety Analysis | Identification of failure modes and single points of failure |
| 922.03 | Structural Integrity | Airframe strength and fatigue requirements |
| 922.04 | Geofencing and Position Accuracy | ±10 m horizontal, ±16 m vertical accuracy requirements |
| 922.05 | Ground Control Station | GCS reliability and interface requirements |
| 922.06 | Propulsion System | Motor/engine reliability and redundancy |
| 922.07 | Lost Link Behaviour | Predictable behaviour after C2 link loss |
| 922.08 | Flight Termination System | Emergency termination capability requirements |
| 922.09 | C2 Link Reliability | "Remote or less" probability of loss of control |
| 922.10 | Detect and Avoid | Optional onboard DAA system requirements |

### 2.2 Probability Classifications

Standard 922 uses probability classifications derived from aviation safety standards to quantify failure likelihood:

| Classification | Probability Range | Description |
|---|---|---|
| **Frequent** | Greater than 10⁻³ | Likely to occur often (more than 1 in 1,000 flight hours) |
| **Occasional** | 10⁻³ to 10⁻⁵ | Likely to occur sometimes (1 in 1,000 to 1 in 100,000) |
| **Remote** | 10⁻⁵ to 10⁻⁷ | Unlikely but possible (1 in 100,000 to 1 in 10,000,000) |
| **Extremely Remote** | Less than 10⁻⁷ | Very unlikely (less than 1 in 10,000,000) |

Standard 922.09 requires that the probability of any combination of failures resulting in loss of control be **"remote or less"** — meaning less than 1 in 100,000 flight hours.

---

## SECTION 3: Aircraft Classification and Operational Principles

### 3.1 ICAO Aircraft Classification

![ICAO Aircraft Classification Framework](/images/systems/Airframe classes.png)

RPAS are classified within the broader ICAO aircraft classification framework. For L1C purposes, the key distinctions are by configuration and propulsion:

**By Configuration:**

![Fixed-Wing vs Multirotor vs Hybrid VTOL](/images/systems/Fixed%20wing%20vs%20multirotor%20vs%20hybrid%20vtol.png)

| Configuration | Description |
|---------------|-------------|
| **Fixed-wing** | Generate lift through forward motion over aerodynamic surfaces (wings). Efficient for long-range, high-speed operations. Cannot hover. Require launch and recovery systems (runway, catapult, hand launch, VTOL hybrid). |
| **Rotary-wing (multirotor)** | Generate lift through powered rotors. Can hover, take off and land vertically. Less efficient for long-range flight. Most common consumer/commercial RPAS configuration (quadcopter, hexacopter, octocopter). |
| **Hybrid VTOL** | Combine fixed-wing efficiency with vertical take-off and landing capability. Transition between hover and forward flight modes. Increasingly common for BVLOS survey operations. |

![Quadcopter Component Layout](/images/systems/Quadcopter components.png)

**By Propulsion:**

| Propulsion Type | Description |
|-----------------|-------------|
| **Electric motor** | Most common for small RPAS |
| **Internal combustion engine** | Common for larger/longer-endurance platforms |
| **Hydrogen fuel cell** | Emerging technology for extended endurance |
| **Hybrid electric/combustion** | Combines benefits of both power sources |

### 3.2 Applicable Operational Principles

L1C pilots must understand the complete flight envelope of their aircraft type, including components, aerodynamics, weight and balance, launch procedures, take-off/initial climb/level off/hover/forward flight, flight scenarios and manoeuvres, and landing/recovery. These topics are covered in detail in Module L1C07 (Theory of Flight) but introduced here in the context of the systems that enable them.

---

## SECTION 4: Airframes

### 4.1 Airframe Inspection and Airworthiness

Understanding your airframe is the first line of defence against in-flight failures — especially critical in BVLOS where you cannot visually monitor the aircraft for developing problems.

**Manufacturer-defined repair boundaries:** Manufacturers identify which repairs and work can be undertaken by the operator versus what must be addressed by an authorized repair facility. You must know where to find your applicable OEM guidelines and follow them. Performing repairs beyond your authorization can void the safety assurance declaration.

**Critical pre-flight inspection items:**

![Propeller Damage Example](/images/systems/propellar%20damage.jpg)

| Inspection Item | What to Look For |
|-----------------|------------------|
| **Propeller/rotor damage** | Even small nicks or chips alter the balance and aerodynamic efficiency of a propeller. Unbalanced propellers create vibrations that accelerate bearing wear, stress motor mounts, and can cause the IMU to produce erroneous data. |
| **Surface contamination** | Frost, ice, dirt, oil, or debris on aerodynamic surfaces degrades lift performance. On sensors (compass, barometer ports, pitot tubes), contamination can cause erroneous readings. |
| **Wiring damage** | Frayed, pinched, or corroded wiring can cause intermittent electrical failures — the most dangerous kind, because they may not appear during pre-flight checks but manifest during flight. |
| **Structural damage** | Cracks, deformations, or loose fasteners in the airframe can lead to in-flight structural failure, especially under vibration or manoeuvring loads. |

**Airworthiness decision-making:** When something out of order is found during a pre-flight inspection, you must determine whether the aircraft is airworthy. The decision process is: (1) Consult the manufacturer's maintenance manual for the specific finding. (2) If the finding is addressed, follow the manufacturer's guidance. (3) If the finding is NOT addressed, or if you are unsure, the aircraft is NOT airworthy until the condition is resolved by qualified personnel. When in doubt, do NOT fly.

> **Key Concept for BVLOS:** In VLOS, you might notice a developing problem (unusual sound, visible vibration, erratic flight behaviour) and land immediately. In BVLOS, your only indication of an airframe problem may be subtle telemetry changes — slightly elevated motor current, unusual vibration data from the IMU, or unexpected drift. Pre-flight inspection is your primary opportunity to catch problems before they become in-flight emergencies kilometres from your position.

---

## SECTION 5: Electrical Systems

### 5.1 Typical Electrical System Components

RPAS electrical systems include power sources (batteries, generators), distribution systems (wiring, bus bars, voltage regulators), actuators (servos, electronic speed controllers/ESCs), sensors, control electronics (flight controller, GPS receiver, telemetry radio), and payload systems.

### 5.2 Servos

![Flight Control System Architecture](/images/systems/flight control architecture.png)

A **servo** is an electromechanical actuator that converts electrical signals into precise mechanical movement. In RPAS, servos control flight surfaces (ailerons, elevator, rudder on fixed-wing), camera gimbals, payload release mechanisms, and other mechanical functions.

**Actions of a servo:** The flight controller sends a PWM (Pulse Width Modulation) signal to the servo, which moves to and holds a specific position. The servo contains a motor, gear train, potentiometer (for position feedback), and control circuit.

![How a Servo Motor Works](/images/systems/working-of-servo-motor-inside.gif)

**Indications of a failed servo:**
- Flight surface not responding to control inputs
- Oscillation or jittering of the controlled surface
- Servo moving to an incorrect or extreme position
- Unusual current draw on the affected channel
- Physical symptoms: grinding noise, heat, or smell from the servo location

![Flight Control Surface Movement](/images/systems/Flight Control.gif)

### 5.3 Environmental Protection

**Keeping components dry:** Water and moisture cause corrosion, electrical shorts, and sensor contamination. Even moisture from fog, dew, or humid air can affect sensitive electronics over time.

**Waterproof ratings (IP ratings):** An IP (Ingress Protection) rating like IP43 or IP67 indicates the degree of protection against solid objects and water.

![IP Rating Chart](/images/systems/IP%20Rating%20Chart.webp) However, IP ratings have limitations — they are tested under specific laboratory conditions, not in operational environments with vibration, temperature cycling, and physical stress. An IP43-rated RPAS may survive light rain in a lab test but fail in sustained rain at altitude with wind-driven water penetration. Always treat the IP rating as a *minimum* protection level, not a guarantee.

### 5.4 Battery Consumption

Understanding battery consumption is essential for BVLOS flight planning. Key factors affecting consumption include aircraft weight (including payload), flight speed, wind conditions, ambient temperature, altitude, and manoeuvring intensity. Most flight controllers provide real-time battery telemetry including voltage, current draw, and estimated remaining capacity, but these estimates become less accurate as batteries age.

---

## SECTION 6: Redundancies and Critical Items

### 6.1 The Value of Redundancy in BVLOS

![Redundancy Architecture](/images/systems/redunandancy%20architecture.webp)

Redundancy means having backup systems that can take over if a primary system fails. In VLOS operations, the pilot's direct observation provides a human redundancy layer — you can see problems and react. In BVLOS, technological redundancy replaces this human layer.

**Types of redundancy in RPAS:**

| Redundancy Type | Description |
|-----------------|-------------|
| **Sensor redundancy** | Dual IMUs, dual barometers, dual GPS receivers allow the flight controller to cross-check data and detect sensor failures |
| **Power redundancy** | Dual batteries, dual power buses prevent a single battery failure from causing total power loss |
| **C2 link redundancy** | Dual remote controllers, backup communication links (e.g., cellular backup for primary radio link) |
| **Motor redundancy** | Hexacopters and octocopters can continue controlled flight after losing one or more motors |
| **Navigation redundancy** | Multi-constellation GNSS (GPS + GLONASS + Galileo + BeiDou) provides more satellites and better geometry |

### 6.2 Single Points of Failure

![Single Point of Failure](/images/systems/single%20point%20of%20failure.png)

A **single point of failure** is any component whose failure alone would result in loss of control or an unsafe condition. Manufacturers are required to perform a system safety analysis on their RPAS designs to identify all single points of failure.

**Common single points of failure in consumer RPAS:**
- Single battery (no backup power)
- Single flight controller (no redundant processing)
- Single C2 link frequency (no backup communication path)
- Single GPS receiver (no cross-check capability)

**Example — DJI Flycart 30 Redundant Systems (from original course materials):**
This aircraft demonstrates the multi-layer redundancy expected for declared BVLOS platforms:
- Flight control sensory redundancy: dual IMU, dual barometers, RTK antenna, radar + binocular sensing
- Power system redundancy: motor redundancy, dual signal link for throttle, dual intelligent battery
- Communication redundancy: image transmission link backup, dual remote controller mode
- Additional safety systems: parachute, ADS-B

> **Discussion Prompt #1:** *"Look at your own RPAS. How many single points of failure can you identify? For each one, what would happen if that component failed during a BVLOS mission 5 km from your position? What mitigations exist?"*

### 6.3 Latent Failures

A **latent failure** is a failure that has already occurred but has not yet been detected because the failed component is not currently in active use, or because its failure is masked by a redundant system. Latent failures are dangerous because they degrade your redundancy without your knowledge — when the primary system then fails, there is no backup.

**Example:** A dual-battery RPAS has one battery with a degraded cell that provides reduced capacity. During normal operations, the system draws from both batteries and the degradation is not obvious. If the healthy battery then fails, the degraded battery cannot sustain flight for the expected duration.

**How to identify latent failures:** Systematic pre-flight checks that test ALL redundant systems, not just confirm the primary is working. If your RPAS has dual IMUs, verify both are reading correctly — don't just confirm "GPS lock acquired."

---

## SECTION 7: Ground Control Station (GCS)

### 7.1 GCS Considerations for BVLOS

The GCS is where you control and monitor your aircraft during BVLOS operations. In VLOS, the GCS supplements your direct visual observation. In BVLOS, the GCS IS your entire interface with the aircraft.

**Pilot and antenna orientation:** The strength and reliability of the C2 link is directly affected by the orientation of the GCS antenna relative to the aircraft. Most manufacturer instructions specify optimal antenna positioning. Incorrect antenna orientation can reduce effective range by 50% or more.

**GCS altitude:** The altitude of the GCS affects radio line-of-sight to the aircraft. A GCS on top of a hill will have significantly better range than one in a valley, due to terrain masking effects.

**External factors affecting GCS operation:** Temperature (affects screen readability and battery performance), sunlight (screen glare), precipitation (moisture ingress), wind (stability of antenna), proximity to RF interference sources (power lines, cell towers, other radio equipment).

---

## SECTION 8: Command and Control (C2) Links

### 8.1 C2 Link Fundamentals

The C2 link is the data connection between the GCS and the RPA. It carries command inputs from the pilot to the aircraft and telemetry data from the aircraft back to the pilot. In BVLOS, the C2 link is your lifeline to the aircraft — if it fails, you lose the ability to control the aircraft and may lose awareness of its status.

**Assessing the RF environment:** Before any BVLOS mission, you should assess the RF environment at your operating site. This involves identifying potential sources of interference, evaluating signal strength and quality, and determining whether your C2 link frequency is appropriate for the environment.

**Radio line-of-sight:** Unlike visual line of sight, radio line of sight follows the curvature of the RF signal path and includes the Fresnel zone. Physical obstructions that don't appear to block the direct path between antennas can still degrade the signal if they encroach on the Fresnel zone.

### 8.2 C2 Link Types — Radio vs. Cellular vs. Satellite

| Characteristic | Direct Radio (LOS) | Cellular | Satellite |
|---|---|---|---|
| Typical latency | Very low (5–50 ms) | Low–moderate (30–100 ms) | High (250–600+ ms) |
| Range | Limited by power/frequency (typically 1–100+ km LOS) | Depends on cell coverage | Global |
| Reliability | High in LOS; degrades with terrain/obstacles | Depends on network coverage and congestion | High but affected by weather |
| Bandwidth | Moderate | High | Low–moderate |
| Cost | Equipment only | Service subscription | Higher service subscription |
| Best for | Most L1C BVLOS operations | Urban/suburban areas with good coverage | Remote areas beyond cell coverage |
| Key limitation | Requires radio LOS; terrain masking | Coverage gaps in rural/remote areas | High latency makes real-time control challenging |

![Latency Visualization](/images/systems/latency.gif)

> **Key Concept — Latency Matters for BVLOS:** In direct manual control, latency determines how quickly the aircraft responds to your inputs. At 50 ms latency (typical direct radio), the delay is imperceptible. At 500 ms (satellite), there is a noticeable lag that makes precise manual control difficult. This is why most satellite-linked BVLOS operations use autonomous flight modes with human monitoring rather than direct stick control.

### 8.3 Data Transmission Properties

Understanding these properties helps you evaluate whether a C2 link is appropriate for your operation:

**Bandwidth:** The range of frequencies used by the link. More bandwidth allows higher data rates.

**Bitrate:** How much data is transmitted per second. The table below illustrates the dramatic difference between control/telemetry data and video data:

| Data Type | Typical Bitrate | Notes |
|---|---|---|
| C2 Commands (MAVLink) | 1–10 kbps | Very low bandwidth, high priority |
| Telemetry Data | 5–50 kbps | Aircraft state information |
| Low-Quality Video | 1–5 Mbps | Basic situational awareness |
| HD Video (1080p) | 5–15 Mbps | Standard payload streaming |
| 4K Video | 15–50+ Mbps | High-resolution inspection |

Video transmission requires **100–1000 times** more bandwidth than C2 commands. This is why many BVLOS platforms use separate frequencies for C2 (reliable, low-bandwidth) and video (high-bandwidth, non-critical). A momentary video dropout is acceptable; a momentary C2 dropout could be catastrophic.

| Property | Description |
|----------|-------------|
| **Latency** | The delay between sending and receiving data. Critical for control responsiveness. |
| **Throughput** | The real-world usable data rate after accounting for overhead, error correction, and interference. |
| **Signal-to-Noise Ratio (SNR)** | The ratio of signal power to noise power. Higher SNR means better signal quality and fewer errors. |
| **Power Output** | Transmit power. Higher power generally means greater range, but is regulated by ISED. |
| **Interference Susceptibility** | How vulnerable the link is to RF noise from other sources. |
| **Security (Encryption)** | Protection against unauthorized access. AES, WPA, and proprietary encryption methods are used. |

### 8.4 Unlicensed Frequency Characteristics

![Frequency Characteristics Comparison](/images/systems/frequency%20characteristics%20visual.webp)

| Characteristic | 900 MHz | 2.4 GHz | 5.8 GHz |
|---|---|---|---|
| Frequency Range | ~902–928 MHz (ISM band, North America) | ~2,400–2,483.5 MHz (worldwide ISM) | ~5,725–5,875 MHz (ISM band) |
| Typical Range (LOS) | 10–100+ km | 1–5 km | 0.3–2 km |
| Penetration (Obstacles) | Excellent | Moderate | Poor |
| Bandwidth (Available Spectrum) | Limited (26 MHz in US) | Moderate (83.5 MHz) | Large (125+ MHz) |
| Data Rate (Theoretical Max) | Up to ~70 Mbps | Up to ~600 Mbps | Up to ~1 Gbps |
| Latency | Very low | Low | Very low |
| Antenna Size | Large | Medium | Small |
| Susceptibility to Interference | Less crowded | Crowded (Wi-Fi, Bluetooth, microwaves) | Heavily used for FPV; more sensitive to interference |

> **Operational Implication:** For long-range BVLOS operations, 900 MHz offers the best penetration and range but limited bandwidth. For operations requiring high-bandwidth video telemetry, 5.8 GHz offers the bandwidth but with severely limited range. Many BVLOS platforms use 900 MHz for C2 commands and a separate 2.4 or 5.8 GHz link for video — separating critical control data from payload data.

### 8.5 Standard 922.09 — C2 Link Reliability and Lost Link Behaviour

Standard 922.09 requires that:
- The occurrence of any combination of failures resulting in loss of control is **remote or less**
- The RPA behaves **predictably** after loss of control

Lost-link behaviour must be consistent and programmable. The operator must know exactly what the RPA will do if the C2 link is lost — hover and wait, return to home at a specified altitude, loiter at current position, auto-land, or some combination. The specific behaviour should be configurable by the pilot before flight (RTH altitude, loiter duration, auto-land location, etc.).

> **Scenario:** *You are 8 km into a BVLOS pipeline survey when your C2 link drops. Your RPAS is programmed to hover for 30 seconds, then return to home at 80 m AGL. The terrain between the aircraft and home includes a 120 m radio tower that you identified during your site survey. What is the problem, and how should you have planned differently?*

---

## SECTION 9: Radio Wave Propagation

### 9.1 The Inverse-Square Law

![Inverse-Square Law](/images/systems/inverse%20square.webp)

The intensity of radiated energy (including radio signals) is inversely proportional to the square of the distance from the source. This means that if you double the distance, the signal strength drops to one-quarter. If you triple the distance, it drops to one-ninth.

**Practical implication:** Signal strength decreases rapidly with distance. A C2 link that works perfectly at 1 km may be marginal at 3 km and unusable at 5 km, even with perfect line of sight. Your maximum theoretical range is NOT your reliable operational range — always plan with significant margin.

### 9.2 Antennas

![Types of Antennas](/images/systems/types%20of%20antennas.jpg)

Different antenna types have different characteristics that affect C2 link performance:

| Antenna Type | Description |
|--------------|-------------|
| **Dipole antenna** | Simple, omnidirectional in one plane. Good general-purpose antenna but not optimized for long range. |
| **Yagi array** | Directional antenna that concentrates signal in one direction. Higher gain but must be pointed at the aircraft. Useful for fixed-direction BVLOS operations. |
| **Cloverleaf antenna** | Circularly polarized, designed for FPV video transmission. Good rejection of multipath interference. |
| **Fractal antenna** | Compact design that operates across multiple frequencies. Used in some GCS designs. |
| **MIMO (Multiple In Multiple Out)** | Uses multiple antennas to improve data throughput and reliability. Common in 4G/5G cellular links. |
| **Phased array** | Electronically steerable — can track a moving aircraft without physical movement. Increasingly used in advanced GCS systems. |

**Key antenna concepts:**
- **EIRP (Effective Isotropic Radiated Power)** — The effective power output considering antenna gain. Regulated by ISED.
- **Radiation pattern** — The three-dimensional shape of the antenna's signal output. Determines where the signal is strongest and where there are "null" zones.
- **Polarization** — Vertical, horizontal, circular left, or circular right. The transmitting and receiving antennas must use matching polarization for optimal signal reception. Mismatched polarization can cause signal loss of 20 dB or more.

### 9.3 Signal Propagation Effects

![Fresnel Zone](/images/systems/fresnel%20zone%201.png)

| Propagation Effect | Description |
|--------------------|-------------|
| **Attenuation** | The gradual weakening of a signal as it travels through the atmosphere. Affected by distance (inverse-square law), atmospheric conditions (rain, fog), and obstacles. |
| **Multipath propagation** | When a radio signal reaches the receiver via multiple paths due to reflections from terrain, buildings, water, or the aircraft's own airframe. The multiple signals can arrive at different times and phases, causing constructive or destructive interference. In BVLOS operations over water or flat terrain, multipath can cause predictable signal fading at specific distances. |
| **Spatial diversity** | Using multiple antennas separated by a distance to mitigate multipath fading. If one antenna is in a fade null, the other is likely receiving a usable signal. Many BVLOS GCS systems use dual antennas with spatial diversity. |
| **Fresnel zone** | The ellipsoidal region surrounding the direct line between transmitter and receiver through which most of the signal energy travels. Any obstacle that encroaches on the Fresnel zone — even if it does not block the direct line of sight — will reduce signal strength. The Fresnel zone is wider at mid-path and narrower near the antennas. At 2.4 GHz over a 5 km path, the Fresnel zone radius at mid-path is approximately 12.5 m — a stand of trees or a low hill can easily encroach on it. |
| **Doppler spread** | The frequency shift caused by relative motion between the transmitter and receiver. In high-speed fixed-wing BVLOS operations, Doppler effects can affect some C2 link protocols. Generally not significant at typical multirotor speeds. |

### 9.4 Electromagnetic Interference (EMI)

![EMI Sources](/images/systems/EMI%20Sources.png)

EMI is defined by the ITU as the effect of unwanted energy upon reception in a radiocommunication system, manifested by performance degradation, misinterpretation, or loss of information.

**Sources of EMI in the RPAS operating environment:**
- Wi-Fi transmitters
- Microwave radio relays
- Cell phone towers
- Industrial/commercial SCADA systems
- Lightning
- On-board devices (e.g., Bluetooth payload interfering with C2 link)
- Power lines and electrical infrastructure
- Other RPAS operating nearby
- The RPAS's own motors (quadcopter motors can interfere with compass readings)

**The K-Index:** A measure of geomagnetic activity caused by solar wind interaction with Earth's magnetic field. Higher K-index values indicate greater geomagnetic disturbance, which can affect GPS accuracy and compass reliability. Check the NOAA Space Weather Prediction Centre's Planetary K-Index before BVLOS missions.

**Assessing the RF environment:** Before a BVLOS mission, evaluate the operating area for potential sources of interference. Some GCS systems include RF spectrum analyzers. At minimum, check for nearby cell towers, power infrastructure, and industrial facilities. A pre-flight RF sweep using the GCS telemetry display can reveal unexpected interference sources.

**Harmonic radiation:** Radio transmitters can produce unintended signals at harmonics (multiples) of their operating frequency. A transmitter operating at 900 MHz may produce harmonics at 1.8 GHz, 2.7 GHz, etc. These harmonics can interfere with C2 links operating at those frequencies.

> **Discussion Prompt #2:** *"You arrive at a pipeline survey site in a rural area and notice a cluster of cell towers and a wind farm nearby. How would these affect your BVLOS operation? What specific C2 link and sensor issues might you encounter?"*

---

## SECTION 10: Batteries

### 10.1 Battery Types and Characteristics

The majority of consumer and commercial RPAS use **Lithium Polymer (LiPo)** or **Lithium-ion (Li-ion)** batteries. Both are high-energy-density power sources that offer good power-to-weight ratios but require careful handling.

**A single battery is a single point of failure.** If your RPAS uses a single battery pack with no backup power system, a battery failure will result in loss of power and a crash. Dual-battery systems or redundant power architectures address this vulnerability.

### 10.2 Variables Affecting Battery Performance

![Battery Discharge Curve](/images/systems/battery%20discharge%20curve.webp)

![Cold Weather Battery Performance](/images/systems/cold%20weather%20batery%20performance.png)

| Variable | Effect on Performance |
|----------|----------------------|
| **Age** | Battery capacity degrades with each charge/discharge cycle. A battery rated at 10,000 mAh when new may only deliver 7,000 mAh after 200 cycles. |
| **Charge history** | Batteries that have been over-discharged, over-charged, or stored at full charge for extended periods degrade faster. |
| **Charge status** | A battery at 80% charge does not have 80% of its performance remaining — discharge curves are non-linear, especially at low temperatures. |
| **Temperature** | Cold temperatures significantly reduce battery capacity and voltage. A battery that provides 25 minutes of flight at 20°C may only provide 15 minutes at -10°C. Many RPAS have battery warming systems for cold-weather operations. |

### 10.3 Assessing Battery Voltages

![Cell Voltage Monitoring](/images/systems/Cell%20Voltage%20Monitoring.png)

Monitoring individual cell voltages (not just total pack voltage) is critical for detecting developing battery problems. A cell that is significantly lower than others indicates degradation or a developing failure. Most telemetry systems display per-cell voltage during pre-flight checks.

### 10.4 Battery Hazards

![LiPo Battery Fire](/images/systems/lipo-battery-fire.jpg)

**Transport risks:** Lithium-ion batteries are classified as dangerous goods for transport. They can experience thermal runaway (a self-accelerating exothermic reaction) if damaged, short-circuited, or exposed to excessive heat. Transport regulations (IATA DGR, TDG Regulations) specify packaging, labelling, and quantity limits.

**Fire hazards:** Lithium battery fires cannot be effectively extinguished with water. Water can actually accelerate a lithium fire by reacting with the lithium metal. Appropriate extinguishing agents include dry chemical, sand, or specialized lithium battery fire extinguishers. Have appropriate fire suppression materials available at your launch site.

> **Key Concept:** Battery management is one of the most critical aspects of BVLOS flight planning. Unlike VLOS where you can see and land the aircraft if battery is running low, in BVLOS you are relying entirely on telemetry data to manage your energy budget. Always plan BVLOS missions with sufficient energy reserves for contingency manoeuvres (return to home in headwind, diversion to alternate landing site, extended hover during lost-link recovery).

---

## SECTION 11: Autopilots and Flight Management Systems

### 11.1 Levels of Pilot Intervention

RPAS autopilots operate on a spectrum from full manual control to full autonomy:

| Intervention Level | Description |
|--------------------|-------------|
| **Human-in-the-Loop (HITL)** | The pilot has direct positive control of the system and is directing the flight through controller inputs or waypoint identification. The pilot must actively fly the aircraft. Most common for VLOS operations. |
| **Human-on-the-Loop (HOTL)** | The RPAS is the primary decision-making platform and the pilot actively monitors the operation, ready to take control if intervention is needed. The pilot plans the operation using flight planning software and uploads the flight plan to the RPAS, which follows the plan autonomously. Most common for BVLOS survey operations. |
| **Human-off-the-Loop** | The system operates fully autonomously without pilot monitoring. NOT currently permitted under L1C regulations — the pilot must maintain awareness and the ability to intervene. |

### 11.2 Autopilot Components and Control Loops

![Control Loop Architecture](/images/systems/control%20loop%20architecture.png)

A typical autopilot consists of:

| Component | Description |
|-----------|-------------|
| **Sensors** | IMU (accelerometers, gyroscopes, magnetometer), barometric pressure sensor, GPS receiver, airspeed sensor (fixed-wing), proximity sensors, and optionally a compass and secondary GPS. |
| **Flight controller** | The processor that receives sensor data, computes the aircraft's current state, compares it to the desired state, and sends correction commands to the motors/servos. |
| **Inner control loop** | Manages the aircraft's attitude (pitch, roll, yaw) at high speed (typically 400–1000 Hz). Uses primarily IMU data. This is the loop that keeps the aircraft stable moment-to-moment. |
| **Outer control loop** | Manages the aircraft's position and velocity (altitude hold, position hold, waypoint navigation) at lower speed (typically 10–50 Hz). Uses GPS, barometer, and compass data. This is the loop that guides the aircraft along the planned flight path. |

**Understanding the loop hierarchy matters because:** A sensor failure that affects the inner loop (e.g., IMU failure) will likely cause immediate loss of control. A sensor failure that affects the outer loop (e.g., GPS loss) will cause navigation errors but the aircraft may remain stable — it just won't know where it is.

### 11.3 Flight Termination and Return-to-Home (RTH)

**Flight termination:** An emergency procedure where the autopilot deliberately ends the flight, typically by cutting motor power (allowing the aircraft to descend/crash in a controlled manner) or deploying a parachute. Flight termination is used when continued flight poses a greater risk than an uncontrolled descent.

**Return-to-Home (RTH):** An automated procedure where the aircraft returns to a predetermined location (usually the launch point) at a specified altitude. RTH depends on GPS functionality — if the autopilot cannot determine its position, RTH cannot function correctly.

**Pre-flight preparations for flight termination systems:** Verify the termination system is armed and functional, confirm the RTH altitude is set above all known obstacles along the return path, verify the home point coordinates are correct, and confirm the lost-link behaviour is programmed as intended.

### 11.4 Software and Firmware

**Software version control:** Using incorrect, outdated, or mismatched firmware versions can cause unexpected behaviour including loss of control. Only install verified firmware from approved sources (the manufacturer's official channels).

**Precautions when programming automated flight management systems:** Verify waypoint coordinates against the planned route, confirm altitude references (AGL vs. ASL — a common source of error), verify geofence boundaries, and test the flight plan in simulation before executing in the field.

> **Scenario:** *After a firmware update, your RPAS's RTH altitude is reset to its factory default of 30 m. Your BVLOS survey area has 60 m power transmission towers along the route. You launch and fly 6 km to the survey area. During the survey, you lose C2 link and the aircraft initiates RTH at 30 m. What happens?*

---

## SECTION 12: Instruments and Sensors

### 12.1 Magnetometer (Compass)

The magnetometer measures the Earth's magnetic field and provides a heading reference to the flight controller.

**Key characteristics:**
- Provides a reference to the "North" magnetic pole (not true/geographic north)
- Prone to interference from motors, batteries, power lines, metal structures, and geological formations
- Requires calibration before use, and recalibration when operating in a new location or after system changes
- The difference between magnetic north and true north is called **magnetic declination** (or variation), which varies by location

![Magnetic Declination Explained](/images/systems/declination_explanation.webp)

**Magnetic field anomalies:** Some geographic locations have unusual magnetic field variations caused by iron ore deposits, volcanic rock, or other geological features. Urban environments with steel structures, rebar, and underground utilities can also distort the magnetic field. In BVLOS, the aircraft may fly through areas with different magnetic characteristics than the launch site — this can cause compass errors that affect navigation.

![Magnetometer Sensor](/images/systems/magnatometer.jpg)

> **Key Concept:** Quadcopter motors generate their own magnetic fields that can interfere with compass readings. This is why many RPAS designs mount the compass sensor on a mast or as far from the motors as possible. If your compass is showing erratic readings, motor interference or environmental magnetic anomalies should be your first suspicion.

### 12.2 Altimeter/Barometer

**Altimeter:** Measures altitude above a fixed reference (typically sea level). Aviation is fundamentally grounded in altimetry — all aircraft separation is based on altitude references.

**Barometer:** Measures atmospheric pressure changes. Used by the autopilot flight controller to "hold an altitude." The barometer does NOT measure altitude directly — it measures pressure and infers altitude based on the standard atmosphere model.

**GPS altitude vs. barometric altitude:** GPS provides absolute altitude (height above the WGS-84 ellipsoid), while barometric altitude provides pressure-referenced altitude. The two can differ significantly. Most RPAS use barometric altitude for altitude hold (because it is smoother and faster-responding than GPS altitude) and GPS altitude for absolute position reporting.

**Effect of a blocked static system:** If the barometric pressure port is blocked (by moisture, debris, or icing), the barometer will read a fixed pressure regardless of actual altitude changes. The autopilot's altitude hold will drift because it cannot sense pressure changes. This can cause the aircraft to climb or descend without the pilot being aware.

### 12.3 Airspeed Indicator (Fixed-Wing RPAS)

**Indicated Airspeed (IAS) vs. True Airspeed (TAS):** IAS is what the pitot-static system measures. TAS is the actual speed through the air, corrected for altitude and temperature. At higher altitudes and temperatures, TAS is higher than IAS.

**Blocked pitot system:** If the pitot tube is blocked (insects, ice, debris), the airspeed indicator will show a frozen or incorrect reading. On a fixed-wing RPAS with autopilot speed control, a blocked pitot can cause the autopilot to attempt speed corrections based on false data — potentially slowing the aircraft to a stall or accelerating beyond structural limits.

### 12.4 Inertial Measurement Unit (IMU)

The IMU is the core sensor package that provides the flight controller with attitude and acceleration data. A typical IMU contains:

- **Accelerometers** (3-axis) — Measure acceleration forces including gravity. Used to determine aircraft attitude (pitch and roll) and detect manoeuvring loads.
- **Gyroscopes** (3-axis) — Measure rotational rates. Used for rate stabilization and attitude tracking.
- **Magnetometer** — Sometimes integrated into the IMU, sometimes separate. Provides heading reference.

**Causes of erroneous IMU performance:** Vibration (the most common cause in RPAS), temperature extremes, electromagnetic interference, physical damage, and uncalibrated initial state.

**Effects of an uncalibrated or defective IMU:** Drift in attitude reference (the aircraft slowly tilts or rotates), incorrect position estimates (when used for dead-reckoning navigation), erratic flight behaviour, and inability to maintain stable hover or flight.

---

## SECTION 13: GNSS / GPS

### 13.1 Global Navigation Satellite Systems

GNSS uses satellites for autonomous geo-positioning. Modern RPAS receivers can use multiple constellations simultaneously:

| Constellation | Operator | Satellites |
|---------------|----------|------------|
| **GPS** | United States | 31 satellites |
| **GLONASS** | Russia | 24 satellites |
| **BeiDou** | China | 35+ satellites |
| **Galileo** | European Union | 30 satellites |

Using multiple constellations provides more visible satellites, better geometric diversity, and improved accuracy and availability — especially important in challenging environments like valleys, urban areas, or high-latitude operations in northern Canada.

![Multiple Constellation GNSS](/images/systems/multiple%20constellation%20gns.png)

![GNSS Satellite Navigation System](/images/systems/GNSS motiongrpahic.gif)

### 13.2 GPS Error Sources

![DOP Visualization](/images/systems/DOP%20visualization.jpg)

![Terrain Masking](/images/systems/terain%20masking.webp)

![GPS Multipath Illustration](/images/systems/GPS%20mulitpath%20illustration.png)

**Satellite errors:** Gravitational effects of the Sun and Moon can pull satellites from their planned orbital paths. Solar radiation creates EMI that affects signals before they reach the atmosphere. These errors are generally small and correctable using differential GPS (DGPS) or RTK systems.

**Geometric Dilution of Precision (DOP):** DOP occurs when the visible satellites are clustered in one area of the sky rather than distributed broadly. When all satellites are close together, the position "fix" has poor geometry and accuracy degrades. DOP is measured in several forms: HDOP (horizontal), VDOP (vertical), PDOP (position/3D), and TDOP (time). A DOP value below 2 is excellent; above 5 is poor; above 10 may be unreliable.

**Terrain masking:** Mountains, buildings, or other terrain features block the line of sight between the GPS receiver and satellites. In narrow valleys or urban canyons, terrain masking can reduce the number of visible satellites below the minimum needed for a reliable fix.

**Multipath:** GPS signals reflected from terrain, buildings, water, or the aircraft structure arrive at the receiver with delays, creating phantom satellite positions. Multipath errors are most common near large reflective surfaces (buildings, water bodies, cliff faces).

**GPS jamming and spoofing:** Jamming introduces an erroneous signal that overwhelms the valid GPS transmissions. Spoofing provides false GPS data that appears legitimate. Both can cause the RPAS to navigate to incorrect positions. GPS interference can be monitored using tools like GPSjam.org. The K-Index from NOAA also indicates space weather conditions that can affect GPS performance.

### 13.3 Navigation and Altitude Accuracy

Flight controllers combine IMU data with GPS data through sensor fusion algorithms to achieve positioning accuracy greater than GPS alone. Standard 922.04 requires position accuracy of ±10 m and altitude accuracy of ±16 m for controlled airspace operations.

Actual GPS module accuracy varies significantly between receivers. The original course materials included a comparison table showing CEP50 (Circular Error Probable, 50th percentile) values ranging from 0.73 m (Holybro F9P Rover Lite) to 3.02 m (CUAV M8 CAN), and HEP99 (Height Error Probable, 99th percentile) values ranging from 5.01 m to 22.42 m. RTK-capable receivers offer dramatically better accuracy but require a base station or correction service.

> **Discussion Prompt #3:** *"You are planning a BVLOS survey in a mountainous river valley. What GNSS-related challenges do you anticipate? How would you mitigate them during flight planning and during the mission?"*

---

## SECTION 14: Detect and Avoid Systems (DAA)

### 14.1 The DAA Requirement for BVLOS

In BVLOS operations, pilots cannot rely on human vision to detect and avoid other aircraft. Standard 922.10 requires a technological solution for detecting and avoiding manned aircraft in the operational area.

However, Standard 922.10 is **optional** — manufacturers may choose not to declare against it. If the RPAS does not have onboard DAA capability, the operator can instead use **Standard 923 Vision-Based DAA**, where trained visual observers monitor for incoming traditional aircraft while not being able to see the RPA itself. The visual observers effectively become the detect-and-avoid system.

**Technological DAA options include:**

| DAA Technology | Description |
|----------------|-------------|
| **Radar** | Active detection, works in all visibility conditions, range varies by system |
| **ADS-B receivers** | Passive detection of transponder-equipped aircraft, good range, but not all aircraft are equipped |
| **Electro-Optical/Infrared (EO/IR) sensors** | Camera-based detection, limited by visibility conditions |
| **Acoustic sensors** | Sound-based detection, limited range, affected by wind noise |
| **Combination systems** | Multiple sensor types fused for comprehensive detection |

### 14.2 Transponder Types

> **Video Resource:** [Transponder Types Evolution](https://youtu.be/eHVjbUmnQSg?si=Hw1FoBy4L1mO-z0V) — Excellent overview of Mode A, C, S, and ADS-B transponder technology.

Understanding transponder types helps you evaluate what traffic your DAA system can and cannot detect:

| Transponder Type | Description |
|------------------|-------------|
| **Mode A** | Temporary four-digit code (0000–7777, 4096 discrete codes) issued by air traffic control. Only transmits when interrogated by a ground radar. Provides identification only, no altitude. |
| **Mode C** | Adds encoded pressure altitude information to Mode A. Requires interrogation. Minimum requirement for "transponder-required airspace" per NAV CANADA. |
| **Mode S** | 24-bit address issued by ICAO. Includes Mode A and Mode C data. Periodic broadcast (does not require interrogation). Minimum requirement for TCAS-equipped aircraft. |
| **ADS-B** | Automatic Dependent Surveillance-Broadcast. 24-bit ICAO address, repeated broadcast, includes Mode A, Mode C, GPS location, and altitude. Provides the richest data for DAA systems but NOT universally equipped — many GA aircraft, ultralight aircraft, and helicopters operating below 400 ft in uncontrolled airspace may not carry transponders at all. |

### 14.3 NAV CANADA ADS-B Rollout Timeline

NAV CANADA has announced a phased rollout of ADS-B requirements:

- **Phase 1 (2026-2028):** Voluntary equipage encouraged, infrastructure deployment
- **Phase 2 (No earlier than 2028):** Mandatory ADS-B Out in Class A, B, and C airspace
- **Phase 3 (Future):** Potential expansion to additional airspace classes

**Implications for L1C operations:** Even after the ADS-B mandate, aircraft operating in Class G uncontrolled airspace (where L1C operations primarily occur) may not be required to carry ADS-B equipment. This means ADS-B-only DAA solutions will continue to have detection gaps for the low-altitude VFR traffic most likely to conflict with BVLOS operations.

> **Key Concept — The DAA Gap:** The aircraft most likely to conflict with L1C BVLOS operations — low-flying VFR traffic in uncontrolled airspace (bush planes, helicopters, crop dusters, recreational aircraft) — are the ones LEAST likely to be equipped with ADS-B or any transponder. An ADS-B-only DAA system will not detect these aircraft. This is why vision-based DAA (Standard 923) using trained visual observers remains an important option.

### 14.4 Standard 923 — Vision-Based Detect and Avoid

Standard 923 allows the use of trained visual observers as the DAA system for BVLOS operations. The VOs maintain visual contact with the airspace in which the RPA is operating, detect approaching traffic, and communicate with the pilot to initiate avoidance manoeuvres. This is the "declaration is optional to the manufacturer" note from the original course materials — operators can conduct BVLOS using human vision-based DAA under Standard 923 instead of requiring the manufacturer to declare against Standard 922.10.

---

## SECTION 15: Maintenance and Record Keeping

### 15.1 Maintenance Control Manual (CARs 901.211)

Every RPAS operator must establish and maintain a Maintenance Control Manual that includes:
- The name of every person authorized by the operator to perform maintenance actions
- Maintenance records as required under 901.223(1)(e)
- Procedures for servicing, maintenance, and pre-flight/post-flight inspections consistent with manufacturer instructions

The MCM must be made available to the Minister on request.

### 15.2 Training Program — Maintenance (CARs 901.219)

The RPOC training program must include training on RPA servicing and ground handling (901.219(2)(b)(ii)). Maintenance personnel must be trained and competent before performing maintenance actions.

### 15.3 Record Keeping (CARs 901.223)

Maintenance records must include:
- The names of persons who performed maintenance actions
- The dates on which they were undertaken
- For modifications: the manufacturer, model, and description of parts/equipment installed
- If applicable, any instructions provided to complete the work

Records must be available on request by the Minister and retained for the required period (12–24 months depending on record type).

### 15.4 Manufacturer Instructions and Modifications

Always follow the manufacturer's instructions for maintenance, including identifying when independent verification is required. Modifications to RPAS must demonstrate that Standard 922 requirements continue to be met, and must be performed in accordance with manufacturer instructions. A modifier who makes a declaration for a modified RPAS takes on the same regulatory responsibilities as the original manufacturer.

---

## SECTION 16: Knowledge Check — Systems Module

### Recall-Level Questions

**Q1.** What does the inverse-square law describe in the context of radio signals?
- A) Signal strength doubles with each doubling of distance
- B) Signal strength drops to one-quarter when distance is doubled
- C) Signal frequency halves with each doubling of distance
- D) Signal latency doubles with each doubling of distance
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** The inverse-square law states that signal intensity is inversely proportional to the square of the distance. Double the distance = (1/2)² = 1/4 the signal strength.

</details>

**Q2.** What is a single point of failure?
- A) Any component that has failed and needs replacement
- B) A component whose failure alone would result in loss of control or an unsafe condition
- C) The weakest component in the RPAS
- D) A component that has failed multiple times
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** A single point of failure is any component whose individual failure would result in loss of control or an unsafe condition, without a redundant backup.

</details>

**Q3.** Which transponder type provides GPS position information in its broadcast?
- A) Mode A
- B) Mode C
- C) Mode S
- D) ADS-B
<details>
<summary>Click to reveal answer</summary>

**Answer: D.** ADS-B includes Mode A code, Mode C altitude, AND GPS position in its broadcast, providing the richest data for DAA systems.

</details>

**Q4.** Why should you NOT use water on a lithium battery fire?
- A) Water spreads the flames
- B) Water can react with lithium and accelerate the fire
- C) Water damages the battery casing
- D) Water conducts electricity
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** Water can react with lithium metal, producing hydrogen gas and intensifying the fire. Use dry chemical, sand, or specialized lithium battery fire extinguishers.

</details>

### Application-Level Questions

**Q5.** You are planning a 10 km BVLOS survey and need to choose between a 900 MHz and a 2.4 GHz C2 link. The survey area is rural with scattered trees and low hills. Which frequency would you choose and why?
- A) 2.4 GHz because it has higher data rates
- B) 900 MHz because it has better range and obstacle penetration for rural terrain
- C) 2.4 GHz because it is less susceptible to interference
- D) Either frequency would work equally well at 10 km
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** 900 MHz offers typical LOS range of 10–100+ km with excellent obstacle penetration, making it far better suited for a 10 km rural survey with terrain obstacles. 2.4 GHz typically maxes out at 1–5 km LOS with only moderate penetration.

</details>

**Q6.** During a BVLOS mission, your GCS shows the aircraft's compass heading suddenly shifts 30° while the GPS track remains steady. What is the most likely cause?
- A) A GPS error
- B) Magnetic interference at the aircraft's location (e.g., power lines, geological anomaly)
- C) A firmware malfunction
- D) Wind shifting the aircraft's orientation
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** A sudden compass deviation while GPS track is unaffected is characteristic of localized magnetic interference. The magnetometer is affected by the local magnetic environment while GPS is not (GPS determines position from satellite signals, not magnetic fields). Power lines, underground pipelines, or geological features can create magnetic anomalies.

</details>

### Analysis-Level Questions

**Q7.** *Discussion/Essay:* You are operating a small RPA BVLOS over a flat agricultural area. The RPAS has a single GPS receiver (no RTK), single battery, single C2 link on 2.4 GHz, and no onboard DAA. You are using visual observers under Standard 923 for traffic detection. Identify all single points of failure in this system and propose mitigations for each.

<details>
<summary>Click to reveal answer</summary>

**Model Answer Elements:** Single points of failure include: (1) Single GPS receiver — loss means no position, no RTH capability, no geofence enforcement. Mitigation: multi-constellation receiver, add RTK or secondary GPS. (2) Single battery — failure means loss of power and crash. Mitigation: dual battery system or parachute as secondary safety. (3) Single 2.4 GHz C2 link — vulnerable to interference from Wi-Fi, limited range. Mitigation: add backup link on different frequency (e.g., 900 MHz), or cellular backup. (4) No onboard DAA — relying entirely on VOs who cannot see the aircraft itself. Mitigation: add ADS-B receiver for transponder-equipped traffic detection, position VOs to maximize airspace coverage along the flight route. Additional systemic risks: the 2.4 GHz frequency is crowded and has limited range for BVLOS, the flat agricultural area may have seasonal crop-dusting aircraft operating below 400 ft without transponders.

</details>

---

## SECTION 17: Discussion Prompts for Instructor-Led Session

### Systems Thinking (10 minutes)
*"In a manned aircraft, if the compass fails, the pilot looks out the window and navigates by visual reference. If the altimeter fails, the pilot looks at the ground and estimates height. In BVLOS, what replaces each of these human capabilities? What happens when the replacement also fails?"*

### C2 Link Selection (10 minutes)
*"A client asks you to fly a BVLOS survey in a remote area 200 km north of the nearest cell tower, in mountainous terrain. What C2 link technology would you use? What are the trade-offs? How would you plan for lost-link scenarios?"*

### Real-World EMI (5 minutes)
*"You set up your GCS for a BVLOS pipeline survey and notice that your C2 link signal quality is unusually poor, even though you tested it at your shop yesterday and it was fine. The pipeline you are surveying runs alongside a high-voltage transmission line. What is happening, and what can you do?"*

### Battery Management Philosophy (5 minutes)
*"What is your personal minimum battery threshold for initiating RTH during a BVLOS mission? How do you account for headwinds on the return leg, cold temperature effects on remaining capacity, and the possibility that you may need to divert to an alternate landing site?"*

---

## REFERENCES

- Advisory Circular (AC) No. 922-001, Issue 02 — RPAS Safety Assurance
- Canadian Aviation Regulations (CARs) SOR/96-433, Part IX — Remotely Piloted Aircraft Systems
- Standard 922 — RPAS Safety Assurance (all sections)
- Standard 923 — Vision-Based Detect and Avoid
- *From the Ground Up* (MacDonald, 2025) — "Radio Navigation," "Airframe," "Theory of Flight"
- NAV CANADA ADS-B Implementation Plan
- NOAA Space Weather Prediction Centre — Planetary K-Index
- ITU — Definition of Electromagnetic Interference

---

*End of Module L1C02 — RPA Airframes, Power Plants, Propulsion, and Systems*
*Next Module: L1C03 — Human Factors*
