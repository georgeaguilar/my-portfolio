import Image from "next/image";
import Reveal from "./Reveal";

const techBadges = ["React", "Vue", "NestJS", "Golang", "TypeScript", "AWS"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <Reveal className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-label text-[var(--fg-muted)]">
              Open to opportunities
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-display font-bold">
              Full Stack
              <br />
              Developer
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 font-mono text-sm text-[var(--fg-muted)]">
            Jorge Aguilar — San Pedro Sula, Honduras
          </Reveal>

          <Reveal delay={0.15} className="mt-6 max-w-lg text-lg text-[var(--fg-muted)] leading-relaxed">
            Building scalable web platforms and mobile apps with 4+ years of
            experience.
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-[var(--fg-muted)] uppercase tracking-wide">
            {techBadges.map((tech, i) => (
              <span key={tech} className="flex items-center gap-3">
                {tech}
                {i < techBadges.length - 1 && <span className="text-[var(--line)]">·</span>}
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#experience"
              className="inline-flex items-center px-6 py-3 bg-[var(--accent)] text-[var(--accent-contrast)] font-medium text-sm transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--accent)] transition-colors"
            >
              Contact me
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/cv-jorge-aguilar.pdf"
              download
              className="group inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--accent)] transition-colors"
            >
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={0.3} className="mt-10 flex items-center gap-6">
            <a
              href="https://github.com/georgeaguilar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/jaguilardev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:georgeaguilar11@hotmail.com"
              aria-label="Email"
              className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:max-w-none overflow-hidden rounded-lg">
            <Image
              src="/profile.JPG"
              alt="Jorge Aguilar"
              fill
              className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>

          <div className="absolute -bottom-px left-0 right-0 flex justify-between px-4 py-3 bg-[var(--bg)]/90 backdrop-blur-sm border-t border-[var(--line)]">
            <div>
              <p className="text-label text-[var(--fg-muted)]">Experience</p>
              <p className="font-mono text-sm font-bold">4+ years</p>
            </div>
            <div className="text-right">
              <p className="text-label text-[var(--fg-muted)]">Projects</p>
              <p className="font-mono text-sm font-bold">8+</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
