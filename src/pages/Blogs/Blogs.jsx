import { CustomTitle } from "../../components/index";
import { BlogsFilter, AllBlogs } from "../../Sections/index";

import "./blogs.scss";

const Blogs = () => {
  return (
    <>
      <div className="blogs-filter position-relative">
        <div className="container">
          <CustomTitle
            title={"All Blogs"}
            description={"There is all my blogs"}
          />
          <BlogsFilter />
        </div>
      </div>
      <AllBlogs />
    </>
  );
};

export default Blogs;
