import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LeadModal } from "./LeadModal";

export function CTA() {
  return (
    <section className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto rounded-[2.5rem] px-8 py-20 md:py-28 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, oklch(0.96 0.04 340), oklch(0.97 0.02 310) 45%, oklch(0.94 0.05 270))" }}
      >
        <div className="absolute inset-0 noise opacity-20" />
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-neon-pink/15 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-neon-purple/15 blur-3xl animate-blob" style={{ animationDelay: "-8s" }} />

        <div className="relative">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/60">— Ready when you are —</span>
          <h2 className="font-serif font-normal tracking-tight text-ink mt-4 leading-[1]">
            <span className="text-5xl md:text-7xl">Book a demo</span>
            <br />
            <span
              className="bg-clip-text text-transparent text-6xl md:text-8xl"
              style={{ backgroundImage: "linear-gradient(90deg, #f8a8c8 0%, #d98ad6 50%, #a06bd8 100%)" }}
            >
              no credit card required.
            </span>
          </h2>
          <p className="text-ink/70 mt-6 max-w-lg mx-auto">
            Join 1,200+ fashion brands giving every shopper a personal stylist.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <LeadModal>
              <button className="group inline-flex items-center gap-2 rounded-full bg-ink text-white pl-6 pr-2 py-2 text-base font-medium hover:scale-[1.02] transition-transform outline-none">
                Book a demo
                <span className="w-9 h-9 rounded-full bg-white text-ink flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </button>
            </LeadModal>
          </div>
          <p className="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-ink/50">No card required · cancel anytime</p>
        </div>
      </motion.div>
    </section>
  );
}
