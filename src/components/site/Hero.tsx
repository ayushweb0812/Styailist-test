import { motion } from "framer-motion";
import { LeadModal } from "./LeadModal";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-24 overflow-hidden bg-hero-glow">
      {/* Ambient gradient washes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-neon-pink/20 blur-[120px] animate-blob" />
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-neon-purple/20 blur-[140px] animate-blob"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">
        <motion.a
          href="https://my.styailist.com/signup"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glass-strong ring-glass shadow-soft text-xs font-medium text-ink/80 hover:bg-white transition-all"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inset-0 rounded-full bg-neon-pink animate-ping opacity-75" />
            <span className="relative rounded-full w-2 h-2 bg-neon-pink" />
          </span>
          Sign up — see a store using Styailist in real time
          <span className="text-neon-purple">→</span>
        </motion.a>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
          }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-balance text-ink mt-8 max-w-5xl mx-auto"
        >
          {"Your customer's outfit is ".split(" ").map((word, i) => (
            <motion.span
              key={`h1-${i}`}
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="inline-block py-2"
          >
            <span className="text-gradient-primary">hiding in your catalogue</span>.
          </motion.span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.04, delayChildren: 0.55 } },
          }}
          className="text-2xl md:text-3xl text-foreground/55 mt-6 font-medium"
        >
          {"Will they find it in time?".split(" ").map((word, i) => (
            <motion.span
              key={`p1-${i}`}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.025, delayChildren: 0.75 } },
          }}
          className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto mt-8"
        >
          {"Styailist collapses your entire range down to the products genuinely right for each shopper the moment they land."
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={`p2-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-9"
        >
          <LeadModal>
            <button className="h-12 px-7 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-medium text-sm flex items-center gap-2 hover:shadow-glow hover:scale-[1.02] transition-all active:scale-[0.98] outline-none">
              Book a demo
              <span>✨</span>
            </button>
          </LeadModal>
        </motion.div>
      </div>

      {/* Floating glass thought streams */}
      <div className="mt-16 space-y-3 w-[95%] max-w-[1800px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex gap-3 animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, dup) => (
            <div key={`l-${dup}`} className="flex gap-3 shrink-0">
              {[
                "Wait for the right product…",
                "What size will fit me?",
                "Will this look good on me?",
                "Is this really my style?",
              ].map((t, i) => (
                <span
                  key={i}
                  className="shrink-0 px-5 py-2.5 rounded-full bg-glass-strong ring-glass shadow-soft text-sm text-ink/80 font-medium"
                >
                  <span className="text-neon-pink mr-2">“</span>
                  {t}
                  <span className="text-neon-purple ml-1">”</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <div
          className="flex gap-3 animate-marquee whitespace-nowrap"
          style={{ animationDirection: "reverse", animationDuration: "35s" }}
        >
          {[...Array(8)].map((_, dup) => (
            <div key={`r-${dup}`} className="flex gap-3 shrink-0">
              {[
                "Will customers pick what they like from our new collection?",
                "Have they added it to cart?",
                "How do I suggest they should buy this piece?",
                "Which look closes the sale?",
              ].map((t, i) => (
                <span
                  key={i}
                  className="shrink-0 px-5 py-2.5 rounded-full bg-glass ring-glass shadow-soft text-sm text-foreground/70 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
