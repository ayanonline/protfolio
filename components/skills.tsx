import Link from "next/link";
import SkillCard from "./skill-card";

const Skills = () => {
  const skills = [
    {
      name: "Javascript",
      icon: "/js.png",
    },
    {
      name: "React Js",
      icon: "/react.png",
    },
    {
      name: "Next Js",
      icon: "/next.svg",
    },
    {
      name: "TailwindCSS",
      icon: "/tailwind.png",
    },
  ];
  return (
    <section>
      <h1 className="flex w-full justify-center py-5 font-semibold lg:text-2xl">
        My Skills
      </h1>
      <div className="mx-10 mb-5 flex flex-wrap justify-center gap-2 lg:gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
      <Link
        href="/skills"
        className="mx-auto flex w-fit hover:underline first-letter:hover:text-blue-500 lg:text-xl"
      >
        View all skills
      </Link>
    </section>
  );
};

export default Skills;
