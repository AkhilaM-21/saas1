import React, { useState } from 'react';
import { useLanguage } from '../../LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function PosFaq() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is POS?',
      a: 'A point of sale (POS) is the place where a transaction happens in a business. Point of sale software helps manage this interaction between the business and the customer smoothly by processing the sale and recording the payment details. It also helps businesses manage other important aspects like inventory, customer details, and business analytics.'
    },
    {
      q: 'What is the difference between a POS and billing software?',
      a: 'A point of sale solution helps you manage different aspects of your retail business, keeping sales or billing at the center, and connects to other aspects like vendor management, business analytics, customer details, and more. Billing software helps manage only the sales needs of a business and may not cater to the other parts.'
    },
    {
      q: 'What is Emvive POS?',
      a: 'Emvive POS is a cloud-based modern retail point of sale software that helps businesses manage all their retail operations—from inventory, sales, and purchases to checkouts, online orders, business analytics, and more—all in one place.'
    },
    {
      q: 'Can I try Emvive POS before purchasing, and what are the costs?',
      a: 'Yes, you can try Emvive POS with a 15-day free trial instantly without providing your credit card details. The modern retail POS has flexible and affordable pricing plans to suit businesses of all sizes.'
    },
    {
      q: 'What business types or industries does Emvive POS support?',
      a: 'Emvive POS supports a vast number of retail business verticals such as Apparel & Footwear, Electronics, Food & Beverage, Hardware, Home Décor, Supermarkets, Pharmacies, and more.'
    },
    {
      q: 'How can I migrate my existing data to Emvive POS?',
      a: 'If you are already using a point of sale solution for your business, export the data as an XLS or CSV file and import it to Emvive POS. Our product experts will also be able to help you with the migration.'
    }
  ];

  const arabicFaqs = [
    {
      q: 'ما هو نظام نقاط البيع (POS)؟',
      a: 'نظام نقاط البيع هو المكان الذي تتم فيه المعاملة في العمل التجاري. يساعد برنامج نقاط البيع في إدارة هذا التفاعل بين الشركة والعميل بسلاسة من خلال معالجة البيع وتسجيل تفاصيل الدفع.'
    },
    {
      q: 'ما الفرق بين نظام نقاط البيع وبرنامج الفوترة؟',
      a: 'يساعدك نظام نقاط البيع على إدارة جوانب مختلفة من أعمال التجزئة الخاصة بك ويربطها ببعضها البعض، بينما يركز برنامج الفوترة فقط على احتياجات المبيعات للشركة.'
    },
    {
      q: 'ما هو إمفايف نقاط البيع؟',
      a: 'إمفايف نقاط البيع هو برنامج نقاط بيع حديث يعتمد على السحابة ويساعد الشركات في إدارة جميع عمليات التجزئة الخاصة بها من مكان واحد.'
    },
    {
      q: 'هل يمكنني تجربة البرنامج قبل الشراء؟',
      a: 'نعم، يمكنك تجربة إمفايف نقاط البيع مجانًا لمدة 15 يومًا بدون الحاجة إلى إدخال تفاصيل بطاقة الائتمان الخاصة بك.'
    },
    {
      q: 'ما هي أنواع الأعمال التي يدعمها النظام؟',
      a: 'يدعم النظام مجموعة واسعة من قطاعات التجزئة مثل الملابس والأحذية والإلكترونيات والأغذية والمشروبات والأسواق المركزية والصيدليات والمزيد.'
    },
    {
      q: 'كيف يمكنني نقل بياناتي الحالية إلى إمفايف؟',
      a: 'يمكنك تصدير بياناتك الحالية كملف XLS أو CSV واستيرادها إلى نظامنا، وسيقوم خبراؤنا بمساعدتك في ذلك.'
    }
  ];

  const activeFaqs = isArabic ? arabicFaqs : faqs;

  return (
    <section className="pt-12 pb-12 lg:pb-24 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
             {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
           </h2>
           <p className="text-slate-500 text-lg">
             {isArabic ? 'كل ما تحتاج لمعرفته حول إمفايف نقاط البيع' : 'Everything you need to know about Emvive POS.'}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column: FAQs */}
          <div className="space-y-4">
             {activeFaqs.map((faq, i) => (
               <div 
                 key={i} 
                 className={`border rounded-2xl overflow-hidden transition-colors ${
                   openIndex === i ? 'border-primary/50 bg-slate-50' : 'border-gray-100 bg-white hover:border-gray-200'
                 }`}
               >
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                     <span className={`font-bold text-base ${openIndex === i ? 'text-primary' : 'text-navy'}`}>
                       {faq.q}
                     </span>
                     {openIndex === i ? (
                       <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                     ) : (
                       <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                     )}
                  </button>
                  
                  {openIndex === i && (
                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                       {faq.a}
                    </div>
                  )}
               </div>
             ))}
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200/60 shadow-sm relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
             
             <h3 className="text-2xl font-bold text-navy mb-2">
               {isArabic ? 'هل لديك المزيد من الأسئلة؟' : 'Still have questions?'}
             </h3>
             <p className="text-slate-500 text-sm mb-6">
               {isArabic 
                 ? 'أرسل لنا رسالة وسيقوم فريقنا بالرد عليك في أقرب وقت ممكن.' 
                 : 'Drop us a message and our team will get back to you shortly.'}
             </p>

             <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                   <label className="block text-xs font-semibold text-navy mb-1">{isArabic ? 'الاسم' : 'Name'}</label>
                   <input 
                     type="text" 
                     placeholder={isArabic ? 'أدخل اسمك' : 'Enter your name'}
                     className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                   />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-navy mb-1">{isArabic ? 'البريد الإلكتروني' : 'Email'}</label>
                   <input 
                     type="email" 
                     placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                     className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                   />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-navy mb-1">{isArabic ? 'الرسالة' : 'Message'}</label>
                   <textarea 
                     rows={4}
                     placeholder={isArabic ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
                     className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                   ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-navy font-bold py-3 rounded-lg text-sm transition-colors shadow-sm"
                >
                  {isArabic ? 'إرسال الرسالة' : 'Send Message'}
                </button>
             </form>
          </div>
        </div>

      </div>
    </section>
  );
}
