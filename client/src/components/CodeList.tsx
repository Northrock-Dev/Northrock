import { PoliceCode, categoryLabels } from '@/lib/types';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface CodeListProps {
  codes: PoliceCode[];
  expandedCodes: number[];
  onCodeToggle: (id: number) => void;
}

export default function CodeList({ codes, expandedCodes, onCodeToggle }: CodeListProps) {
  if (codes.length === 0) {
    return (
      <div className="bg-white rounded-lg p-8 text-center border-2 border-primary">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-black mb-2">No codes found</h3>
        <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
        <Button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">
          Reset Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {codes.map((code) => (
        <Collapsible
          key={code.id}
          open={expandedCodes.includes(code.id)}
          onOpenChange={() => onCodeToggle(code.id)}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-primary"
        >
          <div className="p-4 border-b border-primary/30">
            <div className="flex justify-between items-center">
              <div>
                <span className="inline-block px-2 py-1 rounded-md text-xs font-mono bg-primary/10 text-primary mb-2">
                  {categoryLabels[code.category as keyof typeof categoryLabels] || code.category}
                </span>
                <h3 className="text-lg font-semibold text-black">
                  <span className="font-mono">{code.code}</span>
                </h3>
              </div>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-1">
                  <ChevronDown className={`h-5 w-5 transition-transform ${expandedCodes.includes(code.id) ? 'transform rotate-180' : ''}`} />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <p className="text-gray-700 mt-1">{code.title}</p>
          </div>

          <CollapsibleContent className="p-4 bg-gray-50">
            <div className="mb-3">
              <h4 className="text-sm font-semibold text-primary mb-1">Description</h4>
              <p className="text-gray-700">{code.description}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-primary mb-1">Example Usage</h4>
              <div className="bg-white rounded p-3 font-mono text-sm text-gray-700 border border-primary/20">
                {code.example}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}
