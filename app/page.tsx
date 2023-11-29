import Contact from "@/components/contact";
import Heroes from "@/components/heroes";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-16">
      <Heroes />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
