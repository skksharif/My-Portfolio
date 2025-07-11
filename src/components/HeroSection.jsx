import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypewriterText from "./TypewriterText";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ParallaxBackground from "./ParallaxBackground";
import MaskEffect from "./MaskEffect";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero content animation
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

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
    ).delay(0.3);

    // Parallax effect for hero content
    gsap.to(contentRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16 lg:pt-20">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div ref={contentRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <MaskEffect maskType="circle">
          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent font-dancing">
            Khasim Sharif
          </h1>

          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 font-light">
            Full-Stack Developer & Tech Enthusiast
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
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
                className={`text-xl sm:text-2xl text-gray-500 ${color} transition-all duration-300 hover:scale-125 hover:drop-shadow-lg p-2`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </MaskEffect>
      </div>
    </section>
  );
};

export default HeroSection;