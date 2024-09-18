import { ContactItem, TypeWriter } from "@/components";
import { CustomLink, CustomTitle } from "@/components/common";
import { contactDetails } from "@/data/contactDetails";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section
      className=" py-[60px] rounded-[50px] bg-[url('/images/homePage_images/about-bg.webp')] bg-cover bg-no-repeat bg-fixed relative before:content-[''] before:absolute before:w-full before:h-full before:left-0 before:top-0 before:bg-black/80"
      id="about_me"
    >
      <div className="container mx-auto px-4">
        <CustomTitle title={"About Me"} description={"There Is All About Me"} />

        <div className=" relative gap-8 grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex items-center justify-center ">
            <Image
              src="/images/homePage_images/about.webp"
              alt="about"
              width={530}
              height={353}
              className="w-full"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
              <p className="" />
              <TypeWriter />
            </div>
          </div>

          <div className=" flex flex-col gap-10">
            <p className="text-gray-300 text-base leading-8">
              I’m a backend software developer with a strong focus on building
              server-side applications, designing APIs, and managing databases.
              I also work with cloud and on-premise deployments, using tools
              like Docker and Kubernetes for containerization and orchestration.
              I apply Infrastructure as Code (IaC) and CI/CD practices to
              automate deployments and ensure smooth software delivery. In
              addition to software development, I have several years of
              experience in System Administration and infrastructure, including
              network setup, security, virtualization, cloud computing, and
              system monitoring.
            </p>
            <CustomLink link={"/about"} text={"More about me"} />

            <ul className="flex flex-col gap-4">
              {contactDetails.map(
                ({ icon: Icon, label, value, link }, index) => (
                  <ContactItem
                    key={index}
                    Icon={Icon}
                    label={label}
                    value={value}
                    link={link}
                  />
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
