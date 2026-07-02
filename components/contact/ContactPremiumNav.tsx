"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";

const PREMIUM_NAV_ITEMS = [
  { name: "Overview", href: "#overview" },
  { name: "Technology", href: "#technology" },
  { name: "Intelligence", href: "#intelligence" },
  { name: "Optics", href: "#optics" },
  { name: "Contact", href: "#contact" },
];

export function ContactPremiumNav() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        const direction = current - scrollYProgress.getPrevious()!;
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-x-0 top-8 z-50 mx-auto flex max-w-fit items-center justify-center gap-2 space-x-4 rounded-full border border-[#A34F22]/20 bg-[#050505]/70 backdrop-blur-xl py-2 pl-8 pr-2 shadow-[0_0_40px_rgba(0,0,0,0.5),0_0_1px_rgba(163,79,34,0.15)]"
      >
        <span className="text-sm font-bold tracking-tight text-white/90 mr-4 select-none">
          TRIUNO
        </span>

        {PREMIUM_NAV_ITEMS.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="relative flex items-center space-x-1 text-white/40 hover:text-[#D58A3A] transition-colors duration-200"
          >
            <span className="hidden text-sm sm:block">{item.name}</span>
          </Link>
        ))}

        <Link href="#contact">
          <button className="relative rounded-full border border-[#A34F22]/30 px-5 py-2 text-sm font-semibold text-white hover:border-[#A34F22]/60 hover:shadow-[0_0_20px_rgba(163,79,34,0.2)] transition-all duration-300 cursor-pointer">
            <span>Contact TRIUNO</span>
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-[#A34F22] to-transparent" />
          </button>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
