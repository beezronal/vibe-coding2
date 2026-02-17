
import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import AISearch from './components/AISearch';
import Footer from './components/Footer';
import { Product, CartItem, Category } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiRecommendations, setAiRecommendations] = useState<string[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesAi = aiRecommendations.length === 0 || aiRecommendations.includes(p.id);
      return matchesCategory && matchesSearch && matchesAi;
    });
  }, [activeCategory, searchQuery, aiRecommendations]);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }, []);

  const handleAiResults = (recommendedIds: string[]) => {
    setAiRecommendations(recommendedIds);
  };

  const clearFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setAiRecommendations([]);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-brand-dark">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)} 
      />

      <main className="flex-grow pt-16">
        <Hero onCtaClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} />
        
        {/* Quick Category Jump Bar */}
        <section className="bg-stone-900 border-y border-stone-800 py-8 overflow-x-auto no-scrollbar">
          <div className="container mx-auto px-4 flex justify-center space-x-6 md:space-x-12 min-w-max">
            {[
              { name: 'All', icon: 'fa-layer-group' },
              { name: Category.LUBRICANTS, icon: 'fa-oil-can' },
              { name: Category.FILTRATION, icon: 'fa-mask-ventilator' },
              { name: Category.IGNITION, icon: 'fa-bolt-lightning' },
              { name: Category.SUSPENSION, icon: 'fa-link' }
            ].map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex flex-col items-center group transition-all duration-300 ${
                  activeCategory === cat.name ? 'text-brand-primary' : 'text-stone-500 hover:text-stone-300'
                }`}
              >
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-3 border-2 transition-all duration-500 ${
                  activeCategory === cat.name ? 'border-brand-primary bg-brand-primary/10 shadow-lg shadow-brand-primary/5' : 'border-stone-800 bg-stone-950 group-hover:border-stone-700'
                }`}>
                  <i className={`fa-solid ${cat.icon} text-2xl`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        <div id="products" className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar / AI Box */}
            <aside className="w-full lg:w-80 flex-shrink-0 space-y-10">
              <div className="bg-brand-card p-10 rounded-[2.5rem] border border-stone-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-brand-primary/20 p-2 rounded-lg">
                       <i className="fa-solid fa-wand-sparkles text-brand-primary"></i>
                    </div>
                    <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">Smart Assistant</h3>
                  </div>
                  <p className="text-xs text-stone-400 mb-8 leading-relaxed font-medium">Describe your car's problem or needs, and our AI will suggest the best-matched products from our inventory.</p>
                  <AISearch onResults={handleAiResults} onLoading={setIsAiLoading} />
                </div>
              </div>

              <div className="px-6 py-8 rounded-[2rem] bg-stone-900/40 border border-stone-800/50">
                 <h4 className="text-[10px] font-black text-stone-500 uppercase tracking-widest mb-6">Trusted Brands</h4>
                 <div className="grid grid-cols-2 gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center justify-center py-2 border border-stone-800 rounded-lg">LIQUI MOLY</div>
                    <div className="flex items-center justify-center py-2 border border-stone-800 rounded-lg">PTT</div>
                    <div className="flex items-center justify-center py-2 border border-stone-800 rounded-lg">NGK</div>
                    <div className="flex items-center justify-center py-2 border border-stone-800 rounded-lg">MANN</div>
                 </div>
              </div>
            </aside>

            {/* Main Product Area */}
            <div className="flex-grow">
              <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-8">
                <div>
                  <h2 className="text-5xl font-bold heading-font text-white leading-none">
                    {activeCategory === 'All' ? 'Our Catalog' : activeCategory}
                  </h2>
                  <p className="text-stone-500 mt-4 uppercase tracking-[0.3em] text-[10px] font-black">Genuine Parts & Professional Care</p>
                </div>
                
                <div className="relative w-full sm:w-auto group">
                  <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-stone-500 group-focus-within:text-brand-primary transition-colors"></i>
                  <input 
                    type="text"
                    placeholder="Search Liqui Moly, Plugs, Filters..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-96 bg-stone-950 border border-stone-800 rounded-full py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 transition-all text-sm text-stone-200 placeholder:text-stone-600 shadow-xl shadow-stone-950/50"
                  />
                </div>
              </div>

              {isAiLoading ? (
                <div className="flex flex-col items-center justify-center py-40 space-y-8">
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-stone-800 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <i className="fa-solid fa-microchip text-brand-primary animate-pulse"></i>
                    </div>
                  </div>
                  <p className="text-stone-500 font-black uppercase tracking-[0.4em] text-[10px]">Analyzing Database...</p>
                </div>
              ) : filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
              ) : (
                <div className="text-center py-40 bg-stone-900/20 rounded-[4rem] border-2 border-dashed border-stone-800 flex flex-col items-center">
                  <div className="w-20 h-20 bg-stone-800/50 rounded-full flex items-center justify-center mb-8">
                     <i className="fa-solid fa-magnifying-glass-minus text-3xl text-stone-600"></i>
                  </div>
                  <p className="text-xl text-stone-500 font-bold heading-font mb-4 italic">We couldn't find exactly what you're looking for.</p>
                  <p className="text-sm text-stone-600 max-w-xs mb-8">Try adjusting your filters or search term to browse our premium selection.</p>
                  <button 
                    onClick={clearFilters}
                    className="px-8 py-3 bg-stone-800 hover:bg-brand-primary text-stone-400 hover:text-stone-950 rounded-full text-xs font-black uppercase tracking-widest transition-all"
                  >
                    Reset Everything
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQty={updateQuantity}
      />
    </div>
  );
};

export default App;
