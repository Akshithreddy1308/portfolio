import { Reveal, SplitReveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-14 md:mb-20">
      <Reveal className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-signal">
        <span className="text-fog/60">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-signal to-transparent" />
        {eyebrow}
      </Reveal>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
        <SplitReveal text={title} />
      </h2>
      {description && (
        <Reveal delay={0.15} className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          {description}
        </Reveal>
      )}
    </header>
  );
}
