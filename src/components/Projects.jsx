import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./Projects.css";

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 80%",
          toggleActions: "play pause resume resume",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section">
              <div className="background"></div>
              <h3 className="projects-title">Freelance Projects</h3>
            </div>
            <div className="scroll-section">
              <div className="project">
                <div className="project-shadow"></div>
                <img
                  src="./assets/freelance-projects/memoriemakers.png"
                  alt=""
                />
                <div className="project-content">
                  <h4>Project Title</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, ligula ac consectetur fermentum, neque velit
                    iaculis velit, et sollicitudin arcu quam vel justo.
                  </p>
                  <a href="#" className="project-link">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <h3>Section 3</h3>
            </div>
            <div className="scroll-section">
              <h3>Section 4</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
