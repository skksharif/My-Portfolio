import { useState, useEffect } from "react";
import "./App.css";
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
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chatbot visibility

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
    <>
      <div className="circle"></div>
      <div className="shape"></div>
      <div className="square"></div>

      <nav>
        <ul>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
          <li>
            <a href="#resume">resume</a>
          </li>
          <li>
            <a href="#college" id="optional">
              College
            </a>
          </li>

          <li>
            <a href="#contact" id="optional">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="home">
        <h1>
          <BlurText
            text="Shaik Khasim Sharif"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="name"
          />
        </h1>
        <SplitText
          text="Turning Ideas into Reality | Web, Blockchain & AI Enthusiast."
          className="caption"
          delay={20}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="social-icons">
          <a
            href="https://github.com/skksharif"
            target="_blank"
            data-aos="fade-left"
          >
            <img src="./assets/icons/github.png" alt="" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/khasimsh52bi//"
            target="_blank"
            data-aos="fade-up"
          >
            <img src="./assets/icons/gfg.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/skksharif"
            target="_blank"
            data-aos="fade-right"
          >
            <img src="./assets/icons/linkedin.png" alt="" />
          </a>
        </div>
      </div>
      <Skills />

      <ResumeCard />
      <StudentIDCard />
      <Projects />

      {/* Fixed Chatbot Button */}
      <div className="chatbot-button" onClick={toggleChat}>
        <i className="fa fa-comments"></i> {/* Chatbot icon */}
      </div>

      {/* Chatbot Popup */}
      {isChatOpen && (
        <div className="chatbot-popup">
          <div className="popup-header">
            <button onClick={closeChat} className="close-btn">
              <i className="fa fa-times"></i> {/* Close button icon */}
            </button>
          </div>
          <ChatBot />
        </div>
      )}
    </>
  );
}

export default App;
