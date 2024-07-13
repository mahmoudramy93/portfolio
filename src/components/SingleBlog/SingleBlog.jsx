import IMAGES from "../../assets/imgs";
import { BlogSubTitle } from "../../components";

import "./singleBlog.scss";

const SingleBlog = ({ blog }) => {
  return (
    <div className="blog">
      <div className="blog-header">
        <img
          src={IMAGES[blog.image]}
          alt={blog.technology}
          className="img-fluid"
          loading="lazy"
        />
        <div className="technologies">
          <span className="blog-techno">{blog.technology}</span>
        </div>
        <h3 className="blog-title position-relative">{blog.title}</h3>
      </div>
      <div className="blog-body">
        {blog.sub_titles.map((subTitle, index) => {
          return <BlogSubTitle subTitle={subTitle} key={index} />;
        })}
      </div>
      <div className="blog-footer">
        <h5 className="references-title">References:</h5>
        <ul className="references-list">
          {blog.references.map((reference, index) => {
            return (
              <li
                key={index}
                className="references-item position-relative d-flex align-items-center"
              >
                <a href="#" className="references-link">
                  {reference}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleBlog;
