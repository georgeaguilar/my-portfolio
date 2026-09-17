import Reveal from "./Reveal";

const degrees = [
  {
    degree: "Master's in Finance",
    school: "UNITEC",
    period: "2018 — 2021",
  },
  {
    degree: "Mechatronics Engineering",
    school: "UNITEC",
    period: "2012 — 2017",
  },
];

const certifications = [
  { name: "Full-Stack Engineer Career Path", issuer: "Codecademy", url: "https://www.codecademy.com/profiles/jorgeAguilar9508987673/certificates/5f7e644d833c070013ef47c4" },
  { name: "Learn JavaScript Course", issuer: "Codecademy", url: "https://www.codecademy.com/profiles/jorgeAguilar9508987673/certificates/3a62023b0054dc793edc0adecd715fd7" },
  { name: "Learn HTML Course", issuer: "Codecademy", url: "https://www.codecademy.com/profiles/jorgeAguilar9508987673/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7" },
  { name: "Learn Responsive Design Course", issuer: "Codecademy", url: "https://www.codecademy.com/profiles/jorgeAguilar9508987673/certificates/705dcb15de0da4dd9d9fc4f3274b430e" },
  { name: "C#: Start Your Journey in the Language", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-6b50c874-7191-4181-9ddd-29214c5798ff/" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="flex items-baseline gap-4 mb-16">
          <span className="font-mono text-sm text-[var(--fg-muted)]">04</span>
          <h2 className="text-title font-bold">Education &amp; Certifications</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Reveal className="font-mono text-sm text-[var(--fg-muted)] uppercase tracking-wide mb-4">
              Academic degrees
            </Reveal>
            <div className="border-t border-[var(--line)]">
              {degrees.map((item, i) => (
                <Reveal
                  key={item.degree}
                  delay={0.05 + i * 0.05}
                  className="flex items-baseline justify-between gap-4 py-5 border-b border-[var(--line)]"
                >
                  <div>
                    <h4 className="font-semibold mb-0.5">{item.degree}</h4>
                    <p className="text-sm text-[var(--fg-muted)]">{item.school}</p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-[var(--fg-muted)]">{item.period}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal className="font-mono text-sm text-[var(--fg-muted)] uppercase tracking-wide mb-4">
              Courses &amp; certifications
            </Reveal>
            <div className="border-t border-[var(--line)]">
              {certifications.map((cert, i) => (
                <Reveal key={cert.name} delay={0.05 + i * 0.04}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-4 border-b border-[var(--line)]"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate group-hover:text-[var(--accent)] transition-colors">
                        {cert.name}
                      </p>
                      <p className="text-xs text-[var(--fg-muted)]">{cert.issuer}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4 text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
