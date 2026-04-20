import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        {/* Text */}
        <div>
          <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Jorge Aguilar
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed">
            Building scalable web platforms and mobile apps with 4+ years of experience.
            Based in{" "}
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              San Pedro Sula, Honduras
            </span>
            .
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#experience"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/georgeaguilar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:georgeaguilar11@hotmail.com"
              aria-label="Email"
              className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full bg-indigo-600/10 dark:bg-indigo-400/10 scale-110" />
            <div className="absolute inset-0 rounded-full border-2 border-indigo-600/20 dark:border-indigo-400/20 scale-105" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src="/profile.JPG"
                alt="Jorge Aguilar"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
