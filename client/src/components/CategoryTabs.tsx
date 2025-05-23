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
              ? 'bg-primary-600 dark:bg-primary-700 text-white border-2 border-primary-300 dark:border-primary-500'
              : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-neutral-700'
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
                ? 'bg-primary-600 dark:bg-primary-700 text-white border-2 border-primary-300 dark:border-primary-500'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-neutral-700'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>
    </div>
  );
}
