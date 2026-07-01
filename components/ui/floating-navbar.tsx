"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
  variant = "default",
  brandName = "TRIUNO",
  ctaLabel,
  ctaHref,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
  variant?: "default" | "premium";
  brandName?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const isPremium = variant === "premium";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-10 z-50 mx-auto flex max-w-fit items-center justify-center gap-2 space-x-4 rounded-full border py-2 pl-8 pr-2",
          isPremium
            ? "border-[#A34F22]/20 bg-[#050505]/70 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            : "border-transparent bg-white py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black",
          className
        )}
      >
        {isPremium && (
          <span className="text-sm font-bold tracking-tight text-white/90 mr-4 select-none">
            {brandName}
          </span>
        )}
        {navItems.map((navItem: { name: string; link: string; icon?: React.ReactNode }, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 transition-colors duration-200",
              isPremium
                ? "text-white/50 hover:text-[#D58A3A]"
                : "text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.name}</span>
          </Link>
        ))}
        {isPremium ? (
          <Link href={ctaHref || "/contacto"}>
            <button className="relative rounded-full border border-[#A34F22]/30 px-5 py-2 text-sm font-semibold text-white hover:border-[#A34F22]/60 hover:shadow-[0_0_20px_rgba(163,79,34,0.2)] transition-all duration-300 cursor-pointer">
              <span>{ctaLabel || "Contact TRIUNO"}</span>
              <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-[#A34F22] to-transparent" />
            </button>
          </Link>
        ) : (
          <button className="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white">
            <span>Login</span>
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
