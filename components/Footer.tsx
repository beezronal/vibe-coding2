
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-brand-primary p-2 rounded-xl shadow-lg">
                <i className="fa-solid fa-oil-can text-stone-950 text-xl"></i>
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-black tracking-tight text-white uppercase">KTH</span>
                <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.3em]">Lubricants</span>
              </div>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-8 font-light italic">
              "We treat every vehicle that comes into our catalog with the same respect as if it were sitting in our own garage. Quality you can trust, value for your hard-earned money."
            </p>
            <div className="space-y-4">
               <div className="flex items-center space-x-4 text-stone-400">
                  <i className="fa-solid fa-location-dot text-brand-primary"></i>
                  <span className="text-sm">Main Hub: 123 Mechanic Way, Automotive District</span>
               </div>
               <div className="flex items-center space-x-4 text-stone-400">
                  <i className="fa-solid fa-clock text-brand-primary"></i>
                  <span className="text-sm">Mon - Sat: 8:00 AM - 6:00 PM</span>
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Expert Service</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Maintenance Guides</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Oil Selection Chart</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">OEM Catalog</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Technical Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Community</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Local Meets</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Partner Shops</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Center</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Join Our Team</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-stone-900 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-stone-600 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} KTH Parts. A Family Heritage Project.
          </p>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-stone-600 hover:text-brand-primary transition-all transform hover:scale-110"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="text-stone-600 hover:text-brand-primary transition-all transform hover:scale-110"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="text-stone-600 hover:text-brand-primary transition-all transform hover:scale-110"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
