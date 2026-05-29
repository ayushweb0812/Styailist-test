const items = [
  "Style Passport",
  "✦",
  "12–15 perfect picks",
  "✦",
  "24-hour go-live",
  "✦",
  "One snippet",
  "✦",
  "Returns ↓ 38%",
  "✦",
  "AOV ↑ 24%",
  "✦",
  "Built for fashion",
  "✦",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative bg-ink text-background overflow-hidden py-5">
      <div className="absolute inset-0 opacity-40" style={{ background: "linear-gradient(90deg, transparent, var(--neon-purple) 50%, transparent)" }} />
      <div className="relative flex animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl mx-8 flex items-center font-medium">
            {t === "✦" ? <span className="text-primary">{t}</span> : <span className="font-italic">{t}</span>}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink to-transparent" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
