import { Footer, Navigation } from "@components/portfolio";
import { AboutMe, ContactUs, GeneralSkills, HighlightedProjects, LatestBlogs, OurServices } from "@sections/index";

const Home = () => {
  return (
    <>
      <AboutMe />
      <GeneralSkills />
      <HighlightedProjects />
      <OurServices/>
      <LatestBlogs />
      <ContactUs />
      <Footer />
      <Navigation />
    </>
  );
};

export default Home;