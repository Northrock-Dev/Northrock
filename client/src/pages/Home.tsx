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
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
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
            <p className="text-gray-700">
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
              className="text-xs border-primary text-primary hover:bg-primary/10"
            >
              Reset Filters
            </Button>
          )}
        </div>

        {/* No Results Message - Using the CodeList component's empty state */}
        <CodeList 
          codes={filteredCodes} 
          expandedCodes={expandedCodes} 
          onCodeToggle={toggleCodeExpanded} 
        />
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .bg-police-pattern {
          background-color: #FF8C37;
          background-image: linear-gradient(rgba(255, 140, 55, 0.95), rgba(255, 140, 55, 0.95)), 
                          url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80');
          background-size: cover;
          background-position: center;
        }
        
        .font-mono {
          font-family: 'Roboto Mono', monospace;
        }
      `}} />
    </div>
  );
}
