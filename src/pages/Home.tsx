import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Megaphone, Calculator, HeadphonesIcon, Building2, ShieldCheck, Heart, ChevronRight, ChevronLeft, Globe2, Cloud, Zap, UserCheck, Network, Server, BarChart3, Building, Waves, Activity, Link2, Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

export default function Home() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: isArabic ? "إدارة لا حدود لها" : "Limitless Management",
      desc: isArabic ? "منصة ذكية للشركات المبتكرة مع لوحات قياس متطورة." : "Smart platform for innovative companies with advanced dashboards.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: isArabic ? "أمان وثقة في كل تفاعل" : "Security and Trust in Every Interaction",
      desc: isArabic ? "نحن نستخدم أحدث تقنيات التشفير لضمان سرية بيانات شركتك." : "We use the latest encryption technologies to ensure your company data stays secure.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: isArabic ? "تحليلات فورية" : "Real-time Analytics",
      desc: isArabic ? "قم بتحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ بضغطة زر." : "Turn complex data into actionable insights at the click of a button.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="pt-24 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 1. Hero Section */}
        <section className="relative pt-12 pb-6 mb-2 overflow-visible text-center">
          {/* Full-width Subtle Grid and Glow Background */}
          <div className="absolute top-[-200px] left-[calc(-50vw+50%)] w-[100vw] bottom-[-100px] z-0 overflow-hidden pointer-events-none bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC] to-white">
            {/* Small light grid lines */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
            }}></div>
            {/* Soft gradient blobs */}
            <div className="absolute top-[5%] left-[25%] w-[50%] h-[50%] rounded-full bg-blue-50/50 mix-blend-multiply filter blur-[120px]"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 pt-0">
            {/* Heading */}
            <h1 className="text-4xl md:text-[3rem] font-medium text-[#0F172A] tracking-normal mb-8 leading-[1.3] max-w-5xl mx-auto">
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
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-[1.25rem] text-[#475569] font-normal mb-12 max-w-4xl mx-auto leading-[1.6]">
              {isArabic
                ? "نجمع بين تخطيط موارد المؤسسات، والموارد البشرية والرواتب، وأتمتة سير العمل، والتقارير، وبناء التطبيقات في منصة واحدة حديثة جاهزة للغة العربية لتمكين القادة من التحكم الفوري بدون تعقيد."
                : "Bringing ERP, HR & payroll, workflow automation, reporting, and app building into one modern, Arabic-ready platform so leaders get real-time control without enterprise-grade complexity."}
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                {/* Pointing Arrow */}
                <div className={`absolute ${isArabic ? 'left-[100%] ml-4 transform -scale-x-100' : 'right-[100%] mr-4'} top-1/2 -translate-y-1/2 w-32 h-16 md:w-40 md:h-20 hidden sm:block pointer-events-none text-blue-500`}>
                  <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                    {/* Horizontal curly loop path */}
                    <path d="M 10 70 C 40 20, 100 10, 80 50 C 60 90, 40 50, 90 40 C 140 30, 160 50, 185 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 8" />
                    {/* Arrowhead */}
                    <path d="M 165 35 L 185 50 L 165 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Sparkle Stars */}
                    <path d="M 175 20 Q 175 27 182 27 Q 175 27 175 34 Q 175 27 168 27 Q 175 27 175 20 Z" fill="currentColor" opacity="0.8" />
                    <path d="M 180 75 Q 180 80 185 80 Q 180 80 180 85 Q 180 80 175 80 Q 180 80 180 75 Z" fill="currentColor" opacity="0.6" />
                  </svg>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] transition-all shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] flex items-center justify-center gap-2">
                  {isArabic ? 'ابدأ مجانًا' : 'GET STARTED FOR FREE'}
                  <span dir="ltr">{isArabic ? '<' : '>'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 1.5 Zoho-Style Carousel */}
        <section className="mb-32 max-w-[85%] xl:max-w-6xl mx-auto relative group">

          {/* Picture Frame Wrapper */}
          <div className="w-full bg-white border border-blue-200 rounded-2xl p-1.5 lg:p-2 shadow-sm relative">

            {/* Bottom Navigation & CTA Buttons (overlapping bottom-left border) */}
            <div className={`absolute bottom-0 ${isArabic ? 'right-10' : 'left-10'} translate-y-1/2 flex items-center gap-4 z-30`}>

              {/* Arrow Group */}
              <div className="flex items-center gap-1 bg-white rounded-full p-1 border border-blue-200 shadow-sm">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 transition-all"
                >
                  <ChevronLeft className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 transition-all"
                >
                  <ChevronRight className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Website Button */}
              <Link to="/products" className="bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 px-6 py-2.5 rounded-full text-[13px] font-bold tracking-wide uppercase shadow-sm transition-all whitespace-nowrap">
                {isArabic ? 'استكشف المنصة' : 'Explore Platform'}
              </Link>

            </div>

            {/* Inner Card */}
            <div className="w-full flex flex-col lg:flex-row bg-white rounded-lg min-h-[250px] lg:h-[300px]">

              {/* Left Text Half */}
              <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center items-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-slate-900 leading-tight mb-4 tracking-tight">
                      {slides[currentSlide].title}
                    </h2>

                    <p className="text-base text-slate-600 leading-relaxed max-w-xl font-light">
                      {slides[currentSlide].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Image Half */}
              <div className="w-full lg:w-5/12 relative bg-transparent flex items-center justify-center p-4 lg:p-6 lg:pr-8 z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-4 lg:-bottom-8 lg:top-4 lg:-right-8 lg:left-4 rounded-xl overflow-hidden shadow-[0_12px_40px_rgb(0,0,0,0.15)] bg-white border border-slate-100/50"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} opacity-5 mix-blend-color z-10 pointer-events-none`}></div>
                    <img src={slides[currentSlide].image} className="w-full h-full object-cover object-center" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>


        {/* 3. The EMVIVE Stack (5 Products) */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{isArabic ? 'مجموعة متكاملة واحدة' : 'One Integrated Stack'}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{isArabic ? 'كل ما تحتاجه لإدارة عملياتك، بدون تعقيد الأنظمة القديمة.' : 'Everything you need to run your operations, without the complexity of legacy systems.'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: isArabic ? 'نظام تخطيط موارد المؤسسات' : 'Cloud ERP', desc: isArabic ? 'محاسبة ومخزون متوافق مع ضريبة القيمة المضافة وهيئة الزكاة (ZATCA).' : 'Accounting, inventory, and sales compliant with ZATCA and local VAT.', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
              { name: isArabic ? 'الموارد البشرية والرواتب' : 'HR & Payroll', desc: isArabic ? 'حساب آلي للرواتب متوافق مع قوانين العمل في الخليج والهند.' : 'Automated salary calculations localized for GCC and India labor laws.', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { name: isArabic ? 'أتمتة سير العمل' : 'Workflow Automation', desc: isArabic ? 'تسريع الموافقات والطلبات اليومية بين الأقسام.' : 'Speed up everyday approvals and cross-department requests.', icon: HeadphonesIcon, color: 'text-purple-600', bg: 'bg-purple-50' },
              { name: isArabic ? 'التقارير المتقدمة' : 'Advanced Reporting', desc: isArabic ? 'لوحات تحكم جاهزة للمبيعات والتدفق النقدي والموارد البشرية.' : 'Pre-built management dashboards for sales, cash flow, and HR metrics.', icon: Calculator, color: 'text-orange-600', bg: 'bg-orange-50' },
              { name: isArabic ? 'منشئ التطبيقات' : 'No-Code App Builder', desc: isArabic ? 'إنشاء سير عمل مخصص ونماذج داخلية بدون برمجة.' : 'Create custom internal apps and forms without writing any code.', icon: Megaphone, color: 'text-rose-600', bg: 'bg-rose-50' },
            ].map((app, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${app.bg} ${app.color} group-hover:scale-110 transition-transform`}>
                  <app.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{app.name}</h3>
                <p className="text-slate-600 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Built for your team (Personas) */}
        <section className="mb-32 relative py-12 lg:py-16 w-[100vw] left-[calc(-50vw+50%)] overflow-hidden">
          {/* Asymmetrical Dark Background (starts 5% from edge, covers 80% of screen) */}
          <div className={`absolute top-0 bottom-0 ${isArabic ? 'right-[5vw] w-[90vw] lg:w-[80vw]' : 'left-[5vw] w-[90vw] lg:w-[80vw]'} z-0 bg-slate-900`}>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Office Background" className="w-full h-full object-cover opacity-30 grayscale" />
          </div>

          <div className="w-full px-4 sm:px-6 lg:pl-[max(2rem,calc(50vw-38rem))] lg:pr-[5vw] relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-12">

            {/* Left Side: Content */}
            <div className={`w-full lg:w-5/12 text-white py-6 lg:py-8 ${isArabic ? 'lg:pl-12' : 'lg:pr-12'}`}>
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
              <button className="bg-[#E5A93C] hover:bg-[#D4982B] text-slate-900 px-8 py-3.5 text-sm font-bold transition-colors shadow-lg">
                {isArabic ? 'اكتشف المزيد' : 'Discover More'}
              </button>
            </div>

            {/* Right Side: 2x2 Grid of Sharp Cards overlapping the background edge */}
            <div className="w-full lg:w-7/12 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                {[
                  { title: isArabic ? 'العمليات' : 'Operations', desc: isArabic ? 'قل وداعاً للعمليات المجزأة واحصل على رؤية فورية للأداء.' : 'Say goodbye to fragmented processes and gain real-time performance visibility.', icon: Building2 },
                  { title: isArabic ? 'المالية' : 'Finance', desc: isArabic ? 'إغلاق الدفاتر أسرع وتقليل التسويات اليدوية. مستعد للتدقيق دائماً.' : 'Close books faster, reduce manual reconciliations, and stay audit-ready.', icon: Calculator },
                  { title: isArabic ? 'الموارد البشرية' : 'Human Resources', desc: isArabic ? 'معالجة دقيقة للرواتب وبوابات خدمة ذاتية لتمكين الموظفين.' : 'Accurate payroll processing and self-service portals to empower employees.', icon: Users },
                  { title: isArabic ? 'تقنية المعلومات' : 'IT & Systems', desc: isArabic ? 'بنية سحابية حديثة تقلل أعباء البنية التحتية مع خيارات واجهة قوية.' : 'Modern cloud architecture reduces infrastructure burden with robust API options.', icon: ShieldCheck },
                ].map((persona, i) => (
                  <div key={i} className="bg-white px-8 py-4 lg:px-12 lg:py-5 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-shadow group flex flex-col justify-start relative">
                    <div className={`text-[#E5A93C] mb-2 group-hover:-translate-y-1 transition-transform`}>
                      <persona.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">{persona.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{persona.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 5. Why EMVIVE Pillars */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{isArabic ? 'توطين يضع المنطقة أولاً' : 'Region-first localization'}</h3>
              <p className="text-slate-600 leading-relaxed">{isArabic ? 'واجهات باللغتين العربية والإنجليزية مع دعم كامل من اليمين لليسار. محاسبة وضرائب مصممة للسعودية والإمارات.' : 'Full Arabic and English interfaces with right-to-left support. Accounting, VAT, and invoicing tailored to Saudi Arabia and the UAE.'}</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><Users className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{isArabic ? 'منصة سحابية واحدة' : 'Single cloud platform'}</h3>
              <p className="text-slate-600 leading-relaxed">{isArabic ? 'تسجيل دخول واحد لتخطيط موارد المؤسسات والموارد البشرية وسير العمل والتقارير. تدفقات جاهزة للعمليات الأساسية.' : 'One login for ERP, HR/payroll, workflows, and reporting. Pre-built flows for everyday operations so your entire company stays aligned.'}</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6"><Building2 className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{isArabic ? 'قيمة في وقت قياسي' : 'Fast time-to-value'}</h3>
              <p className="text-slate-600 leading-relaxed">{isArabic ? 'تنفيذ يُقاس بالأسابيع وليس الأشهر. خطط بداية واضحة لمساعدتك على البدء بخطوات صغيرة ثم التوسع.' : 'Implementation measured in weeks, not months. Guided onboarding and clear starter plans help you start small and grow without friction.'}</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6"><Heart className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{isArabic ? 'مصمم للقادة غير التقنيين' : 'Built for non-technical leaders'}</h3>
              <p className="text-slate-600 leading-relaxed">{isArabic ? 'واجهة بسيطة ولغة واضحة ومُنشئ تطبيقات بدون كود لتمكين المؤسسين والمدراء من التحكم الكامل.' : 'Plain-language UI and a no-code app builder empower founders and managers with limited tech background to take full control.'}</p>
            </div>
          </div>
        </section>

        {/* 5.5 Core Values */}
        <section
          className="relative overflow-hidden w-[100vw] left-[calc(-50vw+50%)]"
          style={{
            background: "#fbfcfe",
            padding: "110px 24px 220px",
          }}
        >
          {/* faint background circles */}
          <div style={{ position: "absolute", top: 150, left: 150, width: 60, height: 60, borderRadius: "50%", background: "#ffe3d6", opacity: 0.8, zIndex: 0 }} />
          <div style={{ position: "absolute", top: -120, left: -160, width: 480, height: 480, borderRadius: "50%", border: "1px solid #e9edf6", zIndex: 0 }} />
          <div style={{ position: "absolute", top: -60, right: -120, width: 380, height: 380, borderRadius: "50%", border: "1px solid #e3e9f5", zIndex: 0 }} />
          <div style={{ position: "absolute", top: 330, right: 30, width: 16, height: 16, borderRadius: "50%", border: "1px solid #c9d3e6", zIndex: 0 }} />
          <div style={{ position: "absolute", top: 480, left: 38, width: 16, height: 16, borderRadius: "50%", background: "#eef3fc", zIndex: 0 }} />
          <div style={{ position: "absolute", bottom: 140, right: 420, width: 32, height: 32, borderRadius: "50%", background: "#fbe7ee", zIndex: 0 }} />

          {/* dotted grid clusters, top corners */}
          <div aria-hidden style={{ position: "absolute", top: 95, left: 110, width: 90, height: 90, backgroundImage: "radial-gradient(circle, #c7cfe2 1.2px, transparent 1.2px)", backgroundSize: "14px 14px", maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 75%)", opacity: 0.7, zIndex: 0 }} />
          <div aria-hidden style={{ position: "absolute", top: 95, right: 110, width: 90, height: 90, backgroundImage: "radial-gradient(circle, #c7cfe2 1.2px, transparent 1.2px)", backgroundSize: "14px 14px", maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)", WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 75%)", opacity: 0.7, zIndex: 0 }} />

          {/* heading */}
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <h2 style={{ fontSize: 44, lineHeight: 1.18, fontWeight: 700, color: "#0d1320", letterSpacing: "-0.5px", margin: 0 }}>
              {isArabic ? (
                <>القيم والمبادئ الأساسية<br />التي تحركنا</>
              ) : (
                <>The core values and principles<br />that drive us</>
              )}
            </h2>
            <div style={{ position: "relative", width: 56, margin: "28px auto 0" }}>
              <div style={{ width: 56, height: 4, borderRadius: 2, background: "#3b6df0" }} />
              <div style={{ position: "absolute", right: -16, top: "50%", transform: "translateY(-50%)", width: 6, height: 6, borderRadius: "50%", background: "#b9c6e8" }} />
            </div>
          </div>

          {/* feature grid */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "80px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 60, rowGap: 56 }}>
            {/* Value 1 */}
            <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: "#eaf1fd", color: "#3b6df0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 24, height: 24 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
                  </svg>
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0d1320", margin: "0 0 10px" }}>{isArabic ? 'أقلمة تأتي أولاً' : 'Region-first localization'}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5b6478", margin: 0 }}>{isArabic ? 'واجهات عربية وإنجليزية كاملة مع دعم من اليمين لليسار. محاسبة وضريبة قيمة مضافة وفواتير مصممة خصيصاً للسعودية والإمارات.' : 'Full Arabic and English interfaces with right-to-left support. Accounting, VAT, and invoicing tailored to Saudi Arabia and the UAE.'}</p>
              </div>
            </div>

            {/* Value 2 */}
            <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: "#f0eefb", color: "#6d5ce8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 24, height: 24 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 18a4 4 0 0 1-1-7.9A5 5 0 0 1 16 9a4.5 4.5 0 0 1 1 9H7z" />
                  </svg>
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0d1320", margin: "0 0 10px" }}>{isArabic ? 'منصة سحابية واحدة' : 'Single cloud platform'}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5b6478", margin: 0 }}>{isArabic ? 'تسجيل دخول واحد لتخطيط الموارد، والموارد البشرية/الرواتب، وسير العمل، والتقارير. تدفقات جاهزة للعمليات اليومية لتظل شركتك متوافقة.' : 'One login for ERP, HR/payroll, workflows, and reporting. Pre-built flows for everyday operations so your company stays aligned.'}</p>
              </div>
            </div>

            {/* Value 3 */}
            <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: "#e9f9ef", color: "#22b76b", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 24, height: 24 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                  </svg>
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0d1320", margin: "0 0 10px" }}>{isArabic ? 'عائد سريع على الاستثمار' : 'Fast time-to-value'}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5b6478", margin: 0 }}>{isArabic ? 'تنفيذ يُقاس بالأسابيع وليس الأشهر. تدريب موجه وباقات البداية الواضحة تساعدك على البدء صغيراً والنمو بدون احتكاك.' : 'Implementation measured in weeks, not months. Guided onboarding and clear starter plans help you start small and grow without friction.'}</p>
              </div>
            </div>

            {/* Value 4 */}
            <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", background: "#fcece4", color: "#f0793a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 24, height: 24 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                  </svg>
                </span>
              </div>
              <div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "#0d1320", margin: "0 0 10px" }}>{isArabic ? 'مصمم للقادة غير التقنيين' : 'Built for non-technical leaders'}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: "#5b6478", margin: 0 }}>{isArabic ? 'واجهة مستخدم بلغة مبسطة وأداة بناء تطبيقات بدون كود تمكن المؤسسين والمديرين بخلفية تقنية محدودة من التحكم الكامل.' : 'Plain-language UI and a no-code app builder empower founders and managers with limited tech background to take full control.'}</p>
              </div>
            </div>
          </div>



          {/* flowing wave lines on top of the skyline */}
          <svg viewBox="0 0 1536 120" preserveAspectRatio="none" style={{ position: "absolute", left: 0, right: 0, bottom: 0, width: "100%", height: 120, zIndex: 1, pointerEvents: "none" }}>
            <path d="M0 70 C 250 30, 450 100, 700 60 S 1100 30, 1536 70" fill="none" stroke="#d7e0f3" strokeWidth="1.5" />
            <path d="M0 90 C 280 50, 480 120, 740 80 S 1150 50, 1536 90" fill="none" stroke="#e3eaf8" strokeWidth="1.5" />
            <path d="M0 50 C 220 90, 500 20, 760 50 S 1180 90, 1536 50" fill="none" stroke="#eef2fa" strokeWidth="1.5" />
          </svg>
        </section>

        {/* 6. Final CTA */}
        <section className="bg-blue-600 rounded-[3rem] p-16 text-center shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80')] opacity-10 mix-blend-overlay object-cover w-full h-full"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              {isArabic ? 'تحكم في أعمالك في الوقت الفعلي' : 'Get real-time control of your business'}
            </h2>
            <button className="bg-white hover:bg-slate-50 text-blue-900 px-12 py-5 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              {isArabic ? 'احجز عرضاً توضيحياً' : 'Book a Demo'}
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
