import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useLanguage } from '../../LanguageContext';
import { RefreshCw, Building2, Bell, BarChart3 } from 'lucide-react';
import { stagger, viewportOnce, ease } from '../../utils/animations';

const cardVariants: Variants[] = [
  { hidden: { opacity: 0, x: -50, rotateY: -8 }, visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.9, ease } } },
  { hidden: { opacity: 0, y: 60, rotateX: 8 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease } } },
  { hidden: { opacity: 0, y: 60, rotateX: 8 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease } } },
  { hidden: { opacity: 0, x: 50, rotateY: 8 }, visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.9, ease } } },
];

export default function WhyEmvive() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  const cards = [
    { icon: RefreshCw, titleEn: 'Real-time Sync', titleAr: 'مزامنة فورية', descEn: 'Instantly sync stock across all branches and warehouses.', descAr: 'مزامنة المخزون فورياً عبر جميع الفروع والمخازن.' },
    { icon: Building2, titleEn: 'Multi-Branch Management', titleAr: 'إدارة الفروع', descEn: 'Manage unlimited branches from a single dashboard.', descAr: 'أدر فروعاً غير محدودة من لوحة تحكم واحدة.' },
    { icon: Bell, titleEn: 'Smart Alerts', titleAr: 'تنبيهات ذكية', descEn: 'Get notified before you run out of stock — never miss a sale.', descAr: 'تلق إشعارات قبل نفاد المخزون — لا تفوت أي عملية بيع.' },
    { icon: BarChart3, titleEn: 'Powerful Analytics', titleAr: 'تحليلات قوية', descEn: 'Make data-driven decisions with advanced insights.', descAr: 'اتخذ قرارات مبنية على البيانات باستخدام رؤى متقدمة.' },
  ];

  return (
    <section className="relative w-full z-20 py-8" style={{ background: 'linear-gradient(to bottom, #0a1121 50%, #f8fafc 50%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ perspective: '1200px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map(({ icon: Icon, titleEn, titleAr, descEn, descAr }, i) => (
            <motion.div
              key={i}
              variants={cardVariants[i]}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 50px rgba(0,0,0,0.12)', transition: { duration: 0.25 } }}
              className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 text-center flex flex-col items-center border border-gray-100 cursor-default"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-16 h-16 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-3">{isArabic ? titleAr : titleEn}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {isArabic ? descAr : descEn}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
