'use client';

import { useState, useEffect } from 'react';
import { UserProfile, WorkoutProgram, UserProgress } from '@/types';
import { Onboarding } from '@/components/Onboarding';
import { WorkoutPlayer } from '@/components/WorkoutPlayer';
import { generateDailyProgram, generateProgramWithAI } from '@/lib/programGenerator';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// localStorage keys
const STORAGE_KEYS = {
  profile: 'rehabai_profile',
  progress: 'rehabai_progress',
  lastProgram: 'rehabai_last_program'
};

type AppState = 'loading' | 'onboarding' | 'home' | 'generating' | 'workout';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [program, setProgram] = useState<WorkoutProgram | null>(null);
  const [useAI, setUseAI] = useState(true);
  const [progress, setProgress] = useState<UserProgress>({
    totalWorkouts: 0,
    currentStreak: 0,
    longestStreak: 0,
    completedSessions: []
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const storedProfile = localStorage.getItem(STORAGE_KEYS.profile);
    const storedProgress = localStorage.getItem(STORAGE_KEYS.progress);
    
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
      if (storedProgress) {
        setProgress(JSON.parse(storedProgress));
      }
      setAppState('home');
    } else {
      setAppState('onboarding');
    }
  }, []);

  // Save profile when it changes
  useEffect(() => {
    if (profile) {
      localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
    }
  }, [profile]);

  // Save progress when it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
  }, [progress]);

  const handleOnboardingComplete = (newProfile: UserProfile) => {
    setProfile(newProfile);
    setAppState('home');
  };

  const handleStartWorkout = async () => {
    if (!profile) return;
    
    setAppState('generating');
    
    try {
      const newProgram = useAI 
        ? await generateProgramWithAI(profile)
        : generateDailyProgram(profile);
      setProgram(newProgram);
      setAppState('workout');
    } catch (error) {
      console.error('Failed to generate program:', error);
      // Fallback to rule-based
      const fallbackProgram = generateDailyProgram(profile);
      setProgram(fallbackProgram);
      setAppState('workout');
    }
  };

  const handleWorkoutComplete = () => {
    // Update progress
    const today = new Date().toISOString().split('T')[0];
    const lastWorkoutDate = progress.lastWorkoutDate;
    
    let newStreak = progress.currentStreak;
    if (lastWorkoutDate) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (lastWorkoutDate === yesterday) {
        newStreak += 1;
      } else if (lastWorkoutDate !== today) {
        newStreak = 1;
      }
    } else {
      newStreak = 1;
    }

    setProgress(prev => ({
      ...prev,
      totalWorkouts: prev.totalWorkouts + 1,
      currentStreak: newStreak,
      longestStreak: Math.max(prev.longestStreak, newStreak),
      lastWorkoutDate: today
    }));
  };

  const handleExitWorkout = () => {
    setAppState('home');
    setProgram(null);
  };

  const handleReset = () => {
    localStorage.clear();
    setProfile(null);
    setProgress({
      totalWorkouts: 0,
      currentStreak: 0,
      longestStreak: 0,
      completedSessions: []
    });
    setAppState('onboarding');
  };

  // Loading state
  if (appState === 'loading') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Generating program state
  if (appState === 'generating') {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
        <div className="text-5xl mb-6 animate-pulse">🧠</div>
        <div className="text-white text-xl mb-2">Creating your personalized program...</div>
        <div className="text-gray-400 text-sm">AI is analyzing your profile</div>
      </div>
    );
  }

  // Onboarding
  if (appState === 'onboarding') {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  // Workout Player
  if (appState === 'workout' && program) {
    return (
      <WorkoutPlayer
        exercises={program.exercises}
        onComplete={handleWorkoutComplete}
        onExit={handleExitWorkout}
      />
    );
  }

  // Home Dashboard
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">RehabAI</h1>
          <Button variant="ghost" size="sm" onClick={handleReset} className="text-gray-400">
            Reset
          </Button>
        </div>
        <p className="text-gray-400">
          Hey {profile?.name || 'there'}! Ready for your workout?
        </p>
      </div>

      {/* Stats */}
      <div className="px-6 grid grid-cols-3 gap-3 mb-6">
        <Card className="bg-gray-900 border-gray-800 p-4 text-center">
          <div className="text-2xl font-bold text-green-500">{progress.currentStreak}</div>
          <div className="text-xs text-gray-400">Day Streak</div>
        </Card>
        <Card className="bg-gray-900 border-gray-800 p-4 text-center">
          <div className="text-2xl font-bold text-blue-500">{progress.totalWorkouts}</div>
          <div className="text-xs text-gray-400">Workouts</div>
        </Card>
        <Card className="bg-gray-900 border-gray-800 p-4 text-center">
          <div className="text-2xl font-bold text-purple-500">{progress.longestStreak}</div>
          <div className="text-xs text-gray-400">Best Streak</div>
        </Card>
      </div>

      {/* Today's Workout */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">Today&apos;s Program</h2>
        <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-700/50 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-xl font-bold mb-1">
                {profile?.condition.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Workout
              </div>
              <div className="text-sm text-gray-300">
                ~15-20 min · {profile?.painLevel && profile.painLevel <= 5 ? 'Full' : 'Modified'} intensity
              </div>
            </div>
            <div className="text-4xl">🎯</div>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="text-sm text-gray-300">✓ Warm-up stretches</div>
            <div className="text-sm text-gray-300">✓ Core strengthening</div>
            <div className="text-sm text-gray-300">✓ Mobility work</div>
            <div className="text-sm text-gray-300">✓ Cool-down</div>
          </div>

          <Button 
            onClick={handleStartWorkout}
            className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
            size="lg"
          >
            Start Workout
          </Button>
        </Card>
      </div>

      {/* Condition Info */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">Your Profile</h2>
        <Card className="bg-gray-900 border-gray-800 p-4">
          <div className="flex items-center gap-4">
            <div className="text-3xl">
              {profile?.condition === 'low-back-pain' ? '🔙' :
               profile?.condition === 'knee-pain' ? '🦵' :
               profile?.condition === 'neck-pain' ? '🦒' :
               profile?.condition === 'shoulder-pain' ? '💪' :
               profile?.condition === 'hip-pain' ? '🦴' : '🧘'}
            </div>
            <div>
              <div className="font-semibold">
                {profile?.condition.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
              </div>
              <div className="text-sm text-gray-400">
                Pain level: {profile?.painLevel}/10
              </div>
            </div>
          </div>
          
          {profile?.goals && profile.goals.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-800">
              <div className="text-sm text-gray-400 mb-2">Goals:</div>
              <div className="flex flex-wrap gap-2">
                {profile.goals.map(goal => (
                  <span key={goal} className="px-2 py-1 bg-gray-800 rounded text-sm">
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Tips */}
      <div className="px-6 pb-8">
        <Card className="bg-gray-900 border-gray-800 p-4">
          <div className="flex items-start gap-3">
            <div className="text-xl">💡</div>
            <div>
              <div className="font-semibold mb-1">Daily Tip</div>
              <div className="text-sm text-gray-400">
                Consistency beats intensity. Even 10 minutes daily is better than an hour once a week.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
