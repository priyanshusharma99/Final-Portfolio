import { ContactForm } from "@/components/contact/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border px-[var(--spacing-page-x)] py-[var(--spacing-section-y)] max-md:px-5 max-md:py-16"
    >
      {/* ── Section Header ── */}
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
        / 08 - GET IN TOUCH
      </p>
      <div className="mt-6">
        <h2>
          <span className="display-fill block text-[clamp(2.5rem,5.5vw,5rem)]">
            Let&apos;s Build
          </span>
          <span className="display-outline block text-[clamp(2.2rem,5vw,4.5rem)]">
            Something Good.
          </span>
        </h2>
      </div>

      {/* ── Layout Grid ── */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-24 items-start">
        {/* Left Column: Details */}
        <div className="flex flex-col gap-8 max-w-[420px]">
          {/* Email segment */}
          <div className="border-b border-border/40 pb-6">
            <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Email
            </span>
            <a
              href="mailto:priyanshu.s25358@nst.rishihood.edu.in"
              className="font-display text-[18px] lg:text-[20px] tracking-[-0.03em] text-text-primary hover:text-accent transition-colors break-all"
            >
              priyanshu.s25358@nst.rishihood.edu.in
            </a>
          </div>

          {/* Availability segment */}
          <div className="border-b border-border/40 pb-6">
            <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3">
              Availability
            </span>
            <p className="font-mono text-[13px] leading-relaxed text-text-muted">
              Available for freelance / Q2 2026
            </p>
          </div>

          {/* Social segment */}
          <div>
            <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
              Social
            </span>
            <ul className="flex flex-col gap-3 font-mono text-[13px] text-text-muted">
              {[
                { name: "Github", url: "https://github.com/priyanshusharma99" },
                { name: "Linkedin", url: "https://www.linkedin.com/in/priyanshu-sharma-7356b0380/" },
                { name: "Twitter", url: "https://twitter.com" },
                { name: "Dribbble", url: "https://dribbble.com" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-text-primary hover:underline transition-colors decoration-accent decoration-1 underline-offset-4"
                  >
                    <span>{social.name}</span>
                    <span className="text-[10px] text-accent font-sans select-none">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}
