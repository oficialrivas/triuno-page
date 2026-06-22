"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Análisis & Estrategia", desc: "Comprendemos el problema y definimos la arquitectura óptima." },
  { id: "02", title: "Diseño & UI/UX", desc: "Prototipado de alta fidelidad con enfoque en la experiencia de usuario." },
  { id: "03", title: "Desarrollo", desc: "Construcción iterativa con tecnologías modernas y código limpio." },
  { id: "04", title: "Testing & Validación", desc: "Pruebas exhaustivas de seguridad, rendimiento y funcionalidad." },
  { id: "05", title: "Despliegue & Escalabilidad", desc: "Lanzamiento a producción con pipelines automatizados." }
];

export function ProcessSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[var(--color-triuno-900)] to-[var(--color-triuno-800)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proceso de <span className="text-[var(--color-triuno-200)]">Trabajo</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Metodología ágil y orientada a resultados para asegurar el éxito en cada etapa del ciclo de vida del software.
          </p>
        </div>

        <div className="relative">
          {/* Linea central conectora (solo visible en desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-triuno-800)] via-[var(--color-triuno-400)] to-[var(--color-triuno-800)] -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Connector point */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-triuno-900)] border-2 border-[var(--color-triuno-300)] flex items-center justify-center text-[var(--color-triuno-100)] font-bold text-lg mb-6 z-10 shadow-[0_0_15px_var(--color-triuno-600)]">
                  {step.id}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
