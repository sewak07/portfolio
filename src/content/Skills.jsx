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
      className="bg-[#f8f9fa] px-4 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-[800px] px-1 text-center sm:mb-14 sm:px-0 lg:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-500 sm:text-sm sm:tracking-[1px]">
            Expertise
          </p>

          <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-800 sm:mb-4 sm:text-4xl lg:text-5xl">
            Skills &amp; Technologies
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-6 text-gray-500 sm:max-w-2xl sm:text-base sm:leading-7 lg:text-lg">
            My development toolkit, built through hands-on projects and
            continuous learning.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="mb-12 grid grid-cols-1 gap-5 sm:mb-16 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group min-w-0 rounded-2xl border border-transparent bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 sm:p-6 lg:p-8"
              >
                {/* Card Header */}
                <div className="mb-5 flex items-center gap-3 sm:mb-6 sm:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 transition-colors duration-300 group-hover:bg-amber-500 sm:h-14 sm:w-14">
                    <Icon
                      size={23}
                      aria-hidden="true"
                      className="text-amber-500 transition-colors duration-300 group-hover:text-white sm:hidden"
                    />

                    <Icon
                      size={25}
                      aria-hidden="true"
                      className="hidden text-amber-500 transition-colors duration-300 group-hover:text-white sm:block"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="break-words text-base font-semibold leading-snug text-gray-800 sm:text-xl">
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="mb-5 text-sm leading-6 text-gray-500 sm:mb-6">
                    {item.description}
                  </p>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {item.technologies.map((techItem) => (
                    <span
                      key={techItem.name}
                      className="max-w-full break-words rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1.5 text-xs font-medium text-neutral-600 transition-colors sm:py-1"
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
        <div className="px-1 py-6 text-center sm:px-6 sm:py-10 lg:py-12">
          <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-800 sm:text-xl lg:text-2xl">
            Technologies I Work With Daily
          </h3>

          <p className="mx-auto mb-6 max-w-xl px-1 text-sm leading-6 text-gray-500 sm:mb-7 sm:px-0 sm:text-base sm:leading-7">
            The tools and technologies I regularly use to build and improve web
            applications.
          </p>

          <div className="flex flex-wrap justify-center gap-2 px-0 sm:gap-3 lg:gap-4">
            {dailyTech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:text-base"
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