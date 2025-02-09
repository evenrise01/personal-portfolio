import { WavyBackground } from "./ui/wavy-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { heroWords } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 pt-10">
      {/* Typewriter Effect Hero page with wavy animated background */}
      <div>
        <WavyBackground className="max-w-4xl mx-auto pb-40">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TypewriterEffectSmooth
              words={heroWords}
              className="text-center justify-center"
            />
            <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-4xl">
              <TextGenerateEffect
                words="Hi! I'm Daksh, a Next.js Developer based in India."
                duration={4}
              />
            </div>
          </div>
        </WavyBackground>
      </div>
    </div>
  );
};

export default Hero;
