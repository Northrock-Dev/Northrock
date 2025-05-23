import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import CodeList from '@/components/CodeList';
import Footer from '@/components/Footer';
import { usePoliceCodeData } from '@/hooks/usePoliceCodeData';
import { CategoryType } from '@/lib/types';
import { categoryLabels } from '@/lib/types';

export default function Home() {
  const {
    searchQuery,
    setSearchQuery,
    activeCategory,
    setActiveCategory,
    expandedCodes,
    categories,
    filteredCodes,
    toggleCodeExpanded,
    resetFilters
  } = usePoliceCodeData();

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-sans">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-grow container mx-auto px-4 py-6">
        <CategoryTabs 
          categories={categories} 
          activeCategory={activeCategory} 
          onCategoryChange={(category: CategoryType) => setActiveCategory(category)} 
        />

        {/* Results Information */}
        <div className="mb-4 flex justify-between items-center">
          <div>
            <p className="text-neutral-600 dark:text-neutral-400">
              <span>{filteredCodes.length}</span> codes found
              {searchQuery.length > 0 && (
                <span> for "<span className="font-medium">{searchQuery}</span>"</span>
              )}
              {activeCategory !== 'all' && (
                <span> in <span className="font-medium">{categoryLabels[activeCategory]}</span></span>
              )}
            </p>
          </div>
          
          {(searchQuery.length > 0 || activeCategory !== 'all') && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={resetFilters}
              className="text-xs dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              Reset Filters
            </Button>
          )}
        </div>

        {/* No Results Message - We've updated this in the CodeList component already */}
        {filteredCodes.length === 0 ? (
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-neutral-400 dark:text-neutral-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">No codes found</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-4">Try adjusting your search or filter criteria.</p>
            <Button onClick={resetFilters} className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white">
              Reset Filters
            </Button>
          </div>
        ) : (
          <CodeList 
            codes={filteredCodes} 
            expandedCodes={expandedCodes} 
            onCodeToggle={toggleCodeExpanded} 
          />
        )}
      </main>

      <Footer />

      <style jsx>{`
        .bg-police-pattern {
          background-color: #1E40AF;
          background-image: linear-gradient(rgba(30, 64, 175, 0.95), rgba(30, 64, 175, 0.95)), 
                          url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80');
          background-size: cover;
          background-position: center;
        }
        
        .dark .bg-police-pattern {
          background-color: #1E3A8A;
          background-image: linear-gradient(rgba(17, 24, 39, 0.95), rgba(17, 24, 39, 0.95)), 
                          url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80');
        }
        
        .font-mono {
          font-family: 'Roboto Mono', monospace;
        }
      `}</style>
    </div>
  );
}
