"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onLoaded }: { onLoaded: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeOut(true), 3000); // Simulate loading time
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={fadeOut ? onLoaded : undefined}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50"
    >
      <motion.div
        className="text-white text-2xl font-bold"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        🚀 Loading your experience...
      </motion.div>
    </motion.div>
  );
}
