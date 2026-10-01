"use client";

const palettes = {
  cipher: { background: "#0a0e1a", foreground: "#e6edf7", accent: "#22d3ee", muted: "#7a869a" },
  terminal: { background: "#0b0d0c", foreground: "#e8ece9", accent: "#4ade80", muted: "#7d8a82" },
  amber: { background: "#121110", foreground: "#f3ecdf", accent: "#f5a524", muted: "#8c8475" },
  violet: { background: "#0e0b16", foreground: "#ece8f5", accent: "#a78bfa", muted: "#857d99" },
  paper: { background: "#f4f1ea", foreground: "#1a1a1a", accent: "#e4572e", muted: "#7a7468" },
};

export default function PaletteSwitcher() {
  const apply = (p: Record<string, string>) => {
    Object.entries(p).forEach(([k, v]) =>
      document.documentElement.style.setProperty(`--${k}`, v)
    );
  };

  return (
    <div className="fixed right-4 bottom-4 z-[100] flex gap-2 rounded-full bg-black/60 p-2 backdrop-blur">
      {Object.entries(palettes).map(([name, p]) => (
        <button
          key={name}
          title={name}
          onClick={() => apply(p)}
          className="h-7 w-7 rounded-full border-2 border-white/30"
          style={{ background: `linear-gradient(135deg, ${p.background} 50%, ${p.accent} 50%)` }}
        />
      ))}
    </div>
  );
}