---
title: "L1C04 — Meteorology"
---

# L1C04 — Meteorology

> **Module Type:** Exam Content — TP 15530 Section 4
> **ICAO Competency Codes:** APK (Application of Procedures), KNO (Knowledge)
> **Estimated Duration:** 2.5–3 hours
> **TP 15530 Mapping:** Section 4 — Meteorology
> **Regulatory References:** CARs 901.35 (icing); TC AIM RPA Chapter 3.2.22; NAV CANADA Aviation Weather Services Guide; NRC Urban Wind Flow Report

---

<details>
<summary>Instructor Notes — Module Purpose</summary>

Meteorology affects RPAS operations differently than manned aviation in several critical ways. RPAS are lighter, have less kinetic energy to penetrate wind and turbulence, rely on barometric sensors that are affected by pressure changes, and — critically for BVLOS — the pilot cannot feel the weather. A manned pilot feels turbulence through the seat, sees rain on the windscreen, and senses temperature changes. An RPAS pilot in BVLOS sees only what the telemetry reports, and flight controllers can mask turbulence effects by automatically compensating — drawing more power while hiding the problem from the pilot until battery reserves are unexpectedly depleted.

**Teaching approach:** This module benefits from real weather data. Pull up current METAR, TAF, and GFA products during the lesson. Have students practice interpreting actual weather reports for their local area and determining whether L1C operations would be permissible. The TC Urban Airflow video should be shown during the wind section.

**Critical RPAS-specific insight to emphasize:** In manned aircraft, the pilot feels turbulence. In RPAS, the flight controller compensates for turbulence automatically — the aircraft appears to fly smoothly on the GCS display while consuming significantly more energy. The pilot may not realize they are flying in dangerous turbulence until the battery runs critically low. This is one of the most important meteorological concepts unique to RPAS.

</details>

---

## LEARNING OBJECTIVES

After completing this module, you will be able to:

1. Describe the composition and layers of Earth's atmosphere and the conditions of the Standard Atmosphere
2. Define atmospheric pressure, station pressure, sea level pressure, and altimeter setting
3. Explain how pressure systems drive weather and air movement in the Northern Hemisphere
4. Recall the factors affecting density altitude and explain how it impacts RPAS performance
5. Explain pressure altitude and the differences between altimeter setting and standard pressure regions
6. Describe how RPAS altitudes differ from manned aircraft altimeter-referenced altitudes
7. Explain the relationship between lapse rate, temperature-dew point spread, and cloud formation
8. Explain the potential effects of moisture and icing on RPA, including CARs 901.35 requirements
9. Characterize stable and unstable air masses and their effects on RPAS operations
10. Identify turbulence types and explain how flight controllers can mask turbulence from the pilot
11. Explain wind effects including pressure gradient, friction layer, wind shear, land/sea breezes, and anabatic/katabatic winds
12. Describe frontal weather and its impact on RPAS operations
13. Identify thunderstorm hazards and explain avoidance procedures
14. Decipher METAR, TAF, and GFA products and assess weather against operational requirements

---

## SECTION 1: Earth's Atmosphere

### 1.1 Atmospheric Composition

The atmosphere is composed primarily of gases that affect flight operations:

| Gas | Percentage by Volume | Significance for Aviation |
|---|---|---|
| Nitrogen (N₂) | 78.09% | Inert, provides atmospheric structure |
| Oxygen (O₂) | 20.95% | Required for combustion engines |
| Argon (Ar) | 0.93% | Inert |
| Carbon Dioxide (CO₂) | ~0.04% | Variable, contributes to greenhouse effect |
| Water Vapour (H₂O) | 0–4% (variable) | Critical for weather, affects density |

Water vapour is the most variable component and is the primary driver of weather phenomena. Despite its relatively low concentration, water vapour has a disproportionate effect on atmospheric behaviour because of its ability to change phase (gas → liquid → solid) and release or absorb significant amounts of latent heat.

### 1.2 Atmospheric Layers

The atmosphere is divided into distinct layers, each with different characteristics relevant to aviation:

| Layer | Altitude | Characteristics | L1C Relevance |
|-------|----------|-----------------|---------------|
| Troposphere | Surface to ~36,000 ft (11 km) | Where virtually all weather occurs; temperature decreases ~2°C per 1,000 ft; contains ~75% of atmosphere's mass | All L1C operations occur here |
| Stratosphere | ~36,000 to ~160,000 ft (50 km) | Temperature stable or increases due to ozone; very little weather | Not relevant |
| Mesosphere | Above stratosphere | Temperature decreases; where meteorites burn up | Not relevant |
| Thermosphere | Above mesosphere | Temperature rises from solar radiation; very few air molecules | Not relevant |
| Exosphere | Outermost layer | Transitions to space | Not relevant |

### 1.2 Atmospheric Properties

The atmosphere behaves as a fluid with properties that directly affect flight:

- Rising air masses in areas of decreasing pressure lead to expansion and cooling
- Cooling may bring condensation, resulting in cloud formation
- Sinking air: external pressure increases, volume decreases, and temperature rises
- The atmosphere has capacity to expand through lifting agents: thermal (solar heating), frontal (air mass interaction), mechanical (terrain forcing), and convergence (low-pressure systems)

### 1.3 The Standard Atmosphere (ISA)

The International Standard Atmosphere defines baseline conditions against which actual conditions are compared:

| Parameter | ISA Value |
|-----------|-----------|
| Sea level pressure | 1013.25 hPa (29.92 inHg) |
| Sea level temperature | 15°C |
| Temperature lapse rate | 2°C per 1,000 ft (6.5°C per 1,000 m) in troposphere |
| Sea level density | 1.225 kg/m³ |

Any deviation from ISA conditions affects altimeter readings, air density, and RPAS performance. The Standard Atmosphere is a model, not reality — actual conditions will always differ.

### 1.4 Atmospheric Density

![Atmospheric density and its relationship to altitude, temperature, and humidity](/images/meteorology/Atmospheric Density.png)

Air density directly affects RPAS performance because propellers and rotors generate lift by accelerating air — denser air produces more lift per revolution:

| Factor | Effect on Density | Why |
|--------|-------------------|-----|
| Temperature | Warm air is less dense | Warm air expands, takes up more volume |
| Humidity | Humid air is less dense | Water vapour molecules lighter than nitrogen/oxygen |
| Altitude | Density decreases with altitude | Air particles most dense near surface |

> **Key Concept for RPAS:** On a hot, humid, high-altitude day, your RPAS will produce less lift per watt of motor power. Flight times will be shorter, maximum payload capacity will be reduced, and the aircraft may be sluggish in response to control inputs. This is density altitude in action.

---

## SECTION 2: Atmospheric Pressure and Pressure Systems

### 2.1 Pressure Definitions

| Term | Definition |
|------|------------|
| Atmospheric pressure | The weight of the air column above a given point; decreases with altitude |
| Station pressure | The actual atmospheric pressure at a weather observation station, uncorrected for altitude |
| Sea level pressure (SLP) | Station pressure corrected to sea level equivalent; allows comparison between stations at different elevations |
| Altimeter setting | The pressure value set on an altimeter so it reads correct altitude ASL at a known reference point; in Canada expressed in inHg; standard setting is 29.92 inHg |

### 2.2 Pressure Systems and Weather

![Atmospheric pressure and how it varies with altitude](/images/meteorology/Atmospheric Pressure.png)

Atmospheric pressure determines the weather that is likely to occur:

| Pressure System | Weather | Air Flow (Northern Hemisphere) | Air Movement |
|-----------------|---------|-------------------------------|--------------|
| High pressure | Fair weather, clear air | Clockwise and outward (diverging) | Descends, warming and drying as it sinks |
| Low pressure | Unsettled weather, clouds, precipitation | Counterclockwise and inward (converging) | Rises, cools, condensation forms clouds |

**The mnemonic:** Air flows from high to low pressure. The steeper the pressure gradient (closer isobars on a weather map), the stronger the wind.

### 2.3 Effects of Temperature on Pressure

![Effects of temperature on atmospheric pressure and altimeter readings](/images/meteorology/Effects of Temperature.png)

Temperature affects the rate of change in pressure with height:

- In warm air, pressure decreases more slowly with altitude (the pressure column is "stretched")
- In cold air, pressure decreases more rapidly with altitude (the pressure column is "compressed")

This has a direct implication: **"High to low, watch out below."** When flying from a high-pressure area to a low-pressure area, your altimeter will indicate a higher altitude than your actual altitude. Similarly, when flying from warm air to cold air, your true altitude will be lower than indicated. For RPAS operating below 400 ft AGL near terrain, this altimeter error matters.

**Effects of temperature on RPAS altitude display:** The original course materials illustrate this with a critical diagram showing three pressure columns at 30°C, 15°C, and 0°C. At the same indicated pressure level (e.g., 5,000 ft), the true altitude is higher in warm air and lower in cold air. Warm air "stretches" the atmosphere, cold air "compresses" it.

---

## SECTION 3: Meteorological Aspects of Altimetry

### 3.1 Altimeter Setting Region vs. Standard Pressure Region

This distinction is important for understanding how manned aircraft and RPAS reference altitude differently:

| Region | Altimeter Setting | Purpose | Reference |
|--------|-------------------|---------|-----------|
| Altimeter Setting Region | From closest weather station (e.g., 30.25 inHg) | Vertical separation in lower atmosphere | Altitude ASL |
| Standard Pressure Region | Standard 29.92 inHg | Constant vertical separation at high altitude | Pressure altitude (flight levels) |
| RPAS Altitude | Barometric + GPS from launch point | Operational reference | Altitude AGL from launch site |

**Critical Note:** RPAS altitudes are NOT the same as manned aircraft altimeter-referenced altitudes. Most RPAS reference altitude AGL from the launch point, using a combination of barometric and GPS data. This means the altitude displayed on your GCS is relative to where you launched, not corrected to a regional altimeter setting or sea level. If terrain elevation changes significantly along your BVLOS route, your "400 ft AGL" at the launch site may be considerably more or less than 400 ft AGL at a distant waypoint.

### 3.2 Density Altitude

Density altitude is the altitude in the Standard Atmosphere at which the current air density would be found. It represents the "performance altitude" — what altitude your RPAS "thinks" it's flying at based on air density.

| Factor | Effect on Density Altitude | Effect on Performance |
|--------|---------------------------|----------------------|
| Higher temperature | Increases density altitude | Reduces performance |
| Higher humidity | Increases density altitude | Reduces performance |
| Higher elevation | Increases density altitude | Reduces performance |
| Lower atmospheric pressure | Increases density altitude | Reduces performance |

#### Density Altitude Calculation

**Quick Formula (Koch Chart approximation):**
```
Density Altitude = Pressure Altitude + (120 × [OAT − ISA Temp])
```

Where:
- **Pressure Altitude** = Elevation + [(29.92 − Current Altimeter Setting) × 1,000]
- **ISA Temp at elevation** = 15°C − (2°C × [Elevation in 1000s of feet])
- **OAT** = Outside Air Temperature (actual)

#### Reference: ISA Standard Temperatures by Elevation

| Elevation (ft) | Elevation (m) | ISA Temperature | Pressure (hPa) |
|----------------|---------------|-----------------|----------------|
| Sea Level | 0 | 15°C (59°F) | 1013.25 |
| 1,000 | 305 | 13°C (55°F) | 977 |
| 2,000 | 610 | 11°C (52°F) | 942 |
| 3,000 | 914 | 9°C (48°F) | 908 |
| 4,000 | 1,219 | 7°C (45°F) | 875 |
| 5,000 | 1,524 | 5°C (41°F) | 843 |
| 6,000 | 1,829 | 3°C (37°F) | 812 |
| 8,000 | 2,438 | −1°C (30°F) | 753 |
| 10,000 | 3,048 | −5°C (23°F) | 697 |

#### Density Altitude Quick Reference — Common Scenarios

| Scenario | Elevation | Temp | ISA Deviation | Approx. Density Alt | Performance Impact |
|----------|-----------|------|---------------|---------------------|-------------------|
| Cool morning, low elevation | 500 ft | 10°C | −4°C below ISA | ~20 ft | Excellent — better than rated |
| Standard day, sea level | 0 ft | 15°C | ISA | 0 ft | As rated |
| Hot summer afternoon | 1,000 ft | 35°C | +20°C above ISA | ~3,400 ft | Significantly reduced |
| High altitude site | 4,000 ft | 25°C | +18°C above ISA | ~6,200 ft | Severely reduced |
| Extreme (AB summer, mountains) | 5,000 ft | 32°C | +27°C above ISA | ~8,200 ft | Near aircraft limits |
| Cold winter operation | 2,000 ft | −15°C | −26°C below ISA | ~−1,100 ft | Excellent lift, but battery issues |

#### Worked Example for Students

**Scenario:** Planning a survey at a site near Canmore, AB
- **Site elevation:** 4,500 ft (1,372 m)
- **Forecast temperature:** 28°C
- **Current altimeter setting:** 29.85 inHg

**Step 1 — Calculate Pressure Altitude:**
```
Pressure Alt = 4,500 + [(29.92 − 29.85) × 1,000]
             = 4,500 + [0.07 × 1,000]
             = 4,500 + 70
             = 4,570 ft
```

**Step 2 — Determine ISA Temperature at this altitude:**
```
ISA Temp = 15°C − (2°C × 4.5)
         = 15°C − 9°C
         = 6°C
```

**Step 3 — Calculate ISA Deviation:**
```
Deviation = 28°C − 6°C = +22°C above ISA
```

**Step 4 — Calculate Density Altitude:**
```
Density Alt = 4,570 + (120 × 22)
            = 4,570 + 2,640
            = 7,210 ft
```

**Impact:** Your RPAS will perform as if flying at 7,210 ft in ISA conditions. If rated for sea level performance, expect ~20-25% reduction in thrust, climb rate, and endurance. Plan conservative battery reserves.

**Assessing density altitude for RPAS operations:** Before launch, assess the current density altitude and compare it to your RPAS's performance data. Manufacturers typically rate performance at or near ISA conditions. On a hot day at a high-altitude site, your actual endurance, climb rate, and payload capacity may be significantly less than published specifications.

### 3.3 Altimeter Errors

| Error Type | Cause | Effect | Mitigation |
|------------|-------|--------|------------|
| Pressure Source Error | Barometric pressure varies by location | Flying high-to-low pressure: altimeter reads HIGH, aircraft is actually LOWER | Update altimeter settings; "High to low — watch out below" |
| Temperature Error | Altimeter calibrated for ISA; actual temps differ | In cold air: aircraft is lower than indicated | Apply temperature corrections; "Hot to cold — watch out below" |
| Mountain Effect Error | Wind funnelled around mountains causes local pressure decrease (Bernoulli) | Can create errors up to 3,000 ft in extreme cases | Account for mountain wave effects; maintain extra terrain clearance |

> **Discussion Prompt #1:** *"You launch a BVLOS survey at a site that is 500 m ASL. Your survey route takes the aircraft over terrain that drops to 200 m ASL 8 km away. Your GCS shows the aircraft at 120 m (approximately 400 ft) — but that's 120 m above your launch site, not 120 m AGL at the aircraft's current position. What is the aircraft's actual altitude AGL at the far end of the route? Is it still within the 400 ft AGL limit?"*

<details>
<summary>Click to reveal answer</summary>

**Answer:** At the far end, the terrain is 300 m lower than the launch site. The aircraft is at 120 m above launch + 300 m terrain drop = 420 m (approximately 1,378 ft) AGL. This significantly exceeds the 400 ft AGL limit. This scenario illustrates why terrain-following capability or terrain-adjusted altitude planning is critical for BVLOS operations over variable terrain.

</details>

---

## SECTION 4: Moisture and Icing

### 4.1 Moisture, Clouds, and Fog

**Lapse rate and cloud formation:** As air rises, it cools. The rate of cooling depends on whether the air is saturated (wet adiabatic lapse rate: approximately 1.5°C/1,000 ft) or unsaturated (dry adiabatic lapse rate: approximately 3°C/1,000 ft). When rising air cools to the dew point temperature, water vapour condenses and clouds form. The height of the cloud base can be estimated from the temperature-dew point spread at the surface.

**Effects of moisture on RPAS:** Moisture can affect electronics (corrosion, short circuits), optical sensors (lens fogging, degraded camera performance), propeller performance (water accumulation changes balance and aerodynamics), and airframe integrity (moisture ingress into composite structures).

**Fog:** Condensed water droplets at ground level — essentially a surface-based cloud. Fog is dynamic and can develop or dissipate rapidly. Do not operate an RPAS in fog even if equipped with lights — VLOS is impossible in fog. For BVLOS, fog reduces VO effectiveness and may affect C2 link performance. Fog also brings the risk of icing on cold surfaces.

**Cloud significance for RPAS:** Cloud base height indicates where manned VFR traffic will be concentrated. Low ceilings compress VFR traffic into the same low-altitude airspace where RPAS operate, increasing the risk of conflicts. Observed vertical cloud development (towering cumulus, cumulonimbus) indicates convective activity and potential thunderstorms.

### 4.2 Aircraft Icing (CARs 901.35)

Icing is one of the most dangerous weather hazards for RPAS, and RPAS are MORE vulnerable to icing than manned aircraft because of their smaller size, lower mass, and higher surface-area-to-weight ratio.

**CARs 901.35(1)** addresses operations where icing conditions are observed, reported to exist, or are likely to be encountered. Pilots must be aware of the regulatory requirements and their RPAS's declared icing capabilities (or lack thereof).

**How icing forms:** When the aircraft surface is at or below 0°C and encounters supercooled water droplets (liquid water existing below freezing), the droplets freeze on contact. This occurs most commonly in clouds, freezing rain, freezing drizzle, and freezing fog.

**Components susceptible to icing:**

| Component | Icing Effect |
|-----------|--------------|
| Propellers/rotors | Changes airfoil shape, reduces efficiency, creates imbalance; small RPAS rotors affected faster than manned aircraft propellers |
| Pitot tubes | Blocks pressure inlet, causing erroneous airspeed readings |
| Barometric pressure ports | Blocks static port, causing altitude errors |
| Camera/sensor lenses | Obscures payload |
| Airframe | Adds weight, changes aerodynamic profile, can jam control surfaces |
| Antennas | Degrades C2 link and GPS performance |

**How fast can icing affect an RPA?** Very fast. NRC research on small UAV rotor icing shows that performance degradation can occur within minutes in moderate icing conditions. Unlike large aircraft that can accumulate ice for extended periods before performance is critically affected, small RPAS rotors have very low tolerance for ice accumulation.

**Recognizing icing in BVLOS:** Without visual contact, the pilot must infer icing from telemetry: increased motor power consumption to maintain altitude (the classic RPAS icing signature), reduced airspeed with no change in wind conditions, anomalous barometric readings, and GPS/compass degradation if antennas are affected.

**Using NAV CANADA icing information:** The instructor should demonstrate how to view icing conditions using the NAV CANADA Collaborative Flight Planning Services (CFPS) website, including icing level forecasts on the GFA.

> **Key RPAS-Specific Insight:** The L1C04 original materials reference the NRC research on UAV rotor icing (Benmeddour, 2020). This is a critical resource. Unlike manned aircraft where the pilot can feel and see icing, RPAS pilots in BVLOS may not recognize icing until performance has degraded significantly. The first indication may be the flight controller drawing unusually high motor current to maintain altitude — but most GCS displays do not prominently alert on gradual current increases. By the time the pilot notices, the aircraft may not have sufficient power reserves to return home with the accumulated ice load.

---

## SECTION 5: Stability and Instability

### 5.1 Air Mass Characteristics

| Air Mass Type | Vertical Motion | Turbulence | Visibility | Precipitation | Cloud Type |
|---------------|-----------------|------------|------------|---------------|------------|
| Stable | Resists vertical motion | Smooth air, little turbulence | Poor (smog/haze trapped in layers) | Steady, if any | Stratiform (layered) |
| Unstable | Moves vertically easily | Turbulent air | Good (vertical mixing disperses pollutants) | Showery | Cumuliform (puffy, vertical) |

Stable conditions near the surface can trap pollutants and reduce visibility — important for VO operations under Standard 923. Unstable conditions create convective turbulence and updrafts/downdrafts particularly dangerous for small RPAS.

---

## SECTION 6: Turbulence

### 6.1 Types of Turbulence

| Turbulence Type | Cause | Characteristics |
|-----------------|-------|-----------------|
| Convective | Uneven surface heating creating thermals | Most common on sunny afternoons over dark surfaces; creates updrafts/downdrafts displacing small RPA vertically |
| Mechanical | Wind flowing over/around obstacles (buildings, trees, terrain) | Creates eddies and vortices on downwind side; urban areas see 40% turbulence intensity vs. 10% in open areas |
| Frontal | Passage of weather fronts, especially cold fronts | Lifting of warm air over cold air creates turbulent zones |
| Orographic | Wind flowing over mountain ridges and through valleys | Creates mountain waves, rotor turbulence, severe downdrafts on lee side |
| Wind shear | Sudden change in wind speed/direction over short distance | Can be vertical or horizontal; particularly dangerous near ground |
| Gusts and squalls | Sudden brief increases in wind speed | Gusts last seconds, squalls last minutes; can exceed RPAS structural limits |

### 6.2 The Critical RPAS-Specific Turbulence Issue

> **THIS IS ONE OF THE MOST IMPORTANT CONCEPTS IN THIS MODULE:** In a manned aircraft, the pilot physically feels turbulence. Bumps, jolts, and altitude excursions are immediately apparent through the seat, the controls, and the visual scene. In an RPAS, the flight controller automatically compensates for turbulence — the aircraft appears to fly smoothly on the GCS telemetry display. The pilot sees no indication of a problem. Meanwhile, the motors are working harder, consuming more energy, and the battery is depleting faster than planned. The pilot's first indication of a problem may be a low-battery warning — at which point the aircraft may not have sufficient energy reserves to return home against the same headwind that is causing the turbulence. This is how "clear air" BVLOS missions end in crashes.

**Mitigation:** Monitor motor power consumption (current draw) as a turbulence indicator, not just position and altitude. If power consumption is higher than expected for the current flight phase, the aircraft is fighting something — likely wind or turbulence that the flight controller is masking from you.

---

## SECTION 7: Wind

### 7.1 Wind Fundamentals

Wind is caused by differences in air pressure from uneven heating of Earth's surface. The steeper the pressure gradient (closer isobars), the stronger the wind.

| Force/Effect | Description | Result |
|--------------|-------------|--------|
| Pressure gradient force | Drives air from high to low pressure | Primary wind driver |
| Coriolis effect | Deflects moving air to the right in Northern Hemisphere | Creates counterclockwise flow around lows, clockwise around highs |
| Friction | Surface friction within first ~2,000 ft AGL | Slows wind and changes direction; wind crosses isobars toward lower pressure |

### 7.2 Wind Phenomena Relevant to BVLOS

| Phenomenon | Cause | When/Where | BVLOS Impact |
|------------|-------|------------|--------------|
| Diurnal wind variation | Surface heating brings upper-level winds down | Stronger afternoon winds | Morning operations often calmer |
| Sea breeze | Land heats faster than water during day | Coastal areas, daytime | Onshore wind develops |
| Land breeze | Land cools faster than water at night | Coastal areas, nighttime | Offshore wind develops |
| Anabatic wind | Solar heating of mountain slopes | Daytime, mountain slopes | Upslope wind; air rises |
| Katabatic wind | Radiative cooling of mountain slopes | Nighttime, valleys/fjords | Downslope wind; can be sudden and strong |
| Wind gusts | Mechanical turbulence, convection, fronts, terrain channelling | Variable | Gust factor critical — 20 km/h sustained with 40 km/h gusts may exceed limits |

### 7.3 Urban Airflow

![Urban airflow patterns showing wind effects around buildings](/images/meteorology/urban airflow.jpg)

Transport Canada's Urban Airflow guidance identifies five key wind effects near buildings (SDSTV): Speed, Direction, Shear, Turbulence, and Vorticity. Wind speed at 400 ft AGL (122 m) is approximately 1.5 times the weather station's reported hourly wind speed at 10 m. At building rooftop level, vortex shedding creates side-to-side oscillation that can destabilize multirotor aircraft. The venturi effect between buildings can double the local wind speed. While L1C operations are typically in rural/unpopulated areas, understanding urban airflow is valuable for pre-positioning, transit, and Advanced operations.

---

## SECTION 8: Fronts and Frontal Weather

### 8.1 Why Fronts Matter for BVLOS Operations

Fronts are the #1 cause of rapid weather deterioration that catches pilots off-guard. A BVLOS mission that launches in good conditions can encounter dangerous weather mid-flight if a front arrives faster than forecast. Unlike manned pilots who can see and feel weather changes, RPAS pilots must anticipate fronts using forecasts and recognize subtle telemetry changes.

**The core problem:** Fronts move. Your operating area doesn't. If a front arrives during your 2-hour BVLOS survey, you may face gusty winds, precipitation, and turbulence with an aircraft 8 km away from recovery.

### 8.2 Cold Front vs Warm Front — Operational Comparison

| Characteristic | Cold Front | Warm Front |
|----------------|------------|------------|
| **How it moves** | Cold air bulldozes under warm air, forcing rapid lift | Warm air gradually slides up and over cold air |
| **Weather band width** | Narrow (50-100 km) — passes quickly | Wide (200-400 km) — takes longer to pass |
| **Warning time** | Less warning — can arrive 2-4 hrs earlier than forecast | More warning — gradual deterioration over 6-12 hrs |
| **Precipitation** | Heavy showers, thunderstorms, hail possible | Steady rain/drizzle, lower intensity |
| **Wind** | Sharp wind shift (often 90°+), gusty | Gradual wind shift, less gusty |
| **After passage** | Rapid clearing, but gusty for 1-3 hrs | Slow improvement, may stay overcast |
| **Typical speed (Western Canada)** | 30-50 km/h | 15-25 km/h |
| **RPAS hazard level** | HIGH — rapid onset, severe turbulence | MODERATE — low ceilings, reduced visibility, icing risk |

### 8.3 Operational Timeline — Planning Around a Cold Front

Use this timeline when a cold front is forecast to pass through your operating area:

| Time Before Front | What You'll See | Forecast Products | Action |
|-------------------|-----------------|-------------------|--------|
| **24 hrs** | Nothing yet at surface | GFA shows frontal position; TAF may show TEMPO or FM groups | Review timing — can you complete before arrival? |
| **12 hrs** | Cirrus increasing from west | GFA confirms timing; check frontal speed trend | Final scheduling decision — build in buffer |
| **6 hrs** | Altocumulus/altostratus, pressure starting to fall | Updated TAF; check if front accelerating | Committed or scrubbed — no launching if front arrives mid-mission |
| **3 hrs** | Cumulus building, pressure falling faster, wind picking up | METAR showing changes | If airborne: begin recovery. If not launched: hold. |
| **1 hr** | Towering cumulus, gusty wind, possible precip on horizon | METAR deteriorating rapidly | Aircraft must be recovered and secured |
| **During passage** | Heavy precip, gusty winds (30-50 km/h+), lightning possible, temp drops 5-15°C | METAR shows wind shift, temp drop | DO NOT FLY — ground operations, secure equipment |
| **1-3 hrs after** | Clearing rapidly, excellent visibility, but still gusty | METAR improving, but check wind/gusts | Wait for gusts to subside below aircraft limits |
| **3+ hrs after** | Good conditions, stable | Conditions normalized | Safe to resume if wind limits met |

### 8.4 Reading Fronts in Forecast Products

**On the GFA (Graphical Area Forecast):**
- Cold fronts shown as blue lines with triangles pointing direction of movement
- Warm fronts shown as red lines with semicircles
- Look at the "prog" panels (6hr, 12hr) to see where front will be at mission time
- Note the spacing between current position and forecast position — that's the speed

**In the TAF:**
- Look for **FM** (from) groups — these often indicate frontal passage
- Example: `FM231800 32020G35KT` = "From 1800Z, wind shifting to 320° at 20 gusting 35" — classic cold front signature
- **TEMPO** groups near a front indicate showery/gusty conditions

**In the METAR (real-time confirmation):**
- Pressure trend: falling = front approaching; rising after drop = front passed
- Wind direction shift of 45°+ in 1-2 hours = frontal passage occurring
- Temperature drop with wind shift = cold front confirmed

### 8.5 Telemetry Indicators — Recognizing Frontal Approach In-Flight

If you're airborne during BVLOS and a front approaches faster than expected, your telemetry may show:

| Telemetry Change | What It Means | Action |
|------------------|---------------|--------|
| Barometric altitude drifting (not matching GPS altitude) | Pressure changing rapidly — front approaching | Note the drift rate; begin RTH planning |
| Increasing power consumption at same airspeed | Wind increasing, aircraft working harder | Check remaining battery vs distance to home |
| Heading hold requiring increasing correction | Wind direction changing, gusty conditions | Expect conditions to deteriorate further |
| Groundspeed varying significantly on same heading | Gusty, turbulent conditions | Front is very close — recover immediately |
| Sudden groundspeed drop (into wind) or increase (downwind) | Wind has shifted significantly | Front may be passing — do not continue outbound |

### 8.6 Freezing Rain — The Hidden RPAS Killer

Freezing rain occurs in a specific atmospheric setup, usually associated with warm fronts:

```
WARM AIR ALOFT (above 0°C) — rain falls as liquid
         ↓
COLD AIR AT SURFACE (below 0°C) — rain freezes on contact
         ↓
YOUR RPAS — instant ice accumulation on all surfaces
```

**Why it's devastating for RPAS:**
- Ice accumulates faster than any other icing condition
- Rotors can become unbalanced within 30-60 seconds
- No time to react — performance degrades almost instantly
- Often occurs with low ceilings, limiting visual detection

**When to suspect freezing rain risk:**
- Temperature at surface: -5°C to 0°C
- Warm front approaching with precipitation forecast
- TAF/METAR shows "FZRA" or "FZDZ"
- GFA icing panel shows freezing level near or at surface

**Go/No-Go:** If ANY freezing rain is forecast or reported within 50 km of your operating area, the operation is scrubbed. No exceptions.

### 8.7 Regional Context — Fronts in Western Canada

**Alberta/BC patterns:**
- Cold fronts typically approach from the west/northwest
- Pacific fronts weaken crossing the Rockies, then can regenerate over the prairies
- Chinook situations: warm front-like conditions on the east slopes can transition rapidly
- Front timing in mountain valleys can differ from plains by 2-4 hours — valleys can "trap" weather

**Practical example:**
> *"A cold front is forecast to pass through Edmonton at 1800Z. Your survey site is 80 km west of Edmonton in the foothills. The front will reach your site approximately 2-3 hours BEFORE Edmonton — around 1500-1600Z. If you planned based on the Edmonton TAF timing, you'd be caught mid-mission."*

### 8.8 Go/No-Go Decision Framework for Frontal Weather

| Question | GO | NO-GO |
|----------|-----|-------|
| Can I complete the entire mission before the front arrives? | Yes, with 2+ hour buffer | No, or less than 2 hr buffer |
| Is the front speed consistent in recent forecasts? | Yes, steady or slowing | No, accelerating |
| Is freezing rain forecast anywhere near my route? | No | Yes |
| Do I have a reliable abort point where I can recover quickly? | Yes | No |
| After the front passes, will conditions allow flight within my window? | Yes, with adequate wait time | No, day is lost |

> **Discussion Prompt:** *"The GFA shows a cold front 200 km west of your site at 1200Z, moving east at 40 km/h. Your mission requires 3 hours total (transit, survey, recovery). It's now 0800Z. Should you launch? What's your decision timeline? What if the front accelerates to 60 km/h?"*

---

## SECTION 9: Thunderstorms

![Lifting processes that lead to thunderstorm development](/images/meteorology/Lifting Process Thuinderstorms.png)

### 9.1 Thunderstorm Hazards for RPAS

Thunderstorms are one of the few absolute no-go conditions for RPAS operations. They produce multiple simultaneous hazards:

| Hazard | Effect on RPAS |
|--------|----------------|
| Lightning | Direct strike destroys electronics; causes interference with C2 links and GPS |
| Severe turbulence | Updrafts/downdrafts exceed 6,000 ft/min — far beyond RPAS compensation ability |
| Heavy precipitation and hail | Damages aircraft and obscures sensors |
| Wind shear and microbursts | Sudden severe wind changes, especially during collapse; microbursts can exceed 100 km/h |
| Icing | Severe icing in cumulonimbus cloud and associated precipitation |

### 9.2 Surface Characteristics of an Approaching Thunderstorm

![Thunderstorm development stages and characteristics](/images/meteorology/Thunderstorm Development.png)

Advance indicators include increasing cumulus cloud development, darkening sky to the west or northwest, increasing wind speed and gustiness, falling barometric pressure, distant lightning or thunder, and potentially a gust front or roll cloud ahead of the storm.

### 9.3 Avoidance

The only safe strategy is avoidance. Do not launch if thunderstorms are forecast for your operating area during your mission window. If thunderstorm activity develops during a BVLOS mission, recover the aircraft immediately — do not attempt to "finish the survey line." Thunderstorms can produce hazardous conditions at distances well beyond the visible storm cell.

---

## SECTION 10: Meteorological Services

### 10.1 Official Sources for Weather Information

| Source | Products | Use For |
|--------|----------|---------|
| NAV CANADA AWWS / CFPS | METARs, TAFs, GFAs, PIREPs, SIGMETs, AIRMETs, radar/satellite | Official aviation weather source for Canada |
| NAV CANADA Flight Information Services | Telephone briefings: 1-866-WXBRIEF (1-866-992-7433) | Comprehensive weather discussions |
| Environment and Climate Change Canada (ECCC) | General forecasts, warnings, radar | Big-picture awareness (NOT authoritative for flight planning) |
| Windy.com and similar | Wind, precipitation, cloud visualization at various altitudes | Visualization only — NOT official; not sole basis for go/no-go |

### 10.2 Aviation Weather Reports

**METAR (Aviation Routine Weather Report):** Current observed conditions at an aerodrome. Includes wind, visibility, weather phenomena, clouds, temperature, dew point, and pressure. L1C pilots must be able to decipher METAR reports.

**METAR Decoding Example:**

```
METAR CYEG 151600Z 27015G25KT 15SM FEW040 SCT120 BKN250 22/08 A3012 RMK CU2AC3CI1 SLP198
```

| Element | Meaning |
|---|---|
| CYEG | Edmonton International Airport |
| 151600Z | 15th day of month, 1600 UTC |
| 27015G25KT | Wind from 270° at 15 knots, gusting 25 knots |
| 15SM | Visibility 15 statute miles |
| FEW040 | Few clouds at 4,000 ft AGL |
| SCT120 | Scattered clouds at 12,000 ft AGL |
| BKN250 | Broken clouds at 25,000 ft AGL |
| 22/08 | Temperature 22°C, dew point 8°C |
| A3012 | Altimeter setting 30.12 inHg |
| RMK | Remarks section follows |
| CU2AC3CI1 | Cloud types: 2/8 cumulus, 3/8 altocumulus, 1/8 cirrus |
| SLP198 | Sea level pressure 1019.8 hPa |

**For L1C operations:** The key elements are wind (direction, speed, gusts), visibility, cloud bases (especially low ceilings), and temperature/dew point spread (indicates fog potential).

**AWOS (Automated Weather Observation Station):** Automated surface observations available at some locations without staffed weather offices.

**LWIS (Basic Weather Information System):** Limited weather observation systems.

### 10.3 Aviation Forecasts

**TAF (Aerodrome Forecast):** Forecast conditions for a specific aerodrome over a defined period (typically 24 hours). L1C pilots must be able to decipher TAF reports and understand validity periods.

**GFA (Graphical Area Forecast):** Graphical depiction of forecast weather conditions including clouds, turbulence, icing, precipitation, and winds. L1C pilots must be able to extract key weather information from GFAs.

**Important note:** Aviation weather sources may report cloud base and wind differently from non-aviation sources. Aviation reports use knots for wind speed and feet AGL for cloud base. Consumer weather services may use km/h or m/s for wind and metres ASL for cloud height. Ensure you are using the correct units and references.

> **Discussion Prompt #2:** *"You are planning a BVLOS survey for tomorrow. The TAF for the nearest aerodrome (25 NM away) forecasts winds 270° at 15 knots gusting 25, visibility 6 SM, scattered clouds at 2,500 ft. Your RPAS is rated for 35 km/h maximum wind. Your survey area is in a valley oriented east-west. Is the TAF sufficient for your planning? What additional weather information do you need? What concerns do you have about the valley terrain and the forecast wind direction?"*

---

## SECTION 11: Knowledge Check — Meteorology Module

### Recall-Level Questions

**Q1.** What is the standard atmospheric pressure at sea level?
- A) 14.7 PSI / 101.325 kPa
- B) 29.92 inHg / 1013.25 hPa
- C) Both A and B are correct
- D) 30.00 inHg / 1015.00 hPa

<details>
<summary>Click to reveal answer</summary>

**Answer: C.** Both express the same standard sea level pressure in different units. For aviation purposes, 29.92 inHg / 1013.25 hPa is the standard reference.

</details>

**Q2.** In the Northern Hemisphere, how does air flow around a low-pressure system?
- A) Clockwise and outward
- B) Counterclockwise and inward, then upward
- C) Straight from high pressure to low pressure
- D) Clockwise and inward

<details>
<summary>Click to reveal answer</summary>

**Answer: B.** In the Northern Hemisphere, air flows counterclockwise and inward toward low-pressure centres, converging and rising, which creates cooling and cloud formation.

</details>

**Q3.** What does the phrase "high to low, watch out below" mean?
- A) Flying from high altitude to low altitude is dangerous
- B) When flying from high pressure to low pressure, your altimeter reads higher than your actual altitude
- C) High pressure systems produce low clouds
- D) High winds at altitude mean low visibility below

<details>
<summary>Click to reveal answer</summary>

**Answer: B.** When flying from an area of high pressure to an area of low pressure without updating the altimeter setting, the altimeter over-reads — indicating you are higher than you actually are. This is dangerous near terrain.

</details>

**Q4.** According to CARs 901.35, what must a pilot consider regarding icing?
- A) Icing is only a concern above 5,000 ft
- B) Icing conditions observed, reported, or likely to be encountered must be considered
- C) RPAS are exempt from icing regulations
- D) Icing is only relevant for fixed-wing RPAS

<details>
<summary>Click to reveal answer</summary>

**Answer: B.** CARs 901.35(1) addresses situations where icing conditions are observed, reported to exist, or are likely to be encountered. This applies to all RPAS types.

</details>

### Application-Level Questions

**Q5.** During a BVLOS mission, you notice that motor current consumption is 30% higher than expected for the current flight phase, but the GCS shows the aircraft maintaining altitude and track perfectly. What is the most likely explanation?
- A) A motor is failing
- B) The flight controller is compensating for wind/turbulence that is not visible in position telemetry
- C) The battery is defective
- D) The payload is heavier than planned

<details>
<summary>Click to reveal answer</summary>

**Answer: B.** This is the classic sign that the flight controller is masking turbulence. The autopilot compensates automatically, maintaining position and altitude while consuming significantly more power. The pilot sees no problem in position data but the energy budget is being consumed faster than planned.

</details>

**Q6.** You are planning a BVLOS survey at a site that is 1,500 m ASL. The temperature is 35°C (ISA at 1,500 m would be approximately 5°C). How does this affect your operation?
- A) No effect — RPAS are not affected by density altitude
- B) Significantly reduced performance — the density altitude is much higher than the actual altitude, reducing lift, endurance, and climb rate
- C) Improved performance — warm air provides better lift
- D) Only affects fixed-wing RPAS, not multirotors

<details>
<summary>Click to reveal answer</summary>

**Answer: B.** With temperature 30°C above ISA at an already-elevated site, the density altitude is dramatically higher than the physical altitude. Propellers/rotors will produce less lift per revolution, motors will draw more current to maintain flight, endurance will be reduced, and maximum climb rate will decrease. Flight planning must account for this degraded performance.

</details>

### Analysis-Level Questions

**Q7.** *Discussion/Essay:* You are conducting a 2-hour BVLOS pipeline survey in February in northern Alberta. The temperature at launch is -18°C. The forecast calls for clear skies and calm winds. Analyze ALL the meteorological factors that could affect this mission, including ones that the "clear skies and calm" forecast might make you overlook.

<details>
<summary>Click to reveal answer</summary>

**Model Answer Elements:** (1) Cold temperature severely reduces battery capacity — a battery rated for 30 minutes at 20°C may only deliver 15–18 minutes at -18°C. Flight planning must use cold-weather endurance data, not standard specs. (2) Despite "clear skies," radiation fog can develop rapidly in calm, cold conditions, especially near rivers and low-lying areas along the pipeline route. (3) Katabatic winds may develop as the sun angle changes, especially if terrain is sloped. (4) The pilot's manual dexterity and cognitive performance are degraded in extreme cold — CRM and HF considerations. (5) Barometric altimetry is affected by temperature — the aircraft is lower than indicated in cold air ("high to low / hot to cold, watch out below"). At -18°C vs. ISA 15°C, the correction is significant. (6) Ice fog and ice crystals can form in extremely cold air, affecting visibility and potentially C2 link performance. (7) GCS display and electronics may malfunction in extreme cold. (8) The "calm winds" at the surface may not reflect conditions at 400 ft AGL — temperature inversions in cold conditions can produce significant wind shear between the surface and operating altitude.

</details>

---

## SECTION 12: Discussion Prompts for Instructor-Led Session

### Weather Go/No-Go (10 minutes)
*"Pull up today's actual METAR and TAF for your nearest aerodrome. Based on current and forecast conditions, could you conduct an L1C BVLOS operation right now? What are the limiting factors? What would change your decision?"*

### The Hidden Turbulence Problem (10 minutes)
*"Your BVLOS survey is progressing perfectly — the aircraft is holding track and altitude within 2 metres. But your battery has gone from 80% to 50% in what should have been a 20% consumption segment. What is happening? What should you do?"*

### Icing Decision-Making (5 minutes)
*"The temperature is 2°C and falling, visibility is good, and there are no clouds at your altitude. Can icing still be a concern? Under what circumstances could you encounter icing in these apparently benign conditions?"*

**Instructor facilitation notes:** Freezing fog can develop rapidly as temperature drops through the dew point. Moisture from rivers, lakes, or wet ground can create localized icing conditions even in clear air. Supercooled droplets in clear air near the surface (radiation icing) are possible in specific conditions. The key lesson is that absence of clouds does not mean absence of icing risk.

### Altitude Over Terrain (5 minutes)
*"Your BVLOS route crosses a ridge. On the launch side, terrain is at 800 m ASL. The ridge top is at 1,100 m ASL. The far side drops to 600 m ASL. If you fly at a constant 120 m above launch point altitude, what is your AGL at the ridge top? What is your AGL on the far side? Is either compliant with the 400 ft AGL limit?"*

---

---

## REFERENCES

- Canadian Aviation Regulations (CARs) SOR/96-433, Section 901.35 (Icing)
- *From the Ground Up* (MacDonald, 2025) — "Meteorology," "Theory of Flight"
- NAV CANADA Aviation Weather Services Guide
- NAV CANADA AWWS / Collaborative Flight Planning Services (CFPS)
- National Research Council Canada (NRC) — "Effect of Icing on Small UAV Rotor Performance" (Benmeddour, 2020)
- Transport Canada AIM — RPA Chapter 3.2.22
- Transport Canada Urban Airflow Video and NRC Urban Wind Flow Report

---

*End of Module L1C04 — Meteorology*
*Next Module: L1C05 — Navigation*
