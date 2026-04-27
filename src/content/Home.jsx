import LinkComponent from "../components/LinkComponent";
import "./Home.css";
import { FiArrowDown, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function Home() {
  return (
    <div id="home">
      <div className="availability">
        <h4>Available for opportunities</h4>
      </div>
      <div className="name">
        <p>Hi, I'm <span className="myname">Sewak Dhakal</span></p>
      </div>
      <div className="personal-info">
        <p>A passionate Software Developer crafting elegant solutions and
          building scalable applications that make a difference.</p>
      </div>
      <div className="home-buttons">
        <div className="home-button-left">
          <a href="#projects">View My Work</a>
        </div>
        <div className="home-button-right">
          <a href="#contact">Get In Touch</a>
        </div>
      </div>
      <div className="home-icons">
        <LinkComponent link="https://www.github.com" target="_blank" rel="noreferrer" name={<FiGithub size={24} />} />
        <LinkComponent link="https://www.twitter.com" target="_blank" rel="noreferrer" name={<FiTwitter size={24} />} />
        <LinkComponent link="https://www.linkedin.com" target="_blank" rel="noreferrer" name={<FiLinkedin size={24} />} />
      </div>
      <div className="arrow-to-project">
        <LinkComponent link="#projects" name={<FiArrowDown size={24} />} />
      </div>
    </div>
  )
}