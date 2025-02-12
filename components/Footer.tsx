"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/magic-button";
import { FlipWords } from "./ui/flip-words";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* Background Grid */}
      <Image
        src="/footer-grid.svg"
        alt="Footer background grid"
        layout="fill"
        objectFit="cover"
        className="absolute left-0 -bottom-72 opacity-50 pointer-events-none"
      />

      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-normal text-[#A0A3B1]">
          Ready to craft{" "}
          <FlipWords words={["beautiful", "modern", "creative", "interactive"]} />
          <br />
          experiences for{" "}
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-400 bg-clip-text text-transparent">
            your
          </span>{" "}
          website?
        </h2>

        <p className="text-gray-300 md:mt-10 mt-5 text-lg py-6">
          Reach out today, and let's discuss how I can help achieve your goals.
        </p>

        <a href="" className="pt-8">
          <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 py-4 w-full">
        <p className="text-sm md:text-base font-light">
          © 2025 Daksh Singh
        </p>

        <div className="flex items-center gap-6 md:gap-3 py-4">
          {socialMedia.map(({ id, img }) => (
            <div
              key={id}
              className="w-10 h-10 flex justify-center items-center bg-black-200 bg-opacity-75 rounded-lg border border-black-300 backdrop-blur-lg"
            >
              <Image src={img} alt="Social media icon" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
