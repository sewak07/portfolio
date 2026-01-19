import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LinkComponent from "../components/LinkComponent";
import "./Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FiX size={26} /> : <FiMenu size={26} />}
      </div>

      <div className={`navbar-container ${open ? "open" : ""}`}>
        <LinkComponent link="#home" name="Home" onClick={closeMenu} />
        <LinkComponent link="#projects" name="Projects" onClick={closeMenu} />
        <LinkComponent link="#skills" name="Skills" onClick={closeMenu} />
        <LinkComponent link="#contact" name="Contact" onClick={closeMenu} />
        <LinkComponent
          link="#contact"
          name="Let's Talk"
          className="highlight-link"
          onClick={closeMenu}
        />
      </div>
    </>
  );
}
