import { useLocation, useParams } from "react-router-dom";
import { BlogsFilter } from "../../sections";
import { SingleBlog } from "../../components";
import { posts } from "../../data/data.json";
import { useEffect } from "react";

const BlogDetails = () => {
  const location = useLocation();
  const { blogId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const blog = posts.find((item) => item.id === blogId);

  return (
    <>
      <div className="blog-details">
        <div className="container">
          <BlogsFilter />
        </div>
      </div>

      <div className="single-blog position-relative pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SingleBlog blog={blog} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white fw-bold fs-4 mb-0 mt-2">
                Thanks for reading!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
