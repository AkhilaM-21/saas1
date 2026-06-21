import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../LanguageContext';
import { PackageOpen, RefreshCw, ShoppingCart, TrendingUp } from 'lucide-react';

export default function WorkflowTimeline() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    { icon: PackageOpen, title: isArabic ? 'استلام المخزون' : 'Receive Stock', desc: isArabic ? 'أضف المنتجات إلى مستودعك' : 'Add products to your warehouse' },
    { icon: RefreshCw, title: isArabic ? 'مزامنة المخزون' : 'Sync Inventory', desc: isArabic ? 'تحديثات المخزون الفورية عبر الفروع' : 'Stock updates in real-time across all branches' },
    { icon: ShoppingCart, title: isArabic ? 'الإدارة والبيع' : 'Manage & Sell', desc: isArabic ? 'معالجة الطلبات عبر نقاط البيع بسهولة' : 'Process orders through POS effortlessly' },
    { icon: TrendingUp, title: isArabic ? 'التحليل والنمو' : 'Analyze & Grow', desc: isArabic ? 'احصل على رؤى ونمِ عملك بذكاء' : 'Get insights and grow your business smarter' }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a1121] relative border-t border-white/5 overflow-hidden">
      {/* Subtle dotted background grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-8">
           <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
             <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
               {isArabic ? 'كيف يعمل' : 'HOW IT WORKS'}
             </p>
             <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
               {isArabic ? 'عملية بسيطة تدير عملك' : 'A simple process that'}<br/>
               {isArabic ? '' : 'powers your business'}
             </h2>
           </div>
           
           {/* Timeline Graphic */}
           <div className="flex-1 w-full md:w-auto md:ml-12 overflow-x-auto overflow-y-hidden pb-8 md:pb-0 hide-scrollbar">
              <div className="flex items-start min-w-[600px] relative pt-6">
                 
                 {/* Connecting Dashed Line - Animates width */}
                 <div className="absolute top-12 left-10 h-[1px] border-t-2 border-dashed border-primary/30 z-0"
                      style={{ 
                        width: isVisible ? 'calc(100% - 5rem)' : '0%',
                        transition: 'width 1.5s ease-in-out 0.5s' 
                      }}></div>

                 {steps.map((step, i) => (
                    <div key={i} 
                         className={`flex-1 flex flex-col items-center text-center relative z-10 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                         style={{ transitionDelay: `${0.8 + (i * 0.3)}s` }}>
                       <div className="w-12 h-12 rounded-full border-2 border-primary bg-[#0a1121] flex items-center justify-center shadow-[0_0_15px_rgba(214,154,22,0.3)] mb-4">
                          <step.icon className="w-5 h-5 text-primary" />
                       </div>
                       <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
                       <p className="text-slate-400 text-xs px-4">{step.desc}</p>
                    </div>
                 ))}
                 
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
