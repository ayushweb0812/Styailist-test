import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import dressRose from "@/assets/dress-rose.jpg";
import dressWildflower from "@/assets/dress-wildflower.jpg";
import dressPeony from "@/assets/dress-peony.jpg";
import dressDaisy from "@/assets/dress-daisy.jpg";

type Product = { name: string; img: string; match: number };
type Msg =
  | { id: string; from: "ai" | "user"; text: string }
  | { id: string; from: "ai"; products: Product[] };

const floralProducts: Product[] = [
  { name: "Rose garden midi", img: dressRose, match: 96 },
  { name: "Wildflower wrap", img: dressWildflower, match: 94 },
  { name: "Peony silk slip", img: dressPeony, match: 92 },
  { name: "Daisy linen maxi", img: dressDaisy, match: 90 },
];

const script: Msg[] = [
  { id: "m1", from: "ai", text: "Hi, I'm Styailist AI. How can I help you today?" },
  { id: "m2", from: "user", text: "Help me find a floral dress." },
  { id: "m3", from: "ai", text: "Getting the right outfits for you…" },
  { id: "m4", from: "ai", products: floralProducts },
];

export function TryIt() {
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (step >= script.length) {
      const reset = setTimeout(() => setStep(0), 6000);
      return () => clearTimeout(reset);
    }
    const next = script[step];
    const delay = next.from === "user" ? 1100 : 1400;
    if (next.from === "ai") setTyping(true);
    const t = setTimeout(() => {
      setTyping(false);
      setStep((s) => s + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [step]);

  const visible = script.slice(0, step);

  return (
    <section id="try" className="relative py-24 px-6 overflow-hidden">
      {/* Ambient gradient glow backdrop */}
      <div className="absolute inset-0 z-0">
        {/* Wide sweeping gradient wash across the full section */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,182,210,0.45) 0%, rgba(240,200,230,0.3) 25%, rgba(220,190,250,0.25) 50%, rgba(200,170,252,0.35) 75%, rgba(180,150,240,0.2) 100%)',
          }}
        />
        {/* Large pink glow — left side */}
        <div
          className="absolute -left-[5%] top-[0%] w-[65%] h-[100%] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(255,141,184,0.5) 0%, rgba(244,114,182,0.25) 45%, transparent 70%)' }}
        />
        {/* Large purple glow — right side */}
        <div
          className="absolute -right-[5%] top-[0%] w-[55%] h-[100%] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(192,132,252,0.45) 0%, rgba(168,85,247,0.2) 45%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12">
          <div className="md:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 font-medium">
              — Try it —
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl font-normal tracking-tight mt-4 leading-[1.02]"
            >
              A glimpse of <span className="italic text-gradient-primary">how it works.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-foreground/65 leading-relaxed">
              One short chat. Styailist surfaces the products genuinely right for them — in seconds.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-5"
        >
          {/* Chat conversation */}
          <div className="md:col-span-7 rounded-[2rem] bg-glass-strong ring-glass shadow-glass overflow-hidden flex flex-col min-h-[520px]">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/40 bg-white/40">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="/styailist.svg"
                    alt="Styailist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-display text-sm font-semibold">Styailist</span>
                <span className="ml-2 flex items-center gap-1 text-[10px] font-mono text-foreground/55">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" /> live
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-foreground/55">
                demo
              </span>
            </div>

            <div className="p-6 space-y-3 flex-1">
              <AnimatePresence initial={false}>
                {visible.map((m) => (
                  <motion.div
                    key={m.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {"text" in m ? (
                      <div
                        className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${m.from === "user"
                            ? "bg-gradient-to-br from-neon-pink to-neon-purple text-white rounded-br-md shadow-glow"
                            : "bg-white/80 ring-1 ring-white/70 text-ink rounded-bl-md"
                          }`}
                      >
                        {m.text}
                      </div>
                    ) : (
                      <div className="w-full">
                        <div className="grid grid-cols-4 gap-2">
                          {m.products.map((p, i) => (
                            <motion.div
                              key={p.name}
                              initial={{ opacity: 0, scale: 0.9, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ delay: 0.08 * i, duration: 0.4 }}
                              className="aspect-[3/4] rounded-xl relative overflow-hidden ring-1 ring-white/60 bg-white/40"
                            >
                              <img
                                src={p.img}
                                alt={p.name}
                                loading="lazy"
                                width={512}
                                height={704}
                                className="absolute inset-0 w-full h-full object-cover"
                              />
                              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                              <span className="absolute top-1.5 right-1.5 font-mono text-[9px] bg-white/90 text-ink px-1.5 py-0.5 rounded">
                                {p.match}%
                              </span>
                              <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] font-medium text-white leading-tight drop-shadow">
                                {p.name}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
                {typing && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/80 ring-1 ring-white/70 rounded-2xl rounded-bl-md px-4 py-2.5 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-foreground/50"
                          style={{ animation: `float-y 1.2s ease-in-out ${i * 0.15}s infinite` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="px-5 py-3 border-t border-white/40 bg-white/40 flex items-center gap-2">
              <div className="flex-1 rounded-full bg-white/70 ring-1 ring-white/60 px-4 py-2 text-xs text-foreground/50">
                Ask Styailist anything…
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center text-white text-sm">
                →
              </div>
            </div>
          </div>

          {/* Style Passport result */}
          <div className="md:col-span-5 rounded-[2rem] text-background p-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #170824 0%, #230A38 40%, #34104D 100%)', boxShadow: '0 10px 40px rgba(236,72,153,.15)' }}>
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-neon-pink/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-neon-purple/30 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/55">
                  Style Passport
                </p>
                <span className="font-mono text-[10px] uppercase tracking-wider bg-white/10 text-background/70 ring-1 ring-white/15 rounded-full px-2 py-0.5">
                  Verified
                </span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center font-display text-lg font-semibold">
                  A
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold leading-tight">User ABC</p>
                  <p className="text-xs text-background/60">Style ID · #SP-2049</p>
                </div>
              </div>

              <dl className="mt-6 space-y-3 text-sm">
                {[
                  { k: "Season", v: "Autumn" },
                  { k: "Highest shopping style", v: "Modern Romantic" },
                  { k: "Size", v: "M · UK 10" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-baseline justify-between gap-4 border-b border-background/10 pb-2"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-background/55">
                      {row.k}
                    </dt>
                    <dd className="font-display text-base font-medium text-background text-right">
                      {row.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex gap-2">
                {["#c44a1f", "#a8c0a0", "#f0d78c", "#f8c8c0"].map((c) => (
                  <div
                    key={c}
                    className="flex-1 h-7 rounded-full ring-1 ring-white/10"
                    style={{ background: c }}
                  />
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-background/55">
                  Best match
                </p>
                <p className="font-display text-lg font-semibold mt-1 leading-snug">
                  Fits your <span className="text-gradient-primary">Fall campaign</span> the best
                </p>
                <p className="text-xs text-background/60 mt-1">
                  96% alignment across palette, silhouette &amp; fit.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
