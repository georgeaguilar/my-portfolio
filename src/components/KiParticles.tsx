"use client";

import { useEffect, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  bottom: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  type: "float" | "pulse";
}

const KI_COLORS = [
  "rgba(251,191,36,{a})",  // golden
  "rgba(251,146,60,{a})",  // orange
  "rgba(234,179,8,{a})",   // yellow
  "rgba(253,224,71,{a})",  // bright yellow
  "rgba(249,115,22,{a})",  // deep orange
];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const alpha = randomBetween(0.4, 0.9).toFixed(2);
    const colorTemplate = KI_COLORS[Math.floor(Math.random() * KI_COLORS.length)];
    return {
      id: i,
      x: randomBetween(0, 100),
      bottom: randomBetween(0, 30),
      size: randomBetween(4, 14),
      duration: randomBetween(3, 7),
      delay: randomBetween(0, 6),
      color: colorTemplate.replace("{a}", alpha),
      type: Math.random() > 0.7 ? "pulse" : "float",
    };
  });
}

export default function KiParticles() {
  const particles = useRef<Particle[]>(generateParticles(28));

  useEffect(() => {}, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {particles.current.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: `${p.bottom}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.size}px ${p.color}`,
            animation:
              p.type === "pulse"
                ? `kiPulse ${p.duration}s ease-in-out ${p.delay}s infinite`
                : `kiFloat ${p.duration}s ease-in ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
