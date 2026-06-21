import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ShoppingCart } from 'lucide-react';

import ProductHero from '../components/product/ProductHero';
import WhyEmvive from '../components/product/WhyEmvive';
import InteractiveShowcase from '../components/product/InteractiveShowcase';
import WorkflowTimeline from '../components/product/WorkflowTimeline';
import BentoFeatures from '../components/product/BentoFeatures';
import StatsCounter from '../components/product/StatsCounter';
import PosFaq from '../components/product/PosFaq';
export default function ProductDetail() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';
  const { productId } = useParams();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#0a1121] min-h-screen">
       {/* Sticky Sub Navbar */}
       <div 
         className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
           isScrolled 
             ? 'bg-[#0a1121]/90 backdrop-blur-md shadow-sm border-b border-white/10 translate-y-0' 
             : '-translate-y-full'
         }`}
       >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <ShoppingCart className="w-5 h-5 text-primary" />
              <span className="font-bold text-lg text-white">
                {isArabic ? 'إدارة التجزئة' : 'Retail Inventory'}
              </span>
           </div>
           <div className="flex items-center gap-6">
              <button className="bg-primary hover:bg-primary-hover text-navy px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-sm">
                {isArabic ? 'ابدأ مجاناً' : 'Start Free Trial'}
              </button>
           </div>
         </div>
       </div>

       {/* Fully Assembled Page Layout matching the exact Custom UI */}
       <ProductHero />
       <WhyEmvive />
       <InteractiveShowcase />
       <StatsCounter />
       <WorkflowTimeline />
       <BentoFeatures />
       <PosFaq />
    </div>
  );
}
