// Program definitions based on content/exercises/program-structure.json
// These are the two core LBA routines

import { WorkoutProgram, ProgramExercise } from '@/types';
import { stretchExercises, strengthExercises, getExerciseById } from './exercises';

// Helper to create ProgramExercise from our exercise data
function createProgramExercise(
  exerciseId: string,
  order: number,
  sets: number,
  durationOrReps: { duration?: number; reps?: number },
  restBetweenSets: number = 30
): ProgramExercise | null {
  const exercise = getExerciseById(exerciseId);
  if (!exercise) return null;
  
  return {
    exercise,
    order,
    sets,
    duration: durationOrReps.duration,
    reps: durationOrReps.reps,
    restBetweenSets
  };
}

// Stretch Routine (Mobility Flow) — ~30min
export const stretchRoutine: WorkoutProgram = {
  id: 'stretch-routine',
  name: 'Mobility Flow',
  description: 'Each exercise becomes increasingly more demanding to the low back. No pressure to complete all when starting — you\'ll build tolerance and confidence as you go!',
  condition: 'low-back-pain',
  estimatedDuration: 30,
  createdAt: new Date().toISOString(),
  exercises: [
    createProgramExercise('couch-stretch', 1, 2, { duration: 60 }, 15),      // 2 x 1 min/side
    createProgramExercise('outer-hip-circuit', 2, 1, { duration: 90 }, 0),   // 1 circuit each side
    createProgramExercise('pigeon-strength', 3, 1, { reps: 20 }, 30),        // 1 x 20/side
    createProgramExercise('deep-squat', 4, 2, { duration: 120 }, 30),        // 2 x 2 min
    createProgramExercise('loaded-butterfly', 5, 2, { duration: 60 }, 30),   // 2 x 1 min
    createProgramExercise('active-hang', 6, 1, { duration: 60 }, 0),         // Accumulate 1 min (optional)
  ].filter((e): e is ProgramExercise => e !== null)
};

// Strength Routine (LBA Flow) — ~1hr
export const strengthRoutine: WorkoutProgram = {
  id: 'strength-routine',
  name: 'LBA Strength Flow',
  description: 'Each exercise becomes increasingly more demanding to the low back. If this is your first few months: Pick movements your body can handle today with low intensity, reduced range, and fewer reps. Find what your body can tolerate without stirring things up.',
  condition: 'low-back-pain',
  estimatedDuration: 60,
  createdAt: new Date().toISOString(),
  exercises: [
    createProgramExercise('sled-warmup', 1, 1, { duration: 600 }, 0),        // 1 x 10 min
    createProgramExercise('tibialis-raise', 2, 2, { reps: 25 }, 45),         // 2 x 25
    createProgramExercise('kot-calf-raise', 3, 2, { reps: 25 }, 45),         // 2 x 25
    createProgramExercise('reverse-step-up', 4, 2, { reps: 25 }, 60),        // 2 x 25/leg
    createProgramExercise('full-range-split-squat', 5, 2, { reps: 10 }, 60), // 2 x 10/leg
    createProgramExercise('external-rotation', 6, 1, { reps: 15 }, 30),      // 1 x 15/side
    createProgramExercise('dumbbell-pullover', 7, 2, { reps: 15 }, 45),      // 2 x 15
    createProgramExercise('trap-3-raise', 8, 2, { reps: 10 }, 45),           // 2 x 10
    createProgramExercise('back-extension', 9, 2, { reps: 12 }, 60),         // progression-based
    createProgramExercise('hip-flexor-kick-out', 10, 2, { reps: 5 }, 30),    // 2 x 5/leg (5s hold)
    createProgramExercise('side-bend-progression', 11, 2, { reps: 12 }, 45), // 2 x 12/side
  ].filter((e): e is ProgramExercise => e !== null)
};

// All available programs
export const programs: WorkoutProgram[] = [
  stretchRoutine,
  strengthRoutine
];

// Quick lookup
export function getProgramById(id: string): WorkoutProgram | undefined {
  return programs.find(p => p.id === id);
}
