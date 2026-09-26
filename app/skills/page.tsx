

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
    skills: [
      "Git",
      "GitHub",
    ],
  },
];

export default function SkillsPage() {
  return (
    <>
    

      <main className="min-h-screen bg-[#050816] px-6 py-32 text-white md:px-10">

        {/* Background Glow */}
        <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
          <div className="absolute left-[5%] top-[20%] h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
          <div className="absolute right-[5%] top-[40%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />
          <div className="absolute bottom-[5%] left-[40%] h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              What I Know
            </p>

            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              My <span className="text-cyan-400">Skills</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Technologies and tools I use to build modern, responsive
              and scalable web applications.
            </p>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          </div>

          {/* Skill Cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >

                {/* Card Heading */}
                <div className="flex items-start justify-between">

                  <div>
                    <h2 className="text-2xl font-bold">
                      {category.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {category.description}
                    </p>
                  </div>

                  <span className="text-2xl text-cyan-400 transition duration-300 group-hover:rotate-12">
                    ✦
                  </span>

                </div>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-300 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>

        </div>
      </main>
    </>
  );
}