import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Chrono Task",
    type: "Task Management App",
    description:
      "A modern task management application with a clean dashboard, task status tracking and a responsive user experience.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Contact Manager",
    type: "Contact Management App",
    description:
      "A contact management application for adding, editing, searching and organizing contacts with categories and groups.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
];

export default function ProjectsPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#070b1a] dark:text-white md:px-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[10%] right-[-10%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
              My Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
                &amp; Designed
              </span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              A few projects I’ve built using modern technologies and
              thoughtful design.
            </p>
          </div>

          {/* View All Projects */}
          <Link
            href="/projects"
            className="group w-fit rounded-xl border border-cyan-400/40 bg-cyan-50 px-5 py-3 font-semibold text-cyan-700 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 dark:bg-cyan-400/10 dark:text-cyan-300"
          >
            View All Projects
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07] sm:p-8"
            >

              {/* Subtle Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10" />

              {/* Top */}
              <div className="relative z-10 flex items-center justify-between">

                <span className="text-sm font-semibold tracking-wider text-cyan-600 dark:text-cyan-400">
                  {project.number}
                </span>

                <span className="text-xl text-slate-400 transition duration-300 group-hover:text-cyan-500 dark:text-slate-600 dark:group-hover:text-cyan-400">
                  ↗
                </span>

              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-8 text-2xl font-bold sm:text-3xl">
                {project.title}
              </h3>

              {/* Type */}
              <p className="relative z-10 mt-2 text-sm font-medium text-cyan-600 dark:text-cyan-300">
                {project.type}
              </p>

              {/* Description */}
              <p className="relative z-10 mt-5 leading-7 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="relative z-10 mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:group-hover:text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Bottom Line */}
              <div className="relative z-10 mt-8 h-px w-full bg-slate-200 transition duration-500 group-hover:bg-cyan-400/30 dark:bg-white/10" />

              <p className="relative z-10 mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                Web Project
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}