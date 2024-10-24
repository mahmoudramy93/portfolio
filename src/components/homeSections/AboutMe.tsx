import { CustomLink, CustomTitle } from "@/components/common";
import { contactDetails } from "@/data/contactDetails";
import Image from "next/image";
import React from "react";
import TypeWriter from "./TypeWriter";
import ContactItem from "./ContactItem";

const AboutMe = () => {
  return (
    <section
      className="py-[60px] rounded-[50px] bg-[url('/images/homePage_images/about-bg.jpg')] bg-cover bg-fixed md:bg-local bg-center  bg-no-repeat relative 
      before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/80 before:rounded-[50px] 
      custom-background-position"
      id="about_me"
    >
      <div className="container px-4 mx-auto">
        <CustomTitle title={"About Me"} description={"There Is All About Me"} />

        {/* <div className="relative grid grid-cols-1 gap-8 xl:grid-cols-2 mx-auto"> */}
        <div className="relative  grid grid-cols-12 gap-8">
          {/* lab img & typewriter */}
          <div className="relative hidden  ">
            <Image
              src="/images/homePage_images/about.webp"
              alt="about"
              width={530}
              height={353}
              priority
              className="w-full object-contain"
            />
            <div className="absolute text-center text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <p className="" />
              <TypeWriter />
            </div>
          </div>

          <div className="col-span-12 xl:col-span-7 xl:col-start-2 flex flex-col gap-10">
            <p className="text-base leading-8 text-gray-300">
              I’m a backend software developer with a strong focus on building
              server-side applications, designing APIs, and managing databases.
              I also work with cloud and on-premise deployments, using tools
              like Docker and Kubernetes for containerization and orchestration.
              I apply Infrastructure as Code (IaC) and CI/CD practices to
              automate deployments and ensure smooth software delivery. In
              addition to software development, I have 8 years of experience in
              System Administration and infrastructure, including network setup,
              security, virtualization, cloud computing, and system monitoring.
            </p>
            <CustomLink link={"/about"} text={"More about me"} />
          </div>

          <div className="col-span-12 xl:col-span-4 xl:col-start-9 flex flex-col">
            <ul className="flex flex-col gap-4">
              {contactDetails.map(({ icon: Icon, label, value, link }) => (
                <ContactItem
                  key={label}
                  Icon={Icon}
                  label={label}
                  value={value}
                  link={link}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
