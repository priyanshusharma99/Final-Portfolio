"use client";

import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="w-full">
      {status === "success" && (
        <div className="mb-8 border border-accent bg-surface-raised p-6 text-text-primary">
          <p className="font-mono text-[12px] font-bold text-accent uppercase tracking-[0.2em]">
            / MESSAGE SENT
          </p>
          <p className="font-display text-[18px] tracking-[-0.01em] mt-3">
            Thank you! I&apos;ve received your message and will get back to you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted hover:text-accent border-b border-border-strong pb-0.5"
          >
            Send Another Message
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name & Email Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2.5"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={status === "submitting"}
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full bg-surface border border-border px-4 py-3 font-mono text-[13px] text-text-primary placeholder-text-muted/40 focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2.5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={status === "submitting"}
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full bg-surface border border-border px-4 py-3 font-mono text-[13px] text-text-primary placeholder-text-muted/40 focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2.5"
          >
            Subject (Optional)
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            disabled={status === "submitting"}
            value={formData.subject}
            onChange={handleChange}
            placeholder="New project, collaboration, hello..."
            className="w-full bg-surface border border-border px-4 py-3 font-mono text-[13px] text-text-primary placeholder-text-muted/40 focus:border-accent focus:outline-none transition-colors disabled:opacity-50"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-2.5"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            disabled={status === "submitting"}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me a bit about what you're working on..."
            className="w-full bg-surface border border-border px-4 py-3 font-mono text-[13px] text-text-primary placeholder-text-muted/40 focus:border-accent focus:outline-none transition-colors resize-none disabled:opacity-50"
          />
        </div>

        {/* Bottom Actions Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-2 pt-4 border-t border-border/40">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
            Usual reply in &lt; 24h
          </span>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-accent text-text-inverse font-sans text-[11px] font-extrabold uppercase tracking-[0.2em] px-6 py-3.5 cursor-pointer hover:bg-accent-dark transition-colors flex items-center justify-center gap-2 self-end sm:self-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send Message →"}
          </button>
        </div>
      </form>
    </div>
  );
}
