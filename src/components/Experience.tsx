const projects = [
  {
    title: "Job Placement Platform",
    description:
      "Developed and optimized a scalable web platform for a U.S. client used by over 500,000 users, designed to streamline job placement by connecting professionals with hiring companies.",
    tech: ["React", "NestJS", "AWS"],
    highlight: "500K+ users",
  },
  {
    title: "Vehicle Sales Platform",
    description:
      "Worked on a vehicle sales platform for a Canadian client, focusing on enhancing the user experience and optimizing the overall performance of the application.",
    tech: ["Vue", "NestJS", "AWS"],
  },
  {
    title: "Enterprise Management Platform",
    description:
      "Contributed to an internal enterprise platform to centralize company data and built analytics dashboards to visualize key business metrics for data-driven decision-making.",
    tech: ["Vue", "NestJS", "Azure"],
  },
  {
    title: "Event Attendee Registration App",
    description:
      "Created a mobile application for event attendee registration incorporating barcode scanning and manual data entry for an improved user experience.",
    tech: ["React Native", "NestJS", "Next.js", "DigitalOcean"],
  },
  {
    title: "Electric Vehicle Rental & Sales Platform",
    description:
      "Designed and developed a platform for renting and selling electric vehicles, integrating payments and improving the infrastructure to provide efficient and secure services.",
    tech: ["Golang", "DigitalOcean"],
  },
  {
    title: "Interactive Medical Event Apps",
    description:
      "Implemented interactive applications for medical events, integrating multimedia content and quizzes to increase attendee engagement.",
    tech: ["Next.js", "DigitalOcean"],
  },
  {
    title: "Time-Tracking Platform Migration",
    description:
      "Worked on migrating a time-tracking web application for a U.S. client, contributing to the platform's growth from 100,000 to over 1 million users.",
    tech: ["NuxtJS", ".NET", "AWS"],
    highlight: "100K → 1M+ users",
  },
  {
    title: "GitHub Actions Analytics Dashboard",
    description:
      "Developed an internal dashboard to monitor and visualize GitHub Actions across all company repositories, providing centralized insights into CI/CD workflows and performance metrics.",
    tech: ["Vue", "Django", "DigitalOcean"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2">
            Where I&apos;ve worked
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-indigo-600 to-purple-600" />
        </div>

        {/* Company header */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-12 p-6 rounded-2xl bg-linear-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-100 dark:border-indigo-900"
          style={{ animationDelay: "0.1s" }}
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Code Éxitos</h3>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">Software Developer</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            San Pedro Sula, Honduras
            <span className="mx-2">·</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            2022 — 2025
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-indigo-400 via-purple-400 to-pink-400 opacity-30 dark:opacity-20" />

          <div className="space-y-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="animate-fade-in-up relative pl-12"
                style={{ animationDelay: `${0.1 + i * 0.07}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-white dark:bg-gray-950 border-2 border-indigo-400 dark:border-indigo-600 flex items-center justify-center shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                </div>

                {/* Card */}
                <div className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md shadow-black/8 dark:shadow-none hover:border-indigo-200 dark:hover:border-indigo-800 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    {project.highlight && (
                      <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        🚀 {project.highlight}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
