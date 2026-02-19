import { Exercise } from '@/types';

const PLACEHOLDER_IMG = '/exercises/placeholder.svg';

// KNEE EXERCISES
export const kneeExercises: Exercise[] = [
  {
    id: 'quad-set',
    name: 'Quad Set',
    description: 'Isometric quad strengthening - foundation for knee rehab',
    category: 'strengthening',
    targetArea: ['quadriceps', 'knee'],
    duration: 30,
    reps: 10,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Sit or lie with leg extended straight',
      'Tighten thigh muscle, pushing knee down into floor',
      'Hold for 5 seconds',
      'Relax and repeat'
    ],
    tips: [
      'You should see your kneecap move slightly upward',
      'Keep ankle relaxed',
      'Great for post-surgery or acute pain'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'straight-leg-raise',
    name: 'Straight Leg Raise',
    description: 'Strengthens quads without bending the knee',
    category: 'strengthening',
    targetArea: ['quadriceps', 'hip flexors'],
    duration: 45,
    reps: 10,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lie on back, one knee bent, other leg straight',
      'Tighten quad of straight leg',
      'Lift leg to height of bent knee',
      'Lower slowly with control'
    ],
    tips: [
      'Keep lower back pressed into floor',
      'Lift slowly - no momentum',
      'Add ankle weight to progress'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'terminal-knee-extension',
    name: 'Terminal Knee Extension',
    description: 'Targets the last degrees of knee extension',
    category: 'strengthening',
    targetArea: ['quadriceps', 'knee'],
    duration: 45,
    reps: 15,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Stand with resistance band around knee, anchored behind',
      'Start with slight knee bend',
      'Straighten knee against resistance',
      'Control the return'
    ],
    tips: [
      'Focus on full extension',
      'Keep movement controlled',
      'Essential for runners and athletes'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'step-down',
    name: 'Step Down',
    description: 'Eccentric quad strengthening for knee stability',
    category: 'strengthening',
    targetArea: ['quadriceps', 'glutes', 'knee'],
    duration: 60,
    reps: 10,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Stand on step or stair on one leg',
      'Slowly lower opposite foot toward ground',
      'Tap heel lightly, return to start',
      'Control the descent - this is the work'
    ],
    tips: [
      'Keep knee tracking over toes',
      'Don\'t let knee collapse inward',
      'Start with low step, progress height'
    ],
    difficulty: 'intermediate'
  }
];

// NECK EXERCISES
export const neckExercises: Exercise[] = [
  {
    id: 'chin-tuck',
    name: 'Chin Tuck',
    description: 'Corrects forward head posture and strengthens deep neck flexors',
    category: 'strengthening',
    targetArea: ['neck', 'cervical spine'],
    duration: 30,
    reps: 10,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Sit or stand with good posture',
      'Draw chin straight back (make a double chin)',
      'Hold for 5 seconds',
      'Release and repeat'
    ],
    tips: [
      'Don\'t tilt head up or down',
      'Imagine a string pulling back of head up',
      'Great for desk workers'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'neck-rotation',
    name: 'Neck Rotation Stretch',
    description: 'Improves rotational mobility of the cervical spine',
    category: 'mobility',
    targetArea: ['neck', 'cervical spine'],
    duration: 60,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Sit tall with shoulders relaxed',
      'Slowly turn head to look over right shoulder',
      'Hold 15-30 seconds',
      'Return to center, repeat left'
    ],
    tips: [
      'Keep shoulders still',
      'Don\'t force the stretch',
      'Move smoothly, no jerking'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'levator-scap-stretch',
    name: 'Levator Scapulae Stretch',
    description: 'Releases common tension point between neck and shoulder',
    category: 'stretch',
    targetArea: ['neck', 'upper back', 'shoulders'],
    duration: 60,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Sit and hold bottom of chair with right hand',
      'Turn head 45° to left',
      'Gently pull head down with left hand',
      'Hold 30 seconds, switch sides'
    ],
    tips: [
      'Look toward opposite armpit',
      'Keep shoulders down',
      'Breathe and relax into stretch'
    ],
    difficulty: 'beginner'
  }
];

// SHOULDER EXERCISES
export const shoulderExercises: Exercise[] = [
  {
    id: 'pendulum',
    name: 'Pendulum Exercise',
    description: 'Gentle shoulder mobility using gravity',
    category: 'mobility',
    targetArea: ['shoulder', 'rotator cuff'],
    duration: 60,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lean forward, support yourself with good arm on table',
      'Let affected arm hang down',
      'Gently swing arm in small circles',
      'Gradually increase circle size'
    ],
    tips: [
      'Movement comes from body, not arm',
      'Keep arm relaxed - let gravity work',
      'Great for acute shoulder issues'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'external-rotation-band',
    name: 'External Rotation with Band',
    description: 'Strengthens rotator cuff external rotators',
    category: 'strengthening',
    targetArea: ['rotator cuff', 'shoulder'],
    duration: 45,
    reps: 15,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Hold band with elbows at sides, bent 90°',
      'Keep elbows pinned to ribs',
      'Rotate forearms outward against band',
      'Control the return'
    ],
    tips: [
      'Don\'t let elbows leave your sides',
      'Squeeze shoulder blades together',
      'Use light resistance - form over weight'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'wall-slide',
    name: 'Wall Slide',
    description: 'Improves shoulder mobility and scapular control',
    category: 'mobility',
    targetArea: ['shoulder', 'scapula', 'upper back'],
    duration: 45,
    reps: 10,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Stand with back, head, and arms against wall',
      'Arms in "goalpost" position (elbows at 90°)',
      'Slide arms up wall keeping contact',
      'Slide back down with control'
    ],
    tips: [
      'Keep lower back pressed to wall',
      'If arms come off wall, don\'t go higher',
      'Feel shoulder blades move'
    ],
    difficulty: 'intermediate'
  }
];

// HIP EXERCISES
export const hipExercises: Exercise[] = [
  {
    id: 'clamshell',
    name: 'Clamshell',
    description: 'Targets hip external rotators and glute medius',
    category: 'strengthening',
    targetArea: ['glutes', 'hip', 'hip rotators'],
    duration: 45,
    reps: 15,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lie on side, knees bent 90°, feet together',
      'Keep feet touching, lift top knee',
      'Open legs like a clamshell',
      'Lower with control'
    ],
    tips: [
      'Don\'t roll hips backward',
      'Feel work in side of hip, not front',
      'Add band above knees to progress'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'fire-hydrant',
    name: 'Fire Hydrant',
    description: 'Hip abduction and external rotation strengthening',
    category: 'strengthening',
    targetArea: ['glutes', 'hip abductors'],
    duration: 45,
    reps: 12,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Start on hands and knees',
      'Keeping knee bent, lift leg out to side',
      'Keep hips level - don\'t rotate',
      'Lower with control'
    ],
    tips: [
      'Imagine a string pulling knee to ceiling',
      'Core stays engaged',
      'Don\'t arch lower back'
    ],
    difficulty: 'beginner'
  },
  {
    id: '90-90-stretch',
    name: '90/90 Hip Stretch',
    description: 'Comprehensive hip mobility for internal and external rotation',
    category: 'mobility',
    targetArea: ['hip', 'glutes', 'hip rotators'],
    duration: 90,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Sit with front leg bent 90° in front, back leg 90° to side',
      'Sit tall, both knees at right angles',
      'Hold position, then switch sides',
      'Can add gentle forward lean'
    ],
    tips: [
      'If too hard, sit on cushion',
      'Work toward getting both knees on floor',
      'Breathe and relax into position'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 'figure-four-stretch',
    name: 'Figure Four Stretch',
    description: 'Deep piriformis and glute stretch',
    category: 'stretch',
    targetArea: ['piriformis', 'glutes', 'hip'],
    duration: 60,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lie on back, cross ankle over opposite knee',
      'Pull bottom leg toward chest',
      'Feel stretch in crossed leg\'s hip',
      'Hold 30 seconds each side'
    ],
    tips: [
      'Keep head on floor',
      'Flex foot of crossed leg for protection',
      'Great for sciatica relief'
    ],
    difficulty: 'beginner'
  }
];

// Export all extended exercises
export const extendedExercises = [
  ...kneeExercises,
  ...neckExercises,
  ...shoulderExercises,
  ...hipExercises
];
