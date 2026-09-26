import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-5 pt-20 pb-10 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white sm:min-h-screen sm:px-6 sm:pt-24 sm:pb-24 md:px-10 md:pt-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[5%] top-[12%] h-56 w-56 rounded-full bg-cyan-400/20 blur-[100px] dark:bg-cyan-400/30 sm:left-[10%] sm:top-[15%] sm:h-72 sm:w-72 sm:blur-[120px]" />

        <div className="absolute right-[5%] top-[18%] h-64 w-64 rounded-full bg-violet-500/15 blur-[110px] dark:bg-violet-500/30 sm:right-[10%] sm:top-[20%] sm:h-80 sm:w-80 sm:blur-[130px]" />

        <div className="absolute bottom-[5%] left-[30%] h-64 w-64 rounded-full bg-pink-500/10 blur-[100px] dark:bg-pink-500/20 sm:left-[35%] sm:h-72 sm:w-72 sm:blur-[120px]" />

        <div className="morphing-shape absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[2px] dark:opacity-30 sm:h-[450px] sm:w-[450px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl items-start justify-center pt-6 text-center sm:min-h-[calc(100vh-96px)] sm:items-center sm:pt-0 md:min-h-[calc(100vh-112px)]">
        <div className="w-full">

          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-50 px-3 py-2 text-xs text-cyan-700 backdrop-blur-md transition-colors duration-300 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 sm:mb-7 sm:px-4 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Available for Projects
          </div>

          {/* Intro */}
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-500 transition-colors duration-300 dark:text-slate-400 sm:text-sm sm:tracking-[0.35em]">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 transition-colors duration-300 dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Ayesha Maheen
            <span className="text-cyan-400">.</span>
          </h1>

          {/* Role */}
          <h2 className="mt-4 text-xl font-semibold sm:mt-5 sm:text-3xl">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
              Frontend Developer
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 transition-colors duration-300 dark:text-slate-300 sm:mt-7 sm:max-w-2xl sm:text-lg sm:leading-8">
            I create modern, responsive and interactive web experiences
            with clean code and thoughtful design using
            <span className="font-medium text-cyan-600 dark:text-cyan-300">
              {" "}
              React
            </span>
            ,
            <span className="font-medium text-blue-600 dark:text-blue-300">
              {" "}
              Next.js
            </span>{" "}
            and
            <span className="font-medium text-violet-600 dark:text-violet-300">
              {" "}
              TypeScript
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">

            {/* View My Work */}
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.3)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)] sm:px-7"
            >
              View My Work
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Let's Connect */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-slate-100 px-6 py-3.5 font-semibold text-slate-800 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400/60 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300 sm:px-7"
            >
              Let&apos;s Connect
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}