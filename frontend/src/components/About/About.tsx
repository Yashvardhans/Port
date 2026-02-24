import { useState } from "react";
import "./About.css";
import picture from "../../images/profil_pic.png";
import resume from './Yresume.pdf';

function About() {
  const [showInteract, setShowInteract] = useState<boolean>(false);
  const currentYear: number = new Date().getFullYear();
  
  return (
    <div className="container-ab" id="about">
      <div className="about_heading">
        About<span> Me</span>
      </div>
      <div className="about_container">
        <div className="about_img">
          <img src={picture} alt="" />
        </div>
        <div className="about_content">
          <div className="about_name">Yashvardhan Singh</div>
          <div className="about_description">Full Stack Developer</div>
          <div className="about_info">
            I am a full-stack developer with a solid understanding of both front-end and back-end development <br />{" "}
            <br />
            {/* With a strong foundation in web development, I have acquired a
            diverse range of technical abilities and am proficient in various
            programming languages, frameworks, and tools. */}
          </div>
          <div className="about_summary" id="resume">
            <ul>
              <li>
                <span>From :</span>India
              </li>
              <li>
                <span>Lives in :</span>India
              </li>
              <li>
                <span>Age :</span>{currentYear - 2002}
              </li>
              <li>
                <span>Gender :</span>Male
              </li>
              <li>
                <span>University :</span>Vellore Institute of Technology
              </li>
              <li>
                <span>Education :</span>B.tech , C.S.E(Specialization in A.I and M.L)
              </li>
            </ul>
          </div>
          <a href={resume} download="Resume.pdf">
            <div className="about_button">
              <button>Download Resume</button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;