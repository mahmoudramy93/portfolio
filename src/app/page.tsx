import { Navigation } from "@/components/common";
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
      <Navigation />
    </>
  );
};

export default Home;
