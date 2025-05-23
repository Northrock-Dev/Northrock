import { CategoryType, categoryLabels } from '@/lib/types';

interface CategoryTabsProps {
  categories: CategoryType[];
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

export default function CategoryTabs({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: CategoryTabsProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            activeCategory === 'all'
              ? 'bg-primary text-white border-2 border-primary'
              : 'bg-white text-black hover:bg-primary/10 border-2 border-primary'
          }`}
        >
          All Codes
        </button>
        
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-primary text-white border-2 border-primary'
                : 'bg-white text-black hover:bg-primary/10 border-2 border-primary'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>
    </div>
  );
}
