'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Exercise, ProgramExercise } from '@/types';
import { Button } from '@/components/ui/button';
import { 
  Pause, Play, Settings, List, X, Plus, ChevronRight, Check
} from 'lucide-react';
import { ExerciseAnimation } from './ExerciseAnimation';

interface WorkoutPlayerProps {
  exercises: ProgramExercise[];
  workoutName?: string;
  onComplete: () => void;
  onExit: () => void;
}

type PlayerState = 'preparing' | 'exercising' | 'resting' | 'complete';

export function WorkoutPlayer({ 
  exercises, 
  workoutName = 'Custom Workout',
  onComplete, 
  onExit 
}: WorkoutPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [playerState, setPlayerState] = useState<PlayerState>('preparing');
  const [isPaused, setIsPaused] = useState(false);
  const [loggedReps, setLoggedReps] = useState<number | null>(null);
  const [loggedWeight, setLoggedWeight] = useState<number | null>(null);
  const [showWeightInput, setShowWeightInput] = useState(false);
  const [weightInputValue, setWeightInputValue] = useState('0');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentExercise = exercises[currentIndex];
  const exercise = currentExercise?.exercise;
  const nextExercise = exercises[currentIndex + 1]?.exercise;
  const totalExercises = exercises.length;

  // Calculate progress segments
  const getProgressSegments = () => {
    return exercises.map((_, idx) => {
      if (idx < currentIndex) return 'completed';
      if (idx === currentIndex) return 'current';
      return 'upcoming';
    });
  };

  // Preparing screen effect
  useEffect(() => {
    if (playerState === 'preparing') {
      const timer = setTimeout(() => {
        setPlayerState('exercising');
        setTimeRemaining(currentExercise?.duration || 30);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [playerState, currentExercise]);

  // Main timer
  useEffect(() => {
    if (isPaused || playerState === 'preparing' || playerState === 'complete') return;

    timerRef.current = setInterval(() => {
      setElapsedTime(prev => prev + 1);
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleTimerComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, playerState, currentIndex, currentSet]);

  const handleTimerComplete = useCallback(() => {
    if (playerState === 'exercising') {
      // Check if more sets
      if (currentSet < (currentExercise?.sets || 1)) {
        setPlayerState('resting');
        setTimeRemaining(currentExercise?.restBetweenSets || 45);
      } else {
        // Move to rest then next exercise
        if (currentIndex < totalExercises - 1) {
          setPlayerState('resting');
          setTimeRemaining(60); // Rest between exercises
        } else {
          setPlayerState('complete');
          onComplete();
        }
      }
    } else if (playerState === 'resting') {
      // Start next set or next exercise
      if (currentSet < (currentExercise?.sets || 1)) {
        setCurrentSet(prev => prev + 1);
        setPlayerState('exercising');
        setTimeRemaining(currentExercise?.duration || 30);
      } else {
        moveToNextExercise();
      }
    }
  }, [playerState, currentSet, currentExercise, currentIndex, totalExercises, onComplete]);

  const moveToNextExercise = () => {
    if (currentIndex < totalExercises - 1) {
      setCurrentIndex(prev => prev + 1);
      setCurrentSet(1);
      setLoggedReps(null);
      setLoggedWeight(null);
      setPlayerState('exercising');
      setTimeRemaining(exercises[currentIndex + 1]?.duration || 30);
    } else {
      setPlayerState('complete');
      onComplete();
    }
  };

  const adjustRestTime = (delta: number) => {
    setTimeRemaining(prev => Math.max(5, prev + delta));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleWeightSubmit = () => {
    setLoggedWeight(parseFloat(weightInputValue) || 0);
    setShowWeightInput(false);
    setWeightInputValue('0');
  };

  const handleWeightKeypad = (key: string) => {
    if (key === 'backspace') {
      setWeightInputValue(prev => prev.slice(0, -1) || '0');
    } else if (key === '.') {
      if (!weightInputValue.includes('.')) {
        setWeightInputValue(prev => prev + '.');
      }
    } else {
      setWeightInputValue(prev => prev === '0' ? key : prev + key);
    }
  };

  // Guard for empty exercises
  if (!exercises || exercises.length === 0) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
        <div className="text-5xl mb-6">⚠️</div>
        <h1 className="text-2xl font-bold mb-4">No exercises found</h1>
        <p className="text-gray-400 mb-8">Please generate a workout first</p>
        <button 
          onClick={onExit}
          className="px-6 py-3 bg-yellow-500 text-black rounded-full font-semibold"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Preparing screen
  if (playerState === 'preparing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col text-white">
        <div className="p-4">
          <button onClick={onExit} className="text-white/60 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-bold italic text-white/90">
            Preparing your<br />workout
          </h1>
        </div>
      </div>
    );
  }

  // Complete screen
  if (playerState === 'complete') {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6">
          <Check size={40} />
        </div>
        <h1 className="text-3xl font-bold mb-2">Workout Complete!</h1>
        <p className="text-gray-400 mb-2">{workoutName}</p>
        <p className="text-2xl font-semibold text-yellow-400 mb-8">
          {formatTime(elapsedTime)}
        </p>
        <Button onClick={onExit} size="lg" className="w-full max-w-xs bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
          Done
        </Button>
      </div>
    );
  }

  // Rest screen
  if (playerState === 'resting') {
    const completedExercise = exercises[currentIndex]?.exercise;
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-blue-800 flex flex-col text-white">
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            >
              {isPaused ? <Play size={20} /> : <Pause size={20} />}
            </button>
            <span className="text-lg font-medium">{formatTime(elapsedTime)}</span>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Settings size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Progress segments */}
        <div className="px-4 flex gap-1">
          {getProgressSegments().map((state, idx) => (
            <div 
              key={idx}
              className={`h-1 flex-1 rounded-full ${
                state === 'completed' ? 'bg-gray-500' :
                state === 'current' ? 'bg-yellow-400' :
                'bg-gray-700'
              }`}
            />
          ))}
        </div>

        {/* Completed exercise indicator */}
        <div className="p-4 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <Check size={14} />
          </div>
          <span className="font-medium">{completedExercise?.name}</span>
        </div>

        {/* Main rest area */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          {/* This area intentionally sparse - calming */}
        </div>

        {/* Rest controls */}
        <div className="p-6 pb-8">
          <h2 className="text-3xl font-bold mb-6">Rest</h2>
          
          <div className="flex items-center justify-between mb-6">
            {/* Timer ring */}
            <div className="relative w-24 h-24">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="4"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  fill="none"
                  stroke="#FBBF24"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 44}`}
                  strokeDashoffset={`${2 * Math.PI * 44 * (1 - timeRemaining / 60)}`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">{formatTime(timeRemaining)}</span>
              </div>
            </div>

            {/* Adjust buttons */}
            <div className="flex gap-3">
              <button 
                onClick={() => adjustRestTime(-15)}
                className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium"
              >
                -15s
              </button>
              <button 
                onClick={() => adjustRestTime(15)}
                className="px-4 py-2 rounded-full bg-white/10 text-sm font-medium"
              >
                +15s
              </button>
            </div>
          </div>

          {/* Next exercise preview */}
          {nextExercise && (
            <div className="flex items-center gap-2 text-white/60">
              <span className="text-yellow-400 font-medium">Next</span>
              <ChevronRight size={16} />
              <span>{nextExercise.name}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Exercise screen
  if (!exercise) return null;

  return (
    <div className="min-h-screen bg-black flex flex-col text-white">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
          >
            {isPaused ? <Play size={20} /> : <Pause size={20} />}
          </button>
          <span className="text-lg font-medium">{formatTime(elapsedTime)}</span>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Settings size={20} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 flex gap-1">
        {getProgressSegments().map((state, idx) => (
          <div 
            key={idx}
            className={`h-1 flex-1 rounded-full transition-colors ${
              state === 'completed' ? 'bg-red-500' :
              state === 'current' ? 'bg-yellow-400' :
              'bg-gray-700'
            }`}
          />
        ))}
      </div>

      {/* Exercise info overlay */}
      <div className="p-4">
        <div className="text-yellow-400 text-sm font-medium mb-1">
          Set {currentSet}/{currentExercise.sets || 1}
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold">{exercise.name}</h1>
            {exercise.unilateral && (
              <span className="text-gray-400 text-sm">Single Sided</span>
            )}
          </div>
          <button className="p-2">
            <div className="flex flex-col gap-0.5">
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-1 h-1 bg-white rounded-full" />
              <div className="w-1 h-1 bg-white rounded-full" />
            </div>
          </button>
        </div>
      </div>

      {/* Video area */}
      <div className="flex-1 bg-gray-900 relative">
        {/* Exercise animation */}
        <ExerciseAnimation 
          exerciseId={exercise.id} 
          isPaused={isPaused}
        />

        {/* Paused overlay */}
        {isPaused && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center">
              <Play size={64} className="mx-auto mb-4 text-yellow-400" />
              <p className="text-xl">Paused</p>
            </div>
          </div>
        )}
      </div>

      {/* Timer and controls */}
      <div className="p-6 pb-8 bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center justify-between mb-4">
          {/* Reps button */}
          <button 
            onClick={() => setLoggedReps((loggedReps || 0) + 1)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10"
          >
            <Plus size={16} />
            <span className="text-sm">reps</span>
            {loggedReps && <span className="text-yellow-400 font-bold">{loggedReps}</span>}
          </button>

          {/* Timer ring */}
          <div className="relative w-20 h-20">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="3"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                fill="none"
                stroke="#FBBF24"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 36}`}
                strokeDashoffset={`${2 * Math.PI * 36 * (1 - timeRemaining / (currentExercise?.duration || 30))}`}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold">{formatTime(timeRemaining)}</span>
            </div>
          </div>

          {/* Weight button */}
          <button 
            onClick={() => setShowWeightInput(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10"
          >
            <Plus size={16} />
            <span className="text-sm">weight</span>
            {loggedWeight && <span className="text-yellow-400 font-bold">{loggedWeight}</span>}
          </button>
        </div>

        {/* Next exercise preview */}
        {nextExercise && (
          <div className="flex items-center gap-2 text-white/60">
            <span className="text-yellow-400 font-medium">Next</span>
            <ChevronRight size={16} />
            <span>{nextExercise.name}</span>
          </div>
        )}
      </div>

      {/* Weight input modal */}
      {showWeightInput && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-400 mb-2">Total weight (lbs)</p>
              <p className="text-5xl font-bold">{weightInputValue || '0'}</p>
            </div>
          </div>
          
          {/* Keypad */}
          <div className="p-4 pb-8 grid grid-cols-3 gap-3 max-w-xs mx-auto w-full">
            {['1','2','3','4','5','6','7','8','9','.','0','backspace'].map(key => (
              <button
                key={key}
                onClick={() => handleWeightKeypad(key)}
                className="h-14 rounded-lg bg-gray-800 text-xl font-medium flex items-center justify-center"
              >
                {key === 'backspace' ? '←' : key}
              </button>
            ))}
          </div>
          
          <div className="p-4 pb-8">
            <button
              onClick={handleWeightSubmit}
              className="w-full h-14 rounded-full bg-yellow-500/20 border border-yellow-500 flex items-center justify-center"
            >
              <Check className="text-yellow-400" size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
