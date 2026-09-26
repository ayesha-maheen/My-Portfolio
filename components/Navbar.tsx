"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useTheme();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const linkClass = `text-sm font-medium transition-colors duration-300 ${
    darkMode
      ? "text-slate-300 hover:text-cyan-400"
      : "text-slate-600 hover:text-cyan-600"
  }`;

  // CV FILE
  const cvFile =
    "https://my-portfolio-bj8pcunvq-ayesha-maheen.vercel.app/Ayesha_Maheen_FlowCV_Resume.pdf";

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
        darkMode
          ? "border-slate-800/70 bg-slate-950/90"
          : "border-slate-200 bg-white/90"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-10">

        {/* NAVBAR */}
        <div className="relative flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className={`text-xl font-bold tracking-tight transition sm:text-2xl ${
              darkMode
                ? "text-white hover:text-cyan-400"
                : "text-slate-900 hover:text-cyan-600"
            }`}
          >
            Ayesha Maheen
            <span className="text-cyan-400">.</span>
          </Link>

          {/* CENTER NAVIGATION */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">
            <Link href="/" className={linkClass}>
              Home
            </Link>

            <Link href="/about" className={linkClass}>
              About
            </Link>

            <Link href="/skills" className={linkClass}>
              Skills
            </Link>

            <Link href="/projects" className={linkClass}>
              Projects
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden items-center gap-5 md:flex">

            {/* CV */}
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              CV
            </a>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
            >
              Contact
            </Link>

            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className={`group flex h-9 items-center gap-1 rounded-full border px-1.5 transition-all duration-300 ${
                darkMode
                  ? "border-slate-700 bg-slate-900 hover:border-cyan-400"
                  : "border-slate-200 bg-slate-100 hover:border-cyan-500"
              }`}
            >

              {/* MOON */}
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                  !darkMode
                    ? "bg-white text-indigo-500 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                  />
                </svg>
              </span>

              {/* SUN */}
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-cyan-400/15 text-amber-300"
                    : "text-slate-400"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="4" />

                  <path
                    strokeLinecap="round"
                    d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  />
                </svg>
              </span>

            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-2 md:hidden">

            {/* MOBILE THEME */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition ${
                darkMode
                  ? "text-slate-300 hover:bg-white/10"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {darkMode ? "☀" : "☾"}
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                darkMode
                  ? "border-slate-700 text-slate-300 hover:border-cyan-400"
                  : "border-slate-300 text-slate-700 hover:border-cyan-500"
              }`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className={`border-t py-4 md:hidden ${
              darkMode ? "border-slate-800" : "border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-1">

              {/* HOME */}
              <Link
                href="/"
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm transition ${
                  darkMode
                    ? "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                    : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                }`}
              >
                Home
              </Link>

              {/* ABOUT */}
              <Link
                href="/about"
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm transition ${
                  darkMode
                    ? "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                    : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                }`}
              >
                About
              </Link>

              {/* SKILLS */}
              <Link
                href="/skills"
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm transition ${
                  darkMode
                    ? "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                    : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                }`}
              >
                Skills
              </Link>

              {/* PROJECTS */}
              <Link
                href="/projects"
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm transition ${
                  darkMode
                    ? "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                    : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                }`}
              >
                Projects
              </Link>

              {/* MOBILE CV */}
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm transition ${
                  darkMode
                    ? "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
                    : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
                }`}
              >
                CV
              </a>

              {/* MOBILE CONTACT */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Contact
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}