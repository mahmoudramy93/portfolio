import {
  AboutMe,
  ContactUs,
  SocialMediaFooter,
  GeneralSkills,
  HighlightedProjects,
  LatestBlogs,
  OurServices,
} from "@/components";

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
