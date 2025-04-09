import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "React", color: "#61dafb", orbit: "10s", size: "50px", description: "Frontend library" },
    { name: "Node.js", color: "#68a063", orbit: "12s", size: "45px", description: "Backend runtime" },
    { name: "MongoDB", color: "#4db33d", orbit: "11s", size: "40px", description: "NoSQL database" },
    { name: "Java", color: "#ed8b00", orbit: "13s", size: "55px", description: "OOP language" },
    { name: "C++", color: "#00599c", orbit: "9s", size: "48px", description: "Systems programming" },
    { name: "Blockchain", color: "#f7931a", orbit: "14s", size: "52px", description: "Distributed ledger" },
    { name: "Tailwind", color: "#38bdf8", orbit: "10.5s", size: "42px", description: "CSS framework" },
  ];

  return (
    <div className="skills-orbit">
      <div className="core"></div>
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="skill-orb"
          style={{
            animationDuration: skill.orbit,
            transform: `rotate(${(360 / skills.length) * index}deg) translateX(150px) rotate(-${(360 / skills.length) * index}deg)`,
          }}
        >
          <div
            className="orb"
            style={{
              background: skill.color,
              width: skill.size,
              height: skill.size,
            }}
          >
            <span className="skill-name">{skill.name}</span>
            <div className="tooltip">{skill.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}