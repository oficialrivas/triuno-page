"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DotWaveProps {
  dotGap?: number;
  dotRadiusMax?: number;
  expansionSpeed?: number;
  lightIntensity?: number;
  fadeIntensity?: number;
  className?: string;
  children?: React.ReactNode;
}

export const DotWave: React.FC<DotWaveProps> = ({
  dotGap = 20,
  dotRadiusMax = 3,
  expansionSpeed = 250,
  lightIntensity = 0.4,
  fadeIntensity = 0.08,
  className,
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cols = Math.floor(canvas.width / dotGap);
      const rows = Math.floor(canvas.height / dotGap);
      
      // Center offsets
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * dotGap;
          const y = j * dotGap;

          // Calculate distance from center to create wave effect
          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
          
          // Wave calculation
          const wave = Math.sin(dist / expansionSpeed - time) * 0.5 + 0.5;
          const radius = wave * dotRadiusMax;
          
          // Fade calculation based on distance and lightIntensity
          const alpha = Math.max(0.05, wave * lightIntensity - (dist * fadeIntensity * 0.001));

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          // Usando uno de los colores naranjas del tema
          ctx.fillStyle = `rgba(215, 80, 18, ${alpha})`;
          ctx.fill();
        }
      }

      time += 0.02;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotGap, dotRadiusMax, expansionSpeed, lightIntensity, fadeIntensity]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
