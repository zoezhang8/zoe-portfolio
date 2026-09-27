"use client";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>/";

type Props = {
  text: string;
  duration?: number; // ms for the full reveal
  delay?: number;    // ms of pure scrambling before letters start resolving
  className?: string;
};

// Same output on server and browser, so no hydration mismatch
function scrambleDeterministic(text: string) {
  return text
    .split("")
    .map((c, i) => (c === " " ? " " : CHARS[(i * 7) % CHARS.length]))
    .join("");
}

export default function Decrypt({ text, duration = 1200, delay = 300, className }: Props) {
  const [display, setDisplay] = useState(() => scrambleDeterministic(text));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    let frame: number;
    let start: number | null = null;
    let lastUpdate = 0;

    const tick = (now: number) => {
      if (start === null) start = now;
      frame = requestAnimationFrame(tick);
      if (now - lastUpdate < 45) return; // throttle to ~22 updates/sec
      lastUpdate = now;

      const progress = Math.max(0, (now - start - delay) / duration);
      const revealed = Math.floor(progress * text.length);

      setDisplay(
        text
          .split("")
          .map((c, i) =>
            c === " " || i < revealed ? c : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      );

      if (revealed >= text.length) cancelAnimationFrame(frame);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, duration, delay]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}