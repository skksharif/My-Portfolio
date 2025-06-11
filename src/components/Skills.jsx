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
    <div 
      className="w-full max-w-[500px] h-[500px] mx-auto my-8 relative rounded-full overflow-hidden transition-all duration-500"
      id="skills"
      data-aos="fade-up"
      style={{
        background: isDarkMode 
          ? 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1), transparent, rgba(59, 130, 246, 0.1))'
          : 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent, rgba(59, 130, 246, 0.1))'
      }}
    >
      {/* Central Core */}
      <div 
        className={`absolute top-1/2 left-1/2 w-16 h-16 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center text-white cursor-pointer text-xs font-semibold text-center leading-tight transition-all duration-500 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-600 to-blue-600 shadow-[0_0_20px_rgba(139,92,246,0.5)]' 
            : 'bg-gradient-to-br from-orange-500 to-red-500 shadow-[0_0_20px_rgba(255,255,255,0.5)]'
        }`}
      >
        My Skills
      </div>

      {/* Orbiting Skills */}
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="absolute top-[45%] left-[45%] animate-orbit origin-center group"
          style={{
            animationDuration: skill.orbit,
            transform: `rotate(${(360 / skills.length) * index}deg) translateX(120px) rotate(-${(360 / skills.length) * index}deg)`,
            width: skill.size,
            height: skill.size,
          }}
          data-aos="fade-in"
          data-aos-delay={index * 100}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center text-white font-semibold text-shadow-[0_0_5px_rgba(0,0,0,0.7)] backdrop-blur-[5px] transition-all duration-300 hover:scale-125 hover:shadow-[0_0_20px_currentColor] focus:outline-2 focus:outline-current focus:outline-offset-4 ${
              isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-white/10 hover:bg-white/20'
            }`}
            style={{
              backgroundColor: skill.color,
              width: skill.size,
              height: skill.size,
            }}
            tabIndex={0}
          >
            <span className="z-20 text-center text-xs">{skill.name}</span>
            
            {/* Tooltip */}
            <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs opacity-0 invisible transition-all duration-200 whitespace-nowrap group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1 ${
              isDarkMode ? 'bg-gray-800/90 text-white' : 'bg-black/80 text-white'
            }`}>
              {skill.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}