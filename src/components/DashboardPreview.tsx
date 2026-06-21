import { BarChart3, LineChart, PieChart, Activity, Users, DollarSign, ArrowUpRight } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div className="w-full bg-surface-darker rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[600px]">
      {/* Header */}
      <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-slate-400 font-medium text-sm flex items-center gap-2">
          <Activity className="w-4 h-4 text-brand-400" /> System Status: Optimal
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
        {/* Sidebar/Nav */}
        <div className="col-span-1 border-r border-slate-800 pr-6 hidden md:flex flex-col gap-4">
          <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Overview</div>
          {[
            { icon: LineChart, label: 'Analytics' },
            { icon: Users, label: 'Customers' },
            { icon: DollarSign, label: 'Revenue' },
            { icon: PieChart, label: 'Reports' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-slate-300 hover:text-white p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition-colors">
              <item.icon className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          {/* Top Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
              <div className="text-slate-400 text-sm font-medium mb-1">Total Revenue</div>
              <div className="text-3xl font-bold text-white mb-2">$2.4M</div>
              <div className="flex items-center gap-1 text-green-400 text-xs font-medium">
                <ArrowUpRight className="w-3 h-3" /> +14.5% from last month
              </div>
            </div>
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
              <div className="text-slate-400 text-sm font-medium mb-1">Active Users</div>
              <div className="text-3xl font-bold text-white mb-2">14,205</div>
              <div className="flex items-center gap-1 text-green-400 text-xs font-medium">
                <ArrowUpRight className="w-3 h-3" /> +5.2% from last month
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="flex-1 bg-slate-900 rounded-xl border border-slate-800 p-5 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="text-white font-medium">Revenue Trend</div>
              <BarChart3 className="w-5 h-5 text-slate-500" />
            </div>
            <div className="flex-1 flex items-end gap-2">
              {[40, 70, 45, 90, 65, 85, 100, 60, 75, 80, 55, 95].map((height, i) => (
                <div key={i} className="flex-1 bg-brand-500/20 rounded-t-sm hover:bg-brand-500/40 transition-colors relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-brand-500 rounded-t-sm transition-all duration-500"
                    style={{ height: `${height}%` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
