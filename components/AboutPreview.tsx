import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#070b1a] dark:text-white md:px-10">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[20%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
              Get to know me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-400">
                Me
              </span>
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          </div>

          {/* RIGHT */}
          <div>

            <p className="text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
              I’m a frontend developer passionate about creating modern,
              responsive and user-friendly websites. I enjoy turning ideas
              and designs into clean and functional digital experiences.
            </p>

            {/* Tags */}
            <div className="mt-7 flex flex-wrap gap-3">

              <span className="rounded-full border border-cyan-400/20 bg-cyan-50 px-4 py-2 text-sm text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                Frontend Development
              </span>

              <span className="rounded-full border border-blue-400/20 bg-blue-50 px-4 py-2 text-sm text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                Responsive Design
              </span>

              <span className="rounded-full border border-violet-400/20 bg-violet-50 px-4 py-2 text-sm text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                Modern Technologies
              </span>

            </div>

            {/* Button */}
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            >
              More About Me

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>
        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">
              01+
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Years Experience
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04]">
            <p className="text-2xl font-bold text-violet-500 dark:text-violet-400">
              10+
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Projects Built
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-5 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04] sm:col-span-1">
            <p className="text-2xl font-bold text-blue-500 dark:text-blue-400">
              ∞
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Learning &amp; Growing
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}