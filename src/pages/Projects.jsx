import { useEffect, useState } from "react";
import { FaFolderOpen } from "react-icons/fa";

import projects from "../utils/ProjectsInfo.js";
import ProjectCardComponents from "../components/ProjectCardComponents";

export default function Projects() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header
        className={`fixed left-0 top-0 z-[1000] flex w-full items-center justify-between border-b-2 px-5 py-[18px] transition-all duration-300 ease-in-out md:px-8 md:py-6 ${
          scrolled
            ? "border-gray-200 bg-white/70 backdrop-blur-[10px]"
            : "border-transparent bg-white/0 backdrop-blur-none"
        }`}
      >
        <div className="header-logo">
          <h2 className="ml-0 text-[22px] font-bold tracking-[-0.5px] md:ml-[100px] md:text-2xl">
            <a
              href="./"
              className="text-inherit no-underline after:text-orange-500 after:content-['.']"
            >
              Sewak
            </a>
          </h2>
        </div>
      </header>

      {/* Projects Section */}
      <section
        id="project-list"
        className="scroll-mt-24 px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <p className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-orange-600 sm:text-sm">
              <span className="h-[2px] w-8 bg-orange-500" />

              Portfolio

              <span className="h-[2px] w-8 bg-orange-500" />
            </p>

            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Projects I Worked On
            </h1>

            <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
              A selection of projects that showcase my skills in building
              modern, practical web applications with thoughtful design and
              real-world functionality.
            </p>
          </div>

          {/* Project Cards */}
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {projects.map((project) => (
                <div key={project.title} className="min-w-0">
                  <ProjectCardComponents project={project} />
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center sm:py-20">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50">
                <FaFolderOpen
                  size={28}
                  className="text-orange-500"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                Projects coming soon
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600 sm:text-base">
                I'm working on new ideas and building projects. Check back
                soon to see what's next.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}