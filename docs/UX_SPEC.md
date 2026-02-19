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
**Video Area:**
- Full-width video/animation
- Exercise name overlay
- Timer/rep counter overlay

**Progress:**
- Thin progress bar at top
- "X of Y exercises" indicator

**Info Panel:**
- Current exercise name
- Reps/duration
- Instructions (expandable)
- Tips

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

### 5. Programs (Future)
- Curated multi-week programs
- Progress tracking per program

### 6. Clips/Library (Future)
- 2-column grid of video tutorials
- Instructor thumbnails
- Titles
- Filter by category

## Interaction Patterns

### Workout Generation
1. User sets filters (or uses defaults)
2. Tap "Refresh" to regenerate with AI
3. Review exercises, modify if needed
4. Tap "Start Workout" to begin

### During Workout
1. Video/animation plays
2. Timer counts down (or user counts reps)
3. "Rest" screen between exercises
4. Swipe or tap to skip/go back
5. Completion celebration at end

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
