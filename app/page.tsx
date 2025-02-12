import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

// Dynamically import client components
const Grid = dynamic(() => import("@/components/Grid"));
const RecentProject = dynamic(() => import("@/components/RecentProject"));
const WorkExperience = dynamic(() => import("@/components/WorkExperience"));
const Approach = dynamic(() => import("@/components/Approach"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2 bg-[#0B0C10]">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <WorkExperience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
