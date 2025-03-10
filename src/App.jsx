import { useState } from "react";
import "./App.css";
import { TypeAnimation } from "react-type-animation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="circle"></div>
      <div class="shape"></div>
   
      <div class="square"></div>

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
            <a href="#resume" id="optional">resume</a>
          </li>
          <li>
            <a href="#contact" id="optional">Contact</a>
          </li>
          
        </ul>
      </nav>
      <div className="home">
        <h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Khasim Sharif",
              1000,
            ]}
            wrapper="span"
            speed={150}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={false}
            cursor={false}
          />
        </h1>
        <p>Turning Ideas into Reality | Web, Blockchain & AI Enthusiast.</p>
        <div className="social-icons">
          <a href="https://github.com/skksharif" target="_blank">
            <img src="./assets/icons/github.png" alt="" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/khasimsh52bi//" target="_blank">
            <img src="./assets/icons/gfg.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/skksharif" target="_blank">
            <img src="./assets/icons/linkedin.png" alt="" />
          </a>
        </div>
        <button className="explore-btn"><img src="./assets/icons/white-arrow-down.png" alt="" /></button>
      </div>
    </>
  );
}

export default App;
