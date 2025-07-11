import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import ParallaxBackground from "./ParallaxBackground";
import MaskEffect from "./MaskEffect";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.",
      image: "./assets/freelance-projects/talentnest.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
      github: "https://github.com/khasim-sharif/ecommerce",
      live: "https://ecommerce-demo.com",
      gradient: "from-blue-400/20 to-purple-400/20",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced filtering options.",
      image: "./assets/freelance-projects/memoriemakers.png",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Material-UI"],
      github: "https://github.com/khasim-sharif/task-manager",
      live: "https://taskmanager-demo.com",
      gradient: "from-green-400/20 to-emerald-400/20",
      featured: false,
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, interactive charts, weather alerts, and historical data visualization using multiple APIs.",
      image: "./assets/freelance-projects/drsuja.png",
      technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS", "PWA"],
      github: "https://github.com/khasim-sharif/weather-dashboard",
      live: "https://weather-dashboard-demo.com",
      gradient: "from-orange-400/20 to-red-400/20",
      featured: false,
    },
    {
      title: "Social Media App",
      description:
        "Social networking platform with posts, comments, likes, real-time messaging, story features, and advanced privacy controls for enhanced user experience.",
      image: "./assets/freelance-projects/snaplessons.png",
      technologies: ["React", "Firebase", "Material-UI", "Cloud Functions", "PWA"],
      github: "https://github.com/khasim-sharif/social-app",
      live: "https://social-app-demo.com",
      gradient: "from-pink-400/20 to-purple-400/20",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with smooth animations, contact forms, blog functionality, and optimized performance for excellent user experience.",
      image: "./assets/freelance-projects/agroskydrones.png",
      technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion", "Netlify"],
      github: "https://github.com/khasim-sharif/portfolio",
      live: "https://khasim-sharif.dev",
      gradient: "from-cyan-400/20 to-blue-400/20",
      featured: false,
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course management, video streaming, interactive quizzes, progress tracking, and comprehensive analytics for educators.",
      image: "./assets/freelance-projects/sridattapadukanivas.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "AWS S3"],
      github: "https://github.com/khasim-sharif/lms",
      live: "https://lms-demo.com",
      gradient: "from-indigo-400/20 to-purple-400/20",
      featured: true,
    },
  ];

  useEffect(() => {
    const projectCards = projectsRef.current?.querySelectorAll(".project-card");
    if (!projectCards) return;

    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Enhanced hover animations
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -15, scale: 1.02, duration: 0.4, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
                A showcase of my recent work and the technologies I've mastered
              </p>
            </div>
          </MaskEffect>
        </ScrollReveal>

        <div
          ref={projectsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <MaskEffect maskType="slide">
                <GlassCard gradient={project.gradient} className="h-full group relative overflow-hidden">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-medium">
                        <FaStar className="text-xs" />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/95 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                        aria-label="View GitHub Repository"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/95 backdrop-blur-sm rounded-full text-gray-800 hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                        aria-label="View Live Demo"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FaCode className="text-purple-600 text-sm" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 font-dancing">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 text-sm font-medium hover:scale-105"
                      >
                        <FaGithub className="text-sm" />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-sm font-medium hover:scale-105"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </MaskEffect>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal>
          <div className="text-center mt-12 lg:mt-16">
            <MaskEffect maskType="slide">
              <GlassCard gradient="from-indigo-400/20 to-purple-400/20" className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dancing">
                  Want to See More?
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                  These are just a few highlights from my portfolio. I have many more projects 
                  and I'm always working on something new and exciting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://github.com/khasim-sharif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300"
                  >
                    <FaGithub />
                    View All Projects
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Let's Collaborate
                  </a>
                </div>
              </GlassCard>
            </MaskEffect>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;