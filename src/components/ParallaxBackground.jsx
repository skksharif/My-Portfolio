import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBackground = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create parallax layers with different speeds
    gsap.to(layer1Ref.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(layer2Ref.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(layer3Ref.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Layer 1 - Fastest */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-28 h-28 sm:w-44 sm:h-44 md:w-60 md:h-60 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse delay-500" />
      </div>

      {/* Parallax Layer 2 - Medium */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <div className="absolute top-1/4 right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-200 rounded-full blur-3xl opacity-25 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-pink-300 rounded-full blur-3xl opacity-15 animate-pulse delay-1500" />
      </div>

      {/* Parallax Layer 3 - Slowest */}
      <div
        ref={layer3Ref}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 sm:w-52 sm:h-52 md:w-80 md:h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;