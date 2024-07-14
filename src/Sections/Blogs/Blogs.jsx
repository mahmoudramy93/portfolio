import { useSelector } from "react-redux";
import { CustomTitle, Blog, CustomLink } from "../../components/index";

import "./blogs.scss";

const Blogs = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="blogs" id="blogs">
      <div className="container">
        <CustomTitle title={"Blogs"} description={"This is my blogs"} />
        <div className="row">
          {posts &&
            posts
              .map((post) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
                    <Blog post={post} aosAnimation={"fade-left"} />
                  </div>
                );
              })
              .slice(0, 3)}
        </div>
        <div className="row">
          <div className="col-12">
            <CustomLink link={"/blogs"} text={"All Blogs"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
