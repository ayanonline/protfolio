import Image from "next/image";

const SkillCard = ({ name, icon }: any) => {
  return (
    <div className="flex w-[15rem] items-center justify-between rounded-lg border px-4 py-3 shadow-lg">
      <div className="relative h-20 w-20">
        <Image src={icon} fill alt="skill icon" />
      </div>
      <p className="lg:text-xl">{name}</p>
    </div>
  );
};

export default SkillCard;
