import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const plans = [
  {
    name: "Starter",
    desc: "For growing fashion brands getting started with AI personalization.",
    price: { monthly: "$299", annual: "$249" },
    suffix: "/month",
    cta: "Get Started",
    popular: true,
    save: "Save 45%",
    features: [
      "5,000 shopper sessions",
      "1,000 shopper profiles",
      "Style Passport",
      "Shopify & WooCommerce",
    ],
  },
  {
    name: "Growth",
    desc: "For scaling brands ready to optimize conversions and shopper insights.",
    price: { monthly: "$599", annual: "$499" },
    suffix: "/month",
    cta: "Start Growing",
    popular: false,
    save: "Save 65%",
    features: [
      "25,000 shopper sessions",
      "10,000 shopper profiles",
      "Style Passport + Virtual Try-On",
      "Advanced Insights",
    ],
  },
  {
    name: "Enterprise",
    desc: "For high-volume retailers requiring unlimited scale and custom integrations.",
    price: { monthly: "Custom", annual: "Custom" },
    cta: "Talk to sales",
    popular: false,
    save: "Save 75%",
    features: [
      "Unlimited sessions",
      "Unlimited profiles",
      "Advanced Insights",
      "Custom integrations",
    ],
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="pricing" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 font-medium">
            — Pricing —
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-normal tracking-tight mt-4 leading-[1.02]"
          >
            Built for brands that take{" "}
            <span className="text-gradient-primary">personalisation</span> seriously.
          </motion.h2>
          <p className="text-foreground/65 mt-5 max-w-md mx-auto">
            Plans start from $299/month. No contracts. No setup fees. Cancel anytime.
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
                  {active && (
                    <motion.span
                      layoutId="bill-pill"
                      className="absolute inset-0 bg-ink rounded-full"
                    />
                  )}
                  <span className="relative">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative rounded-[2rem] text-left p-8 transition-all ${p.popular
                ? "text-background"
                : "hover:-translate-y-1"
                }`}
              style={
                p.popular
                  ? { background: 'linear-gradient(135deg, #1B0728, #34104D)', boxShadow: '0 20px 60px rgba(192,132,252,.25)' }
                  : { background: 'rgba(255,255,255,.9)', border: '1px solid rgba(255,192,203,.15)', boxShadow: '0 10px 30px rgba(0,0,0,.04)' }
              }
            >
              {p.popular && (
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                  <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-neon-pink/30 blur-3xl" />
                  <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-neon-purple/30 blur-3xl" />
                </div>
              )}
              {p.popular && (
                <div className="absolute -top-3 left-8 rounded-full text-white px-3 py-1 text-[11px] font-mono uppercase tracking-wider" style={{ background: 'linear-gradient(90deg, #FF8DB8, #C084FC)' }}>
                  Most popular
                </div>
              )}
              <div className="relative">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  {p.save && (
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider ${p.popular
                        ? "bg-white/15 text-background ring-1 ring-white/20"
                        : "bg-neon-purple/15 text-neon-purple ring-1 ring-neon-purple/20"
                        }`}
                    >
                      {p.save}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mt-2 leading-snug min-h-[3rem] ${p.popular ? "text-background/60" : "text-foreground/60"}`}
                >
                  {p.desc}
                </p>
                <div className="mt-8 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold tracking-tight">
                    {annual ? p.price.annual : p.price.monthly}
                  </span>
                  {p.suffix && (
                    <span
                      className={`text-sm ${p.popular ? "text-background/60" : "text-foreground/60"}`}
                    >
                      {p.suffix}
                    </span>
                  )}
                </div>
                <a
                  href="https://my.styailist.com/signup"
                  className={`mt-6 block text-center w-full rounded-full py-3 text-sm font-medium transition-all ${p.popular
                    ? "bg-white text-ink hover:bg-primary hover:text-white"
                    : "bg-ink text-background hover:shadow-glow"
                    }`}
                >
                  {p.cta} →
                </a>
                <ul
                  className={`mt-6 text-sm space-y-2.5 ${p.popular ? "text-background/75" : "text-foreground/70"}`}
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${p.popular ? "bg-primary" : "bg-ink"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Feature Comparison link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/pricing"
            className="group relative inline-flex items-center gap-1.5 text-base font-medium text-ink hover:text-primary transition-colors"
          >
            View Full Feature Comparison
            <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
            <span
              className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
              style={{ background: 'linear-gradient(90deg, #FF8DB8, #C084FC)' }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
