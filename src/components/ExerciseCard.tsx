'use client';

import { Exercise, ProgramExercise } from '@/types';
import { cn } from '@/lib/utils';

interface ExerciseCardProps {
  programExercise: ProgramExercise;
  onOptionsClick?: () => void;
}

export function ExerciseCard({ programExercise, onOptionsClick }: ExerciseCardProps) {
  const { exercise, sets, reps, duration } = programExercise;
  
  // Format the subtitle (e.g., "3x • 12 reps" or "0:45")
  const formatSubtitle = () => {
    const parts = [];
    if (sets && sets > 1) parts.push(`${sets}x`);
    if (reps) parts.push(`${reps} reps`);
    else if (duration) {
      const mins = Math.floor(duration / 60);
      const secs = duration % 60;
      parts.push(mins > 0 ? `${mins}:${secs.toString().padStart(2, '0')}` : `0:${secs}`);
    }
    return parts.join(' • ');
  };

  // Get category badge color
  const getCategoryColor = () => {
    switch (exercise.category) {
      case 'warmup': return 'bg-orange-500/20 text-orange-400';
      case 'stretch': return 'bg-purple-500/20 text-purple-400';
      case 'strengthening': return 'bg-red-500/20 text-red-400';
      case 'mobility': return 'bg-blue-500/20 text-blue-400';
      case 'cooldown': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-800 last:border-0">
      {/* Thumbnail */}
      <div className="w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
        <span className="text-2xl">🏋️</span>
      </div>
      
      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-white truncate">{exercise.name}</h3>
        <p className="text-sm text-gray-400">{formatSubtitle()}</p>
      </div>
      
      {/* Options */}
      {onOptionsClick && (
        <button 
          onClick={onOptionsClick}
          className="p-2 text-gray-500 hover:text-white"
        >
          •••
        </button>
      )}
    </div>
  );
}

interface ExerciseSectionProps {
  title: string;
  subtitle?: string;
  exercises: ProgramExercise[];
  defaultExpanded?: boolean;
  maxVisible?: number;
}

export function ExerciseSection({ 
  title, 
  subtitle,
  exercises, 
  defaultExpanded = true,
  maxVisible = 2 
}: ExerciseSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const visibleExercises = expanded ? exercises : exercises.slice(0, maxVisible);
  const hiddenCount = exercises.length - maxVisible;

  return (
    <div className="mb-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <h2 className="text-lg font-bold text-white">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <button className="p-2 text-gray-500">•••</button>
      </div>
      
      {/* Divider */}
      <div className="h-px bg-yellow-400/30 mb-3" />
      
      {/* Exercises */}
      {visibleExercises.map((pe, index) => (
        <ExerciseCard key={pe.exercise.id + index} programExercise={pe} />
      ))}
      
      {/* Expand toggle */}
      {!expanded && hiddenCount > 0 && (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-2 px-3 py-2 mt-2 bg-gray-800 rounded-full text-sm text-gray-300"
        >
          <span>▾</span>
          <span>{hiddenCount} more</span>
        </button>
      )}
    </div>
  );
}

// Need to import useState
import { useState } from 'react';
