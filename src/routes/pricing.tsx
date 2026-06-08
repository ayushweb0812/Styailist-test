import { createFileRoute, Link } from "@tanstack/react-router";
import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Minus } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { SectionLoader } from "@/components/ui/section-loader";

const Footer = React.lazy(() =>
  import("@/components/site/Footer").then((m) => ({ default: m.Footer })),
);

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

/* ───── plan data ───── */
const plans = [
  {
    name: "Starter",
    desc: "For growing fashion brands getting started with AI personalization.",
    price: { monthly: "$299", annual: "$249" },
    suffix: "/month",
    cta: "Get Started",
    popular: true,
    save: "Save 45%",
  },
  {
    name: "Growth",
    desc: "For scaling brands ready to optimize conversions and shopper insights.",
    price: { monthly: "$599", annual: "$499" },
    suffix: "/month",
    cta: "Start Growing",
    popular: false,
    save: "Save 65%",
  },
  {
    name: "Enterprise",
    desc: "For high-volume retailers requiring unlimited scale and custom integrations.",
    price: { monthly: "Custom", annual: "Custom" },
    cta: "Talk to sales",
    popular: false,
    save: "Save 75%",
  },
];

/* ───── feature comparison data ───── */
type FeatureValue = string | boolean;

interface FeatureCategory {
  category: string;
  items: {
    label: string;
    starter: FeatureValue;
    growth: FeatureValue;
    enterprise: FeatureValue;
  }[];
}

const featureData: FeatureCategory[] = [
  {
    category: "Usage",
    items: [
      { label: "Shopper Sessions", starter: "5,000", growth: "25,000", enterprise: "Unlimited" },
      { label: "Additional Sessions", starter: "$20/1,000", growth: "Included", enterprise: "Included" },
      { label: "Shopper Profiles", starter: "1,000", growth: "10,000", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Shopper Experience",
    items: [
      { label: "Style Passport", starter: true, growth: true, enterprise: true },
      { label: "Virtual Try-On", starter: false, growth: true, enterprise: true },
      { label: "Why It Works Engine", starter: true, growth: true, enterprise: true },
    ],
  },
  {
    category: "Advanced Administration & Insights",
    items: [
      { label: "Catalogue Gap Report", starter: false, growth: true, enterprise: true },
      { label: "Return Intelligence", starter: false, growth: true, enterprise: true },
      { label: "Shopper Segment Export", starter: false, growth: true, enterprise: true },
      { label: "Conversion Attribution", starter: false, growth: true, enterprise: true },
    ],
  },
  {
    category: "Platform & Team",
    items: [
      { label: "Integrations", starter: "Shopify, WooCommerce", growth: "All Platforms", enterprise: "All + Custom" },
      { label: "Dashboard Seats", starter: "1", growth: "3", enterprise: "Unlimited" },
      { label: "Support", starter: "Live Chat", growth: "Priority + Onboarding", enterprise: "Dedicated CSM + SLA" },
      { label: "Multi-brand / Storefront", starter: "2", growth: "5", enterprise: "Unlimited" },
    ],
  },
];

/* ───── helpers ───── */
function CellValue({ value, popular }: { value: FeatureValue; popular?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={18} strokeWidth={2.5} className={popular ? "text-white" : "text-foreground/60"} />
    ) : (
      <Minus size={16} strokeWidth={2} className={popular ? "text-white/40" : "text-foreground/25"} />
    );
  }
  return <span className={`text-[13px] ${popular ? "text-white/90" : "text-foreground/60"}`}>{value}</span>;
}

const ROW_HEIGHT = "h-9";
const HEADER_HEIGHT = "h-14";

/* ───── main page ───── */
function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden flex flex-col relative z-0 pt-24">
      {/* Ambient background with grid and glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Left pink glow */}
        <div className="absolute top-[10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-neon-pink/15 blur-[140px]" />
        {/* Right purple glow */}
        <div className="absolute bottom-[20%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-neon-purple/15 blur-[140px]" />
      </div>

      <Nav />

      <div className="flex-1 w-full pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/50 font-medium">
            — Pricing —
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-[3.5rem] font-normal tracking-tight mt-6 leading-[1.1]"
          >
            Pricing built for modern<br />
            <span className="text-gradient-primary">fashion ecommerce</span>
          </motion.h2>
          <p className="text-foreground/60 mt-6 max-w-lg mx-auto text-sm md:text-base">
            Choose the plan that fits your brand today and scale as your shoppers grow.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3">
            <span className={`text-[13px] font-medium ${!annual ? "text-ink" : "text-foreground/40"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-[42px] h-6 rounded-full transition-colors"
              style={{ background: annual ? "var(--neon-purple)" : "var(--neon-purple)" }}
              aria-label="Toggle annual pricing"
            >
              <span
                className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform"
                style={{ left: annual ? "22px" : "4px" }}
              />
            </button>
            <span className={`text-[13px] font-medium ${annual ? "text-ink" : "text-foreground/40"}`}>
              Annually <span className="text-neon-purple">(Save up to 25%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-5">
          {/* Col 1: Title Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex flex-col rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] justify-between h-full"
            style={{
              background: 'linear-gradient(135deg, rgba(255,240,245,0.9) 0%, rgba(243,232,255,0.9) 100%)'
            }}
          >
            <div>
              <h3 className="font-display text-[1.75rem] font-semibold leading-[1.15] text-ink tracking-tight">
                Not Sure <span className="text-gradient-primary">Where To Start?</span>
              </h3>
              <p className="text-[13px] text-ink/60 mt-4 leading-relaxed pr-2">
                Try Styailist and see how AI personalization can fit your brand.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://my.styailist.com/signup"
                className="block text-center w-full rounded-full bg-[#0A0310] text-white py-3.5 text-[13px] font-medium hover:scale-[1.02] transition-transform"
              >
                Start 14 Day Free Trial →
              </a>
              <p className="text-center text-[10.5px] text-ink/40 mt-4 font-medium">
                Included with all features
              </p>
            </div>
          </motion.div>

          {/* Col 2-4: Plans */}
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-[2rem] text-left p-8 transition-all h-full flex flex-col`}
              style={
                p.popular
                  ? {
                    background: "linear-gradient(160deg, #2A1144 0%, #150624 100%)",
                    boxShadow: "0 20px 50px rgba(192,132,252,.15)",
                  }
                  : {
                    background: "rgba(255,255,255,1)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  }
              }
            >
              {p.popular && (
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                  <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-neon-pink/20 blur-[50px]" />
                  <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-neon-purple/20 blur-[50px]" />
                </div>
              )}
              {p.popular && (
                <div
                  className="absolute -top-3 left-8 rounded-full text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest shadow-sm"
                  style={{ background: "linear-gradient(90deg, #FF8DB8, #C084FC)" }}
                >
                  Most popular
                </div>
              )}

              <div className="relative flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-display text-xl font-medium ${p.popular ? "text-white" : "text-ink"}`}>
                    {p.name}
                  </h3>
                  {p.save && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider ${p.popular
                        ? "bg-white/10 text-white/90"
                        : "bg-neon-purple/10 text-neon-purple"
                        }`}
                    >
                      {p.save}
                    </span>
                  )}
                </div>
                <p
                  className={`text-[12px] leading-relaxed mb-6 ${p.popular ? "text-white/60" : "text-foreground/50"
                    }`}
                >
                  {p.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`font-display text-4xl font-semibold tracking-tight ${p.popular ? "text-white" : "text-ink"}`}>
                      {annual ? p.price.annual : p.price.monthly}
                    </span>
                    {p.suffix && (
                      <span className={`text-[11px] ${p.popular ? "text-white/50" : "text-foreground/40"}`}>
                        {p.suffix}
                      </span>
                    )}
                  </div>
                  <button
                    className={`w-full rounded-full py-3.5 text-[13px] font-medium transition-all ${p.popular
                      ? "bg-white text-ink hover:scale-[1.02]"
                      : "bg-[#150624] text-white hover:scale-[1.02]"
                      }`}
                  >
                    {p.cta} →
                  </button>
                  <p className="text-center text-[10.5px] mt-4 font-medium opacity-0 pointer-events-none" aria-hidden>
                    Spacer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Columns */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <h3 className="text-[13px] font-medium text-foreground/80 mb-6 pl-2">Features Included:</h3>

          <div className="grid md:grid-cols-4 gap-5">
            {/* Col 1: Labels */}
            <div className="bg-white/80 rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hidden md:block">
              {featureData.map((cat, catIdx) => (
                <div key={cat.category} className={catIdx !== 0 ? "mt-10 relative" : "relative"}>
                  {catIdx !== 0 && (
                    <div className="absolute -top-5 left-0 w-[90%] h-px bg-foreground/15" />
                  )}
                  <div className={`flex flex-col justify-end pb-2 mb-4 ${HEADER_HEIGHT}`}>
                    <h4 className="font-semibold text-[13px] text-[#A855F7]">{cat.category}</h4>
                  </div>
                  <div className="flex flex-col gap-3">
                    {cat.items.map((item) => (
                      <div key={item.label} className={`flex items-center text-[12px] text-foreground/60 ${ROW_HEIGHT}`}>
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Col 2: Starter */}
            <div
              className="rounded-[2rem] p-8 shadow-glow relative overflow-hidden"
              style={{ background: "linear-gradient(180deg, #2A1144 0%, #150624 40%, #0A0310 100%)" }}
            >
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-neon-pink/20 blur-[60px]" />
                <div className="absolute bottom-1/4 -right-24 w-48 h-48 rounded-full bg-neon-purple/15 blur-[60px]" />
              </div>
              <div className="relative z-10">
                {featureData.map((cat, catIdx) => (
                  <div key={cat.category} className={catIdx !== 0 ? "mt-10 relative" : "relative"}>
                    {catIdx !== 0 && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[80%] h-px bg-white/10" />
                    )}
                    {/* Mobile Header */}
                    <div className="md:hidden flex flex-col justify-end border-b border-white/10 pb-2 mb-4">
                      <h4 className="font-semibold text-[13px] text-white/90">{cat.category}</h4>
                    </div>
                    <div className={`hidden md:flex flex-col justify-end pb-2 mb-4 ${HEADER_HEIGHT}`} />

                    <div className="flex flex-col gap-3">
                      {cat.items.map((item) => (
                        <div key={item.label} className={`flex items-center justify-between md:justify-center ${ROW_HEIGHT}`}>
                          <span className="md:hidden text-[12px] text-white/60">{item.label}</span>
                          <CellValue value={item.starter} popular />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3: Growth */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              {featureData.map((cat, catIdx) => (
                <div key={cat.category} className={catIdx !== 0 ? "mt-10 relative" : "relative"}>
                  {catIdx !== 0 && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[80%] h-px bg-foreground/15" />
                  )}
                  {/* Mobile Header */}
                  <div className="md:hidden flex flex-col justify-end border-b border-foreground/20 pb-2 mb-4">
                    <h4 className="font-semibold text-[13px] text-ink">{cat.category}</h4>
                  </div>
                  <div className={`hidden md:flex flex-col justify-end pb-2 mb-4 ${HEADER_HEIGHT}`} />

                  <div className="flex flex-col gap-3">
                    {cat.items.map((item) => (
                      <div key={item.label} className={`flex items-center justify-between md:justify-center ${ROW_HEIGHT}`}>
                        <span className="md:hidden text-[12px] text-foreground/60">{item.label}</span>
                        <CellValue value={item.growth} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Col 4: Enterprise */}
            <div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              {featureData.map((cat, catIdx) => (
                <div key={cat.category} className={catIdx !== 0 ? "mt-10 relative" : "relative"}>
                  {catIdx !== 0 && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[80%] h-px bg-foreground/15" />
                  )}
                  {/* Mobile Header */}
                  <div className="md:hidden flex flex-col justify-end border-b border-foreground/20 pb-2 mb-4">
                    <h4 className="font-semibold text-[13px] text-ink">{cat.category}</h4>
                  </div>
                  <div className={`hidden md:flex flex-col justify-end pb-2 mb-4 ${HEADER_HEIGHT}`} />

                  <div className="flex flex-col gap-3">
                    {cat.items.map((item) => (
                      <div key={item.label} className={`flex items-center justify-between md:justify-center text-center ${ROW_HEIGHT}`}>
                        <span className="md:hidden text-[12px] text-foreground/60 text-left">{item.label}</span>
                        <CellValue value={item.enterprise} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to homepage */}
        <div className="text-center mt-24">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-foreground/50 hover:text-ink transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to homepage
          </Link>
        </div>
      </div>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  );
}
