"use client";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion} from "framer-motion";
import clsx from "clsx";
import { useRef } from "react";

interface ImpactMetricProps {
  label: string;
  value: number;
  suffix?: string;
  highlight?: boolean;
  className?: string;
}

const ImpactMetric: React.FC<ImpactMetricProps> = ({ label, value, suffix, highlight, className }) => {
    // Use `react-intersection-observer` for visibility tracking
    const { ref, inView } = useInView({
      triggerOnce: true, // Ensures animation only happens once
      rootMargin: "-50px 0px", // Start animation slightly before it's fully visible
    });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={clsx(
        "flex flex-col items-center space-y-2 text-center p-4 rounded-lg",
        highlight && "animate-glow",
        className
      )}
    >
      <h2 className={clsx(
        "text-3xl md:text-4xl font-bold text-white",
        highlight && "text-purple-400"
      )}>
        <CountUp end={value} duration={3} separator="," suffix={suffix} start={inView ? undefined : 0} />
      </h2>
      <p className="text-gray-300 text-sm md:text-lg">{label}</p>
    </motion.div>
  );
};

export default ImpactMetric;
