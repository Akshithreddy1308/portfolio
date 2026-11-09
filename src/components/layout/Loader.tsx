"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Short intro curtain (~1.3s). Server-rendered so there is no content flash;
 * a CSS fallback hides it even if JS fails. Skipped for reduced motion.
 */
export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShow(false), reduce ? 0 : 1300);
    document.documentElement.style.overflow = "hidden";
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) document.documentElement.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="loader-fallback fixed inset-0 z-[100] grid place-items-center bg-ink-950"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-12 items-center gap-1.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="w-1.5 rounded-full bg-gradient-to-t from-pulse to-signal"
                  initial={{ height: 6 }}
                  animate={{ height: [6, 14 + ((i * 13) % 34), 6] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                />
              ))}
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-fog">Initializing agent</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
