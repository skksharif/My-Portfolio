import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from './ScrollReveal';
import GlassCard from './GlassCard';
import ParallaxBackground from './ParallaxBackground';
import MaskEffect from './MaskEffect';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaCode } from 'react-icons/fa';

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
      icon: FaCode,
      description: [
        'Developed 15+ responsive web applications using React.js and Node.js',
        'Implemented modern UI/UX designs with Tailwind CSS and GSAP animations',
        'Built RESTful APIs and integrated third-party services like Stripe and AWS',
        'Collaborated with clients globally to deliver projects on time and within budget',
        'Maintained 100% client satisfaction rate with ongoing support and maintenance'
      ],
      gradient: 'from-blue-400/20 to-purple-400/20'
    },
    {
      title: 'Web Development Intern',
      company: 'Tech Startup',
      location: 'Hyderabad, India',
      period: '2023 (3 months)',
      type: 'Internship',
      icon: FaBriefcase,
      description: [
        'Assisted in developing e-commerce platform features using MERN stack',
        'Learned agile development methodologies and participated in daily standups',
        'Contributed to code reviews and testing processes, improving code quality',
        'Gained hands-on experience with version control and team collaboration tools',
        'Implemented responsive design components that improved mobile user experience'
      ],
      gradient: 'from-green-400/20 to-emerald-400/20'
    },
    {
      title: 'Computer Science Student',
      company: 'Lakireddy Bali Reddy College of Engineering',
      location: 'Hyderabad, India',
      period: '2021 - 2025',
      type: 'Education',
      icon: FaGraduationCap,
      description: [
        'Pursuing B.Tech in Computer Science Engineering with focus on software development',
        'Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering',
        'Active participation in coding competitions and hackathons with multiple wins',
        'Maintaining strong academic performance while working on practical projects',
        'Leading technical workshops and mentoring junior students in programming'
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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      <ParallaxBackground className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <MaskEffect>
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Experience & Education
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
              <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-2xl mx-auto">
                My journey in technology and continuous learning
              </p>
            </div>
          </MaskEffect>
        </ScrollReveal>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden lg:block">
            <div className="timeline-line w-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
          </div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item relative flex flex-col lg:flex-row items-center mb-12 sm:mb-16 lg:mb-20 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot - Hidden on mobile */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse opacity-50"></div>
              </div>
              
              {/* Content */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <MaskEffect maskType="slide">
                  <GlassCard gradient={exp.gradient} className="p-6 sm:p-8 hover:scale-105 transition-transform duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <exp.icon className="text-white text-lg" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 font-dancing">
                          {exp.title}
                        </h3>
                        <h4 className="text-base sm:text-lg font-semibold text-purple-600 mb-3">
                          {exp.company}
                        </h4>
                      </div>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-sm text-purple-500" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-sm text-purple-500" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm sm:text-base text-gray-600 flex items-start gap-3">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </MaskEffect>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <ScrollReveal>
          <div className="text-center mt-12 lg:mt-16">
            <MaskEffect maskType="slide">
              <GlassCard gradient="from-indigo-400/20 to-purple-400/20" className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 font-dancing">
                  Ready for New Challenges
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                  I'm always excited to take on new projects and collaborate with amazing teams. 
                  Let's build something incredible together!
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  Let's Work Together
                </a>
              </GlassCard>
            </MaskEffect>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExperienceSection;