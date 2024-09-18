import { skills } from "@/data/skillsData";
import { CustomTitle } from "./common";

const SkillsSection = () => {
  return (
    <section className="py-[60px]" id="general_skills">
      <div className="container ">
        <CustomTitle
          title={"My Skills"}
          description={"There Is My General Skills"}
        />
        {skills.map((section, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-5">
              {section.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <skill.icon className="text-tealGreen text-4xl" />
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

export default SkillsSection;
