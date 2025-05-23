import { ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-2/5">
      <div className="relative">
        <Input
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search police codes (e.g., 10-20, Code 2, etc.)"
          className="w-full py-2 px-4 pr-10 rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none bg-white/90 text-neutral-800 placeholder-neutral-500"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
