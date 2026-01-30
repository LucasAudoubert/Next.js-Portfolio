"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface TechCarouselProps {
  direction?: "left" | "right";
  folder: "prog_language" | "tools";
}

const progLanguages = [
  "C#.png",
  "CSS3.png",
  "Discord.js.png",
  "Express.png",
  "HTML5.png",
  "JavaScript.png",
  "Jest.png",
  "JSON.png",
  "Next.js.png",
  "Node.js.png",
  "Nuxt-JS.png",
  "PHP.png",
  "Python.png",
  "React.png",
  "Sass.png",
  "Symfony.png",
  "Tailwind-CSS.png",
  "Three.js.png",
  "TypeScript.png",
  "Vue.js.png",
  "WordPress.png",
];

const tools = [
  "Adobe-Illustrator.png",
  "Blender.png",
  "Figma.png",
  "Git.png",
  "Jira.png",
  "MongoDB.png",
  "SQLite.png",
  "Trello.png",
  "Vercel.png",
  "Vite.js.png",
];

export default function TechCarousel({
  direction = "left",
  folder,
}: TechCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const techItems = folder === "prog_language" ? progLanguages : tools;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = direction === "left" ? 0 : scrollContainer.scrollWidth / 2;

    const scroll = () => {
      if (direction === "left") {
        scrollPos += 0.5;
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
      } else {
        scrollPos -= 0.5;
        if (scrollPos <= 0) {
          scrollPos = scrollContainer.scrollWidth / 2;
        }
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [direction]);

  return (
    <div className="w-full overflow-hidden py-4">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate items for seamless loop */}
        {[...techItems, ...techItems].map((fileName, index) => {
          const techName = fileName.replace(".png", "");
          return (
            <div
              key={index}
              className="flex flex-shrink-0 items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm"
            >
              <Image
                src={`/tech_icons/${folder}/${fileName}`}
                alt={techName}
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="whitespace-nowrap font-semibold text-white">
                {techName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
