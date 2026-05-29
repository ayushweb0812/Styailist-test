import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, decimals = 0, suffix = "%" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { if (ref.current) ref.current.textContent = v.toFixed(decimals); },
    });
    return c.stop;
  }, [inView, to, decimals, mv]);
  return (
    <span className="font-serif text-6xl md:text-7xl font-normal tracking-tight text-ink leading-none">
      <span ref={ref}>0</span>
      <span className="text-gradient-primary">{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 96, suffix: "%", label: "of shoppers leave without buying", tag: "Customers Leaving", visual: "bounce" },
  { value: 1.8, suffix: "%", decimals: 1, label: "average fashion site conversion rate", tag: "High Bounce Rate", visual: "bar" },
  { value: 30, suffix: "%", label: "of purchases are returned", tag: "Cart Abandonment", visual: "ring" },
];

export function Problem() {
  return (
    <section id="features" className="relative py-24 px-6">
      <div className="absolute top-1/4 -left-20 w-[40vw] h-[40vw] rounded-full bg-neon-pink/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 font-medium">— The problem —</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl font-normal tracking-tight mt-4 leading-[1.02] text-balance"
            >
              They didn't want fewer products.<br />
              <span className="text-gradient-primary">They wanted theirs.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-foreground/65 leading-relaxed">
              They wanted that one product your website is still waiting to show them — buried under 4,000 others that aren't.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-3xl bg-glass ring-glass shadow-card p-8 hover:shadow-glass transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">0{i + 1} / 03</span>
                <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-soft text-primary">{s.tag}</span>
              </div>
              <StatVisual kind={s.visual as "bounce" | "bar" | "ring"} />
              <div className="mt-8">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <p className="text-sm text-foreground/60 mt-3 leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-[2rem] bg-ink text-background p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-neon-pink/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-neon-purple/30 blur-3xl" />
          <div className="relative grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <span className="text-[11px] uppercase tracking-[0.25em] text-background/55 font-medium">— The solution —</span>
              <h3 className="font-serif text-3xl md:text-5xl font-normal mt-4 leading-[1.02]">
                Your catalogue<br />
                <span className="text-gradient-primary">just got a brain.</span>
              </h3>
              <p className="text-background/70 mt-5 max-w-md leading-relaxed">
                Styailist reads every shopper. Understands their style. Shows them exactly what's theirs.
              </p>
            </div>
            <div className="md:col-span-5 grid gap-2.5">
              {[
                { t: "Color Analysis", d: "Scans your catalogue for each shopper's unique palette", c: "var(--neon-pink)", emoji: "🎨" },
                { t: "Body Analysis", d: "Finds their body type and the cuts that match", c: "var(--neon-purple)", emoji: "👗" },
                { t: "Blend", d: "Add a place they're shopping for — we find the combination", c: "var(--sage)", emoji: "✨" },
              ].map((c, i) => (
                <motion.div
                  key={c.t}
                  whileHover={{ x: -6 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/5 backdrop-blur ring-1 ring-background/10 hover:bg-background/10 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl shrink-0 shadow-inner flex items-center justify-center text-lg" style={{ background: c.c }}>{c.emoji}</div>
                  <div className="flex-1">
                    <p className="font-medium">{c.t}</p>
                    <p className="text-xs text-background/60 mt-0.5">{c.d}</p>
                  </div>
                  <span className="text-background/40">→</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatVisual({ kind }: { kind: "bounce" | "bar" | "ring" }) {
  if (kind === "bounce") {
    return (
      <div className="h-24 relative flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute rounded-full ring-1 ring-neon-pink/40 animate-pulse-ring" style={{ width: 100, height: 100, animationDelay: `${i * 0.6}s` }} />
        ))}
        <div className="relative font-mono text-[10px] uppercase tracking-[0.2em] rounded-full bg-ink text-background px-3 py-1.5">Bounce</div>
      </div>
    );
  }
  if (kind === "bar") {
    return (
      <div className="h-24 flex items-end justify-center gap-1.5">
        {[40, 55, 35, 100, 50, 45, 60].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`w-3 rounded-sm ${i === 3 ? "bg-gradient-to-t from-neon-pink to-neon-purple" : "bg-ink/15"}`}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="h-24 flex items-center justify-center">
      <svg width="100" height="100" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--neon-pink)" />
            <stop offset="100%" stopColor="var(--neon-purple)" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="48" stroke="oklch(0.93 0.04 320)" strokeWidth="10" fill="none" />
        <motion.circle
          cx="60" cy="60" r="48"
          stroke="url(#ring-grad)" strokeWidth="10" fill="none" strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 48}
          initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
          whileInView={{ strokeDashoffset: 2 * Math.PI * 48 * 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          transform="rotate(-90 60 60)"
        />
        <text x="60" y="68" textAnchor="middle" className="fill-ink font-display" fontSize="22">↺</text>
      </svg>
    </div>
  );
}
