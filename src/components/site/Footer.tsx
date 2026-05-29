export function Footer() {
  return (
    <footer className="bg-ink text-background/80 px-6 py-10 relative overflow-hidden">
      <div className="absolute -top-20 left-1/3 w-[28rem] h-[28rem] rounded-full bg-neon-purple/15 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a href="/" className="inline-flex items-center gap-2.5 group">
            <img
              src="/Styailist- Transparent.svg"
              alt="Styailist Logo"
              className="h-8 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="font-display text-lg font-semibold text-background">
              Styailist<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:contact@styailist.com"
              className="hover:text-background transition-colors"
            >
              contact@styailist.com
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Contact us
            </a>
            <a href="/privacy" className="hover:text-background transition-colors">
              Privacy policy
            </a>
            <a href="/terms" className="hover:text-background transition-colors">
              Terms
            </a>
          </nav>
        </div>

        <div className="mt-6 pt-4 border-t border-background/10 flex flex-wrap justify-between gap-2 text-xs font-mono text-background/50 uppercase tracking-wider">
          <p>© 2026 SGHS Global</p>
          <p>Made with care</p>
        </div>
      </div>
    </footer>
  );
}
