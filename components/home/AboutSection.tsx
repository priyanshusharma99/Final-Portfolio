import Image from "next/image";
import { profile } from "@/content/profile";

export function AboutSection() {
  const { longBioParagraphs, infoGrid, avatarUrl } = profile;

  return (
    <section
      id="about"
      className="border-t border-border px-[var(--spacing-page-x)] py-[var(--spacing-section-y)] max-md:px-5 max-md:py-16"
    >
      {/* ── Section Kicker ── */}
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
        / 02 - ABOUT
      </p>

      {/* ── Top Grid: Heading + Bio Paragraphs ── */}
      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        {/* Left: Giant Heading */}
        <div>
          <h2>
            <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
              Engineer
            </span>
            <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
              With the Eye
            </span>
            <span className="display-outline block text-[clamp(2.2rem,5vw,4.5rem)]">
              Of a Designer.
            </span>
          </h2>
        </div>

        {/* Right: Monospace paragraphs */}
        <div className="flex flex-col gap-5 font-mono text-[13px] lg:text-[14px] leading-[1.6] text-text-muted">
          {longBioParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      {/* ── Bottom Grid: Grayscale Portrait + Info Grid ── */}
      <div className="mt-16 border border-border grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] overflow-hidden">
        {/* Left: Grayscale portrait */}
        <div className="relative aspect-[4/5] w-full min-h-[350px] lg:h-full lg:min-h-[500px] border-r border-border max-lg:border-r-0 max-lg:border-b">
          <Image
            src={avatarUrl}
            alt="Alex Morgan Portrait"
            fill
            className="object-cover grayscale contrast-120 brightness-95"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right: 2x3 info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Item 1: NOW */}
          <div className="p-6 flex flex-col justify-between min-h-[140px]">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              NOW
            </span>
            <h3 className="font-display text-[18px] lg:text-[20px] tracking-[-0.03em] text-text-primary leading-tight mt-4">
              {infoGrid.now}
            </h3>
          </div>

          {/* Item 2: FOCUS */}
          <div className="p-6 flex flex-col justify-between min-h-[140px] border-t border-border md:border-t-0 md:border-l">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              FOCUS
            </span>
            <h3 className="font-display text-[18px] lg:text-[20px] tracking-[-0.03em] text-text-primary leading-tight mt-4">
              {infoGrid.focus}
            </h3>
          </div>

          {/* Item 3: TEAM SIZE */}
          <div className="p-6 flex flex-col justify-between min-h-[140px] border-t border-border">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              TEAM SIZE
            </span>
            <h3 className="font-display text-[18px] lg:text-[20px] tracking-[-0.03em] text-text-primary leading-tight mt-4">
              {infoGrid.teamSize}
            </h3>
          </div>

          {/* Item 4: STACK OF CHOICE */}
          <div className="p-6 flex flex-col justify-between min-h-[140px] border-t border-border md:border-l">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              STACK OF CHOICE
            </span>
            <h3 className="font-display text-[18px] lg:text-[20px] tracking-[-0.03em] text-text-primary leading-tight mt-4">
              {infoGrid.stackOfChoice}
            </h3>
          </div>

          {/* Item 5: CURRENTLY READING */}
          <div className="p-6 flex flex-col justify-between min-h-[140px] border-t border-border">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              CURRENTLY READING
            </span>
            <h3 className="font-display text-[18px] lg:text-[20px] tracking-[-0.03em] text-text-primary leading-tight mt-4">
              {infoGrid.currentlyReading}
            </h3>
          </div>

          {/* Item 6: CURRENTLY BUILDING */}
          <div className="p-6 flex flex-col justify-between min-h-[140px] border-t border-border md:border-l">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              CURRENTLY BUILDING
            </span>
            <h3 className="font-display text-[18px] lg:text-[20px] tracking-[-0.03em] text-text-primary leading-tight mt-4">
              {infoGrid.currentlyBuilding}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
