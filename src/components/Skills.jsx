import React from "react";

export default function Skills() {
  const skills = [
    {
      name: "React",
      color: "#61dafb",
      orbit: "20s",
      size: "60px",
      description: "Frontend library",
    },
    {
      name: "Node.js",
      color: "#68a063",
      orbit: "12s",
      size: "45px",
      description: "Backend runtime",
    },
    {
      name: "Express.js",
      color: "#38bdf8",
      orbit: "14s",
      size: "45px",
      description: "Node.js Framework",
    },
    {
      name: "MongoDB",
      color: "#4db33d",
      orbit: "9s",
      size: "40px",
      description: "NoSQL database",
    },
    {
      name: "SQL",
      color: "#38bdf8",
      orbit: "10s",
      size: "50px",
      description: "SQL Database",
    },
    {
      name: "Java",
      color: "#ed8b00",
      orbit: "16s",
      size: "55px",
      description: "OOP language",
    },
    {
      name: "CSS",
      color: "#38bdf8",
      orbit: "7s",
      size: "55px",
      description: "Styling",
    },
    {
      name: "Python",
      color: "#ed8b00",
      orbit: "8s",
      size: "40px",
      description: "Machine Learning",
    },
    {
      name: "HTML",
      color: "#f7931a",
      orbit: "12.5s",
      size: "55px",
      description: "Web Development",
    },
    {
      name: "Javascript",
      color: "#38bdf8",
      orbit: "18s",
      size: "50px",
      description: "Everything",
    },
    {
      name: "Git",
      color: "#4db33d",
      orbit: "17s",
      size: "55px",
      description: "Version Control",
    },
  ];

  return (
    <div className="w-full max-w-[600px] h-[600px] mx-auto my-12 relative bg-gradient-radial from-white/10 via-transparent to-blue-50/70 rounded-full overflow-hidden shadow-[inset_0_0_30px_rgba(0,212,255,0.2)] animate-pulse-bg" id="skills">
      {/* Central Core */}
      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-radial from-orange-500 to-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_40px_rgba(0,212,255,0.3)] z-10 animate-core-glow flex justify-center items-center text-white cursor-pointer text-xs font-semibold text-center leading-tight">
        My Skills
      </div>

      {/* Orbiting Skills */}
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="absolute top-[45%] left-[45%] animate-orbit origin-center group"
          style={{
            animationDuration: skill.orbit,
            transform: `rotate(${(360 / skills.length) * index}deg) translateX(150px) rotate(-${(360 / skills.length) * index}deg)`,
            width: skill.size,
            height: skill.size,
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center text-white font-semibold text-shadow-[0_0_5px_rgba(0,0,0,0.7)] bg-white/10 backdrop-blur-[5px] transition-all duration-300 hover:scale-130 hover:shadow-[0_0_25px_currentColor,0_0_40px_currentColor] hover:bg-white/20 focus:outline-2 focus:outline-current focus:outline-offset-4"
            style={{
              backgroundColor: skill.color,
              width: skill.size,
              height: skill.size,
            }}
            tabIndex={0}
          >
            <span className="z-20 text-center text-sm">{skill.name}</span>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2.5 bg-black/80 text-white px-2.5 py-1.5 rounded text-sm opacity-0 invisible transition-all duration-200 whitespace-nowrap group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1">
              {skill.description}
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @media (max-width: 768px) {
          .skills-orbit {
            max-width: 400px;
            height: 400px;
          }
          .orbit-radius {
            --orbit-radius: 120px;
          }
          .core {
            width: 60px;
            height: 60px;
          }
        }
        
        @media (max-width: 480px) {
          .skills-orbit {
            max-width: 300px;
            height: 300px;
            margin: 30px auto;
          }
          .orbit-radius {
            --orbit-radius: 90px;
          }
          .core {
            width: 50px;
            height: 50px;
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}