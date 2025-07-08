import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import NameAndTagline from "../components/NameAndTagLine";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = boxRef.current;
    const text = textRef.current;

    // Animate image to slide out right
    gsap.to(el, {
      x: window.innerWidth,
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
    });

    // Animate text to scale up
    gsap.to(text, {
      scale: 1.5,
      scrollTrigger: {
        trigger: text,
        start: "top end", // when text enters view
        end: "bottom start", // end scale near top
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="h-[150vh] w-screen bg-white overflow-hidden">
      <Navbar />

      {/* Background Text Layer */}
      <div
        className="absolute inset-0 z-0 flex items-end justify-center"
        ref={textRef}
      >
        <div className="h-[70vh] border-1 border-dashed flex items-end justify-center mb-10">
          <NameAndTagline />
        </div>
      </div>

      {/* Foreground Image Layer */}
      <div className="z-10 flex items-center justify-center">
        <img
          ref={boxRef}
          src="./assets/mine/sharif-nobg.png"
          alt="Profile"
          className="w-[500px] h-auto"
        />
      </div>
    </div>
  );
}
