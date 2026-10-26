import categories from "../utils/SkillsInfo";

export default function Skills() {
  const dailyTech = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "GitHub",
    "VS Code",
  ];

  return (
    <section
      id="skills"
      className="bg-[#f8f9fa] px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-[800px] text-center sm:mb-16">
          <div className="mb-3">
            <p className="text-sm font-semibold uppercase tracking-[1px] text-amber-500">
              Expertise
            </p>
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>

          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            My development toolkit, built through hands-on projects and
            continuous learning.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-amber-500/0 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 sm:p-8"
              >
                {/* Card Header */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-100 transition-colors duration-300 group-hover:bg-amber-500">
                    <Icon
                      size={25}
                      aria-hidden="true"
                      className="text-amber-500 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug text-gray-800 sm:text-xl">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="mt-1 text-sm text-gray-500">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="mb-5 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {item.technologies.map((techItem) => (
                    <span
                      key={techItem.name}
                      className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-gray-600 transition-all duration-300"
                    >
                      {techItem.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Daily Technologies */}
        <div className="px-2 py-8 text-center sm:px-6 sm:py-12">
          <h3 className="mb-3 text-xl font-semibold text-gray-800">
            Technologies I Work With Daily
          </h3>

          <p className="mx-auto mb-7 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            The tools and technologies I regularly use to build and improve web
            applications.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {dailyTech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
