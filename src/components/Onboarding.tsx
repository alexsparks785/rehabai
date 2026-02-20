'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { ConditionType, UserProfile } from '@/types';

// UUID fallback for browsers without crypto.randomUUID
function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback using Math.random
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

const CONDITIONS: { id: ConditionType; label: string; icon: string; description: string }[] = [
  { id: 'low-back-pain', label: 'Low Back Pain', icon: '🔙', description: 'Herniated disc, general back pain, stiffness' },
  { id: 'knee-pain', label: 'Knee Pain', icon: '🦵', description: 'Runner\'s knee, ACL recovery, general knee issues' },
  { id: 'neck-pain', label: 'Neck Pain', icon: '🦒', description: 'Tech neck, cervical issues, stiffness' },
  { id: 'shoulder-pain', label: 'Shoulder Pain', icon: '💪', description: 'Rotator cuff, frozen shoulder, impingement' },
  { id: 'hip-pain', label: 'Hip Pain', icon: '🦴', description: 'Hip flexor tightness, bursitis, general hip issues' },
  { id: 'general-mobility', label: 'General Mobility', icon: '🧘', description: 'Overall flexibility and movement quality' },
];

const GOALS = [
  'Reduce pain',
  'Improve flexibility',
  'Build strength',
  'Prevent injuries',
  'Return to activity',
  'Daily maintenance',
];

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [condition, setCondition] = useState<ConditionType | null>(null);
  const [painLevel, setPainLevel] = useState(5);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleComplete = () => {
    if (!condition) return;
    
    const profile: UserProfile = {
      id: generateId(),
      name: name || 'User',
      condition,
      painLevel,
      goals: selectedGoals,
      createdAt: new Date().toISOString(),
    };
    
    onComplete(profile);
  };

  const canProceed = () => {
    switch (step) {
      case 0: return true; // Name is optional
      case 1: return condition !== null;
      case 2: return true; // Pain level has default
      case 3: return selectedGoals.length > 0;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Progress dots */}
      <div className="p-4 flex justify-center gap-2">
        {[0, 1, 2, 3].map(i => (
          <div 
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === step ? 'bg-green-500' : i < step ? 'bg-green-500/50' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>

      <div className="flex-1 flex flex-col p-6">
        {/* Step 0: Name */}
        {step === 0 && (
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">Welcome to RehabAI</h1>
            <p className="text-gray-400 mb-8">Your personalized rehab program</p>
            
            <Label htmlFor="name" className="text-gray-300 mb-2">What should we call you?</Label>
            <Input
              id="name"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-900 border-gray-700 text-white mb-4"
            />
          </div>
        )}

        {/* Step 1: Condition */}
        {step === 1 && (
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold mb-2">What are you dealing with?</h1>
            <p className="text-gray-400 mb-6">Select your primary concern</p>
            
            <div className="space-y-3">
              {CONDITIONS.map(c => (
                <Card
                  key={c.id}
                  className={`p-4 cursor-pointer transition-all border-2 ${
                    condition === c.id 
                      ? 'bg-green-900/30 border-green-500' 
                      : 'bg-gray-900 border-gray-800 hover:border-gray-600'
                  }`}
                  onClick={() => setCondition(c.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{c.icon}</div>
                    <div>
                      <div className="font-semibold text-white">{c.label}</div>
                      <div className="text-sm text-gray-400">{c.description}</div>
                    </div>
                    {condition === c.id && (
                      <div className="ml-auto text-green-500">✓</div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Pain Level */}
        {step === 2 && (
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-2">Current pain level?</h1>
            <p className="text-gray-400 mb-8">On a scale of 1-10</p>
            
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="text-center text-6xl font-bold mb-6 text-green-500">
                {painLevel}
              </div>
              
              <Slider
                value={[painLevel]}
                onValueChange={(v) => setPainLevel(v[0])}
                min={1}
                max={10}
                step={1}
                className="mb-4"
              />
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Mild</span>
                <span>Moderate</span>
                <span>Severe</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              We&apos;ll adjust exercise intensity based on your pain level
            </p>
          </div>
        )}

        {/* Step 3: Goals */}
        {step === 3 && (
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold mb-2">What are your goals?</h1>
            <p className="text-gray-400 mb-6">Select all that apply</p>
            
            <div className="grid grid-cols-2 gap-3">
              {GOALS.map(goal => (
                <Card
                  key={goal}
                  className={`p-4 cursor-pointer transition-all border-2 text-center ${
                    selectedGoals.includes(goal)
                      ? 'bg-green-900/30 border-green-500'
                      : 'bg-gray-900 border-gray-800 hover:border-gray-600'
                  }`}
                  onClick={() => handleGoalToggle(goal)}
                >
                  <div className="text-white">{goal}</div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="p-6 pb-8 flex gap-4">
        {step > 0 && (
          <Button 
            variant="outline" 
            onClick={() => setStep(s => s - 1)}
            className="flex-1"
          >
            Back
          </Button>
        )}
        <Button
          onClick={() => step < 3 ? setStep(s => s + 1) : handleComplete()}
          disabled={!canProceed()}
          className="flex-1 bg-green-600 hover:bg-green-700"
        >
          {step < 3 ? 'Continue' : 'Create My Program'}
        </Button>
      </div>
    </div>
  );
}
