import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import ParallaxBackground from './ParallaxBackground';
import MaskEffect from './MaskEffect';
import { 
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, 
  FaPython, FaJava, FaAws, FaDocker 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiJavascript, SiMongodb, SiExpress,
  SiTypescript, SiNextdotjs, SiPostgresql, SiRedis
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const containerRef = useRef(null);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend',
      gradient: 'from-blue-400/20 to-cyan-400/20',
      skills: [
        { icon: FaReact, name: 'React.js', color: 'text-cyan-500' },
        { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-800' },
        { icon: SiJavascript, name: 'JavaScript', color: 'text-orange-500' },
        { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600' },
        { icon: FaHtml5, name: 'HTML5', color: 'text-orange-600' },
        { icon: FaCss3Alt, name: 'CSS3', color: 'text-blue-600' },
        { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-sky-400' },
      ]
    },
    {
      title: 'Backend',
      gradient: 'from-green-400/20 to-emerald-400/20',
      skills: [
        { icon: FaNodeJs, name: 'Node.js', color: 'text-green-600' },
        { icon: SiExpress, name: 'Express.js', color: 'text-gray-700' },
        { icon: FaPython, name: 'Python', color: 'text-blue-500' },
        { icon: FaJava, name: 'Java', color: 'text-red-600' },
      ]
    },
    {
      title: 'Database & Cloud',
      gradient: 'from-purple-400/20 to-pink-400/20',
      skills: [
        { icon: SiMongodb, name: 'MongoDB', color: 'text-green-700' },
        { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-700' },
        { icon: SiRedis, name: 'Redis', color: 'text-red-600' },
        { icon: FaAws, name: 'AWS', color: 'text-orange-500' },
        { icon: FaDocker, name: 'Docker', color: 'text-blue-500' },
      ]
    },
    {
      title: 'Tools & Others',
      gradient: 'from-orange-400/20 to-red-400/20',
      skills: [
        { icon: FaGithub, name: 'Git/GitHub', color: 'text-gray-800' },
      ]
    }
  ];

  useEffect(() => {
    const skills = skillsRef.current?.querySelectorAll('.skill-card');
    if (!skills) return;

    skills.forEach((skill, index) => {
      gsap.fromTo(skill,
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skill,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </MaskEffect>
        </ScrollReveal>

        <div ref={skillsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex} delay={categoryIndex * 0.2}>
              <MaskEffect maskType="slide">
                <GlassCard gradient={category.gradient} className="h-full skill-card">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 font-dancing">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex flex-col items-center text-center p-2 rounded-lg hover:bg-white/30 transition-all duration-300">
                        <skill.icon className={`text-2xl sm:text-3xl ${skill.color} mb-2`} />
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </MaskEffect>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;