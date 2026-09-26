"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { MdDarkMode } from "react-icons/md";
import { VscLightbulbSparkle } from "react-icons/vsc";

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

  const mobileLinkClass = `block w-full rounded-lg px-4 py-3 text-sm font-medium transition ${
    darkMode
      ? "text-slate-300 hover:bg-slate-900 hover:text-cyan-400"
      : "text-slate-700 hover:bg-slate-100 hover:text-cyan-600"
  }`;

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
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">

        {/* NAVBAR */}
        <div className="flex h-16 items-center justify-between sm:h-20">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className={`shrink-0 text-lg font-bold tracking-tight transition sm:text-xl md:text-2xl ${
              darkMode
                ? "text-white hover:text-cyan-400"
                : "text-slate-900 hover:text-cyan-600"
            }`}
          >
            Ayesha Maheen
            <span className="text-cyan-400">.</span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex lg:gap-10">
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

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-4 md:flex lg:gap-5">

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
              className="rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] lg:px-5"
            >
              Contact
            </Link>

            {/* THEME */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                darkMode
                  ? "border-slate-700 bg-slate-900 hover:border-cyan-400"
                  : "border-slate-200 bg-slate-100 hover:border-cyan-500"
              }`}
            >
              {darkMode ? (
                <MdDarkMode className="h-5 w-5 text-cyan-400" />
              ) : (
                <VscLightbulbSparkle className="h-5 w-5 text-amber-400" />
              )}
            </button>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex items-center gap-1 md:hidden">

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
              {darkMode ? (
                <MdDarkMode className="h-5 w-5 text-cyan-400" />
              ) : (
                <VscLightbulbSparkle className="h-5 w-5 text-amber-400" />
              )}
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border text-lg transition ${
                darkMode
                  ? "border-slate-700 text-slate-300 hover:border-cyan-400"
                  : "border-slate-300 text-slate-700 hover:border-cyan-500"
              }`}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className={`border-t py-3 md:hidden ${
              darkMode
                ? "border-slate-800"
                : "border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-1">

              <Link
                href="/"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                About
              </Link>

              <Link
                href="/skills"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Skills
              </Link>

              <Link
                href="/projects"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Projects
              </Link>

              {/* MOBILE CV */}
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                View CV
              </a>

              {/* MOBILE CONTACT */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 block w-full rounded-xl bg-cyan-400 px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
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