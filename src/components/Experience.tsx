import Reveal from "./Reveal";

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
    <section id="experience" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-[var(--fg-muted)]">03</span>
          <h2 className="text-title font-bold">Experience</h2>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 pb-8 border-b border-[var(--line)] mb-2">
          <div>
            <h3 className="text-xl font-bold">Code Éxitos</h3>
            <p className="text-[var(--fg-muted)]">Software Developer</p>
          </div>
          <p className="font-mono text-sm text-[var(--fg-muted)]">
            San Pedro Sula, Honduras · 2022 — 2025
          </p>
        </Reveal>

        <div>
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.04}
              className="grid grid-cols-1 sm:grid-cols-[3rem_1fr] gap-2 sm:gap-8 py-8 border-b border-[var(--line)]"
            >
              <span className="font-mono text-sm text-[var(--fg-muted)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  {project.highlight && (
                    <span className="shrink-0 font-mono text-xs text-[var(--accent)]">
                      {project.highlight}
                    </span>
                  )}
                </div>
                <p className="text-[var(--fg-muted)] leading-relaxed mb-3">
                  {project.description}
                </p>
                <p className="font-mono text-xs text-[var(--fg-muted)] uppercase tracking-wide">
                  {project.tech.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
