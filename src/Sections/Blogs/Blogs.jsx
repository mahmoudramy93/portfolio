import { CustomTitle, Blog } from "../../components/index";
import { posts } from "../../data/data.json";

import "./blogs.scss";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="container">
        <CustomTitle title={"Blogs"} description={"This is my blogs"} />
        <div className="row">
          {posts &&
            posts
              .map((post) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
                    <Blog post={post} />
                  </div>
                );
              })
              .slice(0, 3)}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
