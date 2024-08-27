import { useEffect } from "react";

import {
  AllSkills,
  MoreAboutMe,
  MyCourses,
  MyResume,
} from "@sections/AboutPage";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MoreAboutMe />
      <MyResume />
      <AllSkills />
      <MyCourses />
    </>
  );
};

export default About;
