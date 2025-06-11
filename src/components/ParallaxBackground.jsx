import React from 'react';

const ParallaxBackground = ({ scrollY, isDarkMode }) => {
  return (
    <>
      {/* Background shapes with parallax */}
      <div 
        className={`fixed w-[150px] h-[150px] ${isDarkMode ? 'bg-purple-600/40' : 'bg-blue-500/50'} blur-[80px] bottom-[20%] left-0 pointer-events-none transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div 
        className={`fixed w-[150px] h-[150px] ${isDarkMode ? 'bg-blue-600/40' : 'bg-pink-600/50'} blur-[80px] top-[30%] right-5 pointer-events-none md:block hidden transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      ></div>
      <div 
        className={`fixed w-[600px] h-[150px] ${isDarkMode ? 'bg-indigo-400/30' : 'bg-pink-300/50'} blur-[80px] -top-[80px] left-[21%] pointer-events-none md:block hidden transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>

      {/* Mobile background shapes */}
      <div 
        className={`fixed w-[120px] h-[120px] ${isDarkMode ? 'bg-purple-600/40' : 'bg-pink-600/50'} blur-[80px] top-[40%] right-0 pointer-events-none md:hidden transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * -0.15}px)` }}
      ></div>
      <div 
        className={`fixed w-[150px] h-[150px] ${isDarkMode ? 'bg-blue-400/30' : 'bg-pink-300/50'} blur-[80px] top-0 left-[20%] pointer-events-none md:hidden transition-colors duration-500`}
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      ></div>
    </>
  );
};

export default ParallaxBackground;