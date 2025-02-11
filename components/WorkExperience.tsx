"use client"
import React from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Timeline } from "./ui/timeline";
import ImpactMetric from "./ui/impact-metric";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";

const WorkExperience = () => {
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-100px 0px" });
  return (
    <div className="py-20">
      <Timeline
        data={[
          {
            title: "Early 2025 - Present",
            content: (
              <div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  Frontend Engineer
                </h1>
                <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
                  After transitioning into frontend development, I focused on
                  building interactive, performant, and scalable web
                  experiences. I'm now crafting cutting-edge digital solutions
                  with React, Next.js, and modern web technologies.
                </p>
                <div className="grid grid-cols-2 gap-4"></div>
              </div>
            ),
          },
          {
            title: "Late 2024",
            content: (
              <div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                  Transition from Product Manager to Frontend Developer
                </h1>
                <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
                  With a deep understanding of product thinking, I leveraged my
                  experience in project and product management to shift into
                  frontend development. I focused on learning modern frameworks,
                  honing my problem-solving skills, and contributing to
                  impactful web applications.
                </p>
                <div className="grid grid-cols-2 gap-4"></div>
              </div>
            ),
          },
          {
            title: "2023 - 2024",
            content: (
              <div>
                <h1 ref = {sectionRef} className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  Product Manager
                </h1>
                <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
                  Led cross-functional teams, ensuring seamless collaboration
                  between developers, designers, and stakeholders. Oversaw
                  multiple projects, optimizing workflows, improving user
                  experience, and launching impactful features.
                </p>
                <div className="grid grid-cols-2 gap-6 text-center bg-[#0B0C10] p-10 rounded-xl text-[#A0A3B1]">
                  <ImpactMetric
                    label="Conversations Improved"
                    value={50000}
                    suffix="+"
                    className="mt-4"
                  />
                  <ImpactMetric
                    label="Stakeholder Complaints Reduced"
                    value={90}
                    suffix="%"
                    className="mt-4"
                  />
                  <ImpactMetric
                    label="Bug Fixes for Better UX"
                    value={100}
                    suffix="+"
                    className="mt-4"
                  />
                  <ImpactMetric
                    label="Major Contract Renewed"
                    value={1}
                    suffix=""
                    className="mt-4"
                  />
                </div>
              </div>
            ),
          },
          {
            title: "2023",
            content: (
              <div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  Graduated with a CS Degree
                </h1>
                <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
                  Strengthened my foundation in algorithms, data structures, and
                  software engineering principles, paving the way for my journey
                  in AI, product management, and frontend development.
                </p>
                <div className="grid grid-cols-2 gap-4"></div>
              </div>
            ),
          },
          {
            title: "2021 - 2023",
            content: (
              <div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  AI Training Intern at Wysa
                </h1>
                <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
                  Worked on AI-driven mental health solutions, fine-tuning
                  machine learning models to enhance conversational AI. Gained
                  deep insights into NLP, AI ethics, and product development.
                </p>
                <div className="grid grid-cols-2 gap-4"></div>
              </div>
            ),
          },
        ]}
      />
      <div className="flex flex-col items-center">
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="View Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkExperience;
