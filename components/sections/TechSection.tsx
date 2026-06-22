"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Docker", 
  "Node.js", "GraphQL", "PostgreSQL", "Redis", "AWS"
];

export function TechSection() {
  return (
    <section className="py-24 px-4 bg-[var(--color-triuno-900)] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-12">
          Stack Tecnológico <span className="text-[var(--color-triuno-300)]">Moderno</span>
        </h2>
        
        {/* Simple Marquee-like grid for demo purposes */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-full bg-[var(--color-triuno-800)] border border-[var(--color-triuno-600)] text-neutral-300 font-medium text-sm md:text-base shadow-[0_0_10px_var(--color-triuno-900)] hover:border-[var(--color-triuno-400)] hover:text-white hover:shadow-[0_0_15px_var(--color-triuno-500)] transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
