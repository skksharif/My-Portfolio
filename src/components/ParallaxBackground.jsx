import React from 'react';

const ParallaxBackground = ({ scrollY, isDarkMode }) => {
  return (
    <>
      {/* Background shapes with parallax - reduced intensity */}
      <div 
        className={`fixed w-[200px] h-[200px] ${isDarkMode ? 'bg-purple-600/20' : 'bg-blue-500/25'} blur-[100px] bottom-[15%] left-0 pointer-events-none transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div 
        className={`fixed w-[180px] h-[180px] ${isDarkMode ? 'bg-blue-600/20' : 'bg-pink-600/25'} blur-[100px] top-[25%] right-5 pointer-events-none md:block hidden transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      ></div>
      <div 
        className={`fixed w-[700px] h-[200px] ${isDarkMode ? 'bg-indigo-400/15' : 'bg-pink-300/25'} blur-[120px] -top-[100px] left-[18%] pointer-events-none md:block hidden transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>

      {/* Mobile background shapes - reduced intensity */}
      <div 
        className={`fixed w-[140px] h-[140px] ${isDarkMode ? 'bg-purple-600/20' : 'bg-pink-600/25'} blur-[100px] top-[35%] right-0 pointer-events-none md:hidden transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      ></div>
      <div 
        className={`fixed w-[170px] h-[170px] ${isDarkMode ? 'bg-blue-400/15' : 'bg-pink-300/25'} blur-[100px] top-0 left-[15%] pointer-events-none md:hidden transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      ></div>

      {/* Additional subtle background elements */}
      <div 
        className={`fixed w-[300px] h-[300px] ${isDarkMode ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10' : 'bg-gradient-to-br from-blue-400/15 to-purple-400/15'} blur-[150px] top-[60%] left-[70%] pointer-events-none transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      ></div>
      <div 
        className={`fixed w-[250px] h-[250px] ${isDarkMode ? 'bg-gradient-to-tl from-indigo-500/10 to-purple-500/10' : 'bg-gradient-to-tl from-pink-400/15 to-blue-400/15'} blur-[120px] top-[80%] left-[10%] pointer-events-none transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      ></div>
    </>
  );
};

export default ParallaxBackground;