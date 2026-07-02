"use client";

import React from "react";

interface StoryBeat {
  id: string;
  headline: string;
  subheadline?: string;
  body: string;
  bullets?: string[];
  start: number;
  end: number;
  align?: "center" | "left";
}

const STORY_BEATS: StoryBeat[] = [
  {
    id: "hero",
    headline: "TRIUNO",
    subheadline: "See everything. Miss nothing.",
    body: "Inteligencia de vigilancia de grado empresarial, diseñada para entornos donde cada detalle importa.",
    start: 0,
    end: 0.15,
  },
  {
    id: "engineering",
    headline: "Precision-engineered for total awareness.",
    body: "Ópticas avanzadas, procesamiento de imágenes con IA y construcción industrial de grado premium entregan una fiabilidad excepcional. Cada componente está optimizado para claridad, durabilidad y operación continua.",
    start: 0.15,
    end: 0.40,
    align: "left",
  },
  {
    id: "ai",
    headline: "Intelligence that adapts in real time.",
    body: "",
    start: 0.40,
    end: 0.65,
    align: "left",
    bullets: [
      "Arquitectura multi-sensor que monitorea cada detalle.",
      "Análisis potenciado por IA que detecta eventos críticos al instante.",
      "Procesamiento en tiempo real que transforma video en inteligencia accionable.",
      "Diseñado para operaciones de seguridad proactivas.",
    ],
  },
  {
    id: "optics",
    headline: "Exceptional clarity. Day and night.",
    body: "Ópticas avanzadas que capturan detalle preciso en entornos complejos. Procesamiento de imágenes mejorado con IA que mejora visibilidad, nitidez y conciencia situacional en cada fotograma. Construido para observación de misión crítica.",
    start: 0.65,
    end: 0.85,
    align: "left",
  },
  {
    id: "cta",
    headline: "See more. Respond faster.",
    subheadline: "TRIUNO. Built for critical operations and intelligent security.",
    body: "Diseñado para infraestructura crítica, seguridad corporativa, operaciones de inteligencia y entornos de protección ejecutiva.",
    start: 0.85,
    end: 1.0,
  },
];

function getBeatOpacity(progress: number, start: number, end: number): number {
  const fadeIn = 0.03;
  const fadeOut = 0.03;

  if (progress < start || progress > end) return 0;

  const enter = Math.min((progress - start) / fadeIn, 1);
  const exit = Math.min((end - progress) / fadeOut, 1);

  return Math.min(enter, exit);
}

function StoryBeatOverlay({
  beat,
  progress,
}: {
  beat: StoryBeat;
  progress: number;
}) {
  const opacity = getBeatOpacity(progress, beat.start, beat.end);
  const translateY = opacity === 0 ? 30 : 0;

  if (opacity === 0) return null;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
      }}
    >
      <div
        className={`max-w-4xl mx-auto px-6 md:px-12 pointer-events-auto ${
          beat.align === "left" ? "text-left" : "text-center"
        }`}
      >
        {beat.id === "hero" ? (
          <>
            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #D58A3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {beat.headline}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white/80 mb-6">
              {beat.subheadline}
            </p>
            <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              {beat.body}
            </p>
          </>
        ) : beat.id === "cta" ? (
          <>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #C46A2A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {beat.headline}
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              {beat.subheadline}
            </p>
            <p className="text-sm md:text-base text-white/40 max-w-xl mb-10 leading-relaxed">
              {beat.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#A34F22] to-[#C46A2A] text-white font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(163,79,34,0.3)] hover:shadow-[0_0_50px_rgba(163,79,34,0.5)] hover:scale-105 transition-all duration-300"
              >
                Contact TRIUNO
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-[#A34F22]/30 text-white/70 font-semibold text-sm tracking-wide hover:border-[#A34F22]/60 hover:text-white hover:bg-[#A34F22]/10 transition-all duration-300"
              >
                Request a security consultation
              </a>
            </div>
          </>
        ) : (
          <>
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #D58A3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {beat.headline}
            </h2>
            {beat.body && (
              <p className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed mb-8">
                {beat.body}
              </p>
            )}
            {beat.bullets && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
                {beat.bullets.map((bullet, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C46A2A] mt-2 shrink-0" />
                    <span className="text-sm text-white/60">{bullet}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

interface ScrollStoryOverlaysProps {
  progress?: number;
}

export function ScrollStoryOverlays({ progress = 0 }: ScrollStoryOverlaysProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {STORY_BEATS.map((beat) => (
        <StoryBeatOverlay key={beat.id} beat={beat} progress={progress} />
      ))}
    </div>
  );
}
