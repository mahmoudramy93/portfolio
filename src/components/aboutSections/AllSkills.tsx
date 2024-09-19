import {
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaWindows,
  FaNetworkWired,
  FaCloud,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiVmware,
  SiKubernetes,
  SiAnsible,
  SiFlask,
  SiPowershell,
  SiPrometheus,
  SiVeeam,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { CustomTitle } from "../common";

export const skills = [
  {
    category: "Software Engineering & Web Development",
    items: [
      { icon: FaPython, label: "Proficient in Python" },
      { icon: FaNodeJs, label: "Proficient in Node.js" },
      { icon: SiFlask, label: "Backend development (Express.js, Flask)" },
      { icon: FaDatabase, label: "Database schema design (SQL, NoSQL)" },
      { icon: FaServer, label: "API Design & management (RESTful API)" },
      { icon: SiKubernetes, label: "Application deployment (K8s, AWS)" },
    ],
  },
  {
    category: "System Administration & DevOps",
    items: [
      { icon: FcLinux, label: "Linux/Unix Administration" },
      { icon: FaWindows, label: "Windows Server Administration" },
      {
        icon: FaNetworkWired,
        label:
          "Network Configuration and Security (Cisco, Paloalto, Fortinet, Sophos)",
      },
      { icon: FaCloud, label: "Cloud Services Management (AWS, Azure)" },
      {
        icon: SiVmware,
        label: "Virtualization Technologies (VMware, Hyper-V)",
      },
      {
        icon: FaDocker,
        label: "Containerization & Orchestration (Docker, Kubernetes)",
      },
      {
        icon: SiVeeam,
        label: "Disaster Recovery and Backup Solutions (Veeam, Acronis)",
      },
    ],
  },
  {
    category: "DevOps",
    items: [
      {
        icon: FaDocker,
        label: "Containerization & Orchestration (Docker, Kubernetes)",
      },
      {
        icon: FaGithub,
        label: "CI/CD (GitHub Actions, Argo CD)",
      },
      {
        icon: SiAnsible,
        label: "CM & IaC (Ansible, Terraform)",
      },
      {
        icon: SiPowershell,
        label: "Automation and Scripting (Bash, PowerShell, Python)",
      },
      {
        icon: SiPrometheus,
        label: "System Monitoring & Performance Tuning (Datadog, Prometheus)",
      },
    ],
  },
];

const AllSkills = () => {
  return (
    <section className="py-[60px] " id="general_skills">
      <div className="container ">
        <CustomTitle
          title={"My Skills"}
          description={"There Is My General Skills"}
        />
        {skills.map((section, index) => (
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

export default AllSkills;
