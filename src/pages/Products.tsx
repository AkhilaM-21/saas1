import { motion } from 'framer-motion';
import { 
  Users, Megaphone, Globe, LayoutDashboard, 
  HeadphonesIcon, Calculator, FileText, Briefcase, 
  Inbox, Calendar, Shield, Server, ArrowRight
} from 'lucide-react';

const products = [
  { name: "CRM", desc: "Close more deals in less time with AI-driven insights.", icon: Users, color: "text-red-400", shadow: "drop-shadow-[0_0_15px_rgba(248,113,113,0.8)]" },
  { name: "Finance", desc: "Powerful financial platform for growing businesses.", icon: Calculator, color: "text-green-400", shadow: "drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]" },
  { name: "HR Core", desc: "Organize, automate, and simplify your HR processes.", icon: Briefcase, color: "text-primary", shadow: "drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" },
  { name: "Desk", desc: "Put customer service at the heart of your company.", icon: HeadphonesIcon, color: "text-orange-400", shadow: "drop-shadow-[0_0_15px_rgba(251,146,60,0.8)]" },
  { name: "Campaigns", desc: "Create, send, and track email campaigns.", icon: Megaphone, color: "text-primary", shadow: "drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]" },
  { name: "Analytics", desc: "Transform your data into actionable visual insights.", icon: LayoutDashboard, color: "text-yellow-400", shadow: "drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" },
  { name: "Mail", desc: "Secure and ad-free email for your business.", icon: Inbox, color: "text-cyan-400", shadow: "drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" },
  { name: "Vault", desc: "Secure password management for teams.", icon: Shield, color: "text-primary", shadow: "drop-shadow-[0_0_15px_rgba(129,140,248,0.8)]" },
];

export default function Products() {
  return (
    <div className="min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6 text-white drop-shadow-2xl">
            The Arsenal
          </h1>
          <p className="text-xl text-white/80 font-light backdrop-blur-md bg-black/20 p-4 rounded-xl border border-white/10 inline-block">
            Equip your enterprise with the absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all cursor-pointer flex flex-col justify-between min-h-[280px] shadow-2xl"
            >
              <div className="mb-6">
                <app.icon className={`w-12 h-12 mb-6 ${app.color} ${app.shadow} transform group-hover:scale-110 transition-transform`} />
                <h3 className="text-2xl font-bold text-white mb-3">{app.name}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{app.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
