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
      className="relative overflow-hidden bg-white px-4 pt-7 pb-10 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-9 sm:pb-12 md:px-10 lg:pt-11 lg:pb-14"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-6 text-left sm:mb-8">

          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white sm:text-xs">
            Experience
          </p>

          <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-5xl">
            My Professional Journey
          </h2>

          {/* Underline */}
          <div className="mt-3 h-[2px] w-full max-w-[280px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 sm:max-w-[300px]" />

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base sm:leading-8">
            My experience in developing modern web applications and working
            with real-world software development teams.
          </p>

        </div>

        {/* Experience */}
        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500/40 to-transparent sm:block" />

          <div className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)] sm:block" />

          {/* Experience Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-[#111111]/95 dark:shadow-2xl sm:p-6 md:p-7">

            {/* Top Gradient Line */}
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Header */}
            <div>
              <h3 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-xl font-extrabold leading-tight tracking-tight text-transparent sm:text-2xl">
                MERN Intern
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
                Enigmatix
              </p>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-slate-200 dark:bg-white/10" />

            {/* Responsibilities */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
                Responsibilities
              </p>

              <div className="space-y-4">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex gap-3">

                    {/* Number */}
                    <span className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-[11px] font-semibold text-cyan-500 transition-all duration-300 hover:scale-105 dark:text-cyan-400">
                      0{index + 1}
                    </span>

                    {/* Text */}
                    <p className="pt-0.5 text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base">
                      {item}
                    </p>

                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-7">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="cursor-pointer rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300 sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Detail */}
            <div className="mt-7 flex items-center gap-2 border-t border-slate-200 pt-5 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Full Stack Development</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}