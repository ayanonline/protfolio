import Image from "next/image";
import SocialBtn from "./ui/social-button";

const Heroes = () => {
  return (
    <div className="flex items-center gap-40 bg-[url('/background.webp')] bg-cover">
      <div className="relative h-[10rem] w-[10rem] lg:h-[35rem] lg:w-[35rem]">
        <Image
          src="/ayan.webp"
          fill
          className="object-contain"
          alt="Ayan Ghosh"
        />
      </div>

      <div className="flex flex-col items-start gap-4 ">
        <h1 className="lg:text-5xl">
          Hi 👋 <br /> I am Ayan Ghosh
        </h1>
        <p className="text-stone-500 lg:text-xl">
          I am very happy person. <br /> A passionate Web developer from India.
        </p>
        <div className="flex gap-4">
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
      </div>
    </div>
  );
};

export default Heroes;
