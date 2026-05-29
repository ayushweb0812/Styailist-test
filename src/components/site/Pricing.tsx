import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Lite",
    desc: "Up to 1,000 products + Up to 500 style queries / month",
    price: { monthly: "$149", annual: "$127" },
    suffix: "/month",
    cta: "Subscribe now",
    popular: false,
    save: "Save 15%",
    features: ["Manage up to 1,000 products", "Up to 500 style queries per month"],
  },
  {
    name: "Starter",
    desc: "Up to 3,000 products + Up to 2,000 style queries / month",
    price: { monthly: "$299", annual: "$164" },
    suffix: "/month",
    cta: "Subscribe now",
    popular: true,
    save: "Save 45%",
    features: ["Manage up to 3,000 products", "Up to 2,000 style queries per month", "Colour & Body Analysis personalization"],
  },
  {
    name: "Growth",
    desc: "Up to 10,000 products + Up to 10,000 style queries / month",
    price: { monthly: "$599", annual: "$210" },
    suffix: "/month",
    cta: "Subscribe now",
    popular: false,
    save: "Save 65%",
    features: ["Everything in Starter Plan", "Blend module included", "Up to 10,000 products", "Up to 10,000 style queries per month"],
  },
  {
    name: "Enterprise",
    desc: "Custom pricing for multi-brand or enterprise retailers",
    price: { monthly: "Custom", annual: "Custom" },
    cta: "Talk to sales",
    popular: false,
    save: "Save 75%",
    features: ["Scale beyond 5,000 products", "Unlock 20,000+ monthly queries", "Multi-brand support", "Dedicated success team"],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 font-medium">— Pricing —</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-normal tracking-tight mt-4 leading-[1.02]"
          >
            Built for brands that take <span className="text-gradient-primary">personalisation</span> seriously.
          </motion.h2>
          <p className="text-foreground/65 mt-5 max-w-md mx-auto">
            Plans start from $149/month. No contracts. No setup fees. Cancel anytime.
          </p>

          <div className="mt-8 inline-flex items-center bg-glass ring-glass rounded-full p-1">
            {(["Monthly", "Annually"] as const).map((label, i) => {
              const active = (i === 1) === annual;
              return (
                <button
                  key={label}
                  onClick={() => setAnnual(i === 1)}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${active ? "text-background" : "text-foreground/60"}`}
                >
                  {active && <motion.span layoutId="bill-pill" className="absolute inset-0 bg-ink rounded-full" />}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-[2rem] text-left p-8 transition-all ${
                p.popular
                  ? "bg-ink text-background shadow-glow md:-mt-6 md:mb-6"
                  : "bg-glass-strong ring-glass shadow-card hover:-translate-y-1 hover:shadow-glass"
              }`}
            >
              {p.popular && (
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                  <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-neon-pink/30 blur-3xl" />
                  <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-neon-purple/30 blur-3xl" />
                </div>
              )}
              {p.popular && (
                <div className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple text-white px-3 py-1 text-[11px] font-mono uppercase tracking-wider">
                  Most popular
                </div>
              )}
              <div className="relative">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  {p.save && (
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider ${
                      p.popular ? "bg-white/15 text-background ring-1 ring-white/20" : "bg-neon-purple/15 text-neon-purple ring-1 ring-neon-purple/20"
                    }`}>
                      {p.save}
                    </span>
                  )}
                </div>
                <p className={`text-sm mt-2 leading-snug min-h-[3rem] ${p.popular ? "text-background/60" : "text-foreground/60"}`}>
                  {p.desc}
                </p>
                <div className="mt-8 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold tracking-tight">
                    {annual ? p.price.annual : p.price.monthly}
                  </span>
                  {p.suffix && <span className={`text-sm ${p.popular ? "text-background/60" : "text-foreground/60"}`}>{p.suffix}</span>}
                </div>
                <button
                  className={`mt-6 w-full rounded-full py-3 text-sm font-medium transition-all ${
                    p.popular
                      ? "bg-white text-ink hover:bg-primary hover:text-white"
                      : "bg-ink text-background hover:shadow-glow"
                  }`}
                >
                  {p.cta} →
                </button>
                <ul className={`mt-6 text-sm space-y-2.5 ${p.popular ? "text-background/75" : "text-foreground/70"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${p.popular ? "bg-primary" : "bg-ink"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
