import Link from "next/link";
import { FiArrowRight, FiCode } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-4 pt-24 pb-12 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-28 sm:pb-16 md:px-10 lg:min-h-screen lg:pt-32 lg:pb-20"
    >
      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

        {/* LEFT SIDE */}
        <div className="w-full text-left">

          {/* Available Badge */}
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-50 px-3.5 py-2 text-xs font-medium text-cyan-700 shadow-sm backdrop-blur-md dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 sm:px-4 sm:text-sm">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400" />
            <span>Available for Freelance Projects</span>
          </div>

          {/* Intro */}
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-sm sm:tracking-[0.25em]">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <div className="relative inline-block max-w-full">
            <div className="flex flex-wrap items-end gap-1 sm:gap-2">

              {/* Ayesha */}
              <span className="relative inline-block text-4xl font-extrabold tracking-tight text-slate-900 transition-transform duration-500 hover:-translate-y-1 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Ayesha
              </span>

              {/* Maheen */}
              <span className="relative inline-block -rotate-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Maheen
                </span>

                {/* Small Dot */}
                <span className="absolute -right-1 -top-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] sm:-right-2 sm:-top-3" />
              </span>

              {/* Main Dot */}
              <span className="self-end pb-1 text-3xl font-bold text-cyan-400 sm:pb-2 sm:text-4xl md:text-5xl">
                .
              </span>
            </div>

            {/* Underline */}
            <div className="absolute -bottom-2 left-0 h-[2px] w-[90%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 sm:-bottom-3" />
          </div>

          {/* Role */}
          <h2 className="mt-7 text-xl font-semibold sm:mt-8 sm:text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
              Full Stack Developer
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
            I build modern, responsive and scalable web applications using{" "}
            <span className="font-medium text-cyan-600 dark:text-cyan-400">
              ReactJS
            </span>
            ,{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400">
              NextJS
            </span>
            ,{" "}
            <span className="font-medium text-violet-600 dark:text-violet-400">
              NodeJS
            </span>{" "}
            and{" "}
            <span className="font-medium text-cyan-600 dark:text-cyan-400">
              TypeScript
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-row flex-wrap gap-3 sm:mt-7">

            {/* Primary Button */}
            <Link
              href="/projects"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.20)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] sm:px-7 sm:py-3.5 sm:text-base"
            >
              View My Work
              <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/contact"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300 sm:px-7 sm:py-3.5 sm:text-base"
            >
              Let&apos;s Connect
            </Link>
          </div>

          {/* Quick Skills */}
          <div className="mt-6 flex max-w-xl flex-wrap gap-2 sm:mt-7">
            {[
              "ReactJS",
              "NextJS",
              "TypeScript",
              "NodeJS",
              "ExpressJS",
              "NestJS",
              "MongoDB",
              "PostgreSQL",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-500 backdrop-blur-md transition duration-300 hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - DEVELOPER CARD */}
        <div className="relative mx-auto hidden w-full max-w-md items-center justify-center lg:flex">

          <div className="relative w-full max-w-[390px] rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111111] sm:p-7">

            {/* Top */}
            <div className="flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500 dark:text-cyan-400">
                <FiCode className="text-2xl" />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Available
              </div>
            </div>

            {/* Text */}
            <div className="mt-7 sm:mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Hello, I&apos;m
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                Ayesha Maheen
              </h3>

              <p className="mt-1 text-sm font-medium text-cyan-500 dark:text-cyan-400">
                Full Stack Developer
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400 sm:mt-5">
                Building clean, responsive and scalable web applications from
                frontend interfaces to backend APIs.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "PostgreSQL",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Code Line */}
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 font-mono text-[11px] text-slate-500 dark:border-white/10 dark:bg-black/20 dark:text-slate-400 sm:mt-7 sm:px-4 sm:text-xs">
              <span className="text-cyan-500">const</span>{" "}
              developer ={" "}
              <span className="text-violet-500">
                &quot;Full Stack Developer&quot;
              </span>
              ;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}