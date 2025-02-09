import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { navItems } from "@/data";

export default function Home() {
  return (
<main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-2 bg-[#0B0C10]">
  <div className="max-w-7xl w-full">
  <FloatingNav navItems={navItems}/>
    <Hero/>
    <Grid/>
  </div>
</main>
  );
}
