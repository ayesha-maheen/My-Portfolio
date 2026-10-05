
"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900 transition-colors duration-300 dark:border-white/10 dark:bg-[#0a0a0a] dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row md:px-10">
        {/* LEFT */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-400 md:text-left">
          © 2026 Ayesha Maheen. All rights reserved.
        </p>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          {/* EMAIL */}
          <a
            href="mailto:ayeshamaheen348@gmail.com"
            className="text-sm text-slate-600 transition-colors duration-300 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
          >
            Email
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/ayesha-maheen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 transition-colors duration-300 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
          >
            GitHub
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/maheen-chaudry/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 transition-colors duration-300 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
          >
            LinkedIn
          </a>

          {/* BACK TO TOP */}
          <button
            onClick={scrollToTop}
            className="group cursor-pointer text-sm text-slate-600 transition-colors duration-300 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
          >
            Back to top
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}