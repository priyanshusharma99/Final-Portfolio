import { projects } from "@/content/projects";
import { ProjectTile } from "@/components/projects/ProjectTile";

export function SelectedWork() {
  // Map projects by their expected indices
  const p1 = projects[0]; // [01] Lumen Analytics
  const p2 = projects[1]; // [02] Northwind Studio
  const p3 = projects[2]; // [03] Cardinal Health AI
  const p4 = projects[3]; // [04] Glide Wallet

  return (
    <section
      id="work"
      className="border-t border-border px-[var(--spacing-page-x)] py-[var(--spacing-section-y)] max-md:px-5 max-md:py-16"
    >
      {/* ── Section Header ── */}
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
        / 04 - SELECTED WORK
      </p>
      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <h2>
            <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
              Work That
            </span>
            <span className="display-outline block text-[clamp(2.2rem,5vw,4.5rem)]">
              Shipped.
            </span>
          </h2>
        </div>
        <div className="flex items-end font-mono text-[13px] lg:text-[14px] leading-[1.6] text-text-muted">
          <p className="max-w-[420px]">
            A small selection from the last 24 months. Most engagements are under
            NDA, so what you see below is what I can show in public.
          </p>
        </div>
      </div>

      {/* ── Asymmetric Editorial Project Grid ── */}
      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left Column Stack */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {p1 && <ProjectTile project={p1} index={0} />}
          {p4 && <ProjectTile project={p4} index={3} />}
        </div>

        {/* Right Column Stack (Offset dynamically using lg:pt-32 for asymmetry) */}
        <div className="flex flex-col gap-16 lg:gap-24 lg:pt-32">
          {p2 && <ProjectTile project={p2} index={1} />}
          {p3 && <ProjectTile project={p3} index={2} />}
        </div>
      </div>
    </section>
  );
}
