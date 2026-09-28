
const skillCategories = [
  {
    title: "Frontend",
    description: "Building modern and responsive user interfaces.",
    number: "01",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "REST API",
      "SSR",
      "SSG",
      "CSR",
    ],
  },
  {
    title: "Backend",
    description: "Creating APIs and scalable backend applications.",
    number: "02",
    skills: [
      "NodeJS",
      "ExpressJS",
      "NestJS",
      "RESTful APIs",
      "Redis",
      "OAuth 2.0",
      "RBAC",
      "Multi-Tenant Architecture",
    ],
  },
  {
    title: "Databases",
    description: "Designing and managing application databases.",
    number: "03",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Database Design",
    ],
  },
  {
    title: "Tools & Others",
    description: "Tools and technologies I use in development.",
    number: "04",
    skills: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white px-4 pt-10 pb-16 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-12 sm:pb-20 md:px-10 lg:pt-16 lg:pb-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <div className="mb-10 text-left sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-sm sm:tracking-[0.25em]">
            What I Know
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 sm:mt-6" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            Technologies and tools I use to build modern, responsive and
            scalable web applications.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5 dark:border-white/10 dark:bg-[#111111] dark:hover:border-cyan-400/40 sm:p-7"
            >
              {/* TOP ACCENT */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />

              {/* HEADER */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
                    {category.number}
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>

                {/* ICON */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-lg text-cyan-500 transition-all duration-300 group-hover:rotate-6 group-hover:scale-105 dark:text-cyan-400">
                  ✦
                </div>
              </div>

              {/* DIVIDER */}
              <div className="my-6 h-px bg-slate-200 dark:bg-white/10" />

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-300 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* BOTTOM DETAIL */}
              <div className="mt-7 flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>{category.skills.length} technologies</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
