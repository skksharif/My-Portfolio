import React from "react";

const ResumeCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" id="resume">
      <div className="relative max-w-[450px] h-[550px] w-full bg-white/10 backdrop-blur-[12px] p-8 border border-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-400"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-400"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-blue-400"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-400"></div>
        
        <div className="text-center mb-6">
          <p className="text-blue-300 text-sm mt-1">Professional Overview</p>
        </div>

        {/* Resume Image */}
        <div className="mb-6">
          <a
            href="./assets/mine/sharif.jpg"
            download="resume.jpg"
            className="block"
          >
            <div className="overflow-hidden rounded-lg border border-gray-300/10">
              <img
                src="./assets/mine/resume.png"
                alt="Resume"
                className="w-full h-[450px] object-contain block transition-transform duration-300 hover:scale-105"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;