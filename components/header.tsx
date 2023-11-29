"use client";

import { useState } from "react";
import Link from "next/link";

import Modal from "./modal";
import ContactForm from "./contact-form";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <header className="fixed top-0 z-50 flex w-full max-w-[100vw] select-none items-center justify-between bg-white px-2 py-4 md:px-10">
      <div className="font-semibold lg:text-3xl">
        <Link href="/">Ayan Ghosh</Link>
      </div>
      <nav className="hidden gap-4 md:flex lg:text-xl">
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
      </nav>
      <div className="flex items-center gap-2">
        <button
          onClick={handleClick}
          className="rounded-md bg-black p-2 text-xs text-white hover:bg-[#1F1F1F] lg:px-4 lg:py-3 lg:text-xl"
        >
          Contact me
        </button>
        <div className="cursor-pointer md:hidden">
          <IoMenu className="h-8 w-8" />
        </div>

        <Modal isOpen={isModalOpen} onClose={setIsModalOpen}>
          <ContactForm />
        </Modal>
      </div>
    </header>
  );
};

export default Header;
