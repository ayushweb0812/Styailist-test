export function Footer() {
  return (
    <footer className="text-white px-6 py-10 md:py-12 relative overflow-hidden bg-[#0A0310]">
      <div className="absolute -top-20 left-1/3 w-[28rem] h-[28rem] rounded-full bg-neon-purple/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <a href="/" className="inline-flex items-center gap-2.5 group">
            <img
              src="/Styailist- Transparent.svg"
              alt="Styailist Logo"
              className="h-8 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="font-display text-lg font-semibold text-white">
              Styailist<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <a
              href="mailto:contact@styailist.com"
              className="hover:text-white transition-colors"
            >
              contact@styailist.com
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact us
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </nav>
        </div>

        <div className="relative mt-8 pt-6 flex flex-wrap justify-between gap-2 text-xs font-mono text-white/50 uppercase tracking-wider">
          {/* Gradient Divider */}
          <div 
            className="absolute top-0 left-0 right-0 h-[1px] opacity-40" 
            style={{ background: 'linear-gradient(90deg, rgba(255,141,184,0) 0%, #C084FC 50%, rgba(255,141,184,0) 100%)' }} 
          />
          <p>© 2026 SGHS Global</p>
          <p>Made with care</p>
        </div>
      </div>
    </footer>
  );
}
