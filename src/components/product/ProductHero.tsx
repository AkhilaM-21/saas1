import { useLanguage } from '../../LanguageContext';

export default function ProductHero() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  return (
    <section className="relative w-full bg-[#0a1121] overflow-hidden pt-24 lg:pt-32 pb-8">
      {/* Subtle dotted background grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      {/* Soft central glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-8 lg:gap-12 relative z-10">
          
          {/* Content */}
          <div className="w-full flex flex-col items-center text-center">

            <h1 className="text-4xl md:text-[3rem] font-medium text-white tracking-normal mb-8 leading-[1.3]">
              {isArabic ? 'إدارة المخزون لـ ' : 'Inventory for '}<br />
              <span className="text-primary">{isArabic ? 'التجزئة ونقاط البيع' : 'Retail & POS'}</span>
            </h1>
            
            <p className="text-xl md:text-[1.25rem] text-slate-300 font-normal mb-0 max-w-4xl mx-auto leading-[1.6]">
              {isArabic 
                ? 'تتبع المخزون في الوقت الفعلي مخصص لعمليات التجزئة. نظام متكامل يدير الفروع والمخازن بكفاءة عالية.'
                : 'Real-time stock tracking tailored for Retail & POS operations. A unified system that manages branches and warehouses with high efficiency.'}
            </p>
            

            

          </div>

        </div>



      </div>
    </section>
  );
}
