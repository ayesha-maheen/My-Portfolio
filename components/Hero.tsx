import Link from "next/link";
import { FiArrowRight, FiCode } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export default function Hero() {
  const quickSkills = [
    {
      name: "React",
      icon: SiReact,
      color: "text-cyan-400",
      hover: "hover:border-cyan-400/50 hover:bg-cyan-400/10",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-slate-900 dark:text-white",
      hover: "hover:border-slate-400/50 hover:bg-white/10",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-500",
      hover: "hover:border-blue-400/50 hover:bg-blue-400/10",
      desktopOnly: true,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400",
      hover: "hover:border-yellow-400/50 hover:bg-yellow-400/10",
      desktopOnly: true,
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "text-green-500",
      hover: "hover:border-green-400/50 hover:bg-green-400/10",
    },
    {
      name: "NestJS",
      icon: SiNestjs,
      color: "text-red-500",
      hover: "hover:border-red-400/50 hover:bg-red-400/10",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
      hover: "hover:border-green-400/50 hover:bg-green-400/10",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "text-blue-500",
      hover: "hover:border-blue-400/50 hover:bg-blue-400/10",
    },
  ];

  const techStack = [
    {
      name: "React",
      icon: SiReact,
      color: "text-cyan-400",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-slate-900 dark:text-white",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "text-green-500",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-500",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-500",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "text-blue-500",
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-4 pt-24 pb-12 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-28 sm:pb-16 md:px-10 lg:min-h-screen lg:pt-32 lg:pb-20"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

        {/* LEFT SIDE */}
        <div className="w-full text-left">

          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            Available for Freelance Projects
          </div>

          {/* Intro */}
          <p className="mt-6 text-sm font-medium text-slate-900 dark:text-white sm:text-base">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <div className="mt-2">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Ayesha
              </span>{" "}
              <span className="inline-block -rotate-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Maheen
              </span>
            </h1>

            <div className="mt-4 h-[2px] w-64 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 sm:w-80 md:w-96" />
          </div>

          {/* Role */}
          <h2 className="mt-7 text-xl font-semibold sm:mt-8 sm:text-2xl md:text-3xl">
            <span className="text-slate-900 dark:text-white">
              Full Stack Developer
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-200 sm:mt-5 sm:text-base sm:leading-8">
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
          <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">

            <Link
              href="/#projects"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              View My Work
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* LET'S CONNECT → CONTACT COMPONENT */}
            <Link
              href="/#contact"
              className="inline-flex cursor-pointer items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.07] dark:hover:text-cyan-300"
            >
              Let&apos;s Connect
            </Link>
          </div>

          {/* Quick Skills */}
          <div className="mt-6 flex max-w-xl flex-wrap gap-3 sm:mt-7">
            {quickSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <span
                  key={skill.name}
                  title={skill.name}
                  className={`group flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04] ${skill.hover} ${
                    skill.desktopOnly ? "hidden sm:flex" : "flex"
                  }`}
                >
                  <Icon
                    className={`text-[22px] transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                  />
                </span>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE - DEVELOPER CARD */}
        <div className="relative mx-auto hidden w-full max-w-sm items-center justify-center lg:flex">

          {/* Glow */}
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-violet-500/10 blur-3xl" />

          {/* Card */}
          <div className="relative w-full max-w-[340px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/95 sm:p-6">

            {/* Top Gradient Line */}
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.12)] dark:text-cyan-400">
                <FiCode className="text-xl" />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                Available
              </div>
            </div>

            {/* Profile */}
            <div className="mt-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-400">
                Hello, I&apos;m
              </p>

              <h3 className="mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                Ayesha Maheen
              </h3>

              <div className="mt-1.5 inline-flex rounded-lg text-sm font-semibold text-slate-900 dark:text-white">
                Full Stack Developer
              </div>

              <p className="mt-2 text-[11px] leading-5 text-slate-600 dark:text-slate-200">
                Building clean, responsive and scalable web applications from
                frontend interfaces to backend APIs.
              </p>
            </div>

            {/* Divider */}
            <div className="my-5 h-px bg-slate-200 dark:bg-white/10" />

            {/* Tech Stack */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {techStack.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      title={skill.name}
                      className="group flex cursor-pointer items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
                    >
                      <Icon
                        className={`text-base transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
                      />

                      <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Code Box */}
            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-black/30">

              {/* Code Header */}
              <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2 dark:border-white/10">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
              </div>

              {/* Code */}
              <div className="px-3 py-2.5 font-mono text-[10px] leading-5 text-slate-500 dark:text-slate-400 sm:text-[11px]">
                <span className="text-violet-500">const</span>{" "}
                developer ={" "}
                <span className="text-cyan-500 dark:text-cyan-400">
                  &quot;Full Stack Developer&quot;
                </span>
                ;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
