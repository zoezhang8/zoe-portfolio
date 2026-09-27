import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen scroll-mt-20 px-6 py-24">
      <p>02 · experience</p>
      <h2 className="mt-2 text-3xl font-bold">Places I&apos;ve been</h2>

      <div className="mt-10 space-y-10">
        {experience.map((job) => (
          <article key={job.company + job.role}>
            <h3 className="text-xl font-semibold">
              {job.company} · {job.role}
            </h3>
            <p className="text-sm">
              {job.dates} · {job.location}
            </p>
            <p className="mt-2 max-w-2xl">{job.blurb}</p>
            {job.stat && (
              <p className="mt-2">
                <span className="font-bold">{job.stat.value}</span>{" "}
                {job.stat.label}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}