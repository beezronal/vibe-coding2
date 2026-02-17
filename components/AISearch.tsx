
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from '../constants';

interface AISearchProps {
  onResults: (productIds: string[]) => void;
  onLoading: (isLoading: boolean) => void;
}

const AISearch: React.FC<AISearchProps> = ({ onResults, onLoading }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    onLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const productContext = PRODUCTS.map(p => ({
        id: p.id,
        name: p.name,
        brand: p.brand,
        description: p.description,
        tags: p.tags.join(', ')
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `I have a car problem: "${query}". Based on this catalog: ${JSON.stringify(productContext)}, identify the IDs of the products that could help solve this problem. Return ONLY a JSON array of product IDs.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        }
      });

      const recommendedIds = JSON.parse(response.text || '[]');
      onResults(recommendedIds);
    } catch (error) {
      console.error('AI recommendation failed:', error);
    } finally {
      onLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div className="relative">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. 'My BMW needs an oil change with German oil' or 'The car shakes over 60mph'"
          className="w-full bg-stone-950 border border-stone-800 rounded-2xl p-5 text-sm text-stone-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 placeholder:text-stone-700 min-h-[120px] resize-none shadow-inner"
        />
        <div className="absolute bottom-4 right-4 animate-pulse">
           <i className="fa-solid fa-sparkles text-brand-primary/30"></i>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-stone-800 hover:bg-brand-primary text-stone-300 hover:text-stone-950 font-black py-3 px-4 rounded-2xl text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg"
      >
        <i className="fa-solid fa-brain"></i>
        Analyze Engine Needs
      </button>
    </form>
  );
};

export default AISearch;
