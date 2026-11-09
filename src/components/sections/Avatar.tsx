"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/data/profile";

const floating = [
  { label: "FastAPI", className: "-left-6 top-10 sm:-left-12", delay: 0 },
  { label: "Multi-Agent", className: "-right-4 top-4 sm:-right-14", delay: 1.2 },
  { label: "LiveKit · Voice", className: "-left-4 bottom-10 sm:-left-16", delay: 2.1 },
  { label: "RAG · MCP", className: "-right-6 bottom-16 sm:-right-12", delay: 0.6 },
];

export function Avatar() {
  return (
    <motion.div
      className="relative mx-auto aspect-square w-60 sm:w-72 lg:w-80"
      initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
    >
      {/* glow */}
      <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.25),rgba(139,92,246,0.15)_40%,transparent_70%)] blur-2xl" />
      {/* rotating conic ring */}
      <div className="absolute -inset-[3px] animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#22d3ee,#8b5cf6,#f472b6,#f59e0b,#22d3ee)] opacity-90" />
      <div className="absolute inset-[3px] rounded-full bg-ink-950" />
      {/* orbit */}
      <div className="absolute -inset-8 rounded-full border border-dashed border-white/10" />
      <div className="absolute -inset-8 animate-[spin_22s_linear_infinite_reverse] rounded-full">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_14px_#22d3ee]" />
      </div>

      <div className="absolute inset-[10px] overflow-hidden rounded-full">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(max-width: 640px) 240px, 320px"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`${profile.name} monogram`}
            className="relative grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,#1e2340,#0a0b12_70%)]"
          >
            <div className="grid-bg absolute inset-0 opacity-60" />
            <span className="text-gradient relative font-display text-7xl font-bold sm:text-8xl">{profile.initials}</span>
            <div className="absolute bottom-[22%] flex h-6 items-end gap-1">
              {Array.from({ length: 11 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="w-1 rounded-full bg-signal/70"
                  animate={{ height: [4, 6 + ((i * 7) % 18), 4] }}
                  transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.09, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {floating.map((f) => (
        <motion.span
          key={f.label}
          className={`glass absolute z-10 whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[11px] text-white shadow-lg ${f.className}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { delay: 2 + f.delay * 0.2, duration: 0.6 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: f.delay },
          }}
        >
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-signal align-middle" />
          {f.label}
        </motion.span>
      ))}
    </motion.div>
  );
}
