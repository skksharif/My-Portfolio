import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const NameAndTagline = () => {
  return (
    <div className="text-center px-4 sm:px-6 md:px-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50">
        <div className="absolute inset-0">
          {/* Parallax background elements */}
          <div
            className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
          <div
            className="absolute top-1/4 right-20 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-pink-200 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/4 w-36 h-36 sm:w-52 sm:h-52 md:w-80 md:h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-28 h-28 sm:w-44 sm:h-44 md:w-60 md:h-60 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse delay-500"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-pink-300 rounded-full blur-3xl opacity-15 animate-pulse delay-1500"
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)`,
            }}
          ></div>
        </div>
      </div>
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
