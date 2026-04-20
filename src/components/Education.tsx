const degrees = [
  {
    degree: "Master's in Finance",
    school: "UNITEC",
    period: "2018 — 2021",
    icon: "🎓",
  },
  {
    degree: "Mechatronics Engineering",
    school: "UNITEC",
    period: "2012 — 2017",
    icon: "⚙️",
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
    <section id="education" className="relative py-20 sm:py-28 px-6 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-0 w-96 h-96 rounded-full bg-purple-400/10 dark:bg-purple-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-sky-400/10 dark:bg-sky-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-sm font-mono text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-2">
            My background
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Education &{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-indigo-600 to-purple-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Degrees */}
          <div className="animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-sm">🏛️</span>
              Academic Degrees
            </h3>
            <div className="space-y-4">
              {degrees.map((item, i) => (
                <div
                  key={item.degree}
                  className="animate-fade-in-up group flex gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md shadow-black/8 dark:shadow-none hover:border-indigo-200 dark:hover:border-indigo-800 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-950/60 dark:to-purple-950/60 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5">
                      {item.degree}
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-1">
                      {item.school}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.period} · San Pedro Sula, Honduras
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-sm">📜</span>
              Courses & Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-fade-in-up group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md shadow-black/8 dark:shadow-none hover:border-purple-200 dark:hover:border-purple-800 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/10"
                  style={{ animationDelay: `${0.3 + i * 0.07}s` }}
                >
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-950/60 dark:to-pink-950/60 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {cert.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-600 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
