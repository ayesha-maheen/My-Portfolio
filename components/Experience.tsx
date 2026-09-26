import Link from "next/link";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-5 py-20 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white sm:px-6 sm:py-24 md:px-10 md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <div className="mb-12 text-center sm:mb-16">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            My Professional{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            My experience in developing modern web applications and working
            with real-world software development teams.
          </p>
        </div>

        {/* EXPERIENCE CARD */}
        <div className="relative mx-auto max-w-4xl">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/30 to-transparent sm:block" />

          {/* Timeline Dot */}
          <div className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)] sm:block" />

          {/* CARD */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.03] dark:shadow-2xl sm:ml-12 sm:p-8 md:p-10">

            {/* TOP */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

              <div>
                <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  MERN Intern
                </p>

                <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  Enigmatix
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Bahawalpur
                </p>
              </div>

              {/* DATE */}
              <div className="w-fit rounded-full border border-cyan-400/20 bg-cyan-50 px-4 py-2 text-xs font-medium text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                Nov 2025 — Aug 2026
              </div>

            </div>

            {/* DIVIDER */}
            <div className="my-7 h-px bg-slate-200 dark:bg-white/10" />

            {/* DETAILS */}
            <div className="space-y-4">

              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Contributed to the development and maintenance of
                  full-stack web applications, collaborating with senior
                  engineers to deliver scalable and reliable solutions.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Participated in application design discussions, progress
                  demonstrations, and Agile ceremonies while working with
                  cross-functional teams.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Assisted in developing and integrating APIs, implementing
                  new functionality, and resolving technical issues to improve
                  application performance and user experience.
                </p>
              </div>

            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "NestJS",
                "TypeScript",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* VIEW FULL EXPERIENCE */}
        <div className="mt-10 text-center">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
          >
            View More About Me
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}