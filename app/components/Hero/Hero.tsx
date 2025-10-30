"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ConcentricCircle from "./ConcentricCircle";

type Props = {};

const Hero = (props: Props) => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 0.3,
    });
    
    timeline.fromTo(
      "#entrance-animation",
      { opacity: 0, y: 60, },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    
    timeline.fromTo(
      "#entrance-animation-p",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
      "-=0.4"
    );
    
    timeline.fromTo(
      "#entrance-animation-btn",
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.2)" },
      "-=0.3"
    );
  });
  
  return (
    <div className="h-screen px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background Circles */}
      <ConcentricCircle/>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col h-full justify-center items-center text-[#FFFFFF] gap-3 sm:gap-4 md:gap-5">
        <h1
          id="entrance-animation"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-poppins text-center "
        >
          Smarter Solutions <br></br> Powered by AI
        </h1>
        <p
          id="entrance-animation-p"
          className="text-sm sm:text-base md:text-lg font-poppins text-[#9D9D9D] text-center max-w-xl "
        >
          Streamline operations, reduce costs, and scale effortlessly with{" "}
         our AI-driven tools.
        </p>
        <Button
          id="entrance-animation-btn"
          variant="default"
          className="text-sm sm:text-base md:text-lg h-12 sm:h-14 md:h-16 w-44 sm:w-52 md:w-56 font-medium font-poppins py-4 sm:py-5 px-5 sm:px-6 md:px-7 rounded-full bg-gradient-to-r from-[#6E00CF] to-[#32005F] hover:from-[#5C00B0] hover:to-[#28004F] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_rgba(110,0,207,0.6)] active:scale-95 flex items-center justify-center gap-2"
        >
          Start A Project <ArrowRight size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
