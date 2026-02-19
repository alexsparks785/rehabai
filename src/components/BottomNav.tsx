'use client';

import { cn } from '@/lib/utils';

type TabId = 'generator' | 'programs' | 'clips' | 'profile';

interface BottomNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: 'generator', label: 'Generator', icon: '⚡' },
  { id: 'programs', label: 'Programs', icon: '📋' },
  { id: 'clips', label: 'Clips', icon: '🎬' },
  { id: 'profile', label: 'Profile', icon: '👤' },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 pb-safe">
      <div className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              'flex flex-col items-center justify-center flex-1 h-full transition-colors',
              activeTab === tab.id ? 'text-yellow-400' : 'text-gray-500'
            )}
          >
            <span className="text-xl mb-1">{tab.icon}</span>
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
