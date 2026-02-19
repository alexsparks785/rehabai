'use client';

import { useState, useEffect, useCallback } from 'react';
import { Exercise, ProgramExercise } from '@/types';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

interface WorkoutPlayerProps {
  exercises: ProgramExercise[];
  onComplete: () => void;
  onExit: () => void;
}

type PlayerState = 'ready' | 'exercising' | 'resting' | 'complete';

export function WorkoutPlayer({ exercises, onComplete, onExit }: WorkoutPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSet, setCurrentSet] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [playerState, setPlayerState] = useState<PlayerState>('ready');
  const [isPaused, setIsPaused] = useState(false);

  const currentExercise = exercises[currentIndex];
  const exercise = currentExercise?.exercise;
  const totalExercises = exercises.length;
  const progress = ((currentIndex / totalExercises) * 100);

  // Initialize timer when exercise changes
  useEffect(() => {
    if (currentExercise && playerState === 'ready') {
      setTimeRemaining(currentExercise.duration || exercise.duration);
    }
  }, [currentIndex, currentExercise, exercise, playerState]);

  // Timer countdown
  useEffect(() => {
    if (isPaused || playerState === 'ready' || playerState === 'complete') return;

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleTimerComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, playerState]);

  const handleTimerComplete = useCallback(() => {
    if (playerState === 'exercising') {
      // Check if more sets
      if (currentSet < currentExercise.sets) {
        setPlayerState('resting');
        setTimeRemaining(currentExercise.restBetweenSets);
      } else {
        // Move to next exercise
        moveToNextExercise();
      }
    } else if (playerState === 'resting') {
      // Start next set
      setCurrentSet(prev => prev + 1);
      setPlayerState('exercising');
      setTimeRemaining(currentExercise.duration || exercise.duration);
    }
  }, [playerState, currentSet, currentExercise, exercise]);

  const moveToNextExercise = () => {
    if (currentIndex < totalExercises - 1) {
      setCurrentIndex(prev => prev + 1);
      setCurrentSet(1);
      setPlayerState('ready');
    } else {
      setPlayerState('complete');
      onComplete();
    }
  };

  const handleStart = () => {
    setPlayerState('exercising');
    setTimeRemaining(currentExercise.duration || exercise.duration);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setCurrentSet(1);
      setPlayerState('ready');
    }
  };

  const handleSkip = () => {
    moveToNextExercise();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (playerState === 'complete') {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">Workout Complete!</h1>
        <p className="text-gray-400 mb-8">Great job finishing your session</p>
        <Button onClick={onExit} size="lg" className="w-full max-w-xs">
          Back to Home
        </Button>
      </div>
    );
  }

  if (!exercise) return null;

  return (
    <div className="min-h-screen bg-black flex flex-col text-white">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <Button variant="ghost" onClick={onExit} className="text-white">
          ✕
        </Button>
        <div className="text-sm text-gray-400">
          {currentIndex + 1} / {totalExercises}
        </div>
        <div className="w-10" />
      </div>

      {/* Progress bar */}
      <Progress value={progress} className="h-1 rounded-none" />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Exercise visual */}
        <div className="flex-1 flex items-center justify-center bg-gray-900 relative">
          {/* Placeholder for video/image */}
          <div className="w-full max-w-md aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🏋️</div>
              <p className="text-gray-400">Video placeholder</p>
            </div>
          </div>

          {/* Timer overlay */}
          {playerState !== 'ready' && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className={`text-5xl font-bold tabular-nums ${
                playerState === 'resting' ? 'text-yellow-400' : 'text-white'
              }`}>
                {formatTime(timeRemaining)}
              </div>
              {playerState === 'resting' && (
                <div className="text-center text-yellow-400 text-sm mt-1">REST</div>
              )}
            </div>
          )}
        </div>

        {/* Exercise info */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 rounded text-xs ${
              exercise.category === 'stretch' ? 'bg-purple-600' :
              exercise.category === 'strengthening' ? 'bg-red-600' :
              exercise.category === 'mobility' ? 'bg-blue-600' :
              'bg-green-600'
            }`}>
              {exercise.category}
            </span>
            {currentExercise.sets > 1 && (
              <span className="text-gray-400 text-sm">
                Set {currentSet} of {currentExercise.sets}
              </span>
            )}
          </div>
          
          <h2 className="text-2xl font-bold mb-2">{exercise.name}</h2>
          <p className="text-gray-400 mb-4">{exercise.description}</p>

          {/* Reps/Duration info */}
          {currentExercise.reps && (
            <div className="text-lg mb-4">
              <span className="text-white font-semibold">{currentExercise.reps}</span>
              <span className="text-gray-400"> reps</span>
            </div>
          )}

          {/* Instructions (collapsible) */}
          <Card className="bg-gray-900 border-gray-800 p-4 mb-4">
            <h3 className="font-semibold mb-2 text-white">Instructions</h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
              {exercise.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>
          </Card>

          {/* Tips */}
          {exercise.tips.length > 0 && (
            <div className="text-sm text-gray-400">
              <span className="text-yellow-400">💡 Tip:</span> {exercise.tips[0]}
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="p-6 pb-8 bg-gray-900 border-t border-gray-800">
        {playerState === 'ready' ? (
          <Button 
            onClick={handleStart} 
            size="lg" 
            className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
          >
            Start Exercise
          </Button>
        ) : (
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="flex-1"
            >
              ← Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsPaused(!isPaused)}
              className="flex-1"
            >
              {isPaused ? '▶ Resume' : '⏸ Pause'}
            </Button>
            <Button
              variant="outline"
              onClick={handleSkip}
              className="flex-1"
            >
              Skip →
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
