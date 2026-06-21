
import { useLanguage } from '../../LanguageContext';
import { RefreshCw, Building2, Bell, BarChart3 } from 'lucide-react';

export default function WhyEmvive() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  return (
    <section className="relative w-full z-20 py-8" style={{ background: 'linear-gradient(to bottom, #0a1121 50%, #f8fafc 50%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         {/* Cards Container */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 text-center flex flex-col items-center border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mb-6">
                 <RefreshCw className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-lg font-bold text-navy mb-3">{isArabic ? 'مزامنة فورية' : 'Real-time Sync'}</h3>
               <p className="text-sm text-slate-500 leading-relaxed">
                 {isArabic ? 'مزامنة المخزون فورياً عبر جميع الفروع والمخازن.' : 'Instantly sync stock across all branches and warehouses.'}
               </p>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 text-center flex flex-col items-center border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mb-6">
                 <Building2 className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-lg font-bold text-navy mb-3">{isArabic ? 'إدارة الفروع' : 'Multi-Branch Management'}</h3>
               <p className="text-sm text-slate-500 leading-relaxed">
                 {isArabic ? 'أدر فروعاً غير محدودة من لوحة تحكم واحدة.' : 'Manage unlimited branches from a single dashboard.'}
               </p>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 text-center flex flex-col items-center border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mb-6">
                 <Bell className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-lg font-bold text-navy mb-3">{isArabic ? 'تنبيهات ذكية' : 'Smart Alerts'}</h3>
               <p className="text-sm text-slate-500 leading-relaxed">
                 {isArabic ? 'تلق إشعارات قبل نفاد المخزون — لا تفوت أي عملية بيع.' : 'Get notified before you run out of stock — never miss a sale.'}
               </p>
            </div>

            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 text-center flex flex-col items-center border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mb-6">
                 <BarChart3 className="w-6 h-6 text-primary" />
               </div>
               <h3 className="text-lg font-bold text-navy mb-3">{isArabic ? 'تحليلات قوية' : 'Powerful Analytics'}</h3>
               <p className="text-sm text-slate-500 leading-relaxed">
                 {isArabic ? 'اتخذ قرارات مبنية على البيانات باستخدام رؤى متقدمة.' : 'Make data-driven decisions with advanced insights.'}
               </p>
            </div>

         </div>
      </div>
    </section>
  );
}
