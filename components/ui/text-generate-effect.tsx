"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(0.2) }
    );
  }, [wordsArray]); // Depend on wordsArray to ensure updates

  return (
    <div className={cn("font-normal", className)}>
      <motion.div ref={scope} className="text-center dark:text-white text-black text-sm md:text-lg lg:text-xl">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0"
            style={{ filter: filter ? "blur(10px)" : "none" }}
            aria-hidden="true" // Improves accessibility
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
