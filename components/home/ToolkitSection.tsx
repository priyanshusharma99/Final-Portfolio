import { skillCategories, marqueeSkills } from "@/content/skills";

export function ToolkitSection() {
  return (
    <section
      id="skills"
      className="border-t border-border py-[var(--spacing-section-y)] max-md:py-16"
    >
      {/* ── Top Header ── */}
      <div className="px-[var(--spacing-page-x)] max-md:px-5">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
          / 03 - TOOLKIT
        </p>
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2>
              <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
                The Tools
              </span>
              <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
                I Reach For.
              </span>
            </h2>
          </div>
          <div className="flex items-end font-mono text-[13px] lg:text-[14px] leading-[1.6] text-text-muted">
            <p className="max-w-[420px]">
              I'm stack-agnostic but I know what works. I pick tools that let me move fast, stay flexible, and not break everything when the scope changes. Here's what I default to.
            </p>
          </div>
        </div>
      </div>

      {/* ── Marquee Separator ── */}
      <div className="mt-16 overflow-hidden border-t border-b border-border bg-surface py-6 select-none">
        <div className="flex w-[200%] animate-marquee">
          {/* Double content for seamless looping */}
          <div className="flex justify-around min-w-full shrink-0 gap-12 items-center">
            {marqueeSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="display-outline-gray text-[clamp(3.2rem,6vw,5.5rem)]">
                  {skill}
                </span>
                <span className="font-display italic font-black text-accent text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
                  /
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-around min-w-full shrink-0 gap-12 items-center">
            {marqueeSkills.map((skill, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-12">
                <span className="display-outline-gray text-[clamp(3.2rem,6vw,5.5rem)]">
                  {skill}
                </span>
                <span className="font-display italic font-black text-accent text-[clamp(2.5rem,5vw,4.5rem)] leading-none">
                  /
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Skills Columns Grid ── */}
      <div className="mt-16 px-[var(--spacing-page-x)] max-md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-border max-md:border-l-0">
          {skillCategories.map((cat) => {
            const countStr = cat.skills.length.toString().padStart(2, "0");
            return (
              <div
                key={cat.category}
                className="border-r border-b border-border p-5 max-md:p-0 max-md:border-r-0 max-md:mt-8"
              >
                {/* Column header */}
                <div className="flex justify-between items-baseline border-b border-border pb-3 mb-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {cat.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                    {countStr}
                  </span>
                </div>

                {/* Skill items stack */}
                <div className="flex flex-col">
                  {cat.skills.map((skill, i) => (
                    <div
                      key={skill}
                      className={`py-2.5 font-display text-[18px] lg:text-[20px] text-text-primary tracking-[-0.03em] ${
                        i < cat.skills.length - 1 ? "border-b border-border-faint" : ""
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
