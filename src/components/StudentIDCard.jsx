import React, { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  animate,
  useScroll,
  useTransform,
} from 'framer-motion';

const StudentIDCard = ({ isDarkMode }) => {
  const rotateZ = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 1000], [0, 0.6]);

  useEffect(() => {
    if (!isHovered) {
      animate(rotateZ, [0, 6, -6, 0], {
        duration: 2,
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
        const nudge = Math.max(-8, Math.min(8, delta * 0.3));
        animate(rotateZ, nudge, {
          type: 'spring',
          stiffness: 60,
          damping: 12,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered, rotateZ]);

  return (
    <div className="flex flex-col items-center pt-20 min-h-screen relative" id="college">
      {/* Card Background */}
      <motion.div 
        className={`absolute w-[90%] max-w-[1200px] h-full z-[-1] blur-[2px] rounded-2xl transition-all duration-500 bg-cover bg-center ${
          isDarkMode ? 'opacity-40' : 'opacity-60'
        }`}
        style={{ 
          opacity: bgOpacity,
          backgroundImage: `url("./src/components/college.png"), ${
            isDarkMode 
              ? 'linear-gradient(rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))' 
              : 'linear-gradient(rgba(255, 255, 255, 0.127), rgba(255, 255, 255, 0.164))'
          }`
        }}
      />
      
      {/* String */}
      <div 
        className={`w-1 h-[120px] md:h-[120px] rounded-sm shadow-lg relative z-20 animate-sway origin-top transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-gray-600 to-gray-500' 
            : 'bg-gradient-to-b from-gray-800 to-gray-600'
        }`}
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <div className={`w-3 h-3 border-2 rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2 shadow-lg transition-colors duration-500 ${
          isDarkMode ? 'bg-gray-600 border-gray-400' : 'bg-gray-800 border-gray-500'
        }`}></div>
        <div className={`w-2 h-2 rounded-sm absolute -bottom-1 left-1/2 transform -translate-x-1/2 transition-colors duration-500 ${
          isDarkMode ? 'bg-gray-500' : 'bg-gray-700'
        }`}></div>
      </div>

      {/* Card */}
      <motion.div
        className={`w-[90%] max-w-[380px] p-5 backdrop-blur-[20px] rounded-3xl shadow-2xl border transition-all duration-500 hover:scale-105 hover:shadow-3xl relative z-[-1] ${
          isDarkMode 
            ? 'bg-gray-800/30 border-gray-700/40 hover:bg-gray-800/40' 
            : 'bg-white/20 border-white/30 hover:bg-white/30'
        }`}
        style={{ rotateZ, transformOrigin: 'top center' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <img
          src="./assets/mine/sharif.jpg"
          alt="Student"
          className={`w-[40%] md:w-[40%] aspect-square rounded-full object-cover border-3 block mx-auto mb-3 shadow-xl transition-all duration-300 ${
            isDarkMode ? 'border-purple-500' : 'border-blue-500'
          }`}
        />
        <h2 className={`text-center text-base md:text-lg font-bold mb-1 text-shadow-sm transition-colors duration-500 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Lakireddy Bali Reddy College of Engineering
        </h2>
        <p className={`text-center text-sm md:text-base text-shadow-sm transition-colors duration-500 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Information Technology
        </p>
      </motion.div>
    </div>
  );
};

export default StudentIDCard;