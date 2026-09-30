import { FiCode } from "react-icons/fi";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-4 pt-7 pb-7 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-9 sm:pb-9 md:px-10 lg:pt-11 lg:pb-11"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-5 text-left sm:mb-7">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white sm:text-xs">
            Get to know me
          </p>

          <h2 className="py-1 text-3xl font-extrabold leading-tight tracking-tight text-[#08bff5] sm:text-4xl md:text-5xl">
            About Me
          </h2>

          <div className="mt-3 h-[2px] w-32 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 sm:w-40 md:w-48" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

          {/* Left Content */}
          <div className="w-full text-left">

            <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
              <span className="text-white">
                Turning ideas into digital experiences.
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-300 sm:text-base sm:leading-8">
              I&apos;m a Full Stack Developer passionate about building modern,
              responsive, and user-friendly web applications. I enjoy turning
              ideas and designs into clean, functional, and scalable digital
              experiences. I work across both frontend and backend development,
              creating seamless user interfaces, RESTful APIs, and efficient
              database-driven solutions.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base sm:leading-8">
              I work with modern technologies like React, Next.js,
              TypeScript and Tailwind CSS, while continuously learning
              and improving my development skills.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base sm:leading-8">
              My goal is to build websites that are not only visually
              appealing but also easy to use, responsive and reliable
              across different devices.
            </p>

            {/* Stats */}
            <div className="mt-5 grid max-w-xl grid-cols-2 gap-3 sm:mt-6 sm:gap-4">

              {/* Experience */}
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-2xl font-bold text-cyan-500 dark:text-cyan-400 sm:text-3xl">
                  01+
                </p>

                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                  Years Experience
                </p>
              </div>

              {/* Projects */}
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-2xl font-bold text-violet-500 dark:text-violet-400 sm:text-3xl">
                  5+
                </p>

                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                  Projects Built
                </p>
              </div>

            </div>
          </div>

          {/* Right Card */}
          <div className="relative w-full lg:mx-auto">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-violet-500/10 blur-3xl" />

            {/* Card */}
            <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111111]/95 sm:p-5">

              {/* Top Gradient Line */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

              {/* Header */}
              <div className="flex items-center justify-between">

                {/* Code Icon */}
                <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.12)] dark:text-cyan-400">
                  <FiCode className="text-base" />
                </div>

                {/* Badge */}
                <div className="flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-1 text-[10px] font-medium text-cyan-600 dark:text-cyan-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                  My Approach
                </div>

              </div>

              {/* Intro */}
              <div className="mt-4">
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400">
                  How I Work
                </p>

                <h3 className="mt-1.5 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  Building with purpose
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-slate-500 dark:text-slate-400">
                  I focus on clean design, responsive layouts and modern
                  development practices.
                </p>
              </div>

              {/* Divider */}
              <div className="my-3 h-px bg-slate-200 dark:bg-white/10" />

              {/* Approach Items */}
              <div className="space-y-2.5">

                {/* 01 */}
                <div className="group rounded-xl border border-slate-200 bg-slate-50 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-[9px] font-semibold text-cyan-500 dark:text-cyan-400">
                      01
                    </span>

                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                        Clean & Modern
                      </h4>

                      <p className="mt-0.5 text-[10px] leading-4 text-slate-500 dark:text-slate-300">
                        Simple and maintainable interfaces.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 02 */}
                <div className="group rounded-xl border border-slate-200 bg-slate-50 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-[9px] font-semibold text-blue-500 dark:text-blue-400">
                      02
                    </span>

                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                        Responsive Design
                      </h4>

                      <p className="mt-0.5 text-[10px] leading-4 text-slate-500 dark:text-slate-300">
                        Smooth experience on every device.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 03 */}
                <div className="group rounded-xl border border-slate-200 bg-slate-50 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-400/10 text-[9px] font-semibold text-violet-500 dark:text-violet-400">
                      03
                    </span>

                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">
                        Continuous Learning
                      </h4>

                      <p className="mt-0.5 text-[10px] leading-4 text-slate-500 dark:text-slate-300">
                        Always exploring modern technologies.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Code Box */}
              <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/[0.06]">

                {/* Code Header */}
                <div className="flex items-center gap-1.5 border-b border-slate-200 px-2.5 py-1.5 dark:border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                </div>

                {/* Code */}
                <div className="px-2.5 py-2 font-mono text-[9px] leading-4 text-slate-500 dark:text-slate-400">
                  <span className="text-violet-500">const</span>{" "}
                  approach ={" "}
                  <span className="text-cyan-500 dark:text-cyan-400">
                    &quot;Build. Learn. Improve.&quot;
                  </span>
                  ;
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}