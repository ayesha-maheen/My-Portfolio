
"use client";

import { FormEvent, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-5 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white sm:px-6 sm:py-28 md:px-10 lg:py-32">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[130px]" />

        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blue-500/5 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADING ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-500 dark:text-cyan-400 sm:text-sm">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-blue-400 dark:to-violet-400">
              Talk
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            Have an idea, a project, or just want to say hello?
            I&apos;d love to hear from you.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">

          {/* ================= CONTACT INFORMATION ================= */}
          <div className="group rounded-3xl border border-slate-200 bg-slate-50/90 p-6 shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none sm:p-8">

            <div className="flex h-full flex-col">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
                  Contact Information
                </p>

                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Let&apos;s connect
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  I&apos;m open to discussing projects, creative ideas,
                  freelance work, and development opportunities.
                </p>
              </div>

              {/* ================= CONTACT DETAILS ================= */}
              <div className="mt-8 space-y-4">

                {/* EMAIL */}
                <a
                  href="mailto:ayeshamaheen348@gmail.com"
                  className="group/item flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:border-cyan-400/50 hover:shadow-md dark:border-white/10 dark:bg-slate-950/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500 dark:text-cyan-400">
                    <FiMail className="text-xl" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 break-all text-sm font-medium text-slate-700 transition group-hover/item:text-cyan-500 dark:text-slate-300 dark:group-hover/item:text-cyan-400">
                      ayeshamaheen348@gmail.com
                    </p>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+923277132461"
                  className="group/item flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:border-cyan-400/50 hover:shadow-md dark:border-white/10 dark:bg-slate-950/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-500 dark:text-cyan-400">
                    <FiPhone className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700 transition group-hover/item:text-cyan-500 dark:text-slate-300 dark:group-hover/item:text-cyan-400">
                      03277132461
                    </p>
                  </div>
                </a>

                {/* LOCATION */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950/40">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-500 dark:text-violet-400">
                    <FiMapPin className="text-xl" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                      Pakistan
                    </p>
                  </div>
                </div>

              </div>

              {/* ================= AVAILABILITY ================= */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3">

                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>

                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Available for opportunities
                </p>

              </div>

              {/* ================= SOCIAL LINKS ================= */}
              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/10">

                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Find me online
                </p>

                <div className="mt-4 flex flex-wrap gap-3">

                  {/* GITHUB */}
                  <a
                    href="https://github.com/ayesha-maheen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
                  >
                    <FaGithub className="text-lg" />
                    GitHub
                    <span className="text-xs">↗</span>
                  </a>

                  {/* LINKEDIN */}
                  <a
                    href="https://www.linkedin.com/in/maheen-chaudry/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-cyan-400/50 dark:hover:text-cyan-400"
                  >
                    <FaLinkedinIn className="text-lg" />
                    LinkedIn
                    <span className="text-xs">↗</span>
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50/90 p-6 shadow-sm backdrop-blur-xl transition duration-300 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none sm:p-8">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
              Send a Message
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Tell me about your idea
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

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
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
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
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
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
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
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
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
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
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition duration-300 placeholder:text-slate-400 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-600"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="group flex w-full items-center justify-center rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}

                {!isSending && (
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                )}
              </button>

              {/* STATUS */}
              {status && (
                <div
                  className={`rounded-xl px-4 py-3 text-center text-sm ${
                    status.includes("successfully")
                      ? "bg-emerald-400/10 text-emerald-500 dark:text-emerald-400"
                      : "bg-red-400/10 text-red-500 dark:text-red-400"
                  }`}
                >
                  {status}
                </div>
              )}

            </form>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-10 text-center text-xs text-slate-500 sm:text-sm">
          I&apos;ll get back to you as soon as possible.
        </p>

      </div>
    </main>
  );
}

