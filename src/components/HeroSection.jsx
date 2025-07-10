import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TypewriterText from './TypewriterText';
import ParticleBackground from './ParticleBackground';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
      
      <div ref={heroRef} className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8">
          <div 
            ref={imageRef}
            className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm"
          >
            <img
              src="./assets/mine/sharif-nobg.png"
              alt="Khasim Sharif"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          <TypewriterText text="Khasim Sharif" speed={150} />
        </h1>

        <div className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
          <TypewriterText 
            text="Full-Stack Developer & Tech Enthusiast" 
            speed={80} 
            delay={2000}
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: FaGithub, href: 'https://github.com/khasim-sharif', color: 'hover:text-gray-400' },
            { icon: SiLeetcode, href: 'https://leetcode.com/khasim-sharif', color: 'hover:text-orange-400' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/khasim-sharif', color: 'hover:text-blue-400' },
          ].map(({ icon: Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl text-gray-400 ${color} transition-all duration-300 hover:scale-125 hover:drop-shadow-lg`}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Download Resume Button */}
        <a
          href="./assets/mine/sharif-swdev.pdf"
          download
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm border border-white/20"
        >
          <FaDownload />
          Download Resume
        </a>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;