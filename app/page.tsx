import Heroes from "@/components/heroes";
import Projects from "@/components/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-20">
      <Heroes />
      <Projects />
    </main>
  );
}
