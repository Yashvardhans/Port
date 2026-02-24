import React from "react";
import "./Banner.css";

type SectionType = 'Banner' | 'About' | 'Technologies' | 'Projects' | 'Contact';

interface BannerProps {
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>;
}

function Banner({ setActiveSection }: BannerProps) {
  return (
    <div className="container" id="banner">
      <div className="banner_container">
        <div className="banner_p">Hi, I am</div>
        <div className="banner_heading">
          <span className="glow">Yashvardhan </span><br /> 
          <div>Your friendly neighborhood Developer</div>
        </div>
        <div className="banner_p">
          Full Stack Web-development-focused software engineer · Bachelor's in Computer Science · Specialization in Artificial Intelligence and Machine Learning
        </div>
        <button 
          className="banner_button"
          onClick={() => setActiveSection('Contact')}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Banner;