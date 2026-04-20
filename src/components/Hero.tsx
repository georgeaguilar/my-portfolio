import Image from "next/image";
import KiParticles from "./KiParticles";

const techBadges = ["React", "Vue", "NestJS", "Golang", "TypeScript", "AWS"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-400/20 dark:bg-indigo-600/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-400/20 dark:bg-purple-600/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-sky-400/10 dark:bg-sky-600/10 blur-3xl pointer-events-none" />

      {/* Ki energy particles */}
      <KiParticles />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20">

        {/* Text */}
        <div>
          {/* Available badge */}
          <div
            className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-green-700 dark:text-green-400">
              Open to opportunities
            </span>
          </div>

          <p
            className="animate-fade-in-up text-sm font-mono text-indigo-600 dark:text-indigo-400 mb-3 tracking-widest uppercase"
            style={{ animationDelay: "0.2s" }}
          >
            Hello, I&apos;m
          </p>

          <h1
            className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Jorge Aguilar
            </span>
          </h1>

          <h2
            className="animate-fade-in-up text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 flex items-center gap-2"
            style={{ animationDelay: "0.4s" }}
          >
            Full Stack Developer
            <span className="animate-blink text-indigo-500 dark:text-indigo-400">|</span>
          </h2>

          <p
            className="animate-fade-in-up text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-6 leading-relaxed"
            style={{ animationDelay: "0.5s" }}
          >
            Building scalable web platforms and mobile apps with 4+ years of experience.
            Based in{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              San Pedro Sula, Honduras
            </span>
            .
          </p>

          {/* Tech badges */}
          <div
            className="animate-fade-in-up flex flex-wrap gap-2 mb-8"
            style={{ animationDelay: "0.6s" }}
          >
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="animate-fade-in-up flex flex-wrap gap-4 mb-10"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#experience"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div
            className="animate-fade-in-up flex items-center gap-6"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://github.com/georgeaguilar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:-translate-y-0.5 inline-block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/jaguilardev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:-translate-y-0.5 inline-block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:georgeaguilar11@hotmail.com"
              aria-label="Email"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:-translate-y-0.5 inline-block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Photo */}
        <div
          className="animate-fade-in-right flex justify-center lg:justify-end"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative animate-float mx-10 sm:mx-12">
            {/* Spinning gradient ring */}
            <div className="absolute -inset-3 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow opacity-70 blur-sm" />
            <div className="absolute -inset-3 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40" />

            {/* Photo */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 animate-pulse-glow">
              <Image
                src="/profile.JPG"
                alt="Jorge Aguilar"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badge — experience */}
            <div className="absolute -bottom-4 -left-10 bg-white dark:bg-gray-900 rounded-xl px-3 py-2 shadow-xl border border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
              <p className="text-base font-bold text-indigo-600 dark:text-indigo-400">4+ Years</p>
            </div>

            {/* Floating badge — projects */}
            <div className="absolute -top-4 -right-10 bg-white dark:bg-gray-900 rounded-xl px-3 py-2 shadow-xl border border-gray-100 dark:border-gray-800">
              <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
              <p className="text-base font-bold text-purple-600 dark:text-purple-400">8+</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
