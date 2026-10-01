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
  description: React.ReactNode;
  technologies: string[];
  features: React.ReactNode[];
  role: React.ReactNode;
  problem: React.ReactNode;
  built: React.ReactNode[];
  impact: React.ReactNode[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "PavilionCC",
    category: "Sports Club Management",

    description: (
      <>
        A{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          white-label, multi-tenant
        </span>{" "}
        sports club management platform with{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          customizable branding
        </span>
        , responsive interfaces and{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          scalable backend services
        </span>
        .
      </>
    ),

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
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Multi-tenant architecture
        </span>
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          Customizable club branding
        </span>
      </>,
      <>
        <span className="font-medium text-violet-600 dark:text-violet-300">
          Responsive user interface
        </span>
      </>,
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Scalable backend services
        </span>
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          RESTful API integration
        </span>
      </>,
    ],

    role: (
      <>
        Worked as a{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          full-stack developer
        </span>
        , contributing to frontend and backend development, API integration,
        and{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          application functionality
        </span>
        .
      </>
    ),

    problem: (
      <>
        Sports clubs need a centralized platform to manage their operations,
        members, and club-specific requirements. The challenge was to build a
        flexible system that could support{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          multiple clubs
        </span>{" "}
        while keeping their data and branding properly isolated.
      </>
    ),

    built: [
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Multi-tenant architecture
        </span>{" "}
        — designed the platform to support multiple sports clubs with
        isolated data.
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          Customizable branding
        </span>{" "}
        — enabled clubs to maintain their own branding and identity.
      </>,
      <>
        <span className="font-medium text-violet-600 dark:text-violet-300">
          Responsive interface
        </span>{" "}
        — developed responsive user interfaces for different screen sizes.
      </>,
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Backend services
        </span>{" "}
        — contributed to scalable backend services and RESTful API
        integration.
      </>,
    ],

    impact: [
      <>
        Built a{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          scalable multi-club platform
        </span>{" "}
        with isolated tenant data.
      </>,
      <>
        Improved club management through{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          centralized digital workflows
        </span>
        .
      </>,
      <>
        Delivered a{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          responsive and customizable experience
        </span>{" "}
        for different clubs.
      </>,
    ],
  },

  {
    title: "Facilifi",
    category: "Asset Management",

    description: (
      <>
        An{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          asset management system
        </span>{" "}
        designed to manage the complete{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          asset lifecycle
        </span>
        , including creating, assigning, transferring and retiring assets with{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          role-based workflows
        </span>
        .
      </>
    ),

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
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Asset lifecycle management
        </span>
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          Role-based access control
        </span>
      </>,
      <>
        <span className="font-medium text-violet-600 dark:text-violet-300">
          Asset assignment and transfer
        </span>
      </>,
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Structured management workflows
        </span>
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          REST API integration
        </span>
      </>,
    ],

    role: (
      <>
        Contributed as a{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          full-stack developer
        </span>
        , working on frontend development, API integration and{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          application features
        </span>
        .
      </>
    ),

    problem: (
      <>
        Organizations need an efficient way to track assets throughout their
        lifecycle. Managing asset assignments, transfers, and access manually
        can make it difficult to maintain{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          accurate asset records
        </span>{" "}
        and controlled workflows.
      </>
    ),

    built: [
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Asset lifecycle management
        </span>{" "}
        — implemented workflows for creating, assigning, transferring and
        managing assets.
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          Role-based access control
        </span>{" "}
        — supported controlled access for different user roles.
      </>,
      <>
        <span className="font-medium text-violet-600 dark:text-violet-300">
          API integration
        </span>{" "}
        — connected frontend functionality with backend REST APIs.
      </>,
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Structured workflows
        </span>{" "}
        — created organized flows for asset management operations.
      </>,
    ],

    impact: [
      <>
        Improved visibility across the{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          complete asset lifecycle
        </span>
        .
      </>,
      <>
        Supported more controlled asset operations through{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          role-based workflows
        </span>
        .
      </>,
      <>
        Provided a centralized interface for{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          asset management
        </span>
        .
      </>,
    ],
  },

  {
    title: "Chrono Task",
    category: "Productivity",

    description: (
      <>
        A{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          modern task management application
        </span>{" "}
        designed to help users organize daily tasks through a{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          simple, responsive
        </span>{" "}
        and intuitive interface.
      </>
    ),

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],

    features: [
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Task management
        </span>
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          Responsive interface
        </span>
      </>,
      <>
        <span className="font-medium text-violet-600 dark:text-violet-300">
          Simple task organization
        </span>
      </>,
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Modern UI design
        </span>
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          User-friendly experience
        </span>
      </>,
    ],

    role: (
      <>
        Developed the{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          frontend interface
        </span>{" "}
        and implemented{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          task management functionality
        </span>
        .
      </>
    ),

    problem: (
      <>
        Users often need a simple way to organize daily tasks without dealing
        with complicated interfaces. The goal was to create a{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          clean and straightforward
        </span>{" "}
        task management experience that works smoothly across devices.
      </>
    ),

    built: [
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Task management
        </span>{" "}
        — implemented functionality for organizing daily tasks.
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          Responsive interface
        </span>{" "}
        — designed the application to work across different screen sizes.
      </>,
      <>
        <span className="font-medium text-violet-600 dark:text-violet-300">
          Modern UI
        </span>{" "}
        — created a clean and intuitive user interface.
      </>,
    ],

    impact: [
      <>
        Provided a{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          simple task organization
        </span>{" "}
        experience.
      </>,
      <>
        Delivered a{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          responsive interface
        </span>{" "}
        across devices.
      </>,
      <>
        Created a clean foundation for{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          productivity-focused features
        </span>
        .
      </>,
    ],
  },

  {
    title: "Contact Management System",
    category: "Management",

    description: (
      <>
        A{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          contact management application
        </span>{" "}
        for organizing users and contact information with a{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          structured interface
        </span>
        , database and{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          management features
        </span>
        .
      </>
    ),

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Contact management
        </span>
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          Create and manage contacts
        </span>
      </>,
      <>
        <span className="font-medium text-violet-600 dark:text-violet-300">
          MongoDB database integration
        </span>
      </>,
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          REST API functionality
        </span>
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          Responsive interface
        </span>
      </>,
    ],

    role: (
      <>
        Worked on{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          frontend development
        </span>
        , backend APIs and{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          MongoDB database integration
        </span>
        .
      </>
    ),

    problem: (
      <>
        Managing contact information manually can make it difficult to keep
        records organized and accessible. The goal was to create a{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          centralized contact management system
        </span>{" "}
        with a simple and structured interface.
      </>
    ),

    built: [
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Contact management
        </span>{" "}
        — created functionality for adding, editing and managing contacts.
      </>,
      <>
        <span className="font-medium text-blue-600 dark:text-blue-300">
          REST APIs
        </span>{" "}
        — developed backend APIs for contact operations.
      </>,
      <>
        <span className="font-medium text-violet-600 dark:text-violet-300">
          MongoDB integration
        </span>{" "}
        — connected the application with MongoDB for data persistence.
      </>,
      <>
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          Responsive interface
        </span>{" "}
        — built a responsive interface for managing contacts.
      </>,
    ],

    impact: [
      <>
        Provided a centralized way to{" "}
        <span className="font-medium text-cyan-600 dark:text-cyan-300">
          organize contact information
        </span>
        .
      </>,
      <>
        Simplified contact operations through{" "}
        <span className="font-medium text-blue-600 dark:text-blue-300">
          structured workflows
        </span>
        .
      </>,
      <>
        Created a full-stack application using{" "}
        <span className="font-medium text-violet-600 dark:text-violet-300">
          React, Node.js and MongoDB
        </span>
        .
      </>,
    ],
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

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
            Things I've built
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base sm:leading-8">
            A selection of projects I have worked on using{" "}
            <span className="font-medium text-cyan-600 dark:text-cyan-300">
              modern technologies
            </span>{" "}
            and{" "}
            <span className="font-medium text-violet-600 dark:text-violet-300">
              clean development practices
            </span>
            .
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
            className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#111111] sm:max-h-[85vh]"
            onClick={(event) => event.stopPropagation()}
          >
            {/* TOP GRADIENT */}
            <div className="absolute left-0 right-0 top-0 z-20 h-[2px] rounded-t-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />

            {/* STICKY HEADER */}
            <div className="relative z-10 shrink-0 border-b border-slate-200 bg-white px-5 pb-4 pt-5 dark:border-white/10 dark:bg-[#111111] sm:px-7 sm:pb-5 sm:pt-6">
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

                {/* PRIVATE / NDA PROJECT */}
                {selectedProject.title !== "Contact Management System" && (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-violet-600 dark:text-violet-400">
                    Private / NDA Project
                  </p>
                )}
              </div>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
              {/* ROLE */}
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Role
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base">
                  {selectedProject.role}
                </p>
              </div>

              {/* PROBLEM */}
              <div className="mt-7">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Problem
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base">
                  {selectedProject.problem}
                </p>
              </div>

              {/* WHAT I BUILT */}
              <div className="mt-7">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  What I Built
                </h3>

                <div className="mt-3 space-y-3">
                  {selectedProject.built.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                      <p className="text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMPACT */}
              <div className="mt-7">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Impact
                </h3>

                <div className="mt-3 space-y-3">
                  {selectedProject.impact.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-400" />

                      <p className="text-sm leading-7 text-slate-500 dark:text-slate-200 sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECHNOLOGIES */}
              <div className="mt-7">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Technologies
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.technologies.map(
                    (technology, index) => {
                      const technologyColors = [
                        "border-cyan-400/30 bg-cyan-400/10 text-cyan-600 hover:border-cyan-400/50 hover:bg-cyan-400/15 dark:text-cyan-300",

                        "border-blue-400/30 bg-blue-400/10 text-blue-600 hover:border-blue-400/50 hover:bg-blue-400/15 dark:text-blue-300",

                        "border-violet-400/30 bg-violet-400/10 text-violet-600 hover:border-violet-400/50 hover:bg-violet-400/15 dark:text-violet-300",
                      ];

                      return (
                        <span
                          key={technology}
                          className={`cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                            technologyColors[
                              index % technologyColors.length
                            ]
                          }`}
                        >
                          {technology}
                        </span>
                      );
                    }
                  )}
                </div>
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
        </div>
      )}
    </section>
  );
}