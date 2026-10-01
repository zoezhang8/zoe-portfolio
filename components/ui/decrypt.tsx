"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>/";
const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

const deterministicCipher = (text: string) =>
  text.split("").map((c, i) => (c === " " ? " " : CHARS[(i * 7) % CHARS.length]));

type Props = {
  text: string;
  radius?: number;
  scrambleFrames?: number;
  className?: string;
};

export default function Decrypt({ text, radius = 2, scrambleFrames = 4, className = "" }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [revealAll, setRevealAll] = useState(false);
  const [display, setDisplay] = useState(() => deterministicCipher(text));

  const cipher = useRef(deterministicCipher(text));
  const revealed = useRef(text.split("").map(() => false));
  const scrambleLeft = useRef(text.split("").map(() => 0));
  const touchTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    text.split("").forEach((c, i) => {
      if (c === " ") return;
      const shouldReveal =
        revealAll ||
        (hovered !== null && (revealed.current[i] || Math.abs(i - hovered) <= radius));
      if (shouldReveal !== revealed.current[i]) {
        revealed.current[i] = shouldReveal;
        if (!shouldReveal) cipher.current[i] = randomChar();
        scrambleLeft.current[i] = reduce ? 0 : scrambleFrames;
      }
    });
  }, [hovered, revealAll, radius, scrambleFrames, text]);

  useEffect(() => {
    const id = setInterval(() => {
      const next = text.split("").map((c, i) => {
        if (c === " ") return " ";
        if (scrambleLeft.current[i] > 0) {
          scrambleLeft.current[i]--;
          return randomChar();
        }
        return revealed.current[i] ? c : cipher.current[i];
      });
      setDisplay((prev) => (prev.join("") === next.join("") ? prev : next));
    }, 45);

    return () => {
      clearInterval(id);
      clearTimeout(touchTimer.current);
    };
  }, [text]);

  return (
    <span
      tabIndex={0}
      className={`inline-block cursor-default select-none ${className}`}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(null)}
      onPointerDown={(e) => {
        if (e.pointerType === "mouse") return;
        setRevealAll(true);
        clearTimeout(touchTimer.current);
        touchTimer.current = setTimeout(() => setRevealAll(false), 2000);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setRevealAll((r) => !r);
        }
      }}
      onBlur={() => setRevealAll(false)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {display.map((ch, i) => (
          <span key={i} onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(i)}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
    </span>
  );
}