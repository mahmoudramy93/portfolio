import {
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaWindows,
  FaNetworkWired,
  FaCloud,
  FaDocker,
} from "react-icons/fa";
import { SiVmware } from "react-icons/si";
import { FaCloudsmith } from "react-icons/fa"; // Import any additional icons you need
import { FcLinux } from "react-icons/fc";

export const skills = [
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
        icon: FaCloudsmith,
        label: "Disaster Recovery and Backup Solutions (Veeam, Acronis)",
      },
    ],
  },
];
