import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden px-6 text-center">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div aria-hidden className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pulse/20 blur-[120px]" />
      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">Error 404 · Signal lost</p>
        <h1 className="text-gradient mt-4 font-display text-[clamp(6rem,22vw,14rem)] font-bold leading-none">404</h1>
        <p className="mx-auto mt-4 max-w-md text-fog">
          The agent searched every index, but this page isn&apos;t in the knowledge base.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-signal"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
