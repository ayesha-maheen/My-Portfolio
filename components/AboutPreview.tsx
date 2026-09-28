
export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-4 pt-10 pb-16 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-12 sm:pb-20 md:px-10 lg:pt-16 lg:pb-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <div className="mb-10 text-left sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-sm sm:tracking-[0.25em]">
            Get to know me
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 sm:mt-6" />
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div className="w-full text-left">

            <h3 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:mt-5 sm:text-base sm:leading-8">
              I’m a frontend developer passionate about creating modern,
              responsive and user-friendly websites. I enjoy turning ideas
              and designs into clean, functional web experiences.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
              I work with modern technologies like React, Next.js,
              TypeScript and Tailwind CSS, while continuously learning
              and improving my development skills.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
              My goal is to build websites that are not only visually
              appealing but also easy to use, responsive and reliable
              across different devices.
            </p>

            {/* STATS */}
            <div className="mt-6 grid max-w-xl grid-cols-2 gap-3 sm:mt-7 sm:gap-4">

              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-2xl font-bold text-cyan-500 dark:text-cyan-400 sm:text-3xl">
                  01+
                </p>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                  Years Experience
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-2xl font-bold text-violet-500 dark:text-violet-400 sm:text-3xl">
                  10+
                </p>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                  Projects Built
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative mx-auto w-full max-w-md">

            <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111111] sm:p-7">

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-sm sm:tracking-[0.25em]">
                My Approach
              </p>

              <div className="mt-6 space-y-6 sm:mt-7 sm:space-y-7">

                {/* 01 */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xs font-semibold text-cyan-500 dark:text-cyan-400">
                      01
                    </span>

                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Clean & Modern
                    </h4>
                  </div>

                  <p className="mt-3 pl-[52px] text-sm leading-6 text-slate-600 dark:text-slate-400">
                    I focus on simple, clean and maintainable interfaces
                    that provide a smooth user experience.
                  </p>
                </div>

                {/* 02 */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-xs font-semibold text-blue-500 dark:text-blue-400">
                      02
                    </span>

                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Responsive Design
                    </h4>
                  </div>

                  <p className="mt-3 pl-[52px] text-sm leading-6 text-slate-600 dark:text-slate-400">
                    I create websites that look and work well across
                    phones, tablets and desktop screens.
                  </p>
                </div>

                {/* 03 */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-xs font-semibold text-violet-500 dark:text-violet-400">
                      03
                    </span>

                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      Continuous Learning
                    </h4>
                  </div>

                  <p className="mt-3 pl-[52px] text-sm leading-6 text-slate-600 dark:text-slate-400">
                    I’m continuously exploring modern tools and
                    technologies to improve my development skills.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* WHAT I BELIEVE */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur-md transition duration-300 hover:border-cyan-400/40 dark:border-white/10 dark:bg-[#111111] sm:mt-14 sm:p-8 md:p-10">

          {/* TOP ACCENT */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">

            {/* ICON */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-500 dark:text-cyan-400">
              ✦
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400 sm:text-sm">
                What I Believe
              </p>

              <h3 className="mt-3 max-w-3xl text-xl font-bold leading-tight text-slate-900 dark:text-white sm:text-2xl md:text-3xl">
                Good websites combine{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  design, technology
                </span>{" "}
                and a great user experience.
              </h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                I believe every project is an opportunity to learn something
                new, solve problems creatively and create something meaningful.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}