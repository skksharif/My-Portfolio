import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import ParallaxBackground from './ParallaxBackground';
import MaskEffect from './MaskEffect';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const timelineRef = useRef(null);

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Freelance',
      location: 'Remote',
      period: '2022 - Present',
      type: 'Freelance',
      description: [
        'Developed 6+ responsive web applications using React.js and Node.js',
        'Implemented modern UI/UX designs with Tailwind CSS and animations',
        'Built RESTful APIs and integrated third-party services',
        'Collaborated with clients to deliver projects on time and within budget'
      ],
      gradient: 'from-blue-400/20 to-purple-400/20'
    },
    {
      title: 'Web Development Intern',
      company: 'Tech Startup',
      location: 'Hyderabad, India',
      period: '2023 (3 months)',
      type: 'Internship',
      description: [
        'Assisted in developing e-commerce platform features',
        'Learned agile development methodologies',
        'Contributed to code reviews and testing processes',
        'Gained experience with version control and team collaboration'
      ],
      gradient: 'from-green-400/20 to-emerald-400/20'
    },
    {
      title: 'Computer Science Student',
      company: 'Lakireddy Bali Reddy College of Engineering',
      location: 'Hyderabad, India',
      period: '2021 - 2025',
      type: 'Education',
      description: [
        'Pursuing B.Tech in Computer Science Engineering',
        'Relevant coursework: Data Structures, Algorithms, Database Systems',
        'Active participation in coding competitions and hackathons',
        'Maintaining strong academic performance with practical projects'
      ],
      gradient: 'from-orange-400/20 to-red-400/20'
    }
  ];

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const items = timeline.querySelectorAll('.timeline-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(item,
        { 
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });

    // Animate the timeline line
    gsap.fromTo('.timeline-line',
      { height: '0%' },
      {
        height: '100%',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Experience & Education
            </h2>
          </MaskEffect>
        </ScrollReveal>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 bg-gray-200 h-full hidden md:block">
            <div className="timeline-line w-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
          </div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item relative flex items-center mb-8 sm:mb-12 lg:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 sm:border-4 border-white shadow-lg z-10 hidden md:block" />
              
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <MaskEffect maskType="slide">
                  <GlassCard gradient={exp.gradient}>
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <FaBriefcase className="text-purple-600 text-base sm:text-lg" />
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 font-dancing">
                      {exp.title}
                    </h3>
                    
                    <h4 className="text-sm sm:text-base font-semibold text-purple-600 mb-2">
                      {exp.company}
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-gray-600 mb-2 sm:mb-3">
                      <div className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        <span className="text-xs">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-xs" />
                        <span className="text-xs">{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </MaskEffect>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;