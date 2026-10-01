import Decrypt from "@/components/ui/decrypt";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <p className="font-mono text-sm tracking-widest text-accent uppercase">
        plano, texas · cs @ ut dallas &apos;27
      </p>

      <h1 className="mt-6 font-mono text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
        <Decrypt text="Zoe Zhang" />
      </h1>
      <p className="mt-3 font-mono text-xs text-muted">hover to decrypt</p>

      <p className="mt-8 max-w-2xl text-lg text-foreground/80 md:text-xl">
        cs student at ut dallas and software engineering intern at infosys,
        where i lead security for an autonomous sentry robot. i like secure
        systems, full-stack builds, and making things look good.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4 font-mono text-sm">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-85"
        >
          see my projects →
        </a>
        <a
          href="#contact"
          className="rounded-full border border-foreground/20 px-6 py-3 transition hover:border-accent hover:text-accent"
        >
          get in touch
        </a>
        <a
          href="/ZoeZhang_FTResume_Fall26.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-foreground/20 px-6 py-3 transition hover:border-accent hover:text-accent"
        >
          résumé ↗
        </a>
      </div>
    </section>
  );
}