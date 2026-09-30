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
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white sm:text-xs">
            My Resume
          </p>

          <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Professional Profile
          </h2>

          <div className="mt-3 h-[2px] w-full max-w-[270px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base sm:leading-8">
            Explore my experience, technical skills, education and
            professional background through my complete resume.
          </p>
        </div>

        {/* RESUME CARD */}
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-[#111111]/95 dark:shadow-2xl sm:p-6 md:p-7">
          {/* TOP ACCENT */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* LEFT */}
            <div className="flex items-start gap-5">
              {/* ICON */}
              <div className="flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-50 text-cyan-600 transition-all duration-300 hover:scale-105 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
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
                <p className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-transparent sm:text-xs">
                  Curriculum Vitae
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-cyan-600 dark:text-cyan-300 sm:text-3xl">
                  Ayesha Maheen
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-900 dark:text-white">
                  Full Stack Developer
                </p>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-200">
                  A detailed overview of my professional experience,
                  technical skills, projects and educational background.
                </p>
              </div>
            </div>

            {/* DOWNLOAD ACTION */}
            <div className="flex lg:shrink-0">
              <a
                href={cvFile}
                download="Ayesha_Maheen_FlowCV_Resume.pdf"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)] sm:w-auto"
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
        </div>
      </div>
    </section>
  );
}