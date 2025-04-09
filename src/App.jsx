import { useState,useEffect } from "react";
import "./App.css";
import AOS from 'aos'
import "aos/dist/aos.css"
import Projects from "./components/Projects";
import StudentIDCard from "./components/StudentIDCard";
import BlurText from "./react-bits/BlurText/BlurText";
import SplitText from "./react-bits/SplitText/SplitText";
import Skills from "./components/Skills";

function App() {
  const [count, setCount] = useState(0);
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  useEffect(()=>{
    AOS.init({duration:1000})
 },[]);
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
            <a href="#bot">sharif</a>
          </li>
          <li>
            <a href="#resume" id="optional">
              resume
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
          <a href="https://github.com/skksharif" target="_blank" data-aos="fade-left">
            <img src="./assets/icons/github.png" alt="" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/khasimsh52bi//"
            target="_blank"
            data-aos="fade-up"
          >
            <img src="./assets/icons/gfg.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/skksharif" target="_blank" data-aos="fade-right">
            <img src="./assets/icons/linkedin.png" alt="" />
          </a>
        </div>
      </div>
      <StudentIDCard />
      

      <Projects />
      <Skills/>
    </>
  );
}

export default App;
