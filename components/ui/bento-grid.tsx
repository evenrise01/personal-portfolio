"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import GridGlobe from "./grid-globe";
import MagicButton from "./magic-button";
import { BackgroundGradientAnimation } from "./background-gradient";
import animationData from "@/data/confetti.json";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}>
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
  const rightLists = useMemo(() => ["NextJS", "ReactJS"], []);

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
        backgroundColor: "linear-gradient(90deg, rgba(10,10,15,1) 0%, rgba(30,30,40,1) 50%, rgba(70,70,80,1) 100%)",
      }}
    >
      {/* Image & Background */}
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full relative`}>
        {img && (
          <Image src={img} alt="Bento image" className={cn(imgClassName, "object-cover object-center")} layout="fill" />
        )}

        {spareImg && (
          <Image src={spareImg} alt="Spare image" className="absolute right-0 -bottom-5 object-cover w-full h-full opacity-80" width={220} height={220} />
        )}

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
        <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
          <p className="text-[#C1C2D3] font-sans font-extralight text-sm md:max-w-32 md:text-xs lg:text-base">{description}</p>
          <h3 className="font-sans text-lg lg:text-3xl max-w-96 font-bold">{title}</h3>

          {id === 2 && <GridGlobe />}

          {/* Tech stack list */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {[leftLists, rightLists].map((list, index) => (
                <div key={index} className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  {list.map((item, i) => (
                    <span key={i} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg bg-[#10132E]" />
                </div>
              ))}
            </div>
          )}

          {/* Copy email button */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">{copied && <Lottie options={defaultOptions} height={200} width={400} />}</div>
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
