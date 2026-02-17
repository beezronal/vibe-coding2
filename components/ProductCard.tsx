
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-brand-card rounded-[2rem] overflow-hidden border border-stone-800/50 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-stone-900">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-5 left-5">
          <span className="bg-stone-950/80 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary px-4 py-1.5 rounded-full border border-brand-primary/20">
            {product.category}
          </span>
        </div>
        <div className="absolute bottom-5 left-5">
           <span className="bg-brand-primary text-stone-950 text-[10px] font-black px-3 py-1 rounded-lg shadow-lg uppercase tracking-wider">
             {product.brand}
           </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors leading-tight">
            {product.name}
          </h3>
        </div>
        
        <p className="text-stone-400 text-sm mb-6 line-clamp-2 leading-relaxed font-light">
          {product.description}
        </p>

        <div className="mt-auto pt-6 border-t border-stone-800 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Price</span>
            <span className="text-2xl font-black text-white">${product.price.toFixed(2)}</span>
          </div>
          
          <button 
            onClick={onAddToCart}
            className="w-14 h-14 rounded-2xl bg-stone-800 hover:bg-brand-primary text-stone-300 hover:text-stone-950 transition-all duration-300 flex items-center justify-center transform active:scale-95 shadow-lg group/btn"
          >
            <i className="fa-solid fa-cart-plus text-xl transition-transform group-hover/btn:scale-110"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
