import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-4 pt-20 pb-8 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white sm:px-6 sm:pt-24 sm:pb-12 md:px-10 md:pt-28 md:pb-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Cyan Glow */}
        <div
          className="absolute left-[-80px] top-[10%] h-44 w-44 rounded-full bg-cyan-400/15 blur-[70px] dark:bg-cyan-400/25
          sm:left-[5%] sm:h-64 sm:w-64 sm:blur-[100px]
          md:left-[10%] md:top-[15%] md:h-72 md:w-72 md:blur-[120px]"
        />

        {/* Violet Glow */}
        <div
          className="absolute right-[-80px] top-[20%] h-48 w-48 rounded-full bg-violet-500/10 blur-[75px] dark:bg-violet-500/25
          sm:right-[5%] sm:h-72 sm:w-72 sm:blur-[110px]
          md:right-[10%] md:top-[20%] md:h-80 md:w-80 md:blur-[130px]"
        />

        {/* Pink Glow */}
        <div
          className="absolute bottom-[5%] left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-pink-500/10 blur-[75px] dark:bg-pink-500/15
          sm:h-64 sm:w-64 sm:blur-[100px]
          md:left-[35%] md:h-72 md:w-72 md:blur-[120px]"
        />

        {/* Morphing Shape */}
        <div
          className="morphing-shape absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[2px] dark:opacity-20
          sm:h-80 sm:w-80
          md:h-[450px] md:w-[450px]"
        />
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 mx-auto flex max-w-5xl items-center justify-center text-center"
      >
        <div className="w-full">

          {/* Small Badge */}
          <div
            className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-50 px-3 py-2 text-[11px] font-medium text-cyan-700 backdrop-blur-md transition-colors duration-300
            dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300
            sm:mb-7 sm:px-4 sm:text-sm"
          >
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400" />
            <span>Available for Projects</span>
          </div>

          {/* Intro */}
          <p
            className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 transition-colors duration-300
            dark:text-slate-400
            sm:mb-3 sm:text-sm sm:tracking-[0.35em]"
          >
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1
            className="break-words text-4xl font-bold leading-tight tracking-tight text-slate-900 transition-colors duration-300
            dark:text-white
            sm:text-6xl
            md:text-7xl
            lg:text-8xl"
          >
            Ayesha Maheen
            <span className="text-cyan-400">.</span>
          </h1>

          {/* Role */}
          <h2
            className="mt-2 text-lg font-semibold
            sm:mt-5 sm:text-3xl
            md:text-4xl"
          >
            <span
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent
              dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400"
            >
              Frontend Developer
            </span>
          </h2>

          {/* Description */}
          <p
            className="mx-auto mt-3 max-w-[340px] text-sm leading-6 text-slate-600 transition-colors duration-300
            dark:text-slate-300
            sm:mt-7 sm:max-w-2xl sm:text-lg sm:leading-8"
          >
            I create modern, responsive and interactive web experiences
            with clean code and thoughtful design using{" "}
            <span className="font-medium text-cyan-600 dark:text-cyan-300">
              React
            </span>
            ,{" "}
            <span className="font-medium text-blue-600 dark:text-blue-300">
              Next.js
            </span>{" "}
            and{" "}
            <span className="font-medium text-violet-600 dark:text-violet-300">
              TypeScript
            </span>
            .
          </p>

          {/* Buttons */}
          <div
            className="mt-5 flex w-full flex-col items-stretch justify-center gap-3
            sm:mt-9 sm:flex-row sm:items-center sm:gap-4"
          >
            {/* View My Work */}
            <Link
              href="/projects"
              className="group inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_45px_rgba(34,211,238,0.45)]
              sm:w-auto sm:px-7 sm:text-base"
            >
              View My Work
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* Let's Connect */}
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-slate-100 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700
              dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400/60 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300
              sm:w-auto sm:px-7 sm:text-base"
            >
              Let&apos;s Connect
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}