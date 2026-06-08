import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    t: "Paste one snippet",
    d: <>Your store. Your fonts. Your colours. Sty<span className="text-[#AC1559]">ai</span>list blends in like it was always there. Shopify, Woo, Magento, Webflow, Wix.</>,
    icon: "</>",
  },
  {
    n: "02",
    t: "Shoppers meet their stylist",
    d: "A conversation that feels nothing like a form. They leave with a Style Passport. You leave with a profile.",
    icon: "✦",
  },
  {
    n: "03",
    t: "Catalogue works harder",
    d: "Every visit after that is personalised. Right products, right person, every time. Returns drop. AOV climbs.",
    icon: "↗",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/3 -right-32 w-[40vw] h-[40vw] rounded-full bg-neon-purple/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 font-medium">
            — How it works —
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-normal tracking-tight mt-4 leading-[1.02] max-w-5xl"
            style={{ textWrap: 'balance' }}
          >
            You don't need a developer, a design team, or a sales call,{" "}
            <span className="text-gradient-primary whitespace-nowrap">just 24 hours.</span>
          </motion.h2>
          <p className="text-foreground/65 leading-relaxed mt-6 max-w-2xl">
            From snippet to live stylist on your storefront. Three steps, one afternoon.
          </p>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 1200 280"
            className="absolute inset-0 w-full h-full hidden md:block pointer-events-none -z-10"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 150 C 150 150, 200 50, 325 50 C 480 50, 580 50, 735 50 C 890 50, 990 50, 1145 50 C 1180 50, 1200 100, 1200 100"
              stroke="url(#grad-how)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="grad-how" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--neon-pink)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="var(--neon-purple)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--neon-pink)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative group h-full"
              >
                <div className="h-full rounded-3xl p-8 transition-all hover:-translate-y-1 flex flex-col" style={{ background: 'rgba(255,255,255,.9)', border: '1px solid rgba(255,192,203,.15)', boxShadow: '0 10px 30px rgba(0,0,0,.04)' }}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-foreground/50">{s.n}</span>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neon-pink/15 to-neon-purple/15 text-ink flex items-center justify-center text-lg ring-1 ring-white/60 group-hover:from-neon-pink group-hover:to-neon-purple group-hover:text-white transition-colors">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium mt-8 mb-3 leading-tight min-h-[4rem] md:min-h-[5rem]">
                    {s.t}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
