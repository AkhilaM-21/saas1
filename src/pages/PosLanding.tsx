import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';

import PosHero from '../components/product/PosHero';
import StatsCounter from '../components/product/StatsCounter';
import PosCoreFeatures from '../components/product/PosCoreFeatures';
import InteractiveShowcase from '../components/product/InteractiveShowcase';
import WorkflowTimeline from '../components/product/WorkflowTimeline';
import PosFaq from '../components/product/PosFaq';

export default function PosLanding() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#0a1121] min-h-screen pb-24">
       {/* Sticky Sub Navbar */}
       <div 
         className={`fixed top-16 left-0 right-0 z-40 transition-all duration-300 border-b ${
           isScrolled 
             ? 'bg-[#0a1121]/95 backdrop-blur-md border-white/10 shadow-lg py-3' 
             : 'bg-[#0a1121] border-transparent py-4'
         }`}
       >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between">
             <div className="flex items-center gap-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                   <ShoppingCart className="w-5 h-5 text-primary" />
                   {isArabic ? 'إمفايف نقاط البيع' : 'Emvive POS'}
                </h2>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
                   <a href="#features" className="hover:text-white transition-colors">{isArabic ? 'الميزات' : 'Features'}</a>
                   <a href="#workflow" className="hover:text-white transition-colors">{isArabic ? 'كيف تعمل' : 'How it Works'}</a>
                   <a href="#faq" className="hover:text-white transition-colors">{isArabic ? 'الأسئلة الشائعة' : 'FAQ'}</a>
                </nav>
             </div>
             
             <div className="flex items-center gap-4">
                <button className="bg-primary hover:bg-primary-hover text-navy px-5 py-2 rounded-lg font-bold text-sm transition-colors shadow-[0_0_15px_rgba(214,154,22,0.3)] hover:shadow-[0_0_25px_rgba(214,154,22,0.5)]">
                   {isArabic ? 'ابدأ تجربتك المجانية' : 'Start 15-day Free Trial'}
                </button>
             </div>
           </div>
         </div>
       </div>

       {/* Hero Section */}
       <PosHero />
       
       {/* Trust / Stats Banner */}
       <StatsCounter />
       
       {/* Core Features Grid (Zoho Equivalent) */}
       <div id="features">
         <PosCoreFeatures />
       </div>

       {/* Dashboard Showcase */}
       <InteractiveShowcase />
       
       {/* Workflow Timeline */}
       <div id="workflow">
         <WorkflowTimeline />
       </div>

       {/* FAQ Section */}
       <div id="faq">
         <PosFaq />
       </div>

       {/* Final CTA */}
       <section className="py-24 bg-gradient-to-br from-[#0a1121] to-[#0f172a] relative overflow-hidden border-t border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
               {isArabic ? 'هل أنت مستعد لتبسيط عمليات التجزئة؟' : 'Ready to simplify your retail operations?'}
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
               {isArabic 
                 ? 'انضم إلى آلاف الشركات التي تثق في إمفايف لإدارة متاجرهم. جربه مجانًا اليوم.'
                 : 'Join thousands of businesses that trust Emvive to run their stores. Try it for free today.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-navy px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(214,154,22,0.3)] hover:shadow-[0_0_50px_rgba(214,154,22,0.5)]">
                 {isArabic ? 'ابدأ مجانًا لمدة 15 يومًا' : 'Start your 15-day free trial'}
              </button>
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                 {isArabic ? 'تحدث إلى خبير' : 'Talk to an expert'}
              </button>
            </div>
          </div>
       </section>

    </div>
  );
}
