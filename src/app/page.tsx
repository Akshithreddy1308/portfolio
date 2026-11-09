import { Loader } from "@/components/layout/Loader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

function Divider() {
  return (
    <div aria-hidden className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Divider />
        <Skills />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Achievements />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
