// Exercise data parsed from content/exercises/*.md
// This is a static export for now - could be dynamic with MDX later

import { Exercise } from '@/types';

export const stretchExercises: Exercise[] = [
  {
    id: 'couch-stretch',
    name: 'Couch Stretch',
    description: 'Gold standard hip flexor stretch. Reverses the shortening from sitting by lengthening the psoas and rectus femoris.',
    category: 'stretch',
    targetArea: ['hip flexors', 'quads', 'psoas'],
    duration: 60,
    imageUrl: '/exercises/couch-stretch.svg',
    instructions: [
      'Place one knee on the ground near a wall',
      'Back foot goes against the wall (top of foot on wall)',
      'Front foot flat on floor, knee at 90 degrees',
      'Tuck your tailbone under (posterior pelvic tilt)',
      'Squeeze the glute on the back leg side',
      'Hold position, breathing slowly'
    ],
    tips: [
      'Tuck tailbone under — this is what makes it work',
      'Squeeze the glute on the stretching side',
      'Use a pad under your knee if needed',
      'Start with a stick for balance (Level 1)'
    ],
    difficulty: 'beginner',
    unilateral: true
  },
  {
    id: 'outer-hip-circuit',
    name: 'Outer Hip Circuit',
    description: 'Series of positions targeting the outer hip and glute medius. Essential for hip stability and reducing compensations.',
    category: 'stretch',
    targetArea: ['glutes', 'hip abductors', 'IT band'],
    duration: 90,
    imageUrl: '/exercises/outer-hip-circuit.svg',
    instructions: [
      'Start seated with legs extended',
      'Cross one ankle over opposite knee (Figure 4)',
      'Lean forward until you feel stretch in outer hip',
      'Transition through 90/90, pigeon variations',
      'Complete full circuit on one side before switching'
    ],
    tips: [
      'Move slowly between positions',
      'Breathe into tight spots',
      'Don\'t force range — let it open naturally'
    ],
    difficulty: 'beginner',
    unilateral: true
  },
  {
    id: 'pigeon-strength',
    name: 'Pigeon Strength',
    description: 'Active pigeon variation that builds strength in end-range hip rotation. Not just a passive stretch.',
    category: 'stretch',
    targetArea: ['hip rotators', 'glutes', 'hip capsule'],
    duration: 60,
    reps: 20,
    imageUrl: '/exercises/pigeon-strength.svg',
    instructions: [
      'Start in pigeon position (front leg bent, back leg extended)',
      'Press front shin into ground',
      'Lift and lower torso using hip strength',
      'Control the movement — no momentum',
      '20 reps each side'
    ],
    tips: [
      'This is ACTIVE, not passive',
      'Feel the glute and hip rotators working',
      'Start with small range if new to this'
    ],
    difficulty: 'intermediate',
    unilateral: true
  },
  {
    id: 'deep-squat',
    name: 'Deep Squat',
    description: 'Full depth squat hold. Opens hips, ankles, and thoracic spine simultaneously. The most primal human position.',
    category: 'stretch',
    targetArea: ['hips', 'ankles', 'thoracic spine'],
    duration: 120,
    imageUrl: '/exercises/deep-squat.svg',
    instructions: [
      'Stand with feet shoulder-width or slightly wider',
      'Toes can point out 15-30 degrees',
      'Squat down as low as possible',
      'Keep heels on ground (or elevate them if needed)',
      'Hold at the bottom, breathing deeply'
    ],
    tips: [
      'Hold onto something if you fall backward',
      'Elevate heels on a plate if ankle mobility is limited',
      'Shift weight side to side to explore range',
      'Goal: accumulate 2 minutes'
    ],
    difficulty: 'beginner',
    unilateral: false
  },
  {
    id: 'loaded-butterfly',
    name: 'Loaded Butterfly',
    description: 'Weighted butterfly stretch for hip adductors. The load helps you relax into deeper ranges.',
    category: 'stretch',
    targetArea: ['hip adductors', 'groin', 'inner thigh'],
    duration: 60,
    imageUrl: '/exercises/loaded-butterfly.svg',
    instructions: [
      'Sit with soles of feet together, knees out',
      'Place weight on inner thighs (dumbbell, kettlebell)',
      'Let gravity do the work',
      'Breathe and relax into the stretch',
      'Hold 1-2 minutes'
    ],
    tips: [
      'Start light — 10-20 lbs is enough',
      'Don\'t bounce or force',
      'Let the weight sink you deeper over time'
    ],
    difficulty: 'beginner',
    unilateral: false
  },
  {
    id: 'active-hang',
    name: 'Active Hang',
    description: 'Decompresses the spine and builds grip strength. Optional but highly beneficial.',
    category: 'stretch',
    targetArea: ['spine', 'shoulders', 'grip'],
    duration: 60,
    imageUrl: '/exercises/active-hang.svg',
    instructions: [
      'Grab a pull-up bar with overhand grip',
      'Let your body hang, feet off ground',
      'Slightly engage shoulders (don\'t just dead hang)',
      'Breathe and let spine decompress',
      'Accumulate 1 minute total'
    ],
    tips: [
      'Break it into sets if needed (e.g., 4x15 seconds)',
      'Use chalk or straps if grip is limiting',
      'Great for spinal decompression after back work'
    ],
    difficulty: 'beginner',
    unilateral: false
  }
];

export const strengthExercises: Exercise[] = [
  {
    id: 'sled-warmup',
    name: 'Sled Warmup',
    description: 'Low-impact full body warmup. Gets blood flowing without spinal loading. The perfect way to start.',
    category: 'warmup',
    targetArea: ['legs', 'cardiovascular', 'full body'],
    duration: 600, // 10 minutes
    imageUrl: '/exercises/sled-warmup.svg',
    instructions: [
      'Load sled with light-moderate weight',
      'Push sled forward for 20-30 yards',
      'Walk back, repeat',
      'Keep torso upright, don\'t round back',
      'Continue for 10 minutes'
    ],
    tips: [
      'No sled? Walk on incline treadmill',
      'Or do backward walking for 10 minutes',
      'Keep it easy — this is warmup, not workout'
    ],
    difficulty: 'beginner',
    unilateral: false
  },
  {
    id: 'tibialis-raise',
    name: 'Tibialis Raise',
    description: 'Strengthens the tibialis anterior (front of shin). Critical for knee health and balanced lower leg development.',
    category: 'strengthening',
    targetArea: ['tibialis anterior', 'ankle'],
    duration: 45,
    reps: 25,
    sets: 2,
    imageUrl: '/exercises/tibialis-raise.svg',
    instructions: [
      'Stand with back against wall, feet 12 inches out',
      'Lift toes toward shins as high as possible',
      'Lower with control',
      'Full range of motion each rep',
      '25 reps, 2 sets'
    ],
    tips: [
      'Can use tib bar for added resistance',
      'Feel the burn in front of shins',
      'Great for preventing shin splints'
    ],
    difficulty: 'beginner',
    unilateral: false
  },
  {
    id: 'kot-calf-raise',
    name: 'Deep Calf Raise',
    description: 'Full range calf raise hitting both gastroc and soleus. Bent knee position is key.',
    category: 'strengthening',
    targetArea: ['calves', 'achilles', 'ankle'],
    duration: 60,
    reps: 25,
    sets: 2,
    imageUrl: '/exercises/calf-raise.svg',
    instructions: [
      'Stand on edge of step, heels hanging off',
      'Keep knees slightly bent throughout',
      'Lower heels as far as possible (deep stretch)',
      'Rise up onto toes as high as possible',
      '25 reps, 2 sets'
    ],
    tips: [
      'Bent knee = soleus emphasis',
      'Go DEEP on the stretch at bottom',
      'Pause at top and bottom'
    ],
    difficulty: 'beginner',
    unilateral: false
  },
  {
    id: 'reverse-step-up',
    name: 'Reverse Step Up',
    description: 'Step down and up with control. Builds single-leg strength and knee stability.',
    category: 'strengthening',
    targetArea: ['quads', 'glutes', 'knee stability'],
    duration: 90,
    reps: 25,
    sets: 2,
    imageUrl: '/exercises/reverse-step-up.svg',
    instructions: [
      'Stand on box/step (8-12 inches)',
      'Step backward off the box with one leg',
      'Touch toe lightly to ground',
      'Drive through front leg to return',
      '25 reps each leg, 2 sets'
    ],
    tips: [
      'Control the descent — no dropping',
      'Front knee tracks over toes',
      'Add weight when bodyweight is easy'
    ],
    difficulty: 'beginner',
    unilateral: true
  },
  {
    id: 'full-range-split-squat',
    name: 'Full Range Split Squat',
    description: 'Deep split squat with back knee touching ground. Maximum quad and hip flexor development.',
    category: 'strengthening',
    targetArea: ['quads', 'hip flexors', 'glutes'],
    duration: 60,
    reps: 10,
    sets: 2,
    imageUrl: '/exercises/split-squat.svg',
    instructions: [
      'Start in split stance, back knee elevated on pad',
      'Lower until back knee touches ground',
      'Front shin should be vertical or past toes',
      'Drive through front leg to stand',
      '10 reps each leg, 2 sets'
    ],
    tips: [
      'Keep torso upright',
      'Back knee kiss the ground, don\'t slam',
      'This is HARD — start bodyweight only'
    ],
    difficulty: 'intermediate',
    unilateral: true
  },
  {
    id: 'external-rotation',
    name: 'External Rotation',
    description: 'Shoulder external rotation for rotator cuff health. Balances all the internal rotation from daily life.',
    category: 'strengthening',
    targetArea: ['rotator cuff', 'shoulder'],
    duration: 45,
    reps: 15,
    sets: 1,
    imageUrl: '/exercises/external-rotation.svg',
    instructions: [
      'Lie on side, bottom arm under head',
      'Top arm bent 90 degrees, elbow at hip',
      'Hold light dumbbell (2-5 lbs)',
      'Rotate forearm up toward ceiling',
      'Lower with control, 15 reps each side'
    ],
    tips: [
      'Keep elbow pinned to your side',
      'Light weight — this is small muscle',
      'Slow and controlled, no momentum'
    ],
    difficulty: 'beginner',
    unilateral: true
  },
  {
    id: 'dumbbell-pullover',
    name: 'Dumbbell Pullover',
    description: 'Stretches lats and chest while building serratus and core stability. Great for thoracic mobility.',
    category: 'strengthening',
    targetArea: ['lats', 'chest', 'serratus', 'core'],
    duration: 45,
    reps: 15,
    sets: 2,
    imageUrl: '/exercises/pullover.svg',
    instructions: [
      'Lie on bench, shoulders supported, hips dropped',
      'Hold dumbbell overhead with both hands',
      'Lower weight behind head with slight elbow bend',
      'Feel stretch in lats and chest',
      'Pull back to start position, 15 reps'
    ],
    tips: [
      'Keep hips low — creates better stretch',
      'Don\'t go so heavy you lose the stretch',
      'Breathe in on the way down'
    ],
    difficulty: 'beginner',
    unilateral: false
  },
  {
    id: 'trap-3-raise',
    name: 'Trap 3 Raise',
    description: 'Targets the lower traps (trap 3). Critical for shoulder health and posture.',
    category: 'strengthening',
    targetArea: ['lower traps', 'shoulders', 'posture'],
    duration: 45,
    reps: 10,
    sets: 2,
    imageUrl: '/exercises/trap-3-raise.svg',
    instructions: [
      'Lie face down on incline bench (30-45 degrees)',
      'Arms hanging straight down, thumbs up',
      'Raise arms up and out at 45-degree angle',
      'Squeeze lower traps at top',
      '10 reps, 2 sets'
    ],
    tips: [
      'Very light weight (2-5 lbs)',
      'Feel it between shoulder blades',
      'Thumbs point up throughout'
    ],
    difficulty: 'beginner',
    unilateral: false
  },
  {
    id: 'back-extension',
    name: 'Back Extension',
    description: 'Builds erector spinae strength. The foundation of a resilient lower back.',
    category: 'strengthening',
    targetArea: ['erectors', 'lower back', 'glutes'],
    duration: 60,
    imageUrl: '/exercises/back-extension.svg',
    instructions: [
      'Position in back extension machine, hips on pad',
      'Cross arms over chest or behind head',
      'Lower torso toward ground with control',
      'Extend back up until body is straight (not hyperextended)',
      'Follow progression based on your level'
    ],
    tips: [
      'Don\'t hyperextend at top',
      'Control the descent',
      'Progress: bodyweight → weight behind head → weight at chest'
    ],
    difficulty: 'intermediate',
    unilateral: false
  },
  {
    id: 'hip-flexor-kick-out',
    name: 'Hip Flexor Kick Out',
    description: 'Standing hip flexor strength exercise. Builds active hip flexion strength.',
    category: 'strengthening',
    targetArea: ['hip flexors', 'psoas', 'core'],
    duration: 60,
    reps: 5,
    sets: 2,
    imageUrl: '/exercises/hip-flexor-kick-out.svg',
    instructions: [
      'Stand tall, holding wall or pole for balance',
      'Lift one knee as high as possible',
      'Extend leg straight out in front',
      'Hold for 5 seconds',
      'Lower with control, 5 reps each leg'
    ],
    tips: [
      'Keep standing leg straight',
      'Don\'t lean back — stay tall',
      'Feel the hip flexor working hard'
    ],
    difficulty: 'intermediate',
    unilateral: true
  },
  {
    id: 'side-bend-progression',
    name: 'Side Bend Progression',
    description: 'Lateral spine strength and mobility. Often neglected but critical for balanced spinal health.',
    category: 'strengthening',
    targetArea: ['obliques', 'QL', 'lateral spine'],
    duration: 45,
    reps: 12,
    sets: 2,
    imageUrl: '/exercises/side-bend.svg',
    instructions: [
      'Stand with dumbbell in one hand',
      'Bend sideways toward weighted side',
      'Return to neutral, then bend away from weight',
      'Control throughout range',
      '12 reps each side, 2 sets'
    ],
    tips: [
      'Pure lateral movement — no twisting',
      'Feel the stretch and contraction in obliques',
      'Can progress to side plank variations'
    ],
    difficulty: 'beginner',
    unilateral: true
  }
];

// All exercises combined (for AI generator compatibility)
export const allExercises: Exercise[] = [...stretchExercises, ...strengthExercises];

// Quick lookup by ID
export const exerciseMap = new Map<string, Exercise>([
  ...stretchExercises.map(e => [e.id, e] as [string, Exercise]),
  ...strengthExercises.map(e => [e.id, e] as [string, Exercise])
]);

export function getExerciseById(id: string): Exercise | undefined {
  return exerciseMap.get(id);
}
