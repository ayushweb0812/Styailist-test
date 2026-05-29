import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LeadModal } from "./LeadModal";

const links = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how" },
  { label: "Pricing", href: "/#pricing" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["oklch(1 0 0 / 0)", "oklch(1 0 0 / 0.6)"]);
  const border = useTransform(
    scrollY,
    [0, 80],
    ["oklch(0.92 0.014 320 / 0)", "oklch(0.92 0.014 320 / 1)"],
  );

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-2xl border-b"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/Styailist- Transparent.svg"
            alt="Styailist Logo"
            className="h-8 w-auto group-hover:scale-105 transition-transform"
          />
          <span className="font-display text-xl font-semibold tracking-tight">
            Styailist<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 rounded-full text-foreground/70 hover:text-ink hover:bg-glass transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://my.styailist.com/signup"
            className="hidden sm:inline text-sm font-medium text-foreground/70 hover:text-ink transition-colors"
          >
            Sign Up
          </a>
          <LeadModal>
            <button className="group inline-flex items-center gap-2 rounded-full bg-ink text-background pl-4 pr-1.5 py-1.5 text-sm font-medium hover:shadow-glow transition-all outline-none">
              Book a demo
              <span className="w-7 h-7 rounded-full bg-background text-ink flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </button>
          </LeadModal>
        </div>
      </div>
    </motion.header>
  );
}
