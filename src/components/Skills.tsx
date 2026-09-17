import Reveal from "./Reveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Vue", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "ApexCharts"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "Golang", "Node.js", "Express.js", ".NET"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Testing",
    skills: ["Cypress", "Playwright", "Jest"],
  },
  {
    title: "Tools & platforms",
    skills: ["Docker", "AWS", "Azure", "DigitalOcean", "GitHub Actions"],
  },
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C#"],
  },
  {
    title: "AI tools",
    skills: ["Claude Code", "Cursor"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-[var(--fg-muted)]">02</span>
          <h2 className="text-title font-bold">Skills</h2>
        </Reveal>

        <div className="border-t border-[var(--line)]">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={i * 0.05}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-[var(--line)]"
            >
              <h3 className="shrink-0 sm:w-40 font-mono text-sm text-[var(--fg-muted)] uppercase tracking-wide">
                {category.title}
              </h3>
              <p className="text-base leading-relaxed">
                {category.skills.join(" · ")}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
