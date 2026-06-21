
import { useLanguage } from '../../LanguageContext';
import { ArrowRight, CheckCircle2, Star, Calendar, ShieldCheck, XCircle, Headphones } from 'lucide-react';

export default function PremiumCTA() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  return (
    <section className="bg-[#0a1121] py-24 relative overflow-hidden">
      {/* Subtle dotted background grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Left: Testimonial Card */}
            <div className="w-full lg:w-1/3 bg-[#111e30] border border-white/5 rounded-3xl p-10 flex flex-col justify-between">
               <div>
                  <div className="flex items-center gap-1 mb-8">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
                  </div>
                  <p className="text-xl text-white font-serif leading-relaxed mb-10">
                     "{isArabic 
                       ? 'لقد غيّر إمڤايڤ تماماً طريقة إدارتنا للمخزون. كفاءتنا ارتفعت ونفاد المخزون انخفض إلى الصفر تقريباً.'
                       : 'Emvive has completely transformed the way we manage our inventory. Our efficiency is up and stockouts are down.'}"
                  </p>
               </div>
               <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-primary/20" />
                  <div>
                     <p className="text-white font-bold text-sm">Ahmed Khan</p>
                     <p className="text-slate-500 text-xs">Operations Manager, RetailMart</p>
                  </div>
               </div>
               <div className="flex justify-center gap-2 mt-8">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  <div className="w-2 h-2 rounded-full bg-white/20"></div>
               </div>
            </div>

            {/* Right: Main CTA Box */}
            <div className="flex-1 bg-gradient-to-br from-[#0e1a30] to-[#070d19] border border-white/10 rounded-3xl p-10 lg:p-14 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
               <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full"></div>
               
               <div className="flex-1 text-center md:text-left relative z-10">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
                     {isArabic ? 'مستعد للبدء؟' : 'READY TO START?'}
                  </p>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                     {isArabic ? 'مستعد لتحويل عملياتك؟' : 'Ready to transform your operations?'}
                  </h2>
                  <p className="text-slate-400 mb-8 max-w-md mx-auto md:mx-0">
                     {isArabic 
                       ? 'انضم إلى آلاف الشركات التي تثق بإمڤايڤ في إدارة مخزونها ونقاط بيعها.'
                       : 'Join thousands of businesses that trust Emvive for their inventory and POS needs.'}
                  </p>
                  <button className="bg-primary hover:bg-primary-hover text-navy px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(214,154,22,0.3)] flex items-center justify-center gap-2 w-full md:w-auto mb-4 mx-auto md:mx-0 group">
                     {isArabic ? 'ابدأ مجاناً' : 'Get Started for Free'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-xs font-medium">
                     <CheckCircle2 className="w-4 h-4" /> {isArabic ? 'لا حاجة لبطاقة ائتمان' : 'No credit card required'}
                  </div>
               </div>

               <div className="w-full md:w-auto flex flex-col gap-6 relative z-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#1e2a40] flex items-center justify-center shrink-0 border border-white/5"><Calendar className="w-5 h-5 text-slate-300"/></div>
                     <p className="text-white font-medium text-sm">{isArabic ? 'تجربة مجانية لمدة 14 يوم' : 'Free 14-day trial'}</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#1e2a40] flex items-center justify-center shrink-0 border border-white/5"><ShieldCheck className="w-5 h-5 text-slate-300"/></div>
                     <p className="text-white font-medium text-sm">{isArabic ? 'وصول كامل لجميع الميزات' : 'Full access to all features'}</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#1e2a40] flex items-center justify-center shrink-0 border border-white/5"><XCircle className="w-5 h-5 text-slate-300"/></div>
                     <p className="text-white font-medium text-sm">{isArabic ? 'إلغاء في أي وقت' : 'Cancel anytime'}</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#1e2a40] flex items-center justify-center shrink-0 border border-white/5"><Headphones className="w-5 h-5 text-slate-300"/></div>
                     <p className="text-white font-medium text-sm">{isArabic ? 'دعم فني 24/7' : '24/7 customer support'}</p>
                  </div>
               </div>

            </div>
         </div>
      </div>
    </section>
  );
}
