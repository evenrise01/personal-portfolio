import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/magic-button";
import { FlipWords } from "./ui/flip-words";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
      <div className="text-4xl mx-auto font-normal text-[#A0A3B1] items-center justify-center md:text-5xl text-center">
      Ready to craft
        <FlipWords words={['beautiful','modern','creative','interactive']}/><br/>
        experiences for <span className="bg-clip-text text-transparent"
  style={{
    backgroundImage:
      "linear-gradient(90deg, #7B1FA2, #D500F9)",
  }}>your</span> website?
        </div>
        <p className="text-white-200 md:mt-10 my-5 text-center py-4">
       
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center py-4 md:py-2">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Daksh Singh
        </p>

        <div className="flex items-center md:gap-3 gap-6 py-4 md:py-2">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;