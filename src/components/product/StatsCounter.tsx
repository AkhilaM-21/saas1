
import { useLanguage } from '../../LanguageContext';
import { Zap, ShoppingBag, PackageOpen, RefreshCw } from 'lucide-react';

export default function StatsCounter() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  return (
    <section className="py-8 bg-slate-50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-center py-6 px-6 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-6 md:gap-0">
            
            <div className="flex flex-col items-center justify-center text-center w-full px-4">
               <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center mb-3">
                  <Zap className="w-4 h-4 text-primary" />
               </div>
               <p className="text-3xl font-extrabold text-navy mb-1">99%</p>
               <p className="text-slate-500 font-medium text-xs">{isArabic ? 'دقة المخزون' : 'Inventory Accuracy'}</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center w-full px-4">
               <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center mb-3">
                  <ShoppingBag className="w-4 h-4 text-primary" />
               </div>
               <p className="text-3xl font-extrabold text-navy mb-1">350+</p>
               <p className="text-slate-500 font-medium text-xs">{isArabic ? 'شركات تثق بنا' : 'Companies Trust Us'}</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center w-full px-4">
               <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center mb-3">
                  <PackageOpen className="w-4 h-4 text-primary" />
               </div>
               <p className="text-3xl font-extrabold text-navy mb-1">12M+</p>
               <p className="text-slate-500 font-medium text-xs">{isArabic ? 'منتج تتم إدارته' : 'Products Managed'}</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center w-full px-4">
               <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center mb-3">
                  <RefreshCw className="w-4 h-4 text-primary" />
               </div>
               <p className="text-3xl font-extrabold text-navy mb-1">24/7</p>
               <p className="text-slate-500 font-medium text-xs">{isArabic ? 'عمليات في الوقت الفعلي' : 'Real-time Operations'}</p>
            </div>

         </div>
      </div>
    </section>
  );
}
