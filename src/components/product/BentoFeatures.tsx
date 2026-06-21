import React from 'react';
import { useLanguage } from '../../LanguageContext';
import { Package, MonitorSmartphone, ShoppingCart, BarChart3, Bell, ScanLine, Users, FileText } from 'lucide-react';

export default function BentoFeatures() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  const features = [
    { icon: Package, title: 'Inventory Management', desc: 'Track stock in real-time across multiple locations.' },
    { icon: MonitorSmartphone, title: 'POS Management', desc: 'Fast, reliable, and easy-to-use point of sale.' },
    { icon: ShoppingCart, title: 'Purchase Management', desc: 'Manage suppliers, purchase orders & bills.' },
    { icon: BarChart3, title: 'Sales Analytics', desc: 'Deep insights into sales and profitability.' },
    { icon: Bell, title: 'Smart Alerts', desc: 'Get notified for low stock, expiring items & more.' },
    { icon: ScanLine, title: 'Barcode Scanning', desc: 'Scan, search, and manage products instantly.' },
    { icon: Users, title: 'User Roles & Permissions', desc: 'Control access for your team members.' },
    { icon: FileText, title: 'Reports & Export', desc: 'Export detailed reports in multiple formats.' }
  ];

  const arabicFeatures = [
    { icon: Package, title: 'إدارة المخزون', desc: 'تتبع المخزون في الوقت الفعلي عبر مواقع متعددة.' },
    { icon: MonitorSmartphone, title: 'إدارة نقاط البيع', desc: 'نظام نقاط بيع سريع وموثوق وسهل الاستخدام.' },
    { icon: ShoppingCart, title: 'إدارة المشتريات', desc: 'إدارة الموردين وأوامر الشراء والفواتير.' },
    { icon: BarChart3, title: 'تحليلات المبيعات', desc: 'رؤى عميقة حول المبيعات والربحية.' },
    { icon: Bell, title: 'تنبيهات ذكية', desc: 'احصل على إشعارات بانخفاض المخزون وتواريخ الصلاحية.' },
    { icon: ScanLine, title: 'مسح الباركود', desc: 'امسح وابحث وأدر المنتجات على الفور.' },
    { icon: Users, title: 'أدوار وصلاحيات المستخدمين', desc: 'تحكم في صلاحيات الوصول لأعضاء فريقك.' },
    { icon: FileText, title: 'التقارير والتصدير', desc: 'تصدير تقارير مفصلة بصيغ متعددة.' }
  ];

  const activeFeatures = isArabic ? arabicFeatures : features;

  return (
    <section className="py-12 lg:py-24 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
             {isArabic ? 'الميزات' : 'FEATURES'}
           </p>
           <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
             {isArabic ? 'كل ما تحتاجه. في مكان واحد.' : 'Everything you need. All in one place.'}
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {activeFeatures.map((feat, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all hover:-translate-y-1 cursor-default group">
                 <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                       <feat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                       <h4 className="text-navy font-bold text-sm mb-1">{feat.title}</h4>
                       <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                    </div>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
}
