import { Header } from "../../components/index";
import { MoreAboutMe, Resume, AllSkills, Courses } from "../../Sections/index";

const About = () => {
  return (
    <>
      <Header />
      <MoreAboutMe />
      <Resume />
      <AllSkills />
      <Courses/>
    </>
  );
};

export default About;
