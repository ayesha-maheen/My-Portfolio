"use client";

import { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white px-5 py-28 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white sm:px-6 sm:py-32 md:px-10">

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-10%] top-[15%] h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADING */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-500 dark:text-cyan-400 sm:text-sm">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
              Talk
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Have an idea, a project, or just want to say hello?
            I&apos;d love to hear from you.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* CONTACT INFO */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.035] sm:p-8">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
              Contact Information
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Let&apos;s connect
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              I&apos;m open to discussing projects, creative ideas, and
              development opportunities.
            </p>

            {/* EMAIL */}
            <div className="mt-7">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Email
              </p>

              <a
                href="mailto:ayeshamaheen348@gmail.com"
                className="mt-1 block break-all text-sm text-slate-700 transition hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-300"
              >
                ayeshamaheen348@gmail.com
              </a>
            </div>

            {/* PHONE */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Phone
              </p>

              <a
                href="tel:+923277132461"
                className="mt-1 block text-sm text-slate-700 transition hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-300"
              >
                03277132461
              </a>
            </div>

            {/* LOCATION */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Location
              </p>

              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                Pakistan
              </p>
            </div>

            {/* AVAILABILITY */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Availability
              </p>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for opportunities
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-7 border-t border-slate-200 pt-6 dark:border-white/10">

              <p className="text-xs uppercase tracking-wider text-slate-500">
                Find me online
              </p>

              <div className="mt-3 flex flex-wrap gap-3">

                <a
                  href="#"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300"
                >
                  GitHub ↗
                </a>

                <a
                  href="#"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300"
                >
                  LinkedIn ↗
                </a>

              </div>
            </div>

          </div>

          {/* FORM */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.035] sm:p-8">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
              Send a Message
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Tell me about your idea
            </h2>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Phone Number
                  <span className="ml-1 text-xs text-slate-500">
                    (Optional)
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="03XX XXXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
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
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="group w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
              >
                Send Message
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>
          </div>

        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          I&apos;ll get back to you as soon as possible.
        </p>

      </div>
    </main>
  );
}