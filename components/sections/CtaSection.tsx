"use client";

import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-24 px-4 relative bg-[var(--color-triuno-900)] border-t border-[var(--color-triuno-800)]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-triuno-700)]/20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-12 md:p-16 rounded-3xl bg-[var(--color-triuno-800)] border border-[var(--color-triuno-500)]/50 shadow-[0_0_40px_var(--color-triuno-600)/30] relative overflow-hidden"
        >
          {/* Inner animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-triuno-900)] via-transparent to-[var(--color-triuno-800)] opacity-50" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para transformar <br className="hidden md:block" /> tu ecosistema digital?
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
              Contáctanos para una auditoría de arquitectura o para comenzar a desarrollar tu próximo gran producto con tecnología de primer nivel.
            </p>
            
            <button className="px-10 py-5 rounded-full bg-gradient-to-r from-[var(--color-triuno-300)] to-[var(--color-triuno-100)] text-white font-bold text-lg shadow-[0_0_20px_var(--color-triuno-400)] hover:shadow-[0_0_35px_var(--color-triuno-200)] hover:scale-105 transition-all duration-300">
              Contactar a un Arquitecto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
