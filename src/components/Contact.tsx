const contactLinks = [
  {
    label: "Email",
    value: "georgeaguilar11@hotmail.com",
    href: "mailto:georgeaguilar11@hotmail.com",
    color: "indigo",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jaguilardev",
    href: "https://linkedin.com/in/jaguilardev",
    color: "sky",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/georgeaguilar",
    href: "https://github.com/georgeaguilar",
    color: "purple",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+504 9570 0336",
    href: "tel:+50495700336",
    color: "green",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-950/40", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-100 dark:border-indigo-900", hover: "hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-indigo-500/10" },
  sky:    { bg: "bg-sky-50 dark:bg-sky-950/40",       text: "text-sky-600 dark:text-sky-400",       border: "border-sky-100 dark:border-sky-900",     hover: "hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-sky-500/10" },
  purple: { bg: "bg-purple-50 dark:bg-purple-950/40", text: "text-purple-600 dark:text-purple-400", border: "border-purple-100 dark:border-purple-900", hover: "hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-purple-500/10" },
  green:  { bg: "bg-green-50 dark:bg-green-950/40",   text: "text-green-600 dark:text-green-400",   border: "border-green-100 dark:border-green-900",   hover: "hover:border-green-300 dark:hover:border-green-700 hover:shadow-green-500/10" },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-indigo-400/15 dark:bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-10 -left-20 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2">
            Let&apos;s work together
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Get in{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-indigo-600 to-purple-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — CTA text */}
          <div className="animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
              Open to new opportunities and interesting projects
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open. I&apos;ll do my best to get back to you as soon as possible.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Available for freelance &amp; full-time roles
              </span>
            </div>
          </div>

          {/* Right — contact cards */}
          <div
            className="animate-fade-in-right grid grid-cols-1 sm:grid-cols-2 gap-4"
            style={{ animationDelay: "0.2s" }}
          >
            {contactLinks.map((link, i) => {
              const c = colorMap[link.color];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`animate-fade-in-up group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border shadow-md shadow-black/8 dark:shadow-none transition-all hover:-translate-y-1 hover:shadow-xl ${c.border} ${c.hover}`}
                  style={{ animationDelay: `${0.2 + i * 0.08}s` }}
                >
                  <div className={`shrink-0 w-12 h-12 rounded-xl ${c.bg} ${c.text} flex items-center justify-center`}>
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-0.5">{link.label}</p>
                    <p className={`text-sm font-semibold truncate ${c.text}`}>{link.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Jorge Aguilar. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </section>
  );
}
