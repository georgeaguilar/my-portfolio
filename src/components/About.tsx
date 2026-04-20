const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "8+", label: "Projects Delivered" },
  { value: "1M+", label: "Users Impacted" },
  { value: "3", label: "Cloud Platforms" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2">
            Get to know me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m a <span className="text-gray-900 dark:text-white font-semibold">Full Stack Developer</span> with
              4+ years of experience building and scaling web platforms and mobile applications for clients
              across the <span className="text-gray-900 dark:text-white font-semibold">U.S., Canada, and Honduras</span>.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;ve worked across the full stack — from crafting responsive UIs with{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">React</span> and{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">Vue</span>, to building robust
              APIs with <span className="text-indigo-600 dark:text-indigo-400 font-medium">NestJS</span> and{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">Golang</span>, deploying on{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">AWS</span>,{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">Azure</span>, and{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">DigitalOcean</span>.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My background in <span className="text-gray-900 dark:text-white font-semibold">Mechatronics Engineering</span> and
              a <span className="text-gray-900 dark:text-white font-semibold">Master&apos;s in Finance</span> gives me
              a unique perspective — I don&apos;t just write code, I understand the business impact behind it.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/jaguilardev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium rounded-lg transition-all hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 gap-4 animate-fade-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="relative group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
