
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
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
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

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400/60 focus:bg-white focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-slate-600 dark:focus:bg-white/[0.05]";

  const selectClass =
    "w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 focus:border-cyan-400/60 focus:bg-white focus:ring-4 focus:ring-cyan-400/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:focus:bg-white/[0.05]";

  return (
    <main
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 pt-7 pb-10 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-9 sm:pb-12 md:px-10 lg:pt-11 lg:pb-14"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <div className="mb-6 text-left sm:mb-8">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white sm:text-xs">
            Get In Touch
          </p>

          <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Let&apos;s Connect
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base sm:leading-8">
            Have a project idea, an opportunity, or simply want to say hello?
            Tell me a little about your project and I&apos;ll get back to you.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">

          {/* CONTACT INFORMATION */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-[#111111]/95 dark:shadow-2xl sm:p-6">

            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                Contact Information
              </p>

              <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                Let&apos;s work together
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-200">
                I&apos;m available for freelance projects, web applications,
                frontend development and full-stack development opportunities.
              </p>
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-6 space-y-3">

              {/* EMAIL */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/5 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-50 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                  <FiMail className="text-xl" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm font-medium text-slate-700 dark:text-slate-200">
                    ayeshamaheen348@gmail.com
                  </p>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  title={copied ? "Copied!" : "Copy email"}
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-50 text-cyan-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400 dark:hover:bg-cyan-400/20"
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700 transition group-hover/item:text-blue-600 dark:text-slate-200 dark:group-hover/item:text-blue-400">
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
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                    Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400" />
              </span>

              <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Available for freelance projects
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                Find Me Online
              </p>

              <div className="mt-4 flex gap-3">

                {/* GITHUB */}
                <a
                  href="https://github.com/ayesha-maheen"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
                >
                  <FaGithub className="text-xl" />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/maheen-chaudry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>

              </div>

              {/* RESPONSE + RESUME */}
              <div className="mt-6 flex flex-col items-start gap-4 border-t border-slate-200 pt-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-300">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                  <span>Usually replies within 24 hours</span>
                </div>

                <a
                  href="/Ayesha_Maheen_FlowCV_Resume.pdf"
                  download="Ayesha_Maheen_FlowCV_Resume.pdf"
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-50 px-5 py-2.5 text-sm font-semibold text-cyan-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-100 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-400 dark:hover:bg-cyan-400/20 sm:w-auto"
                >
                  Download Resume
                  <span className="ml-2">↓</span>
                </a>

              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-[#111111]/95 dark:shadow-2xl sm:p-6">

            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
              Project Inquiry
            </p>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              Tell me about your project
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300">
              Share a few details so I can better understand your requirements.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              {/* NAME + EMAIL */}
              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </div>

              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                >
                  Phone Number{" "}
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="03XX XXXXXXX"
                  className={inputClass}
                />
              </div>

              {/* PROJECT TYPE */}
              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                >
                  Project Type
                </label>

                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className={selectClass}
                  >
                    <option value="" disabled>
                      Select project type
                    </option>

                    <option value="Website">Website</option>
                    <option value="Web Application">Web Application</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Portfolio">Portfolio Website</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Frontend Development">
                      Frontend Development
                    </option>
                    <option value="Full Stack Development">
                      Full Stack Development
                    </option>
                    <option value="Other">Other</option>
                  </select>

                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                    ▾
                  </span>
                </div>
              </div>

              {/* BUDGET + TIMELINE */}
              <div className="grid gap-4 sm:grid-cols-2">

                {/* BUDGET */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Budget
                  </label>

                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      required
                      defaultValue=""
                      className={selectClass}
                    >
                      <option value="" disabled>
                        Select budget
                      </option>

                      <option value="Under $300">Under $300</option>
                      <option value="$300 - $500">$300 - $500</option>
                      <option value="$500 - $1,000">$500 - $1,000</option>
                      <option value="$1,000 - $2,000">
                        $1,000 - $2,000
                      </option>
                      <option value="$2,000+">$2,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                      ▾
                    </span>
                  </div>
                </div>

                {/* TIMELINE */}
                <div>
                  <label
                    htmlFor="timeline"
                    className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                  >
                    Timeline
                  </label>

                  <div className="relative">
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      defaultValue=""
                      className={selectClass}
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>

                      <option value="ASAP">ASAP</option>
                      <option value="1 - 2 Weeks">1 - 2 Weeks</option>
                      <option value="2 - 4 Weeks">2 - 4 Weeks</option>
                      <option value="1 - 2 Months">1 - 2 Months</option>
                      <option value="2+ Months">2+ Months</option>
                      <option value="Flexible">Flexible</option>
                    </select>

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400">
                      ▾
                    </span>
                  </div>
                </div>

              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                >
                  Subject{" "}
                  <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="e.g. Business website development"
                  className={inputClass}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-900 dark:text-white"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, requirements, features, or anything else you'd like to discuss..."
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="group flex w-full cursor-pointer items-center justify-center rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Project Inquiry"}

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
        <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-300 sm:text-sm">
          I&apos;ll get back to you as soon as possible.
        </p>

      </div>
    </main>
  );
}
