import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "PavilionCC",
    category: "Sports Club Management",
    description:
      "A white-label, multi-tenant sports club management platform with customizable branding, responsive interfaces and scalable backend services.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Bull",
      "Swagger",
    ],
    slug: "pavilioncc",
  },
  {
    number: "02",
    title: "Facilifi",
    category: "Asset Management",
    description:
      "An asset management system designed to manage the complete asset lifecycle, including creating, assigning, transferring and retiring assets with role-based workflows.",
    technologies: [
      "React",
      "Redux",
      "NestJS",
      "MySQL",
      "Redis",
      "REST API",
      "RBAC",
    ],
    slug: "facilifi",
  },
  {
    number: "03",
    title: "Chrono Task",
    category: "Productivity",
    description:
      "A modern task management application designed to help users organize daily tasks through a simple, responsive and intuitive interface.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    slug: "chrono-task",
  },
  {
    number: "04",
    title: "Contact Management System",
    category: "Management",
    description:
      "A contact management application for organizing users and contact information with a structured interface, database and management features.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
    slug: "contact-management",
  },
];

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-4 pt-10 pb-16 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-12 sm:pb-20 md:px-10 lg:pt-16 lg:pb-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <div className="mb-10 text-left sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-sm sm:tracking-[0.25em]">
            My Work
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 sm:mt-6" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            A selection of projects I have worked on using modern
            technologies and clean development practices.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl dark:border-white/10 dark:bg-[#111111] dark:hover:border-cyan-400/30 sm:p-7"
            >

              {/* TOP GRADIENT LINE */}
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* HEADER */}
              <div className="flex items-start justify-between gap-4">

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                {/* NUMBER */}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
                  {project.number}
                </span>
              </div>

              {/* DIVIDER */}
              <div className="my-5 h-px bg-slate-200 dark:bg-white/10" />

              {/* DESCRIPTION */}
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                {project.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                  Technologies
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300 dark:hover:border-cyan-400/30 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-auto pt-7">

                <div className="flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                      Project {project.number}
                    </span>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/details inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                  >
                    View Details

                    <span className="transition-transform duration-300 group-hover/details:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>
              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            More projects coming soon.
          </p>
        </div>

      </div>
    </section>
  );
}