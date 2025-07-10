import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TypewriterText from './TypewriterText';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(imageRef.current, 
      { scale: 0, rotation: -180, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 1.5, ease: 'back.out(1.7)' }
    );

    // Floating animation for the image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Blurred Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 bg-purple-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 md:w-36 md:h-36 bg-blue-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-28 h-28 md:w-40 md:h-40 bg-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-20 h-20 md:w-32 md:h-32 bg-yellow-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-52 md:h-52 bg-indigo-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div ref={heroRef} className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Profile Image */}
        <div className="mb-6 sm:mb-8">
          <div 
            ref={imageRef}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full overflow-hidden border-4 border-purple-200/50 shadow-2xl"
          >
            <img
              src="./assets/mine/sharif-nobg.png"
              alt="Khasim Sharif"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent leading-tight">
          <TypewriterText text="Khasim Sharif" speed={150} />
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 sm:mb-8 font-light font-dancing">
          <TypewriterText 
            text="Full-Stack Developer & Tech Enthusiast" 
            speed={80} 
            delay={2000}
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { icon: FaGithub, href: 'https://github.com/khasim-sharif', color: 'hover:text-gray-700' },
            { icon: SiLeetcode, href: 'https://leetcode.com/khasim-sharif', color: 'hover:text-orange-500' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/khasim-sharif', color: 'hover:text-blue-500' },
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

        {/* Download Resume Button */}
        <a
          href="./assets/mine/sharif-swdev.pdf"
          download
          className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <FaDownload />
          <span className="hidden sm:inline">Download Resume</span>
          <span className="sm:hidden">Resume</span>
        </a>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-gray-500/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;