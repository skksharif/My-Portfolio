import React from "react";
import "./Skills.css";

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
    <>
      <div className="skills-orbit" id="skills">
        <div className="core"> My Skills</div>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-orb"
            style={{
              animationDuration: skill.orbit,
              transform: `rotate(${
                (360 / skills.length) * index
              }deg) translateX(150px) rotate(-${
                (360 / skills.length) * index
              }deg)`,
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
    </>
  );
}
