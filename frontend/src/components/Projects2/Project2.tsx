import React, { useState } from "react";
import "./Project2.css";

import ec from "../../images/projectImages/ec.png"
import at from "../../images/projectImages/at.png"
import sv from "./images/sv.png";
import fc from "./images/fc.png";
import al_sy from "../../images/projectImages/al_sy.png";

interface Project {
  img: string;
  name: string;
  summary: string;
  tech: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    img: sv,
    name: "Study Verse",
    summary:
      "Collaborative learning platform that connects students with mentors, featuring structured dashboards, mentor discovery, and reusable UI components for a scalable user experience.",
    tech: "React · Firebase · Tailwind CSS",
    github: "https://github.com/Yashvardhans",
    live: "https://studyverse.netlify.app/",
  },
  {
    img: ec,
    name: "E-commerce App",
    summary:
      "Full-stack e-commerce system with secure authentication, product management, shopping cart, and order tracking, powered by RESTful APIs and a scalable backend architecture.",
    tech: "React · TypeScript · Node.js · PostgreSQL · Tailwind CSS",
    github: "https://github.com/Yashvardhans/Ecommerce-react-app",
    live: "https://ecommerce-app-b0mw.onrender.com/",
  },
  {
    img: at,
    name: "Assignment Tracker",
    summary:
      "Student productivity web app for managing assignments, deadlines, and academic tasks through an intuitive dashboard and responsive multi-page interface.",
    tech: "React · TypeScript · Vite · Tailwind CSS · shadcn/ui",
    github: "https://github.com/Yashvardhans/Web",
    live: "https://dapper-fenglisu-1716f7.netlify.app/",
  },
  {img: al_sy, // <-- import cs from "./images/cs.png"
    name: "ClockSync",
    summary:
      "Real-time collaborative alarm clock that allows users to create shared rooms where multiple participants can control and disable alarms, while also functioning as a standard digital clock.",
    tech: "React · TypeScript · Tailwind CSS",
    github: "#",
    live: "https://clever-brioche-a2a924.netlify.app/"}
];

function Project2() {
  const [active, setActive] = useState<Project | null>(null);

  const closeModal = () => setActive(null);

  return (
    <section className="projects">
      <header className="projects-header">
        <h2>My Projects</h2>
      </header>

      {/* GRID */}
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card" onClick={() => setActive(p)}>
            <div className="image-wrap">
              <img src={p.img} alt={p.name} />
            </div>

            <div className="card-footer">
              <h3>{p.name}</h3>
              <span>View case study →</span>
            </div>
          </div>
        ))}
      </div>

      {/* SIDE PANEL */}
      {active && (
        <div className="project-overlay" onClick={closeModal}>
          <div className="project-panel" onClick={(e) => e.stopPropagation()}>
            {/* CLOSE */}
            <button className="project-close" onClick={closeModal}>
              ✕
            </button>

            {/* IMAGE */}
            <div className="panel-image">
              <img src={active.img} alt={active.name} />
            </div>

            {/* CONTENT */}
            <div className="panel-content">
              <h2>{active.name}</h2>

              <p className="panel-description">{active.summary}</p>

              <div className="panel-tech">
                {active.tech.split("·").map((t, i) => (
                  <span key={i}>{t.trim()}</span>
                ))}
              </div>

              <div className="panel-actions">
                <a
                  href={active.live}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn"
                >
                  Live Demo
                </a>

                <a
                  href={active.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project2;
