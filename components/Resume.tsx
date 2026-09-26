export default function Resume() {
  const cvFile = "/Ayesha%20Maheen%20flowCv%20resume%20.pdf";

  return (
    <section
      id="resume"
      className="relative overflow-hidden border-y border-slate-200 bg-white px-5 py-16 text-slate-900 transition-colors duration-300 dark:border-white/10 dark:bg-[#050816] dark:text-white sm:px-6 sm:py-20 md:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-5%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div className="max-w-2xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-cyan-400" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400 sm:text-sm">
                Resume
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
                Professional Profile
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              View my complete resume to explore my experience, technical
              skills, education and professional background.
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

            {/* CV INFO */}
            <div className="flex items-center gap-3 pr-2">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-50 text-cyan-600 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
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

              <div>
                <p className="text-sm font-semibold">
                  Ayesha Maheen
                </p>

                <p className="mt-0.5 text-xs text-slate-500">
                  PDF Resume
                </p>
              </div>

            </div>

            {/* DOWNLOAD CV */}
            <a
              href={cvFile}
              download="Ayesha_Maheen_flowCv_resume.pdf"
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

            {/* VIEW CV */}
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
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

          </div>
        </div>
      </div>
    </section>
  );
}