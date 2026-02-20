'use client';

import { useState, useEffect } from 'react';
import { UserProfile, WorkoutProgram, UserProgress, WorkoutSession } from '@/types';
import { generateId } from '@/lib/uuid';
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
      id: generateId(),
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
          <div className="text-center py-8">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-xl font-semibold text-white mb-2">Structured Programs Coming Soon</h2>
            <p className="text-gray-400 mb-6">
              Multi-week progressive programs designed by physical therapists
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 opacity-60">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-white">8-Week Lower Back Rebuild</h3>
                  <p className="text-sm text-gray-400">Foundation → Build → Strengthen</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 opacity-60">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-white">Quick Relief Protocol</h3>
                  <p className="text-sm text-gray-400">For flare-ups and acute pain</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 opacity-60">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🏃</span>
                <div>
                  <h3 className="font-semibold text-white">Return to Activity</h3>
                  <p className="text-sm text-gray-400">Get back to what you love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'clips' && (
        <div className="p-6 pb-24">
          <h1 className="text-3xl font-bold text-white mb-6">Learn</h1>
          <div className="text-center py-8">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-xl font-semibold text-white mb-2">Education Library Coming Soon</h2>
            <p className="text-gray-400 mb-6">
              Understanding your body is key to recovery
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 opacity-60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🦴</span>
                <div>
                  <h3 className="font-semibold text-white">Spine Anatomy Basics</h3>
                  <p className="text-sm text-gray-400">What&apos;s actually causing your pain</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 opacity-60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <div>
                  <h3 className="font-semibold text-white">Pain Science Explained</h3>
                  <p className="text-sm text-gray-400">Why movement helps, not hurts</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 opacity-60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎬</span>
                <div>
                  <h3 className="font-semibold text-white">Exercise Form Videos</h3>
                  <p className="text-sm text-gray-400">Perfect your technique</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 opacity-60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-semibold text-white">Flare-up Management</h3>
                  <p className="text-sm text-gray-400">What to do when pain spikes</p>
                </div>
              </div>
            </div>
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
