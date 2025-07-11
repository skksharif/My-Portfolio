import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TypewriterText from "./TypewriterText";
import { FaGithub, FaLinkedin, FaDownload, FaChevronDown } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ParallaxBackground from "./ParallaxBackground";
import MaskEffect from "./MaskEffect";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero content animation
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    tl.fromTo(
      imageRef.current,
      { scale: 0, rotation: -180, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.8,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Scroll indicator animation
    tl.fromTo(
      scrollIndicatorRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    // Parallax effect for hero content
    gsap.to(contentRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Hide scroll indicator on scroll
    gsap.to(scrollIndicatorRef.current, {
      opacity: 0,
      y: -20,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "top -100",
        scrub: true
      }
    });
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
          {/* Content Section */}
          <div ref={contentRef} className="text-center lg:text-left order-2 lg:order-1">
            <MaskEffect maskType="slide">
              <div className="space-y-4 sm:space-y-6">
                {/* Greeting */}
                <div className="text-sm sm:text-base md:text-lg text-purple-600 font-medium tracking-wide uppercase">
                  Hello, I'm
                </div>

                {/* Name */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent font-dancing">
                    Khasim Sharif
                  </span>
                </h1>

                {/* Title with Typewriter */}
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-light min-h-[2em]">
                  <TypewriterText 
                    text="Full-Stack Developer & Tech Enthusiast"
                    speed={80}
                    delay={1000}
                  />
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Passionate about creating innovative web solutions with modern technologies. 
                  I bring ideas to life through clean, efficient code and exceptional user experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
                  <a
                    href="#contact"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="./assets/mine/sharif-swdev.pdf"
                    download
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold text-sm sm:text-base hover:bg-purple-600 hover:text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaDownload className="text-sm" />
                    Download CV
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 pt-6">
                  {[
                    {
                      icon: FaGithub,
                      href: "https://github.com/khasim-sharif",
                      color: "hover:text-gray-800",
                      label: "GitHub"
                    },
                    {
                      icon: SiLeetcode,
                      href: "https://leetcode.com/khasim-sharif",
                      color: "hover:text-orange-500",
                      label: "LeetCode"
                    },
                    {
                      icon: FaLinkedin,
                      href: "https://linkedin.com/in/khasim-sharif",
                      color: "hover:text-blue-600",
                      label: "LinkedIn"
                    },
                  ].map(({ icon: Icon, href, color, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`text-xl sm:text-2xl text-gray-500 ${color} transition-all duration-300 hover:scale-125 hover:drop-shadow-lg p-2 rounded-full hover:bg-white/50`}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </MaskEffect>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <MaskEffect maskType="circle">
              <div ref={imageRef} className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] relative">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse opacity-20"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse opacity-30 animation-delay-1000"></div>
                  
                  {/* Profile Image */}
                  <img
                    src="./assets/mine/sharif-nobg.png"
                    alt="Khasim Sharif"
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce animation-delay-500 opacity-80"></div>
                  <div className="absolute top-1/4 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-bounce animation-delay-1000 opacity-80"></div>
                </div>
              </div>
            </MaskEffect>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-2 text-gray-500 hover:text-purple-600 transition-colors duration-300">
          <span className="text-xs sm:text-sm font-medium">Scroll Down</span>
          <FaChevronDown className="animate-bounce text-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;