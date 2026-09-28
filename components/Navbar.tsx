"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { MdDarkMode } from "react-icons/md";
import { VscLightbulbSparkle } from "react-icons/vsc";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { darkMode, toggleTheme } = useTheme();

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  const linkClass = `text-sm font-medium transition-colors duration-300 ${
    darkMode
      ? "text-slate-300 hover:text-cyan-400"
      : "text-slate-600 hover:text-cyan-600"
  }`;

  const mobileLinkClass = `block w-full px-4 py-3 text-base font-medium transition-colors duration-300 ${
    darkMode
      ? "text-slate-300 hover:text-cyan-400"
      : "text-slate-700 hover:text-cyan-600"
  }`;

  // Resume PDF inside public folder
  const cvFile = "/Ayesha_Maheen_FlowCV_Resume.pdf";

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
        darkMode
          ? "border-slate-800/70 bg-slate-950/95"
          : "border-slate-200 bg-white/95"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        {/* NAVBAR */}
        <div className="flex h-[72px] items-center justify-between">
          {/* LOGO + NAME */}
          <Link
            href="/#home"
            onClick={closeMenu}
            className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          >
            {/* AM MONOGRAM */}
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center sm:h-11 sm:w-11">
              <span
                className={`absolute inset-0 rotate-45 rounded-xl border transition-all duration-500 group-hover:rotate-[135deg] ${
                  darkMode
                    ? "border-cyan-400/50"
                    : "border-cyan-500/50"
                }`}
              />

              <span
                className={`absolute inset-[3px] rounded-lg transition-all duration-300 ${
                  darkMode
                    ? "bg-slate-900 group-hover:bg-cyan-400"
                    : "bg-white group-hover:bg-cyan-500"
                }`}
              />

              <span
                className={`relative z-10 text-[10px] font-black tracking-[-1px] transition-colors duration-300 sm:text-sm ${
                  darkMode
                    ? "text-cyan-400 group-hover:text-slate-950"
                    : "text-cyan-600 group-hover:text-white"
                }`}
              >
                AM
              </span>

              <span className="absolute -right-1 -top-1 z-20 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)] sm:h-2.5 sm:w-2.5" />
            </span>

            {/* NAME */}
            <span
              className={`truncate text-base font-bold tracking-tight transition-colors duration-300 sm:text-xl md:text-2xl ${
                darkMode
                  ? "text-white group-hover:text-cyan-400"
                  : "text-slate-900 group-hover:text-cyan-600"
              }`}
            >
              Ayesha Maheen
              <span className="text-cyan-400">.</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 md:flex lg:gap-8">
            <Link href="/#home" className={linkClass}>
              Home
            </Link>

            <Link href="/#about" className={linkClass}>
              About
            </Link>

            <Link href="/#experience" className={linkClass}>
              Experience
            </Link>

            <Link href="/#skills" className={linkClass}>
              Skills
            </Link>

            <Link href="/#projects" className={linkClass}>
              Projects
            </Link>
          </div>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden items-center gap-4 md:flex lg:gap-5">
            {/* DOWNLOAD RESUME */}
            <a
              href={cvFile}
              download="Ayesha_Maheen_FlowCV_Resume.pdf"
              className={`${linkClass} inline-flex cursor-pointer items-center gap-1.5`}
            >
              Download Resume
              <span className="text-cyan-400 transition-transform duration-300 hover:translate-x-1">
                →
              </span>
            </a>

            {/* CONTACT */}
            <Link
              href="/#contact"
              className="cursor-pointer rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] lg:px-5"
            >
              Contact
            </Link>

            {/* THEME */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ${
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
          <div className="flex shrink-0 items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border transition ${
                darkMode
                  ? "border-slate-800 text-slate-300 hover:bg-white/10"
                  : "border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {darkMode ? (
                <MdDarkMode className="h-5 w-5 text-cyan-400" />
              ) : (
                <VscLightbulbSparkle className="h-5 w-5 text-amber-400" />
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border text-lg transition ${
                darkMode
                  ? "border-slate-800 text-slate-300 hover:border-cyan-400"
                  : "border-slate-200 text-slate-700 hover:border-cyan-500"
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
              darkMode ? "border-slate-800" : "border-slate-200"
            }`}
          >
            <div className="flex flex-col">
              <Link
                href="/#home"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Home
              </Link>

              <Link
                href="/#about"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                About
              </Link>

              <Link
                href="/#experience"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Experience
              </Link>

              <Link
                href="/#skills"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Skills
              </Link>

              <Link
                href="/#projects"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Projects
              </Link>

              <Link
                href="/#contact"
                onClick={closeMenu}
                className={mobileLinkClass}
              >
                Contact
              </Link>

              {/* MOBILE DOWNLOAD RESUME */}
              <a
                href={cvFile}
                download="Ayesha_Maheen_FlowCV_Resume.pdf"
                onClick={closeMenu}
                className={`${mobileLinkClass} flex items-center gap-2`}
              >
                Download Resume
                <span className="text-cyan-400">→</span>
              </a>

              {/* MOBILE HIRE ME */}
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="mt-2 inline-flex w-fit cursor-pointer items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}