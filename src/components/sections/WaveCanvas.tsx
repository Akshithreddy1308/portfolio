"use client";

import { useEffect, useRef } from "react";

/**
 * Layered "voice signal" ribbons. Amplitude swells with a speech-like envelope
 * and bulges toward the cursor. Pauses when off-screen or the tab is hidden,
 * renders a single static frame for reduced-motion users.
 */
export function WaveCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let t = 0;
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    const ribbons = [
      { color: [34, 211, 238], amp: 0.11, freq: 1.6, speed: 0.9, phase: 0, width: 1.6 },
      { color: [139, 92, 246], amp: 0.13, freq: 1.2, speed: 0.7, phase: 1.8, width: 1.4 },
      { color: [244, 114, 182], amp: 0.08, freq: 2.1, speed: 1.1, phase: 3.1, width: 1.1 },
      { color: [245, 158, 11], amp: 0.06, freq: 2.6, speed: 1.3, phase: 4.4, width: 1 },
      { color: [103, 232, 249], amp: 0.05, freq: 3.2, speed: 1.6, phase: 2.2, width: 0.8 },
    ];

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      // speech-like envelope: slow swells with syllable flutter
      const env = 0.55 + 0.3 * Math.sin(t * 0.7) + 0.15 * Math.sin(t * 2.3) * Math.sin(t * 0.4);
      const mid = h * 0.62;
      const step = Math.max(4, Math.floor(w / 220));

      for (const r of ribbons) {
        for (let layer = 0; layer < 3; layer++) {
          ctx.beginPath();
          for (let x = 0; x <= w + step; x += step) {
            const nx = x / w;
            const taper = Math.sin(Math.PI * Math.min(Math.max(nx, 0), 1)) ** 1.6;
            const bulge = 1 + 0.9 * Math.exp(-((nx - mouse.x) ** 2) / 0.02) * (1 - Math.abs(mouse.y - 0.5));
            const y =
              mid +
              Math.sin(nx * Math.PI * 2 * r.freq + t * r.speed + r.phase + layer * 0.35) *
                h * r.amp * env * taper * bulge +
              Math.sin(nx * 9 + t * 1.7 + r.phase) * 6 * taper;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          const [cr, cg, cb] = r.color;
          ctx.strokeStyle = `rgba(${cr},${cg},${cb},${layer === 0 ? 0.55 : 0.16})`;
          ctx.lineWidth = layer === 0 ? r.width : r.width * 5;
          ctx.stroke();
        }
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = () => {
      if (!running) return;
      t += 0.012;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = (e.clientY - r.top) / r.height;
    };

    const start = () => {
      if (reduce || running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pointermove", onMove, { passive: true });

    if (reduce) {
      running = false;
      t = 2;
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden />;
}
