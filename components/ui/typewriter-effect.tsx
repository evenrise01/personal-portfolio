"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = useMemo(
    () =>
      words.map((word) => ({
        ...word,
        text: word.text.split(""),
      })),
    [words]
  );

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1, width: "fit-content" },
        { duration: 0.3, delay: stagger(0.2), ease: "easeInOut" }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              className={cn("dark:text-white text-black opacity-0 hidden", word.className)}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("text-xl md:text-3xl lg:text-5xl font-bold text-center", className)}>
      {renderWords()}
      <BlinkingCursor cursorClassName={cursorClassName} />
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = useMemo(
    () =>
      words.map((word) => ({
        ...word,
        text: word.text.split(""),
      })),
    [words]
  );

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <span key={`char-${index}`} className={cn("dark:text-white text-black", word.className)}>
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2 transform-gpu"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div className="text-xl md:text-3xl lg:text-5xl xl:text-5xl font-bold" style={{ whiteSpace: "nowrap" }}>
          {renderWords()}
        </div>
      </motion.div>
      <BlinkingCursor cursorClassName={cursorClassName} />
    </div>
  );
};

const BlinkingCursor = ({ cursorClassName }: { cursorClassName?: string }) => {
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let frameId: number;
    const blinkCursor = () => {
      setCursorVisible((prev) => !prev);
      frameId = requestAnimationFrame(() => setTimeout(blinkCursor, 500));
    };
    frameId = requestAnimationFrame(blinkCursor);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <motion.span
      className={cn("block rounded-sm w-[5px] h-7 md:h-10 xl:h-14 bg-[#38B6FF]", cursorClassName, {
        "opacity-100": cursorVisible,
        "opacity-0": !cursorVisible,
      })}
    ></motion.span>
  );
};
