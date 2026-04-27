import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">
        <h3>
          <a href="./" style={{ textDecoration: "none", color: "inherit", display:"inline-block" }}>Sewak</a>
          <span>.</span>
        </h3>
      </div>


      <div className="footer-icons">
        <a href="https://github.com/sewak07" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a href="https://x.com/aizewak" target="_blank" rel="noreferrer">
          <FiTwitter />
        </a>
        <a href="mailto:sew007ak@gmail.com">
          <FiMail />
        </a>
      </div>


      <div className="footer-copy">
        <p>© 2026 Sewak Dhakal. All rights reserved.</p>
      </div>
    </footer>
  );
}
