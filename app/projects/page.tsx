const projects = [
  {
    number: "01",
    title: "Hospital Website",
    category: "Healthcare",
    description:
      "A modern responsive hospital website designed with a clean interface to present healthcare services, departments and important information.",
    technologies: ["React", "JavaScript", "CSS"],
    accent: "cyan",
  },
  {
    number: "02",
    title: "Chrono Task",
    category: "Productivity",
    description:
      "A modern task management application designed to help users organize daily tasks through a simple and intuitive interface.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    accent: "violet",
  },
  {
    number: "03",
    title: "Contact Manager",
    category: "Management",
    description:
      "A contact management application for organizing users and contact information with a structured backend and database.",
    technologies: ["React", "Node.js", "MongoDB"],
    accent: "pink",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white px-5 py-28 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white sm:px-6 sm:py-32 md:px-10">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[8%] h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute right-[-10%] top-[38%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-80 w-80 rounded-full bg-pink-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-600 dark:text-cyan-400">
            My Work
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            A selection of projects built with modern technologies,
            thoughtful design and clean code.
          </p>

        </div>

        {/* PROJECT SHOWCASE */}
        <div className="space-y-10 sm:space-y-14">

          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <article
                key={project.title}
                className={`group grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.025] lg:grid-cols-2 ${
                  isReverse ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >

                {/* PROJECT VISUAL */}
                <div
                  className={`relative min-h-[360px] overflow-hidden p-5 sm:min-h-[430px] sm:p-7 ${
                    project.accent === "cyan"
                      ? "bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent"
                      : project.accent === "violet"
                      ? "bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent"
                      : "bg-gradient-to-br from-pink-500/20 via-rose-500/10 to-orange-400/10"
                  }`}
                >

                  {/* Glow */}
                  <div
                    className={`absolute -right-16 -top-16 h-56 w-56 rounded-full blur-[90px] transition-transform duration-700 group-hover:scale-125 ${
                      project.accent === "cyan"
                        ? "bg-cyan-400/20"
                        : project.accent === "violet"
                        ? "bg-violet-500/20"
                        : "bg-pink-500/20"
                    }`}
                  />

                  {/* Number */}
                  <div className="absolute left-6 top-6 z-20 flex items-center gap-3 sm:left-8 sm:top-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/40 text-sm font-bold backdrop-blur-md dark:bg-white/5">
                      {project.number}
                    </span>

                    <span className="rounded-full border border-white/20 bg-white/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-700 backdrop-blur-md dark:bg-white/5 dark:text-slate-200">
                      {project.category}
                    </span>
                  </div>

                  {/* Browser Preview */}
                  <div className="absolute inset-x-6 bottom-6 top-24 sm:inset-x-10 sm:bottom-10 sm:top-28">

                    <div className="h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0a1022]/85">

                      {/* Browser Bar */}
                      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10">

                        <div className="flex gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                        </div>

                        <div className="h-2 w-24 rounded-full bg-slate-200 dark:bg-white/10" />

                      </div>

                      {/* Preview */}
                      <div className="p-5 sm:p-7">

                        {/* Header */}
                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-3">
                            <div
                              className={`h-10 w-10 rounded-xl ${
                                project.accent === "cyan"
                                  ? "bg-cyan-400/15"
                                  : project.accent === "violet"
                                  ? "bg-violet-400/15"
                                  : "bg-pink-400/15"
                              }`}
                            />

                            <div>
                              <div className="h-3 w-28 rounded-full bg-slate-300 dark:bg-white/15" />
                              <div className="mt-2 h-2 w-16 rounded-full bg-slate-200 dark:bg-white/10" />
                            </div>
                          </div>

                          <div className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-white/5" />

                        </div>

                        {/* Main Preview */}
                        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.025]">

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="h-3 w-24 rounded-full bg-cyan-400/40" />
                              <div className="mt-2 h-2 w-16 rounded-full bg-slate-200 dark:bg-white/10" />
                            </div>

                            <div className="h-8 w-8 rounded-lg bg-cyan-400/10" />
                          </div>

                          <div className="mt-5 grid grid-cols-3 gap-3">

                            <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-white/5 dark:bg-white/[0.03]">
                              <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-white/10" />
                              <div className="mt-3 h-4 w-10 rounded-full bg-cyan-400/50" />
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-white/5 dark:bg-white/[0.03]">
                              <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-white/10" />
                              <div className="mt-3 h-4 w-10 rounded-full bg-violet-400/50" />
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-white/5 dark:bg-white/[0.03]">
                              <div className="h-2 w-8 rounded-full bg-slate-200 dark:bg-white/10" />
                              <div className="mt-3 h-4 w-10 rounded-full bg-pink-400/50" />
                            </div>

                          </div>

                          {/* Bars */}
                          <div className="mt-5 rounded-xl bg-white p-4 dark:bg-white/[0.03]">

                            <div className="flex items-center justify-between">
                              <div className="h-2 w-20 rounded-full bg-slate-200 dark:bg-white/10" />
                              <div className="h-2 w-10 rounded-full bg-slate-200 dark:bg-white/10" />
                            </div>

                            <div className="mt-4 flex h-24 items-end gap-2">

                              <div className="h-10 flex-1 rounded-t-lg bg-cyan-400/25" />
                              <div className="h-16 flex-1 rounded-t-lg bg-cyan-400/40" />
                              <div className="h-12 flex-1 rounded-t-lg bg-violet-400/30" />
                              <div className="h-20 flex-1 rounded-t-lg bg-cyan-400/50" />
                              <div className="h-14 flex-1 rounded-t-lg bg-violet-400/30" />
                              <div className="h-18 flex-1 rounded-t-lg bg-pink-400/30" />

                            </div>

                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* PROJECT INFO */}
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

                  <div className="flex items-center gap-3">

                    <span
                      className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                        project.accent === "cyan"
                          ? "text-cyan-600 dark:text-cyan-300"
                          : project.accent === "violet"
                          ? "text-violet-600 dark:text-violet-300"
                          : "text-pink-600 dark:text-pink-300"
                      }`}
                    >
                      {project.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-slate-400" />

                    <span className="text-xs text-slate-400">
                      Project {project.number}
                    </span>

                  </div>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7">

                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Technologies
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    <button
                      type="button"
                      className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.22)]"
                    >
                      Live Demo ↗
                    </button>

                    <button
                      type="button"
                      className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300 dark:hover:text-cyan-300"
                    >
                      GitHub ↗
                    </button>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            More projects coming soon.
          </p>
        </div>

      </div>
    </main>
  );
}