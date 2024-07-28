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
import Services from './../../Sections/Services/Services';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Services/>
      <Testimonials/>
      <ContactUs />
      <Footer />
      <Navigation />
    </>
  );
};

export default Home;
