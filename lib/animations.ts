import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initializeAnimations() {
  return {
    heroAnimation: (heroRef: React.RefObject<HTMLElement | null>) => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
      });
    },

    aboutAnimation: (aboutRef: React.RefObject<HTMLElement | null>) => {
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
    },

    sectionTitlesAnimation: () => {
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
    },

    projectsAnimation: (projectsRef: React.RefObject<HTMLElement | null>) => {
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
    },

    techCarouselAnimation: (techRef: React.RefObject<HTMLElement | null>) => {
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
    },

    contactAnimation: (contactRef: React.RefObject<HTMLElement | null>) => {
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
    },

    languageSwitchAnimation: (
      flagRef: React.RefObject<HTMLDivElement | null>,
      language: "fr" | "en",
      onComplete: () => void,
    ) => {
      gsap.to(flagRef.current, {
        rotationY: 90,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          onComplete();
          gsap.fromTo(
            flagRef.current,
            { rotationY: -90, scale: 0.8 },
            { rotationY: 0, scale: 1, duration: 0.3, ease: "power2.out" },
          );
        },
      });
    },
  };
}
