import Image from "next/image";

const SkillCard = ({ name, icon }: any) => {
  return (
    <div className="flex w-[8rem] items-center justify-between rounded-lg border p-2 shadow-lg lg:w-[15rem] lg:px-4 lg:py-3">
      <div className="relative h-6 w-6 lg:h-20 lg:w-20">
        <Image src={icon} fill alt="skill icon" />
      </div>
      <p className="text-sm lg:text-xl">{name}</p>
    </div>
  );
};

export default SkillCard;
