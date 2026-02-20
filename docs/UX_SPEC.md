# RehabAI UX Specification
Based on Peloton Strength+ app reference (Feb 2026)

## Design System

### Colors
- **Background**: Pure black (#000000)
- **Cards**: Dark gray (#1a1a1a / #111111)
- **Accent/Selected**: Yellow (#FFE566 / #F7DF1E)
- **Text Primary**: White (#FFFFFF)
- **Text Secondary**: Gray (#888888)
- **Dividers**: Dark gray (#333333)

### Typography
- **Headings**: Bold, large (24-32px)
- **Body**: Regular, 16px
- **Labels**: Medium, 14px
- **Captions**: 12px, gray

### Components

#### Filter Chips
- Rounded pills with border
- Selected state: Yellow background, dark text
- Unselected: Dark background, white text
- Can include "X" to remove filter

#### Bottom Sheet Modals
- Slide up from bottom
- Rounded top corners
- Handle bar at top
- Full-width options
- Selected option: Yellow background
- Cancel button at bottom

#### Exercise Cards
- Thumbnail (square, left side)
- Title (bold)
- Subtitle (reps/duration, gray)
- Three-dot menu (right side)
- Optional: Expand/collapse for sections

#### Bottom Tab Navigation
- 4 tabs: Generator, Programs, Clips, Profile
- Icons with labels
- Active tab: Accent color

## Screens

### 1. Generator (Home)
**Header:**
- Title: "[Duration] Custom Workout"
- Subtitle with filter state

**Filter Bar:**
- Horizontal scroll of filter chips
- Options: Duration, Equipment, Focus, Difficulty, Muscles

**Action Bar:**
- Refresh button (regenerate)
- Share button
- Bookmark button

**Exercise List:**
- Collapsible sections (Warm Up, Block 1, Block 2, Cool Down)
- "X more" expand toggle
- Exercise cards with thumbnails

**CTA:**
- Fixed bottom: "Start Workout" button (green/accent)

### 2. Filter Modals

#### Duration
- 10 min, 15 min, 20 min, 30 min, 45 min

#### Focus
- Build strength (5-8 Reps)
- Build muscle (8-12 Reps) 
- Endurance (12-16 Reps)

#### Equipment
- None (bodyweight)
- Minimal (mat only)
- Basic (bands, blocks)
- Full setup

#### Target Area
- Body diagram with front/back view
- Quick select: Upper Body, Lower Body, Core, Full Body
- Custom muscles selector (checkboxes with icons)

### 3. Workout Player

#### Pre-Workout Loading
- Dark gradient background
- "Preparing your workout" centered text (italic/bold, white)
- X close button top left

#### Active Exercise Screen
**Header Bar:**
- Pause button + elapsed time (e.g., "0:16") top left
- Progress bar below (red completed, yellow current, gray remaining)
- Settings icon (sliders) + list icon top right

**Exercise Info Overlay:**
- "Set 1/1" label (yellow text, small)
- Exercise name (bold white, 20-24px)
- "Single Sided" tag if applicable (smaller, gray)
- Three-dot menu for options

**Video Area:**
- Full-screen instructor demonstration video
- Professional gym setting with good lighting
- Instructor shows proper form throughout

**Timer Zone (Bottom Center):**
- Large circular countdown timer (yellow ring, ~80px)
- Seconds display inside circle (e.g., "0:30")
- Timer counts down during timed exercises

**Action Buttons:**
- "+reps" button (left of timer) - optional rep logging
- "+weight/side" button (right of timer) - optional weight logging
- Tapping weight opens numeric keypad modal

**Next Exercise Preview:**
- "Next → [Exercise Name]" at very bottom (yellow accent)
- Provides mental preparation for upcoming move

#### Weight Entry Modal
- Appears as overlay over dimmed exercise screen
- "Total weight (lbs)" label
- Large number display (e.g., "0.0")
- Full numeric keypad (1-9, ., 0, backspace)
- Green checkmark confirm button at bottom

#### Rest Screen
**Visual:**
- Beautiful blue gradient background (teal to royal blue)
- Full-screen calming aesthetic

**Previous Exercise Status:**
- Top bar: Checkmark + completed exercise name
- Segmented progress bar (gray/yellow/gray sections)
- Elapsed time + pause + settings icons

**Rest Content:**
- "Rest" label (large, bold white, bottom-left area)
- Circular countdown timer (yellow ring, ~100px)
- Time display inside (e.g., "0:59")

**Time Adjustments:**
- "-15s" and "+15s" pill buttons next to timer
- Allows user to shorten or extend rest

**Next Exercise Preview:**
- "Next → [Exercise Name]" at bottom

#### Section Progress (Multi-Block Workouts)
- Top progress bar shows blocks/sections
- Color segments: completed (solid) | current (yellow) | upcoming (gray)

**Controls:**
- Previous / Pause / Skip
- Rest timer between exercises

### 4. Profile

#### Overview Tab
- User info card
- Saved workouts button
- Calendar view (month)
  - Checkmarks on active days
- Stats: Active days, Week streak
- Performance preview

#### History Tab
- "X total workouts" header
- List of past workouts
  - Date/time
  - Workout name
  - Duration
  - Three-dot menu

#### Settings
- Account section
- Workout Preferences
  - Audio cues
  - Rest periods
  - Equipment profile
  - Auto-pilot
- Integrations

### 5. Programs / Progressive Roadmap

#### Calendar View (Program Hub)
**Header:**
- Program title (e.g., "Lower Back Rebuild - 8 Week Program")
- Overall progress indicator (e.g., "Week 3 of 8")
- Streak/consistency stats

**Calendar Grid:**
- Month view with day cells
- Day states:
  - Completed: Checkmark + accent color
  - Today/Active: Highlighted border
  - Upcoming: Number only
  - Locked: Grayed out (if sequential unlock)
- Tap day → opens that day's content

#### Numbered Section Structure (LowBackAbility-style)

**Phase Organization:**
```
Phase 1: Foundation (Days 1-14)
├── Section 1: Understanding Your Back
│   ├── Education: Anatomy basics (video)
│   ├── Education: What causes pain (video)
│   └── Assessment: Current mobility check
├── Section 2: Tissue Tolerance
│   ├── Education: Why rest doesn't work (video)
│   ├── Exercise: Gentle nerve glides
│   └── Exercise: Breathing patterns
├── Section 3: First Movements
│   ├── Education: Safe movement principles
│   ├── Exercise: Cat-cow variations
│   └── Exercise: Pelvic tilts

Phase 2: Build (Days 15-35)
├── Section 4: Progressive Loading
│   ├── Education: Tissue adaptation
│   ├── Exercise: Bird dogs
│   └── Exercise: Dead bugs
... etc
```

**Section Detail View:**
- Section number + title header
- Progress dots (completed items filled)
- Content cards:
  - **Education cards:** Video thumbnail, title, duration, "Watch" CTA
  - **Exercise cards:** Demo thumbnail, name, sets/reps, "Start" CTA
- Completion checkbox on each item
- "Complete Section" button when all items done

**Educational Content Format:**
- Full-screen video player
- Key concepts highlighted as text overlays
- "Key Takeaways" summary at end
- Optional quiz/check-in after education modules

**Exercise Content (within sections):**
- Can be standalone OR grouped as mini-workout
- Form cues emphasized more than in regular workouts
- Slower pace, more instruction
- "How does this feel?" check-ins

#### Adaptive Progression
- AI adjusts difficulty based on:
  - Pain level reports (1-10 scale)
  - Completion consistency
  - User feedback ("too easy" / "too hard")
- Unlock next section when current section completed
- Option to repeat sections if needed

#### Pain Tracking Integration
- Daily check-in: "How's your back today?" (emoji scale)
- Before/after workout: Pain level comparison
- Weekly trends graph
- AI uses this data to suggest modifications

### 6. Clips/Library (Educational Content)

#### Instructor Video Format
**Full-Screen Video Player:**
- X close button top left
- Video takes full screen
- Real-time captions at bottom of video area
- Professional gym/studio setting

**Instructor Info Footer:**
- Avatar (small circle) + instructor name
- Clip title below (e.g., "Must-try moves for the Cable Stack machine")
- Save/bookmark icon right side
- Scrubber/timeline at bottom edge

**Content Types:**
- Exercise tutorials (how to do specific moves)
- Equipment guides (how to use machines)
- Form tips and corrections
- Warm-up/cool-down routines

#### Grid View (Browse Mode)
- 2-column grid of video thumbnails
- Thumbnail shows instructor mid-movement
- Title overlay at bottom
- Duration badge
- Filter by: category, equipment, body part

## Interaction Patterns

### Workout Generation
1. User sets filters (or uses defaults)
2. Tap "Refresh" to regenerate with AI
3. Review exercises, modify if needed
4. Tap "Start Workout" to begin

### During Workout (Detailed Flow)

**Start Sequence:**
1. "Preparing your workout" loading screen (2-3 sec)
2. First exercise appears with timer starting

**Exercise Loop:**
1. Video plays showing instructor demonstrating proper form
2. Countdown timer runs (typically 30 sec per exercise)
3. User optionally taps +reps or +weight to log data
4. At timer end, auto-advance to rest screen

**Rest Period:**
1. Blue gradient rest screen appears
2. Default 30-60 sec countdown
3. User can adjust with -15s/+15s buttons
4. "Next →" shows upcoming exercise for mental prep
5. At timer end, auto-advance to next exercise

**Workout Completion:**
1. Summary/celebration screen
2. Stats: total time, exercises completed
3. Optional feedback or rating
4. Save to history

**Key UX Principles:**
- Timer-based progression (not rep-counting) - simpler for users
- Optional logging (weight/reps) - never blocks progress
- Visual preview of next exercise - reduces anxiety
- Adjustable rest - respects user's fitness level

### Progress Tracking
- Auto-save completed workouts
- Update streak on completion
- Calendar marks active days

## Mobile-First Priorities
1. Large touch targets (44px minimum)
2. Bottom navigation for thumb reach
3. Swipe gestures for workout player
4. Pull-to-refresh on lists
5. Haptic feedback on interactions
