"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ConcentricCircle() {
  const circlesRef = useRef<HTMLDivElement[]>([]);

  // Store multiple refs
  const setRef = (el: HTMLDivElement | null, index: number) => {
    if (el) circlesRef.current[index] = el;
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    // Sequentially scale in the circles
    circlesRef.current.forEach((circle, i) => {
      tl.fromTo(
        circle,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.2,
          duration: 0.5,
          delay: i * 0.2,
          ease: "power2.out",
        },
        "<" // start overlapping slightly
      );
    });
  }, []);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // range -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;

      circlesRef.current.forEach((circle, i) => {
        const movement = (i + 1) * 10; // deeper layers move less
        gsap.to(circle, {
          x: x * movement,
          y: y * movement,
          duration: 0.6,
          ease: "power3.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
      
      <div className="absolute w-full h-full z-50 bottom-0 left-2 flex items-center justify-center overflow-hidden ">
      {[...Array(5)].map((_, i) => (
          <div
          key={i}
          ref={(el) => setRef(el, i)}
          className={`
            absolute  rounded-full border border-white/30 
            aspect-square   mask-[linear-gradient(to_bottom,black_50%,transparent_50%)]
            mask-no-repeat mask-size-[100%_100%]
            ${i === 0 ? "w-xl bg-purple-400/70 " : ""}
            ${i === 1 ? "w-2xl bg-purple-600/60" : ""}
            ${i === 2 ? "w-3xl bg-purple-700/50" : ""}
            ${i === 3 ? "w-4xl bg-purple-800/40" : ""}
            ${i === 4 ? "w-5xl bg-purple-900/30" : ""}
            `}
            />
        ))}
        </div>
  );
}
