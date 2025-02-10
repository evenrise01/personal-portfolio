import React from 'react'
import Image from "next/image";
import { Timeline } from './ui/timeline'


const WorkExperience = () => {
  return (
    <div className='py-20'>
      <Timeline data={[{
      title: "Early 2025 - Present",
      content: (
        <div>
          <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">Frontend Engineer</h1>
          <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
          After transitioning into frontend development, I focused on building interactive, performant, and scalable web experiences. I'm now crafting cutting-edge digital solutions with React, Next.js, and modern web technologies.
          </p>    
          <div className="grid grid-cols-2 gap-4">
          <Image
              src="/b4.svg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/b4.svg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/b4.svg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/b4.svg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
        title: "Late 2024",
        content: (
          <div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">Transition from Product Manager to Frontend Developer</h1>
          <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
          With a deep understanding of product thinking, I leveraged my experience in project and product management to shift into frontend development. I focused on learning modern frameworks, honing my problem-solving skills, and contributing to impactful web applications.
          </p>  
            <div className="grid grid-cols-2 gap-4">
            <Image
              src="/b1.svg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/b1.svg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/b1.svg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/b1.svg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            </div>
          </div>
        ),
      },
      {
        title: "2023 - 2024",
        content: (
          <div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">Transition from Product Manager to Frontend Developer</h1>
          <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
          Led cross-functional teams, ensuring seamless collaboration between developers, designers, and stakeholders. Oversaw multiple projects, optimizing workflows, improving user experience, and launching impactful features.
          </p>  
            <div className="grid grid-cols-2 gap-4">

            </div>
          </div>
        ),
      },
      {
        title: "2023",
        content: (
          <div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">Graduated with a CS Degree</h1>
          <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
          Strengthened my foundation in algorithms, data structures, and software engineering principles, paving the way for my journey in AI, product management, and frontend development.
          </p>  
            <div className="grid grid-cols-2 gap-4">

            </div>
          </div>
        ),
      },
      {
        title: "2021 - 2023",
        content: (
          <div>
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">AI Training Intern at Wysa</h1>
          <p className="text-[#A0A3B1] text-sm md:text-base lg:text-lg font-normal mb-8">
          Worked on AI-driven mental health solutions, fine-tuning machine learning models to enhance conversational AI. Gained deep insights into NLP, AI ethics, and product development.
          </p>  
            <div className="grid grid-cols-2 gap-4">

            </div>
          </div>
        ),
      }]}/>
    </div>
  )
}

export default WorkExperience
