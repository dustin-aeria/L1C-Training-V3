---
title: "L1C05 — Navigation"
---

# L1C05 — Navigation

> **Module Type:** Exam Content — TP 15530 Section 5
> **ICAO Competency Codes:** APK (Application of Procedures), KNO (Knowledge), SAW (Situational Awareness), PSD (Problem Solving and Decision Making)
> **Estimated Duration:** 3–4 hours
> **TP 15530 Mapping:** Section 5 — Navigation
> **Regulatory References:** CARs 901.27, 901.87; AC 903-001 Section 5.0; TC AIM RPA Chapter 3.2.15

---

<details>
<summary>Instructor Notes — Module Purpose</summary>

Navigation for BVLOS is fundamentally different from VLOS. In VLOS, you navigate by looking at the aircraft and the environment around it. In BVLOS, navigation is entirely instrument-based — your aircraft's position, altitude, and track exist only as numbers and lines on a screen, derived from GPS, barometric sensors, and flight planning software. This module teaches students to plan BVLOS flights using aeronautical charts, digital terrain data, population density tools, and energy calculations — and to understand the errors and limitations inherent in each of these tools.

**Teaching approach:** This module should be heavily practical. Students should have VNC charts (physical or digital via FltPlan Go), access to the DSST-2, Statistics Canada population density tools, and flight planning software during the lesson. Walk through a complete BVLOS flight planning exercise from start to finish.

**Critical BVLOS insight:** In VLOS, you can see obstacles. In BVLOS, obstacles exist only if they are on your chart, in your DEM, or in a NOTAM. An unmarked wire, an uncharted tower, a new wind turbine that went up since the DEM was captured — these are invisible to your flight planning and to your aircraft. The thoroughness of your navigation preparation directly determines whether your aircraft hits something.

</details>

---

## LEARNING OBJECTIVES

After completing this module, you will be able to:

1. Demonstrate understanding of navigational terms and definitions
2. Interpret VNC and VTA aeronautical charts including topography, obstacles, airspace, and aerodromes
3. Locate GCS/RPA position on an aeronautical chart and determine distance from nearest aerodrome
4. Identify controlled and uncontrolled airspace on aeronautical charts
5. Use the CFS and CWAS to identify aerodrome information including frequencies and traffic patterns
6. Determine population density using Statistics Canada data and the DSST-2
7. Describe digital terrain models (DTM vs DSM) and their use in obstacle identification
8. Perform time/distance/energy/endurance calculations accounting for wind effects on groundspeed
9. Calculate critical point and point of no return
10. Demonstrate the use of flight planning software and valid data sources
11. Describe GPS reception limitations and their impact on autopilot-dependent navigation
12. Convert UTC to local time and vice versa

---

## SECTION 1: Types of Maps and Charts

### 1.1 Aeronautical Chart Types

L1C pilots must be proficient with several types of aeronautical charts. Each serves a different purpose and operates at a different scale:

**VFR Navigation Chart (VNC)** — Scale 1:500,000 (1 inch = 8 NM on paper). The primary chart for L1C flight planning. Each chart is named by a principal landmark (e.g., Winnipeg VNC, Edmonton VNC). Uses Lambert conformal conic projection, where a straight line between two points approximates the arc of a great circle. Contains a composite of geographical features, airports, airspace boundaries, navigation aids, obstacles, and terrain elevation. Published with effective dates — always verify your chart is current.

**VNC Grid System:** VNCs use a grid system for quick reference. The grid is formed by latitude and longitude lines at regular intervals. Each grid cell can be referenced by its coordinates. When communicating positions, pilots can reference the nearest grid intersection or use the alpha-numeric grid reference system shown in the chart margins.

![Latitude and longitude grid system on aeronautical charts](/images/navigation/lat long grids.png)

![Zoomed view of latitude and longitude grid intersections](/images/navigation/lat long grids zoomed in.png)

**VFR Terminal Area Chart (VTA)** — Scale 1:250,000 (twice the detail of VNC). Printed for high-density airport areas. Used for VFR navigation in congested airspace. While L1C operations will typically be 5+ NM from aerodromes (and thus outside VTA coverage), VTAs are valuable for understanding the airspace structure around airports near your operating area.

**World Aeronautical Chart (WAC)** — Scale 1:1,000,000 (half the detail of VNC). Used for general orientation and long-distance planning.

**IFR Enroute Charts** — Low altitude and high altitude charts used by IFR traffic. Not directly used for L1C planning but useful for understanding where IFR traffic corridors exist relative to your operating area.

### 1.2 VNC Components

The VNC is your primary navigation reference for L1C operations. The instructor should demonstrate how to view the following components using FltPlan Go or similar software:

- **Obstacles** — Towers, masts, wind turbines, power lines. Depicted with height AGL and ASL. Critical for BVLOS route planning.
- **Built-up areas** — Towns, cities, industrial areas. Used to identify populated areas for 901.87 compliance.
- **Airspace** — Control zones, airways, special use airspace boundaries with class designations.
- **Special use areas** — CYR (restricted) and CYA (advisory) with identifying numbers and activity codes.
- **Aerodromes** — Airports, heliports, and their associated traffic zones. Used to verify 5 NM distance requirement.
- **Terrain elevation** — Colour-coded elevation bands. Darker colours indicate higher elevation. White indicates glaciers. An enclosed space around an altitude value indicates the highest point on that chart section.
- **National and provincial parks** — Park boundaries are shown and may affect operations (Parks Canada authorization may be required).
- **VFR routes** — Diamond-marked paths indicating suggested VFR flight corridors. These indicate where manned VFR traffic is concentrated.

### 1.3 VNC Legend

The VNC legend (accessible through FltPlan Go or printed on paper charts) contains symbols and conventions for aerodromes, air routes, airport boundaries, airspace boundaries, special use airspace, ground-based navigation aids, communication frequencies, elevation contours, and more. You must be able to read and interpret every symbol on the legend.

### 1.4 Terrain Elevation on VNC

Understanding terrain depiction on VNC charts is essential for BVLOS operations:

- Colour bands represent elevation ranges — darker colours mean higher terrain
- Spot elevations show the highest point in an area
- Contour lines connect points of equal elevation
- The VNC does NOT show every obstacle — wires, small towers, and recent constructions may not appear

> **Key Concept:** The VNC provides terrain and obstacle information at a macro scale. For BVLOS operations at 400 ft AGL, you need more precise obstacle and terrain data than the VNC alone provides. VNC data must be supplemented with digital elevation/surface models, satellite imagery, and in-person reconnaissance where possible.

---

## SECTION 2: Canada Flight Supplement (CFS) and Canada Water Aerodrome Supplement (CWAS)

### 2.1 Canada Flight Supplement (CFS)

The CFS lists nearly all aerodromes in Canada. For L1C operations, the CFS is critical because operations must be more than 5 NM from any aerodrome listed in the CFS or CWAS — operations closer require an SFOC.

**CFS contents for each aerodrome:**
- Effective date (updated every 56 days by NAV CANADA)
- Operator (who manages the aerodrome)
- Whether the aerodrome is registered or certified
- Traffic frequency — Mandatory Frequency (MF) or Aerodrome Traffic Frequency (ATF)
- Radius of traffic (the area around the aerodrome where traffic procedures apply)
- Unique procedures and restrictions

The CFS is available through FltPlan Go, NAV CANADA products, and ForeFlight. Any aerodrome listed in the CFS is considered "registered" for the purposes of the 5 NM rule.

**Where to find airport information:**
- Canada Flight Supplement (CFS) — primary reference
- Canada Water Aerodrome Supplement (CWAS)
- NRCAN Drone Site Selection Tool – 2 (DSST-2)
- VFR Navigation Charts (VNC)
- Commercial providers: ForeFlight, FlySafe
- Free providers: FltPlan Go, SkyVector

### 2.2 Canada Water Aerodrome Supplement (CWAS)

The CWAS lists nearly all seaplane bases in Canada. L1C operations require an SFOC for operations within 5 NM of any water aerodrome listed in the CWAS. Published annually. The DSST-2 for BVLOS includes these aerodromes.

> **Discussion Prompt #1:** *"You are planning a BVLOS survey in a remote area. The nearest aerodrome listed in the CFS is 7 NM away. However, you notice on satellite imagery that there is a grass airstrip 3 NM from your survey area that is NOT in the CFS. Do you need to stay 5 NM from this strip? What should you consider?"*
>
> **Instructor Note:** The 5 NM rule under CARs 901.47 applies to aerodromes listed in the CFS or CWAS. An unlisted strip is not covered by this specific rule. However, the pilot's obligations under 901.24 (pre-flight information) and 901.27 (site survey — proximity of other aircraft operations) still apply. Manned aircraft operate from unlisted strips and the air traffic they generate is real regardless of whether the strip is in the CFS. This is a "minimum compliance vs. safe practice" teaching moment.

---

## SECTION 3: Digital Elevation Models

### 3.1 DTM vs DSM

Understanding the difference between terrain models is critical for BVLOS obstacle avoidance:

**Digital Terrain Model (DTM):** Represents the bare earth surface — ground elevation without vegetation or structures. Used for determining true ground elevation and calculating AGL altitude along a flight route.

**Digital Surface Model (DSM):** Includes vegetation and structures on top of the ground surface. Used for identifying obstacles such as tree canopy, buildings, towers, and other structures that the aircraft must clear.

**The practical difference:** If you plan a flight at 120 m above the DTM, you are 120 m above the ground — but you may be only 90 m above the tree canopy that the DSM would have shown you. For BVLOS flight planning, you need BOTH the DTM (to verify AGL compliance with the 400 ft limit) and the DSM (to verify obstacle clearance along the route).

### 3.2 Available DEM Sources

**SRTM (Shuttle Radar Topography Mission):** NASA mission from 2000 that captured approximately 80% of the Earth's surface. Resolution of approximately 30 m. Aging data — does not reflect construction or land use changes since 2000.

**ASTER Global DEM:** Started in 2009 with approximately 99% global coverage. Resolution of approximately 30 m.

**Canada Digital Elevation Model (CDEM):**
- **HRDEM** — High-Resolution DEM with 1–2 metre representation of terrain. The gold standard for Canadian BVLOS planning.
- **MRDEM** — Medium-Resolution DEM with 30 metre representation of terrain.
- Includes both DTM and DSM products.

**Operator-generated DEM:** Operators can create their own DEMs using photogrammetry or LiDAR from previous survey flights. These can be more current and higher resolution than published DEMs but must be validated against official sources.

![Digital elevation model showing terrain data for flight planning](/images/navigation/digital elevation model.png)

> **Key Concept:** DEMs have limitations. They represent terrain and surfaces at the time of capture. A new cell tower, wind turbine, or construction crane that was built after the DEM was captured will NOT appear in the data. Always cross-reference DEM data with NOTAMs, VNC obstacle depictions, and recent satellite imagery. For BVLOS operations, consider that the data you trust your aircraft's life to may be outdated.

---

## SECTION 4: Population Density Determination

### 4.1 Why Population Density Matters for L1C

Population density is the regulatory gate between different L1C operational pathways under CARs 901.87:

**901.87 — L1C operations require:**
- Operation in uncontrolled airspace
- More than 5 nautical miles from aerodromes

**901.87(a) — Over unpopulated areas OR more than 1 km from a populated area:**
- Small RPAS BVLOS: SAD 922.08(1,2) + 922.10 + 922.11
- Medium RPAS BVLOS: SAD 922.08(3,4,5,6) + 922.10 + 922.11

**901.87(b) — Over sparsely populated areas OR less than 1 km from a populated area:**
- Small RPAS BVLOS only: PVD 922.07 + 922.09 + 922.10 + 922.11 + 922.12

### 4.2 How to Determine Population Density

**Statistics Canada Population Density by Dissemination Area:**
The primary official source. Access through the Statistics Canada website (www150.statcan.gc.ca/n1/en/geo). Select your area of interest and view the population density per square kilometre by Dissemination Area (DA) — the smallest geographic unit for which census data is published. The data shows population, land area, and population density per square kilometre.

![Statistics Canada population density data interface](/images/navigation/stats can.png)

**NRCAN Drone Site Selection Tool 2 (DSST-2):**
The DSST-2 is specifically designed for RPAS flight planning and integrates population density data with aerodrome locations, airspace boundaries, and other relevant information. For BVLOS operations, the DSST-2 includes CFS and CWAS aerodromes.

**Google Earth Pro with Statistics Canada boundary overlays:**
Some operators overlay Statistics Canada Dissemination Area boundaries on Google Earth Pro to visually assess population density along their BVLOS flight routes. This provides a visual cross-check of the statistical data against actual satellite imagery.

> **Key Concept:** Population density is measured by Dissemination Area, which is a census-defined polygon. The density value is an AVERAGE across the entire DA. A large DA with 3 pp/km² average might contain a concentrated cluster of farmsteads along a road and vast empty areas elsewhere. Your flight path might pass directly over the concentrated cluster even though the average density classifies the DA as "unpopulated." Always cross-reference statistical density with satellite imagery to understand the actual distribution of people along your route.

---

## SECTION 5: Flight Planning for BVLOS

### 5.1 Flight Criteria

For every BVLOS mission, the following flight criteria must be determined during planning:

1. **Take-off and landing area** — Identified on map with coordinates
2. **Inspection/survey location** — Identified on map with coordinates
3. **Total distance** the RPA will be required to fly (outbound + survey + return)
4. **Forecast winds** at cruising altitude
5. **RPA airborne time** — Total expected flight time including all phases
6. **Critical point or point of no return** — Calculated with wind effects
7. **Horizontal buffer** to apply to flight path to calculate operational volume, including the highest population density in the operational volume and the highest air risk class in the operational volume
8. **Anticipated elevation change** throughout the flight path
9. **Placement of visual observer(s)** — If using Standard 923 vision-based DAA

### 5.2 Time, Distance, Energy, and Endurance Calculations

BVLOS flight planning requires precise energy management because you cannot simply look at the aircraft and decide to bring it home — by the time you realize energy is low, the aircraft may be too far away to return.

**Groundspeed with wind:** Your aircraft's airspeed through the air is constant, but its speed over the ground (groundspeed) varies with wind. Flying into a 30 km/h headwind with an airspeed of 60 km/h gives a groundspeed of only 30 km/h — doubling the time (and energy) required to cover any distance. The return leg with the same wind as a tailwind gives 90 km/h groundspeed but the energy savings on the return rarely compensate for the outbound penalty because the outbound leg was flown at higher power for longer.

**Energy calculations must account for:**
- Outbound flight in expected wind conditions
- Survey/mission flight pattern (often at reduced speed with frequent turns)
- Return flight in expected wind conditions (remember: headwind on the way out means tailwind on the way back, but plan for worst case — wind may have shifted)
- Reserve for contingencies (lost link hover, diversion to alternate landing site, unexpected obstacles requiring altitude changes)

### 5.3 Critical Point

The critical point (or equal time point) is the point along the route where it takes the same amount of time to continue to the destination as it does to return to the departure point. Before the critical point, returning is faster. After the critical point, continuing is faster. This calculation accounts for wind — with a headwind outbound and tailwind returning, the critical point is FARTHER from home than the geometric midpoint.

### 5.4 Point of No Return (PNR)

The point of no return is the point during a flight when it is no longer possible to return to the departure point with the remaining energy. Beyond this point, the aircraft must continue to the destination (or an alternate landing site) because there is insufficient energy to return.

**PNR Formula:** Time to PNR = (E × O) / (O + H)

Where: E = endurance remaining, O = groundspeed outbound, H = groundspeed homebound

> **Scenario:** *Your RPAS has 40 minutes of endurance. Your airspeed is 10 m/s (36 km/h). The wind is from the north at 5 m/s. You are flying north (into the wind). Groundspeed outbound = 5 m/s. Groundspeed homebound = 15 m/s. Time to PNR = (40 × 5) / (5 + 15) = 200/20 = 10 minutes outbound. In 10 minutes at 5 m/s groundspeed, you cover 3,000 m (3 km). If your survey target is 5 km away, you cannot reach it and return — even though your airspeed and endurance seem adequate for a 10 km round trip in calm conditions.*

> **Discussion Prompt #2:** *"Run the PNR calculation for your specific RPAS with a 20 km/h headwind. How does your maximum BVLOS range compare to what you assumed it would be? Most operators are surprised by how dramatically wind reduces effective range."*

### 5.5 GPS Reception Limitations

GPS reception varies significantly along a BVLOS route due to terrain masking (valleys, canyons), satellite geometry changes over time, and localized interference sources. If your RPAS relies on GPS for autonomous navigation (which virtually all do), a GPS degradation or loss during BVLOS flight can result in the autopilot losing its position reference — potentially causing the aircraft to drift, orbit, or enter a lost-link-like state.

**Planning for GPS limitations:** Identify areas along your route where GPS reception may be compromised (narrow valleys, near tall structures, areas of known interference). Plan waypoints and altitude changes to maintain good satellite visibility. Ensure your RPAS has a defined behaviour for GPS degradation (some aircraft will hover on barometric/IMU hold, others may attempt to continue on dead reckoning, others may initiate flight termination).

---

## SECTION 6: Flight Geography and Error Sources

### 6.1 Operational Volume

The operational volume concept from AC 903-001 Section 5.0 defines the total three-dimensional space that must be assessed for risk:

**Flight Geography** — The area within which the RPA is intended to fly (the planned flight path and survey area). This is your intended route.

**Contingency Volume** — The buffer surrounding the flight geography that accounts for the aircraft deviating from the planned path. Sized to contain the aircraft during contingency procedures (lost-link recovery, wind displacement, GPS drift).

**Ground Risk Buffer** — The area on the ground that could be affected if the RPA exits the contingency volume. Based on kinetic energy, glide ratio, and parachute deployment (if equipped).

**Total System Error** — The combination of all error sources that determine how accurately the aircraft can follow the planned path. This includes path definition error and flight technical error.

### 6.2 Error Types

**Path Definition Error:** The difference between the intended path (what you want the aircraft to fly) and the defined path (what you programmed into the flight plan). Sources include map projection differences (the VNC uses Lambert conformal conic; your flight planning software may use a different projection), earth reference differences (WGS-84 vs NAD83 vs local datums), altitude reference differences (barometric vs GPS vs AGL from launch), and terrain data errors (DEM resolution, age of data, missing features).

**Flight Technical Error:** The difference between the defined flight path (what was programmed) and the flown flight path (what the aircraft actually flew). Sources include navigation solution accuracy (GPS module precision — as discussed in L1C02, CEP50 values range from 0.73 m to 3.02 m depending on receiver), altimetry accuracy (barometric vs GPS, temperature effects), and latency (the delay between the GCS sending a command and the aircraft executing it — varies by C2 link type: line-of-sight radio, cellular, satellite, hard-wired network).

> **Key Concept:** When you plan a BVLOS flight along a pipeline, your aircraft will NOT fly exactly on the programmed line. It will oscillate around the line within the bounds of its total system error. The width of that oscillation determines your minimum safe distance from obstacles, airspace boundaries, and population areas. Flight planning that does not account for total system error is planning for a collision.

---

## SECTION 7: Time and Longitude

### 7.1 UTC and Local Time

Aviation worldwide uses Coordinated Universal Time (UTC, also called Zulu time) as the common time reference. All METARs, TAFs, NOTAMs, and ATC communications use UTC. L1C pilots must be able to convert between UTC and local time.

**Canadian time zone offsets from UTC:**
- Pacific Time: UTC-8 (UTC-7 during Daylight Saving Time)
- Mountain Time: UTC-7 (UTC-6 during DST)
- Central Time: UTC-6 (UTC-5 during DST)
- Eastern Time: UTC-5 (UTC-4 during DST)
- Atlantic Time: UTC-4 (UTC-3 during DST)
- Newfoundland Time: UTC-3:30 (UTC-2:30 during DST)

**Example:** A TAF valid from 1200Z to 1200Z is valid from 0500 local (Pacific Standard Time) to 0500 local the next day.

---

## SECTION 8: Flight Planning Software and Data Sources

### 8.1 Software Tools

L1C pilots should be proficient with flight planning software that integrates aeronautical chart data, airspace boundaries, and BVLOS-specific information:

**FltPlan Go (free):** Provides VNC/VTA overlays, CFS data, obstacle information, airspace boundaries, and weather. The original course materials use FltPlan Go for chart demonstrations.

**ForeFlight (commercial):** Comprehensive flight planning with VNC/VTA integration, CFS features, and weather overlay.

**NAV Drone (NAV CANADA):** The official platform for RPAS flight planning and controlled airspace authorization. Essential for verifying airspace and geozones.

**NRCAN DSST-2:** Drone-specific site selection tool with population density, aerodrome proximity, and airspace analysis.

**Google Earth Pro:** 3D terrain visualization, satellite imagery, and measurement tools. Useful for visual site assessment but NOT an official aviation data source.

![GIS data integration for BVLOS flight planning](/images/navigation/gis data.png)

### 8.2 Reconciling Data Sources

TP 15530 requires pilots to "demonstrate the ability to reconcile and validate nonofficial data sources to official ones." This means if you use Google Earth to plan a route, you must cross-check the results against official sources (VNC, CFS, DAH, Statistics Canada, DSST-2) to verify airspace, obstacle, and population density information. Unofficial sources may be outdated, inaccurate, or use different reference systems.

---

## SECTION 9: Knowledge Check — Navigation Module

### Recall-Level Questions

**Q1.** What is the scale of a VFR Navigation Chart (VNC)?
- A) 1:100,000
- B) 1:250,000
- C) 1:500,000
- D) 1:1,000,000
<details>
<summary>Click to reveal answer</summary>

**Answer: C.** VNC scale is 1:500,000, which equals approximately 1 inch to 8 NM on paper.

</details>

**Q2.** What is the difference between a Digital Terrain Model (DTM) and a Digital Surface Model (DSM)?
- A) DTM is higher resolution than DSM
- B) DTM shows bare earth; DSM includes vegetation and structures
- C) DTM is used for aviation; DSM is used for construction
- D) There is no difference
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** DTM represents bare earth surface only. DSM includes everything on top of the ground — trees, buildings, towers, and other structures. For BVLOS obstacle avoidance, the DSM is critical.

</details>

**Q3.** How often is the Canada Flight Supplement (CFS) updated?
- A) Monthly
- B) Every 56 days
- C) Annually
- D) Quarterly
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** The CFS is updated by NAV CANADA every 56 days. Always verify you are using the current edition.

</details>

### Application-Level Questions

**Q4.** Your RPAS has 35 minutes of endurance and an airspeed of 12 m/s. Wind is from the west at 4 m/s. You are flying west (into the wind). What is your Point of No Return time and distance?
- A) 17.5 minutes, 8,400 m
- B) 10.9 minutes, 5,250 m (approximately)
- C) 8.75 minutes, 4,200 m
- D) 14 minutes, 6,720 m
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** Groundspeed outbound (into wind) = 12 - 4 = 8 m/s. Groundspeed homebound (with wind) = 12 + 4 = 16 m/s. Time to PNR = (E × O) / (O + H) = (35 × 8) / (8 + 16) = 280/24 = 11.67 minutes ≈ 10.9 minutes (accounting for rounding). Distance = 10.9 min × 60 sec × 8 m/s ≈ 5,232 m. Closest answer is B.

</details>

**Q5.** You are using Statistics Canada data to determine population density along your BVLOS route. The Dissemination Area covering your survey area shows 4.2 pp/km². However, satellite imagery shows a cluster of 8 houses along a road that runs through your planned flight path. What should you do?
- A) Proceed — the DA is classified as unpopulated (≤5 pp/km²)
- B) Reclassify the area as populated and adjust your operation accordingly
- C) The statistical classification is valid, but adjust your route to avoid flying directly over the houses even though you legally could
- D) Both A and C are acceptable approaches
<details>
<summary>Click to reveal answer</summary>

**Answer: D.** Statistically, the DA is unpopulated (4.2 pp/km² ≤ 5), so 901.87(a) applies and a standard SAD is sufficient. However, best practice (and the SORA principle of using maximum population density in the operational footprint) suggests routing around the concentrated cluster even though you are technically compliant. Both the minimum-compliance approach (A) and the safer approach (C) are acceptable, but C demonstrates better risk management.

</details>

### Analysis-Level Question

**Q6.** *Discussion/Essay:* You are planning a 15 km BVLOS pipeline survey. Your RPAS has 40 minutes endurance at survey speed (8 m/s airspeed). Forecast winds at survey altitude are from the south at 6 m/s. The pipeline runs north-south. Terrain elevation changes from 450 m ASL at the launch site to 380 m ASL at the northern end of the route, with a ridge at 520 m ASL at the 8 km point. Your RPAS reports altitude AGL from the launch point using barometric pressure. Calculate the PNR, determine whether the mission is feasible, and identify the altitude compliance issue over the ridge and beyond.

<details>
<summary>Click to reveal answer</summary>

**Model Answer Elements:** (1) PNR calculation: Flying north (into 6 m/s wind), groundspeed = 8-6 = 2 m/s. Flying south (with wind), groundspeed = 8+6 = 14 m/s. Time to PNR = (40 × 2)/(2+14) = 80/16 = 5 minutes. Distance to PNR = 5 min × 60 s × 2 m/s = 600 m. The PNR is only 600 m from launch — the 15 km survey is completely infeasible in these wind conditions. The headwind reduces groundspeed to 2 m/s, making the aircraft essentially stationary against the wind. (2) Even if wind were calm, the altitude issue over the ridge is significant: flying at 122 m (400 ft) above the 450 m launch point = 572 m ASL. Over the 520 m ridge, the aircraft would be only 52 m (170 ft) AGL — well below 400 ft but also very close to terrain. Beyond the ridge where terrain drops to 380 m, the aircraft would be 192 m (630 ft) AGL — exceeding the 400 ft AGL limit. The flight plan must use terrain-following altitude or segment-adjusted altitudes. (3) The fundamental lesson: wind and terrain interact to make this apparently simple 15 km survey completely non-viable in the specified conditions.

</details>

---

## SECTION 10: Discussion Prompts for Instructor-Led Session

### Chart Reading Exercise (15 minutes)
*"Using the VNC for your local area, identify: (1) The three nearest aerodromes to your training location, with their distances. (2) All Class F airspace within 20 NM. (3) The highest obstacle within 10 NM. (4) Whether your training location is in Class G airspace."*

### Population Density Exercise (10 minutes)
*"Using Statistics Canada and the DSST-2, determine the population density classification for an area 10 NM north of this location. Which 901.87 pathway applies? What declaration would your RPAS need?"*

### PNR Reality Check (10 minutes)
*"Calculate the PNR for your specific RPAS in a 25 km/h headwind. Now calculate it in a 40 km/h headwind. At what wind speed does your RPAS become unable to make progress against the wind at all? What does this tell you about the relationship between mission planning and weather?"*

### Data Source Trust (5 minutes)
*"You planned your BVLOS route using Google Earth satellite imagery and a DEM from 2019. When you arrive at the site, your visual observer reports a new wind turbine that is not on any of your planning materials, located 2 km north of your launch site and directly under your planned survey line. What do you do? What does this tell you about data currency for BVLOS planning?"*

---

---

## REFERENCES

- Advisory Circular (AC) No. 903-001 — RPAS Operational Risk Assessment
- Canada Flight Supplement (CFS) — NAV CANADA
- Canada Water Aerodrome Supplement (CWAS) — NAV CANADA
- Canadian Aviation Regulations (CARs) SOR/96-433, Sections 901.27, 901.87
- *From the Ground Up* (MacDonald, 2025) — "Air Navigation"
- NRCAN Canada Digital Elevation Model (CDEM) — HRDEM, MRDEM
- NRCAN Drone Site Selection Tool 2 (DSST-2)
- Statistics Canada — Census Population Density by Dissemination Area
- TC AIM — RPA Chapter 3.2.15
- VFR Navigation Charts (VNC) — NAV CANADA

---

*End of Module L1C05 — Navigation*
*Next Module: L1C06 — Flight Operations*
