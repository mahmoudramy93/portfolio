import { Row } from "react-bootstrap";

import { posts } from "../../data/data.json";
import { Blog } from "../../components";

const AllBlogs = () => {
  return (
    <div className="all-blogs">
      <div className="container">
        <Row>
          {posts.map((post) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
                <Blog
                  post={post}
                  customStyle={"custom-blog-style"}
                  aosAnimation={"fade-up"}
                />
              </div>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default AllBlogs;
