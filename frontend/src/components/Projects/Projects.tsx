import React, { useState } from "react";
import "./Projects.css";

import sc from "./images/sc.png";
import rg from "./images/rg.png";
import nc from "./images/nc.png";
import img4 from "./images/img4.jpg";
import note from "./images/note.png";
import sv from "./images/sv.png";
import lm from "./images/lm.png";
import fc from "./images/fc.png";

function Projects() {
  const getImageUrls = (id) => {
    const projects = {
      1: [
        {
          title: sc,
          link: "https://github.com/Yashvardhans",
          project_desc: "StackOverflow  Clone ",
        },
        {
          title: rg,
          link: "https://github.com/Yashvardhans",
          project_desc: "Food Vlog Website",
        },
        {
          title: img4,
          link: "https://github.com/Yashvardhans",
          project_desc: "React Chatbot",
        },
        {
          title: nc,
          link: "https://github.com/Yashvardhans",
          project_desc: "Netflix Clone",
        },
        {
          title: note,
          link: "https://github.com/Yashvardhans",
          project_desc: "React Note App",
        },
        {
          title: sv,
          link: "https://github.com/Yashvardhans",
          project_desc: "StudyVerse",
        },
        {
          title: lm,
          link: "https://github.com/Yashvardhans",
          project_desc: "Love Calculator",
        },
        {
          title: fc,
          link: "https://github.com/Yashvardhans",
          project_desc: "Fitness Club",
        },
      ],
      2: [
        {
          title: note,
          link: "https://github.com/Yashvardhans",
          project_desc: "React Note App",
        },
        {
          title: nc,
          link: "https://github.com/Yashvardhans",
          project_desc: "Netflix Clone",
        },
        {
          title: rg,
          link: "https://github.com/Yashvardhans",
          project_desc: "Food Vlog Website",
        },
        {
          title: lm,
          link: "https://github.com/Yashvardhans",
          project_desc: "Love Calculator",
        },
      ],
      3: [
        {
          title: fc,
          link: "https://github.com/Yashvardhans",
          project_desc: "Fitness Club",
        },
        {
          title: sv,
          link: "https://github.com/Yashvardhans",
          project_desc: "Study Verse",
        },
        {
          title: sc,
          link: "https://github.com/Yashvardhans",
          project_desc: "Stack Overflow Clone",
        },
        
        // {
        //   title: img3,
        //   link: "https://github.com/Yashvardhans",
        //   project_desc: "This is some content",
        // },
      ],
    };
    return projects[id] || [];
  };

  const buttons = ["All", "FrontEnd", "BackEnd"];

  const [selectedButton, setSelectedButton] = useState(1);

  

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    console.log(selectedButton);
    
    
  };

  return (
    <div className="container">
      <div className="project_container" id="projects">
        <div className="project_heading">
          My <span>Portfolio </span>
        </div>

        <div className="project_main">
          <div className="project_tech">
            <div className="project_buttons">
              {buttons.map((button, idx) => (
                <button className={selectedButton === idx+1 ? "project-button active-project" : "project-button"} key={idx} onClick={() => handleButtonClick(idx + 1)}>
                  {button}
                </button>
              ))}
            </div>
          </div>

          <div className="project_images">
            {getImageUrls(selectedButton).map((image, idx) => (
              <a href={image["link"]}>
                <div className="project_single_img">
                  <div className="name">{image['project_desc']}</div>
                  <div className="content">
                    <p>{image["project_desc"]}</p>
                  </div>
                  <img key={idx} src={image["title"]} alt="" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
