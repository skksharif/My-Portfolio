import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const NameAndTagline = () => {
  return (
    <div className="text-center px-4 sm:px-6 md:px-12">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
        Khasim Sharif
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-600 mb-6">
        Not Just a Developer — Tech Enthusiast
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-gray-700 text-2xl">
        {/* GitHub */}
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition duration-300"
        >
          <FaGithub />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/your-leetcode-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition duration-300"
        >
          <SiLeetcode />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default NameAndTagline;
