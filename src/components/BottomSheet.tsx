'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function BottomSheet({ isOpen, onClose, title, children }: BottomSheetProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div 
        className={cn(
          'absolute bottom-0 left-0 right-0 bg-gray-900 rounded-t-2xl',
          'transform transition-transform duration-300 ease-out',
          'max-h-[80vh] overflow-y-auto'
        )}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray-600 rounded-full" />
        </div>
        
        {/* Header */}
        <div className="px-6 pb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        {/* Content */}
        <div className="px-6 pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}

interface BottomSheetOptionProps {
  label: string;
  subtitle?: string;
  selected?: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export function BottomSheetOption({ 
  label, 
  subtitle, 
  selected, 
  onClick,
  icon 
}: BottomSheetOptionProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full px-4 py-4 rounded-xl text-left transition-colors mb-2',
        selected 
          ? 'bg-yellow-400 text-black' 
          : 'bg-gray-800 text-white hover:bg-gray-700'
      )}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <div>
          <div className="font-medium">{label}</div>
          {subtitle && (
            <div className={cn(
              'text-sm',
              selected ? 'text-black/70' : 'text-gray-400'
            )}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
