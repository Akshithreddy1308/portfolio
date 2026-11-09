"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, Check, Star } from "lucide-react";
import type { PointerEvent } from "react";
import { profile, projects, type Project } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { ProjectArt } from "./ProjectArt";

function useTilt() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onPointerLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };
  return { style: { rotateX: rx, rotateY: ry, transformPerspective: 1200 }, onPointerMove, onPointerLeave };
}

function Links({ p }: { p: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {p.repo && (
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/5"
        >
          <GithubIcon size={15} /> Source
        </a>
      )}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="group/l inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition hover:bg-signal"
        >
          {p.liveLabel ?? "Live"}
          <ArrowUpRight size={15} className="transition group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5" />
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ p, large }: { p: Project; large?: boolean }) {
  const tilt = useTilt();
  return (
    <motion.article
      {...tilt}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`group glass relative overflow-hidden rounded-[28px] ${large ? "lg:grid lg:grid-cols-[1.1fr_1fr]" : "flex flex-col"}`}
    >
      <div
        className={`relative overflow-hidden border-white/5 bg-ink-900 ${
          large ? "aspect-[16/10] border-b lg:aspect-auto lg:min-h-[420px] lg:border-b-0 lg:border-r" : "aspect-[16/9] border-b"
        }`}
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectArt art={p.art} accent={p.accent} />
        </div>
        {p.badge && (
          <span className="glass absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs text-white">
            <Star size={12} style={{ color: p.accent }} fill={p.accent} /> {p.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: p.accent }}>
          {p.kind}
        </p>
        <h3 className={`mt-2 font-display font-semibold text-white ${large ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{p.name}</h3>
        <p className="mt-4 text-sm leading-relaxed text-fog sm:text-[15px]">{p.description}</p>
        <ul className="mt-5 space-y-2">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm text-mist">
              <Check size={16} className="mt-0.5 shrink-0" style={{ color: p.accent }} />
              {f}
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
          {p.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-7">
          <Links p={p} />
        </div>
      </div>
    </motion.article>
  );
}

function SmallCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group glass flex flex-col overflow-hidden rounded-3xl"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/5 bg-ink-900">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
          <ProjectArt art={p.art} accent={p.accent} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: p.accent }}>
          {p.kind}
        </p>
        <h3 className="mt-1.5 font-display text-xl font-semibold text-white">{p.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-fog">{p.description}</p>
        <ul className="mt-4 space-y-1.5">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2 text-[13px] text-mist">
              <Check size={14} className="mt-0.5 shrink-0" style={{ color: p.accent }} />
              {f}
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {p.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <Links p={p} />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        index="04"
        eyebrow="Selected work"
        title="Projects that ship."
        description="A curated selection — production voice AI, a national-hackathon finalist build and the AI, data and web projects from my GitHub."
      />

      <div className="space-y-6 [perspective:1200px]">
        <FeaturedCard p={featured[0]} large />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.slice(1).map((p) => (
            <FeaturedCard key={p.slug} p={p} />
          ))}
        </div>
      </div>

      <Reveal className="mb-8 mt-20 flex flex-wrap items-end justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">More from GitHub</h3>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm text-fog hover:text-white"
        >
          <GithubIcon size={16} /> All repositories
          <ArrowUpRight size={15} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <SmallCard key={p.slug} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
