import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../LanguageContext';
import { Zap, ShoppingBag, PackageOpen, RefreshCw } from 'lucide-react';
import { stagger, viewportOnce, ease } from '../../utils/animations';

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active || target === 0) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return value;
}

interface StatProps {
  icon: React.ComponentType<{ className?: string }>;
  target: number;
  display?: string;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
}

function Stat({ icon: Icon, target, display, prefix = '', suffix = '', label, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(target, 1400, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease }}
      className="flex flex-col items-center justify-center text-center w-full px-4"
    >
      <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center mb-3">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <p className="text-3xl font-extrabold text-navy mb-1">
        {display ?? `${prefix}${count}${suffix}`}
      </p>
      <p className="text-slate-500 font-medium text-xs">{label}</p>
    </motion.div>
  );
}

export default function StatsCounter() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  return (
    <section className="py-8 bg-slate-50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col md:flex-row justify-between items-center py-6 px-6 divide-y md:divide-y-0 md:divide-x divide-gray-100 gap-6 md:gap-0"
        >
          <Stat icon={Zap} target={99} suffix="%" label={isArabic ? 'دقة المخزون' : 'Inventory Accuracy'} delay={0} />
          <Stat icon={ShoppingBag} target={350} prefix="+" label={isArabic ? 'شركات تثق بنا' : 'Companies Trust Us'} delay={0.12} />
          <Stat icon={PackageOpen} target={12} suffix="M+" label={isArabic ? 'منتج تتم إدارته' : 'Products Managed'} delay={0.24} />
          <Stat icon={RefreshCw} target={0} display="24/7" label={isArabic ? 'عمليات في الوقت الفعلي' : 'Real-time Operations'} delay={0.36} />
        </motion.div>
      </div>
    </section>
  );
}
