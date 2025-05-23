import { useState, useEffect, useMemo } from 'react';
import { policeCodes } from '@/data/policeCodes';
import { PoliceCode, CategoryType } from '@/lib/types';

export function usePoliceCodeData() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [expandedCodes, setExpandedCodes] = useState<number[]>([]);
  
  // Extract unique categories from police codes
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(policeCodes.map(code => code.category))];
    return uniqueCategories as CategoryType[];
  }, []);
  
  // Filter police codes based on search query and active category
  const filteredCodes = useMemo(() => {
    let filtered = [...policeCodes];
    
    // Filter by category if not "all"
    if (activeCategory !== 'all') {
      // Make sure we're only showing codes that exactly match the category type
      filtered = filtered.filter(code => code.category === activeCategory);
      
      // Additional check for 11-codes to ensure only codes starting with "11-" are shown
      if (activeCategory === '11-codes') {
        filtered = filtered.filter(code => code.code.startsWith('11-'));
      } 
      // Additional check for 10-codes to ensure only codes starting with "10-" are shown
      else if (activeCategory === '10-codes') {
        filtered = filtered.filter(code => code.code.startsWith('10-'));
      }
      // Additional check for response-codes to ensure only codes with "Code" in their name are shown
      else if (activeCategory === 'response-codes') {
        filtered = filtered.filter(code => 
          code.code.startsWith('Code') || 
          code.title.includes('Response') || 
          ['901', '902', '904', '920', '925', '995', '998', '10000', '7500'].includes(code.code)
        );
      }
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(code => 
        code.code.toLowerCase().includes(query) || 
        code.title.toLowerCase().includes(query) || 
        code.description.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [searchQuery, activeCategory]);
  
  // Toggle expanded state of a code
  const toggleCodeExpanded = (id: number) => {
    setExpandedCodes(prevExpanded => {
      if (prevExpanded.includes(id)) {
        return prevExpanded.filter(codeId => codeId !== id);
      } else {
        return [...prevExpanded, id];
      }
    });
  };
  
  // Reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
  };
  
  return {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    expandedCodes,
    categories,
    filteredCodes,
    toggleCodeExpanded,
    resetFilters
  };
}
