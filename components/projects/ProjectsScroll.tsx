"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { translations } from "@/lib/translations";

interface ProjectsScrollProps {
  language: "fr" | "en";
}

export default function ProjectsScroll({ language }: ProjectsScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const t = translations[language];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        e.preventDefault();
        scrollContainerRef.current.scrollLeft += e.deltaY;
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, []);

  return (
    <>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section
        className="relative overflow-hidden w-full py-24 dark:bg-zinc-950/90"
        id="projects"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/4 translate-x-1/4 rounded-full bg-cyan-400/10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/4 rounded-full bg-mint/10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute inset-0 opacity-30 dark:opacity-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22none%22 stroke=%22%23999%22 stroke-width=%220.5%22 x=%220%22 y=%220%22 width=%22100%22 height=%22100%22/></svg>')]"></div>
        </div>

        <div className="relative px-6 lg:px-12">
          <h2 className="mb-20 bg-linear-to-r from-mint via-cyan-400 to-mint bg-clip-text text-center text-5xl md:text-6xl font-black text-transparent">
            {t.projects}
          </h2>

          <div
            ref={scrollContainerRef}
            className="relative h-screen overflow-y-scroll scroll-smooth scrollbar-hide"
            style={{
              scrollBehavior: "smooth",
            }}
          >
            <ScrollStack
              useWindowScroll={false}
              itemDistance={100}
              itemScale={0.03}
              itemStackDistance={30}
              stackPosition="30%"
              scaleEndPosition="20%"
              className="w-full"
              onStackComplete={() => {}}
            >
              {t.projectsData.map((project, index) => (
                <ScrollStackItem key={index}>
                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-2xl">
                    {/* Gradient overlay background */}
                    <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/40 via-white/20 to-transparent dark:from-cyan-500/10 dark:via-mint/5 dark:to-transparent"></div>

                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 -z-10 opacity-0 dark:opacity-30 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22><rect fill=%22none%22 stroke=%2229ff9b%22 stroke-width=%220.1%22 x=%220%22 y=%220%22 width=%2250%22 height=%2250%22/></svg>')]"></div>

                    {/* Content wrapper */}
                    <div className="relative flex h-full flex-col p-10 lg:p-12">
                      {/* Giant decorative GitHub logo (overflow clipped by card) */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group absolute -right-24 -top-20 z-0 h-96 w-96 transition-all duration-700 hover:scale-105"
                        title="View on GitHub"
                      >
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-mint/30 to-cyan-400/30 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
                        <Image
                          src="/images/GitHub-Logo.png"
                          alt="GitHub"
                          fill
                          className="object-contain opacity-20 drop-shadow-2xl transition-all duration-700 group-hover:opacity-35 group-hover:rotate-3"
                          priority
                        />
                      </a>

                      {/* Top section with title */}
                      <div className="relative z-10 mb-10 max-w-3xl">
                        <h3 className="mb-3 bg-linear-to-r from-white via-mint to-cyan-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
                          {project.title}
                        </h3>
                        <div className="h-1 w-24 rounded-full bg-linear-to-r from-mint to-cyan-400"></div>
                      </div>

                      {/* Description */}
                      <p className="relative z-10 mb-8 text-lg leading-relaxed text-white/90 font-light lg:text-xl max-w-3xl">
                        {project.description}
                      </p>

                      {/* Tech Stack with Icons */}
                      <div className="relative z-10 mb-8 space-y-3 max-w-3xl">
                        <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, i) => (
                            <div
                              key={i}
                              className="group flex items-center gap-2 rounded-xl border border-white/20 bg-linear-to-r from-white/15 to-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-mint/50 hover:shadow-lg"
                            >
                              <span className="relative h-4 w-4">
                                <svg
                                  className="w-full h-full"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer action - Enhanced CTA */}
                      <div className="relative z-10 mt-auto flex items-center justify-between gap-6 border-t border-white/10 pt-8 dark:border-white/5">
                        <div className="space-y-1">
                          <div className="text-xs font-bold uppercase tracking-widest text-mint/80">
                            Project {String(index + 1).padStart(2, "0")} /{" "}
                            {String(t.projectsData.length).padStart(2, "0")}
                          </div>
                          <p className="text-xs text-white/70">
                            Click to explore and contribute
                          </p>
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-mint to-cyan-400 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-mint/50 hover:scale-110 hover:-translate-y-1 overflow-hidden"
                        >
                          {/* Background shine effect */}
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>

                          {/* Content */}
                          <span className="relative z-10">View Repository</span>
                          <svg
                            className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              ))}
              <div className="scroll-stack-end"></div>
            </ScrollStack>
          </div>
        </div>
      </section>
    </>
  );
}
