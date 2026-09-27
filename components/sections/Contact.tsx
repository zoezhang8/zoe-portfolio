const contactLinks = [
  { label: "email", href: "mailto:zoeqzhang8@gmail.com" },
  { label: "linkedin", href: "https://www.linkedin.com/in/zoezhang8" },
  { label: "github", href: "https://github.com/zoezhang8" },
  { label: "resume.pdf", href: "/ZoeZhang_FTResume_Fall26.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="flex min-h-screen scroll-mt-20 flex-col justify-center px-6 py-24">
      <p>04 · contact</p>
      <h2 className="mt-2 text-3xl font-bold">Let&apos;s build something.</h2>
      <p className="mt-4 max-w-xl">
        open to internships and new-grad roles for 2027. the fastest way to
        reach me is email.
      </p>

      <ul className="mt-8 flex flex-wrap gap-6">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label} →</a>
          </li>
        ))}
      </ul>

      <footer className="mt-24 text-sm">© 2026 Zoe Zhang · plano, texas</footer>
    </section>
  );
}