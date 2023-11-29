import Image from "next/image";

const SocialBtn = ({ url, src }) => {
  return (
    <a
      href={url}
      target="blank"
      className="rounded-full bg-white p-1 transition-all duration-300 ease-in-out hover:scale-125 md:p-2"
    >
      <div className="relative h-4 w-4 lg:h-12 lg:w-12">
        <Image
          src={src}
          fill
          alt="social media icon"
          className="object-contain"
        />
      </div>
    </a>
  );
};

export default SocialBtn;
