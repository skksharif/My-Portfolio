import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from "./components/Projects";
import StudentIDCard from "./components/StudentIDCard";
import BlurText from "./react-bits/BlurText/BlurText";
import SplitText from "./react-bits/SplitText/SplitText";
import "font-awesome/css/font-awesome.min.css";

import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "./components/Chatot";
import ResumeCard from "./components/ResumeCard";

function App() {
  const [count, setCount] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background shapes */}
      <div className="fixed w-[200px] h-[200px] bg-blue-500/70 blur-[100px] bottom-[20%] left-0 pointer-events-none"></div>
      <div className="fixed w-[200px] h-[200px] bg-pink-600 blur-[100px] top-[30%] right-5 pointer-events-none md:block hidden"></div>
      <div className="fixed w-[800px] h-[200px] bg-pink-300 blur-[100px] -top-[100px] left-[21%] pointer-events-none md:block hidden"></div>

      {/* Mobile background shapes */}
      <div className="fixed w-[150px] h-[150px] bg-pink-600 blur-[100px] top-[40%] right-0 pointer-events-none md:hidden"></div>
      <div className="fixed w-[200px] h-[200px] bg-pink-300 blur-[100px] top-0 left-[20%] pointer-events-none md:hidden"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-[999] mx-auto mt-5 md:mt-8 max-w-[800px] px-5 md:px-0">
        <div className="mx-4 md:mx-5 p-2.5 md:p-5 bg-white/20 backdrop-blur-[5px] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/30">
          <ul className="flex justify-center md:justify-around items-center">
            <li>
              <a href="#skills" className="text-gray-800 font-comfortaa text-sm md:text-base capitalize px-2 md:px-2.5 py-2.5 transition-colors duration-300 hover:text-blue-600">
                skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-800 font-comfortaa text-sm md:text-base capitalize px-2 md:px-2.5 py-2.5 transition-colors duration-300 hover:text-blue-600">
                projects
              </a>
            </li>
            <li>
              <a href="#resume" className="text-gray-800 font-comfortaa text-sm md:text-base capitalize px-2 md:px-2.5 py-2.5 transition-colors duration-300 hover:text-blue-600">
                resume
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#college" className="text-gray-800 font-comfortaa text-sm md:text-base capitalize px-2 md:px-2.5 py-2.5 transition-colors duration-300 hover:text-blue-600">
                College
              </a>
            </li>
            <li className="hidden md:block">
              <a href="#contact" className="text-gray-800 font-comfortaa text-sm md:text-base capitalize px-2 md:px-2.5 py-2.5 transition-colors duration-300 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-[1200px] min-h-[90vh] mx-auto mt-[150px] text-center px-4">
        <h1>
          <BlurText
            text="Shaik Khasim Sharif"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl md:text-[90px] font-bold mb-2.5 lowercase text-black/90 font-dancing leading-none"
          />
        </h1>
        <SplitText
          text="Turning Ideas into Reality | Web, Blockchain & AI Enthusiast."
          className="text-sm md:text-base leading-relaxed mb-2.5 text-gray-600 font-normal z-[999] px-5 md:px-0"
          delay={20}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="flex justify-center items-center mt-8">
          <a
            href="https://github.com/skksharif"
            target="_blank"
            data-aos="fade-left"
            className="mx-2.5"
          >
            <img 
              src="./assets/icons/github.png" 
              alt="GitHub" 
              className="w-[30px] h-[30px] object-contain p-2.5 box-content transition-all duration-300 hover:bg-gray-500/20 hover:rounded-full hover:backdrop-blur-[5px]"
            />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/khasimsh52bi//"
            target="_blank"
            data-aos="fade-up"
            className="mx-2.5"
          >
            <img 
              src="./assets/icons/gfg.png" 
              alt="GeeksforGeeks" 
              className="w-[30px] h-[30px] object-contain p-2.5 box-content transition-all duration-300 hover:bg-gray-500/20 hover:rounded-full hover:backdrop-blur-[5px]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/skksharif"
            target="_blank"
            data-aos="fade-right"
            className="mx-2.5"
          >
            <img 
              src="./assets/icons/linkedin.png" 
              alt="LinkedIn" 
              className="w-[30px] h-[30px] object-contain p-2.5 box-content transition-all duration-300 hover:bg-gray-500/20 hover:rounded-full hover:backdrop-blur-[5px]"
            />
          </a>
        </div>
      </div>

      <Skills />
      <ResumeCard />
      <StudentIDCard />
      <Projects />

      {/* Fixed Chatbot Button */}
      <div 
        className="fixed bottom-5 right-5 bg-cyan-500 rounded-full p-4 cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.1)] hover:bg-cyan-600 transition-colors duration-300"
        onClick={toggleChat}
      >
        <i className="fa fa-comments text-white text-[20px]"></i>
      </div>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.2)] rounded-xl max-w-[500px] w-[calc(100vw-40px)] md:w-[500px] h-[400px] md:h-[500px] z-[1000] flex flex-col justify-between">
          <div className="flex justify-end p-2.5">
            <button 
              onClick={closeChat} 
              className="bg-transparent border-none text-lg cursor-pointer hover:text-red-500 transition-colors duration-300"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <ChatBot />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;