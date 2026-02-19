import { UserProfile, WorkoutProgram, ProgramExercise, ConditionType } from '@/types';
import { allExercises } from '@/data/exercises';

// For now, generate programs based on simple rules
// Later this will use Claude API for more personalized generation

const CONDITION_EXERCISES: Record<ConditionType, string[]> = {
  'low-back-pain': [
    'cat-cow',
    'pelvic-tilt',
    'bird-dog',
    'dead-bug',
    'glute-bridge',
    'childs-pose',
    'hip-flexor-stretch',
    'supine-twist',
    'knee-to-chest',
    'sphinx'
  ],
  'knee-pain': [
    'quad-set',
    'straight-leg-raise',
    'terminal-knee-extension',
    'step-down',
    'glute-bridge',
    'clamshell',
    'hip-flexor-stretch'
  ],
  'neck-pain': [
    'chin-tuck',
    'neck-rotation',
    'levator-scap-stretch',
    'cat-cow',
    'childs-pose',
    'supine-twist'
  ],
  'shoulder-pain': [
    'pendulum',
    'external-rotation-band',
    'wall-slide',
    'cat-cow',
    'childs-pose',
    'dead-bug'
  ],
  'hip-pain': [
    'clamshell',
    'fire-hydrant',
    '90-90-stretch',
    'figure-four-stretch',
    'hip-flexor-stretch',
    'glute-bridge',
    'supine-twist',
    'knee-to-chest'
  ],
  'general-mobility': [
    'cat-cow',
    'hip-flexor-stretch',
    'supine-twist',
    'childs-pose',
    'glute-bridge',
    'bird-dog',
    '90-90-stretch',
    'wall-slide'
  ]
};

export function generateDailyProgram(profile: UserProfile): WorkoutProgram {
  const conditionExercises = CONDITION_EXERCISES[profile.condition] || [];
  
  // Get exercise objects
  const selectedExercises = conditionExercises
    .map(id => allExercises.find(e => e.id === id))
    .filter(Boolean);

  // Adjust based on pain level
  // Higher pain = fewer exercises, shorter duration
  const maxExercises = profile.painLevel <= 3 ? 8 : profile.painLevel <= 6 ? 6 : 4;
  const programExercises = selectedExercises.slice(0, maxExercises);

  // Convert to ProgramExercise format
  const programItems: ProgramExercise[] = programExercises.map((exercise, index) => {
    // Adjust sets/reps based on pain level
    const setsMultiplier = profile.painLevel <= 3 ? 1.2 : profile.painLevel <= 6 ? 1 : 0.8;
    
    return {
      exercise: exercise!,
      order: index + 1,
      sets: Math.max(1, Math.round((exercise!.sets || 1) * setsMultiplier)),
      reps: exercise!.reps,
      duration: exercise!.duration,
      restBetweenSets: 30
    };
  });

  // Calculate estimated duration
  const totalDuration = programItems.reduce((acc, item) => {
    const exerciseTime = (item.duration || 30) * item.sets;
    const restTime = item.restBetweenSets * (item.sets - 1);
    return acc + exerciseTime + restTime;
  }, 0);

  return {
    id: crypto.randomUUID(),
    name: `Daily ${profile.condition.replace('-', ' ')} Program`,
    description: `Personalized program for ${profile.name || 'you'} based on your condition and goals`,
    condition: profile.condition,
    exercises: programItems,
    estimatedDuration: Math.ceil(totalDuration / 60),
    createdAt: new Date().toISOString()
  };
}

// Claude API integration for smarter program generation
export async function generateProgramWithAI(profile: UserProfile): Promise<WorkoutProgram> {
  try {
    const response = await fetch('/api/generate-program', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('AI generation failed, falling back to rule-based:', error);
    // Fall back to rule-based generation
    return generateDailyProgram(profile);
  }
}
