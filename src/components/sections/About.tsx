"use client";

import { motion } from "motion/react";
import { GraduationCap, Layers, Rocket, Sparkles, Target, Zap } from "lucide-react";
import { about, profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { rise, stagger } from "@/components/ui/Reveal";

const diffIcons = [Layers, Zap, Rocket];

export function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        index="01"
        eyebrow="About me"
        title="Engineering AI that feels natural."
        description="From real-time voice agents to enterprise multi-agent platforms — I care about AI that is fast, reliable and trustworthy in production."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-6"
      >
        {/* Intro */}
        <motion.div variants={rise} className="md:col-span-4">
          <Spotlight className="glass h-full rounded-3xl p-7 sm:p-9">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-signal">Hello, I&apos;m {profile.fullName}</p>
            <div className="space-y-4 text-[15px] leading-relaxed text-mist sm:text-base">
              {about.intro.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </Spotlight>
        </motion.div>

        {/* Education snapshot */}
        <motion.div variants={rise} className="md:col-span-2">
          <Spotlight className="glass relative h-full overflow-hidden rounded-3xl p-7">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pulse/20 blur-3xl" />
            <GraduationCap className="text-pulse" size={26} />
            <p className="mt-5 font-display text-6xl font-bold text-white">9.3</p>
            <p className="text-sm text-fog">GPA · B.E. CSE (AI & ML)</p>
            <p className="mt-6 text-sm leading-relaxed text-mist">Chaitanya Bharathi Institute of Technology, Hyderabad</p>
            <p className="mt-1 font-mono text-xs text-fog">2021 — 2025</p>
          </Spotlight>
        </motion.div>

        {/* Journey */}
        <motion.div variants={rise} className="md:col-span-3">
          <Spotlight className="glass h-full rounded-3xl p-7">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <Rocket size={18} className="text-signal" /> Career journey
            </h3>
            <ol className="relative mt-6 space-y-5 border-l border-white/10 pl-6">
              {about.journey.map((j) => (
                <li key={j.year} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-signal to-pulse ring-4 ring-ink-950" />
                  <p className="font-mono text-xs text-signal">{j.year}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-mist">{j.text}</p>
                </li>
              ))}
            </ol>
          </Spotlight>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:col-span-3">
          {/* Interests */}
          <motion.div variants={rise}>
            <Spotlight className="glass h-full rounded-3xl p-7">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                <Sparkles size={18} className="text-ember" /> Technical interests
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {about.interests.map((i) => (
                  <li
                    key={i}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-mist transition hover:border-signal/40 hover:text-white"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </Spotlight>
          </motion.div>
          {/* Goal */}
          <motion.div variants={rise}>
            <Spotlight className="relative h-full overflow-hidden rounded-3xl border border-signal/20 bg-gradient-to-br from-signal/10 via-pulse/10 to-transparent p-7">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                <Target size={18} className="text-signal" /> What drives me
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-mist">{about.goal}</p>
            </Spotlight>
          </motion.div>
        </div>

        {/* Differentiators */}
        {about.differentiators.map((d, i) => {
          const Icon = diffIcons[i];
          return (
            <motion.div key={d.title} variants={rise} className="md:col-span-2">
              <Spotlight className="glass group h-full rounded-3xl p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 text-signal ring-1 ring-white/10 transition group-hover:scale-110 group-hover:bg-signal/15">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">{d.text}</p>
              </Spotlight>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
