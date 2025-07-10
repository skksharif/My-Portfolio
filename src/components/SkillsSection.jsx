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
    <section ref={containerRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </ScrollReveal>

        <div ref={skillsRef} className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex} delay={categoryIndex * 0.2}>
              <GlassCard gradient={category.gradient} className="h-full">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon className={`text-2xl ${skill.color}`} />
                          <span className="font-medium text-gray-700">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
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