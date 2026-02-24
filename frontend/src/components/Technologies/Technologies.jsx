import React from "react";
import "./Technologies.css";
import img from "./images/img.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

function Technologies() {
  return (
    <div className="container-sk">
      <div className="tech_heading">
        My<span> Skills</span>
      </div>
      <div className="tech_container" id="services">
        <div className="tech_inner_container">
          <div className="tech_image">
            <img src={img} alt="" />
            <div className="inside_img">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="tech_heading">Design</div>
          <div className="tech_p">
            I appreciate straightforward content organization, tidy design
            layouts, and considerate user interactions.
          </div>
          <div className="tech_p_head">Things I like designing:</div>
          <div className="tech_p">UX, UI, Web, Apps, Logos</div>
          {/* <div className="tech_p_head">Design Tools:</div> */}
          <div className="tech_list">
            {/* <ul>
              <li>UI/UX</li>
              <li>Figma</li>
              <li>Font Awesome</li>
            </ul> */}
          </div>
        </div>
        <div className="tech_inner_container">
          <div className="tech_image">
            <img src={img} alt="" />
            <div className="inside_img">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="tech_heading">FrontEnd</div>
          <div className="tech_p">
            I craft seamless user experiences with clean content structure,
            polished designs, and intuitive interactions
          </div>
          <div className="tech_p_head">Things I Know:</div>
          <div className="tech_p">HTML , CSS , React , Next , Bootstrap</div>
          {/* <div className="tech_p_head">FrontEnd Tools:</div> */}
          <div className="tech_list">
            {/* <ul>
              <li>Vs Code</li>
              <li></li>
              <li>Figma</li>
              
            </ul> */}
          </div>
        </div>
        <div className="tech_inner_container">
          <div className="tech_image">
            <img src={img} alt="" />
            <div className="inside_img">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="tech_heading">BackEnd</div>
          <div className="tech_p">
            I specialize in designing robust and efficient systems, ensuring
            seamless functionality, and optimizing performance .
          </div>
          <div className="tech_p_head">Tools I use:</div>
          <div className="tech_p">NodeJS , Express , MongoDB  , Python , MySQL</div>
          {/* <div className="tech_p_head">Design Tools:</div> */}
          <div className="tech_list">
            {/* <ul>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
              <li>Figma</li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
