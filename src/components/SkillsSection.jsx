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
      title: 'Frontend Development',
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
      title: 'Backend Development',
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
      title: 'Tools & Version Control',
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
    <section ref={containerRef} className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </MaskEffect>
        </ScrollReveal>

        <div ref={skillsRef} className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex} delay={categoryIndex * 0.2}>
              <MaskEffect maskType="slide">
                <GlassCard gradient={category.gradient} className="h-full skill-card p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 font-dancing mb-2">
                      {category.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/30 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex-shrink-0">
                          <skill.icon className={`text-2xl sm:text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <div className="flex-grow">
                          <span className="text-sm sm:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </MaskEffect>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <ScrollReveal>
          <div className="mt-12 lg:mt-16">
            <MaskEffect maskType="slide">
              <GlassCard gradient="from-indigo-400/20 to-purple-400/20" className="text-center p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dancing">
                  Always Learning
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  I'm constantly exploring new technologies and frameworks to stay current with industry trends. 
                  Currently diving deeper into cloud architecture, microservices, and advanced React patterns.
                </p>
              </GlassCard>
            </MaskEffect>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillsSection;