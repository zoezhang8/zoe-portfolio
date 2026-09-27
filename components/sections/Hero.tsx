export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen flex-col justify-center px-6">
      <p>00 · zoe zhang</p>
      <p>plano, texas · cs @ ut dallas &apos;27</p>
      <h1 className="mt-4 text-5xl font-bold">hi, i&apos;m zoe.</h1>
      <p className="mt-4 max-w-xl">
        cs student at ut dallas and software engineering intern at infosys,
        where i lead security for an autonomous sentry robot. i like secure
        systems, full-stack builds, and making things look good.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects">see my projects →</a>
        <a href="#contact">get in touch</a>
        <a href="/ZoeZhang_FTResume_Fall26.pdf" target="_blank" rel="noopener noreferrer">
          résumé →
        </a>
      </div>
    </section>
  );
}