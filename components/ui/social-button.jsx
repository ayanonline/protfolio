import Image from "next/image";

const SocialBtn = ({ url, src }) => {
  return (
    <a
      href={url}
      target="blank"
      className="rounded-full bg-white p-2 transition-all duration-300 ease-in-out hover:scale-125"
    >
      <div className="relative h-12 w-12">
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
