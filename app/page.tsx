"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColorBends from "@/components/ColorBends";
import TechCarousel from "@/components/TechCarousel";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const translations = {
  fr: {
    title: "Lucas Audoubert",
    subtitle: "Développeur Full-Stack",
    viewProjects: "Voir mes projets",
    github: "GitHub",
    about: "À propos",
    aboutText1:
      "Passionné par le développement web et les technologies modernes, je crée des applications performantes et élégantes qui offrent des expériences utilisateur exceptionnelles.",
    aboutText2:
      "Je maîtrise des technologies telles que Next.js, React, TypeScript, Node.js, et bien d'autres. J'aime relever de nouveaux défis et apprendre continuellement.",
    projects: "Projets",
    viewOnGithub: "Voir sur GitHub →",
    contact: "Contactez-moi",
    contactText: "Un projet en tête ? N'hésitez pas à me contacter !",
    sendEmail: "Envoyer un email",
    footer: "© 2026 Lucas Audoubert. Tous droits réservés.",
    projectsData: [
      {
        title: "Next.js Portfolio",
        description:
          "Portfolio moderne avec Next.js, TypeScript et Tailwind CSS",
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
    ],
  },
  en: {
    title: "Lucas Audoubert",
    subtitle: "Full-Stack Developer",
    viewProjects: "View my projects",
    github: "GitHub",
    about: "About",
    aboutText1:
      "Passionate about web development and modern technologies, I create high-performance and elegant applications that offer exceptional user experiences.",
    aboutText2:
      "I master technologies such as Next.js, React, TypeScript, Node.js, and many others. I love taking on new challenges and continuously learning.",
    projects: "Projects",
    viewOnGithub: "View on GitHub →",
    contact: "Contact me",
    contactText: "Have a project in mind? Feel free to reach out!",
    sendEmail: "Send an email",
    footer: "© 2026 Lucas Audoubert. All rights reserved.",
    projectsData: [
      {
        title: "Next.js Portfolio",
        description:
          "Modern portfolio with Next.js, TypeScript and Tailwind CSS",
        tech: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
        github: "https://github.com/LucasAudoubert/Next.js-Portfolio",
      },
      {
        title: "E-commerce Project",
        description: "Full-stack e-commerce application with authentication",
        tech: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/LucasAudoubert",
      },
      {
        title: "Mobile Application",
        description: "Cross-platform mobile application with React Native",
        tech: ["React Native", "Firebase", "Redux"],
        github: "https://github.com/LucasAudoubert",
      },
    ],
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const flagRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const techRef = useRef(null);

  const t = translations[language];

  const handleLanguageChange = () => {
    // Animate flag exit
    gsap.to(flagRef.current, {
      rotationY: 90,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        // Change language
        setLanguage(language === "fr" ? "en" : "fr");
        // Animate flag entrance
        gsap.fromTo(
          flagRef.current,
          { rotationY: -90, scale: 0.8 },
          { rotationY: 0, scale: 1, duration: 0.3, ease: "power2.out" },
        );
      },
    });
  };

  useEffect(() => {
    // Hero animation with stagger
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
    });

    // About section animation with slide-in
    gsap.from(aboutRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Section titles animation
    gsap.utils.toArray(".section-title").forEach((title: any) => {
      gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Projects animation with stagger and rotation
    gsap.from(".project-card", {
      opacity: 0,
      y: 100,
      rotationX: 15,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    // Tech carousel animation
    gsap.from(".tech-carousel", {
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: techRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Contact animation with bounce
    gsap.from(contactRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

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

      {/* Language Switch */}
      <div className="fixed left-6 top-6 z-50">
        <button
          onClick={handleLanguageChange}
          className="flex items-center gap-1.5 rounded-full border-2 border-white/20 bg-white/10 p-2 backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20"
          aria-label="Change language"
        >
          <Image
            src="/flags_svg/language-icon.svg"
            alt="Language"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <div ref={flagRef} style={{ transformStyle: "preserve-3d" }}>
            <Image
              src={`/flags_svg/flag-${language === "fr" ? "gb" : "fr"}.svg`}
              alt={
                language === "fr" ? "Switch to English" : "Passer en français"
              }
              width={20}
              height={20}
              className="h-5 w-5 rounded"
            />
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative flex min-h-screen items-center justify-center px-6 py-20"
        >
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 bg-gradient-to-r from-mint to-cyan-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              {t.title}
            </h1>
            <p className="mb-8 animate-fade-in-up rounded-2xl bg-white/10 px-6 py-4 text-xl text-white backdrop-blur-md drop-shadow-md md:text-2xl">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-zinc-900 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">{t.viewProjects}</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-mint to-cyan-400 opacity-0 transition-opacity group-hover:opacity-20"></div>
              </a>
              <a
                href="https://github.com/LucasAudoubert"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-mint hover:bg-white hover:text-zinc-900"
              >
                <span className="relative z-10">{t.github}</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-mint to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex h-12 w-8 items-start justify-center rounded-full border-2 border-white/30 p-2">
              <div className="h-2 w-1 animate-pulse rounded-full bg-white"></div>
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="relative h-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mint/10 to-transparent"></div>
        </div>

        {/* About Section */}
        <section
          ref={aboutRef}
          className="relative overflow-hidden bg-white/90 px-6 py-24 backdrop-blur-md dark:bg-zinc-950/90"
          id="about"
        >
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-mint/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl"></div>

          <div className="relative mx-auto max-w-4xl">
            <h2 className="section-title mb-12 bg-gradient-to-r from-mint to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {t.about}
            </h2>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300">
              <p className="leading-relaxed">{t.aboutText1}</p>
              <p className="leading-relaxed">{t.aboutText2}</p>
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="relative h-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"></div>
        </div>

        <section
          ref={techRef}
          className="relative min-h-48 overflow-hidden bg-zinc-50/80 px-6 py-24 backdrop-blur-md dark:bg-zinc-900/80 flex flex-col items-center justify-center"
          id="tech"
        >
          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/5 blur-3xl"></div>

          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="section-title mb-4 bg-gradient-to-r from-cyan-400 to-mint bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Tech Stack
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {language === "fr"
                ? "Technologies que je maîtrise"
                : "Technologies I master"}
            </p>
          </div>

          {/* Tech Stack Carousels */}
          <div className="w-full space-y-8">
            <TechCarousel direction="right" folder="prog_language" />
            <TechCarousel direction="left" folder="tools" />
          </div>
        </section>

        {/* Section Separator */}
        <div className="relative h-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mint/10 to-transparent"></div>
        </div>

        {/* Projects Section */}
        <section
          ref={projectsRef}
          className="relative overflow-hidden bg-white/90 px-6 py-24 backdrop-blur-md dark:bg-zinc-950/90"
          id="projects"
        >
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/4 translate-x-1/4 rounded-full bg-cyan-400/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/4 translate-y-1/4 rounded-full bg-mint/5 blur-3xl"></div>

          <div className="relative mx-auto max-w-6xl">
            <h2 className="mb-16 bg-gradient-to-r from-mint via-cyan-400 to-mint bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
              {t.projects}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {t.projectsData.map((project, index) => (
                <div
                  key={index}
                  className="project-card group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-white p-8 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl dark:from-zinc-900 dark:to-zinc-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-mint/0 via-mint/10 to-cyan-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                  <div className="relative">
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
                          className="rounded-full bg-mint/20 px-3 py-1 text-sm font-medium text-zinc-900 dark:text-zinc-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-semibold text-zinc-900 transition-colors hover:text-mint dark:text-zinc-50 dark:hover:text-mint"
                    >
                      {t.viewOnGithub}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="relative h-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent"></div>
        </div>

        {/* Contact Section */}
        <section
          ref={contactRef}
          className="relative overflow-hidden bg-zinc-50/90 px-6 py-24 backdrop-blur-md dark:bg-zinc-900/90"
          id="contact"
        >
          {/* Decorative elements */}
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/5 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl"></div>

          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="mb-8 bg-gradient-to-r from-cyan-400 via-mint to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {t.contact}
            </h2>
            <p className="mb-12 text-xl text-zinc-600 dark:text-zinc-400">
              {t.contactText}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:lucas.audoubert.dev@gmail.com"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-mint to-cyan-400 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10">{t.sendEmail}</span>
              </a>
              <a
                href="https://github.com/LucasAudoubert"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-zinc-300 px-8 py-4 font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:border-mint hover:bg-mint/10 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-mint"
              >
                {t.github}
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200/30 bg-white/80 px-6 py-8 backdrop-blur-sm dark:border-zinc-800/30 dark:bg-zinc-900/80">
          <div className="mx-auto max-w-6xl text-center text-zinc-600 dark:text-zinc-400">
            <p>{t.footer}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
