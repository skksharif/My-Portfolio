import React from "react";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress } from "react-icons/si";

export default function Skills() {
  return (
    <div className="px-6 py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <Skill icon={<FaHtml5 />} name="HTML5" color="text-orange-600" />
        <Skill icon={<FaCss3Alt />} name="CSS3" color="text-blue-600" />
        <Skill icon={<SiJavascript />} name="JavaScript" color="text-yellow-500" />
        <Skill icon={<FaReact />} name="React.js" color="text-cyan-500" />
        <Skill icon={<SiTailwindcss />} name="Tailwind CSS" color="text-sky-400" />
        <Skill icon={<FaNodeJs />} name="Node.js" color="text-green-600" />
        <Skill icon={<SiExpress />} name="Express.js" color="text-gray-700" />
        <Skill icon={<SiMongodb />} name="MongoDB" color="text-green-700" />
        <Skill icon={<FaGithub />} name="GitHub" color="text-gray-800" />
      </div>
    </div>
  );
}

function Skill({ icon, name, color }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-6 hover:scale-105 hover:shadow-xl transition duration-300">
      <div className={`text-4xl mb-3 ${color}`}>{icon}</div>
      <p className="text-lg font-medium text-gray-700">{name}</p>
    </div>
  );
}
