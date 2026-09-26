import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900 transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 md:px-10">

        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">

          {/* BRAND */}
          <div className="flex flex-col items-center md:items-start">

            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 sm:gap-3"
            >
              {/* A + M MONOGRAM */}
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12">

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-lg transition duration-500 group-hover:bg-cyan-400/20 sm:blur-xl" />

                {/* Outer frame */}
                <div className="absolute inset-0 rotate-45 rounded-[11px] border border-cyan-400/40 transition-all duration-500 group-hover:rotate-[55deg] group-hover:border-cyan-400/70 sm:rounded-[14px]" />

                {/* Inner frame */}
                <div className="absolute inset-[4px] rounded-[8px] border border-violet-400/20 sm:inset-[5px] sm:rounded-[10px]" />

                {/* A */}
                <span className="absolute left-[8px] top-[6px] z-10 font-serif text-[20px] font-bold text-cyan-500 transition-all duration-300 group-hover:-translate-x-0.5 dark:text-cyan-300 sm:left-[10px] sm:top-[8px] sm:text-[24px]">
                  A
                </span>

                {/* M */}
                <span className="absolute bottom-[5px] right-[6px] z-10 font-serif text-[18px] font-bold text-violet-500 transition-all duration-300 group-hover:translate-x-0.5 dark:text-violet-400 sm:bottom-[6px] sm:right-[8px] sm:text-[22px]">
                  M
                </span>

                {/* Connecting line */}
                <span className="absolute left-[15px] top-1/2 h-px w-4 rotate-[-35deg] bg-gradient-to-r from-cyan-400 to-violet-400 sm:left-[18px] sm:w-5" />
              </div>

              {/* NAME */}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-lg font-bold tracking-tight text-transparent transition-all duration-300 group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-violet-400 dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400 dark:group-hover:from-cyan-200 dark:group-hover:via-blue-300 dark:group-hover:to-violet-300 sm:text-xl">
                Ayesha Maheen
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
              Frontend Developer creating modern, responsive and interactive
              web experiences.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">

              <Link
                href="/"
                className="text-sm text-slate-600 transition duration-300 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-sm text-slate-600 transition duration-300 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                href="/skills"
                className="text-sm text-slate-600 transition duration-300 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                Skills
              </Link>

              <Link
                href="/projects"
                className="text-sm text-slate-600 transition duration-300 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="text-sm text-slate-600 transition duration-300 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                Contact
              </Link>

              {/* CV */}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-600 transition duration-300 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                CV
              </a>

            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Connect
            </h3>

            <div className="flex items-center justify-center gap-6 md:justify-start">

              <a
                href="#"
                className="text-sm text-slate-600 transition duration-300 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-slate-600 transition duration-300 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                LinkedIn
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 transition-colors duration-300 dark:border-slate-800 dark:text-slate-500 sm:flex-row sm:justify-between sm:text-left">

          <p>
            © 2026 Ayesha Maheen. All rights reserved.
          </p>

          <p>
            Built with Next.js &amp; Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}