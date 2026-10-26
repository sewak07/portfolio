import { NavLink } from "react-router-dom";
import ProjectCardComponents from "../components/ProjectCardComponents";
import projects from "../utils/ProjectsInfo";

export default function FeaturedProject() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section
      id="featuredProjects"
      className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* Section Header */}
        <div className="mb-12 w-full text-center sm:mb-16">
          <div className="mb-3">
            <p className="text-sm font-semibold uppercase tracking-[1px] text-amber-500">
              Portfolio
            </p>
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            A selection of projects that showcase my skills in building modern,
            practical web applications with thoughtful design and real-world
            functionality.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid w-full grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredProjects.map((project) => (
            <div key={project.title} className="min-w-0">
              <ProjectCardComponents project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="mt-12 flex w-full justify-center pt-8 sm:mt-16">
          <NavLink
            to="/projects"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-slate-800 transition-colors duration-300 hover:text-orange-600 sm:text-base"
          >
            View All Projects
          </NavLink>
        </div>
      </div>
    </section>
  );
}
