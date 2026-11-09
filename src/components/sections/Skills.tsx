"use client";

import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { useState } from "react";
import { coreStack, skillGroups } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const hue: Record<string, string> = {
  ai: "#a78bfa",
  voice: "#22d3ee",
  languages: "#f59e0b",
  backend: "#34d399",
  frontend: "#f472b6",
  data: "#60a5fa",
  cloud: "#fb923c",
};

/** "LangGraph" → "LG", "Azure AI Search" → "AA", "pandas" → "Pa", "RAG" → "RA" */
const abbr = (s: string) => {
  const words = s.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length > 1) return words.slice(0, 2).map((w) => w[0].toUpperCase()).join("");
  const w = words[0] ?? s;
  const caps = w.match(/[A-Z0-9]/g) ?? [];
  if (caps.length >= 2) return caps.slice(0, 2).join("");
  return w[0].toUpperCase() + w.slice(1, 2);
};

export function Skills() {
  const [active, setActive] = useState<string>("all");

  const tiles =
    active === "all"
      ? skillGroups.flatMap((g) => g.skills.map((s) => ({ name: s, group: g.id })))
      : skillGroups.find((g) => g.id === active)!.skills.map((s) => ({ name: s, group: active }));
  // de-duplicate (e.g. HTML5 appears in two groups) for the "All" view
  const unique = tiles.filter((t, i) => tiles.findIndex((x) => x.name === t.name) === i);
  const current = skillGroups.find((g) => g.id === active);

  return (
    <section id="skills" className="relative">
      <div className="section-pad pb-12 md:pb-16">
        <SectionHeading
          index="02"
          eyebrow="Skills & technologies"
          title="The toolkit behind the systems."
          description="Verified against my production work and repositories — grouped by where I use them."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
          <Reveal className="min-w-0">
            <LayoutGroup>
              <div role="tablist" aria-label="Skill categories" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
                {[{ id: "all", title: "All", skills: unique }, ...skillGroups].map((g) => {
                  const selected = active === g.id;
                  return (
                    <button
                      key={g.id}
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(g.id)}
                      className={`relative flex shrink-0 items-center justify-between gap-4 rounded-2xl px-4 py-3 text-left text-sm transition-colors ${
                        selected ? "text-white" : "text-fog hover:text-white"
                      }`}
                    >
                      {selected && (
                        <motion.span
                          layoutId="skill-tab"
                          className="glass absolute inset-0 -z-10 rounded-2xl"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="flex items-center gap-2.5">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: g.id === "all" ? "linear-gradient(135deg,#22d3ee,#8b5cf6)" : hue[g.id] }}
                        />
                        {g.title}
                      </span>
                      <span className="font-mono text-xs text-fog/70">{g.id === "all" ? unique.length : g.skills.length}</span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
          </Reveal>

          <div role="tabpanel" aria-live="polite" className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-fog"
              >
                {current ? current.blurb : "Everything I work with"}
              </motion.p>
            </AnimatePresence>
            <motion.ul layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {unique.map((t, i) => (
                  <motion.li
                    key={t.name}
                    layout
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1, transition: { delay: Math.min(i * 0.02, 0.4) } }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    whileHover={{ y: -4 }}
                    className="group glass relative flex items-center gap-3 overflow-hidden rounded-2xl p-3 pr-4"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: `radial-gradient(120px circle at 20% 50%, ${hue[t.group]}22, transparent 70%)` }}
                    />
                    <span
                      aria-hidden
                      className="relative grid h-10 w-10 shrink-0 place-items-center rounded-xl font-mono text-xs font-bold transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                      style={{ color: hue[t.group], background: `${hue[t.group]}1a`, boxShadow: `inset 0 0 0 1px ${hue[t.group]}40` }}
                    >
                      {abbr(t.name)}
                    </span>
                    <span className="relative text-sm font-medium leading-tight text-mist group-hover:text-white">{t.name}</span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div aria-hidden className="relative overflow-hidden border-y border-line py-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {[...coreStack, ...coreStack].map((s, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold text-white/25 sm:text-3xl">
              {s}
              <span className="text-signal/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
