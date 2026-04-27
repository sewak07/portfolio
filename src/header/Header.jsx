import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header-container ${scrolled ? "scrolled" : ""}`}>
      <div className="header-logo">
        <h2 >
          <a href="./" style={{ textDecoration: "none", color: "inherit" }}>Sewak</a>
        </h2>
      </div>
      <Navbar />
    </div>
  );
}
