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
    {
      text: (
        <>
          Contributed to the development and maintenance of{" "}
          <span className="font-medium text-blue-600 dark:text-blue-300">
            full-stack web applications
          </span>
          , collaborating with senior engineers to deliver{" "}
          <span className="font-medium text-cyan-600 dark:text-cyan-300">
            scalable and reliable solutions
          </span>
          .
        </>
      ),
    },
    {
      text: (
        <>
          Participated in{" "}
          <span className="font-medium text-violet-600 dark:text-violet-300">
            application design discussions
          </span>
          , progress demonstrations, and{" "}
          <span className="font-medium text-blue-600 dark:text-blue-300">
            Agile ceremonies
          </span>{" "}
          while working with cross-functional teams.
        </>
      ),
    },
    {
      text: (
        <>
          Assisted in developing and integrating{" "}
          <span className="font-medium text-cyan-600 dark:text-cyan-300">
            APIs
          </span>
          , implementing new functionality, and resolving technical issues to
          improve{" "}
          <span className="font-medium text-violet-600 dark:text-violet-300">
            application performance and user experience
          </span>
          .
        </>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-4 pt-7 pb-10 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-9 sm:pb-12 md:px-10 lg:pt-11 lg:pb-14"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="mb-6 text-left sm:mb-8">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white sm:text-xs">
            Experience
          </p>

          <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-5xl">
            My Professional Journey
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base sm:leading-8">
            My experience in developing modern web applications and working
            with real-world software development teams.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div className="relative">
          {/* TIMELINE */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500/40 to-transparent sm:block" />

          <div className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)] sm:block" />

          {/* EXPERIENCE CARD */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-[#111111]/95 dark:shadow-2xl sm:p-6 md:p-7">
            {/* TOP GRADIENT LINE */}
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            {/* HEADER */}
            <div>
              <h3 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-xl font-extrabold leading-tight tracking-tight text-transparent sm:text-2xl">
                MERN Intern
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
                Enigmatix
              </p>
            </div>

            {/* DIVIDER */}
            <div className="my-6 h-px bg-slate-200 dark:bg-white/10" />

            {/* RESPONSIBILITIES */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
                Responsibilities
              </p>

              <div className="space-y-4">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    {/* NUMBER */}
                    <span className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-[11px] font-semibold text-cyan-500 transition-all duration-300 hover:scale-105 dark:text-cyan-400">
                      0{index + 1}
                    </span>

                    {/* TEXT */}
                    <p className="pt-0.5 text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-7">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => {
                  const techColors = [
                    "border-cyan-400/30 bg-cyan-400/10 text-cyan-600 dark:text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-400/15",
                    "border-blue-400/30 bg-blue-400/10 text-blue-600 dark:text-blue-300 hover:border-blue-400/50 hover:bg-blue-400/15",
                    "border-violet-400/30 bg-violet-400/10 text-violet-600 dark:text-violet-300 hover:border-violet-400/50 hover:bg-violet-400/15",
                  ];

                  return (
                    <span
                      key={tech}
                      className={`cursor-pointer rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-all duration-300 hover:-translate-y-0.5 sm:text-xs ${
                        techColors[index % techColors.length]
                      }`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* BOTTOM DETAIL */}
            <div className="mt-7 flex items-center gap-2 border-t border-slate-200 pt-5 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <span className="text-slate-600 dark:text-slate-200">
                Full Stack Development
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}