import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const WORDS = ["demo", "call", "trial"];

export function CTA() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        timeoutId = setTimeout(() => { }, 500); // Pause before typing next
      } else {
        timeoutId = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 100); // Deleting speed
      }
    } else {
      if (text === currentWord) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Pause when fully typed
      } else {
        timeoutId = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 150); // Typing speed
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto rounded-[2.5rem] px-8 py-24 md:py-32 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,.9), rgba(248,249,252,.9))",
        }}
      >
        <div className="absolute inset-0 noise opacity-[0.15]" />

        <div className="relative">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink/40">
            — Ready when you are —
          </span>
          <h2 className="font-sans font-medium tracking-tight text-ink mt-6 leading-[1.1] flex flex-wrap justify-center items-center gap-x-3">
            <span className="text-6xl md:text-8xl">Book a</span>
            <span className="flex items-center">
              <span
                className="bg-clip-text text-transparent text-6xl md:text-8xl animate-fluid-gradient relative"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF8DB8 0%, #F472B6 25%, #C084FC 50%, #FF8DB8 75%, #F472B6 100%)",
                }}
              >
                {text}
              </span>
              <span className="text-6xl md:text-8xl font-light text-foreground/40 animate-blink ml-1">
                |
              </span>
            </span>
          </h2>
          <p className="text-ink/60 mt-6 max-w-md mx-auto text-[17px]">
            Join us and give your shoppers a personal stylist.
          </p>
          <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">
            <a
              href="https://calendly.com/sanyogita-sghsglobal/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-white pl-6 pr-2 py-2 text-base font-medium hover:scale-[1.05] transition-transform outline-none animate-cta-pulse"
            >
              Book a demo
              <span className="w-8 h-8 rounded-full bg-white text-ink flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </a>
          </div>
          <p className="mt-14 text-[10px] font-mono uppercase tracking-[0.3em] text-ink/40">
            No card required
          </p>
        </div>
      </motion.div>
    </section>
  );
}
