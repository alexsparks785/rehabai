'use client';

import { useState } from 'react';
import { WorkoutProgram, ProgramExercise } from '@/types';
import { stretchRoutine, strengthRoutine } from '@/data/programs';
import { Button } from '@/components/ui/button';
import { Clock, Dumbbell, Sparkles, ChevronDown, ChevronUp, Play } from 'lucide-react';

interface ProgramsViewProps {
  onStartWorkout: (program: WorkoutProgram) => void;
}

interface ProgramCardProps {
  program: WorkoutProgram;
  icon: React.ReactNode;
  gradient: string;
  onStart: () => void;
}

function formatDuration(exercise: ProgramExercise): string {
  if (exercise.duration) {
    const mins = Math.floor(exercise.duration / 60);
    const secs = exercise.duration % 60;
    if (mins > 0 && secs > 0) return `${mins}m ${secs}s`;
    if (mins > 0) return `${mins} min`;
    return `${secs}s`;
  }
  if (exercise.reps) {
    return `${exercise.reps} reps`;
  }
  return '';
}

function formatSets(exercise: ProgramExercise): string {
  const duration = formatDuration(exercise);
  if (exercise.sets > 1) {
    return `${exercise.sets} × ${duration}`;
  }
  return duration;
}

function ProgramCard({ program, icon, gradient, onStart }: ProgramCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`rounded-2xl overflow-hidden ${gradient}`}>
      {/* Header */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{program.name}</h3>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Clock size={14} />
                <span>~{program.estimatedDuration} min</span>
                <span>•</span>
                <span>{program.exercises.length} exercises</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-white/80 text-sm mb-4 leading-relaxed">
          {program.description}
        </p>

        <div className="flex gap-3">
          <Button
            onClick={onStart}
            className="flex-1 bg-white text-gray-900 hover:bg-white/90 font-semibold"
          >
            <Play size={18} className="mr-2" />
            Start Workout
          </Button>
          <Button
            onClick={() => setExpanded(!expanded)}
            variant="ghost"
            className="text-white hover:bg-white/20"
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </Button>
        </div>
      </div>

      {/* Exercise List (expandable) */}
      {expanded && (
        <div className="bg-black/20 border-t border-white/10">
          <div className="p-4 space-y-2">
            {program.exercises.map((ex, idx) => (
              <div 
                key={ex.exercise.id}
                className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-medium">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-medium text-white">{ex.exercise.name}</p>
                    {ex.exercise.unilateral && (
                      <span className="text-xs text-white/50">Each side</span>
                    )}
                  </div>
                </div>
                <span className="text-sm text-white/70">{formatSets(ex)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function ProgramsView({ onStartWorkout }: ProgramsViewProps) {
  return (
    <div className="p-6 pb-24">
      <h1 className="text-3xl font-bold text-white mb-2">Programs</h1>
      <p className="text-gray-400 mb-6">
        Structured routines designed for low back recovery
      </p>

      <div className="space-y-4">
        {/* Stretch Routine */}
        <ProgramCard
          program={stretchRoutine}
          icon={<Sparkles size={24} className="text-white" />}
          gradient="bg-gradient-to-br from-purple-600 to-indigo-700"
          onStart={() => onStartWorkout(stretchRoutine)}
        />

        {/* Strength Routine */}
        <ProgramCard
          program={strengthRoutine}
          icon={<Dumbbell size={24} className="text-white" />}
          gradient="bg-gradient-to-br from-orange-500 to-red-600"
          onStart={() => onStartWorkout(strengthRoutine)}
        />
      </div>

      {/* Coming Soon */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-400 mb-3">Coming Soon</h2>
        <div className="space-y-3">
          <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                ⚡
              </div>
              <div>
                <h3 className="font-medium text-white">Quick Relief Protocol</h3>
                <p className="text-sm text-gray-500">15-min routine for flare-ups</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 opacity-60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                📈
              </div>
              <div>
                <h3 className="font-medium text-white">8-Week Progressive Plan</h3>
                <p className="text-sm text-gray-500">Guided rebuild program</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
