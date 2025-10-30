import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Social Media Icons - Left */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:text-white"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:text-white"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:text-white"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-[#D8D8D8] text-sm sm:text-base md:text-lg font-poppins font-medium">
              Lorem Ipsum Lorem Ipsum
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#9D9D9D] text-sm sm:text-base md:text-lg font-poppins font-normal">
              © TechwareLab copyrights
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
