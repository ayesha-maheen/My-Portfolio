
export default function Experience() {
  const technologies = [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "REST APIs",
  ];

  const responsibilities = [
    "Contributed to the development and maintenance of full-stack web applications, collaborating with senior engineers to deliver scalable and reliable solutions.",
    "Participated in application design discussions, progress demonstrations, and Agile ceremonies while working with cross-functional teams.",
    "Assisted in developing and integrating APIs, implementing new functionality, and resolving technical issues to improve application performance and user experience.",
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-4 pt-10 pb-16 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-12 sm:pb-20 md:px-10 lg:pt-16 lg:pb-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <div className="mb-10 text-left sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-sm sm:tracking-[0.25em]">
            Experience
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            My Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 sm:mt-6" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            My experience in developing modern web applications and working
            with real-world software development teams.
          </p>
        </div>

        {/* EXPERIENCE CARD */}
        <div className="relative mx-auto max-w-6xl">

          {/* TIMELINE */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500/40 to-transparent sm:block" />

          <div className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)] sm:block" />

          {/* MAIN CARD */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-[#111111] dark:hover:border-cyan-400/40 sm:p-7 md:p-8 lg:p-10">

            {/* TOP ACCENT */}
            <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

            {/* HEADER */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
                  MERN Intern
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  Enigmatix
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Bahawalpur
                </p>
              </div>

              {/* DATE */}
              <div className="w-fit rounded-xl border border-cyan-400/20 bg-cyan-50 px-4 py-2.5 text-xs font-semibold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                Nov 2025 — Aug 2026
              </div>
            </div>

            {/* DIVIDER */}
            <div className="my-7 h-px bg-slate-200 dark:bg-white/10" />

            {/* RESPONSIBILITIES */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Responsibilities
              </p>

              <div className="space-y-5">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex gap-4">

                    {/* NUMBER */}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-[11px] font-semibold text-cyan-500 dark:text-cyan-400">
                      0{index + 1}
                    </span>

                    {/* TEXT */}
                    <p className="pt-0.5 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-8">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300 sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* BOTTOM DETAIL */}
            <div className="mt-8 flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Full Stack Development</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
