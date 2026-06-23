import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { MapPin, Globe, Cloud, Users, PieChart, Calculator, Hexagon, Command, ArrowRight, X, Building2, ShieldCheck, ShoppingCart, Activity, Briefcase, Rocket, Menu, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { language, setLanguage, dir } = useLanguage();
  const [region, setRegion] = useState('India');
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/products/');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedProduct, setMobileExpandedProduct] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeProductIdx, setActiveProductIdx] = useState<number>(0);
  const [activeIndustryIdx, setActiveIndustryIdx] = useState<number>(0);

  const isArabic = language === 'Arabic';

  const handleRegionChange = (newRegion: string) => {
    setRegion(newRegion);
    setIsRegionOpen(false);
    if (newRegion === 'India') setLanguage('English');
    else if (newRegion === 'Saudi Arabia' || newRegion === 'Dubai') setLanguage('Arabic');
  };

  const handleLangChange = (newLang: 'English' | 'Arabic') => {
    setLanguage(newLang);
    setIsLangOpen(false);
  };

  const navLinks = isArabic 
    ? ['المنتجات', 'الشركات', 'العملاء', 'الشركاء', 'الموارد']
    : ['Products', 'Enterprise', 'Customers', 'Partners', 'Resources'];

  const regionMap: Record<string, string> = {
    'India': isArabic ? 'الهند' : 'India',
    'Saudi Arabia': isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia',
    'Dubai': isArabic ? 'دبي' : 'Dubai'
  };

  // 3-Tier Menu Data
  const PRODUCTS = ['Cloud ERP', 'HR & Payroll', 'CRM & Sales', 'Advanced Reporting', 'Workflow Automation', 'No-Code App Builder'];
  const PRODUCTS_AR = ['نظام تخطيط موارد المؤسسات', 'الموارد البشرية والرواتب', 'إدارة علاقات العملاء', 'التقارير المتقدمة', 'أتمتة سير العمل', 'منشئ التطبيقات'];

  const INDUSTRIES = [
    ['Retail & POS', 'Manufacturing', 'Healthcare', 'Construction', 'Food & Beverage'], // ERP
    ['Hospitals & Clinics', 'Schools & Universities', 'Corporate Offices', 'Retail Chains', 'Contractors'], // HR
    ['B2B Sales', 'Real Estate Brokers', 'E-commerce', 'Financial Services', 'Agencies'], // CRM
    ['Executive Management', 'Finance Teams', 'Store Managers', 'HR Directors', 'Investors'], // Reporting
    ['Procurement', 'IT Helpdesk', 'HR Onboarding', 'Legal & Compliance', 'Operations'], // Workflow
    ['Internal Tools', 'Customer Portals', 'Vendor Dashboards', 'Field Service Apps', 'Data Collection'] // App Builder
  ];

  const INDUSTRIES_AR = [
    ['التجزئة ونقاط البيع', 'التصنيع', 'الرعاية الصحية', 'البناء والعقارات', 'الأغذية والمشروبات'],
    ['المستشفيات والعيادات', 'المدارس والجامعات', 'الشركات الكبرى', 'سلاسل التجزئة', 'المقاولون'],
    ['مبيعات الشركات B2B', 'وسطاء العقارات', 'التجارة الإلكترونية', 'الخدمات المالية', 'الوكالات'],
    ['الإدارة التنفيذية', 'الفرق المالية', 'مدراء الفروع', 'مدراء الموارد البشرية', 'المستثمرون'],
    ['المشتريات', 'دعم تقنية المعلومات', 'توظيف الكفاءات', 'الشؤون القانونية', 'العمليات'],
    ['أدوات داخلية', 'بوابات العملاء', 'لوحات الموردين', 'تطبيقات ميدانية', 'جمع البيانات']
  ];

  const getFeatures = (pIndex: number, iIndex: number, isArabic: boolean) => {
    const industryName = isArabic ? INDUSTRIES_AR[pIndex][iIndex] : INDUSTRIES[pIndex][iIndex];
    
    const features = [
      // 0: Cloud ERP
      [
        { name: isArabic ? `إدارة المخزون لـ ${industryName}` : `Inventory for ${industryName}`, desc: isArabic ? 'تتبع المخزون في الوقت الفعلي بدقة.' : `Real-time stock tracking tailored for ${industryName} operations.`, icon: ShoppingCart },
        { name: isArabic ? 'الإدارة المالية (زاتكا)' : 'Financial Management', desc: isArabic ? 'محاسبة متوافقة مع هيئة الزكاة والضريبة.' : 'ZATCA-compliant accounting and ledger.', icon: Calculator },
        { name: isArabic ? 'سلسلة التوريد' : 'Supply Chain', desc: isArabic ? 'إدارة الموردين والمشتريات.' : 'Automate POs and supplier management seamlessly.', icon: Building2 },
        { name: isArabic ? 'نقاط البيع المتقدمة' : 'Advanced POS', desc: isArabic ? 'مبيعات سريعة ومتزامنة.' : 'Unified commerce and quick multi-branch sales processing.', icon: Activity },
        { name: isArabic ? 'إدارة الفواتير' : 'Invoicing & Billing', desc: isArabic ? 'إنشاء فواتير إلكترونية متوافقة.' : 'Generate e-invoices instantly.', icon: Calculator },
        { name: isArabic ? 'بوابة الموردين' : 'Vendor Portal', desc: isArabic ? 'تواصل سلس مع مورديك.' : 'Self-service access for your vendors.', icon: Users },
      ],
      // 1: HR & Payroll
      [
        { name: isArabic ? `إدارة موظفي ${industryName}` : `Staffing for ${industryName}`, desc: isArabic ? 'جدولة ورديات العمل بكفاءة عالية.' : `Shift and schedule management optimized for ${industryName}.`, icon: Users },
        { name: isArabic ? 'مسير الرواتب الآلي' : 'Payroll Automation', desc: isArabic ? 'حساب رواتب متوافق مع قوانين العمل.' : 'Localized payroll fully compliant with regional labor laws.', icon: Calculator },
        { name: isArabic ? 'الخدمة الذاتية' : 'Self-Service Portal', desc: isArabic ? 'طلبات الإجازات والموافقات.' : 'Empower employees with leave requests and digital approvals.', icon: Command },
        { name: isArabic ? 'تتبع الحضور' : 'Time & Attendance', desc: isArabic ? 'بصمة وتتبع ساعات العمل.' : 'Biometric integration and seamless time tracking.', icon: Activity },
        { name: isArabic ? 'تقييم الأداء' : 'Performance Reviews', desc: isArabic ? 'تتبع أهداف الموظفين السنوية.' : 'Track KPIs and annual employee goals.', icon: PieChart },
        { name: isArabic ? 'نظام التوظيف' : 'Recruitment (ATS)', desc: isArabic ? 'إدارة دورة حياة التوظيف.' : 'Manage job postings and applicant tracking.', icon: Briefcase },
      ],
      // 2: CRM & Sales
      [
        { name: isArabic ? `مبيعات ${industryName}` : `${industryName} Pipelines`, desc: isArabic ? 'تتبع مسار المبيعات بدقة تامة.' : `Customized sales pipelines built specifically for ${industryName}.`, icon: PieChart },
        { name: isArabic ? 'إدارة العملاء' : 'Lead Management', desc: isArabic ? 'جمع العملاء المحتملين وتصنيفهم.' : 'Capture, score, and convert leads effectively.', icon: Users },
        { name: isArabic ? 'أتمتة التسويق' : 'Marketing Automation', desc: isArabic ? 'حملات بريد إلكتروني مخصصة.' : 'Targeted email, SMS, and promotional campaigns.', icon: Hexagon },
        { name: isArabic ? 'خدمة العملاء' : 'Customer Support', desc: isArabic ? 'تذاكر الدعم الفني السريع.' : 'Helpdesk and ticketing to maximize client retention.', icon: ShieldCheck },
        { name: isArabic ? 'تحليلات المبيعات' : 'Sales Analytics', desc: isArabic ? 'تقارير مبيعات شاملة.' : 'In-depth revenue and performance reports.', icon: Activity },
        { name: isArabic ? 'بوابة العملاء' : 'Client Portal', desc: isArabic ? 'مساحة مخصصة لعملائك.' : 'A dedicated secure space for your clients.', icon: Cloud },
      ],
      // 3: Advanced Reporting
      [
        { name: isArabic ? `لوحات تحكم ${industryName}` : `${industryName} Dashboards`, desc: isArabic ? 'مؤشرات أداء مخصصة للقطاع.' : `Real-time KPIs and growth metrics for ${industryName}.`, icon: PieChart },
        { name: isArabic ? 'تقارير مالية' : 'Financial Reports', desc: isArabic ? 'بيانات الأرباح والخسائر.' : 'P&L, balance sheets, and deep cash flow analysis.', icon: Calculator },
        { name: isArabic ? 'تصدير البيانات' : 'Data Export', desc: isArabic ? 'تصدير إلى Excel و PDF.' : 'One-click massive data export to Excel, CSV, and PDF.', icon: Cloud },
        { name: isArabic ? 'تحليلات ذكية' : 'AI Analytics', desc: isArabic ? 'توقعات المبيعات المستقبلية.' : 'Predictive forecasting, AI modeling, and trend analysis.', icon: Activity },
        { name: isArabic ? 'تكامل البيانات' : 'Data Integration', desc: isArabic ? 'ربط مصادر البيانات المتعددة.' : 'Connect all your disparate data sources.', icon: Hexagon },
        { name: isArabic ? 'تنبيهات مخصصة' : 'Custom Alerts', desc: isArabic ? 'إشعارات فورية.' : 'Get notified instantly on key metric shifts.', icon: ShieldCheck },
      ],
      // 4: Workflow Automation
      [
        { name: isArabic ? `سير عمل ${industryName}` : `${industryName} Workflows`, desc: isArabic ? 'أتمتة العمليات الروتينية اليومية.' : `Automate high-volume routine processes in ${industryName}.`, icon: Hexagon },
        { name: isArabic ? 'الموافقات' : 'Approval Chains', desc: isArabic ? 'تسلسل موافقات متعدد المستويات.' : 'Multi-level hierarchical digital approvals.', icon: Users },
        { name: isArabic ? 'منشئ مرئي' : 'Visual Builder', desc: isArabic ? 'سحب وإفلات لإنشاء الخطوات.' : 'Drag-and-drop intuitive workflow canvas.', icon: Command },
        { name: isArabic ? 'تنبيهات فورية' : 'Instant Alerts', desc: isArabic ? 'إشعارات عبر البريد والجوال.' : 'Email, SMS, and in-app immediate notifications.', icon: Activity },
        { name: isArabic ? 'تطبيقات خارجية' : 'API Integrations', desc: isArabic ? 'ربط مع التطبيقات الخارجية.' : 'Seamlessly connect with external software tools.', icon: Cloud },
        { name: isArabic ? 'سجل التدقيق' : 'Audit Trails', desc: isArabic ? 'سجل لجميع التغييرات.' : 'Track every action for security compliance.', icon: ShieldCheck },
      ],
      // 5: No-Code App Builder
      [
        { name: isArabic ? `تطبيقات ${industryName}` : `Apps for ${industryName}`, desc: isArabic ? 'تطبيقات مخصصة لاحتياجات أعمالك.' : `Build flawlessly tailored internal apps for ${industryName}.`, icon: Command },
        { name: isArabic ? 'نماذج مخصصة' : 'Custom Forms', desc: isArabic ? 'جمع البيانات من الميدان.' : 'Mobile data collection and remote field entry forms.', icon: Building2 },
        { name: isArabic ? 'قواعد بيانات' : 'Relational DB', desc: isArabic ? 'تخزين البيانات بشكل آمن ومترابط.' : 'Secure, scalable, and fully relational custom data tables.', icon: Cloud },
        { name: isArabic ? 'نشر فوري' : '1-Click Publish', desc: isArabic ? 'نشر التطبيق على جميع الأجهزة.' : 'Deploy instantly to progressive web and mobile apps.', icon: Rocket },
        { name: isArabic ? 'تطبيقات الجوال' : 'Mobile Ready', desc: isArabic ? 'تطبيقات متوافقة مع الجوال.' : 'Native responsive design for iOS and Android.', icon: Command },
        { name: isArabic ? 'لوحات المشرفين' : 'Admin Portals', desc: isArabic ? 'لوحات تحكم مخصصة للمدراء.' : 'Custom back-office administrative panels.', icon: PieChart },
      ]
    ];
    return features[pIndex];
  };


  return (
    <div
      className={`${isProductPage ? 'absolute' : 'fixed'} top-0 left-0 right-0 w-full z-50 border-b transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-gray-100/80'
          : 'bg-white shadow-sm border-gray-100'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20 w-full relative">
          
          <div className="flex items-center gap-12 h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center cursor-pointer gap-2 hover:opacity-90 transition-opacity">
              <motion.div
                animate={{ scale: scrolled ? 0.92 : 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-primary-hover shadow-md"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </motion.div>
              <span className="font-extrabold text-[22px] tracking-tight text-gray-900">emvive</span>
            </Link>

            {/* Center Links */}
            <div className="hidden lg:flex items-center space-x-8 h-full">
              {navLinks.map((item) => (
                <div 
                  key={item} 
                  className="flex items-center gap-1 cursor-pointer group h-full px-2"
                  onClick={() => setActiveMenu(activeMenu === item ? null : item)}
                >
                  <span className={`text-[15px] font-medium transition-colors ${activeMenu === item ? 'text-primary' : 'text-gray-800 group-hover:text-black'}`}>{item}</span>
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === item ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className={`hidden lg:flex items-center gap-10 ${isArabic ? 'mr-auto' : 'ml-auto'}`}>
            <div className="relative">
              <button onClick={() => setIsRegionOpen(!isRegionOpen)} className="flex items-center gap-2 text-[15px] text-gray-800 hover:text-black focus:outline-none font-medium">
                <MapPin className="w-4 h-4 text-slate-500" strokeWidth={2.5} />
                {regionMap[region]}
              </button>
              {isRegionOpen && (
                <div className={`absolute ${dir === 'rtl' ? 'left-0' : 'right-0'} mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50`}>
                  <button onClick={() => handleRegionChange('India')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">{regionMap['India']}</button>
                  <button onClick={() => handleRegionChange('Saudi Arabia')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">{regionMap['Saudi Arabia']}</button>
                  <button onClick={() => handleRegionChange('Dubai')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">{regionMap['Dubai']}</button>
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 text-[15px] text-gray-800 hover:text-black focus:outline-none font-medium">
                <Globe className="w-4 h-4 text-slate-500" strokeWidth={2.5} />
                {isArabic ? 'العربية' : 'English'}
              </button>
              {isLangOpen && (
                <div className={`absolute ${dir === 'rtl' ? 'left-0' : 'right-0'} mt-2 w-32 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50`}>
                  <button onClick={() => handleLangChange('English')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">English</button>
                  <button onClick={() => handleLangChange('Arabic')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">العربية</button>
                </div>
              )}
            </div>

            <div className="flex items-center px-2">
              <button className="bg-primary hover:bg-primary-hover text-navy px-6 py-2.5 rounded-lg text-[14px] font-bold transition-colors shadow-sm">
                {isArabic ? 'ابدأ الآن' : 'Get Started'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center z-50">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-gray-800 hover:text-navy transition-colors">
              <Menu className="w-7 h-7" strokeWidth={2} />
            </button>
          </div>
        </nav>
      </div>

      {/* 3-Tier Zoho-Style Mega Menu */}
      {activeMenu && (activeMenu === 'Products' || activeMenu === 'المنتجات') && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-t border-gray-100 flex flex-col z-40 max-h-[calc(100vh-80px)] overflow-hidden">
          
          {/* Tier 1: Top Bar (Products) */}
          <div className="w-full flex items-center border-b border-gray-100 px-8 bg-slate-50/50 overflow-x-auto hide-scrollbar">
            <div className="flex space-x-8 lg:space-x-12 py-1">
              {(isArabic ? PRODUCTS_AR : PRODUCTS).map((product, idx) => (
                <button
                  key={idx}
                  onClick={() => { setActiveProductIdx(idx); setActiveIndustryIdx(0); }}
                  className={`whitespace-nowrap py-4 px-2 text-[14px] font-bold border-b-[3px] transition-colors duration-200 ${
                    activeProductIdx === idx 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-slate-500 hover:text-navy hover:border-slate-300'
                  }`}
                >
                  {product}
                </button>
              ))}
            </div>
            <div className={`flex items-center text-primary text-xs font-bold tracking-widest uppercase cursor-pointer hover:text-primary-hover ${isArabic ? 'mr-auto' : 'ml-auto pl-8'}`}>
              {isArabic ? 'استكشف جميع المنتجات' : 'EXPLORE ALL PRODUCTS'} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </div>
            <button onClick={() => setActiveMenu(null)} className="ml-8 text-slate-400 hover:text-navy transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-1 overflow-hidden h-[450px]">
            {/* Tier 2: Left Sidebar (Industries) */}
            <div className="w-[260px] shrink-0 bg-slate-50 border-r border-gray-100 py-6 px-4 overflow-y-auto">

              <div className="flex flex-col gap-1">
                {(isArabic ? INDUSTRIES_AR[activeProductIdx] : INDUSTRIES[activeProductIdx]).map((industry, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndustryIdx(idx)}
                    className={`text-start px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors w-full flex items-center justify-between ${
                      activeIndustryIdx === idx
                        ? 'bg-primary-50 text-primary-hover shadow-sm border border-primary-100'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-navy border border-transparent'
                    }`}
                  >
                    {industry}
                    {activeIndustryIdx === idx && <ArrowRight className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Tier 3: Main Grid Area (Features specific to Product + Industry) */}
            <div className="flex-1 p-8 lg:p-10 bg-white overflow-y-auto">
              <div className="mb-8">
                 <h3 className="text-2xl font-bold text-navy flex items-center gap-3">
                   {isArabic ? INDUSTRIES_AR[activeProductIdx][activeIndustryIdx] : INDUSTRIES[activeProductIdx][activeIndustryIdx]}
                 </h3>
                 <p className="text-slate-500 mt-2 text-sm">
                   {isArabic 
                     ? `اكتشف كيف نقوم بتخصيص هذا المنتج خصيصًا لقطاع ${INDUSTRIES_AR[activeProductIdx][activeIndustryIdx]}.` 
                     : `Discover how we tailor this product specifically for the ${INDUSTRIES[activeProductIdx][activeIndustryIdx]} sector.`}
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl">
                {getFeatures(activeProductIdx, activeIndustryIdx, isArabic).map((feature, idx) => (
                  <Link 
                    key={idx} 
                    to={`/products/inventory-retail`} 
                    onClick={() => setActiveMenu(null)}
                    className="group cursor-pointer flex flex-col p-6 rounded-xl border border-blue-200 shadow-sm hover:border-blue-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-blue-50/40 hover:bg-blue-50 transition-all h-full"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-gray-100 text-primary flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                        <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h4 className="text-xl font-bold text-primary">{feature.name}</h4>
                    </div>
                    <p className="text-slate-500 text-[15px] leading-relaxed mb-6 flex-grow">{feature.desc}</p>
                    <div className="flex items-center text-[13px] font-bold text-primary mt-auto opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 duration-300">
                      {isArabic ? 'جرب الآن' : 'TRY NOW'} <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
      <div className={`fixed top-0 bottom-0 ${dir === 'rtl' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-[85%] max-w-[360px] bg-white z-[70] shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? '!translate-x-0' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="font-extrabold text-[22px] tracking-tight text-gray-900">emvive</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-navy bg-slate-50 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-6">
          <div className="flex flex-col space-y-6">
            {/* Nav Links */}
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <div key={item} className="flex flex-col">
                  {item === 'Products' || item === 'المنتجات' ? (
                    <>
                      <div className="flex items-center justify-between text-lg font-bold text-navy py-2 cursor-pointer" onClick={() => setMobileExpandedProduct(mobileExpandedProduct === -1 ? null : -1)}>
                        {item}
                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpandedProduct === -1 ? 'rotate-180 text-primary' : 'text-slate-400'}`} />
                      </div>
                      {mobileExpandedProduct === -1 && (
                        <div className={`flex flex-col ${dir === 'rtl' ? 'pr-4 border-r-2' : 'pl-4 border-l-2'} mt-2 space-y-3 border-slate-100`}>
                          {(isArabic ? PRODUCTS_AR : PRODUCTS).map((prod, pIdx) => (
                            <Link to={`/products/inventory-retail`} key={pIdx} onClick={() => setIsMobileMenuOpen(false)} className="text-[15px] font-medium text-slate-600 hover:text-primary py-1">
                              {prod}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to="#" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-navy hover:text-primary py-2 transition-colors">{item}</Link>
                  )}
                </div>
              ))}
            </div>

            <div className="h-px bg-slate-100 w-full"></div>

            {/* Region / Lang with Desktop-Style Custom Dropdowns */}
            <div className="flex flex-col space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{isArabic ? 'الإعدادات' : 'Preferences'}</p>
              
              <div className="flex items-center justify-between relative">
                <span className="text-[15px] font-medium text-slate-600">{isArabic ? 'المنطقة' : 'Region'}</span>
                <div className="relative">
                  <button onClick={() => setIsRegionOpen(!isRegionOpen)} className="flex items-center gap-2 text-[15px] text-gray-800 hover:text-black focus:outline-none font-medium bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3">
                    <MapPin className="w-4 h-4 text-slate-500" strokeWidth={2.5} />
                    {regionMap[region]}
                  </button>
                  {isRegionOpen && (
                    <div className={`absolute ${dir === 'rtl' ? 'left-0' : 'right-0'} mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50`}>
                      <button onClick={() => handleRegionChange('India')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">{regionMap['India']}</button>
                      <button onClick={() => handleRegionChange('Saudi Arabia')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">{regionMap['Saudi Arabia']}</button>
                      <button onClick={() => handleRegionChange('Dubai')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">{regionMap['Dubai']}</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between relative">
                <span className="text-[15px] font-medium text-slate-600">{isArabic ? 'اللغة' : 'Language'}</span>
                <div className="relative">
                  <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-2 text-[15px] text-gray-800 hover:text-black focus:outline-none font-medium bg-slate-50 border border-slate-200 rounded-md py-1.5 px-3">
                    <Globe className="w-4 h-4 text-slate-500" strokeWidth={2.5} />
                    {isArabic ? 'العربية' : 'English'}
                  </button>
                  {isLangOpen && (
                    <div className={`absolute ${dir === 'rtl' ? 'left-0' : 'right-0'} mt-2 w-32 bg-white border border-gray-100 rounded-md shadow-lg py-1 z-50`}>
                      <button onClick={() => handleLangChange('English')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">English</button>
                      <button onClick={() => handleLangChange('Arabic')} className="block w-full text-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">العربية</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-slate-50">
          <button className="w-full bg-primary hover:bg-primary-hover text-navy py-3.5 rounded-xl text-[15px] font-bold shadow-sm transition-colors">
            {isArabic ? 'ابدأ الآن' : 'Get Started'}
          </button>
        </div>
      </div>

    </div>
  );
}
