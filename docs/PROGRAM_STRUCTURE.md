# RehabAI Program Structure
Based on LowBackAbility methodology + Peloton delivery

## Core Philosophy

**Education + Movement = Recovery**

Unlike generic workout apps, rehab requires:
1. Understanding WHY you're doing each exercise
2. Progressive loading (tissue adaptation takes time)
3. Pain monitoring and adjustment
4. Consistency over intensity

## 8-Week Lower Back Program

### Phase 1: Foundation (Weeks 1-2)

**Goal:** Reduce fear, understand pain, establish baseline movements

#### Section 1: Understanding Your Back
- **Video:** Spine anatomy simplified (5 min)
- **Video:** Why your back hurts - the real causes (8 min)
- **Video:** The myth of "bad posture" (4 min)
- **Check-in:** Pain assessment questionnaire

#### Section 2: Tissue Tolerance Basics
- **Video:** Why rest makes it worse (6 min)
- **Video:** What is tissue tolerance? (5 min)
- **Exercise:** Diaphragmatic breathing (3 sets x 10 breaths)
- **Exercise:** Gentle cat-cow (2 sets x 8 reps, slow)

#### Section 3: Nerve Health
- **Video:** Nerves and back pain (5 min)
- **Exercise:** Sciatic nerve glides (2 sets x 10 each leg)
- **Exercise:** Femoral nerve glides (2 sets x 10 each leg)
- **Check-in:** Movement confidence scale

#### Section 4: Core Activation (Gentle)
- **Video:** Your core isn't just abs (4 min)
- **Exercise:** Dead bug prep - arms only (2 sets x 10)
- **Exercise:** Pelvic tilts (2 sets x 12)
- **Exercise:** Glute bridges - partial (2 sets x 10)

### Phase 2: Build (Weeks 3-5)

**Goal:** Increase load tolerance, build movement confidence

#### Section 5: Progressive Loading Principles
- **Video:** How tissues get stronger (6 min)
- **Video:** Pain vs harm - knowing the difference (5 min)
- **Exercise:** Bird dog - modified (2 sets x 8 each side)
- **Exercise:** Dead bugs - full (2 sets x 10 each side)

#### Section 6: Hip Mobility
- **Video:** Hips and back pain connection (5 min)
- **Exercise:** 90/90 hip switches (2 sets x 8)
- **Exercise:** Hip flexor stretch with activation (2 sets x 30 sec)
- **Exercise:** Adductor rock backs (2 sets x 10)

#### Section 7: Spinal Mobility
- **Video:** Safe spinal movement (4 min)
- **Exercise:** Segmental cat-cow (2 sets x 8)
- **Exercise:** Thread the needle (2 sets x 8 each side)
- **Exercise:** Prone press-ups (if tolerated) (2 sets x 8)

#### Section 8: Building Strength
- **Video:** From rehab to strength (5 min)
- **Exercise:** Glute bridges - full (3 sets x 12)
- **Exercise:** Bird dog - full hold (3 sets x 8, 3 sec hold)
- **Exercise:** Side plank - modified (2 sets x 20 sec each)

### Phase 3: Strengthen (Weeks 6-8)

**Goal:** Build real strength, return to activities

#### Section 9: Loaded Movements
- **Video:** Adding load safely (5 min)
- **Exercise:** Goblet squat (3 sets x 10)
- **Exercise:** Romanian deadlift - light (3 sets x 10)
- **Exercise:** Pallof press (3 sets x 10 each side)

#### Section 10: Core Endurance
- **Video:** Why endurance matters more than strength (4 min)
- **Exercise:** Dead bug variations (3 sets x 12)
- **Exercise:** Bird dog with resistance (3 sets x 10)
- **Exercise:** Plank progressions (3 sets x 30 sec)

#### Section 11: Functional Integration
- **Video:** Returning to life activities (6 min)
- **Exercise:** Step-ups (3 sets x 10 each)
- **Exercise:** Split squats (3 sets x 8 each)
- **Exercise:** Farmer carries (3 sets x 30 sec)

#### Section 12: Maintenance & Beyond
- **Video:** Staying pain-free long-term (8 min)
- **Exercise:** Full maintenance routine (15 min)
- **Assessment:** Progress comparison (before/after)
- **Plan:** Ongoing routine recommendations

---

## Content Types

### Educational Videos
- Duration: 4-8 minutes
- Conversational, not clinical
- Visual aids (simple animations)
- Key takeaways at end
- Optional captions

### Exercise Demonstrations
- Duration: 30-60 seconds per exercise
- Front and side angles
- Common mistakes shown
- Modification options
- Voice cues for form

### Check-ins
- Pain scale (1-10)
- Movement confidence (1-10)
- Sleep quality
- Activity level

---

## Adaptive Logic

### Pain Response Rules
```
If pain_today > pain_yesterday + 2:
  → Suggest: "Take it easy today. Let's do a gentle mobility session."
  → Offer: Phase 1 exercises only

If pain_today < 3 for 7 consecutive days:
  → Suggest: "Great progress! Ready to advance?"
  → Unlock: Next phase exercises

If user reports "flare-up":
  → Show: Flare-up management video
  → Adjust: Reduce intensity 50% for 3 days
```

### Progression Gates
- Must complete all items in section to unlock next
- Can repeat sections anytime
- Minimum 2 days between phase advances
- Skip option available (with warning)

---

## Workout Player Integration

When user taps "Start" on an exercise:
1. Show educational context card (collapsible)
2. Play demo video with form cues
3. Timer-based (not rep-counting) for simplicity
4. "How did that feel?" prompt after
5. Log to progress tracker

When user taps "Watch" on education:
1. Full-screen video player
2. Progress bar with chapter markers
3. Mark complete when >80% watched
4. Optional notes/bookmark feature
