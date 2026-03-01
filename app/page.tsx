"use client";

import { useEffect, useRef, useState } from "react";
import ColorBends from "@/components/background/ColorBends";
import TargetCursor from "@/components/TargetCursor";
import LightRays from "@/components/background/LightRays";
import { Separator } from "@/components/separator";
import LogoLoop from "@/components/LogoLoop";
import TextPressure from "@/components/TextPressure";
import Image from "next/image";
import { translations } from "@/lib/translations";
import { progLanguages, tools } from "@/lib/techStack";
import { initializeAnimations } from "@/lib/animations";
import ProjectsScroll from "@/components/projects/ProjectsScroll";
import ContactForm from "@/components/form/form";

export default function Home() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [isMounted, setIsMounted] = useState(false);
  const flagRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);

  const t = translations[language];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLanguageChange = () => {
    const animations = initializeAnimations();
    animations.languageSwitchAnimation(flagRef, language, () => {
      setLanguage(language === "fr" ? "en" : "fr");
    });
  };

  useEffect(() => {
    if (!isMounted) return;
    const animations = initializeAnimations();

    // Hero animation with stagger
    animations.heroAnimation(heroRef);

    // About section animation with slide-in
    animations.aboutAnimation(aboutRef);

    // Section titles animation
    animations.sectionTitlesAnimation();

    // Projects animation with stagger and rotation
    animations.projectsAnimation(projectsRef);

    // Tech carousel animation
    animations.techCarouselAnimation(techRef);

    // Contact animation with bounce
    animations.contactAnimation(contactRef);
  }, [isMounted]);

  return (
    <div className="relative min-h-screen bg-zinc-900">
      {isMounted && <TargetCursor />}

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
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 bg-[#1a1a1a]"
        >
          {/* Animated Background for Hero Only */}
          <div className="absolute inset-0 z-0">
            {isMounted && (
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
            )}
          </div>

          <div className="max-w-full text-center relative z-10">
            {isMounted && <TextPressure text={t.title} minFontSize={120} className="mb-6" />}
            <p className="mb-8 animate-fade-in-up rounded-2xl bg-white/10 px-6 py-4 text-xl text-white backdrop-blur-md drop-shadow-md md:text-2xl">
              {t.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="cursor-target">
                <a
                  href="#projects"
                  className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-zinc-900 shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">{t.viewProjects}</span>
                  <div className="absolute inset-0 z-0 bg-linear-to-r from-mint to-cyan-400 opacity-0 transition-opacity group-hover:opacity-20"></div>
                </a>
              </div>

              <div className="cursor-target">
                <a
                  href="https://github.com/LucasAudoubert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-full border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-mint hover:bg-white hover:text-zinc-900"
                >
                  <span className="relative z-10">{t.github}</span>
                  <div className="absolute inset-0 z-0 bg-linear-to-r from-mint to-cyan-400 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex h-12 w-8 items-start justify-center rounded-full border-2 border-white/30 p-2">
              <div className="h-2 w-1 animate-pulse rounded-full bg-white"></div>
            </div>
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section
          ref={aboutRef}
          className="relative overflow-hidden px-6 py-24 backdrop-blur-md"
          id="about"
        >
          {/* Light Rays Background */}
          <div className="absolute inset-0 z-0">
            {isMounted && (
              <LightRays
                raysOrigin="top-center"
                raysColor="#FFFFFF"
                raysSpeed={0.8}
                lightSpread={1.5}
                rayLength={1.5}
                pulsating={true}
                fadeDistance={0.8}
                saturation={0.9}
                followMouse={true}
                mouseInfluence={0.05}
                noiseAmount={0.1}
              />
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-mint/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl"></div>

          <div className="relative mx-auto max-w-4xl z-10">
            <h2 className="section-title mb-12 bg-gradient-to-r from-mint to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              {t.about}
            </h2>
            <div className="space-y-6 text-lg text-zinc-300">
              <p className="leading-relaxed">{t.aboutText1}</p>
              <p className="leading-relaxed">{t.aboutText2}</p>
            </div>
          </div>
        </section>

        <Separator />

        <section
          ref={techRef}
          className="relative min-h-48 overflow-hidden px-6 py-24 flex flex-col items-center justify-center bg-white/10 dark:bg-white/5 backdrop-blur-2xl border-y border-white/20 dark:border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.08)]"
          id="tech"
        >
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent"></div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.28)_1px,transparent_0)] bg-size-[14px_14px] opacity-20"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/25 to-transparent"></div>

          <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/5 blur-3xl"></div>

          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="section-title mb-4 text-4xl font-bold text-white md:text-5xl">
              Tech Stack
            </h2>
            <p className="text-lg text-white/90">
              {language === "fr"
                ? "Technologies que je maîtrise"
                : "Technologies I master"}
            </p>
          </div>

          {/* Tech Stack with LogoLoop */}
          <div className="w-full space-y-12">
            {/* Programming Languages */}
            <div>
              <h3 className="mb-6 text-center text-lg font-semibold text-white">
                {language === "fr"
                  ? "Langages & Frameworks"
                  : "Languages & Frameworks"}
              </h3>
              {isMounted && (
                <LogoLoop
                  logos={progLanguages.map((fileName) => ({
                    name: fileName.replace(".png", ""),
                    path: `/tech_icons/prog_language/${fileName}`,
                  }))}
                  speed={120}
                  direction="left"
                  logoHeight={60}
                  gap={48}
                  fadeOut={false}
                  pauseOnHover={true}
                  renderItem={(logo) => (
                    <div className="flex flex-shrink-0 items-center gap-3">
                      <Image
                        src={logo.path}
                        alt={logo.name}
                        width={60}
                        height={60}
                        className="h-15 w-15"
                      />
                      <span className="whitespace-nowrap text-base font-medium text-white/90">
                        {logo.name}
                      </span>
                    </div>
                  )}
                />
              )}
            </div>

            {/* Tools */}
            <div>
              <h3 className="mb-6 text-center text-lg font-semibold text-white">
                {language === "fr"
                  ? "Outils & Technologies"
                  : "Tools & Technologies"}
              </h3>
              {isMounted && (
                <LogoLoop
                  logos={tools.map((fileName) => ({
                    name: fileName.replace(".png", ""),
                    path: `/tech_icons/tools/${fileName}`,
                  }))}
                  speed={120}
                  direction="right"
                  logoHeight={60}
                  gap={48}
                  fadeOut={false}
                  pauseOnHover={true}
                  renderItem={(logo) => (
                    <div className="flex flex-shrink-0 items-center gap-3">
                    <Image
                      src={logo.path}
                      alt={logo.name}
                      width={60}
                      height={60}
                      className="h-15 w-15"
                    />
                    <span className="whitespace-nowrap text-base font-medium text-white/90">
                      {logo.name}
                    </span>
                  </div>
                )}
              />
              )}
            </div>
          </div>
        </section>

        <Separator />

        {/* Projects Section with Scroll Stack */}
        <div ref={projectsRef}>
          <ProjectsScroll language={language} />
        </div>

        <Separator />

        <ContactForm />

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
