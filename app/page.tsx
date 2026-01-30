"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColorBends from "@/components/ColorBends";
import TechCarousel from "@/components/TechCarousel";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // About section animation
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Projects animation
    gsap.from(".project-card", {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Contact animation
    gsap.from(contactRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const projects = [
    {
      title: "Next.js Portfolio",
      description: "Portfolio moderne avec Next.js, TypeScript et Tailwind CSS",
      tech: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
      github: "https://github.com/LucasAudoubert/Next.js-Portfolio",
    },
    {
      title: "Projet E-commerce",
      description: "Application e-commerce full-stack avec authentification",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/LucasAudoubert",
    },
    {
      title: "Application Mobile",
      description: "Application mobile cross-platform avec React Native",
      tech: ["React Native", "Firebase", "Redux"],
      github: "https://github.com/LucasAudoubert",
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-900">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 bg-[#1a1a1a]">
        <ColorBends
          rotation={45}
          speed={0.15}
          colors={["#29ff9b", "#FF9FFC", "#66e0ff"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="flex min-h-screen items-center justify-center px-6 py-20"
        >
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 text-6xl font-bold tracking-tight text-white drop-shadow-lg md:text-8xl">
              Lucas Audoubert
            </h1>
            <p className="mb-8 text-xl text-white/90 drop-shadow-md md:text-2xl">
              Développeur Full-Stack & Créateur d'Expériences Web
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-8 py-4 font-semibold text-zinc-900 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Voir mes projets
              </a>
              <a
                href="https://github.com/LucasAudoubert"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:text-zinc-900"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Tech Stack Carousels */}
          <div className="absolute bottom-32 left-0 right-0 space-y-6">
            <TechCarousel direction="right" folder="prog_language" />
            <TechCarousel direction="left" folder="tools" />
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef}
          className="bg-white/80 px-6 py-20 backdrop-blur-md dark:bg-zinc-950/80"
          id="about"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-4xl font-bold text-zinc-900 dark:text-zinc-50 md:text-5xl">
              À propos
            </h2>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300">
              <p>
                Passionné par le développement web et les technologies modernes,
                je crée des applications performantes et élégantes qui offrent
                des expériences utilisateur exceptionnelles.
              </p>
              <p>
                Je maîtrise des technologies telles que <strong>Next.js</strong>
                , <strong>React</strong>, <strong>TypeScript</strong>,{" "}
                <strong>Node.js</strong>, et bien d'autres. J'aime relever de
                nouveaux défis et apprendre continuellement.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          ref={projectsRef}
          className="bg-zinc-50/80 px-6 py-20 backdrop-blur-md dark:bg-zinc-900/80"
          id="projects"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-4xl font-bold text-zinc-900 dark:text-zinc-50 md:text-5xl">
              Projets
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="project-card group rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800"
                >
                  <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
                  >
                    Voir sur GitHub →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          className="bg-white/80 px-6 py-20 backdrop-blur-md dark:bg-zinc-950/80"
          id="contact"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-zinc-50 md:text-5xl">
              Contactez-moi
            </h2>
            <p className="mb-12 text-xl text-zinc-600 dark:text-zinc-400">
              Un projet en tête ? N'hésitez pas à me contacter !
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:lucas.audoubert.dev@gmail.com"
                className="rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Envoyer un email
              </a>
              <a
                href="https://github.com/LucasAudoubert"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-zinc-900 px-8 py-4 font-semibold text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200/30 bg-white/80 px-6 py-8 backdrop-blur-sm dark:border-zinc-800/30 dark:bg-zinc-900/80">
          <div className="mx-auto max-w-6xl text-center text-zinc-600 dark:text-zinc-400">
            <p>© 2026 Lucas Audoubert. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
