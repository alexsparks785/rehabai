'use client';

import { useState } from 'react';
import { UserProfile, WorkoutProgram, ProgramExercise } from '@/types';
import { Button } from '@/components/ui/button';
import { FilterChips } from './FilterChips';
import { BottomSheet, BottomSheetOption } from './BottomSheet';
import { ExerciseCard, ExerciseSection } from './ExerciseCard';
import { generateDailyProgram, generateProgramWithAI } from '@/lib/programGenerator';

interface GeneratorViewProps {
  profile: UserProfile;
  onStartWorkout: (program: WorkoutProgram) => void;
}

const DURATIONS = [
  { id: '10', label: '10 min', value: '10' },
  { id: '15', label: '15 min', value: '15' },
  { id: '20', label: '20 min', value: '20' },
  { id: '30', label: '30 min', value: '30' },
];

const FOCUSES = [
  { id: 'pain-relief', label: 'Pain Relief', subtitle: 'Gentle movements', value: 'pain-relief' },
  { id: 'strength', label: 'Build Strength', subtitle: 'Progressive load', value: 'strength' },
  { id: 'mobility', label: 'Mobility', subtitle: 'Range of motion', value: 'mobility' },
  { id: 'maintenance', label: 'Maintenance', subtitle: 'Daily routine', value: 'maintenance' },
];

export function GeneratorView({ profile, onStartWorkout }: GeneratorViewProps) {
  const [program, setProgram] = useState<WorkoutProgram | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeSheet, setActiveSheet] = useState<string | null>(null);
  
  // Filter state
  const [duration, setDuration] = useState('20');
  const [focus, setFocus] = useState('maintenance');

  const filters = [
    { 
      id: 'duration', 
      label: 'Duration', 
      value: duration ? `${duration} min` : '',
      options: DURATIONS 
    },
    { 
      id: 'focus', 
      label: 'Focus', 
      value: FOCUSES.find(f => f.id === focus)?.label || '',
      options: FOCUSES 
    },
    { 
      id: 'condition', 
      label: profile.condition.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), 
      value: '',
      options: [] 
    },
  ];

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const newProgram = await generateProgramWithAI(profile);
      setProgram(newProgram);
    } catch (error) {
      console.error('Generation failed:', error);
      const fallback = generateDailyProgram(profile);
      setProgram(fallback);
    }
    setIsGenerating(false);
  };

  const handleStartWorkout = () => {
    if (program) {
      onStartWorkout(program);
    }
  };

  // Group exercises by type
  const groupExercises = (exercises: ProgramExercise[]) => {
    const warmup: ProgramExercise[] = [];
    const main: ProgramExercise[] = [];
    const cooldown: ProgramExercise[] = [];

    exercises.forEach(pe => {
      if (pe.exercise.category === 'warmup' || pe.exercise.category === 'mobility') {
        if (pe.order <= 2) warmup.push(pe);
        else main.push(pe);
      } else if (pe.exercise.category === 'stretch' || pe.exercise.category === 'cooldown') {
        if (pe.order >= exercises.length - 1) cooldown.push(pe);
        else main.push(pe);
      } else {
        main.push(pe);
      }
    });

    // If no clear grouping, just split by thirds
    if (warmup.length === 0 && cooldown.length === 0) {
      const third = Math.ceil(exercises.length / 3);
      return {
        warmup: exercises.slice(0, Math.min(2, third)),
        main: exercises.slice(Math.min(2, third), -Math.min(2, third) || undefined),
        cooldown: exercises.slice(-Math.min(2, third))
      };
    }

    return { warmup, main, cooldown };
  };

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📋</span>
            <span className="text-gray-500">+</span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-1">
          {duration} min Custom<br />Workout
        </h1>
      </div>

      {/* Filters */}
      <div className="px-6 mb-4">
        <FilterChips 
          filters={filters}
          onFilterClick={(id) => setActiveSheet(id)}
        />
      </div>

      {/* Action Bar */}
      <div className="px-6 mb-6 flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-gray-800 border-gray-700 text-white"
        >
          {isGenerating ? '...' : '↻'} Refresh
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-400">
          ↗
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-400">
          🔖
        </Button>
      </div>

      {/* Content */}
      {!program && !isGenerating && (
        <div className="px-6 py-12 text-center">
          <div className="text-5xl mb-4">🎯</div>
          <h2 className="text-xl font-semibold text-white mb-2">Ready to generate</h2>
          <p className="text-gray-400 mb-6">
            Tap Refresh to create your personalized {profile.condition.replace(/-/g, ' ')} workout
          </p>
          <Button onClick={handleGenerate} className="bg-yellow-400 text-black hover:bg-yellow-500">
            Generate Workout
          </Button>
        </div>
      )}

      {isGenerating && (
        <div className="px-6 py-12 text-center">
          <div className="text-5xl mb-4 animate-pulse">🧠</div>
          <h2 className="text-xl font-semibold text-white mb-2">Creating your program...</h2>
          <p className="text-gray-400">AI is selecting the best exercises for you</p>
        </div>
      )}

      {program && !isGenerating && (
        <div className="px-6">
          {(() => {
            const { warmup, main, cooldown } = groupExercises(program.exercises);
            return (
              <>
                {warmup.length > 0 && (
                  <ExerciseSection 
                    title="Warm Up" 
                    exercises={warmup}
                    maxVisible={1}
                    defaultExpanded={false}
                  />
                )}
                {main.length > 0 && (
                  <ExerciseSection 
                    title="Main Workout" 
                    subtitle={profile.condition.replace(/-/g, ' ')}
                    exercises={main}
                    maxVisible={3}
                  />
                )}
                {cooldown.length > 0 && (
                  <ExerciseSection 
                    title="Cool Down" 
                    exercises={cooldown}
                    maxVisible={1}
                    defaultExpanded={false}
                  />
                )}
              </>
            );
          })()}
        </div>
      )}

      {/* Fixed CTA */}
      {program && (
        <div className="fixed bottom-20 left-0 right-0 p-6 bg-gradient-to-t from-black via-black to-transparent">
          <Button
            onClick={handleStartWorkout}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-lg py-6 rounded-full"
            size="lg"
          >
            <span className="mr-2">▶</span> Start Workout
          </Button>
        </div>
      )}

      {/* Duration Sheet */}
      <BottomSheet
        isOpen={activeSheet === 'duration'}
        onClose={() => setActiveSheet(null)}
        title="Choose duration"
      >
        {DURATIONS.map(d => (
          <BottomSheetOption
            key={d.id}
            label={d.label}
            selected={duration === d.id}
            onClick={() => {
              setDuration(d.id);
              setActiveSheet(null);
            }}
          />
        ))}
        <Button 
          variant="ghost" 
          className="w-full mt-4 text-gray-400"
          onClick={() => setActiveSheet(null)}
        >
          Cancel
        </Button>
      </BottomSheet>

      {/* Focus Sheet */}
      <BottomSheet
        isOpen={activeSheet === 'focus'}
        onClose={() => setActiveSheet(null)}
        title="Choose focus"
      >
        {FOCUSES.map(f => (
          <BottomSheetOption
            key={f.id}
            label={f.label}
            subtitle={f.subtitle}
            selected={focus === f.id}
            onClick={() => {
              setFocus(f.id);
              setActiveSheet(null);
            }}
          />
        ))}
        <Button 
          variant="ghost" 
          className="w-full mt-4 text-gray-400"
          onClick={() => setActiveSheet(null)}
        >
          Cancel
        </Button>
      </BottomSheet>
    </div>
  );
}
