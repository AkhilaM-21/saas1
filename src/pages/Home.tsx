import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Users, Megaphone, Calculator, Building2, ShieldCheck, Heart, ChevronRight, ChevronLeft, Globe, Rocket, Hexagon, Command, PieChart, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import {
  fadeUpBlur, fadeUp, fadeUpSmall, fadeLeft, fadeRight,
  scaleIn, imageReveal, rotateInX, diagonalIn, diagonalInRight,
  buttonIn, staggerFast, stagger, staggerSlow,
  viewportOnce, ease,
} from '../utils/animations';
import type { Variants } from 'framer-motion';

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeValueIndex, setActiveValueIndex] = useState(0);

  // Ref for persona section parallax
  const personaRef = useRef<HTMLElement>(null);

  const { scrollYProgress: personaProgress } = useScroll({
    target: personaRef,
    offset: ['start end', 'end start'],
  });
  const personaBgY = useTransform(personaProgress, [0, 1], ['0%', '20%']);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValueIndex((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: isArabic ? "إدارة لا حدود لها" : "Limitless Management",
      desc: isArabic ? "منصة ذكية للشركات المبتكرة مع لوحات قياس متطورة." : "Smart platform for innovative companies with advanced dashboards.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "from-primary to-primary-hover"
    },
    {
      title: isArabic ? "أمان وثقة في كل تفاعل" : "Security and Trust in Every Interaction",
      desc: isArabic ? "نحن نستخدم أحدث تقنيات التشفير لضمان سرية بيانات شركتك." : "We use the latest encryption technologies to ensure your company data stays secure.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      color: "from-primary to-pink-600"
    },
    {
      title: isArabic ? "تحليلات فورية" : "Real-time Analytics",
      desc: isArabic ? "قم بتحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ بضغطة زر." : "Turn complex data into actionable insights at the click of a button.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
      color: "from-primary to-primary-hover"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="pt-20 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section 1: Hero ── */}
        <section className="relative pt-14 pb-3 mb-2 overflow-visible text-center">
          <div className="absolute top-[-200px] left-[calc(-50vw+50%)] w-[100vw] bottom-[-100px] z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-white">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
            }}></div>
            <div className="absolute top-[5%] left-[25%] w-[50%] h-[50%] rounded-full bg-primary-50/50 mix-blend-multiply filter blur-[120px]"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 pt-0">
            <motion.h1
              variants={fadeUpBlur}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl lg:text-[3rem] font-medium text-[#0F172A] tracking-normal mb-3 lg:mb-5 leading-[1.3] max-w-5xl mx-auto"
            >
              {isArabic ? (
                <>
                  سحابة العمليات المتكاملة للشركات الطموحة<br className="hidden md:block" />
                  في السوق المتوسطة.
                </>
              ) : (
                <>
                  The integrated operations cloud for<br className="hidden md:block" />
                  ambitious mid-market companies.
                </>
              )}
            </motion.h1>

            <motion.p
              variants={fadeUpSmall}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-[1.25rem] text-[#475569] font-normal mb-5 lg:mb-7 max-w-4xl mx-auto leading-[1.6]"
            >
              {isArabic
                ? "نجمع بين تخطيط موارد المؤسسات، والموارد البشرية والرواتب، وأتمتة سير العمل، والتقارير، وبناء التطبيقات في منصة واحدة حديثة جاهزة للغة العربية لتمكين القادة من التحكم الفوري بدون تعقيد."
                : "Bringing ERP, HR & payroll, workflow automation, reporting, and app building into one modern, Arabic-ready platform so leaders get real-time control without enterprise-grade complexity."}
            </motion.p>

            <motion.div
              variants={buttonIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center mb-0"
            >
              <div className="relative">
                <div className={`absolute ${isArabic ? 'left-[100%] ml-4 transform -scale-x-100' : 'right-[100%] mr-4'} top-1/2 -translate-y-1/2 w-32 h-16 md:w-40 md:h-20 hidden sm:block pointer-events-none text-brandblue`}>
                  <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                    <path d="M 10 70 C 40 20, 100 10, 80 50 C 60 90, 40 50, 90 40 C 140 30, 160 50, 185 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 8" />
                    <path d="M 165 35 L 185 50 L 165 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <motion.path
                      d="M 175 20 Q 175 27 182 27 Q 175 27 175 34 Q 175 27 168 27 Q 175 27 175 20 Z"
                      fill="currentColor"
                      opacity="0.8"
                      style={{ transformOrigin: '175px 27px' }}
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M 180 75 Q 180 80 185 80 Q 180 80 180 85 Q 180 80 175 80 Q 180 80 180 75 Z"
                      fill="currentColor"
                      opacity="0.6"
                      style={{ transformOrigin: '180px 80px' }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                  </svg>
                </div>
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(214,154,22,0.55)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="bg-primary hover:bg-primary-hover text-navy px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wide uppercase transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(214,154,22,0.3)]"
                >
                  {isArabic ? 'ابدأ الآن' : 'GET STARTED'}
                  <span dir="ltr">{isArabic ? '<' : '>'}</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Section 1.5: Zoho-Style Carousel ── */}
        <motion.section
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-24 lg:mb-32 max-w-[95%] sm:max-w-[85%] xl:max-w-6xl mx-auto relative group"
        >
          <div className="w-full bg-white border border-brandblue/30 rounded-2xl p-1.5 lg:p-2 shadow-sm relative">
            <div className={`absolute bottom-0 ${isArabic ? 'right-4 sm:right-10' : 'left-4 sm:left-10'} translate-y-1/2 flex items-center gap-2 sm:gap-4 z-30 w-[90%] sm:w-auto`}>
              <div className="flex shrink-0 items-center gap-1 bg-white rounded-full p-1 border border-brandblue/30 shadow-sm">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white text-brandblue hover:bg-brandblue/5 transition-all"
                >
                  <ChevronLeft className={`w-4 h-4 sm:w-5 sm:h-5 ${isArabic ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white text-brandblue hover:bg-brandblue/5 transition-all"
                >
                  <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isArabic ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className="bg-white rounded-full shrink-0">
                <Link to="/products" className="inline-block bg-brandblue/5 hover:bg-brandblue/10 text-brandblue px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-bold tracking-wide uppercase shadow-sm border border-brandblue/30 transition-all whitespace-nowrap">
                  {isArabic ? 'استكشف المنصة' : 'Explore Platform'}
                </Link>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row bg-white rounded-lg min-h-[240px] lg:min-h-[220px] lg:h-[250px]">
              <div className="w-full lg:w-7/12 p-6 pb-12 sm:p-8 lg:p-12 flex flex-col justify-center items-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: isArabic ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isArabic ? -10 : 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium text-navy leading-tight mb-3 lg:mb-4 tracking-tight">
                      {slides[currentSlide].title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl font-light">
                      {slides[currentSlide].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="w-full lg:w-5/12 h-[200px] lg:h-auto relative bg-transparent flex items-center justify-center p-4 lg:p-6 lg:pr-8 z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-4 lg:-bottom-8 lg:top-4 lg:-right-8 lg:left-4 rounded-xl overflow-hidden shadow-[0_12px_40px_rgb(0,0,0,0.15)] bg-white border border-slate-100/50"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} opacity-5 mix-blend-color z-10 pointer-events-none`}></div>
                    <img src={slides[currentSlide].image} className="w-full h-full object-cover object-center" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.section>


        {/* ── Section 2: Trusted Partners ── */}
        <section className="mb-24 lg:mb-32 relative py-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/80 to-transparent pointer-events-none -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mb-16 flex flex-col items-center"
            >
              <motion.p variants={fadeUpSmall} className="text-brandblue font-bold tracking-[0.15em] uppercase text-xs mb-4">
                {isArabic ? 'شركاؤنا' : 'OUR PARTNERS'}
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-navy mb-6">
                {isArabic ? 'موثوق به من قبل قادة الصناعة' : 'Trusted by industry leaders'}
              </motion.h2>
              <motion.p variants={fadeUpSmall} className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
                {isArabic ? 'نحن نتعاون مع كبار مزودي التكنولوجيا والمنظمات لتقديم قيمة استثنائية لعملائنا.' : 'We collaborate with leading technology providers and organizations to deliver exceptional value to our customers.'}
              </motion.p>
              <motion.div variants={fadeUpSmall} className="h-[3px] w-16 bg-brandblue rounded-full flex items-center justify-end relative">
                <div className="w-1.5 h-1.5 bg-brandblue rounded-full absolute -right-4"></div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-4"
            >
              {[
                { name: 'Microsoft', icon: <div className="flex items-center gap-1.5 font-semibold text-lg text-slate-600"><div className="grid grid-cols-2 gap-[1px]"><div className="w-2 h-2 bg-[#F25022]"></div><div className="w-2 h-2 bg-[#7FBA00]"></div><div className="w-2 h-2 bg-[#00A4EF]"></div><div className="w-2 h-2 bg-[#FFB900]"></div></div> Microsoft</div> },
                { name: 'AWS', icon: <div className="font-bold text-2xl tracking-tighter text-[#232F3E]">aws</div> },
                { name: 'Google Cloud', icon: <div className="font-medium text-[15px] text-slate-600 flex items-center gap-1.5"><div className="flex -space-x-1"><div className="w-2 h-2 rounded-full bg-[#EA4335]"></div><div className="w-2 h-2 rounded-full bg-[#FBBC05]"></div><div className="w-2 h-2 rounded-full bg-[#34A853]"></div><div className="w-2 h-2 rounded-full bg-[#4285F4]"></div></div>Google Cloud</div> },
                { name: 'Oracle', icon: <div className="font-bold text-lg tracking-widest text-[#C74634]">ORACLE</div> },
                { name: 'Dell', icon: <div className="font-bold text-xl text-[#0076CE] tracking-wider">DELL</div> },
                { name: 'VMware', icon: <div className="font-bold text-xl text-slate-500 tracking-tight">vmware</div> },
                { name: 'Intel', icon: <div className="font-bold text-2xl text-[#0071C5]">intel.</div> },
                { name: 'Stripe', icon: <div className="font-bold text-xl text-[#635BFF] tracking-tight">stripe</div> },
                { name: 'Salesforce', icon: <div className="font-medium text-lg text-[#00A1E0] flex items-center"><Cloud className="w-5 h-5 mr-1" fill="#00A1E0" stroke="none"/> salesforce</div> },
                { name: 'Cisco', icon: <div className="font-bold text-base text-[#049FD9] flex flex-col items-center"><div className="flex items-end gap-[2px] mb-0.5"><div className="w-1 h-2 bg-[#049FD9]"></div><div className="w-1 h-3 bg-[#049FD9]"></div><div className="w-1 h-4 bg-[#049FD9]"></div><div className="w-1 h-3 bg-[#049FD9]"></div><div className="w-1 h-2 bg-[#049FD9]"></div></div>CISCO</div> },
                { name: 'SAP', icon: <div className="font-bold text-lg text-white bg-[#008FD3] px-1.5 py-0.5 rounded-sm tracking-wider">SAP</div> },
                { name: 'RedHat', icon: <div className="font-bold text-lg text-black flex items-center gap-1"><div className="w-4 h-4 bg-red-600 rounded-t-full rounded-br-full relative"><div className="w-full h-1 bg-black absolute bottom-[2px]"></div></div> redhat.</div> },
                { name: 'IBM', icon: <div className="font-bold text-2xl text-[#0530AD] tracking-widest border-t-2 border-b-2 border-[#0530AD] leading-none py-0.5">IBM</div> },
                { name: 'Sophos', icon: <div className="font-bold text-lg text-[#0066CC] tracking-widest">SOPHOS</div> }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.82, filter: 'blur(8px)' },
                    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  whileHover={{ y: -4, scale: 1.04, transition: { duration: 0.2 } }}
                  className="bg-white/40 backdrop-blur-md border border-white/80 rounded-2xl p-4 flex justify-center items-center h-16 sm:h-20 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/60 transition-colors duration-300 cursor-pointer group"
                >
                  <div className="transition-all duration-500 transform group-hover:scale-105">
                    {partner.icon}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Section 3: Built for your team (Personas) ── */}
        <section
          ref={personaRef}
          className={`relative py-12 lg:py-16 w-[100vw] ${isArabic ? 'right-[calc(-50vw+50%)]' : 'left-[calc(-50vw+50%)]'} overflow-hidden`}
        >
          <motion.div
            style={{ y: personaBgY }}
            className={`absolute top-0 bottom-0 ${isArabic ? 'right-0 w-full lg:right-[5vw] lg:w-[80vw]' : 'left-0 w-full lg:left-[5vw] lg:w-[80vw]'} z-0 bg-navy`}
          >
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Office Background" className="w-full h-full object-cover opacity-30 grayscale" />
          </motion.div>

          <div className={`w-full px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-12 ${isArabic ? 'lg:pr-[max(2rem,calc(50vw-38rem))] lg:pl-[5vw]' : 'lg:pl-[max(2rem,calc(50vw-38rem))] lg:pr-[5vw]'}`}>

            {/* Left Side: Content — slides from left */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className={`w-full lg:w-5/12 text-white py-6 lg:py-8 ${isArabic ? 'lg:pl-12' : 'lg:pr-12'}`}
            >
              <p className="text-white font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                {isArabic ? 'خدماتنا' : 'OUR SERVICE'}
              </p>
              <h2 className="text-4xl lg:text-[3rem] font-medium mb-6 leading-tight text-white tracking-tight">
                {isArabic ? 'حلول لكل زاوية' : 'Solutions for every corner'}
              </h2>
              <p className="text-slate-300 text-sm md:text-base mb-10 leading-relaxed max-w-sm">
                {isArabic
                  ? 'احصل على نظام واحد للسجلات يحول طريقة عملك بالكامل، مصمم خصيصاً لاحتياجات كل قسم.'
                  : 'Get a single system of record that transforms the way you work completely, tailored exactly to the needs of every department.'}
              </p>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(214,154,22,0.4)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="bg-primary hover:bg-primary-hover text-navy px-8 py-3.5 text-sm font-bold transition-colors shadow-lg"
              >
                {isArabic ? 'اكتشف المزيد' : 'Discover More'}
              </motion.button>
            </motion.div>

            {/* Right Side: Cards — stagger from right */}
            <div className="w-full lg:w-7/12 relative">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4"
              >
                {[
                  { title: isArabic ? 'العمليات' : 'Operations', desc: isArabic ? 'قل وداعاً للعمليات المجزأة واحصل على رؤية فورية للأداء.' : 'Say goodbye to fragmented processes and gain real-time performance visibility.', icon: Building2 },
                  { title: isArabic ? 'المالية' : 'Finance', desc: isArabic ? 'إغلاق الدفاتر أسرع وتقليل التسويات اليدوية. مستعد للتدقيق دائماً.' : 'Close books faster, reduce manual reconciliations, and stay audit-ready.', icon: Calculator },
                  { title: isArabic ? 'الموارد البشرية' : 'Human Resources', desc: isArabic ? 'معالجة دقيقة للرواتب وبوابات خدمة ذاتية لتمكين الموظفين.' : 'Accurate payroll processing and self-service portals to empower employees.', icon: Users },
                  { title: isArabic ? 'تقنية المعلومات' : 'IT & Systems', desc: isArabic ? 'بنية سحابية حديثة تقلل أعباء البنية التحتية مع خيارات واجهة قوية.' : 'Modern cloud architecture reduces infrastructure burden with robust API options.', icon: ShieldCheck },
                ].map((persona, i) => (
                  <motion.div
                    key={i}
                    variants={i % 2 === 0 ? diagonalIn : diagonalInRight}
                    whileHover={{ y: -6, boxShadow: '0 30px 60px -15px rgba(0,0,0,0.25)', transition: { duration: 0.25 } }}
                    className="bg-white px-8 py-4 lg:px-12 lg:py-5 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.2)] transition-shadow group flex flex-col justify-start relative"
                  >
                    <div className={`text-[#E5A93C] mb-2 group-hover:-translate-y-1 transition-transform`}>
                      <persona.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-1 tracking-tight">{persona.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{persona.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </section>

        {/* ── Section 4: Core Values ── rotateX effect on enter */}
        <section className={`w-[100vw] ${isArabic ? 'right-[calc(-50vw+50%)]' : 'left-[calc(-50vw+50%)]'} relative py-12 lg:py-24 overflow-hidden bg-white`}
          style={{ perspective: '1400px' }}
        >
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <img
              src="/skyline.jpg"
              alt="City Skyline"
              className={`absolute bottom-0 w-full md:w-[40%] lg:w-[32%] object-contain object-bottom mix-blend-multiply opacity-50 ${isArabic ? 'left-0 transform -scale-x-100' : 'right-0'}`}
            />
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mb-24 flex flex-col items-center"
            >
              <motion.h2
                variants={fadeUpBlur}
                className="text-4xl md:text-[2.75rem] font-bold text-navy mb-6 max-w-3xl leading-tight tracking-tight mx-auto"
              >
                {isArabic ? 'القيم الأساسية والمبادئ التي تحركنا' : 'The core values and principles that drive us'}
              </motion.h2>
              <motion.div variants={fadeUpSmall} className="h-[3px] w-16 bg-brandblue rounded-full flex items-center justify-end relative">
                <div className="w-1.5 h-1.5 bg-brandblue rounded-full absolute -right-4"></div>
              </motion.div>
            </motion.div>

            <div className={`w-full lg:w-[65%] ${isArabic ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
              <motion.div
                variants={staggerSlow}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16"
              >
                {[
                  { icon: Globe, titleEn: 'Long-term commitment', titleAr: 'التزام طويل الأمد', descEn: '30+ years of running a profitable organization gives us a good sense of challenges that a growing business faces. We take pride in running a sustainable business that\'s powered by you, our customer.', descAr: 'أكثر من 30 عامًا من إدارة مؤسسة مربحة تمنحنا إحساسًا جيدًا بالتحديات التي تواجهها الأعمال المتنامية. نحن نفخر بإدارة عمل مستدام مدعوم بك، عميلنا.', idx: 0 },
                  { icon: Heart, titleEn: 'Customer-first philosophy', titleAr: 'فلسفة العميل أولاً', descEn: 'In all these years, it\'s our customers\' trust and goodwill that has helped us establish a strong position in the market. No matter the size of your business, we\'re here to help you grow.', descAr: 'في كل هذه السنوات، فإن ثقة عملائنا وحسن نيتهم هي التي ساعدتنا على تأسيس مكانة قوية في السوق. بغض النظر عن حجم عملك، نحن هنا لمساعدتك على النمو.', idx: 1 },
                  { icon: ShieldCheck, titleEn: 'Privacy and security as a priority', titleAr: 'الخصوصية والأمان كأولوية', descEn: 'We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.', descAr: 'نحن لا نملك بياناتك أو نبيعها، وبالتأكيد لا نعتمد على نماذج الأعمال القائمة على الإعلانات. الطريقة الوحيدة التي نجني بها المال هي من رسوم ترخيص البرامج التي تدفعها لنا.', idx: 2 },
                  { icon: Rocket, titleEn: 'Focus on research and development', titleAr: 'التركيز على البحث والتطوير', descEn: 'Software is our craft and we back it up with our relentless investments in R&D. So much so that we prefer to own the entire technology stack, including running our data centers globally.', descAr: 'البرمجيات هي حرفتنا ونحن ندعمها باستثماراتنا المستمرة في البحث والتطوير. لدرجة أننا نفضل امتلاك مجموعة التكنولوجيا بأكملها، بما في ذلك تشغيل مراكز البيانات الخاصة بنا عالميًا.', idx: 3 },
                ].map(({ icon: Icon, titleEn, titleAr, descEn, descAr, idx }) => (
                  <motion.div
                    key={idx}
                    variants={rotateInX}
                    className={`flex flex-col sm:flex-row items-start gap-6 group transition-all duration-700 ${activeValueIndex === idx ? 'scale-105' : 'scale-100'}`}
                  >
                    <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-primary-50 text-primary transition-transform duration-500 group-hover:scale-110">
                      <Icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-navy mb-3">{isArabic ? titleAr : titleEn}</h3>
                      <p className="text-slate-500 leading-relaxed text-[15px]">{isArabic ? descAr : descEn}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Section 5: The EMVIVE Stack (6 Products) ── */}
        <section
          className={`mb-16 lg:mb-24 relative pt-16 pb-12 lg:pt-28 lg:pb-24 bg-slate-800 overflow-hidden w-[100vw] ${isArabic ? 'right-[calc(-50vw+50%)]' : 'left-[calc(-50vw+50%)]'}`}
        >
          <div className={`absolute top-0 left-0 w-full overflow-hidden leading-none z-0 ${isArabic ? 'transform -scale-x-100' : ''}`}>
            <svg className="relative block w-full h-[20px] lg:h-[40px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path className="fill-white" d="M0,0 L1440,0 L1440,100 L800,100 C740,100 740,0 680,0 Z"></path>
            </svg>
          </div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mb-16 flex flex-col items-center"
            >
              <motion.p variants={fadeUpSmall} className="text-brandblue font-bold tracking-[0.15em] uppercase text-xs mb-4">
                {isArabic ? 'المنتجات' : 'OUR PRODUCTS'}
              </motion.p>
              <motion.h2 variants={fadeUpBlur} className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                {isArabic ? 'مجموعة متكاملة واحدة' : 'One Integrated Stack'}
              </motion.h2>
              <motion.div variants={fadeUpSmall} className="h-[3px] w-16 bg-brandblue rounded-full flex items-center justify-end relative mb-6">
                <div className="w-1.5 h-1.5 bg-brandblue rounded-full absolute -right-4"></div>
              </motion.div>
              <motion.p variants={fadeUpSmall} className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                {isArabic ? 'كل ما تحتاجه لإدارة عملياتك، بدون تعقيد الأنظمة القديمة.' : 'Everything you need to run your operations, without the complexity of legacy systems.'}
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {[
                { name: isArabic ? 'نظام تخطيط موارد المؤسسات' : 'Cloud ERP', desc: isArabic ? 'محاسبة ومخزون متوافق مع ضريبة القيمة المضافة.' : 'Accounting, inventory, and sales compliant with ZATCA and local VAT.', features: ['Financials', 'Supply Chain', 'Order Mgmt'], icon: Cloud, theme: { text: 'text-primary', bg: 'bg-primary-50', border: 'border-primary-100', hover: 'group-hover:text-primary-hover' }, decoration: () => (<><div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#F9EAD0_2px,transparent_2px)] bg-[length:12px_12px] opacity-60"></div><div className="absolute bottom-0 right-0 w-[120%] h-32 bg-gradient-to-tr from-transparent to-primary-50/80 rounded-tl-[100px] -z-10 translate-x-12 translate-y-8"></div></>) },
                { name: isArabic ? 'الموارد البشرية والرواتب' : 'HR & Payroll', desc: isArabic ? 'حساب آلي للرواتب متوافق مع قوانين العمل.' : 'Automated salary calculations localized for GCC and India labor laws.', features: ['Payroll', 'Time Tracking', 'Self-Service'], icon: Users, theme: { text: 'text-primary', bg: 'bg-primary-50', border: 'border-primary-100', hover: 'group-hover:text-primary-hover' }, decoration: () => (<><div className="absolute -bottom-16 -right-16 w-64 h-64 border-[1px] border-primary-100/80 rounded-full"></div><div className="absolute -bottom-8 -right-8 w-48 h-48 border-[1px] border-primary-100/80 rounded-full"></div><div className="absolute bottom-0 right-0 w-32 h-32 border-[1px] border-primary-100/80 rounded-tl-full bg-primary-50/50"></div></>) },
                { name: isArabic ? 'إدارة علاقات العملاء' : 'CRM & Sales', desc: isArabic ? 'إدارة العملاء المحتملين والمبيعات والعلاقات.' : 'Manage leads, pipelines, and customer relationships seamlessly.', features: ['Lead Mgmt', 'Forecasting', 'Automations'], icon: PieChart, theme: { text: 'text-primary', bg: 'bg-primary-50', border: 'border-primary-100', hover: 'group-hover:text-primary-hover' }, decoration: () => (<><div className="absolute top-6 right-6 w-24 h-24 bg-[radial-gradient(#F9EAD0_2px,transparent_2px)] bg-[length:10px_10px] opacity-80"></div><div className="absolute bottom-0 right-0 w-32 h-32 border-l-2 border-t-2 border-primary-100 rounded-tl-full bg-primary-50/50"></div></>) },
                { name: isArabic ? 'التقارير المتقدمة' : 'Advanced Reporting', desc: isArabic ? 'لوحات تحكم جاهزة للمبيعات والتدفق النقدي.' : 'Pre-built management dashboards for sales, cash flow, and HR metrics.', features: ['Dashboards', 'Data Export', 'Scheduled'], icon: Calculator, theme: { text: 'text-primary', bg: 'bg-primary-50', border: 'border-primary-100', hover: 'group-hover:text-primary-hover' }, decoration: () => (<><div className="absolute bottom-0 right-16 w-6 h-24 bg-primary-100/40 rounded-t-md"></div><div className="absolute bottom-0 right-8 w-6 h-16 bg-primary-100/60 rounded-t-md"></div><div className="absolute bottom-0 right-0 w-6 h-32 bg-primary-100/30 rounded-t-md"></div></>) },
                { name: isArabic ? 'أتمتة سير العمل' : 'Workflow Automation', desc: isArabic ? 'تسريع الموافقات والطلبات اليومية.' : 'Speed up everyday approvals and cross-department requests.', features: ['Visual Builder', 'Approvals', 'Notifications'], icon: Hexagon, theme: { text: 'text-primary', bg: 'bg-primary-50', border: 'border-primary-100', hover: 'group-hover:text-primary-hover' }, decoration: () => (<><div className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-32 border-l-[3px] border-dashed border-primary-100 rounded-l-full"></div><div className="absolute bottom-0 right-0 w-32 h-24 bg-primary-50/60 rounded-tl-full blur-md"></div></>) },
                { name: isArabic ? 'منشئ التطبيقات' : 'No-Code App Builder', desc: isArabic ? 'إنشاء سير عمل مخصص ونماذج داخلية.' : 'Create custom internal apps and forms without writing any code.', features: ['Custom Forms', 'Databases', 'Publishing'], icon: Command, theme: { text: 'text-primary', bg: 'bg-primary-50', border: 'border-primary-100', hover: 'group-hover:text-primary-hover' }, decoration: () => (<><div className="absolute bottom-6 right-16 w-16 h-16 bg-primary-100/40 rotate-45 rounded-lg"></div><div className="absolute -bottom-4 right-4 w-20 h-20 bg-primary-100/60 rotate-45 rounded-xl"></div></>) },
              ].map((app, i) => {
                // Alternate card entrance directions: left, bottom, right pattern
                const cardVariants: Variants[] = [
                  { hidden: { opacity: 0, x: -50, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease } } },
                  { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } },
                  { hidden: { opacity: 0, x: 50, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease } } },
                  { hidden: { opacity: 0, x: -50, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease } } },
                  { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } },
                  { hidden: { opacity: 0, x: 50, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease } } },
                ];
                return (
                  <motion.div
                    key={i}
                    variants={cardVariants[i]}
                    whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.14)', transition: { duration: 0.25 } }}
                    className="bg-white border border-slate-200 p-8 rounded-2xl transition-colors duration-300 cursor-pointer group flex flex-col h-full relative overflow-hidden z-10"
                  >
                    <div className="absolute inset-0 pointer-events-none -z-10">
                      <app.decoration />
                    </div>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 border ${app.theme.border} bg-white transition-colors duration-300 relative z-20`}>
                      <app.icon className={`w-6 h-6 ${app.theme.text}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3 tracking-tight relative z-20">{app.name}</h3>
                    <p className="text-slate-500 leading-relaxed text-[14px] mb-6 flex-grow relative z-20">{app.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto mb-6 relative z-20">
                      {app.features.map((feature, idx) => (
                        <span key={idx} className={`bg-slate-50 border border-slate-100 ${app.theme.text} opacity-80 text-[11px] px-3 py-1.5 rounded-full font-bold group-hover:${app.theme.bg} ${app.theme.hover} group-hover:${app.theme.border} transition-colors`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── Section 5.5: Global Presence ── */}
        <section className={`mb-16 lg:mb-24 w-[100vw] ${isArabic ? 'right-[calc(-50vw+50%)]' : 'left-[calc(-50vw+50%)]'} relative bg-[#f4f6f8] py-8 lg:py-10 overflow-hidden border-y border-slate-200`}>
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center mb-8 flex flex-col items-center"
            >
              <motion.h2 variants={fadeUpBlur} className="text-4xl lg:text-5xl font-extrabold text-navy-light mb-4 tracking-tight">
                {isArabic ? 'نحن عالميون لخدمتك' : "We're global to privilege you"}
              </motion.h2>
              <motion.p variants={fadeUpSmall} className="text-slate-500 text-sm max-w-xl leading-relaxed text-center">
                {isArabic
                  ? 'مع سنوات من الخبرة في بناء برمجيات المؤسسات، قمنا بتوسيع وجودنا العالمي لتقديم الدعم المحلي في مناطق رئيسية.'
                  : 'With years of expertise in building enterprise software, we have expanded our global presence to deliver localized support in key regions.'}
              </motion.p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-4 mt-8">

              {/* Left stats */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="w-full lg:w-1/5 flex flex-row lg:flex-col justify-around gap-8 lg:gap-24 order-2 lg:order-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 relative flex flex-col items-center">
                    <Megaphone className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    <div className="w-4 h-[2px] bg-primary/30 mt-2"></div>
                  </div>
                  <span className="text-4xl md:text-5xl font-extrabold text-navy-light tracking-tighter mb-2">+10</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isArabic ? 'جوائز' : 'AWARDS'}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 relative flex flex-col items-center">
                    <Calculator className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    <div className="w-4 h-[2px] bg-primary/30 mt-2"></div>
                  </div>
                  <span className="text-4xl md:text-5xl font-extrabold text-navy-light tracking-tighter mb-2">+190</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isArabic ? 'دراسات حالة' : 'CASE STUDIES'}</span>
                </div>
              </motion.div>

              {/* Center map */}
              <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="w-full lg:w-3/5 order-1 lg:order-2 relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.5/1] flex items-center justify-center opacity-90 scale-100 my-4 lg:my-0"
              >
                <img
                  src="https://commons.wikimedia.org/wiki/Special:FilePath/World_map_(blue_dots).svg"
                  alt="Dotted World Map"
                  className="absolute inset-0 w-full h-full object-contain grayscale opacity-40 mix-blend-multiply"
                />
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 59 47 Q 66 38 71 52" fill="none" stroke="currentColor" strokeWidth="0.15" className="text-primary opacity-70" />
                  <path d="M 59 47 Q 66 38 71 52" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="0.5 0.5" className="text-primary opacity-100" />
                </svg>
                <div className="absolute top-[47%] left-[59%] group -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 bg-[#ff5a00] rounded-full ring-4 ring-[#ff5a00]/30 animate-pulse relative z-10 cursor-pointer"></div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-4 py-2 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity w-max pointer-events-none z-20">
                    <p className="text-primary font-bold text-xs uppercase tracking-wider">{isArabic ? 'السعودية' : 'Saudi Arabia'}</p>
                    <p className="text-slate-600 text-[10px] mt-0.5">HQ / Hub</p>
                  </div>
                </div>
                <div className="absolute top-[52%] left-[71%] group -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-[#ff5a00] rounded-full ring-4 ring-[#ff5a00]/30 relative z-10 cursor-pointer"></div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-4 py-2 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity w-max pointer-events-none z-20">
                    <p className="text-primary font-bold text-xs uppercase tracking-wider">{isArabic ? 'الهند' : 'India'}</p>
                    <p className="text-slate-600 text-[10px] mt-0.5">Regional Office</p>
                  </div>
                </div>
              </motion.div>

              {/* Right stats */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="w-full lg:w-1/5 flex flex-row lg:flex-col justify-around gap-8 lg:gap-24 order-3"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 relative flex flex-col items-center">
                    <Users className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    <div className="w-4 h-[2px] bg-primary/30 mt-2"></div>
                  </div>
                  <span className="text-4xl md:text-5xl font-extrabold text-navy-light tracking-tighter mb-2">+2,781</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isArabic ? 'عملاء' : 'CUSTOMERS'}</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 relative flex flex-col items-center">
                    <Building2 className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    <div className="w-4 h-[2px] bg-primary/30 mt-2"></div>
                  </div>
                  <span className="text-4xl md:text-5xl font-extrabold text-navy-light tracking-tighter mb-2">2</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{isArabic ? 'مكاتب' : 'OFFICES'}</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
