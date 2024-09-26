import { skills } from "@/data/skillsData";
import { CustomTitle } from "../common";
import React from "react";

const GeneralSkills = () => {
  const filteredSkills = skills.filter(
    (section) =>
      section.category === "Software Engineering & Web Development" ||
      section.category === "System Administration & DevOps"
  );

  return (
    <section className="py-[60px] " id="general_skills">
      <div className="container ">
        <CustomTitle
          title={"My Skills"}
          description={"There Is My General Skills"}
        />
        {filteredSkills.map((section, index) => (
          <div key={index} className="mb-10">
            <h3 className="mb-5 text-2xl font-bold text-white">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {section.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md dark:bg-darkGray"
                >
                  <skill.icon className="text-4xl text-tealGreen" />
                  <span className="text-gray-300">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(GeneralSkills);
