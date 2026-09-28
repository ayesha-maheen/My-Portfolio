"use client";

import { FormEvent, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { LuCopy } from "react-icons/lu";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ayeshamaheen348@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

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
    <main className="relative overflow-hidden bg-white px-4 pt-10 pb-16 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-12 sm:pb-20 md:px-10 lg:pt-16 lg:pb-24">
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <div className="mb-10 text-left sm:mb-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 sm:text-sm sm:tracking-[0.25em]">
            Get In Touch
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <div className="mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 sm:mt-6" />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            Have a project idea, an opportunity, or simply want to say hello?
            Feel free to get in touch.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">

          {/* CONTACT INFORMATION */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-xl dark:border-white/10 dark:bg-[#111111] dark:shadow-none sm:p-8">

            {/* TOP ACCENT */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
                Contact Information
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Let&apos;s connect
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                I&apos;m open to discussing projects, creative ideas,
                freelance work, and development opportunities.
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-8 space-y-4">

              {/* EMAIL */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/5 sm:gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                  <FiMail className="text-xl" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-slate-700 dark:text-slate-300">
                    ayeshamaheen348@gmail.com
                  </p>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  title={copied ? "Copied!" : "Copy email"}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-50 text-cyan-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400 dark:hover:bg-cyan-400/20"
                >
                  {copied ? (
                    <span className="text-xs font-bold">✓</span>
                  ) : (
                    <LuCopy className="text-base" />
                  )}
                </button>
              </div>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/923277132461"
                target="_blank"
                rel="noopener noreferrer"
                className="group/item flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-400/40 dark:hover:bg-blue-400/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                  <FiPhone className="text-xl" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700 transition group-hover/item:text-blue-600 dark:text-slate-300 dark:group-hover/item:text-blue-400">
                    03277132461
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-50 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400">
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

            {/* AVAILABILITY */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
              </span>

              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Available for opportunities
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Find Me Online
              </p>

              <div className="mt-4 flex gap-3">

                {/* GITHUB */}
                <a
                  href="https://github.com/ayesha-maheen"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
                >
                  <FaGithub className="text-xl" />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/maheen-chaudry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>

              </div>

              {/* RESPONSE + RESUME */}
              <div className="mt-6 flex flex-col items-start gap-4 border-t border-slate-200 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">

                {/* RESPONSE TIME */}
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <span>Usually replies within 24 hours</span>
                </div>

                {/* DOWNLOAD RESUME */}
                <a
                  href="/Ayesha_Maheen_FlowCV_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-50 px-5 py-2.5 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400 dark:hover:bg-cyan-400/20 sm:w-auto"
                >
                  Download Resume
                  <span className="ml-2">↓</span>
                </a>

              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl dark:border-white/10 dark:bg-[#111111] dark:shadow-none sm:p-8">

            {/* TOP ACCENT */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
              Send a Message
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:bg-white/[0.05]"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:bg-white/[0.05]"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Phone Number{" "}
                  <span className="text-xs text-slate-500">
                    (Optional)
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="03XX XXXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:bg-white/[0.05]"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:bg-white/[0.05]"
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
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:bg-white/[0.05]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="group flex w-full items-center justify-center rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
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
                      ? "bg-cyan-400/10 text-cyan-600 dark:text-cyan-400"
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