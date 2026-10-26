import LinkComponent from "../components/LinkComponent";
import {
  FiArrowDown,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mt-20 px-5 py-12 sm:px-8 sm:py-16 md:mt-[100px] md:min-h-[calc(100vh-96px)] md:px-10 lg:flex lg:items-center lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        {/* Right: Portrait on Mobile, Right Side on Desktop */}
        <div className="relative order-1 mx-auto w-full max-w-[360px] sm:max-w-[410px] lg:order-2 lg:max-w-[440px] xl:max-w-[480px]">
          {/* Soft Orange Glow */}
          <div className="absolute left-1/2 top-[46%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/60 blur-3xl sm:h-[360px] sm:w-[360px]" />

          {/* Main Orange Circle */}
          <div className="absolute left-1/2 top-[46%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 sm:h-[310px] sm:w-[310px] lg:h-[340px] lg:w-[340px]" />

          {/* Decorative Dots */}
          <div className="pointer-events-none absolute inset-0">
            <span className="absolute left-[8%] top-[13%] h-3 w-3 rounded-full bg-orange-500" />
            <span className="absolute left-[18%] top-[7%] h-2 w-2 rounded-full bg-slate-900" />
            <span className="absolute left-[27%] top-[16%] h-2.5 w-2.5 rounded-full bg-orange-300" />

            <span className="absolute right-[17%] top-[8%] h-3 w-3 rounded-full bg-slate-900" />
            <span className="absolute right-[7%] top-[19%] h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="absolute right-[4%] top-[32%] h-3 w-3 rounded-full bg-orange-300" />

            <span className="absolute left-[5%] top-[35%] h-2.5 w-2.5 rounded-full bg-slate-900" />
            <span className="absolute left-[12%] top-[49%] h-2 w-2 rounded-full bg-orange-500" />
            <span className="absolute right-[9%] top-[49%] h-2.5 w-2.5 rounded-full bg-slate-800" />

            <span className="absolute left-[17%] bottom-[19%] h-3 w-3 rounded-full bg-orange-300" />
            <span className="absolute right-[17%] bottom-[16%] h-2.5 w-2.5 rounded-full bg-orange-500" />
            <span className="absolute right-[6%] bottom-[27%] h-2 w-2 rounded-full bg-slate-900" />
          </div>

          {/* Portrait */}
          <div className="relative z-10 flex h-[350px] items-end justify-center sm:h-[460px] lg:h-[500px]">
            <img
              src={`${import.meta.env.BASE_URL}sewakdhakal.png`}
              alt="Sewak Dhakal, Fullstack Developer"
              fetchPriority="high"
              className="h-full w-full object-contain object-bottom drop-shadow-[0_12px_12px_rgba(15,23,42,0.15)]"
            />
          </div>

          {/* Floating Caption */}
          <div className="absolute bottom-5 left-0 z-20 rounded-xl border border-slate-100 bg-white/95 px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur sm:-left-4 sm:px-5">
            <p className="text-sm font-bold text-slate-900">
              Fullstack Software Developer
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Turning ideas into reality
            </p>
          </div>
        </div>

        {/* Left: Introduction on Mobile, Left Side on Desktop */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          {/* Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-[13px] font-medium text-orange-600 sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            <h4>Available for opportunities</h4>
          </div>

          {/* Name */}
          <h1 className="text-[40px] font-extrabold leading-[1.15] tracking-[-1px] text-slate-900 sm:text-5xl md:text-[56px] md:leading-[1.1] lg:text-[60px] xl:text-[68px]">
            Hi, I'm
            <span className="mt-1 block text-orange-500">
              Sewak Dhakal
            </span>
          </h1>

          {/* Introduction */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 md:text-lg">
            A passionate Software Developer crafting elegant solutions
            and building scalable applications that make a difference.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex w-full flex-col items-center gap-3.5 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#featuredProjects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white no-underline transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-orange-600 hover:shadow-[0_8px_25px_rgba(249,115,22,0.3)] sm:w-auto"
            >
              View My Work
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-900 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500 sm:w-auto"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-6 md:mt-10">
            <LinkComponent
              link="https://github.com/sewak07"
              target="_blank"
              rel="noreferrer"
              name={<FiGithub size={23} />}
              className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"
            />

            <LinkComponent
              link="https://x.com/aizewak"
              target="_blank"
              rel="noreferrer"
              name={<FiTwitter size={23} />}
              className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"
            />

            <LinkComponent
              link="https://www.linkedin.com/in/sewak-dhakal-7a0b4b1b3"
              target="_blank"
              rel="noreferrer"
              name={<FiLinkedin size={23} />}
              className="text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:text-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#featuredProjects"
        aria-label="Scroll to featured projects"
        className="absolute bottom-3 left-1/2 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 text-slate-400 no-underline transition-all duration-300 hover:border-orange-300 hover:text-orange-500 md:flex"
      >
        <FiArrowDown size={20} />
      </a>
    </section>
  );
}