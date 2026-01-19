import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import "./Content.css";
export default function Content(){
  return(
    <div className="content-container">
      <Home />
      <Project />
      <Skills />
      <Contact />
    </div>
  )
}