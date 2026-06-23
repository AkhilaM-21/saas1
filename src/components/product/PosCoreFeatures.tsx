import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useLanguage } from '../../LanguageContext';
import { Package, Building2, Users, CreditCard, Zap, Smartphone, Store } from 'lucide-react';
import { fadeUp, fadeUpSmall, stagger, viewportOnce, ease } from '../../utils/animations';

export default function PosCoreFeatures() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  const features = [
    { icon: Package, title: 'Centralized Inventory', desc: 'Manage items and track stock movement across outlets and warehouses.' },
    { icon: Building2, title: 'Multi-outlet Management', desc: 'Manage outlets centrally, track sales at each location.' },
    { icon: Users, title: 'Manage Vendor Details', desc: 'Record supplier details, manage transactions, track payment status.' },
    { icon: Zap, title: 'Bill Faster', desc: 'Seamless checkout experience with offline and mobile device billing.' },
    { icon: CreditCard, title: 'Easy Payment Management', desc: 'Accept multiple payment methods like cash, card, and bank transfers.' },
    { icon: Users, title: 'Record Customer Details', desc: 'Track purchases, understand preferences, and send invoices via email.' },
    { icon: Smartphone, title: 'Sell Online', desc: 'Build a mobile store and share links with customers for online orders.' },
    { icon: Store, title: 'In-store Pickup', desc: 'Fulfill orders seamlessly with in-store pickup and home delivery options.' }
  ];

  const arabicFeatures = [
    { icon: Package, title: 'مخزون مركزي', desc: 'أدر العناصر وتتبع حركة المخزون عبر الفروع والمستودعات.' },
    { icon: Building2, title: 'إدارة الفروع المتعددة', desc: 'أدر الفروع مركزياً، وتتبع المبيعات في كل موقع.' },
    { icon: Users, title: 'إدارة الموردين', desc: 'سجل بيانات الموردين وأدر المعاملات وتتبع حالة الدفع.' },
    { icon: Zap, title: 'فوترة أسرع', desc: 'تجربة دفع سلسة مع إمكانية الفوترة دون اتصال بالإنترنت.' },
    { icon: CreditCard, title: 'إدارة المدفوعات بسهولة', desc: 'اقبل طرق دفع متعددة مثل النقد والبطاقات والتحويلات البنكية.' },
    { icon: Users, title: 'سجل بيانات العملاء', desc: 'تتبع المشتريات، وافهم تفضيلاتهم، وأرسل الفواتير عبر البريد.' },
    { icon: Smartphone, title: 'البيع عبر الإنترنت', desc: 'أنشئ متجرًا للهاتف المحمول وشارك الروابط للطلبات عبر الإنترنت.' },
    { icon: Store, title: 'الاستلام من المتجر', desc: 'قم بتلبية الطلبات بسلاسة مع خيارات الاستلام من المتجر والتوصيل.' }
  ];

  const activeFeatures = isArabic ? arabicFeatures : features;

  const cardDirections: Variants[] = [
    { hidden: { opacity: 0, x: -40, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease } } },
    { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } },
    { hidden: { opacity: 0, x: 40, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease } } },
    { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } },
  ];

  return (
    <section className="pt-24 pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpSmall} className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
            {isArabic ? 'الميزات' : 'FEATURES'}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            {isArabic ? 'كل ما تحتاجه لإدارة متجرك.' : 'Everything you need to run your store.'}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {activeFeatures.map((feat, i) => (
            <motion.div
              key={i}
              variants={cardDirections[i % cardDirections.length]}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.10)', scale: 1.01, transition: { duration: 0.22 } }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] cursor-default group"
            >
              <div className="flex flex-col gap-4">
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                >
                  <feat.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <h4 className="text-navy font-bold text-sm mb-1">{feat.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
