import Image from "next/image";

const ProjectCard = ({ data }: { data: any }) => {
  return (
    <div className="relative m-2 flex w-[20rem] flex-col items-center justify-center gap-1 rounded-md border-2 bg-white p-6 lg:m-4 lg:w-[28rem] lg:gap-4">
      <div className="relative min-h-[10rem] w-[17rem] lg:h-[20rem] lg:w-[20rem]">
        <Image
          src={data?.img}
          fill
          className="object-contain"
          alt="Project image"
        />
      </div>
      <h1 className="text-sm font-semibold lg:text-xl">{data?.title}</h1>
      <p className="px-3 text-center text-xs lg:text-base">{data?.desc}</p>
      <a
        href={data?.url}
        target="blank"
        className="w-full cursor-pointer rounded-md bg-black px-4 py-3 text-center text-xs text-white lg:text-base"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
