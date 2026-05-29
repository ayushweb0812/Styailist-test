import { motion } from "framer-motion";

export function StylePassport() {
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-neon-purple/10 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 font-medium">
              — Style Passport —
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl tracking-tight mt-4 leading-[1.02]"
            >
              Every shopper gets a <span className="text-gradient-primary">living profile.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-foreground/65 leading-relaxed">
              Context, colour, fit, mood — read in real time and refined with every visit. Their
              stylist remembers, so your catalogue never has to start over.
            </p>
          </div>
        </div>

        {/* The stage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[640px] md:h-[700px] rounded-[2.5rem] bg-glass ring-glass shadow-glass overflow-hidden p-6"
        >
          {/* grid bg */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Center: tall gradient phone-like panel */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[380px] h-[480px] md:h-[560px] rounded-[36px] overflow-hidden ring-1 ring-white/40 shadow-glass">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.88 0.09 350) 0%, oklch(0.62 0.22 295) 100%)",
              }}
            />
            <div className="absolute inset-0 noise opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/55" />

            {/* Top tag */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md ring-1 ring-white/30">
              <span className="text-[11px] font-medium text-white tracking-wide">Look №042</span>
            </div>
            <div className="absolute top-5 right-5 size-8 rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/30 flex items-center justify-center">
              <span className="block size-1.5 rounded-full bg-white animate-pulse" />
            </div>

            {/* Center sparkle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="w-36 h-36 rounded-full ring-1 ring-white/30 flex items-center justify-center"
              >
                <span className="text-white/80 text-4xl">✦</span>
              </motion.div>
            </div>

            {/* Bottom overlay */}
            <div className="absolute bottom-6 inset-x-6 z-20 flex flex-col gap-4">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/70">
                  Style Passport · Elise · 28
                </p>
                <h3 className="font-display text-2xl text-white mt-1">Modern Romantic</h3>
                <p className="text-sm text-white/85">Autumn palette · Soft drape · High-rise</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["Breathable", "Drape: high", "94% match"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-md ring-1 ring-white/25 text-[11px] text-white font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating CONTEXT SCAN card — top left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 md:top-16 left-4 md:left-16 z-30 p-5 rounded-2xl bg-glass-strong ring-glass shadow-glass w-64 -rotate-2"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-medium text-foreground/55 uppercase tracking-wider">
                Context Scan
              </span>
              <span className="text-[10px] font-medium text-neon-purple">98.4% match</span>
            </div>
            <div className="space-y-2.5">
              {[
                ["Atmosphere", "Cloudy · 14°C"],
                ["Schedule", "Gallery opening"],
                ["Mood", "Soft tailoring"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-center text-sm">
                  <span className="text-ink font-medium">{k}</span>
                  <span className="text-foreground/55 font-mono text-xs">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Floating CONVERSION +312% card — top right */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-8 md:top-14 right-4 md:right-20 z-30 p-5 rounded-2xl bg-ink text-background w-52 rotate-3 shadow-glass"
          >
            <p className="text-[10px] uppercase tracking-wider text-background/55 font-mono">
              Conversion
            </p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-display text-4xl">+312</span>
              <span className="text-primary text-2xl">%</span>
            </div>
            <svg viewBox="0 0 100 30" className="mt-3 w-full">
              <motion.path
                d="M0 25 L 20 22 L 35 18 L 50 14 L 65 10 L 85 6 L 100 2"
                stroke="var(--neon-pink)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.4 }}
              />
            </svg>
          </motion.div>

          {/* Floating color palette — bottom right */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-4 md:right-24 z-30 p-3 rounded-[20px] bg-glass-strong ring-glass shadow-glass flex gap-2"
          >
            {["#1A1A1A", "#E5D5C6", "#8A3A4A", "#C9A4D4"].map((c) => (
              <div
                key={c}
                className="size-10 rounded-full ring-2 ring-white shadow-inner"
                style={{ background: c }}
              />
            ))}
          </motion.div>

          {/* Floating mini "Atmosphere" pill — bottom left */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-16 left-4 md:left-20 z-30 p-3 pl-4 pr-5 rounded-full bg-white shadow-glass ring-1 ring-white flex items-center gap-3 -rotate-3"
          >
            <span className="size-8 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center text-white text-xs">
              ★
            </span>
            <div className="text-xs">
              <p className="font-semibold text-ink leading-tight">Style score</p>
              <p className="text-foreground/55 font-mono">94 / 100</p>
            </div>
          </motion.div>

          {/* scan lines */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent absolute top-1/3" />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent absolute bottom-1/4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
