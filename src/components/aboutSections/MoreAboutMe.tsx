import { CustomTitle } from "../common";

const MoreAboutMe = () => {
  return (
    <section className="py-[60px] px-5 bg-darkColor  rounded-[50px]">
      <div className="container">
        <CustomTitle title={"More about me"} description={"Know me better"} />
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-white border-b border-tealGreen w-fit pb-1 text-2xl">
              Expertise
            </h3>
            <p className="text-gray-300">
              With over 8 years of experience in IT infrastructure, network
              management, system operations, and service management, I bring a
              wealth of knowledge to every project. My core specialization lies
              in network security and infrastructure engineering for data
              centers. Additionally, embracing software engineering and DevOps
              roles in freelance projects has further enhanced my technological
              proficiency, allowing me to bridge the gap between system
              administration and software development.
            </p>
            <p className="text-gray-300">
              My diverse background enables me to excel in backend development
              while integrating DevOps practices seamlessly into projects. This
              holistic perspective empowers me to lead initiatives from
              inception to execution efficiently, ensuring successful outcomes
              within budgetary and time constraints. I am driven by
              collaboration and a continuous desire to innovate, applying my
              skills to solve complex challenges.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-white border-b border-tealGreen w-fit pb-1 text-2xl">
              Current Focus
            </h3>
            <p className="text-gray-300">
              Developing backend software(api design and management), database
              schema design and management(SQL, NoSQL), containerization
              (Docker), deployment (cloud and on-premise), and operations
              through automation (IAC using Ansible & Shell), collaboration, and
              continuous integration/continuous deployment (CI/CD) practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
