import Image from "next/image";

const ProjectCard = ({ data }: { data: any }) => {
  return (
    <div className="relative m-4 flex h-[20rem] w-[20rem] flex-col items-center justify-center gap-4 rounded-md border-2 bg-white p-4 lg:h-[25rem] lg:w-[20rem]">
      <div className="relative h-[10rem] w-[10rem] lg:h-[20rem] lg:w-[20rem]">
        <Image
          src={data?.img}
          fill
          className="object-contain"
          alt="Project image"
        />
      </div>
      <h1 className="text-xl font-semibold">{data?.title}</h1>
      <p className="px-3 text-center">{data?.desc}</p>
      <a
        href={data?.url}
        target="blank"
        className="w-full cursor-pointer rounded-md bg-black px-4 py-3 text-center text-white"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
