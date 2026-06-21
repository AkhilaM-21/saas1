import React from 'react';
import { useLanguage } from '../../LanguageContext';
import { CheckCircle2, ArrowRight, LayoutDashboard, Package, TrendingUp, ShoppingCart, ArrowLeftRight, Users, UserSquare, FileText, Settings, Search, Settings2, Bell, Building2, RefreshCw } from 'lucide-react';

export default function InteractiveShowcase() {
  const { language } = useLanguage();
  const isArabic = language === 'Arabic';

  return (
    <section className="pt-24 pb-12 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/3 text-left">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">
              {isArabic ? 'لوحة تحكم قوية' : 'POWERFUL DASHBOARD'}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight leading-tight">
              {isArabic ? 'تحكم كامل في عملياتك' : 'Total control over your operations'}
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              {isArabic 
                ? 'واجهة مستخدم حديثة تضع كل ما تحتاجه بين يديك مباشرة.'
                : 'A modern interface that puts everything you need right at your fingertips.'}
            </p>
            
            <ul className="flex flex-col gap-4 mb-10 text-slate-600 font-medium">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {isArabic ? 'تتبع المخزون المباشر' : 'Live inventory tracking'}</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {isArabic ? 'رؤى المبيعات والمشتريات' : 'Sales & purchase insights'}</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {isArabic ? 'إشعارات انخفاض المخزون' : 'Low stock notifications'}</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {isArabic ? 'تصدير البيانات بنقرة واحدة' : 'Export data in one click.'}</li>
            </ul>

            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-md flex items-center justify-center gap-2">
              {isArabic ? 'استكشف لوحة التحكم' : 'Explore Dashboard'} <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="w-full lg:w-2/3 overflow-x-auto hide-scrollbar pb-4 -mb-4">
             <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex overflow-hidden h-[500px] min-w-[700px]">
                
                {/* Sidebar */}
                <div className="w-48 bg-slate-50 border-r border-gray-100 flex flex-col pt-6 shrink-0">
                   <div className="flex items-center gap-2 font-bold text-navy mb-8 px-6">
                      <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white text-xs font-black">e</div>
                      emvive
                   </div>
                   
                   <div className="flex flex-col px-3">
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-bold text-xs mb-1">
                         <LayoutDashboard className="w-4 h-4" /> Dashboard
                      </div>
                      {[
                        { icon: Package, label: 'Inventory' },
                        { icon: TrendingUp, label: 'Sales' },
                        { icon: ShoppingCart, label: 'Purchase' },
                        { icon: ArrowLeftRight, label: 'Transfers' },
                        { icon: Building2, label: 'Suppliers' },
                        { icon: Users, label: 'Customers' },
                        { icon: FileText, label: 'Reports' },
                        { icon: Settings, label: 'Settings' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 font-medium text-xs hover:bg-slate-100 transition-colors">
                           <item.icon className="w-4 h-4" /> {item.label}
                        </div>
                      ))}
                   </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 bg-white p-6 flex flex-col gap-6">
                   
                   {/* Top Header */}
                   <div className="flex justify-between items-center w-full">
                      <div className="bg-slate-50 border border-gray-100 rounded-lg px-3 py-1.5 flex items-center w-64">
                         <Search className="w-4 h-4 text-slate-400 mr-2" />
                         <span className="text-xs text-slate-400">Search anything...</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-400">
                         <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center border border-gray-100"><Settings2 className="w-3 h-3" /></div>
                         <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center border border-gray-100"><Bell className="w-3 h-3" /></div>
                         <div className="w-6 h-6 rounded-full bg-navy overflow-hidden"></div>
                      </div>
                   </div>

                   {/* Title Area */}
                   <div>
                     <h3 className="text-xl font-bold text-navy">Inventory Overview</h3>
                     <p className="text-xs text-slate-400">Updated just now</p>
                   </div>

                   {/* Metrics Cards */}
                   <div className="grid grid-cols-4 gap-4">
                      <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                         <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Total Items</p>
                         <p className="text-xl font-extrabold text-navy">24,592</p>
                      </div>
                      <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                         <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Low Stock</p>
                         <p className="text-xl font-extrabold text-red-500">14</p>
                      </div>
                      <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                         <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Revenue</p>
                         <p className="text-xl font-extrabold text-green-500">$84.2K</p>
                      </div>
                      <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                         <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1">Orders</p>
                         <p className="text-xl font-extrabold text-navy">1,892</p>
                      </div>
                   </div>

                   {/* Charts Area */}
                   <div className="flex gap-4 flex-1 mt-2">
                      {/* Bar Chart Mockup */}
                      <div className="flex-[3] border border-gray-100 rounded-xl p-4 flex flex-col shadow-sm">
                         <div className="flex justify-between items-center mb-6">
                            <p className="text-xs font-bold text-navy">Stock Movement</p>
                            <span className="text-[10px] text-slate-400 border border-gray-200 px-2 py-0.5 rounded flex items-center">This Week <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></span>
                         </div>
                         <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-primary"></div> In Stock</div>
                            <div className="flex items-center gap-1 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-amber-200"></div> Out Stock</div>
                         </div>
                         {/* Bar Chart Visuals */}
                         <div className="flex-1 flex items-end justify-between px-2 gap-2 relative">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                              <div className="w-full border-b border-dashed border-slate-300"></div>
                              <div className="w-full border-b border-dashed border-slate-300"></div>
                              <div className="w-full border-b border-dashed border-slate-300"></div>
                            </div>
                            {/* Bars */}
                            {[
                               [60, 20], [80, 10], [50, 40], [90, 5], [70, 30], [100, 10], [40, 60]
                            ].map((pair, idx) => (
                               <div key={idx} className="flex gap-1 h-full items-end z-10 w-full justify-center">
                                  <div className="w-1/3 bg-primary rounded-t-sm" style={{height: `${pair[0]}%`}}></div>
                                  <div className="w-1/3 bg-amber-200 rounded-t-sm" style={{height: `${pair[1]}%`}}></div>
                               </div>
                            ))}
                         </div>
                         <div className="flex justify-between mt-2 text-[8px] text-slate-400 uppercase">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                         </div>
                      </div>

                      {/* Donut Chart Mockup */}
                      <div className="flex-[2] border border-gray-100 rounded-xl p-4 flex flex-col shadow-sm">
                         <div className="flex justify-between items-center mb-6">
                            <p className="text-xs font-bold text-navy">Top Categories</p>
                            <span className="text-[10px] text-slate-400 border border-gray-200 px-2 py-0.5 rounded flex items-center">This Week <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg></span>
                         </div>
                         <div className="flex-1 flex items-center gap-4">
                            {/* CSS Donut representation */}
                            <div className="w-24 h-24 rounded-full border-[12px] border-slate-100 relative ml-2 shrink-0">
                               <div className="absolute inset-[-12px] rounded-full border-[12px] border-primary" style={{clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 0 100%, 0 50%)'}}></div>
                               <div className="absolute inset-[-12px] rounded-full border-[12px] border-navy" style={{clipPath: 'polygon(50% 50%, 0 50%, 0 0, 50% 0)'}}></div>
                               <div className="absolute inset-[-12px] rounded-full border-[12px] border-amber-200" style={{clipPath: 'polygon(50% 50%, 50% 0, 100% 0)'}}></div>
                            </div>
                            <div className="flex flex-col gap-2">
                               <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium"><div className="w-2 h-2 rounded-full bg-primary"></div> Electronics</div>
                               <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium"><div className="w-2 h-2 rounded-full bg-navy"></div> Fashion</div>
                               <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium"><div className="w-2 h-2 rounded-full bg-amber-200"></div> Groceries</div>
                               <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium"><div className="w-2 h-2 rounded-full bg-slate-200"></div> Others</div>
                            </div>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </div>
        </div>



      </div>
    </section>
  );
}
