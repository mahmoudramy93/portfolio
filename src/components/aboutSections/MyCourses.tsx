import { CustomTitle } from "../common";

type TCourseCardProps = {
  title: string;
  provider: string;
};

const CourseCard = ({ title, provider }: TCourseCardProps) => (
  <div className="flex flex-col gap-2 p-6 transition duration-300 ease-in-out bg-gray-800 border border-gray-700 rounded-md shadow-lg dark:bg-darkGray hover:border-tealGreen">
    <h3 className="text-lg font-normal text-white">{title}</h3>
    <p className="text-sm text-gray-300">{provider}</p>
  </div>
);

type TCourseSectionProps = {
  title: string;
  courses: TCourseCardProps[];
};
const CoursesSection = ({ title, courses }: TCourseSectionProps) => (
  <div className="mb-12">
    <h2 className="mb-6 text-2xl font-normal text-tealGreen">{title}</h2>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          provider={course.provider}
        />
      ))}
    </div>
  </div>
);

const MyCourses = () => {
  const networkingSecurityCourses = [
    { title: "CCNP Security SISE", provider: "PrivSec Solutions" },
    { title: "CCNP Security SVPN", provider: "PrivSec Solutions" },
    { title: "CCNP Switching", provider: "New Horizon Center" },
    { title: "CCNP Routing", provider: "New Horizon Center" },
    { title: "CompTIA Network+", provider: "New Horizon Center" },
  ];

  const virtualizationCourses = [
    { title: "VMware vSphere 7.0", provider: "VMware" },
  ];

  const programmingDevelopmentCourses = [
    { title: "Python (Full Stack Developer Track)", provider: "Udacity" },
    {
      title: "Java SE 8 (Full Stack Developer Track)",
      provider: "New Horizon Center",
    },
  ];

  const administration = [
    {
      title: "MCSE (Implementing an Advanced Server Infrastructure)",
      provider: "New Horizon Center",
    },
    { title: "MCSA", provider: "New Horizon Center" },
  ];

  const hardwareRepairCourses = [
    { title: "Laptop Repair - Hardware", provider: "Somuha Academy" },
    { title: "CompTIA A+ Essentials", provider: "New Horizon Center" },
    { title: "A+ Practical Application", provider: "New Horizon Center" },
  ];

  return (
    <section className="px-5 py-[60px]">
      <div className="container">
        <CustomTitle
          title={"Courses"}
          description={"There Is All My Courses"}
        />
        <CoursesSection
          title="Networking & Security"
          courses={networkingSecurityCourses}
        />
        <CoursesSection
          title="Programming & Development"
          courses={programmingDevelopmentCourses}
        />
        <CoursesSection
          title="Microsoft Administration"
          courses={administration}
        />
        <CoursesSection
          title="Virtualization"
          courses={virtualizationCourses}
        />
        <CoursesSection
          title="Hardware & Repair"
          courses={hardwareRepairCourses}
        />
      </div>
    </section>
  );
};

export default MyCourses;
