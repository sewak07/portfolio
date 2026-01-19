import CardComponent from "../components/CardComponent";
import "./Skills.css";
import { FiCode, FiServer, FiDatabase, FiTool, FiSmartphone, FiCloud } from "react-icons/fi";

export default function Skills() {
  return (
    <div id="skills" className="skills-wrapper" >
      <div className="expertise">
        <h4>Expertise</h4>
      </div>
      <div className="Skill-header">
        <h1>Skills & Technologies</h1>
        <p>A comprehensive toolkit built through years of hands-on experience in software development.</p>
      </div>
      <div className="skill-card">
        <CardComponent
          logo={<FiCode size={25} className="skill-icon" />}
          title="Frontend Development"
          tech={["React", "Tailwind"]}
        />

        <CardComponent logo={<FiServer size={25} className="skill-icon" />}
          title="Backend Development"
          tech={["Node.js", "Express", "REST APIs"]}
        />

        <CardComponent logo={<FiDatabase size={25} className="skill-icon" />}
          title="Database & Storage"
          tech={["MongoDB", "mySql"]}
        />

        <CardComponent logo={<FiTool size={25} className="skill-icon" />}
          title="Tools & Practices"
          tech={["Git", "Figma", "VS Code"]}
        />
      </div>
      <div className="daily-tech">
        <h5>Technologies I work with daily</h5>
        <div className="daily-tech-list">
          <p>React</p>
          <p>Node.js</p>
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  )
}