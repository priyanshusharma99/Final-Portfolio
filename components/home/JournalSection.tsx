"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { journalPosts } from "@/content/journal";

export function JournalSection() {
  return (
    <section
      id="journal"
      className="border-t border-border py-[var(--spacing-section-y)] max-md:py-16"
    >
      {/* ── Section Header ── */}
      <div className="px-[var(--spacing-page-x)] max-md:px-5">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
          / 07 - JOURNAL
        </p>
        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <h2>
              <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
                Notes on Craft,
              </span>
              <span className="display-outline block text-[clamp(2.2rem,5vw,4.5rem)]">
                Shipping &amp; Taste.
              </span>
            </h2>
          </div>
          <div className="flex items-end font-mono text-[13px] lg:text-[14px] leading-[1.6] text-text-muted">
            <p className="max-w-[420px]">
              A weekly note. Mostly engineering. Occasionally design. Never AI
              hype.
            </p>
          </div>
        </div>
      </div>

      {/* ── Journal List Stack ── */}
      <div className="mt-16 flex flex-col">
        {journalPosts.map((post, index) => {
          return (
            <Link
              key={post.slug}
              href={`#`}
              className={`group border-b border-border transition-colors duration-200 block hover:bg-surface-raised/30 ${
                index === 0 ? "border-t border-border" : ""
              }`}
            >
              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-[60px_180px_1fr_220px_40px] items-center gap-4 py-6 lg:py-8 px-[var(--spacing-page-x)]">
                {/* Index */}
                <span className="font-mono text-[12px] text-text-muted group-hover:text-text-secondary transition-colors">
                  [{post.index}]
                </span>

                {/* Category */}
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="font-display text-[18px] lg:text-[20px] tracking-[-0.03em] text-text-primary group-hover:text-accent transition-colors pr-8">
                  {post.title}
                </h3>

                {/* Date & Read Time */}
                <span className="font-mono text-[12px] text-text-muted text-right">
                  {post.date} &nbsp;&middot;&nbsp; {post.readTime}
                </span>

                {/* Arrow */}
                <div className="flex justify-end pr-2 text-text-muted group-hover:text-accent transition-transform duration-200">
                  {/* ArrowRight for group-hover or featured, ArrowUpRight otherwise */}
                  <ArrowUpRight className="h-4 w-4 block group-hover:hidden" />
                  <ArrowRight className="h-4 w-4 hidden group-hover:block" />
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden grid grid-cols-[30px_1fr_24px] gap-4 py-6 px-5">
                {/* Index */}
                <span className="font-mono text-[11px] text-text-muted mt-0.5">
                  {post.index}
                </span>

                {/* Middle Content */}
                <div>
                  <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="font-display text-[16px] tracking-[-0.01em] text-text-primary group-hover:text-accent transition-colors leading-[1.35] mb-2">
                    {post.title}
                  </h3>
                  <span className="font-mono text-[11px] text-text-muted block">
                    {post.date} &nbsp;&middot;&nbsp; {post.readTime}
                  </span>
                </div>

                {/* Arrow */}
                <div className="self-center justify-self-end text-text-muted group-hover:text-accent">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
