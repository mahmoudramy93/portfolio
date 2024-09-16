import {
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiDocker,
  SiKubernetes,
  SiVirtualbox,
  SiTerraform,
} from "react-icons/si"; // for devops tools

const GeneralSkills = () => {
  const skills = [
    {
      category: "Software Engineering & Web Development",
      items: [
        { icon: FaPython, label: "Proficient in Python" },
        { icon: FaNodeJs, label: "Proficient in Node.js" },
        { icon: FaDatabase, label: "Backend development" },
        { icon: FaDatabase, label: "Database schema design" },
        { icon: FaServer, label: "API Design & management" },
      ],
    },
    {
      category: "System Administration & DevOps",
      items: [
        { icon: FaServer, label: "Server Administration" },
        { icon: FaNetworkWired, label: "Network Configuration and Security" },
        { icon: SiVirtualbox, label: "Virtualization Technologies" },
        { icon: SiDocker, label: "Containerization & Orchestration" },
        { icon: SiKubernetes, label: "CI/CD Pipelines" },
        { icon: SiTerraform, label: "Infrastructure as Code" },
      ],
    },
  ];
  return (
    <div className="container mx-auto py-10">
      {skills.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-bold text-tealGreen mb-4">
            {section.category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <skill.icon className="text-tealGreen text-3xl" />
                <span className="text-gray-300">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralSkills;
