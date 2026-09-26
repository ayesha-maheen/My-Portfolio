export default function AboutPage() {
  return (
    <>
      <main className="relative overflow-hidden bg-white px-6 py-28 text-slate-900 transition-colors duration-300 dark:bg-[#070b1a] dark:text-white md:px-10">

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-[-10%] top-[20%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/10" />

        <div className="pointer-events-none absolute right-[-10%] top-[40%] h-96 w-96 rounded-full bg-violet-500/10 blur-[130px] dark:bg-violet-500/10" />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-16 text-center">

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-500 dark:text-cyan-400">
              Get to know me
            </p>

            <h1 className="text-5xl font-bold sm:text-6xl">
              About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
            </h1>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
          </div>

          {/* Main Content */}
          <div className="grid items-center gap-14 md:grid-cols-2">

            {/* Left */}
            <div>

              <h2 className="text-3xl font-semibold sm:text-4xl">
                Turning ideas into{" "}
                <span className="text-cyan-500 dark:text-cyan-400">
                  digital experiences.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
                I’m a frontend developer passionate about creating modern,
                responsive and user-friendly websites. I enjoy turning ideas
                and designs into clean, functional web experiences.
              </p>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                I work with modern technologies like React, Next.js,
                TypeScript and Tailwind CSS, while continuously learning
                and improving my development skills.
              </p>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                My goal is to build websites that are not only visually
                appealing but also easy to use, responsive and reliable
                across different devices.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-3xl font-bold text-cyan-500 dark:text-cyan-400">
                    01+
                  </p>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-3xl font-bold text-violet-500 dark:text-violet-400">
                    10+
                  </p>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Projects Built
                  </p>
                </div>

              </div>
            </div>

            {/* Right */}
            <div className="relative">

              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-violet-500/20 blur-xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/80">

                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                  My Approach
                </p>

                <div className="mt-8 space-y-7">

                  {/* 01 */}
                  <div>
                    <div className="flex items-center gap-3">

                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-500 dark:text-cyan-400">
                        01
                      </span>

                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Clean & Modern
                      </h3>

                    </div>

                    <p className="mt-3 pl-[52px] text-sm leading-6 text-slate-600 dark:text-slate-400">
                      I focus on simple, clean and maintainable interfaces
                      that provide a smooth user experience.
                    </p>
                  </div>

                  {/* 02 */}
                  <div>
                    <div className="flex items-center gap-3">

                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-400/10 text-violet-500 dark:text-violet-400">
                        02
                      </span>

                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Responsive Design
                      </h3>

                    </div>

                    <p className="mt-3 pl-[52px] text-sm leading-6 text-slate-600 dark:text-slate-400">
                      I create websites that look and work well across
                      phones, tablets and desktop screens.
                    </p>
                  </div>

                  {/* 03 */}
                  <div>
                    <div className="flex items-center gap-3">

                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-400/10 text-pink-500 dark:text-pink-400">
                        03
                      </span>

                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        Continuous Learning
                      </h3>

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

          {/* Bottom Section */}
          <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] md:p-12">

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-500 dark:text-cyan-400">
              What I Believe
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
              Good websites combine{" "}
              <span className="text-cyan-500 dark:text-cyan-400">
                design, technology
              </span>{" "}
              and a great user experience.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              I believe every project is an opportunity to learn something
              new, solve problems creatively and create something meaningful.
            </p>

          </div>

        </div>
      </main>
    </>
  );
}