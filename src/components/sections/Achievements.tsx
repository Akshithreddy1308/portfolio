"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Award, Trophy } from "lucide-react";
import { achievements, codingProfiles } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/Spotlight";
import { CodechefIcon, GithubIcon, LeetcodeIcon } from "@/components/ui/BrandIcons";

const profileIcon = { LeetCode: LeetcodeIcon, CodeChef: CodechefIcon, GitHub: GithubIcon } as const;
const icons = [Trophy, Award];

export function Achievements() {
  return (
    <section id="achievements" className="section-pad pt-0 md:pt-0">
      <SectionHeading index="06" eyebrow="Achievements" title="Recognition & competitions." />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Spotlight className="glass group relative h-full overflow-hidden rounded-3xl p-7 sm:p-8">
                <div className="absolute -right-6 -top-6 opacity-[0.06] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                  <Icon size={160} />
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ember/30 to-pulse/20 text-ember ring-1 ring-ember/30">
                  <Icon size={22} />
                </span>
                <p className="mt-6 inline-block rounded-full bg-ember/10 px-3 py-1 font-mono text-xs text-ember">{a.result}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{a.text}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm text-signal hover:text-white"
                  >
                    {a.linkLabel} <ArrowUpRight size={14} />
                  </a>
                )}
              </Spotlight>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {codingProfiles.map((c) => {
          const Icon = profileIcon[c.name as keyof typeof profileIcon];
          return (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:border-signal/30"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition group-hover:text-signal">
                <Icon size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-white">{c.name}</span>
                <span className="block truncate font-mono text-xs text-fog">@{c.handle}</span>
              </span>
              <ArrowUpRight size={16} className="text-fog transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}
