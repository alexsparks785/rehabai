'use client';

import { cn } from '@/lib/utils';

export interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface FilterChipsProps {
  filters: {
    id: string;
    label: string;
    value: string;
    options: FilterOption[];
  }[];
  onFilterClick: (filterId: string) => void;
  onFilterRemove?: (filterId: string) => void;
}

export function FilterChips({ filters, onFilterClick, onFilterRemove }: FilterChipsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterClick(filter.id)}
          className={cn(
            'flex items-center gap-1 px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-colors',
            filter.value
              ? 'bg-yellow-400 text-black'
              : 'bg-gray-800 text-white border border-gray-700'
          )}
        >
          {filter.value && onFilterRemove && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                onFilterRemove(filter.id);
              }}
              className="mr-1"
            >
              ✕
            </span>
          )}
          <span>{filter.value || filter.label}</span>
          {!filter.value && <span className="text-gray-400">▾</span>}
        </button>
      ))}
    </div>
  );
}
