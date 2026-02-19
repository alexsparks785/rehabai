// Core types for RehabAI

export interface UserProfile {
  id: string;
  name: string;
  condition: ConditionType;
  painLevel: number; // 1-10
  goals: string[];
  createdAt: string;
}

export type ConditionType = 
  | 'low-back-pain'
  | 'knee-pain'
  | 'neck-pain'
  | 'shoulder-pain'
  | 'hip-pain'
  | 'general-mobility';

export interface Exercise {
  id: string;
  name: string;
  description: string;
  category: ExerciseCategory;
  targetArea: string[];
  duration: number; // seconds
  reps?: number;
  sets?: number;
  videoUrl?: string;
  imageUrl: string;
  instructions: string[];
  tips: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export type ExerciseCategory = 
  | 'stretch'
  | 'strengthening'
  | 'mobility'
  | 'warmup'
  | 'cooldown';

export interface WorkoutProgram {
  id: string;
  name: string;
  description: string;
  condition: ConditionType;
  exercises: ProgramExercise[];
  estimatedDuration: number; // minutes
  createdAt: string;
}

export interface ProgramExercise {
  exercise: Exercise;
  order: number;
  sets: number;
  reps?: number;
  duration?: number; // seconds per set
  restBetweenSets: number; // seconds
}

export interface WorkoutSession {
  id: string;
  programId: string;
  startedAt: string;
  completedAt?: string;
  exercisesCompleted: number;
  totalExercises: number;
}

export interface UserProgress {
  totalWorkouts: number;
  currentStreak: number;
  longestStreak: number;
  lastWorkoutDate?: string;
  completedSessions: WorkoutSession[];
}
