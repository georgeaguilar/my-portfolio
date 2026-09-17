import Reveal from "./Reveal";

const contactLinks = [
  {
    label: "Email",
    value: "georgeaguilar11@hotmail.com",
    href: "mailto:georgeaguilar11@hotmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jaguilardev",
    href: "https://linkedin.com/in/jaguilardev",
  },
  {
    label: "GitHub",
    value: "github.com/georgeaguilar",
    href: "https://github.com/georgeaguilar",
  },
  {
    label: "Phone",
    value: "+504 9570 0336",
    href: "tel:+50495700336",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-[var(--fg-muted)]">05</span>
          <h2 className="text-title font-bold">Get in touch</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <a
            href="mailto:georgeaguilar11@hotmail.com"
            className="group inline-block text-[clamp(1.75rem,6vw,4rem)] font-bold leading-tight tracking-tight break-all hover:text-[var(--accent)] transition-colors"
          >
            georgeaguilar11@hotmail.com
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-4 max-w-lg text-[var(--fg-muted)] leading-relaxed">
          Whether you have a project in mind, want to collaborate, or just want to say hi —
          my inbox is always open. I&apos;ll do my best to get back to you as soon as possible.
        </Reveal>

        <Reveal delay={0.15} className="flex items-center gap-2 mt-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-label text-[var(--fg-muted)]">
            Available for freelance &amp; full-time roles
          </span>
        </Reveal>

        <div className="mt-16 border-t border-[var(--line)]">
          {contactLinks.map((link, i) => (
            <Reveal key={link.label} delay={0.2 + i * 0.04}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 py-5 border-b border-[var(--line)] hover:text-[var(--accent)] transition-colors"
              >
                <span className="font-mono text-xs text-[var(--fg-muted)] uppercase tracking-wide w-24 shrink-0">
                  {link.label}
                </span>
                <span className="flex-1 text-sm font-medium truncate">{link.value}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4 text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--fg-muted)]">
        <p>© {new Date().getFullYear()} Jorge Aguilar. All rights reserved.</p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </section>
  );
}
