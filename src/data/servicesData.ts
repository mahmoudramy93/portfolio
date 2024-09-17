import { FaCogs, FaNetworkWired, FaServer, FaTools } from "react-icons/fa";

export const servicesData = [
  {
    id: "1",
    title: "Backend Software Development",
    description:
      "I specialize in designing and developing robust backend systems that power web applications. My expertise includes crafting APIs, managing databases, and implementing business logic. I use modern frameworks like Express and Flask, combined with a deep understanding of Node.js, to build scalable and maintainable solutions that meet the specific needs of clients.",
    icon: FaServer,
    // aosEffect: "fade-right",
  },
  {
    id: "2",
    title: "DevOps and Continuous Integration/Continuous Deployment (CI/CD)",
    description:
      "I provide end-to-end DevOps services that streamline the software development lifecycle. This includes automating deployments, ensuring continuous integration, and maintaining efficient CI/CD pipelines. My goal is to enhance collaboration between development and operations, reduce deployment time, and increase the reliability of software releases.",
    icon: FaCogs,
    // aosEffect: "fade-right",
  },
  {
    id: "3",
    title: "IT Infrastructure Engineering and Security",
    description:
      "With extensive experience in IT infrastructure, I offer services that ensure your systems are secure, scalable, and resilient. This includes network configuration, server management, and implementing security protocols. I specialize in data center security, virtualization, and cloud services, ensuring your infrastructure is both robust and compliant with industry standards.",
    icon: FaNetworkWired,
    // aosEffect: "fade-left",
  },
  {
    id: "4",
    title: "System Administration and Automation",
    description:
      "I offer comprehensive system administration services that include routine maintenance, performance tuning, and automation of repetitive tasks. My focus is on maximizing system uptime, improving performance, and reducing manual intervention through scripting and automation tools like Bash, PowerShell, and Python.",
    icon: FaTools,
    // aosEffect: "fade-left",
  },
];
