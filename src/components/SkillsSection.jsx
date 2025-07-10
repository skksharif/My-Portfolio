import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
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
        { icon: FaReact, name: 'React.js', level: 90, color: 'text-cyan-500' },
        { icon: SiNextdotjs, name: 'Next.js', level: 85, color: 'text-gray-800' },
        { icon: SiJavascript, name: 'JavaScript', level: 95, color: 'text-yellow-500' },
        { icon: SiTypescript, name: 'TypeScript', level: 80, color: 'text-blue-600' },
        { icon: FaHtml5, name: 'HTML5', level: 95, color: 'text-orange-600' },
        { icon: FaCss3Alt, name: 'CSS3', level: 90, color: 'text-blue-600' },
        { icon: SiTailwindcss, name: 'Tailwind CSS', level: 90, color: 'text-sky-400' },
      ]
    },
    {
      title: 'Backend',
      gradient: 'from-green-400/20 to-emerald-400/20',
      skills: [
        { icon: FaNodeJs, name: 'Node.js', level: 85, color: 'text-green-600' },
        { icon: SiExpress, name: 'Express.js', level: 85, color: 'text-gray-700' },
        { icon: FaPython, name: 'Python', level: 80, color: 'text-blue-500' },
        { icon: FaJava, name: 'Java', level: 75, color: 'text-red-600' },
      ]
    },
    {
      title: 'Database & Cloud',
      gradient: 'from-purple-400/20 to-pink-400/20',
      skills: [
        { icon: SiMongodb, name: 'MongoDB', level: 85, color: 'text-green-700' },
        { icon: SiPostgresql, name: 'PostgreSQL', level: 80, color: 'text-blue-700' },
        { icon: SiRedis, name: 'Redis', level: 70, color: 'text-red-600' },
        { icon: FaAws, name: 'AWS', level: 75, color: 'text-orange-500' },
        { icon: FaDocker, name: 'Docker', level: 70, color: 'text-blue-500' },
      ]
    },
    {
      title: 'Tools & Others',
      gradient: 'from-orange-400/20 to-red-400/20',
      skills: [
        { icon: FaGithub, name: 'Git/GitHub', level: 90, color: 'text-gray-800' },
      ]
    }
  ];

  useEffect(() => {
    const skills = skillsRef.current?.querySelectorAll('.skill-item');
    if (!skills) return;

    skills.forEach((skill, index) => {
      gsap.fromTo(skill,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
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

      // Animate skill bars
      const progressBar = skill.querySelector('.progress-bar');
      const level = progressBar?.dataset.level;
      if (progressBar && level) {
        gsap.fromTo(progressBar,
          { width: '0%' },
          {
            width: `${level}%`,
            duration: 1.5,
            delay: index * 0.1 + 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: skill,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 left-16 w-28 h-28 md:w-40 md:h-40 bg-green-200/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-24 right-12 w-32 h-32 md:w-44 md:h-44 bg-blue-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 md:w-36 md:h-36 bg-purple-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </ScrollReveal>

        <div ref={skillsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex} delay={categoryIndex * 0.2}>
              <GlassCard gradient={category.gradient} className="h-full">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 font-dancing">
                  {category.title}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex items-center justify-between mb-1 sm:mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon className={`text-lg sm:text-xl lg:text-2xl ${skill.color}`} />
                          <span className="text-sm sm:text-base font-medium text-gray-700">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
                        <div 
                          className="progress-bar h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-300"
                          data-level={skill.level}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;