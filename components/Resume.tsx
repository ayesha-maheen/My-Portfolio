export default function Resume() {
  const cvFile = "/Ayesha_Maheen_FlowCV_Resume.pdf";

  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-white px-4 pt-10 pb-16 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-12 sm:pb-20 md:px-10 lg:pt-16 lg:pb-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* SECTION HEADING */}
        <div className="mb-10 text-left sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-sm sm:tracking-[0.25em]">
            My Resume
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Profile
            </span>
          </h2>

          <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 sm:mt-6" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            View my complete resume to explore my experience, technical
            skills, education and professional background.
          </p>
        </div>

        {/* RESUME CARD */}
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl dark:border-white/10 dark:bg-[#111111] sm:p-8 md:p-10">
          {/* TOP ACCENT */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="flex items-start gap-5">
              {/* ICON */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-50 text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 3v5h5M8 13h7M8 17h5"
                  />
                </svg>
              </div>

              {/* TEXT */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                  Curriculum Vitae
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                  Ayesha Maheen
                </h3>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Full Stack Developer
                </p>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                  A detailed overview of my professional experience,
                  technical skills, projects and educational background.
                </p>
              </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              {/* VIEW CV */}
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300"
              >
                View CV

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17 17 7M7 7h10v10"
                  />
                </svg>
              </a>

              {/* DOWNLOAD CV */}
              <a
                href={cvFile}
                download="Ayesha_Maheen_FlowCV_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)]"
              >
                Download CV

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-7 h-px bg-slate-200 dark:bg-white/10" />

          {/* QUICK INFO */}
          <div className="grid gap-4 sm:grid-cols-3">
            {/* EXPERIENCE */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Experience
              </p>

              <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                01+ Years
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Practical Development
              </p>
            </div>

            {/* SKILLS */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Specialization
              </p>

              <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                Full Stack
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Modern Web Development
              </p>
            </div>

            {/* DOCUMENT */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 dark:border-white/10 dark:bg-white/[0.03]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Document
              </p>

              <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                PDF Resume
              </p>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Updated Professional CV
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}