import ProjectCard from "./project-card";

const Projects = () => {
  const projects = [
    {
      title: "Youtube Clone",
      desc: `I have created this Youtube clone app using REACT JS, redux-tool-kit, react-router-dom, tailwindCSS`,
      img: "/my-youtube.png",
      url: "https://youtube-ayan.netlify.app/",
    },
    {
      title: "Youtube video Downloader",
      desc: `I have created this youtube video downloader app using REACT JS & EXPRESS . In backend I used "ytdl-core" npm package.`,
      img: "/ytdownload.webp",
      url: "https://yt-download-ayan.netlify.app/",
    },
  ];

  return (
    <section className="bg-stone-200 py-5">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="text-xl font-semibold lg:text-2xl">Recent Projects</h1>
        <p>Some recent projects which I build using tranding technologies</p>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
