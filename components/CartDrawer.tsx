
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-brand-card shadow-2xl flex flex-col border-l border-stone-800">
          <div className="px-8 py-8 border-b border-stone-800 flex justify-between items-center">
            <h2 className="text-2xl font-bold heading-font text-white tracking-wide italic">Your Selected Items</h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center text-stone-500 hover:text-white hover:bg-stone-800 transition-all"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto px-8 py-6 space-y-8 no-scrollbar">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-stone-600 space-y-6">
                <i className="fa-solid fa-basket-shopping text-6xl opacity-10"></i>
                <p className="font-medium text-center">Your basket is waiting for some <br/> premium engine care.</p>
                <button 
                  onClick={onClose}
                  className="px-6 py-2 border border-stone-800 text-brand-primary text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-brand-primary hover:text-stone-950 transition-all"
                >
                  Return To Shop
                </button>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-6 animate-fadeIn">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-stone-900 flex-shrink-0 border border-stone-800/50">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-white text-base line-clamp-1">{item.name}</h4>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-stone-600 hover:text-red-400 transition-colors ml-4"
                      >
                        <i className="fa-solid fa-xmark text-sm"></i>
                      </button>
                    </div>
                    <p className="text-brand-primary text-[10px] font-black uppercase tracking-widest mb-4">{item.brand}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-stone-950 border border-stone-800 rounded-xl overflow-hidden h-9">
                        <button 
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="w-9 h-full flex items-center justify-center hover:bg-stone-800 text-stone-400"
                        >
                          <i className="fa-solid fa-minus text-[8px]"></i>
                        </button>
                        <span className="w-8 text-center text-xs font-black text-white">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="w-9 h-full flex items-center justify-center hover:bg-stone-800 text-stone-400"
                        >
                          <i className="fa-solid fa-plus text-[8px]"></i>
                        </button>
                      </div>
                      <span className="font-black text-white text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-8 bg-stone-950/50 backdrop-blur-md border-t border-stone-800">
            <div className="flex justify-between items-center mb-8">
              <span className="text-stone-500 font-black uppercase tracking-[0.2em] text-[10px]">Total Order</span>
              <span className="text-3xl font-black text-brand-primary">${total.toFixed(2)}</span>
            </div>
            
            <button 
              disabled={items.length === 0}
              className="w-full py-5 bg-brand-primary hover:bg-brand-secondary disabled:opacity-50 disabled:cursor-not-allowed text-stone-950 font-black uppercase tracking-widest rounded-3xl transition-all shadow-2xl shadow-brand-primary/20 active:scale-[0.98]"
            >
              Process Order
            </button>
            <div className="mt-6 flex items-center justify-center space-x-4 opacity-30">
               <i className="fa-brands fa-cc-visa text-xl"></i>
               <i className="fa-brands fa-cc-mastercard text-xl"></i>
               <i className="fa-brands fa-cc-paypal text-xl"></i>
               <i className="fa-brands fa-cc-apple-pay text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
