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

<div class="instructor-note-box">
<div class="instructor-note-header">
<span class="instructor-emoji">📝</span> Instructor Notes — Module Purpose
</div>
<div class="instructor-content">

Meteorology affects RPAS operations differently than manned aviation in several critical ways. RPAS are lighter, have less kinetic energy to penetrate wind and turbulence, rely on barometric sensors that are affected by pressure changes, and — critically for BVLOS — the pilot cannot feel the weather. A manned pilot feels turbulence through the seat, sees rain on the windscreen, and senses temperature changes. An RPAS pilot in BVLOS sees only what the telemetry reports, and flight controllers can mask turbulence effects by automatically compensating — drawing more power while hiding the problem from the pilot until battery reserves are unexpectedly depleted.

**Teaching approach:** This module benefits from real weather data. Pull up current METAR, TAF, and GFA products during the lesson. Have students practice interpreting actual weather reports for their local area and determining whether L1C operations would be permissible. The TC Urban Airflow video should be shown during the wind section.

**Critical RPAS-specific insight to emphasize:** In manned aircraft, the pilot feels turbulence. In RPAS, the flight controller compensates for turbulence automatically — the aircraft appears to fly smoothly on the GCS display while consuming significantly more energy. The pilot may not realize they are flying in dangerous turbulence until the battery runs critically low. This is one of the most important meteorological concepts unique to RPAS.

</div>
</div>

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

**Troposphere** — Surface to approximately 36,000 ft (11 km) at mid-latitudes. This is where virtually all weather occurs and where all L1C operations take place. Temperature generally decreases with altitude at approximately 2°C per 1,000 ft (the standard lapse rate). Contains approximately 75% of the atmosphere's mass.

**Stratosphere** — Above the troposphere to approximately 160,000 ft (50 km). Temperature is relatively stable or increases with altitude due to ozone absorption of UV radiation. Very little weather. Not relevant to L1C operations.

**Mesosphere** — Above the stratosphere. Temperature decreases. Typically where meteorites burn up. Not relevant to L1C operations.

**Thermosphere** — Above the mesosphere. Temperature rises due to absorption of solar radiation. Very few air molecules. Not relevant to L1C operations.

**Exosphere** — The outermost layer, transitioning to space. Not relevant to L1C operations.

### 1.2 Atmospheric Properties

The atmosphere behaves as a fluid with properties that directly affect flight:

- Rising air masses in areas of decreasing pressure lead to expansion and cooling
- Cooling may bring condensation, resulting in cloud formation
- Sinking air: external pressure increases, volume decreases, and temperature rises
- The atmosphere has capacity to expand through lifting agents: thermal (solar heating), frontal (air mass interaction), mechanical (terrain forcing), and convergence (low-pressure systems)

### 1.3 The Standard Atmosphere (ISA)

The International Standard Atmosphere defines baseline conditions against which actual conditions are compared:

- Sea level pressure: 1013.25 hPa (29.92 inHg)
- Sea level temperature: 15°C
- Temperature lapse rate: 2°C per 1,000 ft (6.5°C per 1,000 m) in the troposphere
- Sea level density: 1.225 kg/m³

Any deviation from ISA conditions affects altimeter readings, air density, and RPAS performance. The Standard Atmosphere is a model, not reality — actual conditions will always differ.

### 1.4 Atmospheric Density

![Atmospheric density and its relationship to altitude, temperature, and humidity](/images/meteorology/Atmospheric Density.png)

Air density directly affects RPAS performance because propellers and rotors generate lift by accelerating air — denser air produces more lift per revolution:

- **Warm air is less dense** than cooler air (warm air takes up more volume)
- **Density varies with relative humidity** — humid air is actually less dense than dry air (water vapour molecules are lighter than nitrogen and oxygen molecules)
- **Density decreases with altitude** — air particles are most dense near the surface

> **Key Concept for RPAS:** On a hot, humid, high-altitude day, your RPAS will produce less lift per watt of motor power. Flight times will be shorter, maximum payload capacity will be reduced, and the aircraft may be sluggish in response to control inputs. This is density altitude in action.

---

## SECTION 2: Atmospheric Pressure and Pressure Systems

### 2.1 Pressure Definitions

**Atmospheric pressure:** The weight of the air column above a given point. Decreases with altitude.

**Station pressure:** The actual atmospheric pressure at a weather observation station, uncorrected for altitude.

**Sea level pressure (SLP):** Station pressure corrected to sea level equivalent. Allows comparison of pressure between stations at different elevations.

**Altimeter setting:** The pressure value set on an altimeter so that it reads the correct altitude above sea level at a known reference point. In Canada, expressed in inches of mercury (inHg). The standard setting is 29.92 inHg.

### 2.2 Pressure Systems and Weather

![Atmospheric pressure and how it varies with altitude](/images/meteorology/Atmospheric Pressure.png)

Atmospheric pressure determines the weather that is likely to occur:

**High pressure areas** = Fair weather, clear air. In the Northern Hemisphere, air flows clockwise and outward (diverging) from high-pressure centres. Air descends in high-pressure systems, warming and drying as it sinks.

**Low pressure areas** = Unsettled weather, clouds, precipitation. In the Northern Hemisphere, air flows counterclockwise and inward (converging) toward low-pressure centres, then rises. Rising air cools, and if it reaches the dew point, condensation occurs — forming clouds and potentially precipitation.

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

**Altimeter Setting Region:**
- Aircraft operate using an altimeter setting from the closest weather station (e.g., 30.25 inHg)
- Essential for vertical separation between aircraft
- Corrected to provide altitude "above sea level" (ASL)
- Used by manned aircraft in the lower atmosphere

**Standard Pressure Region:**
- Aircraft operate using a standard pressure altimeter setting (29.92 inHg) en route
- Ensures constant vertical separation between aircraft at high altitude
- NOT corrected to an altitude "above sea level" — readings are pressure altitudes (flight levels)
- Used above the transition altitude (18,000 ft ASL in Southern Domestic Airspace)

**What are RPAS altitudes derived from?**
- Barometric pressure, possibly referenced to a GPS altitude
- **Note: Not the same as altitudes indicated on manned aircraft altimeters.** Most RPAS reference altitude AGL from the launch point, using a combination of barometric and GPS data. This means the altitude displayed on your GCS is relative to where you launched, not corrected to a regional altimeter setting or sea level. If terrain elevation changes significantly along your BVLOS route, your "400 ft AGL" at the launch site may be considerably more or less than 400 ft AGL at a distant waypoint.

### 3.2 Density Altitude

Density altitude is the altitude in the Standard Atmosphere at which the current air density would be found. Factors that increase density altitude (reduce performance):

- Higher temperature
- Higher humidity
- Higher altitude (lower station pressure)
- Lower atmospheric pressure

**Assessing density altitude for RPAS operations:** Before launch, assess the current density altitude and compare it to your RPAS's performance data. Manufacturers typically rate performance at or near ISA conditions. On a hot day at a high-altitude site, your actual endurance, climb rate, and payload capacity may be significantly less than published specifications.

### 3.3 Altimeter Errors

Three types of altimeter errors are particularly relevant:

**Pressure Source Error:** Barometric pressure varies from place to place. Corrected by altimeter settings (inches of mercury), but altimeter settings require constant updating as you move between areas of different pressure. The mnemonic "High to low — watch out below" captures this: flying from high pressure into low pressure without updating the altimeter setting results in the altimeter reading HIGH while the aircraft is actually LOWER than indicated.

**Temperature Error:** The altimeter is calibrated to indicate true altitude in the International Standard Atmosphere (ISA). Any deviation from ISA causes deviations from true altitude. In colder-than-ISA conditions, the aircraft is lower than indicated.

**Mountain Effect Error:** Wind funnelled around mountains causes a localized pressure decrease (Bernoulli's Principle). Mountain waves can create altimeter errors of up to 3,000 ft. While this extreme is unlikely at L1C altitudes, even smaller mountain-effect errors can be significant when operating near terrain at 400 ft AGL.

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
- Propellers/rotors — Ice accumulation changes the airfoil shape, reduces efficiency, and creates imbalance. NRC research shows that small RPAS rotors can be affected by icing significantly faster than larger manned aircraft propellers.
- Pitot tubes — Ice blocks the pressure inlet, causing erroneous airspeed readings
- Barometric pressure ports — Ice blocks the static port, causing altitude errors
- Camera/sensor lenses — Ice obscures the payload
- Airframe — Ice adds weight, changes aerodynamic profile, can jam control surfaces
- Antennas — Ice on antennas can degrade C2 link and GPS performance

**How fast can icing affect an RPA?** Very fast. NRC research on small UAV rotor icing shows that performance degradation can occur within minutes in moderate icing conditions. Unlike large aircraft that can accumulate ice for extended periods before performance is critically affected, small RPAS rotors have very low tolerance for ice accumulation.

**Recognizing icing in BVLOS:** Without visual contact, the pilot must infer icing from telemetry: increased motor power consumption to maintain altitude (the classic RPAS icing signature), reduced airspeed with no change in wind conditions, anomalous barometric readings, and GPS/compass degradation if antennas are affected.

**Using NAV CANADA icing information:** The instructor should demonstrate how to view icing conditions using the NAV CANADA Collaborative Flight Planning Services (CFPS) website, including icing level forecasts on the GFA.

> **Key RPAS-Specific Insight:** The L1C04 original materials reference the NRC research on UAV rotor icing (Benmeddour, 2020). This is a critical resource. Unlike manned aircraft where the pilot can feel and see icing, RPAS pilots in BVLOS may not recognize icing until performance has degraded significantly. The first indication may be the flight controller drawing unusually high motor current to maintain altitude — but most GCS displays do not prominently alert on gradual current increases. By the time the pilot notices, the aircraft may not have sufficient power reserves to return home with the accumulated ice load.

---

## SECTION 5: Stability and Instability

### 5.1 Air Mass Characteristics

**Stable air mass:** Air resists vertical motion. Characteristics include smooth air (little turbulence), poor visibility (smog, haze trapped in layers), steady precipitation if clouds form, and stratiform (layered) clouds. Stable conditions near the surface can trap pollutants and reduce visibility — important for VO operations under Standard 923.

**Unstable air mass:** Air tends to move vertically with ease. Characteristics include turbulent air, good visibility (vertical mixing disperses pollutants), showery precipitation, and cumuliform (puffy, vertically-developed) clouds. Unstable conditions create the convective turbulence and updrafts/downdrafts that are particularly dangerous for small RPAS.

---

## SECTION 6: Turbulence

### 6.1 Types of Turbulence

**Convective turbulence:** Caused by uneven surface heating creating thermals (rising columns of warm air). Most common on sunny afternoons over dark surfaces (plowed fields, parking lots, rock faces). Creates localized updrafts and downdrafts that can displace a small RPA vertically.

**Mechanical turbulence:** Caused by wind flowing over and around surface obstacles — buildings, trees, terrain features, ridgelines. Creates eddies and vortices on the downwind side of obstacles. The TC Urban Airflow video and NRC report describe five critical effects near buildings: Speed increase (venturi effect — wind can double between buildings), Direction changes, Shear (rapid speed gradients), Turbulence intensity (10% of free-atmosphere airflow in open areas vs. 40% in urban areas), and Vorticity (rooftop vortex shedding creating side-to-side oscillation).

**Frontal turbulence:** Associated with the passage of weather fronts, especially cold fronts. The lifting of warm air over cold air (or cold air pushing under warm air) creates turbulent zones.

**Orographic turbulence:** Wind flowing over mountain ridges and through valleys. Can create mountain waves, rotor turbulence, and severe downdrafts on the lee side of ridges.

**Wind shear:** A sudden change in wind speed and/or direction over a short distance. Can be vertical (wind changes with altitude) or horizontal. Particularly dangerous near the ground where recovery altitude is limited.

**Gusts and squalls:** Sudden, brief increases in wind speed. Gusts are typically seconds in duration; squalls can last minutes. Both can exceed the structural or flight-envelope limits of small RPAS.

### 6.2 The Critical RPAS-Specific Turbulence Issue

> **THIS IS ONE OF THE MOST IMPORTANT CONCEPTS IN THIS MODULE:** In a manned aircraft, the pilot physically feels turbulence. Bumps, jolts, and altitude excursions are immediately apparent through the seat, the controls, and the visual scene. In an RPAS, the flight controller automatically compensates for turbulence — the aircraft appears to fly smoothly on the GCS telemetry display. The pilot sees no indication of a problem. Meanwhile, the motors are working harder, consuming more energy, and the battery is depleting faster than planned. The pilot's first indication of a problem may be a low-battery warning — at which point the aircraft may not have sufficient energy reserves to return home against the same headwind that is causing the turbulence. This is how "clear air" BVLOS missions end in crashes.

**Mitigation:** Monitor motor power consumption (current draw) as a turbulence indicator, not just position and altitude. If power consumption is higher than expected for the current flight phase, the aircraft is fighting something — likely wind or turbulence that the flight controller is masking from you.

---

## SECTION 7: Wind

### 7.1 Wind Fundamentals

Wind is caused by differences in air pressure from uneven heating of Earth's surface. The steeper the pressure gradient (closer isobars), the stronger the wind.

**Pressure gradient force:** Drives air from high to low pressure. The primary wind driver.

**Coriolis effect:** Deflects moving air to the right in the Northern Hemisphere. Combined with the pressure gradient force, this creates the counterclockwise flow around lows and clockwise flow around highs.

**Friction:** Surface friction slows wind and changes its direction near the ground (within the friction layer, approximately the first 2,000 ft AGL). Above the friction layer, wind flows roughly parallel to isobars. Within the friction layer, wind crosses isobars at an angle toward lower pressure.

### 7.2 Wind Phenomena Relevant to BVLOS

**Wind changes with surface heating:** As the sun heats the surface during the day, convective mixing brings faster upper-level winds down to the surface. Morning BVLOS operations often have calmer winds than afternoon operations.

**Land/sea breezes:** Differential heating between land and water creates local wind patterns that cycle daily. During the day, land heats faster than water, creating an onshore sea breeze. At night, land cools faster, creating an offshore land breeze. Relevant for coastal BVLOS operations.

**Anabatic winds:** Daytime upslope winds caused by solar heating of mountain slopes. Air near the heated slope is warmer and rises.

**Katabatic winds:** Nighttime downslope winds caused by radiative cooling of mountain slopes. Cold, dense air flows downhill. Can be sudden and strong, especially in valleys and fjords — very relevant for BVLOS operations in British Columbia's terrain.

**Wind gusts:** Caused by mechanical turbulence, convective activity, frontal passages, or terrain channelling. The gust factor (difference between sustained wind and peak gusts) is critical for RPAS — a sustained wind of 20 km/h with gusts to 40 km/h may exceed aircraft limits even though the sustained wind appears manageable.

### 7.3 Urban Airflow

![Urban airflow patterns showing wind effects around buildings](/images/meteorology/urban airflow.jpg)

Transport Canada's Urban Airflow guidance identifies five key wind effects near buildings (SDSTV): Speed, Direction, Shear, Turbulence, and Vorticity. Wind speed at 400 ft AGL (122 m) is approximately 1.5 times the weather station's reported hourly wind speed at 10 m. At building rooftop level, vortex shedding creates side-to-side oscillation that can destabilize multirotor aircraft. The venturi effect between buildings can double the local wind speed. While L1C operations are typically in rural/unpopulated areas, understanding urban airflow is valuable for pre-positioning, transit, and Advanced operations.

---

## SECTION 8: Fronts and Frontal Weather

### 8.1 Air Masses and Fronts

A front is the boundary between two different air masses. The interaction between air masses of different temperature and moisture content creates the weather changes associated with frontal passages.

**Cold front:** Cold air mass advances and pushes under warmer air. The warm air is forced upward rapidly, creating a narrow band of intense weather — heavy rain, thunderstorms, gusty winds, and rapid temperature drops. Cold fronts typically move faster than warm fronts.

**Warm front:** Warm air mass advances and slides over retreating cold air. Weather develops gradually over a wide area — low clouds, steady rain or drizzle, gradually improving conditions after passage.

**As a front approaches:** Changes in wind direction and speed, pressure changes (falling before a cold front, falling then rising with a warm front), temperature changes, increasing cloud cover, and potentially precipitation.

**Freezing rain zones:** The area between a warm front aloft and cold air at the surface can produce freezing rain — one of the most dangerous conditions for RPAS icing. Supercooled rain falls from warm air above into cold air below, freezing on contact with any surface at or below 0°C.

---

## SECTION 9: Thunderstorms

![Lifting processes that lead to thunderstorm development](/images/meteorology/Lifting Process Thuinderstorms.png)

### 9.1 Thunderstorm Hazards for RPAS

Thunderstorms are one of the few absolute no-go conditions for RPAS operations. They produce multiple simultaneous hazards that can individually or collectively destroy an RPAS:

**Lightning:** Can strike the aircraft directly, destroying electronics. Can also cause sudden electrical interference with C2 links and GPS.

**Severe turbulence:** Updrafts and downdrafts within and near thunderstorms can exceed 6,000 ft/min — far beyond any RPAS's ability to compensate.

**Heavy precipitation and hail:** Can damage the aircraft and obscure sensors.

**Wind shear and microbursts:** Sudden, severe wind changes near thunderstorms, especially during collapse phases. A microburst can produce winds exceeding 100 km/h at the surface.

**Icing:** Severe icing in the cumulonimbus cloud and in associated precipitation.

### 9.2 Surface Characteristics of an Approaching Thunderstorm

![Thunderstorm development stages and characteristics](/images/meteorology/Thunderstorm Development.png)

Advance indicators include increasing cumulus cloud development, darkening sky to the west or northwest, increasing wind speed and gustiness, falling barometric pressure, distant lightning or thunder, and potentially a gust front or roll cloud ahead of the storm.

### 9.3 Avoidance

The only safe strategy is avoidance. Do not launch if thunderstorms are forecast for your operating area during your mission window. If thunderstorm activity develops during a BVLOS mission, recover the aircraft immediately — do not attempt to "finish the survey line." Thunderstorms can produce hazardous conditions at distances well beyond the visible storm cell.

---

## SECTION 10: Meteorological Services

### 10.1 Official Sources for Weather Information

**NAV CANADA Aviation Weather Web Site (AWWS) / Collaborative Flight Planning Services (CFPS):** The official source for aviation weather in Canada. Provides METARs, TAFs, GFAs, PIREPs, SIGMETs, AIRMETs, and radar/satellite imagery.

**NAV CANADA Flight Information Services:** For telephone weather briefings, pilots can contact NAV CANADA at **1-866-WXBRIEF (1-866-992-7433)**. While most L1C pilots will use online resources, telephone briefings remain available for comprehensive weather discussions.

**Environment and Climate Change Canada (ECCC):** Provides general weather forecasts, warnings, and radar. Useful for big-picture awareness but aviation-specific products (METAR, TAF, GFA) from NAV CANADA are the authoritative source for flight planning.

**Windy.com and similar services:** Useful visualization tools for wind, precipitation, and cloud forecasts at various altitudes. However, these are NOT official aviation weather sources and should not be used as the sole basis for go/no-go decisions.

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
