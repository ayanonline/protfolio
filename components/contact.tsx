import ContactForm from "./contact-form";
import SocialBtn from "./ui/social-button";

const Contact = () => {
  return (
    <div className="flex flex-col justify-between px-10 py-10 lg:flex-row lg:px-40">
      <section className="lg:w-[40%]">
        <h1 className="mb-4 font-semibold lg:text-3xl">Let&apos;s Connect</h1>
        <p className="lg:text-xl">
          Please fill out the from on this section to contact with me. or call
          me between 9:00am and 8:00pm, Monday-Friday
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
      </section>
      <div className="lg:w-[50%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
