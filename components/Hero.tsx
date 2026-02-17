
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden bg-stone-900">
      <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
            <i className="fa-solid fa-heart mr-2"></i>
            Family Owned & Operated Since 1995
          </div>
          <h1 className="text-5xl md:text-7xl font-bold heading-font text-white leading-tight mb-6">
            Premium Parts <br /> 
            <span className="text-gradient">With A Personal Touch</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
            Authorized dealer for <span className="text-brand-primary font-bold">Liqui Moly</span>, <span className="text-brand-primary font-bold">PTT</span>, and <span className="text-brand-primary font-bold">Mann Filter</span>. We don't just sell parts; we care for your car like it's our own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="px-10 py-4 bg-brand-primary hover:bg-brand-secondary text-stone-950 font-black rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl shadow-brand-primary/20"
            >
              Explore Our Catalog
              <i className="fa-solid fa-chevron-right ml-3 text-xs"></i>
            </button>
            <button className="px-10 py-4 bg-transparent hover:bg-white/5 text-white font-bold rounded-2xl transition-all border border-stone-700 backdrop-blur-sm">
              Visit Our Shop
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:flex space-x-4">
        <div className="bg-stone-900/90 backdrop-blur border border-stone-800 p-5 rounded-3xl shadow-2xl flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center">
            <i className="fa-solid fa-shield-check text-brand-primary"></i>
          </div>
          <div>
            <p className="text-white text-sm font-bold">Certified Parts</p>
            <p className="text-stone-400 text-[10px] uppercase tracking-wider">100% Genuine Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
