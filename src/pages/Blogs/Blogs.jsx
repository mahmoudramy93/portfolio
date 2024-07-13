import "./blogs.scss";
import { Header } from "../../components/index";
import { BlogsFilter, AllBlogs } from "../../Sections/index";

const Blogs = () => {
  return (
    <>
      <Header />
      <BlogsFilter />
      <AllBlogs />
    </>
  );
};

export default Blogs;
