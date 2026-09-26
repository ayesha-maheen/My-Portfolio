import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-5 py-20 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white sm:px-6 sm:py-24 md:px-10 md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[5%] top-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-[5%] h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADING */}
        <div className="mb-12 text-center sm:mb-16">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
              Great
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            Have a project, idea, or opportunity in mind?
            I&apos;d love to hear from you.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Get in touch
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Whether you&apos;re looking for a developer, have a project
              idea, or simply want to connect, feel free to reach out.
            </p>

            {/* EMAIL */}
            <div className="mt-8">

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email
              </p>

              <a
                href="mailto:your-email@example.com"
                className="mt-2 block break-all text-sm font-medium text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 sm:text-base"
              >
                your-email@example.com
              </a>

            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-7">

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect with me
              </p>

              <div className="mt-3 flex flex-wrap gap-3">

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 transition hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
                >
                  LinkedIn
                </a>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">

            <form className="space-y-5">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/60 dark:focus:ring-cyan-400/30"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/60 dark:focus:ring-cyan-400/30"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/20 dark:border-white/10 dark:bg-slate-900/70 dark:text-white dark:placeholder:text-slate-600 dark:focus:border-cyan-400/60 dark:focus:ring-cyan-400/30"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
              >
                Send Message

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>
          </div>

        </div>

        {/* BACK TO HOME */}
        <div className="mt-10 text-center">

          <Link
            href="/"
            className="text-sm font-medium text-slate-500 transition hover:text-cyan-500 dark:hover:text-cyan-400"
          >
            ← Back to home
          </Link>

        </div>

      </div>
    </section>
  );
}