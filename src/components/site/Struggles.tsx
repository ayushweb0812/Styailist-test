import { motion } from "framer-motion";
import {
  Search,
  Ruler,
  Frown,
  Clock,
  TrendingDown,
  PackageOpen,
  Users,
  MousePointer,
} from "lucide-react";

const consumerStruggles = [
  {
    icon: Search,
    title: "Decision fatigue",
    desc: "Scrolling through 4,000+ products hoping the right one appears.",
  },
  {
    icon: Ruler,
    title: "Sizing uncertainty",
    desc: "Guessing what size will actually fit their body type.",
  },
  {
    icon: Frown,
    title: "Style doubt",
    desc: "Wondering if that piece will actually look good on them.",
  },
  {
    icon: Clock,
    title: "Wasted time",
    desc: "Spending 15+ minutes and still leaving empty handed.",
  },
];

const retailerStruggles = [
  {
    icon: TrendingDown,
    title: "Conversion drops",
    desc: "96% of visitors browse and leave without buying anything.",
  },
  {
    icon: PackageOpen,
    title: "Return drain",
    desc: "30% of purchases come back  eating margin and morale.",
  },
  {
    icon: Users,
    title: "No personalization",
    desc: "Every shopper sees the same generic grid, every single time.",
  },
  {
    icon: MousePointer,
    title: "Lost to competitors",
    desc: "They found something 'close enough' somewhere else.",
  },
];

export function Struggles() {
  return (
    <section id="struggles" className="relative py-24 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] rounded-full bg-neon-purple/8 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 font-medium">
            — Sound familiar? —
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight mt-4 leading-[1.05] text-balance">
            Their struggle. <span className="text-gradient-primary">Your struggle.</span>
          </h2>
          <p className="text-foreground/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Two sides of the same problem. Shoppers can't find what's theirs. You can't show them what excatly they should buy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Consumer Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-glass ring-glass shadow-card p-8 md:p-10 relative overflow-hidden hover:-translate-y-1 transition-all"
            style={{ background: 'rgba(255,255,255,.9)', border: '1px solid rgba(255,192,203,.15)', boxShadow: '0 10px 30px rgba(0,0,0,.04)' }}
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-neon-pink/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-neon-pink/10 flex items-center justify-center">
                  <Frown className="w-5 h-5 text-neon-pink" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Your consumers struggle with
                </h3>
              </div>
              <div className="space-y-5">
                {consumerStruggles.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-glass-strong ring-glass flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <s.icon className="w-4 h-4 text-foreground/70" />
                    </div>
                    <div>
                      <p className="font-medium text-ink">{s.title}</p>
                      <p className="text-sm text-foreground/60 leading-relaxed mt-0.5">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Retailer Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] text-background p-8 md:p-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #170824 0%, #230A38 40%, #34104D 100%)', boxShadow: '0 10px 40px rgba(236,72,153,.15)' }}
          >
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-neon-purple/25 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-neon-purple" />
                </div>
                <h3 className="font-display text-xl font-semibold">You struggle with</h3>
              </div>
              <div className="space-y-5">
                {retailerStruggles.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <s.icon className="w-4 h-4 text-background/70" />
                    </div>
                    <div>
                      <p className="font-medium">{s.title}</p>
                      <p className="text-sm text-background/60 leading-relaxed mt-0.5">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
