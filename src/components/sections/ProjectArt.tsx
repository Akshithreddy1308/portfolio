"use client";

import { motion } from "motion/react";
import type { Project } from "@/data/profile";

/** Generative, on-brand cover art for each project (no fake screenshots). */
export function ProjectArt({ art, accent }: { art: Project["art"]; accent: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-70" />
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 50% 60%, ${accent}33, transparent 65%)`, opacity: 0.7 }}
      />
      <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        {art === "voice" && <Voice c={accent} />}
        {art === "graph" && <Graph c={accent} />}
        {art === "rag" && <Rag c={accent} />}
        {art === "clusters" && <Clusters c={accent} />}
        {art === "video" && <Video c={accent} />}
        {art === "pulse" && <Pulse c={accent} />}
      </svg>
    </div>
  );
}

function Voice({ c }: { c: string }) {
  const bars = Array.from({ length: 38 });
  return (
    <g>
      {[60, 90, 120].map((r, i) => (
        <motion.circle
          key={r}
          cx={200}
          cy={120}
          r={r}
          fill="none"
          stroke={c}
          strokeOpacity={0.18}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          style={{ transformOrigin: "200px 120px" }}
        />
      ))}
      {bars.map((_, i) => {
        const x = 48 + i * 8.2;
        const base = 6 + Math.abs(Math.sin(i * 0.55)) * 46 * Math.sin((Math.PI * i) / (bars.length - 1));
        return (
          <motion.rect
            key={i}
            x={x}
            width={4}
            rx={2}
            fill={c}
            animate={{ height: [base * 0.4, base, base * 0.6], y: [120 - base * 0.2, 120 - base / 2, 120 - base * 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: (i % 7) * 0.12 }}
            opacity={0.85}
          />
        );
      })}
      <g fontFamily="monospace" fontSize="9" fill="#fff" fillOpacity={0.6}>
        <text x={376} y={30} textAnchor="end">SIP ⇄ WebRTC</text>
        <text x={376} y={222} textAnchor="end">STT · LLM · TTS</text>
      </g>
    </g>
  );
}

function Graph({ c }: { c: string }) {
  const nodes = [
    [80, 70], [140, 160], [200, 90], [260, 170], [320, 80], [130, 60], [250, 40], [300, 150], [180, 200], [60, 170],
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [2, 6], [4, 7], [3, 8], [1, 9], [0, 5], [6, 4], [8, 1]];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke={c}
          strokeOpacity={0.4}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.08 }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={i === 2 ? 9 : 5}
          fill={i === 2 ? c : "#0a0b12"}
          stroke={c}
          strokeWidth={1.5}
          animate={{ r: i === 2 ? [9, 11, 9] : [5, 6, 5] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      {/* two databases */}
      {[[40, 205], [340, 205]].map(([x, y], i) => (
        <g key={i} stroke={c} strokeOpacity={0.7} fill="none">
          <ellipse cx={x} cy={y - 14} rx={16} ry={5} />
          <path d={`M${x - 16} ${y - 14} v18 a16 5 0 0 0 32 0 v-18`} />
        </g>
      ))}
    </g>
  );
}

function Rag({ c }: { c: string }) {
  return (
    <g>
      {[0, 1, 2].map((i) => (
        <motion.g
          key={i}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        >
          <rect x={40 + i * 10} y={60 + i * 18} width={60} height={76} rx={6} fill="#11131d" stroke={c} strokeOpacity={0.5} />
          {[0, 1, 2, 3, 4].map((l) => (
            <rect key={l} x={50 + i * 10} y={74 + i * 18 + l * 10} width={l % 2 ? 30 : 40} height={3} rx={1.5} fill="#fff" fillOpacity={0.25} />
          ))}
        </motion.g>
      ))}
      {Array.from({ length: 30 }).map((_, i) => {
        const x = 170 + (i % 6) * 14;
        const y = 70 + Math.floor(i / 6) * 22;
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={3}
            fill={c}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: (i * 0.13) % 2 }}
          />
        );
      })}
      <motion.path
        d="M118 120 C 140 120, 150 120, 162 120 M258 120 C 272 120, 278 120, 290 120"
        stroke={c}
        strokeWidth={1.5}
        strokeDasharray="4 4"
        fill="none"
        animate={{ strokeDashoffset: [0, -16] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <rect x={296} y={92} width={80} height={56} rx={12} fill={c} fillOpacity={0.15} stroke={c} strokeOpacity={0.6} />
      <text x={336} y={125} textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#fff">GPT-4</text>
      <text x={200} y={215} textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#fff" fillOpacity={0.55}>
        docs → embeddings → FAISS → grounded answer
      </text>
    </g>
  );
}

function Clusters({ c }: { c: string }) {
  const centers = [
    [110, 90, c],
    [270, 80, "#a78bfa"],
    [200, 170, "#f59e0b"],
  ] as const;
  return (
    <g>
      {centers.map(([cx, cy, col], k) =>
        Array.from({ length: 18 }).map((_, i) => {
          const a = i * 2.4 + k;
          const r = 8 + ((i * 17) % 34);
          return (
            <motion.circle
              key={`${k}-${i}`}
              cx={cx + Math.cos(a) * r}
              cy={cy + Math.sin(a) * r * 0.75}
              r={3}
              fill={col}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.85, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.03 + k * 0.2 }}
            />
          );
        }),
      )}
      {centers.map(([cx, cy, col], k) => (
        <motion.circle
          key={k}
          cx={cx}
          cy={cy}
          r={44}
          fill="none"
          stroke={col}
          strokeDasharray="3 5"
          strokeOpacity={0.6}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
      ))}
    </g>
  );
}

function Video({ c }: { c: string }) {
  return (
    <g>
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.rect
          key={i}
          x={40 + (i % 3) * 110}
          y={40 + Math.floor(i / 3) * 90}
          width={96}
          height={60}
          rx={8}
          fill="#11131d"
          stroke={c}
          strokeOpacity={0.35}
          animate={{ strokeOpacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
      <motion.g animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ transformOrigin: "200px 120px" }}>
        <circle cx={200} cy={120} r={28} fill={c} />
        <path d="M192 106 L214 120 L192 134 Z" fill="#0a0b12" />
      </motion.g>
    </g>
  );
}

function Pulse({ c }: { c: string }) {
  return (
    <g>
      <motion.path
        d="M20 130 H120 L140 130 L155 80 L172 180 L190 60 L206 150 L220 130 H380"
        stroke={c}
        strokeWidth={2.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, times: [0, 0.7, 1] }}
      />
      <g fontFamily="monospace" fontSize="10" fill="#fff" fillOpacity={0.6}>
        <text x={40} y={60}>height · weight</text>
        <text x={290} y={200}>progress</text>
      </g>
    </g>
  );
}
