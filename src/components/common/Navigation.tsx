"use client";

import React, { useState } from "react";
import {
  FaUserAlt,
  FaRegAddressCard,
  FaStar,
  FaTools,
  FaBlog,
} from "react-icons/fa";

type TNavButtonProps = {
  Icon: React.ElementType;
  label: string;
  active: boolean;
  sectionId: string;
  onClick: () => void;
};

const NavButton = ({ Icon, label, active, onClick }: TNavButtonProps) => (
  <button
    type="button"
    className={`flex flex-col items-center justify-center p-4 group`}
    aria-label={label}
    onClick={onClick}
  >
    <Icon
      className={`w-6 h-6 mb-1 text-gray-300 group-hover:text-tealGreen ${
        active ? "text-tealGreen" : ""
      }`}
    />
    <span className="text-sm text-white">{label}</span>
  </button>
);

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("about_me");

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="hidden md:block fixed left-0 top-0 z-50 h-full w-16 border-r border-gray-600 dark:border-transparent bg-gray-800 dark:bg-darkGray">
      <div className="flex flex-col h-full justify-center items-center">
        <NavButton
          Icon={FaUserAlt}
          label="About Me"
          active={activeSection === "about_me"}
          sectionId="about_me"
          onClick={() => handleNavigation("about_me")}
        />
        <NavButton
          Icon={FaTools}
          label="Skills"
          active={activeSection === "general_skills"}
          sectionId="general_skills"
          onClick={() => handleNavigation("general_skills")}
        />
        <NavButton
          Icon={FaStar}
          label="Projects"
          active={activeSection === "highlighted_projects"}
          sectionId="highlighted_projects"
          onClick={() => handleNavigation("highlighted_projects")}
        />
        <NavButton
          Icon={FaRegAddressCard}
          label="Services"
          active={activeSection === "our_services"}
          sectionId="our_services"
          onClick={() => handleNavigation("our_services")}
        />
        <NavButton
          Icon={FaBlog}
          label="Blogs"
          active={activeSection === "latest_blogs"}
          sectionId="latest_blogs"
          onClick={() => handleNavigation("latest_blogs")}
        />
        <NavButton
          Icon={FaRegAddressCard}
          label="Contact Us"
          active={activeSection === "contact"}
          sectionId="contact"
          onClick={() => handleNavigation("contact")}
        />
      </div>
    </div>
  );
};

export default Navigation;
