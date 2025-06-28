import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ isDarkMode }) => {
  const timelineData = [
    {
      year: "2024",
      title: "ReactJS Developer Intern",
      company: "VishnuSpire",
      duration: "May 2024 - June 2024",
      description: "Designed and developed responsive frontend pages using React.js and HTML5 with a mobile-first design approach.",
      achievements: [
        "Built 3+ production websites including talentnesttechnology.com",
        "Implemented responsive design patterns",
        "Collaborated with design team for pixel-perfect implementations"
      ],
      type: "work"
    },
    {
      year: "2024",
      title: "Full Stack Development Certification",
      company: "CISCO ThingQbator",
      duration: "2024",
      description: "Completed comprehensive MERN stack development program covering modern web development practices.",
      achievements: [
        "Mastered MERN stack development",
        "Built multiple full-stack applications",
        "Learned industry best practices"
      ],
      type: "education"
    },
    {
      year: "2023",
      title: "Python Essentials Certification",
      company: "CISCO Networking Academy",
      duration: "2023",
      description: "Gained proficiency in Python programming fundamentals and advanced concepts.",
      achievements: [
        "Learned Python fundamentals",
        "Implemented data structures and algorithms",
        "Built automation scripts"
      ],
      type: "education"
    },
    {
      year: "2021",
      title: "B.Tech Information Technology",
      company: "Lakireddy Bali Reddy College of Engineering",
      duration: "2021 - 2025",
      description: "Pursuing Bachelor's degree in Information Technology with focus on software development and emerging technologies.",
      achievements: [
        "Current CGPA: 8.65 (up to 7th semester)",
        "Active in coding competitions",
        "Member of technical clubs"
      ],
      type: "education"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 relative" id="timeline">
      {/* Background Elements */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${
        isDarkMode ? 'opacity-20' : 'opacity-15'
      }`}>
        <div className={`absolute w-80 h-80 rounded-full blur-3xl top-10 right-10 transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-bl from-purple-600/20 to-blue-600/20' 
            : 'bg-gradient-to-bl from-blue-400/25 to-purple-400/25'
        }`}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 font-dancing transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            My Journey
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A timeline of my professional growth and educational milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 transition-colors duration-500 ${
            isDarkMode ? 'bg-purple-600/30' : 'bg-blue-500/30'
          }`}></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10 transition-colors duration-500 ${
                item.type === 'work' 
                  ? isDarkMode ? 'bg-purple-600' : 'bg-blue-600'
                  : isDarkMode ? 'bg-blue-600' : 'bg-purple-600'
              }`}>
                <div className={`absolute inset-0 rounded-full animate-ping transition-colors duration-500 ${
                  item.type === 'work' 
                    ? isDarkMode ? 'bg-purple-600/50' : 'bg-blue-600/50'
                    : isDarkMode ? 'bg-blue-600/50' : 'bg-purple-600/50'
                }`}></div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                    isDarkMode 
                      ? 'bg-gray-800/20 border-gray-700/30 hover:bg-gray-800/30' 
                      : 'bg-white/20 border-white/30 hover:bg-white/30'
                  }`}
                >
                  {/* Year Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 transition-colors duration-500 ${
                    item.type === 'work'
                      ? isDarkMode 
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-600/30'
                        : 'bg-blue-500/20 text-blue-700 border border-blue-500/30'
                      : isDarkMode
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-600/30'
                        : 'bg-purple-500/20 text-purple-700 border border-purple-500/30'
                  }`}>
                    {item.year}
                  </div>

                  {/* Title and Company */}
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <div className={`text-base font-semibold mb-1 transition-colors duration-500 ${
                    isDarkMode ? 'text-purple-300' : 'text-blue-600'
                  }`}>
                    {item.company}
                  </div>
                  
                  <div className={`text-sm mb-4 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {item.duration}
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        className={`text-sm flex items-start space-x-2 transition-colors duration-500 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <span className={`text-xs mt-1 transition-colors duration-500 ${
                          item.type === 'work'
                            ? isDarkMode ? 'text-purple-400' : 'text-blue-500'
                            : isDarkMode ? 'text-blue-400' : 'text-purple-500'
                        }`}>
                          ▸
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className={`mt-16 p-8 rounded-2xl backdrop-blur-sm border text-center transition-all duration-500 ${
            isDarkMode 
              ? 'bg-gray-800/20 border-gray-700/30' 
              : 'bg-white/20 border-white/30'
          }`}
        >
          <h3 className={`text-2xl font-semibold mb-4 transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            What's Next?
          </h3>
          <p className={`text-base leading-relaxed mb-6 transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm actively seeking new opportunities to grow as a full-stack developer. 
            Interested in roles that challenge me to build innovative solutions and work with cutting-edge technologies.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isDarkMode
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
            } shadow-lg`}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;