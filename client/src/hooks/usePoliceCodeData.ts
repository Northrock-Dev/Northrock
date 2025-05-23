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
      filtered = filtered.filter(code => code.category === activeCategory);
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
