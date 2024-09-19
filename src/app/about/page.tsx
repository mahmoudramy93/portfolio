import {
  AllSkills,
  MoreAboutMe,
  MyCourses,
  MyResume,
} from "@/components/aboutSections";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <MoreAboutMe />

      <MyResume />

      <AllSkills />

      <MyCourses />
    </>
  );
};

export default AboutPage;
