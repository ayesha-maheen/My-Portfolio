"use client";

import { useState } from "react";
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiX,
} from "react-icons/fi";

type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  role: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "PavilionCC",
    category: "Sports Club Management",
    description:
      "A white-label, multi-tenant sports club management platform with customizable branding, responsive interfaces and scalable backend services.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Bull",
      "Swagger",
    ],
    features: [
      "Multi-tenant architecture",
      "Customizable club branding",
      "Responsive user interface",
      "Scalable backend services",
      "RESTful API integration",
    ],
    role:
      "Worked on frontend and backend development, API integration and application functionality.",
  },
  {
    title: "Facilifi",
    category: "Asset Management",
    description:
      "An asset management system designed to manage the complete asset lifecycle, including creating, assigning, transferring and retiring assets with role-based workflows.",
    technologies: [
      "React",
      "Redux",
      "NestJS",
      "MySQL",
      "Redis",
      "REST API",
      "RBAC",
    ],
    features: [
      "Asset lifecycle management",
      "Role-based access control",
      "Asset assignment and transfer",
      "Structured management workflows",
      "REST API integration",
    ],
    role:
      "Contributed to frontend development, API integration and implementation of application features.",
  },
  {
    title: "Chrono Task",
    category: "Productivity",
    description:
      "A modern task management application designed to help users organize daily tasks through a simple, responsive and intuitive interface.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Task management",
      "Responsive interface",
      "Simple task organization",
      "Modern UI design",
      "User-friendly experience",
    ],
    role:
      "Developed the frontend interface and implemented task management functionality.",
  },
  {
    title: "Contact Management System",
    category: "Management",
    description:
      "A contact management application for organizing users and contact information with a structured interface, database and management features.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Contact management",
      "Create and manage contacts",
      "MongoDB database integration",
      "REST API functionality",
      "Responsive interface",
    ],
    role:
      "Worked on frontend development, backend APIs and MongoDB database integration.",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-4 pt-7 pb-10 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white sm:px-6 sm:pt-9 sm:pb-12 md:px-10 lg:pt-11 lg:pb-14"
    >
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADING */}
        <div className="mb-6 text-left sm:mb-8">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white sm:text-xs">
            My Work
          </p>

          <h2 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Selected Projects
          </h2>

          {/* UNDERLINE */}
<div className="mt-3 h-[2px] w-full max-w-[230px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base sm:leading-8">
            A selection of projects I have worked on using modern
            technologies and clean development practices.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-[#111111]/95 dark:shadow-2xl sm:p-6"
            >
              {/* TOP GRADIENT */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              {/* CATEGORY */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                {project.category}
              </p>

              {/* PROJECT NAME */}
              <h3 className="mt-2 text-xl font-bold tracking-tight text-cyan-600 dark:text-cyan-300 sm:text-2xl">
                {project.title}
              </h3>

              {/* DIVIDER */}
              <div className="my-5 h-px bg-slate-200 dark:bg-white/10" />

              {/* DESCRIPTION */}
              <p className="text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base">
                {project.description}
              </p>

              {/* VIEW DETAILS */}
              <div className="mt-auto pt-6">
                <div className="flex justify-end border-t border-slate-200 pt-5 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group/details inline-flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
                  >
                    View Details

                    <FiArrowRight className="transition-transform duration-300 group-hover/details:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* MORE PROJECTS */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-300">
            More projects coming soon.
          </p>
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* MODAL BOX */}
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-white/10 dark:bg-[#111111] sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            {/* TOP GRADIENT */}
            <div className="absolute left-0 right-0 top-0 h-[2px] rounded-t-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close project details"
              className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
            >
              <FiX className="text-lg" />
            </button>

            {/* MODAL HEADER */}
            <div className="pr-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {selectedProject.category}
              </p>

              <h2 className="mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text py-1 text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl">
                {selectedProject.title}
              </h2>
            </div>

            {/* DIVIDER */}
            <div className="my-5 h-px bg-slate-200 dark:bg-white/10" />

            {/* ABOUT PROJECT */}
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                About the Project
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base">
                {selectedProject.description}
              </p>
            </div>

            {/* KEY FEATURES */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Key Features
              </h3>

              <div className="mt-3 space-y-2">
                {selectedProject.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-200">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Technologies
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="cursor-pointer rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 dark:text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* MY ROLE */}
            <div className="mt-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                My Role
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-200">
                {selectedProject.role}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 border-t border-slate-200 pt-5 dark:border-white/10 sm:flex-row">
              {/* GITHUB */}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
                >
                  <FiGithub />
                  GitHub
                </a>
              )}

              {/* LIVE DEMO */}
              {selectedProject.live && (
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              )}

              {/* CLOSE */}
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-400/40 dark:hover:text-cyan-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}