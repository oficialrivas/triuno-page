"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="relative w-full py-24 px-4 bg-[var(--color-triuno-900)]" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-[var(--color-triuno-200)]">Servicios</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Soluciones tecnológicas diseñadas para impulsar la transformación digital y automatización de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-[var(--color-triuno-800)] border border-[var(--color-triuno-600)] hover:border-[var(--color-triuno-400)] transition-colors duration-300 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[var(--color-triuno-500)]/20 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-triuno-900)] flex items-center justify-center mb-6 shadow-[0_0_15px_var(--color-triuno-600)] group-hover:shadow-[0_0_20px_var(--color-triuno-300)] transition-shadow duration-300 text-[var(--color-triuno-200)]">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
