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
    subtitle: "Développeur Full-Stack & Créateur d'Expériences Web",
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
    subtitle: "Full-Stack Developer & Web Experience Creator",
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

  return (
    <div className="relative min-h-screen bg-zinc-900">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 bg-[#1a1a1a]">
        <ColorBends
          rotation={45}
          speed={0.15}
          colors={["#29ff9b", "#FF9FFC", "#66e0ff"] as string[]}
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
          className="flex min-h-screen items-center justify-center px-6 py-20"
        >
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 text-6xl font-bold tracking-tight text-mint drop-shadow-lg md:text-8xl">
              {t.title}
            </h1>
            <p className="mb-8 rounded-2xl bg-white/10 px-6 py-4 text-xl text-white backdrop-blur-md drop-shadow-md md:text-2xl">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-8 py-4 font-semibold text-zinc-900 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                {t.viewProjects}
              </a>
              <a
                href="https://github.com/LucasAudoubert"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-xl transition-all hover:scale-105 hover:bg-white hover:text-zinc-900"
              >
                {t.github}
              </a>
            </div>
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
              {t.about}
            </h2>
            <div className="space-y-6 text-lg text-zinc-700 dark:text-zinc-300">
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
            </div>
          </div>
        </section>

        <section
          ref={techRef}
          className="relative min-h-48 flex items-center justify-center px-6 py-20"
          id="tech"
        >
          {/* Tech Stack Carousels */}
          <div className="absolute bottom-32 left-0 right-0 space-y-6">
            <TechCarousel direction="right" folder="prog_language" />
            <TechCarousel direction="left" folder="tools" />
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
              {t.projects}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {t.projectsData.map((project, index) => (
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
                    {t.viewOnGithub}
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
              {t.contact}
            </h2>
            <p className="mb-12 text-xl text-zinc-600 dark:text-zinc-400">
              {t.contactText}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:lucas.audoubert.dev@gmail.com"
                className="rounded-full bg-zinc-900 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                {t.sendEmail}
              </a>
              <a
                href="https://github.com/LucasAudoubert"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-zinc-900 px-8 py-4 font-semibold text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-900 hover:text-white dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900"
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
