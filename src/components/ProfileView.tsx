'use client';

import { useState } from 'react';
import { UserProfile, UserProgress } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProfileViewProps {
  profile: UserProfile;
  progress: UserProgress;
  onReset: () => void;
}

type TabId = 'overview' | 'history' | 'settings';

export function ProfileView({ profile, progress, onReset }: ProfileViewProps) {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const tabs: { id: TabId; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'history', label: 'History' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="p-6 pb-2">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-white">Profile</h1>
          <button className="p-2 text-gray-400">⚙️</button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-800">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'pb-3 text-sm font-medium transition-colors relative',
                activeTab === tab.id ? 'text-white' : 'text-gray-500'
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="p-6">
          {/* User Card */}
          <Card className="bg-gray-900 border-gray-800 p-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-2xl">
                👤
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-white">{profile.name || 'User'}</h2>
                <p className="text-sm text-gray-400">
                  {profile.condition.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </p>
              </div>
              <button className="p-2 bg-gray-800 rounded-full">✏️</button>
            </div>
          </Card>

          {/* Saved Workouts */}
          <Card className="bg-gray-900 border-gray-800 p-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔖</span>
              <span className="text-white">Saved workouts</span>
            </div>
          </Card>

          {/* Calendar */}
          <Card className="bg-gray-900 border-gray-800 p-4 mb-6">
            <CalendarView progress={progress} />
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Card className="bg-gray-900 border-gray-800 p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">{progress.currentStreak}</div>
              <div className="text-sm text-gray-400">Active days</div>
            </Card>
            <Card className="bg-gray-900 border-gray-800 p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">{progress.longestStreak}</div>
              <div className="text-sm text-gray-400">Week streak</div>
            </Card>
          </div>

          {/* Goals */}
          {profile.goals && profile.goals.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Your Goals</h3>
              <div className="flex flex-wrap gap-2">
                {profile.goals.map(goal => (
                  <span 
                    key={goal} 
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* History Tab */}
      {activeTab === 'history' && (
        <div className="p-6">
          <div className="text-gray-400 mb-4">{progress.totalWorkouts} total workouts</div>
          
          {progress.completedSessions.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📋</div>
              <p className="text-gray-400">No workouts yet</p>
              <p className="text-sm text-gray-500">Complete your first workout to see history</p>
            </div>
          ) : (
            <div className="space-y-3">
              {progress.completedSessions.slice().reverse().map((session) => (
                <Card key={session.id} className="bg-gray-900 border-gray-800 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                      🏋️
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">
                        {new Date(session.startedAt).toLocaleDateString()}
                      </div>
                      <div className="font-medium text-white">
                        {session.exercisesCompleted}/{session.totalExercises} exercises
                      </div>
                    </div>
                    <button className="text-gray-500">•••</button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="p-6">
          <div className="space-y-4">
            <Card className="bg-gray-900 border-gray-800">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-sm text-gray-500 mb-3">WORKOUT PREFERENCES</h3>
                <SettingsRow icon="🔊" label="Audio cues" />
                <SettingsRow icon="⏱" label="Rest periods" />
                <SettingsRow icon="🎯" label="Pain level" value={`${profile.painLevel}/10`} />
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-4">
              <h3 className="text-sm text-gray-500 mb-3">ACCOUNT</h3>
              <SettingsRow icon="📧" label="Profile" />
              <Button 
                variant="ghost" 
                onClick={onReset}
                className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20 mt-4"
              >
                🔄 Reset all data
              </Button>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

function SettingsRow({ icon, label, value }: { icon: string; label: string; value?: string }) {
  return (
    <button className="w-full flex items-center justify-between py-3 text-white">
      <div className="flex items-center gap-3">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-400">
        {value && <span>{value}</span>}
        <span>›</span>
      </div>
    </button>
  );
}

function CalendarView({ progress }: { progress: UserProgress }) {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  
  // Get days in month
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const firstDay = new Date(year, today.getMonth(), 1).getDay();
  
  // Get active days this month
  const activeDays = new Set(
    progress.completedSessions
      .filter(s => {
        const d = new Date(s.startedAt);
        return d.getMonth() === today.getMonth() && d.getFullYear() === year;
      })
      .map(s => new Date(s.startedAt).getDate())
  );

  const dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button className="text-gray-400">‹</button>
        <span className="font-medium text-white">{month}</span>
        <button className="text-gray-400">›</button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {dayNames.map(d => (
          <div key={d} className="text-gray-500 py-1">{d}</div>
        ))}
        
        {Array.from({ length: adjustedFirstDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isToday = day === today.getDate();
          const isActive = activeDays.has(day);
          
          return (
            <div 
              key={day}
              className={cn(
                'py-1 rounded-full text-sm',
                isToday && 'ring-1 ring-yellow-400',
                isActive ? 'text-white' : 'text-gray-600'
              )}
            >
              {day}
              {isActive && (
                <span className="ml-1 text-green-400">✓</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
