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
              Of AI.
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
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-stretch">
        {/* Left: Grayscale portrait */}
        <div className="relative aspect-[4/5] w-full min-h-[350px] lg:h-full lg:min-h-[500px]">
          <Image
            src={avatarUrl}
            alt="Priyanshu Sharma Portrait"
            fill
            className="object-cover grayscale contrast-120 brightness-95"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right: 2x3 info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16 py-4">
          {/* Item 1: NOW */}
          <div className="flex flex-col gap-1.5 justify-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              NOW
            </span>
            <h3 className="font-sans text-[18px] lg:text-[20px] font-bold tracking-[-0.01em] text-text-primary leading-tight">
              {infoGrid.now}
            </h3>
          </div>

          {/* Item 2: FOCUS */}
          <div className="flex flex-col gap-1.5 justify-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              FOCUS
            </span>
            <h3 className="font-sans text-[18px] lg:text-[20px] font-bold tracking-[-0.01em] text-text-primary leading-tight">
              {infoGrid.focus}
            </h3>
          </div>

          {/* Item 3: TEAM SIZE */}
          <div className="flex flex-col gap-1.5 justify-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              TEAM SIZE
            </span>
            <h3 className="font-sans text-[18px] lg:text-[20px] font-bold tracking-[-0.01em] text-text-primary leading-tight">
              {infoGrid.teamSize}
            </h3>
          </div>

          {/* Item 4: STACK OF CHOICE */}
          <div className="flex flex-col gap-1.5 justify-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              STACK OF CHOICE
            </span>
            <h3 className="font-sans text-[18px] lg:text-[20px] font-bold tracking-[-0.01em] text-text-primary leading-tight">
              {infoGrid.stackOfChoice}
            </h3>
          </div>

          {/* Item 5: CURRENTLY READING */}
          <div className="flex flex-col gap-1.5 justify-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              CURRENTLY READING
            </span>
            <h3 className="font-sans text-[18px] lg:text-[20px] font-bold tracking-[-0.01em] text-text-primary leading-tight">
              {infoGrid.currentlyReading}
            </h3>
          </div>

          {/* Item 6: CURRENTLY BUILDING */}
          <div className="flex flex-col gap-1.5 justify-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              CURRENTLY BUILDING
            </span>
            <h3 className="font-sans text-[18px] lg:text-[20px] font-bold tracking-[-0.01em] text-text-primary leading-tight">
              {infoGrid.currentlyBuilding}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
