import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LinkComponent from "../LinkComponent.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Hamburger Menu */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        className="relative z-[1100] cursor-pointer border-none bg-transparent text-slate-900 md:hidden"
      >
        {open ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`
          fixed left-0 top-0 z-[1000]
          flex w-full flex-col items-center gap-5
          border-b border-gray-200
          bg-white/95 py-8
          backdrop-blur-[10px]
          transition-transform duration-[350ms] ease-in-out
          md:static md:z-auto
          md:w-auto md:flex-row md:gap-8
          md:border-none md:bg-transparent
          md:py-0 md:backdrop-blur-none
          md:translate-y-0
          md:mr-[100px]
          ${
            open
              ? "translate-y-0"
              : "-translate-y-[120%] md:translate-y-0"
          }
        `}
      >
        <LinkComponent
          link="#home"
          name="Home"
          onClick={closeMenu}
        />

        <LinkComponent
          link="#featuredProjects"
          name="Projects"
          onClick={closeMenu}
        />

        <LinkComponent
          link="#skills"
          name="Skills"
          onClick={closeMenu}
        />

        <LinkComponent
          link="#contact"
          name="Contact"
          onClick={closeMenu}
        />

        <LinkComponent
          link="#contact"
          name="Let's Talk"
          className="highlight-link"
          onClick={closeMenu}
        />
      </nav>
    </>
  );
}