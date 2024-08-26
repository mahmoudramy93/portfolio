import Blog from "@components/portfolio/Blog/Blog";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const AllBlogs = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="all-blogs">
      <div className="container">
        <Row>
          {posts &&
            posts.map((post) => {
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
