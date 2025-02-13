"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import MagicButton from "./magic-button";
import { BackgroundGradientAnimation } from "./background-gradient";
import animationData from "@/data/confetti.json";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";
import Earth from "./globe";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const leftLists = useMemo(() => ["PostGre", "Express", "Typescript"], []);
  const rightLists = useMemo(() => ["NextJS", "ReactJS", "MongoDB"], []);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("dakshsingh.dev@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(10,10,15)",
        backgroundColor:
          "linear-gradient(90deg, rgba(10,10,15,1) 0%, rgba(30,30,40,1) 50%, rgba(70,70,80,1) 100%)",
      }}
    >
      {/* Image & Background */}
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation
            gradientBackgroundStart="#000000"
            gradientBackgroundEnd="#434343"
            firstColor="#2c2c54"
            secondColor="#1b1b2f"
            thirdColor="#3a3a60"
            fourthColor="#4e4e6a"
            fifthColor="#5a5a7a"
          />
        )}

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <p className="text-[#C1C2D3] font-sans font-extralight text-sm md:max-w-32 md:text-xs lg:text-base">
            {description}
          </p>
          <h3 className="font-sans text-lg lg:text-3xl max-w-96 font-bold">
            {title}
          </h3>

          {id === 5 && (
            <ShootingStars
              trailColor="#8A2BE2"
              starColor="#4B0082"
              starWidth={15}
              minSpeed={5}
              maxSpeed={12}
              minDelay={6500}
              starHeight={2}
            />
          )}
          {id === 5 && (
            <StarsBackground starDensity={0.0003} twinkleProbability={0.8} />
          )}
          
          {id === 2 && (
  <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
    <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
      {/* Gradient Background */}
      <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent z-40" />

      {/* Earth component shifted down */}
      <div className="absolute w-full h-72 md:h-full md:bottom-[-30px]">
        <Earth />
      </div>
    </div>
  </div>
)}


          {/* Tech stack list */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Copy email button */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                {copied && (
                  <Lottie options={defaultOptions} height={200} width={400} />
                )}
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
