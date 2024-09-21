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

// export const skills = [
//   {
//     category: "Software Engineering & Web Development",
//     items: [
//       { icon: FaPython, label: "Proficient in Python" },
//       { icon: FaNodeJs, label: "Proficient in Node.js" },
//       { icon: FaDatabase, label: "Backend development" },
//       { icon: FaDatabase, label: "Database schema design" },
//       { icon: FaServer, label: "API Design & management" },
//     ],
//   },
//   {
//     category: "System Administration & DevOps",
//     items: [
//       { icon: FcLinux, label: "Linux/Unix Administration" },
//       { icon: FaWindows, label: "Windows Server Administration" },
//       {
//         icon: FaNetworkWired,
//         label:
//           "Network Configuration and Security (Cisco, Paloalto, Fortinet, Sophos)",
//       },
//       { icon: FaCloud, label: "Cloud Services Management (AWS, Azure)" },
//       {
//         icon: SiVmware,
//         label: "Virtualization Technologies (VMware, Hyper-V)",
//       },
//       {
//         icon: FaDocker,
//         label: "Containerization & Orchestration (Docker, Kubernetes)",
//       },
//       {
//         icon: FaCloudsmith,
//         label: "Disaster Recovery and Backup Solutions (Veeam, Acronis)",
//       },
//     ],
//   },
// ];

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
