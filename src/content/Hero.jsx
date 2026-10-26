import LinkComponent from "../components/LinkComponent";
import {
  FiArrowDown,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-20 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-4 py-6 text-center md:mt-[100px] md:min-h-[calc(100vh-96px)] md:px-5 md:py-10"
    >
      {/* Availability Badge */}
      <div className="mb-6 rounded-full bg-orange-100 px-3.5 py-1.5 text-[13px] font-medium text-orange-500 md:mb-8 md:px-4 md:text-sm">
        <h4>Available for opportunities</h4>
      </div>

      {/* Name and Introduction */}
      <div className="name">
        <p className="text-[40px] font-extrabold leading-[1.15] tracking-[-1px] text-slate-900 sm:text-5xl md:text-[56px] md:leading-[1.1]">
          Hi, I'm{" "}
          <span className="text-orange-500">Sewak Dhakal</span>
        </p>
      </div>

      {/* Personal Description */}
      <div className="mt-[18px] w-full max-w-[350px] sm:max-w-[460px] md:mt-6 md:max-w-[500px]">
        <p className="text-base leading-[1.6] text-slate-500 md:text-lg md:leading-[1.7]">
          A passionate Software Developer crafting elegant solutions and
          building scalable applications that make a difference.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row sm:gap-4 md:mt-10">
        <a
          href="#projects"
          className="inline-flex w-full max-w-[320px] origin-center items-center justify-center rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white no-underline transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-orange-600 hover:shadow-[0_8px_25px_rgba(249,115,22,0.35)] sm:w-auto"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="inline-flex w-full max-w-[320px] items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-3.5 font-semibold text-slate-900 no-underline transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-orange-500 hover:text-orange-500 sm:w-auto"
        >
          Get In Touch
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-9 flex items-center gap-5 md:mt-12 md:gap-6">
        <LinkComponent
          link="https://github.com/sewak07"
          target="_blank"
          rel="noreferrer"
          name={<FiGithub size={24} />}
          className="text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900"
        />

        <LinkComponent
          link="https://x.com/aizewak"
          target="_blank"
          rel="noreferrer"
          name={<FiTwitter size={24} />}
          className="text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900"
        />

        <LinkComponent
          link="https://www.linkedin.com/in/sewak-dhakal"
          target="_blank"
          rel="noreferrer"
          name={<FiLinkedin size={24} />}
          className="text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-slate-900"
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-8 inline-block text-2xl text-slate-400 md:mt-10">
        <a
          href="#projects"
          aria-label="Scroll to projects"
          className="inline-block animate-bounce text-inherit no-underline"
        >
          <FiArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}