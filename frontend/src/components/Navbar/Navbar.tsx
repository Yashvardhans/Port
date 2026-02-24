import { useState } from "react";
import React from "react";
import "./Navbar.css";
import profile from './images/img_nav.webp';
import {
  FaHome,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaUserAlt,
  FaFileAlt,
  FaHandsHelping,
  FaPhoneAlt,
  FaSuitcase,
  FaBars,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import Footer from "../Footer/Footer";

type SectionType = 'Banner' | 'About' | 'Technologies' | 'Projects' | 'Contact';

interface NavbarProps {
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>;
}

function Navbar({ setActiveSection }: NavbarProps) {
  const [mobile, setMobile] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);

  const handleScreen = (): void => {
    setMobile(!mobile);
    setOpen(!open);
  };

  return (
    <>
      <div className={mobile ? "navbar_container active" : "navbar_container"}>
        <div className="navbar_inner">
          <div className="navbar_image">
            <img src={profile} alt="" />
          </div>
          <div className="navbar_name">Yashvardhan Singh</div>
          <div className="navbar_icons">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/yashvardhan-singh-bhadoria/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/Yashvardhans">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar_contents">
            <ul>
              <li>
                <div className="navbar_menu_icons">
                  <FaHome />
                </div>
                <div className="navbar_texts" onClick={() => setActiveSection('Banner')}>
                  Home
                </div>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaUserAlt />
                </div>
                <div className="navbar_texts" onClick={() => setActiveSection('About')}>
                  About
                </div>
              </li>
              {/* <li>
                <div className="navbar_menu_icons">
                  <FaFileAlt />
                </div>
                <div className="navbar_texts" onClick={() => setActiveSection('Resume')}>
                  Resume
                </div>
              </li> */}
              <li>
                <div className="navbar_menu_icons">
                  <FaHandsHelping />
                </div>
                <div className="navbar_texts" onClick={() => setActiveSection('Technologies')}>
                  Services
                </div>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaSuitcase />
                </div>
                <div className="navbar_texts" onClick={() => setActiveSection('Projects')}>
                  Portfolio
                </div>
              </li>
              <li>
                <div className="navbar_menu_icons">
                  <FaPhoneAlt />
                </div>
                <div className="navbar_texts" onClick={() => setActiveSection('Contact')}>
                  Contact
                </div>
              </li>
            </ul>
          </div>
          <Footer footerClass={mobile ? "mobileFooter" : ""} />
        </div>
      </div>

      <button onClick={handleScreen} className="navbar_hamburger">
        {open ? <FaBars /> : <AiOutlineClose />}
      </button>
    </>
  );
}

export default Navbar;