import { ArrowUpRight } from "lucide-react";

type HeroButtonProps = {
  label: string;
  href: string;
  variant: "white" | "outline";
};

function HeroButton({ label, href, variant }: HeroButtonProps) {
  const base =
    "flex items-center justify-between w-full px-8 h-14 font-mono text-[13px] font-bold uppercase tracking-[0.42em] transition-colors";

  const styles =
    variant === "white"
      ? "bg-text-primary text-text-inverse border border-text-primary hover:bg-text-secondary"
      : "bg-transparent text-text-primary border border-border-strong hover:border-text-muted";

  return (
    <a href={href} className={`${base} ${styles}`}>
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

type StatItemProps = {
  value: string;
  label: string;
};

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="py-5 lg:py-6">
      <p className="font-display text-[clamp(2rem,4.5vw,3rem)] leading-none tracking-[-0.04em] uppercase text-text-primary">
        {value}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
        {label}
      </p>
    </div>
  );
}

const stats: StatItemProps[] = [
  { value: "02", label: "Year Building" },
  { value: "12+", label: "Projects Launched" },
  { value: "-", label: "Open-Source Repos" },
  { value: "100+", label: "Users Impacted" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-var(--spacing-header-h))] flex-col px-[var(--spacing-page-x)] pt-6 pb-0 max-md:px-5"
    >
      {/* ── Metadata row ── */}
      <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-border py-4">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
          Portfolio / 2026
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          [01] — Based in Uttar Pradesh, India
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          [02] — Available for Freelance / Q3 2026
        </span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted max-lg:hidden">
          V 26.01 / Dec
        </span>
      </div>

      {/* ── Headline + right column ── */}
      <div className="flex flex-1 flex-col justify-center pt-10 pb-10 max-md:pt-8 max-md:pb-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
          {/* Left — massive headline */}
          <div className="flex flex-col justify-end">
            <h1>
              <span className="display-fill block text-[clamp(3.8rem,9vw,9.5rem)]">
                Building
              </span>
              <span className="display-fill block text-[clamp(3.8rem,9vw,9.5rem)]">
                Digital
              </span>
              <span className="display-fill block text-[clamp(3.8rem,9vw,9.5rem)]">
                Products
              </span>
              <span className="display-outline block text-[clamp(3.5rem,8.5vw,9rem)]">
                That
              </span>
              <span className="display-fill block text-[clamp(3.8rem,9vw,9.5rem)]">
                Actually
              </span>
              <span className="display-fill block text-[clamp(3.8rem,9vw,9.5rem)]">
                Ship.
              </span>
            </h1>
          </div>

          {/* Right — copy + CTAs */}
          <div className="flex flex-col justify-end gap-6 pb-2 lg:pb-8">
            <p className="font-mono text-[13px] leading-[1.6] text-text-muted max-w-[340px]">
              I design and build interfaces — not one or the other.

Started freelancing, now founding Voke — an AI-powered mock interview platform helping students and early-career folks actually prepare, perform, and succeed.


            </p>
            <div className="flex flex-col gap-2.5">
              <HeroButton
                label="View Selected Work"
                href="#work"
                variant="white"
              />
              <HeroButton
                label="Get In Touch"
                href="#contact"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats grid ── */}
      <div className="grid grid-cols-2 border-t border-border lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`${i > 0 ? "lg:border-l lg:pl-6" : ""} ${i === 2 ? "border-t border-border lg:border-t-0" : ""} ${i === 3 ? "border-t border-border lg:border-t-0" : ""} ${i % 2 !== 0 ? "max-lg:border-l max-lg:pl-6" : ""} border-border`}
          >
            <StatItem value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>

      {/* ── Scroll cue ── */}
      <div className="flex items-center gap-2 py-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-text-muted">
          ↓ Scroll
        </span>
      </div>
    </section>
  );
}
