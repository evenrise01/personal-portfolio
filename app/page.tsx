import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import WorkExperience from "@/components/WorkExperience";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
<main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2 bg-[#0B0C10]">
  <div className="max-w-7xl w-full">
  <FloatingNav navItems={navItems}/>
    <Hero/>
    <Grid/>
    <RecentProject/>
    <WorkExperience/>
    <Approach/>
    <Footer/>
  </div>
</main>
  );
}
