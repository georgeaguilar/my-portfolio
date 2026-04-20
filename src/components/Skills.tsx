const skillCategories = [
  {
    title: "Frontend",
    icon: "🖥️",
    color: "indigo",
    skills: ["React", "Vue", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "ApexCharts"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "purple",
    skills: ["NestJS", "Golang", "Node.js", "Express.js", ".NET"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    color: "sky",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Testing",
    icon: "🧪",
    color: "green",
    skills: ["Cypress", "Playwright", "Jest"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    color: "orange",
    skills: ["Docker", "AWS", "Azure", "DigitalOcean", "GitHub Actions"],
  },
  {
    title: "Languages",
    icon: "💬",
    color: "pink",
    skills: ["TypeScript", "JavaScript", "C#"],
  },
  {
    title: "AI Tools",
    icon: "🤖",
    color: "violet",
    skills: ["Claude Code", "Cursor"],
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
  purple: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  sky:    "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800",
  green:  "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
  orange: "bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  pink:   "bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-800",
  violet: "bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
};

const cardBorderMap: Record<string, string> = {
  indigo: "hover:border-indigo-300 dark:hover:border-indigo-700",
  purple: "hover:border-purple-300 dark:hover:border-purple-700",
  sky:    "hover:border-sky-300 dark:hover:border-sky-700",
  green:  "hover:border-green-300 dark:hover:border-green-700",
  orange: "hover:border-orange-300 dark:hover:border-orange-700",
  pink:   "hover:border-pink-300 dark:hover:border-pink-700",
  violet: "hover:border-violet-300 dark:hover:border-violet-700",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-pink-400/10 dark:bg-pink-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2">
            What I work with
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            My{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-indigo-600 to-purple-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className={`animate-fade-in-up group relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 ${cardBorderMap[category.color]} transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${colorMap[category.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
