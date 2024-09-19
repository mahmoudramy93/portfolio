import {
  AboutMe,
  ContactUs,
  GeneralSkills,
  HighlightedProjects,
  LatestBlogs,
  OurServices,
  SocialMediaFooter,
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
      <SocialMediaFooter />
    </>
  );
};

export default Home;
