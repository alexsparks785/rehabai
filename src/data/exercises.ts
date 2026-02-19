import { Exercise } from '@/types';

// Placeholder images - will be replaced with AI-generated videos
const PLACEHOLDER_IMG = '/exercises/placeholder.svg';

export const exercises: Exercise[] = [
  // LOW BACK EXERCISES
  {
    id: 'cat-cow',
    name: 'Cat-Cow Stretch',
    description: 'Gentle spinal flexion and extension to warm up the lower back',
    category: 'warmup',
    targetArea: ['lower back', 'spine'],
    duration: 60,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Start on hands and knees, wrists under shoulders, knees under hips',
      'Inhale: Drop belly, lift chest and tailbone (Cow)',
      'Exhale: Round spine, tuck chin and tailbone (Cat)',
      'Flow smoothly between positions'
    ],
    tips: [
      'Move with your breath',
      'Keep movements controlled and gentle',
      'Focus on feeling each vertebra move'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'bird-dog',
    name: 'Bird Dog',
    description: 'Core stabilization exercise that strengthens the lower back and glutes',
    category: 'strengthening',
    targetArea: ['lower back', 'core', 'glutes'],
    duration: 45,
    reps: 10,
    sets: 2,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Start on hands and knees in tabletop position',
      'Extend right arm forward and left leg back simultaneously',
      'Keep hips level and core engaged',
      'Hold for 2-3 seconds, then return and switch sides'
    ],
    tips: [
      'Imagine balancing a glass of water on your lower back',
      'Don\'t let hips rotate',
      'Move slowly and with control'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'dead-bug',
    name: 'Dead Bug',
    description: 'Core exercise that protects the lower back while building strength',
    category: 'strengthening',
    targetArea: ['core', 'lower back'],
    duration: 45,
    reps: 10,
    sets: 2,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lie on back, arms extended toward ceiling, knees bent at 90°',
      'Press lower back into floor',
      'Slowly lower opposite arm and leg toward floor',
      'Return to start, switch sides'
    ],
    tips: [
      'Keep lower back pressed into floor throughout',
      'Move slowly - speed is not the goal',
      'Exhale as you extend'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'glute-bridge',
    name: 'Glute Bridge',
    description: 'Strengthens glutes and hamstrings while supporting the lower back',
    category: 'strengthening',
    targetArea: ['glutes', 'hamstrings', 'lower back'],
    duration: 45,
    reps: 12,
    sets: 3,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lie on back, knees bent, feet flat on floor hip-width apart',
      'Press through heels to lift hips toward ceiling',
      'Squeeze glutes at top, hold 2 seconds',
      'Lower slowly with control'
    ],
    tips: [
      'Don\'t hyperextend the lower back at the top',
      'Feel the work in your glutes, not lower back',
      'Keep core engaged throughout'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'childs-pose',
    name: 'Child\'s Pose',
    description: 'Gentle stretch for the lower back and hips',
    category: 'stretch',
    targetArea: ['lower back', 'hips', 'glutes'],
    duration: 60,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Kneel on floor, sit back on heels',
      'Fold forward, extending arms in front or alongside body',
      'Rest forehead on floor',
      'Breathe deeply and relax into the stretch'
    ],
    tips: [
      'Widen knees if needed for comfort',
      'Use a pillow under forehead if it doesn\'t reach floor',
      'Focus on relaxing with each exhale'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'hip-flexor-stretch',
    name: 'Hip Flexor Stretch',
    description: 'Releases tight hip flexors that can contribute to lower back pain',
    category: 'stretch',
    targetArea: ['hip flexors', 'quads'],
    duration: 60,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Kneel on one knee, other foot flat in front (lunge position)',
      'Keep torso upright, core engaged',
      'Gently shift hips forward until you feel stretch in front hip',
      'Hold, then switch sides'
    ],
    tips: [
      'Don\'t let front knee go past toes',
      'Squeeze back glute to deepen stretch',
      'Keep spine tall, don\'t lean forward'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'supine-twist',
    name: 'Supine Spinal Twist',
    description: 'Gentle rotation to release tension in the lower back',
    category: 'stretch',
    targetArea: ['lower back', 'spine', 'hips'],
    duration: 60,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lie on back, arms out to sides in T position',
      'Bring knees to chest, then drop both knees to one side',
      'Keep both shoulders on floor',
      'Turn head opposite direction, hold, then switch sides'
    ],
    tips: [
      'Let gravity do the work',
      'Don\'t force knees to floor',
      'Breathe into any tight areas'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'pelvic-tilt',
    name: 'Pelvic Tilt',
    description: 'Foundational exercise to build awareness and control of the lower back',
    category: 'mobility',
    targetArea: ['lower back', 'core'],
    duration: 45,
    reps: 15,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lie on back, knees bent, feet flat on floor',
      'Gently flatten lower back into floor by tilting pelvis',
      'Hold for 3-5 seconds',
      'Release and repeat'
    ],
    tips: [
      'Movement is subtle - don\'t overdo it',
      'Imagine pulling belly button toward spine',
      'This builds the foundation for all other exercises'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'sphinx',
    name: 'Sphinx Pose',
    description: 'Gentle back extension to strengthen erector muscles',
    category: 'strengthening',
    targetArea: ['lower back', 'spine'],
    duration: 45,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lie face down, forearms on floor, elbows under shoulders',
      'Press forearms into floor to lift chest',
      'Keep hips and legs relaxed on floor',
      'Hold, breathing deeply'
    ],
    tips: [
      'Don\'t strain the neck - look slightly forward',
      'Keep shoulders away from ears',
      'Start with shorter holds if uncomfortable'
    ],
    difficulty: 'beginner'
  },
  {
    id: 'knee-to-chest',
    name: 'Knee to Chest Stretch',
    description: 'Releases lower back tension and stretches the glutes',
    category: 'stretch',
    targetArea: ['lower back', 'glutes', 'hips'],
    duration: 60,
    imageUrl: PLACEHOLDER_IMG,
    instructions: [
      'Lie on back, legs extended',
      'Bring one knee toward chest, holding shin or thigh',
      'Keep other leg extended or bent for comfort',
      'Hold 20-30 seconds, switch sides'
    ],
    tips: [
      'Keep lower back pressed into floor',
      'Don\'t pull too hard - gentle stretch only',
      'Try both knees together for variation'
    ],
    difficulty: 'beginner'
  }
];

// Helper function to get exercises by category
export function getExercisesByCategory(category: string): Exercise[] {
  return exercises.filter(e => e.category === category);
}

// Helper function to get exercises by target area
export function getExercisesByTargetArea(area: string): Exercise[] {
  return exercises.filter(e => e.targetArea.includes(area));
}
