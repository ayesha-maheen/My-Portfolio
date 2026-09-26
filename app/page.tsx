import Hero from "@/components/Hero";
import About from "@/components/AboutPreview";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ProjectsPreview from "@/components/ProjectsPreview";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Skills />

      <Experience />

      <ProjectsPreview />

      <Resume />

      <Contact />
    </>
  );
}