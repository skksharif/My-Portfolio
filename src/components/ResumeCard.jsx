import React from "react";
import "./ResumeCard.css";

const ResumeCard = () => {
  return (
    <div className="resume-container">
      <div className="resume-card">
        {/* Decorative corner elements */}
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>
        <div className="header">
          <p className="subtitle">Professional Overview</p>
        </div>

        {/* Resume Image */}

        {/* Download Button */}
        <div className="button-container">
          <a
            href="./assets/mine/sharif.jpg"
            download="resume.jpg"
            className="download-button"
          >
            <div className="resume-image-container">
              <img
                src="./assets/mine/resume.png"
                alt="Resume"
                className="resume-image"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
