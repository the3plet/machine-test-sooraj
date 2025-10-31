"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ConcentricCircle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<SVGCircleElement[]>([]);

  const setRef = (el: SVGCircleElement | null, index: number) => {
    if (el) circlesRef.current[index] = el;
  };

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    circlesRef.current.forEach((circle, i) => {
      tl.fromTo(
        circle,
        { scale: 0, opacity: 0, transformOrigin: "center bottom" },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power2.out",
        },
        "<0.1"
      );
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      circlesRef.current.forEach((circle, i) => {
        const movement = (i + 1) * 8;
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
    <div 
      ref={containerRef}
      className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none"
    >
      <svg
        className="absolute bottom-0 top-40 left-1/2 -translate-x-1/2"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMax slice"
        style={{ minHeight: '100%', minWidth: '100%' }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(110, 0, 207, 0.5)', stopOpacity: 1,  }} />
            <stop offset="100%" style={{ stopColor: 'rgba(80, 0, 150, 0.2)', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(90, 0, 180, 0.4)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(60, 0, 120, 0.15)', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(70, 0, 150, 0.35)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(50, 0, 100, 0.12)', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgba(60, 0, 130, 0.3)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(40, 0, 80, 0.1)', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad5" x1="40%" y1="50%" x2="40%" y2="10%">
            <stop offset="0%" style={{ stopColor: 'rgba(50, 0, 110, 0.09)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(30, 0, 60, 0.08)', stopOpacity: 1 }} />
          </linearGradient>
          
          {/* Clip path to show only bottom half */}
          <clipPath id="bottomHalf">
            <rect x="0" y="300" width="1920" height="780" />
          </clipPath>
        </defs>

        <g clipPath="url(#bottomHalf)">
          {/* Circle 5 - Outermost */}
          <circle
            ref={(el) => setRef(el, 4)}
            cx="960"
            cy="1080"
            r="850"
            fill="url(#grad5)"
            strokeWidth="0"
          />
          
          {/* Circle 4 */}
          <circle
            ref={(el) => setRef(el, 3)}
            cx="960"
            cy="1250"
            r="720"
            fill="url(#grad4)"
            strokeWidth="0"
          />
          
          {/* Circle 3 */}
          <circle
            ref={(el) => setRef(el, 2)}
            cx="960"
            cy="1250"
            r="620"
            fill="url(#grad3)"
            strokeWidth="0"
          />
          
          {/* Circle 2 */}
          <circle
            ref={(el) => setRef(el, 1)}
            cx="960"
            cy="1250"
            r="520"
            fill="url(#grad2)"
            strokeWidth="0"
          />
          
          {/* Circle 1 - Innermost */}
          <circle
            ref={(el) => setRef(el, 0)}
            cx="960"
            cy="1250"
            r="420"
            fill="url(#grad1)"
            strokeWidth="0"
          />
        </g>
      </svg>
    </div>
  );
}
