'use client';

import { useEffect, useState } from 'react';

interface ExerciseAnimationProps {
  exerciseId: string;
  isPaused?: boolean;
}

// Simple stick figure animations for key rehab exercises
export function ExerciseAnimation({ exerciseId, isPaused = false }: ExerciseAnimationProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % 60);
    }, 50);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Get animation component based on exercise
  const AnimationComponent = animations[exerciseId] || DefaultAnimation;

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900">
      <AnimationComponent frame={frame} />
    </div>
  );
}

interface AnimationProps {
  frame: number;
}

// Cat-Cow animation
function CatCow({ frame }: AnimationProps) {
  const cycle = Math.sin(frame * 0.1) * 0.5 + 0.5; // 0 to 1
  const spineY = cycle * 20 - 10; // -10 to 10
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="#444" strokeWidth="2" />
      
      {/* Body - quadruped position */}
      <g>
        {/* Hands */}
        <circle cx="50" cy="100" r="5" fill="#f0f0f0" />
        <circle cx="150" cy="100" r="5" fill="#f0f0f0" />
        
        {/* Arms */}
        <line x1="50" y1="100" x2="60" y2="70" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        <line x1="150" y1="100" x2="140" y2="70" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        
        {/* Spine - curves based on animation */}
        <path 
          d={`M 60 70 Q 100 ${70 + spineY} 140 70`}
          fill="none" 
          stroke="#f0f0f0" 
          strokeWidth="6"
          strokeLinecap="round"
        />
        
        {/* Head */}
        <circle cx="55" cy={60 - spineY * 0.5} r="12" fill="#f0f0f0" />
        
        {/* Hip */}
        <circle cx="140" cy="70" r="8" fill="#f0f0f0" />
        
        {/* Legs */}
        <line x1="140" y1="75" x2="145" y2="100" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        <line x1="135" y1="75" x2="130" y2="100" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        
        {/* Knees */}
        <circle cx="145" cy="100" r="4" fill="#f0f0f0" />
        <circle cx="130" cy="100" r="4" fill="#f0f0f0" />
      </g>
      
      {/* Label */}
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        {cycle < 0.5 ? 'Cat (round spine)' : 'Cow (arch spine)'}
      </text>
    </svg>
  );
}

// Bird Dog animation
function BirdDog({ frame }: AnimationProps) {
  const cycle = Math.floor(frame / 30) % 2; // Alternate sides
  const extend = Math.min(1, (frame % 30) / 15); // Extension progress
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="#444" strokeWidth="2" />
      
      {/* Body - quadruped */}
      <g>
        {/* Stable hand */}
        <circle cx={cycle === 0 ? 50 : 50} cy="100" r="5" fill="#f0f0f0" />
        
        {/* Extending arm */}
        <line 
          x1="60" y1="70" 
          x2={cycle === 0 ? 60 - extend * 40 : 60} 
          y2={cycle === 0 ? 70 - extend * 20 : 70}
          stroke={cycle === 0 ? "#fbbf24" : "#f0f0f0"} 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        {cycle === 0 && (
          <circle cx={60 - extend * 40} cy={70 - extend * 20} r="5" fill="#fbbf24" />
        )}
        
        {/* Stable arm */}
        <line x1={cycle === 0 ? 50 : 50} y1="100" x2="60" y2="70" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        
        {/* Spine */}
        <line x1="60" y1="70" x2="140" y2="70" stroke="#f0f0f0" strokeWidth="6" strokeLinecap="round" />
        
        {/* Head */}
        <circle cx="55" cy="58" r="12" fill="#f0f0f0" />
        
        {/* Hip */}
        <circle cx="140" cy="70" r="8" fill="#f0f0f0" />
        
        {/* Stable leg */}
        <line x1="140" y1="75" x2={cycle === 0 ? 145 : 145} y2="100" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        <circle cx={cycle === 0 ? 145 : 145} cy="100" r="4" fill="#f0f0f0" />
        
        {/* Extending leg */}
        <line 
          x1="140" y1="70" 
          x2={cycle === 1 ? 140 + extend * 40 : 135} 
          y2={cycle === 1 ? 70 : 100}
          stroke={cycle === 1 ? "#fbbf24" : "#f0f0f0"} 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        {cycle === 1 && (
          <circle cx={140 + extend * 40} cy="70" r="4" fill="#fbbf24" />
        )}
        {cycle === 0 && (
          <circle cx="135" cy="100" r="4" fill="#f0f0f0" />
        )}
      </g>
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        {cycle === 0 ? 'Extend opposite arm & leg' : 'Switch sides'}
      </text>
    </svg>
  );
}

// Dead Bug animation
function DeadBug({ frame }: AnimationProps) {
  const cycle = Math.floor(frame / 30) % 2;
  const extend = Math.min(1, (frame % 30) / 15);
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="95" x2="180" y2="95" stroke="#444" strokeWidth="2" />
      
      {/* Body - supine */}
      <g>
        {/* Torso */}
        <ellipse cx="100" cy="85" rx="30" ry="10" fill="#f0f0f0" />
        
        {/* Head */}
        <circle cx="140" cy="85" r="12" fill="#f0f0f0" />
        
        {/* Arms - raised */}
        <line 
          x1="90" y1="80" 
          x2={cycle === 0 ? 70 - extend * 20 : 70} 
          y2={cycle === 0 ? 60 - extend * 15 : 55}
          stroke={cycle === 0 ? "#fbbf24" : "#f0f0f0"} 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        <line 
          x1="90" y1="80" 
          x2={cycle === 1 ? 70 - extend * 20 : 70} 
          y2={cycle === 1 ? 60 - extend * 15 : 55}
          stroke={cycle === 1 ? "#fbbf24" : "#f0f0f0"} 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        
        {/* Hips */}
        <circle cx="70" cy="85" r="8" fill="#f0f0f0" />
        
        {/* Legs - tabletop to extended */}
        <line 
          x1="65" y1="85" 
          x2={cycle === 1 ? 45 - extend * 25 : 50} 
          y2={cycle === 1 ? 70 : 65}
          stroke={cycle === 1 ? "#fbbf24" : "#f0f0f0"} 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        <line 
          x1="75" y1="85" 
          x2={cycle === 0 ? 55 - extend * 25 : 60} 
          y2={cycle === 0 ? 70 : 65}
          stroke={cycle === 0 ? "#fbbf24" : "#f0f0f0"} 
          strokeWidth="4" 
          strokeLinecap="round" 
        />
        
        {/* Lower legs */}
        <line x1="50" y1="65" x2="45" y2="45" stroke="#f0f0f0" strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="65" x2="55" y2="45" stroke="#f0f0f0" strokeWidth="3" strokeLinecap="round" />
      </g>
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        Lower opposite arm & leg, keep core engaged
      </text>
    </svg>
  );
}

// Glute Bridge animation
function GluteBridge({ frame }: AnimationProps) {
  const lift = Math.sin(frame * 0.08) * 0.5 + 0.5; // 0 to 1
  const hipY = 85 - lift * 25;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="95" x2="180" y2="95" stroke="#444" strokeWidth="2" />
      
      {/* Body - supine bridge */}
      <g>
        {/* Head & shoulders on ground */}
        <ellipse cx="150" cy="90" rx="20" ry="8" fill="#f0f0f0" />
        <circle cx="165" cy="90" r="10" fill="#f0f0f0" />
        
        {/* Back/spine - curves up */}
        <path 
          d={`M 130 90 Q 100 ${hipY} 70 ${hipY}`}
          fill="none" 
          stroke="#f0f0f0" 
          strokeWidth="8"
          strokeLinecap="round"
        />
        
        {/* Hips - highlighted */}
        <circle cx="70" cy={hipY} r="10" fill={lift > 0.5 ? "#fbbf24" : "#f0f0f0"} />
        
        {/* Thighs */}
        <line x1="70" y1={hipY + 5} x2="55" y2="95" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        <line x1="70" y1={hipY + 5} x2="85" y2="95" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        
        {/* Feet */}
        <rect x="50" y="92" width="12" height="6" rx="2" fill="#f0f0f0" />
        <rect x="80" y="92" width="12" height="6" rx="2" fill="#f0f0f0" />
        
        {/* Arms flat */}
        <line x1="140" y1="88" x2="120" y2="95" stroke="#f0f0f0" strokeWidth="3" strokeLinecap="round" />
        <line x1="140" y1="92" x2="120" y2="95" stroke="#f0f0f0" strokeWidth="3" strokeLinecap="round" />
      </g>
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        {lift > 0.5 ? 'Squeeze glutes at top' : 'Drive through heels'}
      </text>
    </svg>
  );
}

// Pelvic Tilt animation
function PelvicTilt({ frame }: AnimationProps) {
  const tilt = Math.sin(frame * 0.1) * 0.5 + 0.5;
  const backCurve = tilt * 15 - 7;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="95" x2="180" y2="95" stroke="#444" strokeWidth="2" />
      
      {/* Body - supine */}
      <g>
        {/* Head */}
        <circle cx="160" cy="88" r="10" fill="#f0f0f0" />
        
        {/* Upper back - on floor */}
        <line x1="150" y1="90" x2="120" y2="90" stroke="#f0f0f0" strokeWidth="8" strokeLinecap="round" />
        
        {/* Lower back - tilts */}
        <path 
          d={`M 120 90 Q 100 ${90 + backCurve} 80 85`}
          fill="none" 
          stroke={Math.abs(backCurve) > 5 ? "#fbbf24" : "#f0f0f0"} 
          strokeWidth="8"
          strokeLinecap="round"
        />
        
        {/* Pelvis */}
        <ellipse cx="75" cy="85" rx="12" ry="8" fill={Math.abs(backCurve) > 5 ? "#fbbf24" : "#f0f0f0"} />
        
        {/* Thighs - bent */}
        <line x1="70" y1="88" x2="55" y2="95" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        <line x1="80" y1="88" x2="95" y2="95" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        
        {/* Feet */}
        <rect x="50" y="92" width="12" height="6" rx="2" fill="#f0f0f0" />
        <rect x="90" y="92" width="12" height="6" rx="2" fill="#f0f0f0" />
      </g>
      
      {/* Gap indicator */}
      {backCurve > 3 && (
        <text x="100" y="82" textAnchor="middle" fill="#fbbf24" fontSize="8">↑ gap</text>
      )}
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        {tilt > 0.5 ? 'Flatten lower back to floor' : 'Release to neutral'}
      </text>
    </svg>
  );
}

// Side Plank animation
function SidePlank({ frame }: AnimationProps) {
  const wobble = Math.sin(frame * 0.15) * 2;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="#444" strokeWidth="2" />
      
      {/* Body - side plank */}
      <g transform={`rotate(${wobble}, 100, 100)`}>
        {/* Supporting arm */}
        <line x1="60" y1="100" x2="60" y2="65" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="100" r="5" fill="#f0f0f0" />
        
        {/* Torso */}
        <line x1="60" y1="65" x2="130" y2="55" stroke="#f0f0f0" strokeWidth="8" strokeLinecap="round" />
        
        {/* Shoulder */}
        <circle cx="60" cy="65" r="8" fill="#f0f0f0" />
        
        {/* Head */}
        <circle cx="55" cy="50" r="10" fill="#f0f0f0" />
        
        {/* Hip */}
        <circle cx="100" cy="58" r="10" fill="#fbbf24" />
        
        {/* Legs stacked */}
        <line x1="130" y1="55" x2="160" y2="100" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        <circle cx="160" cy="100" r="4" fill="#f0f0f0" />
        
        {/* Top arm */}
        <line x1="70" y1="60" x2="70" y2="30" stroke="#f0f0f0" strokeWidth="3" strokeLinecap="round" />
      </g>
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        Keep hips stacked, core engaged
      </text>
    </svg>
  );
}

// Default placeholder animation
function DefaultAnimation({ frame }: AnimationProps) {
  const pulse = Math.sin(frame * 0.1) * 0.2 + 1;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      <circle 
        cx="100" 
        cy="60" 
        r={30 * pulse} 
        fill="none" 
        stroke="#fbbf24" 
        strokeWidth="2"
        opacity={0.5}
      />
      <text x="100" y="65" textAnchor="middle" fill="#888" fontSize="14">
        🏋️
      </text>
      <text x="100" y="100" textAnchor="middle" fill="#666" fontSize="10">
        Exercise demo
      </text>
    </svg>
  );
}

// Animation registry - maps exercise IDs to components
const animations: Record<string, React.FC<AnimationProps>> = {
  'cat-cow': CatCow,
  'cat_cow': CatCow,
  'bird-dog': BirdDog,
  'bird_dog': BirdDog,
  'dead-bug': DeadBug,
  'dead_bug': DeadBug,
  'glute-bridge': GluteBridge,
  'glute_bridge': GluteBridge,
  'pelvic-tilt': PelvicTilt,
  'pelvic_tilt': PelvicTilt,
  'side-plank': SidePlank,
  'side_plank': SidePlank,
};

export const availableAnimations = Object.keys(animations);
