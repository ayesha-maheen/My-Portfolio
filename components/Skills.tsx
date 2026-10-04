const skillCategories = [
  {
    title: "Frontend",
    description: "Building modern and responsive user interfaces.",
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
    skills: ["Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white px-4 pt-7 pb-10 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-9 sm:pb-12 md:px-10 lg:pt-11 lg:pb-14"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-6 text-left sm:mb-8">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white sm:text-xs">
            What I Know
          </p>

          <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-5xl">
            My Skills
          </h2>

          
<p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-white sm:text-base sm:leading-8">
  Technologies and tools I use to build modern,{" "}
  <span className="font-medium text-blue-600 dark:text-blue-300">
    responsive
  </span>{" "}
  and scalable web applications.
</p>


        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-[#111111]/95 dark:shadow-2xl sm:p-6"
            >
              {/* Top Gradient Line */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-5 text-slate-500 dark:text-slate-200 sm:text-sm sm:leading-6">
                    {category.description}
                  </p>
                </div>

                {/* Code Icon */}
                <div className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-mono text-sm font-bold text-cyan-500 transition-all duration-300 group-hover:scale-105 dark:text-cyan-400 sm:h-11 sm:w-11 sm:rounded-2xl sm:text-base">
                  &lt;/&gt;
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-slate-200 dark:bg-white/10" />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => {
                  const skillColors = [
                    "border-cyan-400/30 bg-cyan-400/10 text-cyan-600 hover:border-cyan-400/50 hover:bg-cyan-400/15 dark:text-cyan-300",
                    "border-blue-400/30 bg-blue-400/10 text-blue-600 hover:border-blue-400/50 hover:bg-blue-400/15 dark:text-blue-300",
                    "border-violet-400/30 bg-violet-400/10 text-violet-600 hover:border-violet-400/50 hover:bg-violet-400/15 dark:text-violet-300",
                  ];

                  return (
                    <span
                      key={skill}
                      className={`cursor-pointer rounded-lg border px-2.5 py-1.5 text-[11px] font-medium transition-all duration-300 hover:-translate-y-0.5 sm:px-3 sm:py-2 sm:text-xs ${
                        skillColors[index % skillColors.length]
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}