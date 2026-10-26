import { NavLink } from "react-router-dom";

import ProjectCardComponents from "../components/ProjectCardComponents";
import projects from "../utils/ProjectsInfo";

export default function FeaturedProject() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section
      id="featuredProjects"
      className="px-4 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* Section Header */}
        <div className="mb-10 w-full px-1 text-center sm:mb-14 sm:px-0 lg:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-500 sm:text-sm sm:tracking-[1px]">
            Portfolio
          </p>

          <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-800 sm:mb-4 sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-6 text-gray-500 sm:max-w-2xl sm:text-base sm:leading-7 lg:text-lg">
            A selection of projects that showcase my skills in building modern,
            practical web applications with thoughtful design and real-world
            functionality.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 ? (
          <div className="grid w-full grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="min-w-0">
                <ProjectCardComponents project={project} />
              </div>
            ))}
          </div>
        ) : (
          <p className="py-8 text-center text-sm text-gray-500 sm:text-base">
            Featured projects will be available soon.
          </p>
        )}

        {/* View All Projects */}
        <div className="mt-8 flex w-full justify-center pt-4 sm:mt-12 sm:pt-6 lg:mt-16">
          <NavLink
            to="/projects"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-800 transition-colors duration-300 hover:text-orange-600 sm:gap-3 sm:text-base"
          >
            View All Projects
          </NavLink>
        </div>
      </div>
    </section>
  );
}