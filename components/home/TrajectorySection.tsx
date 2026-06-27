import { experienceItems } from "@/content/experience";

export function TrajectorySection() {
  return (
    <section
      id="experience"
      className="border-t border-border py-[var(--spacing-section-y)] max-md:py-16"
    >
      {/* ── Section Header ── */}
      <div className="px-[var(--spacing-page-x)] max-md:px-5">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
          / 05 - TRAJECTORY
        </p>
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2>
              <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
                Six Years.
              </span>
              <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
                Four Teams.
              </span>
              <span className="display-outline block text-[clamp(2.2rem,5vw,4.5rem)]">
                One Craft.
              </span>
            </h2>
          </div>
          <div className="flex items-end font-mono text-[13px] lg:text-[14px] leading-[1.6] text-text-muted">
            <p className="max-w-[420px]">
              Each chapter overlapped with the next. Every team taught me
              something I now bring into the independent work.
            </p>
          </div>
        </div>
      </div>

      {/* ── Timeline Rows Stack ── */}
      <div className="mt-16 flex flex-col">
        {experienceItems.map((item, index) => {
          // Highlight current job and Square's title as accent/red per screenshot
          const isAccentRole = item.current || item.company === "Square";

          return (
            <div
              key={item.company}
              className={`${
                item.current
                  ? "bg-surface border-t border-b border-border"
                  : "border-b border-border"
              } ${index === 0 && !item.current ? "border-t border-border" : ""}`}
            >
              <div className="px-[var(--spacing-page-x)] py-8 lg:py-10 max-md:px-5 max-md:py-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr_3fr] gap-6 lg:gap-12 items-start">
                {/* Column 1: Date Range */}
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-accent lg:mt-1">
                  {item.dateRange}
                </div>

                {/* Column 2: Company & Location */}
                <div>
                  <h3 className="font-display text-[20px] lg:text-[22px] tracking-[-0.03em] text-text-primary">
                    {item.company}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted mt-1">
                    {item.location}
                  </p>
                </div>

                {/* Column 3: Role Description & Bullets */}
                <div>
                  <h4
                    className={`font-display text-[18px] lg:text-[20px] tracking-[-0.02em] ${
                      isAccentRole ? "text-accent" : "text-text-primary"
                    }`}
                  >
                    {item.role}
                  </h4>
                  <ul className="mt-4 flex flex-col gap-2.5 font-mono text-[13px] lg:text-[14px] leading-[1.6] text-text-muted">
                    {item.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent shrink-0 select-none">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
