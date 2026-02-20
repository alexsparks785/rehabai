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

// Child's Pose animation
function ChildsPose({ frame }: AnimationProps) {
  const breathe = Math.sin(frame * 0.08) * 0.5 + 0.5; // Breathing cycle
  const expand = breathe * 3;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="#444" strokeWidth="2" />
      
      {/* Body - folded forward */}
      <g>
        {/* Feet/heels */}
        <ellipse cx="150" cy="95" rx="10" ry="6" fill="#f0f0f0" />
        
        {/* Legs folded */}
        <path 
          d="M 140 95 Q 130 80 120 75"
          fill="none" 
          stroke="#f0f0f0" 
          strokeWidth="6"
          strokeLinecap="round"
        />
        
        {/* Back/torso - curved */}
        <path 
          d={`M 120 75 Q 90 ${70 + expand} 60 72`}
          fill="none" 
          stroke="#f0f0f0" 
          strokeWidth="8"
          strokeLinecap="round"
        />
        
        {/* Head on ground */}
        <circle cx="55" cy="85" r="10" fill="#f0f0f0" />
        
        {/* Arms extended */}
        <line x1="65" y1="75" x2="40" y2="95" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        <line x1="65" y1="75" x2="30" y2="90" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        
        {/* Hands */}
        <circle cx="40" cy="95" r="4" fill="#f0f0f0" />
        <circle cx="30" cy="90" r="4" fill="#f0f0f0" />
      </g>
      
      {/* Breath indicator */}
      <circle cx="100" cy="60" r={8 + expand * 2} fill="none" stroke="#fbbf24" strokeWidth="1" opacity={0.5} />
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        {breathe > 0.5 ? 'Breathe in, expand' : 'Breathe out, relax deeper'}
      </text>
    </svg>
  );
}

// Hip Flexor Stretch animation
function HipFlexorStretch({ frame }: AnimationProps) {
  const lean = Math.sin(frame * 0.08) * 0.5 + 0.5;
  const shift = lean * 10;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="#444" strokeWidth="2" />
      
      {/* Body - lunge position */}
      <g>
        {/* Back knee on ground */}
        <circle cx="140" cy="98" r="5" fill="#f0f0f0" />
        
        {/* Back leg */}
        <line x1="140" y1="95" x2="160" y2="75" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        
        {/* Back foot */}
        <ellipse cx="165" cy="100" rx="8" ry="4" fill="#f0f0f0" />
        
        {/* Hips */}
        <circle cx={100 + shift} cy="70" r="10" fill={lean > 0.5 ? "#fbbf24" : "#f0f0f0"} />
        
        {/* Front thigh */}
        <line x1={95 + shift} y1="75" x2="60" y2="100" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        
        {/* Front foot */}
        <rect x="52" y="96" width="15" height="6" rx="2" fill="#f0f0f0" />
        
        {/* Torso - upright */}
        <line x1={100 + shift} y1="70" x2={100 + shift * 0.5} y2="35" stroke="#f0f0f0" strokeWidth="6" strokeLinecap="round" />
        
        {/* Head */}
        <circle cx={100 + shift * 0.5} cy="25" r="10" fill="#f0f0f0" />
        
        {/* Arms on hips */}
        <line x1={95 + shift * 0.5} y1="45" x2={85 + shift} y2="65" stroke="#f0f0f0" strokeWidth="3" strokeLinecap="round" />
        <line x1={105 + shift * 0.5} y1="45" x2={115 + shift} y2="65" stroke="#f0f0f0" strokeWidth="3" strokeLinecap="round" />
      </g>
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        {lean > 0.5 ? 'Shift hips forward, feel the stretch' : 'Keep torso tall'}
      </text>
    </svg>
  );
}

// Supine Twist animation
function SupineTwist({ frame }: AnimationProps) {
  const twist = Math.sin(frame * 0.06); // -1 to 1
  const kneeX = 100 + twist * 30;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="95" x2="180" y2="95" stroke="#444" strokeWidth="2" />
      
      {/* Body - supine */}
      <g>
        {/* Head */}
        <circle cx={100 - twist * 10} cy="30" r="10" fill="#f0f0f0" />
        
        {/* Arms in T position */}
        <line x1="60" y1="50" x2="140" y2="50" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="50" r="4" fill="#f0f0f0" />
        <circle cx="140" cy="50" r="4" fill="#f0f0f0" />
        
        {/* Torso */}
        <line x1="100" y1="40" x2="100" y2="70" stroke="#f0f0f0" strokeWidth="8" strokeLinecap="round" />
        
        {/* Hips - rotate with twist */}
        <ellipse cx="100" cy="72" rx={12 - Math.abs(twist) * 4} ry="8" fill="#f0f0f0" />
        
        {/* Knees together, dropping to side */}
        <circle cx={kneeX} cy={75 + Math.abs(twist) * 10} r="6" fill={Math.abs(twist) > 0.5 ? "#fbbf24" : "#f0f0f0"} />
        <circle cx={kneeX + 8} cy={77 + Math.abs(twist) * 10} r="5" fill="#f0f0f0" />
        
        {/* Lower legs */}
        <line x1={kneeX} y1={78 + Math.abs(twist) * 10} x2={kneeX - 15} y2={90 + Math.abs(twist) * 3} stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        <line x1={kneeX + 8} y1={80 + Math.abs(twist) * 10} x2={kneeX - 8} y2={92 + Math.abs(twist) * 3} stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
      </g>
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        {twist > 0 ? 'Knees right, look left' : twist < 0 ? 'Knees left, look right' : 'Both shoulders down'}
      </text>
    </svg>
  );
}

// Knee to Chest animation
function KneeToChest({ frame }: AnimationProps) {
  const cycle = Math.floor(frame / 30) % 2;
  const pull = Math.min(1, (frame % 30) / 15);
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="95" x2="180" y2="95" stroke="#444" strokeWidth="2" />
      
      {/* Body - supine */}
      <g>
        {/* Head */}
        <circle cx="160" cy="88" r="10" fill="#f0f0f0" />
        
        {/* Torso */}
        <line x1="150" y1="88" x2="80" y2="85" stroke="#f0f0f0" strokeWidth="8" strokeLinecap="round" />
        
        {/* Hips */}
        <circle cx="75" cy="85" r="10" fill="#f0f0f0" />
        
        {/* Pulling leg (alternates) */}
        {cycle === 0 ? (
          <>
            <line x1="75" y1="80" x2={90 - pull * 25} y2={75 - pull * 20} stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" />
            <line x1={90 - pull * 25} y1={75 - pull * 20} x2={100 - pull * 35} y2={85 - pull * 15} stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
            {/* Hands pulling */}
            <circle cx={95 - pull * 30} cy={78 - pull * 18} r="4" fill="#fbbf24" />
          </>
        ) : (
          <line x1="75" y1="88" x2="50" y2="95" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        )}
        
        {/* Other leg */}
        {cycle === 1 ? (
          <>
            <line x1="75" y1="80" x2={90 - pull * 25} y2={75 - pull * 20} stroke="#fbbf24" strokeWidth="5" strokeLinecap="round" />
            <line x1={90 - pull * 25} y1={75 - pull * 20} x2={100 - pull * 35} y2={85 - pull * 15} stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
            <circle cx={95 - pull * 30} cy={78 - pull * 18} r="4" fill="#fbbf24" />
          </>
        ) : (
          <line x1="75" y1="88" x2="50" y2="95" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        )}
        
        {/* Arms pulling knee */}
        <line x1="120" y1="75" x2={105 - pull * 25} y2={75 - pull * 10} stroke="#f0f0f0" strokeWidth="3" strokeLinecap="round" />
      </g>
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        Pull knee gently, keep back flat
      </text>
    </svg>
  );
}

// Sphinx Pose animation
function Sphinx({ frame }: AnimationProps) {
  const breathe = Math.sin(frame * 0.08) * 0.5 + 0.5;
  const lift = breathe * 5;
  
  return (
    <svg viewBox="0 0 200 120" className="w-full max-w-md">
      {/* Floor */}
      <line x1="20" y1="100" x2="180" y2="100" stroke="#444" strokeWidth="2" />
      
      {/* Body - prone on forearms */}
      <g>
        {/* Legs flat */}
        <line x1="140" y1="95" x2="170" y2="98" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        <line x1="140" y1="95" x2="175" y2="95" stroke="#f0f0f0" strokeWidth="5" strokeLinecap="round" />
        
        {/* Feet */}
        <ellipse cx="175" cy="98" rx="6" ry="3" fill="#f0f0f0" />
        <ellipse cx="180" cy="95" rx="6" ry="3" fill="#f0f0f0" />
        
        {/* Hips on ground */}
        <ellipse cx="135" cy="92" rx="12" ry="6" fill="#f0f0f0" />
        
        {/* Lower back - gentle curve up */}
        <path 
          d={`M 135 88 Q 110 ${85 - lift} 85 ${75 - lift}`}
          fill="none" 
          stroke={breathe > 0.5 ? "#fbbf24" : "#f0f0f0"}
          strokeWidth="8"
          strokeLinecap="round"
        />
        
        {/* Shoulders */}
        <circle cx="80" cy={70 - lift} r="8" fill="#f0f0f0" />
        
        {/* Head - looking forward */}
        <circle cx="65" cy={55 - lift} r="10" fill="#f0f0f0" />
        
        {/* Forearms on ground */}
        <line x1="80" y1={75 - lift} x2="55" y2="95" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        <line x1="80" y1={75 - lift} x2="45" y2="95" stroke="#f0f0f0" strokeWidth="4" strokeLinecap="round" />
        
        {/* Hands flat */}
        <ellipse cx="55" cy="97" rx="6" ry="3" fill="#f0f0f0" />
        <ellipse cx="45" cy="97" rx="6" ry="3" fill="#f0f0f0" />
      </g>
      
      <text x="100" y="115" textAnchor="middle" fill="#888" fontSize="8">
        {breathe > 0.5 ? 'Lift chest, lengthen spine' : 'Relax shoulders down'}
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
  'childs-pose': ChildsPose,
  'childs_pose': ChildsPose,
  'hip-flexor-stretch': HipFlexorStretch,
  'hip_flexor_stretch': HipFlexorStretch,
  'supine-twist': SupineTwist,
  'supine_twist': SupineTwist,
  'knee-to-chest': KneeToChest,
  'knee_to_chest': KneeToChest,
  'sphinx': Sphinx,
};

export const availableAnimations = Object.keys(animations);
