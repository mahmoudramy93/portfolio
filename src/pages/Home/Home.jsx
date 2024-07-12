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
    </>
  );
};

export default Home;
