import {FaGithub} from "react-icons/fa";

export default function ProjectCardComponents({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5">
      {/* Project Image */}
      <div className="overflow-hidden bg-neutral-100">
        <img
          src={project.img}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-neutral-900 transition-colors group-hover:text-orange-600">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="mt-auto mt-6 flex flex-wrap items-center gap-4 border-t border-neutral-100 pt-5">
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-none px-4 py-2.5 text-sm font-semibold text-neutral-500 transition-colors hover:text-orange-500"
          >
            <FaGithub /> View Code 
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition-colors hover:text-orange-600"
            >
              Live Demo 
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
