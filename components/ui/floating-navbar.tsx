"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string; // Should be the section ID (e.g., "#projects", "#about")
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(() => scrollYProgress.get() < 0.05);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (current === undefined) return;
    const prev = scrollYProgress.getPrevious() ?? current;
    const direction = current - prev;
    setVisible(current < 0.05 || direction < 0);
  });

  // 🔹 Smooth scrolling function
  const handleScroll = (event: React.MouseEvent, id: string) => {
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg dark:bg-[#0B0C10] bg-white shadow-lg z-[5000] px-8 py-4 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={idx}
            onClick={(event) => handleScroll(event, navItem.link)}
            className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm !cursor-pointer">{navItem.name}</span>
          </button>
        ))}
        {/* <button className="border text-sm font-medium relative border-white/[0.2] text-[#E0E0E0] px-4 py-2 rounded-full">
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
