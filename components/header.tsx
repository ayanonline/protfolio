import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full select-none items-center justify-between bg-white px-10 py-4">
      <div className="font-semibold lg:text-3xl">
        <Link href="/">Ayan Ghosh</Link>
      </div>
      <nav className="flex gap-4 lg:text-xl">
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <div>
        <button className="rounded-md bg-black px-4 py-3 text-white hover:bg-[#1F1F1F] lg:text-xl">
          Contact me
        </button>
      </div>
    </header>
  );
};

export default Header;
