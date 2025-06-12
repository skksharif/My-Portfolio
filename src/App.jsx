import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";
import BlurText from "./react-bits/BlurText/BlurText";
import SplitText from "./react-bits/SplitText/SplitText";
import "font-awesome/css/font-awesome.min.css";

import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "./components/Chatot";
import ResumeAndCollege from "./components/ResumeAndCollege";
import DarkModeToggle from "./components/DarkModeToggle";
import ParallaxBackground from "./components/ParallaxBackground.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <ParallaxBackground scrollY={scrollY} isDarkMode={isDarkMode} />

      {/* Navigation */}
      <nav className="sticky top-0 z-[999] mx-auto mt-3 md:mt-5 max-w-[700px] px-4 md:px-0">
        <div className="mx-2 md:mx-4 p-2 md:p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-[8px] rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 transition-all duration-300">
          <ul className="flex justify-center md:justify-around items-center">
            <li>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 font-comfortaa text-xs md:text-sm capitalize px-2 py-2 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105">
                skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 font-comfortaa text-xs md:text-sm capitalize px-2 py-2 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105">
                projects
              </a>
            </li>
            <li>
              <a href="#resume" className="text-gray-700 dark:text-gray-300 font-comfortaa text-xs md:text-sm capitalize px-2 py-2 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105">
                about
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#contact" className="text-gray-700 dark:text-gray-300 font-comfortaa text-xs md:text-sm capitalize px-2 py-2 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105">
                Contact
              </a>
            </li>
            <li>
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="max-w-[1000px] min-h-[85vh] mx-auto mt-[100px] text-center px-4"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <h1>
          <BlurText
            text="Shaik Khasim Sharif"
            delay={120}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-4xl md:text-[70px] font-bold mb-2 lowercase text-black/90 dark:text-white/90 font-dancing leading-none"
          />
        </h1>
        <SplitText
          text="Turning Ideas into Reality | Web, Blockchain & AI Enthusiast."
          className="text-sm md:text-base leading-relaxed mb-2 text-gray-600 dark:text-gray-400 font-normal z-[999] px-4 md:px-0"
          delay={15}
          animationFrom={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-30px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="flex justify-center items-center mt-6">
          <a
            href="https://github.com/skksharif"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-2 group"
          >
            <img 
              src="./assets/icons/github.png" 
              alt="GitHub" 
              className="w-[25px] h-[25px] object-contain p-2 box-content transition-all duration-300 hover:bg-gray-500/20 hover:rounded-full hover:backdrop-blur-[5px] group-hover:scale-110"
            />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/khasimsh52bi//"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-2 group"
          >
            <img 
              src="./assets/icons/gfg.png" 
              alt="GeeksforGeeks" 
              className="w-[25px] h-[25px] object-contain p-2 box-content transition-all duration-300 hover:bg-gray-500/20 hover:rounded-full hover:backdrop-blur-[5px] group-hover:scale-110"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/skksharif"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="300"
            className="mx-2 group"
          >
            <img 
              src="./assets/icons/linkedin.png" 
              alt="LinkedIn" 
              className="w-[25px] h-[25px] object-contain p-2 box-content transition-all duration-300 hover:bg-gray-500/20 hover:rounded-full hover:backdrop-blur-[5px] group-hover:scale-110"
            />
          </a>
        </div>
      </div>

      <Skills isDarkMode={isDarkMode} />
      <ResumeAndCollege isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />

      {/* Fixed Chatbot Button */}
      <div 
        className="fixed bottom-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-[1000]"
        onClick={toggleChat}
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <i className="fa fa-comments text-white text-[18px]"></i>
      </div>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="fixed bottom-16 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-[10px] shadow-2xl rounded-2xl max-w-[450px] w-[calc(100vw-32px)] md:w-[450px] h-[350px] md:h-[450px] z-[1000] flex flex-col justify-between border border-white/20 dark:border-gray-700/30 animate-slide-up">
          <div className="flex justify-end p-2">
            <button 
              onClick={closeChat} 
              className="bg-transparent border-none text-lg cursor-pointer hover:text-red-500 transition-colors duration-300 text-gray-600 dark:text-gray-400"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <ChatBot isDarkMode={isDarkMode} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;