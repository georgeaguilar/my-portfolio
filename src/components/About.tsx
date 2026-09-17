import Reveal from "./Reveal";

const stats = [
  { value: "4+", label: "Years of experience" },
  { value: "8+", label: "Projects delivered" },
  { value: "7", label: "Frameworks" },
  { value: "3", label: "Cloud platforms" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-[var(--fg-muted)]">01</span>
          <h2 className="text-title font-bold">About</h2>
        </Reveal>
        <div className="h-px bg-[var(--line)] mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <Reveal delay={0.1} className="space-y-6 max-w-[65ch]">
            <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
              I&apos;m a <span className="text-[var(--fg)] font-semibold">Full Stack Developer</span> with
              4+ years of experience building and scaling web platforms and mobile applications for clients
              across the U.S., Canada, and Honduras.
            </p>
            <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
              I&apos;ve worked across the full stack — from crafting responsive UIs with React and Vue,
              to building robust APIs with NestJS and Golang, deploying on AWS, Azure, and DigitalOcean.
            </p>
            <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
              Beyond development, I&apos;ve contributed to QA processes — writing end-to-end tests and
              helping validate APIs using tools like Cypress, Playwright, and Jest. I care about shipping
              software that actually works, not just software that compiles.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-[var(--accent-contrast)] text-sm font-medium transition-transform hover:-translate-y-0.5"
              >
                Get in touch
              </a>
              <a
                href="https://linkedin.com/in/jaguilardev"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--accent)] transition-colors"
              >
                LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border-t border-[var(--line)]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between py-5 border-b border-[var(--line)]"
                >
                  <p className="text-sm text-[var(--fg-muted)]">{stat.label}</p>
                  <p className="font-mono text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
