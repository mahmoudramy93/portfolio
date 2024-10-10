"use client";

import React, { useState, useEffect } from "react";
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
    className="flex flex-col items-center justify-center p-4 group"
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

const sections = [
  { id: "about_me", label: "About Me", Icon: FaUserAlt },
  { id: "general_skills", label: "Skills", Icon: FaTools },
  { id: "highlighted_projects", label: "Projects", Icon: FaStar },
  { id: "our_services", label: "Services", Icon: FaRegAddressCard },
  { id: "latest_blogs", label: "Blogs", Icon: FaBlog },
  { id: "contact", label: "Contact Us", Icon: FaRegAddressCard },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>("about_me");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="hidden lg:block fixed left-0 top-0 z-50 h-full w-16 border-r border-gray-600 dark:border-transparent bg-gray-800 dark:bg-darkGray">
      <div className="flex flex-col h-full justify-center items-center">
        {sections.map(({ id, label, Icon }) => (
          <NavButton
            key={id}
            Icon={Icon}
            label={label}
            active={activeSection === id}
            sectionId={id}
            onClick={() => handleNavigation(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
