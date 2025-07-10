import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
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
      company: 'Malla Reddy College of Engineering',
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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 md:w-44 md:h-44 bg-orange-200/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-32 right-16 w-28 h-28 md:w-40 md:h-40 bg-red-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 md:w-36 md:h-36 bg-yellow-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
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
                <GlassCard gradient={exp.gradient}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <FaBriefcase className="text-purple-600 text-lg sm:text-xl" />
                    <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 font-dancing">
                    {exp.title}
                  </h3>
                  
                  <h4 className="text-base sm:text-lg font-semibold text-purple-600 mb-2 sm:mb-3">
                    {exp.company}
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-xs sm:text-sm" />
                      <span className="text-xs sm:text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-xs sm:text-sm" />
                      <span className="text-xs sm:text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-1 sm:space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm sm:text-base text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;