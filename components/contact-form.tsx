"use client";
import React, { ChangeEvent, useState } from "react";

interface Formdata {
  name: string;
  email: string;
  message: string;
}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<Formdata>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  return (
    <form>
      <div className="mb-4 flex flex-col">
        <label htmlFor="name" className="lg:text-2xl">
          Your name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-sm border-2 border-black px-4 py-3 text-xl focus:outline-none"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="eamil" className="lg:text-2xl">
          Your email
        </label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="rounded-sm border-2 border-black px-4 py-3 text-xl focus:outline-none"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="message" className="lg:text-2xl">
          Your message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="rounded-sm border-2 border-black px-4 py-3 text-xl focus:outline-none"
        />
      </div>
      <button className="rounded-md bg-black px-4 py-3 text-white lg:text-xl">
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
