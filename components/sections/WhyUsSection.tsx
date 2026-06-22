"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Arquitectura orientada a alta disponibilidad",
  "Optimización extrema de rendimiento (Web Vitals)",
  "Seguridad y encriptación de datos por diseño",
  "Escalabilidad horizontal mediante contenedores",
  "Código limpio, testeable y mantenible",
  "Diseño UI/UX de vanguardia, enfocado a conversión",
];

export function WhyUsSection() {
  return (
    <section className="py-24 px-4 bg-[var(--color-triuno-900)] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-triuno-500)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Por qué elegir <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-triuno-100)] to-[var(--color-triuno-400)]">
              Triuno
            </span>
          </h2>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
            No solo creamos software, construimos activos digitales diseñados para durar, escalar y generar impacto real en tu modelo de negocio.
          </p>
          
          <ul className="space-y-4">
            {benefits.map((benefit, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-neutral-300"
              >
                <CheckCircle2 className="text-[var(--color-triuno-200)] flex-shrink-0" size={20} />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* A futuristic abstract visual representation */}
          <div className="aspect-square md:aspect-video lg:aspect-square rounded-3xl border border-[var(--color-triuno-600)] bg-gradient-to-br from-[var(--color-triuno-800)] to-[var(--color-triuno-900)] p-8 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            {/* Animated rings */}
            <div className="absolute w-64 h-64 border border-[var(--color-triuno-500)]/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute w-48 h-48 border border-[var(--color-triuno-300)]/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute w-32 h-32 border border-[var(--color-triuno-100)]/50 rounded-full animate-[spin_5s_linear_infinite]" />
            
            {/* Core indicator */}
            <div className="w-16 h-16 bg-[var(--color-triuno-200)] rounded-full shadow-[0_0_50px_var(--color-triuno-100)] animate-pulse z-10" />
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="0" x2="50%" y2="50%" stroke="var(--color-triuno-400)" strokeWidth="1" />
              <line x1="100%" y1="0" x2="50%" y2="50%" stroke="var(--color-triuno-400)" strokeWidth="1" />
              <line x1="0" y1="100%" x2="50%" y2="50%" stroke="var(--color-triuno-400)" strokeWidth="1" />
              <line x1="100%" y1="100%" x2="50%" y2="50%" stroke="var(--color-triuno-400)" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
