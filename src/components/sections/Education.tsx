"use client";

import { motion } from "motion/react";
import { GraduationCap, School } from "lucide-react";
import { education } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";

export function Education() {
  const [degree, ...school] = education;
  return (
    <section id="education" className="section-pad">
      <SectionHeading index="05" eyebrow="Education" title="Foundations." />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Spotlight className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-pulse/15 via-ink-900 to-signal/10 p-7 sm:p-10">
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full border border-white/5" />
            <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full border border-white/5" />
            <GraduationCap size={32} className="text-signal" />
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-fog">{degree.period}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">{degree.school}</h3>
            <p className="mt-2 text-mist">{degree.degree}</p>
            <div className="mt-8 flex items-end gap-4">
              <p className="text-gradient font-display text-7xl font-bold leading-none sm:text-8xl">9.3</p>
              <p className="pb-2 text-sm leading-tight text-fog">
                Cumulative
                <br />
                GPA
              </p>
            </div>
            <p className="mt-6 text-sm text-fog">{degree.location}</p>
          </Spotlight>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          {school.map((s, i) => (
            <motion.div
              key={s.school}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Spotlight className="glass h-full rounded-3xl p-7">
                <School size={22} className="text-pulse" />
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-fog">{s.period}</p>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-white">{s.school}</h3>
                <p className="mt-1 text-sm text-mist">{s.degree}</p>
              </Spotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
