import Link from "next/link";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export default function SkillsPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white md:px-10">

      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[5%] left-[-10%] h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
              What I Work With
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
                Skills
              </span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              The technologies I use to create modern, responsive and
              interactive web applications.
            </p>
          </div>

          {/* View All Skills */}
          <Link
            href="/skills"
            className="group w-fit rounded-xl border border-cyan-400/40 bg-cyan-50 px-5 py-3 font-semibold text-cyan-700 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 dark:bg-cyan-400/10 dark:text-cyan-300"
          >
            View All Skills

            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

        {/* Skills */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

          {skills.map((skill, index) => (
            <div
              key={skill}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
            >

              {/* Number */}
              <span className="absolute right-3 top-3 text-[10px] text-slate-400 transition group-hover:text-cyan-500 dark:text-slate-700 dark:group-hover:text-cyan-400/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Skill Name */}
              <h3 className="mt-2 text-sm font-semibold text-slate-700 transition-colors sm:text-base dark:text-slate-200">
                {skill}
              </h3>

              {/* Accent Line */}
              <div className="mx-auto mt-4 h-px w-8 bg-cyan-400/30 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-400" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}