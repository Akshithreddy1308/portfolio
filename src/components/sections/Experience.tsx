"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Briefcase, MapPin } from "lucide-react";
import { useRef } from "react";
import { experience } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="section-pad">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Where I've shipped."
        description="Three teams, one thread: putting AI agents into production, from founding-stage voice AI to enterprise procurement."
      />

      <div ref={ref} className="relative">
        {/* track + animated progress line */}
        <div aria-hidden className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 md:left-[calc(30%+15px)]" />
        <motion.div
          aria-hidden
          style={{ scaleY }}
          className="absolute bottom-0 left-[15px] top-0 w-px origin-top bg-gradient-to-b from-signal via-pulse to-ember md:left-[calc(30%+15px)]"
        />
        <ol className="relative space-y-10 md:space-y-16">

        {experience.map((job, i) => (
          <li key={job.company} className="relative grid grid-cols-1 gap-6 pl-12 md:grid-cols-[30%_1fr] md:gap-0 md:pl-0">
            {/* node */}
            <motion.span
              aria-hidden
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="absolute left-0 top-1 grid h-[31px] w-[31px] place-items-center rounded-full border border-white/15 bg-ink-900 md:left-[30%]"
            >
              <span className={`h-2.5 w-2.5 rounded-full ${i === 0 ? "bg-emerald-400 shadow-[0_0_12px_#34d399]" : "bg-signal"}`} />
            </motion.span>

            {/* meta (sticky on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="md:sticky md:top-28 md:self-start md:pr-12 md:text-right"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{job.period}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">
                {job.url ? (
                  <a href={job.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 hover:text-signal">
                    {job.company}
                    <ArrowUpRight size={18} className="opacity-50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-mist md:justify-end">
                <Briefcase size={14} className="text-fog" /> {job.role}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-fog md:justify-end">
                <MapPin size={12} /> {job.location}
              </p>
            </motion.div>

            {/* card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="md:pl-14"
            >
              <Spotlight className="glass rounded-3xl p-6 sm:p-8">
                <p className="text-[15px] font-medium leading-relaxed text-white">{job.summary}</p>

                {job.stats && (
                  <dl className="mt-6 grid grid-cols-3 gap-3">
                    {job.stats.map((s) => (
                      <div key={s.label} className="flex flex-col-reverse rounded-2xl border border-white/5 bg-white/[0.03] p-3 sm:p-4">
                        <dt className="mt-1 text-[11px] leading-tight text-fog sm:text-xs">{s.label}</dt>
                        <dd className="text-gradient font-display text-xl font-bold sm:text-2xl">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <ul className="mt-6 space-y-3.5">
                  {job.highlights.map((h) => (
                    <li key={h.slice(0, 24)} className="flex gap-3 text-sm leading-relaxed text-fog">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal/80" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {job.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </motion.div>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
}
