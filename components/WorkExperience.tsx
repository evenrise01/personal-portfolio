"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { Timeline } from "./ui/timeline";
import ImpactMetric from "./ui/impact-metric";
import MagicButton from "./ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";

// Define types for ImpactMetric properties
interface Metric {
  label: string;
  value: number;
  suffix?: string;
}

// Define props for ExperienceItem component
interface ExperienceItemProps {
  role: string;
  description: string;
  metrics?: Metric[];
}

const WorkExperience: React.FC = () => {
  return (
    <section id="resume" className="py-20">
      <Timeline
        data={[
          {
            title: "Early 2025 - Present",
            content: (
              <ExperienceItem
                role="Frontend Engineer"
                description="After transitioning into frontend development, I focused on
                building interactive, performant, and scalable web experiences.
                I'm now crafting cutting-edge digital solutions with React,
                Next.js, and modern web technologies."
              />
            ),
          },
          {
            title: "Late 2024",
            content: (
              <ExperienceItem
                role="Transition from Product Manager to Frontend Developer"
                description="With a deep understanding of product thinking, I leveraged my
                experience in project and product management to shift into
                frontend development. I focused on learning modern frameworks,
                honing my problem-solving skills, and contributing to impactful
                web applications."
              />
            ),
          },
          {
            title: "2023 - 2024",
            content: (
              <ExperienceItem
                role="Product Manager at Wysa"
                description="Led cross-functional teams, ensuring seamless collaboration
                between developers, designers, and stakeholders. Oversaw
                multiple projects, optimizing workflows, improving user
                experience, and launching impactful features."
                metrics={[
                  { label: "Workflows optimized", value: 4, suffix: "+" },
                  { label: "Stakeholder Complaints Reduced", value: 90, suffix: "%" },
                  { label: "Projects delivered", value: 5, suffix: "+" },
                  { label: "Major Contract Renewed", value: 1 },
                ]}
              />
            ),
          },
          {
            title: "2023",
            content: (
              <ExperienceItem
                role="Graduated with a CS Degree"
                description="Strengthened my foundation in algorithms, data structures, and
                software engineering principles, paving the way for my journey
                in AI, product management, and frontend development."
              />
            ),
          },
          {
            title: "2021 - 2023",
            content: (
              <ExperienceItem
                role="AI Training Intern at Wysa"
                description="Worked on AI-driven mental health solutions, fine-tuning
                machine learning models to enhance conversational AI. Gained
                deep insights into NLP, AI ethics, and product development."
                metrics={[
                  { label: "Conversations Improved", value: 50000, suffix: "+" },
                  { label: "Model Aptness Improved", value: 20, suffix: "+" },
                  { label: "Bug Fixes for Better UX", value: 100, suffix: "+" },
                  { label: "Models tagged for accuracy", value: 25, suffix: "+" },
                ]}
              />
            ),
          },
        ]}
      />
      <div className="flex flex-col items-center">
        <a href="">
          <MagicButton title="View Resume" icon={<FaLocationArrow />} position="right" />
        </a>
      </div>
    </section>
  );
};

// Reusable Experience Item Component
const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, description, metrics = [] }) => {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-50px 0px" });

  return (
    <div ref={ref} className={`transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
      <h1 className="font-bold lg:text-2xl md:text-xl text-base">{role}</h1>
      <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">{description}</p>
      {metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-6 text-center bg-[#0B0C10] p-10 rounded-xl text-[#A0A3B1]">
          {metrics.map((metric: Metric, index: number) => (
            <ImpactMetric key={index} label={metric.label} value={metric.value} suffix={metric.suffix} className="mt-4" />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
