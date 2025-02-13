"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import {FloatingNav} from "@/components/ui/floating-navbar";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";
import WorkExperience from "@/components/WorkExperience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { navItems } from "@/data";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate waiting for animations & DOM (Replace with actual checks)
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
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
    </>
  );
}
