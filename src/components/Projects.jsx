import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Projects = ({ isDarkMode }) => {
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
          end: `${totalWidth * 8} top`,
          toggleActions: "play pause resume resume",
          scrub: 0.5,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  const projects = [
    {
      title: "TalentNest Technology",
      description: "A comprehensive platform connecting talented individuals with opportunities in the technology sector.",
      image: "./assets/freelance-projects/talentnest.png",
      link: "https://talentnesttechnology.com",
      hasLink: true
    },
    {
      title: "Dr. Suja Clinic",
      description: "Professional healthcare website for Dr. Suja's medical practice with appointment booking system.",
      image: "./assets/freelance-projects/drsuja.png",
      link: "#",
      hasLink: false
    },
    {
      title: "Sridatta Padukanivas",
      description: "Traditional accommodation website showcasing heritage hospitality services.",
      image: "./assets/freelance-projects/sridattapadukanivas.png",
      link: "https://sridattapadukanivas.in",
      hasLink: true
    },
    {
      title: "SnapLessons",
      description: "Interactive online learning platform with quick lesson delivery and progress tracking.",
      image: "./assets/freelance-projects/snaplessons.png",
      link: "#",
      hasLink: false
    },
    {
      title: "AgroSky Drones",
      description: "Agricultural drone technology website showcasing precision farming solutions.",
      image: "./assets/freelance-projects/agroskydrones.png",
      link: "https://agroskydroneaspirant.com",
      hasLink: true
    }
  ];

  return (
    <section className="overflow-hidden mt-0 md:mt-20 relative" id="projects">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen flex flex-row relative" style={{ width: 'calc(100vw * 6)' }}>
          {/* Title Section */}
          <div className="w-screen h-screen flex items-center justify-center transition-transform duration-500">
            <div className={`w-[500px] h-[120px] blur-[100px] absolute z-[-1] top-[20%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-500 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-600/15 to-blue-600/15' 
                : 'bg-gradient-to-r from-pink-600/20 to-blue-500/20'
            }`}></div>
            <h3 className={`text-3xl md:text-[60px] font-light -ml-6 md:-ml-20 font-dancing z-10 transition-colors duration-500 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-200'
            }`}>
              Freelance Projects
            </h3>
          </div>

          {/* Project Sections */}
          {projects.map((project, index) => (
            <div key={index} className="w-screen h-screen flex items-center justify-center transition-transform duration-500">
              <div className="flex flex-col md:flex-row justify-center items-center w-full relative gap-2 md:gap-0">
                <div className={`w-[250px] h-[250px] blur-[100px] absolute z-[-1] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-500 ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-purple-600/12 via-blue-600/12 to-indigo-600/12' 
                    : 'bg-gradient-to-br from-white/15 via-pink-600/15 to-blue-500/15'
                }`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-[280px] md:max-w-[450px] rounded-lg transition-all duration-500 hover:rotate-0 hover:scale-105 relative z-10 shadow-xl"
                />
                <div className={`max-w-[280px] md:max-w-[450px] mx-0 p-4 md:p-5 backdrop-blur-[8px] border rounded-xl transform -rotate-12 hover:rotate-0 transition-all duration-500 hover:scale-105 shadow-xl ${
                  isDarkMode 
                    ? 'bg-gray-800/40 border-gray-700/30' 
                    : 'bg-white/40 border-white/30'
                }`}>
                  <h4 className={`text-lg md:text-[26px] mb-2 font-semibold transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>{project.title}</h4>
                  <p className={`text-sm md:text-base font-light mb-4 leading-relaxed transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{project.description}</p>
                  <a 
                    href={project.link} 
                    target={project.hasLink ? "_blank" : "_self"}
                    rel={project.hasLink ? "noopener noreferrer" : ""}
                    className={`text-white no-underline text-sm md:text-lg py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500'
                        : 'bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500'
                    }`}
                  >
                    {project.hasLink ? 'Visit Site' : 'Learn More'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;