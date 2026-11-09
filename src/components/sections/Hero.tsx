"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { useRef } from "react";
import { metrics, profile } from "@/data/profile";
import { Typewriter } from "@/components/ui/Typewriter";
import { Magnetic } from "@/components/ui/Magnetic";
import { CountUp } from "@/components/ui/CountUp";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { WaveCanvas } from "./WaveCanvas";
import { Avatar } from "./Avatar";

const ease = [0.22, 1, 0.36, 1] as const;
const BASE = 1.4; // wait for loader curtain

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const waveY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const [first, last] = profile.name.split(" ");

  return (
    <section ref={ref} id="top" className="relative flex min-h-svh flex-col overflow-hidden pt-28">
      {/* Background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] animate-float rounded-full bg-signal/10 blur-[120px]" />
        <div className="absolute -right-40 top-20 h-[560px] w-[560px] animate-float rounded-full bg-pulse/15 blur-[130px] [animation-delay:-3s]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[500px] rounded-full bg-ember/[0.06] blur-[120px]" />
        <motion.div style={{ y: waveY }} className="absolute inset-x-0 bottom-0 h-[62%]">
          <WaveCanvas className="h-full w-full opacity-45 sm:opacity-70" />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]"
      >
        <div className="min-w-0">
          <motion.a
            href="#experience"
            className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4 text-xs text-mist"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: BASE }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.currently.title} @ <span className="font-semibold text-white">{profile.currently.company}</span>
            <ArrowUpRight size={13} className="text-fog" />
          </motion.a>

          <h1 className="mt-7 font-display text-[clamp(3.2rem,10vw,7.5rem)] font-bold leading-[0.9] tracking-tight text-white">
            <span className="sr-only">{profile.name}</span>
            {[first, last].map((word, wi) => (
              <span key={word} aria-hidden className="block overflow-hidden pb-2">
                {word.split("").map((ch, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block ${wi === 1 ? "text-gradient" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease, delay: BASE + 0.1 + wi * 0.15 + i * 0.035 }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 font-mono text-lg text-mist sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: BASE + 0.7 }}
          >
            <span className="text-fog">{">"} </span>
            <Typewriter words={profile.typingRoles} className="text-white" />
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: BASE + 0.8 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: BASE + 0.95 }}
          >
            <Magnetic>
              <a
                href={profile.resume}
                download
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_0_40px_-8px_rgba(34,211,238,0.6)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-signal via-pulse to-ember transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <Download size={16} className="relative transition-transform group-hover:translate-y-0.5" />
                <span className="relative">Download Resume</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Contact Me
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
            <div className="ml-1 flex items-center gap-2">
              {[
                { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
                { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/10 text-fog transition hover:-translate-y-1 hover:border-signal/50 hover:text-white hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.7)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.p
            className="mt-6 flex items-center gap-1.5 text-xs text-fog/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: BASE + 1.2 }}
          >
            <MapPin size={13} /> {profile.location}
          </motion.p>
        </div>

        <div className="hidden justify-center sm:flex">
          <Avatar />
        </div>
      </motion.div>

      {/* Metrics strip */}
      <motion.div
        className="relative mx-auto mt-16 w-full max-w-6xl px-5 pb-10 sm:px-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: BASE + 1.1 }}
      >
        <dl className="glass grid grid-cols-2 divide-white/5 overflow-hidden rounded-3xl md:grid-cols-4 md:divide-x">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col-reverse p-5 sm:p-6">
              <dt className="mt-1 text-xs leading-snug text-fog sm:text-sm">{m.label}</dt>
              <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">
                <CountUp to={m.value} decimals={m.decimals ?? 0} suffix={m.suffix} />
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="#about"
          className="mx-auto mt-8 flex w-fit flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-fog/70 hover:text-white"
        >
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
