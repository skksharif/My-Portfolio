import React from "react";

export default function Skills({ isDarkMode }) {
  const skills = [
    {
      name: "React",
      color: isDarkMode ? "#61dafb" : "#61dafb",
      orbit: "18s",
      size: "50px",
      description: "Frontend library",
    },
    {
      name: "Node.js",
      color: isDarkMode ? "#68a063" : "#68a063",
      orbit: "10s",
      size: "40px",
      description: "Backend runtime",
    },
    {
      name: "Express.js",
      color: isDarkMode ? "#38bdf8" : "#0ea5e9",
      orbit: "12s",
      size: "40px",
      description: "Node.js Framework",
    },
    {
      name: "MongoDB",
      color: isDarkMode ? "#4db33d" : "#4db33d",
      orbit: "8s",
      size: "35px",
      description: "NoSQL database",
    },
    {
      name: "SQL",
      color: isDarkMode ? "#38bdf8" : "#0ea5e9",
      orbit: "9s",
      size: "45px",
      description: "SQL Database",
    },
    {
      name: "Java",
      color: isDarkMode ? "#ed8b00" : "#ed8b00",
      orbit: "14s",
      size: "45px",
      description: "OOP language",
    },
    {
      name: "CSS",
      color: isDarkMode ? "#38bdf8" : "#0ea5e9",
      orbit: "6s",
      size: "45px",
      description: "Styling",
    },
    {
      name: "Python",
      color: isDarkMode ? "#ed8b00" : "#ed8b00",
      orbit: "7s",
      size: "35px",
      description: "Machine Learning",
    },
    {
      name: "HTML",
      color: isDarkMode ? "#f7931a" : "#f7931a",
      orbit: "11s",
      size: "45px",
      description: "Web Development",
    },
    {
      name: "Javascript",
      color: isDarkMode ? "#38bdf8" : "#0ea5e9",
      orbit: "16s",
      size: "40px",
      description: "Everything",
    },
    {
      name: "Git",
      color: isDarkMode ? "#4db33d" : "#4db33d",
      orbit: "15s",
      size: "45px",
      description: "Version Control",
    },
  ];

  return (
    <div className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 font-dancing transition-colors duration-500 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            My Skills
          </h2>
          <p className={`text-lg transition-colors duration-500 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Technologies I work with
          </p>
        </div>

        {/* Skills Orbit Container */}
        <div className="flex justify-center">
          <div 
            className="w-full max-w-[600px] h-[600px] mx-auto relative rounded-full overflow-hidden transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              background: isDarkMode 
                ? 'radial-gradient(circle at center, rgba(139, 92, 246, 0.08), transparent 60%, rgba(59, 130, 246, 0.08))'
                : 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent 60%, rgba(59, 130, 246, 0.1))'
            }}
          >
            {/* Central Core */}
            <div 
              className={`absolute top-1/2 left-1/2 w-20 h-20 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center text-white cursor-pointer text-sm font-semibold text-center leading-tight transition-all duration-500 hover:scale-110 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_0_30px_rgba(139,92,246,0.4)]' 
                  : 'bg-gradient-to-br from-orange-500 to-red-500 shadow-[0_0_30px_rgba(255,165,0,0.4)]'
              }`}
            >
              Skills
            </div>

            {/* Orbiting Skills */}
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="absolute top-[47%] left-[47%] animate-orbit origin-center group"
                style={{
                  animationDuration: skill.orbit,
                  transform: `rotate(${(360 / skills.length) * index}deg) translateX(140px) rotate(-${(360 / skills.length) * index}deg)`,
                  width: skill.size,
                  height: skill.size,
                }}
                data-aos="fade-in"
                data-aos-delay={index * 100 + 400}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center text-white font-semibold text-shadow-[0_0_5px_rgba(0,0,0,0.7)] backdrop-blur-[5px] transition-all duration-300 hover:scale-125 hover:shadow-[0_0_25px_currentColor] focus:outline-2 focus:outline-current focus:outline-offset-4 ${
                    isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  style={{
                    backgroundColor: skill.color,
                    width: skill.size,
                    height: skill.size,
                  }}
                  tabIndex={0}
                >
                  <span className="z-20 text-center text-xs font-bold">{skill.name}</span>
                  
                  {/* Enhanced Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 rounded-lg text-xs opacity-0 invisible transition-all duration-300 whitespace-nowrap group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 shadow-lg ${
                    isDarkMode ? 'bg-gray-800/95 text-white border border-gray-700/50' : 'bg-black/90 text-white border border-gray-300/20'
                  }`}>
                    {skill.description}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                      isDarkMode ? 'border-t-gray-800/95' : 'border-t-black/90'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}