import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TypewriterText from "./TypewriterText";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      imageRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16 lg:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="absolute inset-0">
          {/* Parallax background elements */}
          <div
            className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div
            className="absolute top-1/4 right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-200 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-36 h-36 sm:w-52 sm:h-52 md:w-80 md:h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-28 h-28 sm:w-44 sm:h-44 md:w-60 md:h-60 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse delay-500"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-pink-300 rounded-full blur-3xl opacity-15 animate-pulse delay-1500"
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)`,
            }}
          ></div>
        </div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent font-dancing">
          Khasim Sharif
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 font-light ">
          Full-Stack Developer & Tech Enthusiast
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            {
              icon: FaGithub,
              href: "https://github.com/khasim-sharif",
              color: "hover:text-gray-700",
            },
            {
              icon: SiLeetcode,
              href: "https://leetcode.com/khasim-sharif",
              color: "hover:text-orange-500",
            },
            {
              icon: FaLinkedin,
              href: "https://linkedin.com/in/khasim-sharif",
              color: "hover:text-blue-500",
            },
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl sm:text-3xl text-gray-500 ${color} transition-all duration-300 hover:scale-125 hover:drop-shadow-lg p-2`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
