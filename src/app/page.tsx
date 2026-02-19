'use client';

import { useState, useEffect } from 'react';
import { UserProfile, WorkoutProgram, UserProgress, WorkoutSession } from '@/types';
import { Onboarding } from '@/components/Onboarding';
import { WorkoutPlayer } from '@/components/WorkoutPlayer';
import { BottomNav } from '@/components/BottomNav';
import { GeneratorView } from '@/components/GeneratorView';
import { ProfileView } from '@/components/ProfileView';

// localStorage keys
const STORAGE_KEYS = {
  profile: 'rehabai_profile',
  progress: 'rehabai_progress',
  lastProgram: 'rehabai_last_program'
};

type AppState = 'loading' | 'onboarding' | 'main' | 'workout';
type TabId = 'generator' | 'programs' | 'clips' | 'profile';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [activeTab, setActiveTab] = useState<TabId>('generator');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [program, setProgram] = useState<WorkoutProgram | null>(null);
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
      setAppState('main');
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
    setAppState('main');
  };

  const handleStartWorkout = (workoutProgram: WorkoutProgram) => {
    setProgram(workoutProgram);
    setAppState('workout');
  };

  const handleWorkoutComplete = () => {
    // Create session record
    const session: WorkoutSession = {
      id: crypto.randomUUID(),
      programId: program?.id || '',
      startedAt: new Date().toISOString(),
      completedAt: new Date().toISOString(),
      exercisesCompleted: program?.exercises.length || 0,
      totalExercises: program?.exercises.length || 0
    };

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
      lastWorkoutDate: today,
      completedSessions: [...prev.completedSessions, session]
    }));
  };

  const handleExitWorkout = () => {
    setAppState('main');
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

  // Main app with tabs
  return (
    <div className="min-h-screen bg-black">
      {/* Tab Content */}
      {activeTab === 'generator' && profile && (
        <GeneratorView 
          profile={profile} 
          onStartWorkout={handleStartWorkout}
        />
      )}

      {activeTab === 'programs' && (
        <div className="p-6 pb-24">
          <h1 className="text-3xl font-bold text-white mb-6">Programs</h1>
          <div className="text-center py-12">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400">
              Multi-week structured programs for your condition
            </p>
          </div>
        </div>
      )}

      {activeTab === 'clips' && (
        <div className="p-6 pb-24">
          <h1 className="text-3xl font-bold text-white mb-6">Clips</h1>
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🎬</div>
            <h2 className="text-xl font-semibold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400">
              Exercise tutorial library with video demonstrations
            </p>
          </div>
        </div>
      )}

      {activeTab === 'profile' && profile && (
        <ProfileView 
          profile={profile}
          progress={progress}
          onReset={handleReset}
        />
      )}

      {/* Bottom Navigation */}
      <BottomNav 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}
