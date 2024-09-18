import React from "react";
import { CustomTitle } from "./common";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section
      className="pt-10  px-5 bg-[url('/images/contact_us.webp')] bg-no-repeat bg-cover bg-center rounded-[50px] relative before:content[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/60  before:rounded-[50px]"
      id="contact"
    >
      <div className="container">
        <CustomTitle
          title={"Get in touch"}
          description={"Feel free to drop me a line - Contact us"}
        />
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
