"use client";

import { useEffect, useRef } from "react";

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; radius: number; color: string }[] = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
      });
    }

    function drawStars() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
        });
      }
    }

    function animateStars() {
      drawStars();
      stars.forEach((star) => {
        star.y += 0.05;
        if (canvas && star.y > canvas.height) star.y = 0;
      });
      requestAnimationFrame(animateStars);
    }

    animateStars();

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
  );
}
