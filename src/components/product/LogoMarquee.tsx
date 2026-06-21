import React from 'react';

export default function LogoMarquee() {
  return (
    <section className="bg-white py-16 border-b border-gray-100 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center animate-fade-in-up">
         <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted by Industry Leaders</p>
      </div>
      
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-default">
         {[...Array(4)].map((_, i) => (
           <div key={i} className="flex items-center justify-around gap-20 px-10 min-w-full opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="font-extrabold text-2xl tracking-tighter text-slate-800">Amazon</div>
              <div className="font-extrabold text-2xl tracking-tighter text-slate-800">Nestle</div>
              <div className="font-extrabold text-2xl tracking-tighter text-slate-800">Samsung</div>
              <div className="font-extrabold text-2xl tracking-tighter text-slate-800">Pepsi</div>
              <div className="font-extrabold text-2xl tracking-tighter text-slate-800">Honda</div>
              <div className="font-extrabold text-2xl tracking-tighter text-slate-800">Bosch</div>
              <div className="font-extrabold text-2xl tracking-tighter text-slate-800">Lenovo</div>
           </div>
         ))}
      </div>
    </section>
  );
}
