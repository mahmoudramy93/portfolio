import {
  AboutMe,
  ContactUs,
  Footer,
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
      <Footer />
    </>
  );
};

export default Home;
