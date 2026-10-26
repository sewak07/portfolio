import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 items-center gap-5 bg-gray-50 px-[8%] py-8 text-center shadow-[0px_5px_10px_#64748b] md:grid-cols-[1fr_auto_1fr] md:text-left">

      {/* Brand */}
      <div className="footer-brand">
        <h3 className="text-[1.2rem] font-bold text-slate-900">
          <a href="./" className="inline-block text-inherit no-underline">
            Sewak
          </a>
          <span className="ml-0.5 text-amber-500">.</span>
        </h3>
      </div>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-[22px]">
        <a
          href="https://github.com/sewak07"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-[18px] text-slate-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-slate-900"
        >
          <FiGithub />
        </a>

        <a
          href="https://x.com/aizewak"
          target="_blank"
          rel="noreferrer"
          aria-label="X (Twitter)"
          className="text-[18px] text-slate-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-slate-900"
        >
          <FiTwitter />
        </a>

        <a
          href="https://www.linkedin.com/in/sewak-dhakal"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-[18px] text-slate-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-slate-900"
        >
          <FiLinkedin />
        </a>

        <a
          href="mailto:sew007ak@gmail.com"
          aria-label="Email"
          className="text-[18px] text-slate-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:text-slate-900"
        >
          <FiMail />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center md:text-right">
        <p className="text-[0.9rem] text-slate-500">
          © 2026 Sewak Dhakal. All rights reserved.
        </p>
      </div>

    </footer>
  );
}