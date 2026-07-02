"use client";

import React from "react";
import { motion } from "framer-motion";

export function ContactFormSection() {
  return (
    <section className="relative min-h-screen py-24 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0A0806] to-[#120804]" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(163,79,34,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #C46A2A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact TRIUNO
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Agenda una consultoría de seguridad estratégica con nuestro equipo
            de expertos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-[1px] bg-gradient-to-br from-[#A34F22]/30 via-[#C46A2A]/10 to-[#A34F22]/20"
        >
          <div className="rounded-3xl bg-[#0A0806]/80 backdrop-blur-xl p-8 md:p-12 lg:p-16">
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                boxShadow:
                  "inset 0 1px 1px rgba(255,255,255,0.05), inset 0 -1px 1px rgba(0,0,0,0.5), 0 40px 80px -20px rgba(0,0,0,0.8)",
              }}
            />

            <form
              className="relative z-10 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                    Nombre / Name
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/90 placeholder-white/20 text-sm outline-none focus:border-[#A34F22]/50 focus:shadow-[0_0_20px_rgba(163,79,34,0.1)] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                    Empresa / Company
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/90 placeholder-white/20 text-sm outline-none focus:border-[#A34F22]/50 focus:shadow-[0_0_20px_rgba(163,79,34,0.1)] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                    Correo electrónico / Email
                  </label>
                  <input
                    type="email"
                    placeholder="correo@empresa.com"
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/90 placeholder-white/20 text-sm outline-none focus:border-[#A34F22]/50 focus:shadow-[0_0_20px_rgba(163,79,34,0.1)] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                    Teléfono / Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/90 placeholder-white/20 text-sm outline-none focus:border-[#A34F22]/50 focus:shadow-[0_0_20px_rgba(163,79,34,0.1)] transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                  Mensaje / Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe tus necesidades de seguridad..."
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/90 placeholder-white/20 text-sm outline-none focus:border-[#A34F22]/50 focus:shadow-[0_0_20px_rgba(163,79,34,0.1)] transition-all duration-300 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#A34F22] to-[#C46A2A] text-white font-semibold text-sm tracking-wide shadow-[0_0_30px_rgba(163,79,34,0.3)] hover:shadow-[0_0_50px_rgba(163,79,34,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  Contact TRIUNO
                </button>
                <button
                  type="button"
                  className="px-8 py-4 rounded-xl border border-[#A34F22]/20 text-white/70 font-semibold text-sm tracking-wide hover:border-[#A34F22]/40 hover:text-white hover:bg-[#A34F22]/5 transition-all duration-300"
                >
                  Solicitar una evaluación estratégica
                </button>
              </div>
            </form>

            <div className="mt-10 pt-8 border-t border-white/[0.05]">
              <p className="text-xs text-white/25 text-center leading-relaxed">
                Diseñado para infraestructura crítica, seguridad corporativa,
                operaciones de inteligencia y entornos de protección ejecutiva.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
