---
title: "L1C07 — Theory of Flight"
---

# L1C07 — Theory of Flight

> **Module Type:** Exam Content — TP 15530 Section 7
> **ICAO Competency Codes:** KNO (Knowledge), FPM (Flight Path Management)
> **Estimated Duration:** 2–2.5 hours
> **TP 15530 Mapping:** Section 7 — Theory of Flight
> **Regulatory References:** From the Ground Up (MacDonald & Peppler, 30th ed.); NASA Beginners' Guide to Aeronautics

---

<details>
<summary>Instructor Notes — Module Purpose</summary>

Theory of Flight provides the aerodynamic foundation for understanding why aircraft fly, how they are controlled, and what happens when conditions change. For L1C pilots, this knowledge is essential because in BVLOS, you cannot see your aircraft's behaviour — you must interpret aerodynamic effects through telemetry. If you don't understand that increasing load factor in a turn requires more power, you won't understand why battery consumption spikes during survey pattern turns. If you don't understand how CG affects stability, you won't recognize why a payload change makes the aircraft handle differently.

**Teaching approach:** Use physical demonstrations where possible — spinning propellers at different pitches, showing how tilting a multirotor directs thrust. The quadcopter dynamics section benefits enormously from having an actual quadcopter to demonstrate hover, yaw, pitch, and roll with the motors visible. Reference the Johnson-Laird "Basic Physics of Drones" YouTube video for students who want visual reinforcement.

</details>

---

## LEARNING OBJECTIVES

After completing this module, you will be able to:

1. Describe the effects of higher MAUW or operating weight
2. Describe how lift is produced in various types of RPA (fixed-wing, rotary-wing, multirotor)
3. Explain propeller advance ratio and the effects of switching out different propellers
4. Describe how thrust is created by a propeller
5. Identify basic components including lifting and stabilizing components of various aircraft types
6. Identify the four forces acting on an aircraft and describe how changing any of them affects the aircraft
7. Describe how the four forces are balanced during manoeuvres and steady flight
8. Explain how the centre of gravity affects longitudinal and/or lateral stability
9. Describe how the design of the wing affects aircraft performance
10. Describe the function of different control surfaces and explain the function of trim
11. Describe how lift is created with a rotary wing (powered and autorotation), how lift is controlled, the function of tail rotor/counter-rotating rotors, and how to avoid dynamic rollover
12. Describe how yaw, pitch, roll, and climb are achieved in a multirotor aircraft
13. Describe typical multirotor autopilot modes (manual, attitude, GPS position hold)
14. Describe how asymmetric recirculation can upset lateral control of a rotorcraft
15. Describe what can affect load factor and recall that increasing load factor requires increased lift, producing increased drag

---

## SECTION 1: The Four Forces of Flight

### 1.1 Forces Acting on an Aircraft

![The four forces acting on an aircraft in flight](/images/theory-of-flight/four forces.png)

Every aircraft in flight is subject to four forces:

**Lift** — The aerodynamic force acting perpendicular to the relative wind, opposing weight. Produced by wings (fixed-wing) or rotors (rotary-wing/multirotor).

**Weight** — The gravitational force acting downward through the centre of gravity. Includes airframe, power source, payload, and all onboard equipment.

**Thrust** — The force that propels the aircraft forward or upward. Produced by propellers or rotors driven by motors/engines.

**Drag** — The aerodynamic force opposing the aircraft's motion through the air. Increases approximately with the square of airspeed.

### 1.2 Balancing the Four Forces

In **steady, level flight:** Lift = Weight and Thrust = Drag.

In a **climb:** Thrust > Drag (the excess thrust component produces a climb).

In a **descent:** Drag > Thrust (or thrust is reduced below that needed for level flight).

In a **turn:** The lift vector is tilted, so the vertical component of lift must increase to maintain altitude while also providing centripetal force for the turn. This means total lift must increase, requiring more power.

**Effects of higher MAUW or operating weight:** Increasing the operating weight (e.g., heavier payload, full fuel/battery, added sensors) means more lift is required to maintain flight. This results in: higher power consumption at all flight phases, reduced endurance, reduced climb rate, higher stall speed (fixed-wing), and reduced manoeuvrability. For BVLOS, this directly translates to reduced range and shorter mission times.

### 1.3 Newton's Laws Applied to Flight

Newton's Three Laws of Motion are fundamental to understanding how aircraft fly:

**Newton's First Law (Inertia):** An object at rest stays at rest, and an object in motion stays in motion at the same speed and direction, unless acted upon by an unbalanced force. For aircraft, this means the aircraft will continue in its current flight state unless forces are applied to change it. Once in level flight, an aircraft tends to stay in level flight until thrust, lift, or drag changes.

**Newton's Second Law (F=ma):** The acceleration of an object depends on the mass of the object and the amount of force applied. For RPAS: more thrust produces more acceleration; heavier aircraft require more force to accelerate at the same rate. This is why heavier payloads reduce climb rate and manoeuvrability.

**Newton's Third Law (Action-Reaction):** For every action, there is an equal and opposite reaction. This is the foundation of all aerodynamic lift and thrust.

- An **airfoil** (wing) deflects air downward → the wing is pushed upward (lift)
- A propeller pushes air **backward** → the engine/motor is pushed **forward** (thrust)

![Engine thrust created by pushing airflow backward](/images/theory-of-flight/engine pushed forward airflow.png)

- A foil deflected **up** pushes air up → aircraft nose pitches **down**
- A foil deflected **down** pushes air down → aircraft nose pitches **up**

This action/reaction principle applies to every aerodynamic surface — wings, propellers, rotors, ailerons, elevators, rudders, and multirotor blades.

---

## SECTION 2: Principles of Flight — How Different RPA Types Generate Lift

### 2.1 Fixed-Wing RPA

![Airfoil generating lift through pressure differential](/images/theory-of-flight/airfoil image action.png)

![Airflow over a wing surface](/images/theory-of-flight/airflow image.png)

Fixed-wing aircraft generate lift through forward motion of air over an airfoil-shaped wing. The wing's shape (curved upper surface, flatter lower surface) creates a pressure differential — lower pressure above, higher pressure below — that produces lift. This is a combination of Bernoulli's principle (faster airflow over the curved surface creates lower pressure) and Newton's Third Law (the wing deflects air downward, producing an upward reaction force).

**Wing design affects performance:** Different wing shapes (aspect ratio, camber, sweep, thickness) optimize for different performance characteristics. High aspect ratio wings (long, narrow — like a glider) are efficient for long-range cruise. Low aspect ratio wings (short, wide) provide better roll rate and manoeuvrability. Wing loading (weight divided by wing area) determines stall speed and gust response — higher wing loading means higher stall speed but less sensitivity to turbulence.

### 2.2 Rotary-Wing RPA (Helicopters)

**Lift creation — powered:** A spinning rotor blade acts as a rotating wing. As it spins, each blade section generates lift through the same airfoil principles as a fixed wing. The total lift is controlled by changing the collective pitch (angle) of all blades simultaneously.

**Lift creation — autorotation:** If engine power is lost, the rotor can continue to spin by using the energy of descending air flowing up through the rotor disc. This allows a controlled descent — similar to a fixed-wing aircraft gliding. Some larger RPA are designed to autorotate as a safety feature.

**Lift control:** Collective pitch controls total lift (up/down). Cyclic pitch changes the angle of individual blades as they rotate, tilting the rotor disc to direct thrust laterally (forward, backward, left, right).

**Tail rotor and counter-rotating rotors:** A single spinning rotor creates a torque reaction that would cause the fuselage to spin in the opposite direction. The tail rotor produces a sideways thrust to counteract this torque. Counter-rotating designs (two rotors on the same axis spinning in opposite directions, or intermeshing rotors) cancel torque without needing a tail rotor.

**Dynamic rollover in a crosswind:** During takeoff or landing, if the aircraft is on one skid and the pilot applies excessive cyclic input, the aircraft can roll past the tipping point on the grounded skid. Crosswinds increase this risk by adding a rolling moment. Recovery is difficult once the roll rate exceeds a critical point. Relevant for larger helicopter-type RPA with skid landing gear — prevent by limiting cyclic inputs during ground contact in crosswind conditions.

### 2.3 Multirotor RPA (Quadcopter Focus)

![Quadcopter flight principles showing motor rotation and control](/images/theory-of-flight/quadcopter principles.png)

**Basic configuration:** Four rotors provide lift. Two pairs of identically pitched propellers rotate in opposite directions — clockwise pair and counterclockwise pair. This arrangement cancels torque in hover without needing a tail rotor.

**Hover / Altitude Change:** Equal thrust to all four propellers. The total thrust equals the weight of the aircraft. To climb, increase thrust equally on all four motors. To descend, decrease equally.

**Yaw (rotation without translating):** More thrust to propellers rotating in one direction (e.g., both clockwise motors), less to the other direction (counterclockwise motors). The differential torque rotates the aircraft around its yaw axis while total lift remains approximately constant.

**Pitch (forward/backward tilt):** More thrust to one propeller and less thrust to the opposite propeller along the pitch axis. This tilts the aircraft, directing a component of the total thrust vector in the desired direction. The aircraft translates in the direction it is tilted.

**Roll (left/right tilt):** Same principle as pitch but along the roll axis. Differential thrust between left and right motor pairs tilts the aircraft laterally.

**Climb during forward flight:** Increase all four motors while maintaining the pitch/roll tilt. The total thrust vector has both a vertical component (supporting weight + providing climb force) and a horizontal component (providing forward motion).

### 2.4 Multirotor Autopilot Modes

**Manual mode:** Direct stick-to-motor mapping with minimal or no stabilization. The pilot commands motor speeds directly. Difficult to fly — the aircraft will not self-level. Used by experienced pilots for aerobatic or precision manual control. NOT appropriate for BVLOS.

**Attitude mode (stabilize):** The autopilot maintains a level attitude when sticks are centred. The pilot commands tilt angles — releasing the sticks returns the aircraft to level hover. The autopilot uses IMU data (accelerometers and gyroscopes) for stabilization. The aircraft will still drift with wind because there is no position-holding.

**GPS position hold:** The autopilot maintains both attitude AND geographic position. Releasing the sticks causes the aircraft to hover in place, actively compensating for wind. The pilot commands velocity or position changes. Requires GPS lock. This is the primary mode for BVLOS operations — the aircraft follows waypoints autonomously while the pilot monitors and intervenes as needed.

### 2.5 Asymmetric Recirculation

When a multirotor hovers near the ground, near a wall, or near any large surface, the downwash from its rotors can be reflected back upward into the rotor disc, or the downwash from one rotor can be redirected into an adjacent rotor. If this recirculation is not symmetric (e.g., one side of the aircraft is closer to a wall than the other), some rotors receive more recirculated air than others. This creates unequal lift across the rotor disc, causing the aircraft to drift or tilt unexpectedly.

The flight controller compensates for asymmetric recirculation, but its compensation may lag or be insufficient in severe cases. Most common during: low-altitude hover near structures, takeoff/landing near walls or under overhangs, and inspection operations close to infrastructure. Relevant for L1C because bridge, tower, and infrastructure inspections may bring the aircraft into recirculation zones during the approach or departure phases, even if the BVLOS transit is in clear air.

---

## SECTION 3: Propellers and Thrust

### 3.1 Propeller Characteristics

A propeller is an airfoil that pushes air backward, causing a reaction force (thrust) that drives the aircraft forward or upward. Key characteristics:

- The blade **tapers toward the tip** and the **Angle of Attack (AoA) decreases** due to the increased speed at the tip. The tip moves much faster than the root (because it is farther from the hub), so it needs less AoA to produce the same lift per unit area.
- A propeller is an example of an airfoil — it generates a "lift" force, but that force is directed forward as thrust rather than upward.

**Propeller pitch:** The distance the propeller would theoretically travel forward in one revolution — like a screw threading into wood.

- **Low pitch:** Low speed acceleration — the propeller bites a small amount of air per revolution but can spin faster. Good for takeoff, climbing, and hovering. Like a low gear in a car.
- **High pitch:** Cruise economy — the propeller bites a larger amount of air per revolution but spins slower. Efficient at cruise speed. Like a high gear in a car.

**Propeller advance ratio:** The ratio of the aircraft's forward speed to the propeller's rotational speed. It determines how efficiently the propeller converts rotational energy into thrust at a given airspeed. **The effect of switching out different propellers:** Installing a propeller with different pitch, diameter, or blade count changes the advance ratio characteristics. A propeller optimized for hover efficiency (low advance ratio) will be less efficient in fast forward flight, and vice versa. For BVLOS survey missions, propeller selection should balance hover performance (for inspection tasks) against cruise efficiency (for transit to/from the survey area).

---

## SECTION 4: Stability, Axes, and Centre of Gravity

### 4.1 Aircraft Axes

![The three aircraft axes: longitudinal, lateral, and vertical](/images/theory-of-flight/aircraft axes.png)

An aircraft rotates around three axes, all intersecting at the centre of gravity:

**Longitudinal (roll) axis** — Runs from nose to tail. Roll is rotation around this axis (wings tilting). Controlled by ailerons (fixed-wing) or differential left/right thrust (multirotor).

**Lateral (pitch) axis** — Runs from wingtip to wingtip (or side to side). Pitch is rotation around this axis (nose up/down). Controlled by elevator (fixed-wing) or differential front/back thrust (multirotor).

**Vertical/normal (yaw) axis** — Runs vertically through the CG. Yaw is rotation around this axis (nose left/right). Controlled by rudder (fixed-wing), tail rotor (helicopter), or differential CW/CCW thrust (multirotor).

**Stability:** The ability for the RPA to return to its neutral state after an applied disturbance (such as a wind gust). A stable aircraft returns to equilibrium without pilot input. An unstable aircraft diverges from equilibrium and requires constant correction.

### 4.2 Centre of Gravity Effects

**Centre of Gravity:** The point where the weight is evenly balanced.

**Forward Centre of Gravity:** Higher angle of attack required for pitch (the aircraft is nose-heavy), resulting in higher stall speed. The aircraft is more stable but requires more power for level flight and has reduced pitch authority.

**Aft Centre of Gravity:** Nose up rather than nose down tendency. Potentially impossible to recover from a stall because the nose-up pitch moment exceeds the available control authority to push the nose down. Less stable, more responsive to control inputs — but dangerously so if CG moves beyond the aft limit.

> **Key Concept for BVLOS:** CG changes whenever you change payloads. A camera mounted under the aircraft moves CG forward relative to a LiDAR mounted on top. A delivery payload that is released in flight shifts CG during the mission. In BVLOS, you cannot visually observe changes in aircraft handling that indicate a CG issue — you must ensure CG is within limits BEFORE flight through proper weight and balance verification.

---

## SECTION 5: Fixed-Wing Flight Controls

### 5.1 Control Surfaces — Conventional Aircraft

![Flight control surfaces on a conventional aircraft](/images/theory-of-flight/flgiht ontrol conventional aircarft.gif)

The original course materials show a labeled diagram (Jaworski, 2006) identifying the four primary flight control components:

**A — Aileron:** Located on the trailing edge of each wing, near the tips. Move in opposite directions (one up, one down) to create differential lift between the wings, causing the aircraft to roll. Connected to the lateral stick input.

**B — Control Stick (or yoke):** The pilot's primary control input device. Left/right movement commands roll (ailerons). Forward/backward movement commands pitch (elevator).

**C — Elevator:** Located on the horizontal stabilizer at the tail. Moves up or down to change the pitch attitude of the aircraft. Elevator up pushes the tail down and the nose up; elevator down does the opposite.

**D — Rudder:** Located on the vertical stabilizer at the tail. Moves left or right to yaw the aircraft. Used for coordinated turns and crosswind corrections.

### 5.2 Trim

Trim allows the pilot to set a control surface to hold a desired position without continuous input. For example, if the aircraft tends to pitch nose-down in cruise, the pilot can apply nose-up trim to the elevator. This reduces pilot workload — especially important for long BVLOS missions where continuous control inputs would be fatiguing (for HITL operations) or would require constant autopilot correction (wasting processing cycles and power).

---

## SECTION 6: Load Factor

### 6.1 What is Load Factor?

![Load factor diagram showing forces in banked flight](/images/theory-of-flight/load factor.gif)

Load factor (n) is the ratio of total lift to the weight of the aircraft. In straight and level flight, n = 1 (1G — lift equals weight). The original course materials include a diagram (Deeday-UK, 2010) showing the forces in level flight: θ = 0° (no bank), n = 1, with vectors for lift force (upward), weight (downward), centrifugal force (zero in level flight), and vector sum of all body forces.

### 6.2 Load Factor in Turns

When the aircraft banks into a turn, the lift vector tilts. To maintain altitude, the vertical component of lift must still equal weight, but now there is also a horizontal component providing centripetal force for the turn. The total lift must increase:
- At 30° bank: n = 1.15G
- At 45° bank: n = 1.41G
- At 60° bank: n = 2.0G
- At 75° bank: n = 3.86G

### 6.3 What Affects Load Factor

Load factor is affected by bank angle (as above), turbulence and gusts (sudden vertical gusts impose momentary load factor increases), manoeuvres (pull-ups, push-overs, abrupt control inputs), and speed (the same gust produces a higher load factor at higher airspeed).

**Increasing load factor produces a requirement for increased lift, thus producing increased drag.** This is a critical chain reaction: tighter turns → higher load factor → more lift needed → more drag produced → more power required → faster battery consumption. In BVLOS survey operations, the turn-around at the end of each survey line is a high-load-factor manoeuvre that consumes disproportionate energy compared to straight-line flight.

> **Discussion Prompt #1:** *"Your BVLOS survey has 20 survey lines, each 5 km long. That means 19 turn-arounds. If each turn-around takes 30 seconds at 1.5G load factor and significantly higher power draw, how does this affect your total energy budget compared to just calculating distance/speed/endurance for straight-line flight? Have you been accounting for this in your flight planning?"*

---

## SECTION 7: Knowledge Check — Theory of Flight Module

### Recall-Level Questions

**Q1.** What are the four forces acting on an aircraft in flight?
- A) Lift, weight, thrust, drag
- B) Lift, gravity, power, friction
- C) Thrust, drag, torque, weight
- D) Lift, weight, thrust, centrifugal force
<details>
<summary>Click to reveal answer</summary>

**Answer: A.** The four forces are lift, weight, thrust, and drag. In steady level flight, lift equals weight and thrust equals drag.

</details>

**Q2.** In a quadcopter, how is yaw achieved?
- A) By tilting the aircraft forward
- B) By increasing thrust on all four motors
- C) By increasing thrust on propellers spinning in one direction and decreasing thrust on propellers spinning in the other direction
- D) By deflecting control surfaces
<details>
<summary>Click to reveal answer</summary>

**Answer: C.** Yaw in a quadcopter is achieved through differential torque — increasing thrust on one CW/CCW pair creates a net torque that rotates the aircraft without translating.

</details>

**Q3.** What is the effect of an aft centre of gravity?
- A) Higher stall speed and more stable flight
- B) Nose-up tendency, potentially impossible to recover from a stall
- C) Better fuel/battery efficiency
- D) Increased maximum speed
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** An aft CG produces a nose-up tendency. If the CG moves too far aft, the nose-up pitch moment may exceed the available control authority, making stall recovery impossible.

</details>

**Q4.** What does increasing load factor in a turn produce?
- A) Decreased lift and decreased drag
- B) Increased lift requirement, which produces increased drag
- C) No change in lift or drag
- D) Decreased drag and increased speed
<details>
<summary>Click to reveal answer</summary>

**Answer: B.** Increasing load factor requires more lift to maintain altitude in the turn. More lift produces more induced drag, requiring more power. This is why turns consume more energy than straight-line flight.

</details>

### Application-Level Questions

**Q5.** You are selecting propellers for a BVLOS survey mission. The mission requires a 10 km transit to the survey area (forward flight at cruise speed), a 30-minute survey (mixed hover and slow forward flight), and a 10 km transit home. Would you choose low-pitch or high-pitch propellers, and why?
<details>
<summary>Click to reveal answer</summary>

**Answer:** This mission is primarily transit-heavy (20 km of forward flight vs 30 minutes of mixed flight), so high-pitch propellers would optimize cruise efficiency for the transit legs. However, if the survey phase requires significant hovering (e.g., point inspections), low-pitch propellers may be better for hover efficiency. The ideal solution is variable-pitch propellers (if available) or a compromise pitch optimized for the dominant flight phase. This illustrates why propeller advance ratio selection depends on the specific ConOps.

</details>

**Q6.** *Discussion/Essay:* Your multirotor RPAS has a maximum takeoff weight of 25 kg. You normally fly with a 2 kg camera payload. A client asks you to add a 5 kg LiDAR sensor in addition to the camera, bringing the total takeoff weight to 30 kg — exceeding the MAUW. Explain the aerodynamic consequences of overloading the aircraft, even if the motors can physically lift the weight.
<details>
<summary>Click to reveal answer</summary>

**Model Answer Elements:** Exceeding MAUW means all four motors must produce more thrust — operating closer to their maximum output in hover and especially in manoeuvres. Hover power consumption increases significantly (power required increases faster than weight — approximately with the cube of weight increase for rotorcraft). Climb rate is reduced because less excess thrust is available above what is needed for hover. Battery endurance drops substantially — a 20% weight increase may reduce endurance by 30–40%. Load factor in turns is higher relative to structural limits because the base weight is higher. The flight controller may reach its limits in gusty conditions, as there is less remaining thrust authority to compensate for disturbances. The aircraft is more vulnerable to motor failure because each remaining motor must produce more thrust during a motor-out event. And critically, operating above the MAUW likely voids the safety assurance declaration, making the operation non-compliant with CARs 901.95.

</details>

---

## SECTION 8: Discussion Prompts for Instructor-Led Session

### Four Forces in BVLOS (5 minutes)
*"In VLOS, you can see and hear the four forces in action — you see the aircraft climb, hear the motors work harder in wind, watch it bank in turns. In BVLOS, what telemetry parameters tell you about each of the four forces? What does a sudden increase in motor current tell you about the balance of forces?"*

### Propeller Selection (5 minutes)
*"You have two sets of propellers for your survey drone: one optimized for hover (low pitch, high RPM), one for cruise (high pitch, lower RPM). Your next BVLOS mission is a 15 km linear survey at 8 m/s. Which do you install? What if the mission changes to a grid survey with frequent stops?"*

### CG and Payload Changes (5 minutes)
*"You fly the same RPAS with three different payloads on different days: a light optical camera (500 g, centred), a heavy LiDAR (3 kg, mounted forward), and a gas detection sensor (1 kg, offset to the right). How does each configuration affect the aircraft's CG and flight behaviour? Which one are you most concerned about?"*

### Load Factor Awareness (5 minutes)
*"Pull up the flight log from your last survey mission. Look at motor current during the straight survey lines versus during the turn-arounds. What do you see? How much extra energy did the turns consume? Were you accounting for this in your endurance planning?"*

---

---

## REFERENCES

- Deeday-UK (2010) — Load factor diagram
- *From the Ground Up* (MacDonald & Peppler, 30th ed.) — "Theory of Flight," "Airmanship"
- Jaworski (2006) — Flight control surfaces diagram
- Johnson-Laird — "Basic Physics of Drones" YouTube video
- NASA Beginners' Guide to Aeronautics

---

*End of Module L1C07 — Theory of Flight*
*Next Module: L1C08 — Radiotelephony*
