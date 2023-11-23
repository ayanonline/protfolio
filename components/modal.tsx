"use client";
import React, { useEffect, useReducer, useRef } from "react";

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
        className="relative w-[40rem] bg-white px-6 py-12 pb-6"
      >
        <button
          className="absolute right-0 top-0 p-2 lg:text-xl"
          onClick={() => onClose(false)}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;