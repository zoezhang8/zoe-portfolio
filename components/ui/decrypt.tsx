"use client";
import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>/";
const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

// Same output on server and browser, so no hydration mismatch
const deterministicCipher = (text: string) =>
  text.split("").map((c, i) => (c === " " ? " " : CHARS[(i * 7) % CHARS.length]));

type Props = {
  text: string;
  radius?: number;      // letters revealed on each side of the hovered one
  scrambleFrames?: number;
  className?: string;
};

export default function Decrypt({ text, radius = 1, scrambleFrames = 4, className = "" }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [revealAll, setRevealAll] = useState(false);
  const [display, setDisplay] = useState(() => deterministicCipher(text));

  const cipher = useRef(deterministicCipher(text));               // resting ciphertext per letter
  const revealed = useRef(text.split("").map(() => false));      // current state per letter
  const scrambleLeft = useRef(text.split("").map(() => 0));      // flicker frames left per letter
  const touchTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // 1. When the hovered letter changes, find letters that flipped state and queue a flicker
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    text.split("").forEach((c, i) => {
      if (c === " ") return;
      const shouldReveal = revealAll || (hovered !== null && Math.abs(i - hovered) <= radius);
      if (shouldReveal !== revealed.current[i]) {
        revealed.current[i] = shouldReveal;
        if (!shouldReveal) cipher.current[i] = randomChar(); // fresh ciphertext each re-lock
        scrambleLeft.current[i] = reduce ? 0 : scrambleFrames;
      }
    });
  }, [hovered, revealAll, radius, scrambleFrames, text]);

  // 2. One animation loop draws every letter from its current state
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
      // Only re-render when something actually changed
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
          <span
            key={i}
            onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(i)}
            onPointerDown={(e) => {
              if (e.pointerType === "mouse") return;
              // Touch: reveal around the tapped letter, re-lock after 1.5s
              setHovered(i);
              clearTimeout(touchTimer.current);
              touchTimer.current = setTimeout(() => setHovered(null), 1500);
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
    </span>
  );
}