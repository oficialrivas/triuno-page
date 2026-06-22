"use client";

import { DotWave } from "@/components/ui/dot-wave";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FlipWords } from "@/components/ui/flip-words";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";

function MagneticCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.5 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const maxOffsetX = 200;
    const maxOffsetY = 150;
    const dx = (e.clientX - centerX) / rect.width * maxOffsetX;
    const dy = (e.clientY - centerY) / rect.height * maxOffsetY;
    x.set(dx);
    y.set(dy);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center">
      <DotWave
        dotGap={20}
        dotRadiusMax={3}
        expansionSpeed={250}
        lightIntensity={0.6}
        fadeIntensity={0.1}
        className="w-full h-full absolute inset-0"
      >
        <div className="relative z-20 flex items-center justify-center w-full h-full">
          <div className="w-[250px] h-[250px] [transform-style:preserve-3d] animate-[roll_20s_linear_infinite]">
            <div className="absolute inset-0 [transform:translateZ(125px)]">
              <img src="/logo1.svg" alt="Triuno" className="w-full h-full object-contain" />
            </div>
            <div className="absolute inset-0 [transform:translateZ(-125px)]">
              <img src="/logo1.svg" alt="Triuno" className="w-full h-full object-contain" />
            </div>
            <div className="absolute inset-0 [transform:rotateY(-90deg) translateZ(125px)]">
              <img src="/logo1.svg" alt="Triuno" className="w-full h-full object-contain" />
            </div>
            <div className="absolute inset-0 [transform:rotateY(90deg) translateZ(125px)]">
              <img src="/logo1.svg" alt="Triuno" className="w-full h-full object-contain" />
            </div>
            <div className="absolute inset-0 [transform:rotateX(90deg) translateZ(125px)]">
              <img src="/logo1.svg" alt="Triuno" className="w-full h-full object-contain" />
            </div>
            <div className="absolute inset-0 [transform:rotateX(-90deg) translateZ(125px)]">
              <img src="/logo1.svg" alt="Triuno" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </DotWave>
      
      {/* Spotlight Card con efecto magnetico y sombra */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.8, ease: "easeOut" }}
        className="absolute left-8 md:left-16 top-[62%] -translate-y-1/2 z-30"
      >
        <MagneticCard>
          <div className="relative">
            <SpotlightCard className="w-72 h-44" spotlightColor="215, 80, 18">
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-lg font-semibold mb-1 text-white">Triuno</h3>
                <p className="text-xs text-neutral-400">
                  Inteligencia Digital & Escalabilidad
                </p>
              </div>
            </SpotlightCard>
            {/* Sombra sutil que se proyecta hacia abajo y se mueve con el card */}
            <div className="absolute -bottom-6 left-2 right-2 h-20 bg-gradient-to-b from-black/20 via-black/10 to-transparent blur-2xl pointer-events-none" />
          </div>
        </MagneticCard>
      </motion.div>

      {/* FlipWords - lado izquierdo, debajo del SpotlightCard */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
        className="absolute left-8 md:left-16 top-[77%] -translate-y-1/2 z-20"
      >
        <div className="text-7xl md:text-[11rem] font-medium tracking-tight uppercase leading-none" style={{ fontFamily: "var(--font-neue-montreal)" }}>
          <FlipWords
            words={["CODE"]}
            className="text-[var(--color-triuno-200)]"
          />
        </div>
      </motion.div>
      
      {/* Overlay gradient para difuminar hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-triuno-900)] to-transparent z-10 pointer-events-none" />

      {/* Spotlight Card derecho con efecto magnetico */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.2, duration: 0.8, ease: "easeOut" }}
        className="absolute right-8 md:right-16 top-[35%] -translate-y-1/2 z-30"
      >
        <MagneticCard>
          <div className="relative">
            <SpotlightCard className="w-72 h-44" spotlightColor="215, 80, 18">
              <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-lg font-semibold mb-1 text-white">Triuno</h3>
                <p className="text-xs text-neutral-400">
                  Inteligencia Digital & Escalabilidad
                </p>
              </div>
            </SpotlightCard>
            <div className="absolute -bottom-6 left-2 right-2 h-20 bg-gradient-to-b from-black/20 via-black/10 to-transparent blur-2xl pointer-events-none" />
          </div>
        </MagneticCard>
      </motion.div>

      {/* FlipWords - lado derecho, detrás del SpotlightCard */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.7, duration: 0.8, ease: "easeOut" }}
        className="absolute right-4 md:right-8 top-[54%] -translate-y-1/2 z-20"
      >
        <div className="flex flex-col items-end leading-none" style={{ fontFamily: "var(--font-neue-montreal)" }}>
          <div className="text-[9rem] font-normal tracking-tight uppercase">
            <FlipWords
              words={["AI"]}
              className="text-[var(--color-triuno-200)]"
            />
          </div>
          <div className="text-[9rem] font-normal tracking-tight uppercase">
            <FlipWords
              words={["Lab"]}
              className="text-[var(--color-triuno-200)]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
