import Image from "next/image";
import SocialBtn from "./ui/social-button";

const Heroes = () => {
  return (
    <div className="flex items-center gap-2 bg-[url('/background.webp')] bg-cover pt-5">
      <div className="relative h-[11rem] min-w-[11rem] lg:h-[35rem] lg:w-[35rem]">
        <Image
          src="/ayan.webp"
          fill
          className="object-contain"
          alt="Ayan Ghosh"
        />
      </div>

      <div className="flex flex-col items-start gap-1 lg:gap-4">
        <h1 className="text-sm lg:text-3xl">
          Hi, I am <br />
          <span className="text-base lg:text-5xl">Ayan Ghosh</span>
        </h1>
        <p className="text-xs text-stone-500 lg:text-xl">
          I am very happy person. <br /> A passionate Web developer from India.
        </p>
        <div className="flex gap-2 lg:gap-4">
          <SocialBtn url="https://wa.me/7477446714?text=" src="/whatsapp.png" />
          <SocialBtn
            url="https://ayanonline.netlify.app/ayanghosh.dev@gmail.com"
            src="/gmail.png"
          />
          <SocialBtn
            url="https://www.linkedin.com/in/ayanonline/"
            src="/linkedin.png"
          />
          <SocialBtn url="https://github.com/ayanonline" src="/github.png" />
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1VU_2SL4q8vP1NZOeSs4t2gEXNaDSsoLU"
          className="lg:mt-4"
        >
          <button className="rounded-md bg-black p-2 text-xs text-white lg:px-4 lg:py-3">
            Download CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Heroes;
