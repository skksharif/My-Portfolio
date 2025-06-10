import React, { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  animate,
  useScroll,
  useTransform,
} from 'framer-motion';

const StudentIDCard = () => {
  const rotateZ = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 1000], [0, 0.8]);

  useEffect(() => {
    if (!isHovered) {
      animate(rotateZ, [0, 8, -8, 0], {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
        type: 'tween',
      });
    }
  }, [isHovered, rotateZ]);

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      if (!isHovered) {
        const nudge = Math.max(-10, Math.min(10, delta * 0.5));
        animate(rotateZ, nudge, {
          type: 'spring',
          stiffness: 80,
          damping: 15,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered, rotateZ]);

  return (
    <div className="flex flex-col items-center pt-24 min-h-screen relative" id="college">
      {/* Card Background */}
      <motion.div 
        className="absolute w-[90%] max-w-[1400px] h-full z-[-1] blur-[3px] rounded-2xl transition-opacity duration-500 bg-cover bg-center"
        style={{ 
          opacity: bgOpacity,
          backgroundImage: `url("./src/components/college.png"), linear-gradient(rgba(255, 255, 255, 0.127), rgba(255, 255, 255, 0.164))`
        }}
      />
      
      {/* String */}
      <div className="w-1 h-[140px] md:h-[140px] bg-gradient-to-b from-gray-800 to-gray-600 rounded-sm shadow-[0_0_4px_rgba(0,0,0,0.2),inset_0_0_2px_rgba(255,255,255,0.3)] relative z-20 animate-sway origin-top before:content-[''] before:w-3 before:h-3 before:bg-gray-800 before:border-2 before:border-gray-500 before:rounded-full before:absolute before:-top-2 before:left-1/2 before:transform before:-translate-x-1/2 before:shadow-[0_2px_5px_rgba(0,0,0,0.3)] after:content-[''] after:w-2 after:h-2 after:bg-gray-700 after:rounded-sm after:absolute after:-bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]">
      </div>

      {/* Card */}
      <motion.div
        className="w-[90%] max-w-[420px] p-6 bg-white/10 backdrop-blur-[24px] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/30 transition-all duration-300 hover:scale-103 hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] relative z-[-1]"
        style={{ rotateZ, transformOrigin: 'top center' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="./assets/mine/sharif.jpg"
          alt="Student"
          className="w-[45%] md:w-[45%] aspect-square rounded-full object-cover border-3 border-blue-500 block mx-auto mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
        />
        <h2 className="text-center text-lg md:text-xl font-bold text-white mb-1.5 text-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
          Lakireddy Bali Reddy College of Engineering
        </h2>
        <p className="text-center text-base md:text-lg text-gray-300 text-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
          Information Technology
        </p>
      </motion.div>

      <style jsx>{`
        @keyframes sway {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default StudentIDCard;