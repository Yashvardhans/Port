import React from "react";
import "./Technologies2.css";

interface Skill {
  name: string;
  icon: string;
}

interface SkillGroupProps {
  title: string;
  skills: Skill[];
}

const SkillGroup = ({ title, skills }: SkillGroupProps) => (
  <div className="skill-group">
    <h3 className="skill-group-title">{title}</h3>

    <div className="skill-grid">
      {skills.map((s, i) => (
        <div className="skill-card" key={i}>
          <i className={s.icon}></i>
          <span>{s.name}</span>
        </div>
      ))}
    </div>
  </div>
);

function Technologies2() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills & Expertise</h2>

      <div className="skills-wrapper">
        <SkillGroup
          title="Frontend"
          skills={[
            { name: "React", icon: "devicon-react-original" },
            { name: "Next.js", icon: "devicon-nextjs-original" },
            { name: "CSS", icon: "devicon-css3-plain" },
            { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
            { name: "Redux", icon: "devicon-redux-original" },
          ]}
        />

        <SkillGroup
          title="Backend & Data"
          skills={[
            { name: "Node.js", icon: "devicon-nodejs-plain" },
            { name: "Express", icon: "devicon-express-original" },
            { name: "MongoDB", icon: "devicon-mongodb-plain" },
            { name: "MySQL", icon: "devicon-mysql-plain" },
            { name: "Python", icon: "devicon-python-plain" },
          ]}
        />

        <SkillGroup
          title="Tools & Workflow"
          skills={[
            { name: "Git", icon: "devicon-git-plain" },
            { name: "Docker", icon: "devicon-docker-plain" },
            { name: "Figma", icon: "devicon-figma-plain" },
          ]}
        />
      </div>
    </section>
  );
}

export default Technologies2;