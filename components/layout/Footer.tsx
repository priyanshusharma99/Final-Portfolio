import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-[var(--spacing-page-x)] pt-16 pb-12 max-md:px-5 max-md:pt-16">
      {/* ── Top Layout Grid ── */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr_1fr] lg:gap-24">
        {/* Left Side: Brand Stack */}
        <div>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Currently / 2026
          </p>
          <h2>
            <span className="display-fill block text-[clamp(2rem,4vw,3.5rem)] leading-none text-text-primary">
              Alex Morgan<span className="text-accent">.</span>
            </span>
            <span className="display-outline-gray block text-[clamp(1.8rem,3.8vw,3.2rem)] leading-tight mt-2.5">
              Full-Stack Developer
            </span>
          </h2>
        </div>

        {/* Middle Column: Sitemap */}
        <div>
          <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Sitemap
          </span>
          <ul className="flex flex-col gap-2.5 font-mono text-[12px] uppercase tracking-[0.15em] text-text-muted">
            <li>
              <Link href="#about" className="hover:text-text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#work" className="hover:text-text-primary transition-colors">
                Work
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-text-primary transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#journal" className="hover:text-text-primary transition-colors">
                Journal
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column: Elsewhere */}
        <div>
          <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Elsewhere
          </span>
          <ul className="flex flex-col gap-2.5 font-mono text-[12px] uppercase tracking-[0.15em] text-text-muted">
            {[
              { name: "Github", url: "https://github.com" },
              { name: "Linkedin", url: "https://linkedin.com" },
              { name: "Twitter", url: "https://twitter.com" },
              { name: "Dribbble", url: "https://dribbble.com" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-text-primary transition-colors"
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-accent font-sans select-none">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Giant Outlined Graphic Text ── */}
      <div className="mt-16 select-none overflow-hidden max-md:mt-12">
        <span className="display-outline-gray block text-center text-[clamp(3.5rem,10vw,12rem)] font-black uppercase leading-none tracking-tight whitespace-nowrap opacity-60">
          Alex ✕ 2026
        </span>
      </div>

      {/* ── Bottom Copyright Row ── */}
      <div className="mt-10 pt-6 border-t border-border/40 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted max-md:mt-8">
        <div>&copy; 2026 Alex Morgan. All Rights Reserved.</div>
        <div>Designed &amp; Engineered in Brooklyn, NY.</div>
      </div>
    </footer>
  );
}
