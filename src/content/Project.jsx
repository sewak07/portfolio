import CardComponent from "../components/CardComponent";
import {FiGithub} from "react-icons/fi";
import "./Project.css";

export default function Project() {
  return (
    <div className="project-wrapper" id="projects">
      <div className="project-header">
        <h6>PORTFOLIO</h6>
      </div>
      <div className="project">
        <h1>Feature Projects</h1>
        <p>A selection of projects that showcase my skills in building modern, scalable applications.</p>
      </div>
      <div className="project-container">
        <CardComponent img="politics-hub.png"
          name="Politics-hub"
          title="Politics-hub"
          description="Politics-hub is a MERN stack web application that provides users with the latest news and updates on politics."
          tech={["Express.js", "Node.js", "React", "MongoDb"]}
          code="https://github.com/sewak07/Politics-hub"
          demo=""
        />

        <CardComponent img="lms.jpg"
          name="IMES Website"
          title="IMES"
          description="Fully automated Full Stack Internal Marks Evaluation website for Colleges"
          tech={["Express.js", "Node.js", "React", "MongoDb"]}
          code="https://github.com/sewak07/IMES"
          demo=""
        />

        <CardComponent img="anime-character.jpg"
          name="Otaku-Tube Website"
          title="Otaku Tube"
          description="Anime webiste for recommendations, ranking and trailer"
          tech={["HTML", "CSS", "JS"]}
          code="https://github.com/sewak07/otgit statusakuTube"
          demo="https://sewak07.github.io/otakuTube/"
        />
      </div>
      <div className="viewall-project">
        <a href="https://github.com/sewak07" target="_blank" rel="noopener noreferrer">View All Projects</a>
      </div>
    </div>
  )
}