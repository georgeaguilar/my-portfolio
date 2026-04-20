"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function SoccerBall() {
  const ballRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const rotation = useRef(0);
  const animFrame = useRef<number>(0);
  const [active, setActive] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    pos.current = { x: window.innerWidth - 80, y: window.innerHeight - 80 };
    if (ballRef.current) {
      ballRef.current.style.left = `${pos.current.x}px`;
      ballRef.current.style.top = `${pos.current.y}px`;
    }
    setInitialized(true);
  }, []);

  const animate = useCallback(() => {
    const gravity = 0.55;
    const friction = 0.992;
    const bounceDamp = 0.65;
    const size = 48;

    vel.current.y += gravity;
    vel.current.x *= friction;

    pos.current.x += vel.current.x;
    pos.current.y += vel.current.y;

    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;

    if (pos.current.x <= 0) {
      pos.current.x = 0;
      vel.current.x = Math.abs(vel.current.x) * bounceDamp;
    }
    if (pos.current.x >= maxX) {
      pos.current.x = maxX;
      vel.current.x = -Math.abs(vel.current.x) * bounceDamp;
    }
    if (pos.current.y <= 0) {
      pos.current.y = 0;
      vel.current.y = Math.abs(vel.current.y) * bounceDamp;
    }
    if (pos.current.y >= maxY) {
      pos.current.y = maxY;
      vel.current.y = -Math.abs(vel.current.y) * bounceDamp;
      vel.current.x *= bounceDamp;
    }

    const speed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);
    rotation.current += vel.current.x * 2;

    if (ballRef.current) {
      ballRef.current.style.left = `${pos.current.x}px`;
      ballRef.current.style.top = `${pos.current.y}px`;
      ballRef.current.style.transform = `rotate(${rotation.current}deg)`;
    }

    if (speed > 0.4) {
      animFrame.current = requestAnimationFrame(animate);
    } else {
      setActive(false);
    }
  }, []);

  const kick = useCallback(() => {
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    vel.current = {
      x: (Math.random() - 0.5) * 24,
      y: -(Math.random() * 18 + 12),
    };
    setActive(true);
    animFrame.current = requestAnimationFrame(animate);
  }, [animate]);

  useEffect(() => {
    return () => { if (animFrame.current) cancelAnimationFrame(animFrame.current); };
  }, []);

  if (!initialized) return null;

  return (
    <div
      ref={ballRef}
      onClick={kick}
      title="Click me!"
      className="fixed z-50 text-4xl select-none transition-transform"
      style={{
        cursor: active ? "default" : "pointer",
        filter: active ? "drop-shadow(0 8px 16px rgba(0,0,0,0.3))" : "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
        left: pos.current.x,
        top: pos.current.y,
      }}
    >
      ⚽
    </div>
  );
}
