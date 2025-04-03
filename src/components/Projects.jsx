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
        translateX: "-500vw", // Adjust based on number of sections (e.g., -100vw * (number of sections - 1))
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "6000 top", // Adjust end value based on number of sections (e.g., 1000 * number of sections)
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
                  src="./assets/freelance-projects/talentnest.png"
                  alt="TalentNest"
                />
                <div className="project-content">
                  <h4>Project 1</h4>
                  <p>Description of Project 1 goes here.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div className="project">
                <div className="project-shadow"></div>
                <img
                  src="./assets/freelance-projects/drsuja.png"
                  alt="Dr. Suja"
                />
                <div className="project-content">
                  <h4>Project 2</h4>
                  <p>Description of Project 2 goes here.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div className="project">
                <div className="project-shadow"></div>
                <img
                  src="./assets/freelance-projects/sridattapadukanivas.png"
                  alt="Sridatta Padukanivas"
                />
                <div className="project-content">
                  <h4>Project 3</h4>
                  <p>Description of Project 3 goes here.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div className="project">
                <div className="project-shadow"></div>
                <img
                  src="./assets/freelance-projects/snaplessons.png"
                  alt="SnapLessons"
                />
                <div className="project-content">
                  <h4>Project 4</h4>
                  <p>Description of Project 4 goes here.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="scroll-section">
              <div className="project">
                <div className="project-shadow"></div>
                <img
                  src="./assets/freelance-projects/agroskydrones.png"
                  alt="AgroSky Drones"
                />
                <div className="project-content">
                  <h4>Project 5</h4>
                  <p>Description of Project 5 goes here.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;