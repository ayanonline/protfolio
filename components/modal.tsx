"use client";
import React, { useEffect, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: (status: boolean) => void;
}
const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      // if target element is not inside modal-content then close the modal
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleOutSideClick);

    return () => document.removeEventListener("mousedown", handleOutSideClick);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
  return (
    <div className="absolute left-0 top-0 flex h-[100vh] w-full items-center justify-center bg-black bg-opacity-75">
      <div
        ref={modalRef}
        className="relative rounded-md bg-white px-6 py-5 pb-6 lg:w-[40rem] lg:py-12"
      >
        <button
          className="absolute right-0 top-0 p-2 lg:text-xl"
          onClick={() => onClose(false)}
        >
          <IoCloseCircle className="h-6 w-6 lg:h-10 lg:w-10" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
