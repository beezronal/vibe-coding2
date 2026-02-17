
import React, { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-lg border-b border-stone-800 px-4 sm:px-8 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="bg-gradient-to-br from-brand-primary to-brand-accent p-2 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">
            <i className="fa-solid fa-oil-can text-stone-950 text-xl"></i>
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tight text-white uppercase">KTH</span>
            <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em]">Lubricants</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-black uppercase tracking-widest text-stone-400">
          <div className="relative group">
            <button className="flex items-center hover:text-brand-primary transition-colors py-4">
              Catalog <i className="fa-solid fa-chevron-down ml-2 text-[8px]"></i>
            </button>
            <div className="absolute top-full left-0 w-56 bg-brand-card border border-stone-800 rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 shadow-2xl">
              <a href="#products" className="block px-5 py-4 hover:bg-brand-primary hover:text-stone-950 transition-colors">Lubricants & Oils</a>
              <a href="#products" className="block px-5 py-4 hover:bg-brand-primary hover:text-stone-950 transition-colors">Filters (Air/Oil)</a>
              <a href="#products" className="block px-5 py-4 hover:bg-brand-primary hover:text-stone-950 transition-colors">Ignition (Plugs)</a>
              <a href="#products" className="block px-5 py-4 hover:bg-brand-primary hover:text-stone-950 transition-colors">Suspension Parts</a>
            </div>
          </div>
          <a href="#" className="hover:text-brand-primary transition-colors">Our Story</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Locations</a>
        </nav>

        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-2 text-stone-400 text-[10px] font-bold uppercase">
             <i className="fa-solid fa-phone text-brand-primary"></i>
             <span>Questions? 1-800-KTH-PARTS</span>
          </div>
          
          <button 
            onClick={onCartClick}
            className="relative p-2.5 bg-stone-800 hover:bg-brand-primary group transition-all rounded-full"
          >
            <i className="fa-solid fa-cart-shopping text-stone-300 group-hover:text-stone-950 text-lg transition-colors"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-dark shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
