"use client";

import type { HTMLAttributes, PointerEvent } from "react";

/** Card whose border + glow follows the pointer (see .spotlight in globals.css). */
export function Spotlight({ className = "", children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div onPointerMove={onMove} className={`spotlight ${className}`} {...rest}>
      {children}
    </div>
  );
}
