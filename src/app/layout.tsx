import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jorge Aguilar — Full Stack Developer",
  description:
    "Full Stack Developer with 3+ years of experience building scalable web platforms using React, Vue, NestJS, Golang, and cloud services.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(!t&&d))document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
