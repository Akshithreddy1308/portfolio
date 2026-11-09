"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Loader2, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import { SplitReveal, Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Magnetic } from "@/components/ui/Magnetic";

type Status = "idle" | "sending" | "sent" | "error";

// FormSubmit relays messages to the inbox without a backend or API key.
const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data._honey) return; // bot
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Portfolio message from ${data.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean };
      if (!res.ok || String(json.success) === "false") throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-fog/60 outline-none transition focus:border-signal/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-signal/10";

  return (
    <section id="contact" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(139,92,246,0.18),rgba(34,211,238,0.08)_40%,transparent_70%)] blur-2xl" />
      </div>

      <div className="section-pad">
        <Reveal className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-signal">
          <span className="text-fog/60">07</span>
          <span className="h-px w-10 bg-gradient-to-r from-signal to-transparent" />
          Contact
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl">
              <SplitReveal text="Let's build something" />
              <br />
              <SplitReveal text="intelligent." className="text-gradient" delay={0.2} />
            </h2>
            <Reveal delay={0.2} className="mt-6 max-w-md text-base leading-relaxed text-fog sm:text-lg">
              Open to conversations about AI engineering roles, agentic systems, voice AI and interesting collaborations.
              My inbox is always open.
            </Reveal>

            <Reveal delay={0.3} className="mt-10 space-y-3">
              <div className="glass flex flex-wrap items-center gap-4 rounded-2xl p-4 sm:flex-nowrap">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-signal/10 text-signal">
                  <Mail size={19} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-fog">Email</p>
                  <a href={`mailto:${profile.email}`} className="block truncate text-sm font-medium text-white hover:text-signal sm:text-base">
                    {profile.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-mist transition hover:border-white/30 hover:text-white"
                  aria-label="Copy email address"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "y" : "n"}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="inline-flex items-center gap-1.5"
                    >
                      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      {copied ? "Copied" : "Copy"}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { label: "LinkedIn", sub: "Akshith Reddy", href: profile.socials.linkedin, Icon: LinkedinIcon },
                  { label: "GitHub", sub: "@Akshithreddy1308", href: profile.socials.github, Icon: GithubIcon },
                ].map(({ label, sub, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass group flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1 hover:border-signal/30"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-white">
                      <Icon size={19} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium text-white">{label}</span>
                      <span className="block text-xs text-fog">{sub}</span>
                    </span>
                    <ArrowUpRight size={16} className="text-fog transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={onSubmit} className="glass relative rounded-[28px] p-6 sm:p-8" aria-describedby="form-status">
              <h3 className="font-display text-xl font-semibold text-white">Send a message</h3>
              <p className="mt-1 text-sm text-fog">I usually reply within a day or two.</p>
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-medium text-mist">Name</span>
                    <input name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className={field} />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-medium text-mist">Email</span>
                    <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={field} />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-xs font-medium text-mist">Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    maxLength={3000}
                    placeholder="Tell me about the role, project or idea…"
                    className={`${field} resize-none`}
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.2}>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition disabled:opacity-70"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-signal via-pulse to-ember transition-transform duration-500 group-hover:translate-x-0" />
                    <span className="relative inline-flex items-center gap-2">
                      {status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                      {status === "sending" ? "Sending…" : "Send message"}
                    </span>
                  </button>
                </Magnetic>
                <p id="form-status" role="status" className="text-sm">
                  {status === "sent" && <span className="text-emerald-400">Thanks — your message is on its way!</span>}
                  {status === "error" && (
                    <span className="text-rose-400">
                      Couldn&apos;t send right now. Please email{" "}
                      <a className="underline" href={`mailto:${profile.email}`}>
                        directly
                      </a>
                      .
                    </span>
                  )}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
