import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Mail = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const Phone = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const MapPin = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const Linkedin = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const Twitter = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Globe = (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>;

export default function Footer() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  return (
    <footer className="relative bg-white pt-64 md:pt-56 pb-10 mt-16 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Floating CTA Card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:w-[80%] max-w-5xl bg-navy rounded-[2.5rem] overflow-hidden outline outline-2 outline-primary outline-offset-[6px] md:outline-offset-[12px] shadow-none flex flex-col md:flex-row">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/cta-bg.png')] bg-cover bg-[center_top] bg-no-repeat w-full h-full pointer-events-none"></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0F172A]/10 via-[#0F172A]/80 to-[#0F172A]/95 pointer-events-none"></div>
          
          {/* Left Side: Spacer for face */}
          <div className="w-full md:w-5/12 relative z-10 min-h-[200px] md:min-h-[300px]"></div>
          
          {/* Right Side: Content */}
          <div className="w-full md:w-7/12 relative z-10 flex flex-col items-center justify-center px-10 pb-10 md:py-14 md:pr-14 md:pl-0 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 md:mb-4 tracking-tight leading-tight">
              {isArabic ? 'هل أنت مستعد لتحويل عملياتك؟' : 'Ready to transform your operations?'}
            </h2>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed font-medium">
              {isArabic ? 'ابدأ اليوم وتحكم في أعمالك في الوقت الفعلي.' : 'Get started today and gain real-time control over your entire business.'}
            </p>
            <button className="bg-transparent text-primary border-2 border-primary hover:border-primary-hover px-8 py-3.5 rounded-full font-bold text-[13px] tracking-wide uppercase transition-all flex items-center justify-center gap-2">
              {isArabic ? 'البدء الآن' : 'GET STARTED'}
              <span dir="ltr">{isArabic ? '<' : '>'}</span>
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                 <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <span className="font-bold text-2xl text-navy tracking-tight">Emvive</span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed text-[15px] mb-8 font-medium">
              {isArabic 
                ? 'سحابة العمليات المتكاملة للشركات الطموحة في السوق المتوسطة.' 
                : 'The integrated operations cloud for ambitious mid-market companies.'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brandblue hover:text-white hover:-translate-y-1 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brandblue hover:text-white hover:-translate-y-1 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brandblue hover:text-white hover:-translate-y-1 transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-extrabold text-navy mb-6 text-[15px] uppercase tracking-wide">{isArabic ? 'الشركة' : 'Company'}</h4>
            <ul className="space-y-4 text-slate-500 text-[15px] font-medium">
              <li><a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'حول' : 'About Us'}</a></li>
              <li><a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'الخدمات' : 'Services'}</a></li>
              <li><a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'المجتمع' : 'Community'}</a></li>
              <li><a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'التوصيات' : 'Testimonials'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-navy mb-6 text-[15px] uppercase tracking-wide">{isArabic ? 'الدعم' : 'Support'}</h4>
            <ul className="space-y-4 text-slate-500 text-[15px] font-medium">
              <li><a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'مركز المساعدة' : 'Help Center'}</a></li>
              <li><a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'تغريدة لنا' : 'Tweet @ Us'}</a></li>
              <li><a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'ندوات' : 'Webinars'}</a></li>
              <li><a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'ملاحظات' : 'Feedback'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-navy mb-6 text-[15px] uppercase tracking-wide">{isArabic ? 'اتصل بنا' : 'Contact Us'}</h4>
            <ul className="space-y-4 text-slate-500 text-[15px] font-medium">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brandblue" />
                <span>+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brandblue" />
                <span>hello@emvive.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brandblue" />
                <span>Riyadh, Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium">
          <p>© {new Date().getFullYear()} {isArabic ? 'Emvive Inc. جميع الحقوق محفوظة.' : 'Emvive Inc. All rights reserved.'}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'شروط الاستخدام' : 'Terms of Use'}</a>
            <a href="#" className="hover:text-brandblue transition-colors">{isArabic ? 'قانوني' : 'Legal'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
