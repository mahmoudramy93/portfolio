import {
  AboutMe,
  ContactUs,
  GeneralSkills,
  HighlightedProjects,
  LatestBlogs,
  OurServices,
} from "@/components/homeSections";

const Home = () => {
  return (
    <>
      <AboutMe />
      <GeneralSkills />
      <HighlightedProjects />
      <OurServices />
      <LatestBlogs />
      <ContactUs />
    </>
  );
};

export default Home;
