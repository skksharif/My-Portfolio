import React, { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  animate,
  useScroll,
  useTransform,
} from 'framer-motion';

const ResumeAndCollege = ({ isDarkMode }) => {
  const rotateZ = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 1000], [0, 0.4]);

  useEffect(() => {
    if (!isHovered) {
      animate(rotateZ, [0, 4, -4, 0], {
        duration: 3,
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
        const nudge = Math.max(-6, Math.min(6, delta * 0.2));
        animate(rotateZ, nudge, {
          type: 'spring',
          stiffness: 50,
          damping: 15,
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHovered, rotateZ]);

  return (
    <div className="py-20 px-4" id="resume">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 font-dancing transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            About Me
          </h2>
          <p className={`text-lg transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My professional overview and education
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Resume Card */}
          <div className="flex justify-center" data-aos="fade-right" data-aos-duration="800">
            <div 
              className={`relative max-w-[400px] h-[500px] w-full backdrop-blur-[12px] p-6 border rounded-2xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-gray-800/20 border-gray-700/30 hover:bg-gray-800/30' 
                  : 'bg-white/20 border-white/20 hover:bg-white/30'
              }`}
            >
              {/* Decorative corner elements */}
              <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 transition-colors duration-500 ${
                isDarkMode ? 'border-purple-400' : 'border-blue-400'
              }`}></div>
              <div className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 transition-colors duration-500 ${
                isDarkMode ? 'border-purple-400' : 'border-blue-400'
              }`}></div>
              <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 transition-colors duration-500 ${
                isDarkMode ? 'border-purple-400' : 'border-blue-400'
              }`}></div>
              <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 transition-colors duration-500 ${
                isDarkMode ? 'border-purple-400' : 'border-blue-400'
              }`}></div>
              
              <div className="text-center mb-4">
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Resume</h3>
                <p className={`text-sm mt-1 transition-colors duration-500 ${
                  isDarkMode ? 'text-purple-300' : 'text-blue-600'
                }`}>Professional Overview</p>
              </div>

              {/* Resume Image */}
              <div className="mb-4">
                <a
                  href="./assets/mine/resume.png"
                  download="Sharif_Resume.png"
                  className="block group"
                >
                  <div className={`overflow-hidden rounded-lg border transition-all duration-300 group-hover:shadow-lg ${
                    isDarkMode ? 'border-gray-600/30' : 'border-gray-300/20'
                  }`}>
                    <img
                      src="./assets/mine/resume.png"
                      alt="Resume"
                      className="w-full h-[350px] object-contain block transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </a>
              </div>

              {/* Download hint */}
              <div className="text-center">
                <p className={`text-xs transition-colors duration-500 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Click to download resume</p>
              </div>
            </div>
          </div>

          {/* College ID Card */}
          <div className="flex flex-col items-center relative" id="college" data-aos="fade-left" data-aos-duration="800">
            {/* Card Background */}
            <motion.div 
              className={`absolute w-full h-full z-[-1] blur-[2px] rounded-2xl transition-all duration-500 bg-cover bg-center ${
                isDarkMode ? 'opacity-30' : 'opacity-40'
              }`}
              style={{ 
                opacity: bgOpacity,
                backgroundImage: `url("./src/components/college.png"), ${
                  isDarkMode 
                    ? 'linear-gradient(rgba(139, 92, 246, 0.05), rgba(59, 130, 246, 0.05))' 
                    : 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))'
                }`
              }}
            />
            
            {/* String */}
            <div 
              className={`w-1 h-[80px] rounded-sm shadow-lg relative z-20 animate-sway origin-top transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-gradient-to-b from-gray-600 to-gray-500' 
                  : 'bg-gradient-to-b from-gray-800 to-gray-600'
              }`}
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
              className={`w-full max-w-[400px] p-6 backdrop-blur-[20px] rounded-3xl shadow-2xl border transition-all duration-500 hover:scale-105 hover:shadow-3xl relative z-10 ${
                isDarkMode 
                  ? 'bg-gray-800/30 border-gray-700/40 hover:bg-gray-800/40' 
                  : 'bg-white/20 border-white/30 hover:bg-white/30'
              }`}
              style={{ rotateZ, transformOrigin: 'top center' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-center mb-4">
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Education</h3>
                <p className={`text-sm mt-1 transition-colors duration-500 ${
                  isDarkMode ? 'text-purple-300' : 'text-blue-600'
                }`}>Academic Background</p>
              </div>

              <img
                src="./assets/mine/sharif.jpg"
                alt="Student"
                className={`w-[40%] aspect-square rounded-full object-cover border-3 block mx-auto mb-4 shadow-xl transition-all duration-300 ${
                  isDarkMode ? 'border-purple-500' : 'border-blue-500'
                }`}
              />
              <h4 className={`text-center text-base md:text-lg font-bold mb-2 text-shadow-sm transition-colors duration-500 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Lakireddy Bali Reddy College of Engineering
              </h4>
              <p className={`text-center text-sm md:text-base text-shadow-sm mb-2 transition-colors duration-500 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Information Technology
              </p>
              <p className={`text-center text-xs md:text-sm text-shadow-sm transition-colors duration-500 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                CGPA: 8.65 (up to 7th semester)
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAndCollege;