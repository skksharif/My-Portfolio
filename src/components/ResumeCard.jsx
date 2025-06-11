import React from "react";

const ResumeCard = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" id="resume">
      <div 
        className={`relative max-w-[400px] h-[500px] w-full backdrop-blur-[12px] p-6 border transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
          isDarkMode 
            ? 'bg-gray-800/20 border-gray-700/30 hover:bg-gray-800/30' 
            : 'bg-white/20 border-white/20 hover:bg-white/30'
        }`}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {/* Decorative corner elements */}
        <div className={`absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 transition-colors duration-500 ${
          isDarkMode ? 'border-purple-400' : 'border-blue-400'
        }`}></div>
        <div className={`absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 transition-colors duration-500 ${
          isDarkMode ? 'border-purple-400' : 'border-blue-400'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 transition-colors duration-500 ${
          isDarkMode ? 'border-purple-400' : 'border-blue-400'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 transition-colors duration-500 ${
          isDarkMode ? 'border-purple-400' : 'border-blue-400'
        }`}></div>
        
        <div className="text-center mb-4">
          <p className={`text-sm mt-1 transition-colors duration-500 ${
            isDarkMode ? 'text-purple-300' : 'text-blue-600'
          }`}>Professional Overview</p>
        </div>

        {/* Resume Image */}
        <div className="mb-4">
          <a
            href="./assets/mine/resume.png"
            download="Sharif_Resume.png"
            className="block group"
          >
            <div className={`overflow-hidden rounded-lg border transition-all duration-300 group-hover:shadow-lg ${
              isDarkMode ? 'border-gray-600/30' : 'border-gray-300/20'
            }`}>
              <img
                src="./assets/mine/resume.png"
                alt="Resume"
                className="w-full h-[400px] object-contain block transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>
        </div>

        {/* Download hint */}
        <div className="text-center">
          <p className={`text-xs transition-colors duration-500 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Click to download resume</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;