import { Header } from "../../components/index";

import {
  About,
  Blogs,
  ContactUs,
  Footer,
  Projects,
  Skills,
  Testimonials,
} from "../../Sections/index";

import { Navigation } from "../../utils";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Testimonials />
      <ContactUs />
      <Footer />
      <Navigation />
    </>
  );
};

export default Home;
