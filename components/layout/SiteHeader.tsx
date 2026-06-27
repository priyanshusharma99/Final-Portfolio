"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Words", href: "#words" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-[var(--spacing-header-h)] items-center border-b border-border bg-background px-[var(--spacing-page-x)] max-md:h-[68px] max-md:px-5">
      {/* ── Logo ── */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <span className="block h-2 w-2 bg-accent" />
        <span className="font-display text-[16px] lg:text-[18px] uppercase tracking-tight text-text-primary">
          Alex Morgan
        </span>
      </Link>

      {/* ── Desktop nav ── */}
      <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-text-primary"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* ── CTA button ── */}
      <a
        href="#contact"
        className="ml-auto hidden bg-accent text-text-inverse px-5 h-[38px] items-center font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors hover:bg-accent-dark lg:flex"
      >
        Start a Project →
      </a>

      {/* ── Mobile menu toggle ── */}
      <button
        className="ml-auto flex h-10 w-10 items-center justify-center border border-border-strong text-text-primary lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* ── Mobile menu panel ── */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[68px] bottom-0 z-40 flex flex-col bg-background border-t border-border px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-[13px] uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-8 flex bg-accent text-text-inverse px-5 h-[42px] items-center justify-center font-sans text-[11px] font-extrabold uppercase tracking-[0.2em]"
          >
            Start a Project →
          </a>
        </div>
      )}
    </header>
  );
}
