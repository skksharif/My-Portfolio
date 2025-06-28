import React from 'react';
import { motion } from 'framer-motion';

const TechStack = ({ isDarkMode }) => {
  const techCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React.js", level: 90, color: "#61DAFB" },
        { name: "Next.js", level: 85, color: "#000000" },
        { name: "JavaScript", level: 95, color: "#F7DF1E" },
        { name: "TypeScript", level: 75, color: "#3178C6" },
        { name: "HTML5", level: 95, color: "#E34F26" },
        { name: "CSS3", level: 90, color: "#1572B6" },
        { name: "Tailwind CSS", level: 88, color: "#06B6D4" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Node.js", level: 88, color: "#339933" },
        { name: "Express.js", level: 85, color: "#000000" },
        { name: "Python", level: 80, color: "#3776AB" },
        { name: "Java", level: 85, color: "#ED8B00" },
        { name: "REST APIs", level: 90, color: "#FF6B6B" }
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      technologies: [
        { name: "MongoDB", level: 85, color: "#47A248" },
        { name: "MySQL", level: 80, color: "#4479A1" },
        { name: "PostgreSQL", level: 75, color: "#336791" },
        { name: "Firebase", level: 82, color: "#FFCA28" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      technologies: [
        { name: "Git", level: 90, color: "#F05032" },
        { name: "GitHub", level: 88, color: "#181717" },
        { name: "VS Code", level: 95, color: "#007ACC" },
        { name: "Postman", level: 85, color: "#FF6C37" },
        { name: "Docker", level: 70, color: "#2496ED" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 relative" id="tech-stack">
      {/* Background Elements */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${
        isDarkMode ? 'opacity-20' : 'opacity-15'
      }`}>
        <div className={`absolute w-72 h-72 rounded-full blur-3xl top-20 left-10 transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20' 
            : 'bg-gradient-to-br from-blue-400/25 to-purple-400/25'
        }`}></div>
        <div className={`absolute w-64 h-64 rounded-full blur-3xl bottom-20 right-10 transition-colors duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-tl from-blue-600/20 to-indigo-600/20' 
            : 'bg-gradient-to-tl from-pink-400/25 to-blue-400/25'
        }`}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Tech Stack
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-800/20 border-gray-700/30 hover:bg-gray-800/30' 
                  : 'bg-white/20 border-white/30 hover:bg-white/30'
              }`}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className={`text-3xl mb-2 p-3 rounded-xl inline-block transition-colors duration-500 ${
                  isDarkMode ? 'bg-purple-600/20' : 'bg-blue-500/20'
                }`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-500 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {category.title}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {tech.name}
                      </span>
                      <span className={`text-xs transition-colors duration-500 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {tech.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className={`w-full h-2 rounded-full overflow-hidden transition-colors duration-500 ${
                      isDarkMode ? 'bg-gray-700/50' : 'bg-gray-300/50'
                    }`}>
                      <motion.div
                        className="h-full rounded-full transition-all duration-500 group-hover:shadow-lg"
                        style={{ 
                          backgroundColor: isDarkMode ? tech.color : tech.color,
                          filter: isDarkMode ? 'brightness(0.8)' : 'brightness(1)'
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + techIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
            Always Learning
          </h3>
          <p className={`text-base leading-relaxed max-w-3xl mx-auto transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and best practices 
            to stay at the forefront of web development. Currently diving deeper into cloud technologies, 
            microservices architecture, and advanced React patterns.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Redis', 'Microservices'].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-600/30' 
                    : 'bg-blue-500/20 text-blue-700 border border-blue-500/30'
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;