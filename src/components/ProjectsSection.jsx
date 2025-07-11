import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import ParallaxBackground from "./ParallaxBackground";
import MaskEffect from "./MaskEffect";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "./assets/freelance-projects/talentnest.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com/khasim-sharif/ecommerce",
      live: "https://ecommerce-demo.com",
      gradient: "from-blue-400/20 to-purple-400/20",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "./assets/freelance-projects/memoriemakers.png",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "https://github.com/khasim-sharif/task-manager",
      live: "https://taskmanager-demo.com",
      gradient: "from-green-400/20 to-emerald-400/20",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, charts, and weather alerts using external APIs.",
      image: "./assets/freelance-projects/drsuja.png",
      technologies: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      github: "https://github.com/khasim-sharif/weather-dashboard",
      live: "https://weather-dashboard-demo.com",
      gradient: "from-orange-400/20 to-red-400/20",
    },
    {
      title: "Social Media App",
      description:
        "Social networking platform with posts, comments, likes, and real-time messaging functionality.",
      image: "./assets/freelance-projects/snaplessons.png",
      technologies: ["React", "Firebase", "Material-UI", "Cloud Functions"],
      github: "https://github.com/khasim-sharif/social-app",
      live: "https://social-app-demo.com",
      gradient: "from-pink-400/20 to-purple-400/20",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with smooth animations, contact forms, and blog functionality.",
      image: "./assets/freelance-projects/agroskydrones.png",
      technologies: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/khasim-sharif/portfolio",
      live: "https://khasim-sharif.dev",
      gradient: "from-cyan-400/20 to-blue-400/20",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course management, video streaming, quizzes, and progress tracking.",
      image: "./assets/freelance-projects/sridattapadukanivas.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
      github: "https://github.com/khasim-sharif/lms",
      live: "https://lms-demo.com",
      gradient: "from-indigo-400/20 to-purple-400/20",
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
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Hover animations
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </MaskEffect>
        </ScrollReveal>

        <div
          ref={projectsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <MaskEffect maskType="slide">
                <GlassCard gradient={project.gradient} className="h-full group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
                      >
                        <FaGithub className="text-base" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
                      >
                        <FaExternalLinkAlt className="text-base" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center gap-2 mb-2">
                    <FaCode className="text-purple-600 text-sm" />
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 font-dancing">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-xs"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-xs"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  </div>
                </GlassCard>
              </MaskEffect>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
