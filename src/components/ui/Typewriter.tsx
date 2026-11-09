"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/** Types, pauses, deletes and cycles through a list of phrases. */
export function Typewriter({ words, className }: { words: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[index % words.length];
    let delay = deleting ? 38 : 75;
    if (!deleting && text === word) delay = 1700;
    if (deleting && text === "") delay = 250;

    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((i) => i + 1);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, reduce]);

  const shown = reduce ? words[0] : text;

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>
        {shown}
        <span className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.12em] animate-blink rounded-full bg-signal" />
      </span>
    </span>
  );
}
