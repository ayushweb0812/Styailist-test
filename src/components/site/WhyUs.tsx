import { motion } from "framer-motion";

const reasons = [
  {
    title: "AI That Actually Gets Style",
    body: "Not just tags and filters. Our model reads colour theory, body proportions, occasion context, and personal taste to surface products that feel made for each shopper.",
    stat: "12–15",
    statLabel: "relevant products per visit",
  },
  {
    title: "Live in 24 Hours, Not 24 Weeks",
    body: <>One snippet. No dev team. No design rework. Sty<span className="text-[#AC1559]">ai</span>list inherits your fonts, colours, and layout so it looks like you built it.</>,
    stat: "1",
    statLabel: "line of code to install",
  },
  {
    title: "Numbers That Move the Needle",
    body: <>Shoppers who use Sty<span className="text-[#AC1559]">ai</span>list convert 3× more often, spend longer on site, and return at significantly lower rates.</>,
    stat: "+312%",
    statLabel: "average conversion lift",
  },
  {
    title: "Works With Your Stack",
    body: "Shopify, WooCommerce, Magento, Webflow, Wix, or a custom build, we slot in wherever your store lives.",
    stat: "5+",
    statLabel: "platforms supported",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-neon-pink/8 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 font-medium">
            — Why Sty<span className="text-[#AC1559]">ai</span>list —
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-semibold tracking-tight mt-4 leading-[1.02]"
          >
            Built for results. <span className="text-gradient-primary">Designed for humans.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group h-full rounded-3xl p-8 transition-all hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,.9)', border: '1px solid rgba(255,192,203,.15)', boxShadow: '0 10px 30px rgba(0,0,0,.04)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(236,72,153,.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,.04)'; }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-4">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight">
                    {r.title}
                  </h3>
                  <p className="text-sm text-foreground/65 mt-3 leading-relaxed max-w-md">
                    {r.body}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-start md:items-end w-full md:w-[140px] mt-6 md:mt-0">
                  <div className="inline-block font-display text-3xl md:text-4xl font-semibold text-gradient-primary tabular-nums">
                    {r.stat}
                  </div>
                  <div className="text-[11px] text-foreground/50 mt-1 uppercase tracking-wider text-left md:text-right w-full">
                    {r.statLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
