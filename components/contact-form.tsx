"use client";

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { object, string } from "yup";

import Spinner from "./ui/spinner";
import { IoCheckmarkCircleSharp, IoAlertCircleSharp } from "react-icons/io5";

const validationSchema = object().shape({
  name: string().required("Please enter your name"),
  email: string().email("Invalid email").required("Please enter your email"),
  message: string().required("Please enter message"),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const submitHandler = async (values: typeof initialValues) => {
    try {
      setIsLoading(true);
      setSubmitted(true);
      const res = await axios.post(
        "https://send-mail-oskl.onrender.com/send-email",
        {
          to: "ayanghosh.dev@gmail.com", // Replace with recipient's email address
          subject: `Portfolio: New message from ${values.name}`,
          text: `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
        },
      );
      setIsSent(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsSent(false);
    }
  };
  if (isLoading) {
    return (
      <div className="flex items-center gap-4">
        <Spinner />
        <span className="lg:text-2xl">Sending message...</span>
      </div>
    );
  }
  if (submitted && !isLoading && !isSent) {
    return (
      <div>
        <IoAlertCircleSharp className=" lg:h-10 lg:w-10" />
        Something went wrong
      </div>
    );
  }

  if (submitted && isSent) {
    return (
      <div className="flex items-center gap-4">
        <span className="lg:text-2xl">Succesfully sent</span>
        <IoCheckmarkCircleSharp className="text-green-500 lg:h-10 lg:w-10" />
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-4">
        <div className="flex flex-col ">
          <label htmlFor="name">Name:</label>
          <Field
            type="text"
            id="name"
            name="name"
            className="rounded-md border border-black px-4 py-3 focus:outline-none"
          />
          <ErrorMessage name="name" component="div" className="text-red-500" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="email">Email:</label>
          <Field
            type="email"
            id="email"
            name="email"
            className="rounded-md border border-black px-4 py-3 focus:outline-none"
          />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="message">Message:</label>
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Your message..."
            className="h-40 rounded-md border border-black px-4 py-3 focus:outline-none"
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-red-500"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-black px-4 py-3 text-white lg:text-xl"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
