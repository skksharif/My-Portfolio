import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sections = sectionRef.current?.children;
    if (!sections) return;

    const sectionCount = sections.length;
    const totalWidth = sectionCount * 100;

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${(sectionCount - 1) * 100}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `${totalWidth * 10} top`,
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
    <section className="overflow-hidden mt-0 md:mt-24 relative" id="projects">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen flex flex-row relative" style={{ width: 'calc(100vw * 6)' }}>
          {/* Title Section */}
          <div className="w-screen h-screen flex items-center justify-center transition-transform duration-500">
            <div className="w-[800px] h-[200px] bg-gradient-to-r from-pink-600 to-blue-500 blur-[100px] absolute z-[-1] top-[20%] left-[45%] transform -translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-4xl md:text-[80px] font-light text-gray-200 -ml-8 md:-ml-24 font-dancing z-10">
              Freelance Projects
            </h3>
          </div>

          {/* Project 1 */}
          <div className="w-screen h-screen flex items-center justify-center transition-transform duration-500">
            <div className="flex flex-col md:flex-row justify-center items-center w-full relative gap-2.5 md:gap-0">
              <div className="w-[400px] h-[400px] bg-gradient-to-br from-white via-pink-600 to-blue-500 blur-[100px] absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src="./assets/freelance-projects/talentnest.png"
                alt="TalentNest"
                className="max-w-[300px] md:max-w-[500px] rounded-md transition-all duration-500 hover:rotate-0 relative z-10"
              />
              <div className="max-w-[300px] md:max-w-[500px] mx-0 p-4 md:p-5 bg-white/57 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] border border-white/18 rounded-xl transform -rotate-20">
                <h4 className="text-lg md:text-[30px] mb-2.5">TalentNest Technology</h4>
                <p className="text-sm md:text-base font-light mb-5">A comprehensive platform connecting talented individuals with opportunities in the technology sector.</p>
                <a href="https://talentnesttechnology.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline text-sm md:text-xl py-2.5 px-5 bg-pink-600 rounded-md hover:bg-pink-700 transition-colors duration-300">
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="w-screen h-screen flex items-center justify-center transition-transform duration-500">
            <div className="flex flex-col md:flex-row justify-center items-center w-full relative gap-2.5 md:gap-0">
              <div className="w-[400px] h-[400px] bg-gradient-to-br from-white via-pink-600 to-blue-500 blur-[100px] absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src="./assets/freelance-projects/drsuja.png"
                alt="Dr. Suja"
                className="max-w-[300px] md:max-w-[500px] rounded-md transition-all duration-500 hover:rotate-0 relative z-10"
              />
              <div className="max-w-[300px] md:max-w-[500px] mx-0 p-4 md:p-5 bg-white/57 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] border border-white/18 rounded-xl transform -rotate-20">
                <h4 className="text-lg md:text-[30px] mb-2.5">Dr. Suja Clinic</h4>
                <p className="text-sm md:text-base font-light mb-5">Professional healthcare website for Dr. Suja's medical practice with appointment booking system.</p>
                <a href="#" className="text-white no-underline text-sm md:text-xl py-2.5 px-5 bg-pink-600 rounded-md hover:bg-pink-700 transition-colors duration-300">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="w-screen h-screen flex items-center justify-center transition-transform duration-500">
            <div className="flex flex-col md:flex-row justify-center items-center w-full relative gap-2.5 md:gap-0">
              <div className="w-[400px] h-[400px] bg-gradient-to-br from-white via-pink-600 to-blue-500 blur-[100px] absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src="./assets/freelance-projects/sridattapadukanivas.png"
                alt="Sridatta Padukanivas"
                className="max-w-[300px] md:max-w-[500px] rounded-md transition-all duration-500 hover:rotate-0 relative z-10"
              />
              <div className="max-w-[300px] md:max-w-[500px] mx-0 p-4 md:p-5 bg-white/57 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] border border-white/18 rounded-xl transform -rotate-20">
                <h4 className="text-lg md:text-[30px] mb-2.5">Sridatta Padukanivas</h4>
                <p className="text-sm md:text-base font-light mb-5">Traditional accommodation website showcasing heritage hospitality services.</p>
                <a href="https://sridattapadukanivas.in" target="_blank" rel="noopener noreferrer" className="text-white no-underline text-sm md:text-xl py-2.5 px-5 bg-pink-600 rounded-md hover:bg-pink-700 transition-colors duration-300">
                  Visit Site
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="w-screen h-screen flex items-center justify-center transition-transform duration-500">
            <div className="flex flex-col md:flex-row justify-center items-center w-full relative gap-2.5 md:gap-0">
              <div className="w-[400px] h-[400px] bg-gradient-to-br from-white via-pink-600 to-blue-500 blur-[100px] absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src="./assets/freelance-projects/snaplessons.png"
                alt="SnapLessons"
                className="max-w-[300px] md:max-w-[500px] rounded-md transition-all duration-500 hover:rotate-0 relative z-10"
              />
              <div className="max-w-[300px] md:max-w-[500px] mx-0 p-4 md:p-5 bg-white/57 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] border border-white/18 rounded-xl transform -rotate-20">
                <h4 className="text-lg md:text-[30px] mb-2.5">SnapLessons</h4>
                <p className="text-sm md:text-base font-light mb-5">Interactive online learning platform with quick lesson delivery and progress tracking.</p>
                <a href="#" className="text-white no-underline text-sm md:text-xl py-2.5 px-5 bg-pink-600 rounded-md hover:bg-pink-700 transition-colors duration-300">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="w-screen h-screen flex items-center justify-center transition-transform duration-500">
            <div className="flex flex-col md:flex-row justify-center items-center w-full relative gap-2.5 md:gap-0">
              <div className="w-[400px] h-[400px] bg-gradient-to-br from-white via-pink-600 to-blue-500 blur-[100px] absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src="./assets/freelance-projects/agroskydrones.png"
                alt="AgroSky Drones"
                className="max-w-[300px] md:max-w-[500px] rounded-md transition-all duration-500 hover:rotate-0 relative z-10"
              />
              <div className="max-w-[300px] md:max-w-[500px] mx-0 p-4 md:p-5 bg-white/57 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[4px] border border-white/18 rounded-xl transform -rotate-20">
                <h4 className="text-lg md:text-[30px] mb-2.5">AgroSky Drones</h4>
                <p className="text-sm md:text-base font-light mb-5">Agricultural drone technology website showcasing precision farming solutions.</p>
                <a href="https://agroskydroneaspirant.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline text-sm md:text-xl py-2.5 px-5 bg-pink-600 rounded-md hover:bg-pink-700 transition-colors duration-300">
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;