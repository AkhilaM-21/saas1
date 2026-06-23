import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../LanguageContext';
import { PackageOpen, RefreshCw, ShoppingCart, TrendingUp } from 'lucide-react';
import { fadeLeft, viewportOnce, ease } from '../../utils/animations';

export default function WorkflowTimeline() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    { icon: PackageOpen, title: isArabic ? 'استلام المخزون' : 'Receive Stock', desc: isArabic ? 'أضف المنتجات إلى مستودعك' : 'Add products to your warehouse' },
    { icon: RefreshCw, title: isArabic ? 'مزامنة المخزون' : 'Sync Inventory', desc: isArabic ? 'تحديثات المخزون الفورية عبر الفروع' : 'Stock updates in real-time across all branches' },
    { icon: ShoppingCart, title: isArabic ? 'الإدارة والبيع' : 'Manage & Sell', desc: isArabic ? 'معالجة الطلبات عبر نقاط البيع بسهولة' : 'Process orders through POS effortlessly' },
    { icon: TrendingUp, title: isArabic ? 'التحليل والنمو' : 'Analyze & Grow', desc: isArabic ? 'احصل على رؤى ونمِ عملك بذكاء' : 'Get insights and grow your business smarter' }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0a1121] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-20 gap-8">

          {/* Header — slides from left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
              {isArabic ? 'كيف يعمل' : 'HOW IT WORKS'}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {isArabic ? 'عملية بسيطة تدير عملك' : 'A simple process that'}<br />
              {isArabic ? '' : 'powers your business'}
            </h2>
          </motion.div>

          {/* Timeline steps */}
          <div className="flex-1 w-full md:w-auto md:ml-12 overflow-x-auto overflow-y-hidden pb-8 md:pb-0 hide-scrollbar">
            <div className="flex items-start min-w-[600px] relative pt-6">

              {/* Animated connecting line */}
              <motion.div
                className="absolute top-12 left-10 h-[1px] border-t-2 border-dashed border-primary/30 z-0"
                initial={{ width: 0 }}
                animate={{ width: isVisible ? 'calc(100% - 5rem)' : 0 }}
                transition={{ duration: 1.5, ease, delay: 0.5 }}
              />

              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.25, ease }}
                  className="flex-1 flex flex-col items-center text-center relative z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-12 h-12 rounded-full border-2 border-primary bg-[#0a1121] flex items-center justify-center shadow-[0_0_15px_rgba(214,154,22,0.3)] mb-4"
                  >
                    <step.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h4 className="text-white font-bold text-sm mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-xs px-4">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
