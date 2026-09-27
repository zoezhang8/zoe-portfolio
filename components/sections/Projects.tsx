import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen scroll-mt-20 px-6 py-24">
      <p>03 · projects</p>
      <h2 className="mt-2 text-3xl font-bold">Selected projects</h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title}>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="italic">{project.tagline}</p>
            <p className="mt-2">{project.description}</p>

            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="rounded border px-2 py-0.5 text-sm">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-3 flex gap-4">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  visit ↗
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  github ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}