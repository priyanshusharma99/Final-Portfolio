"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  // Set index 2 (Sara El-Sayed, 3rd card) as active by default to match the design screenshot
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="words"
      className="border-t border-border px-[var(--spacing-page-x)] py-[var(--spacing-section-y)] max-md:px-5 max-md:py-16"
    >
      {/* ── Section Header ── */}
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
        / 06 - KIND WORDS
      </p>
      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <h2>
            <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
              From the People
            </span>
            <span className="display-outline block text-[clamp(2.2rem,5vw,4.5rem)]">
              I&apos;ve Built With.
            </span>
          </h2>
        </div>
        <div className="flex items-end font-mono text-[13px] lg:text-[14px] leading-[1.6] text-text-muted">
          <p className="max-w-[420px]">
            A few notes from founders, design leads and engineers I&apos;ve shipped
            alongside.
          </p>
        </div>
      </div>

      {/* ── Testimonials Grid ── */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={t.author}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col justify-between aspect-square p-7 border transition-all duration-300 cursor-pointer select-none max-md:p-6 max-md:aspect-auto max-md:min-h-[220px] ${
                isActive
                  ? "border-accent bg-surface-raised shadow-[0_0_24px_rgba(255,59,48,0.06)]"
                  : "border-border bg-surface hover:border-border-strong"
              }`}
            >
              {/* Hot Red Quote Mark */}
              <div className="text-accent font-display text-[36px] leading-none">
                “
              </div>

              {/* Quote Text */}
              <p className="font-display text-[13px] lg:text-[14px] leading-[1.6] text-text-primary tracking-[-0.02em] mt-3 flex-1">
                {t.quote.replace(/[“”]/g, "")}
              </p>

              {/* Author & Context Footer */}
              <div className="mt-6 border-t border-border-strong pt-4">
                <p className="font-mono text-[12px] font-bold text-text-primary uppercase tracking-[0.2em]">
                  {t.author}
                </p>
                <p className="font-mono text-[10px] text-text-muted uppercase tracking-[0.2em] mt-1 leading-tight">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Slider Arrows ── */}
      <div className="mt-12 flex justify-end gap-3">
        <button
          onClick={handlePrev}
          className="w-12 h-12 border border-border-strong hover:border-text-secondary flex items-center justify-center transition-colors text-text-primary cursor-pointer hover:bg-surface"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 border border-border-strong hover:border-text-secondary flex items-center justify-center transition-colors text-text-primary cursor-pointer hover:bg-surface"
          aria-label="Next testimonial"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
