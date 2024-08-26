import { Link } from "react-router-dom";
import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

import { TPostProps } from "types/postTypes";

import styles from "./blog.module.scss";
const {
  blog_item,
  blog_item_technology,
  blog_item_title,
  blog_item_description,
  blog_item_footer,
} = styles;

type TBlogProps = {
  post: TPostProps;
  aosAnimation: string;
};

const Blog = ({ post, aosAnimation }: TBlogProps) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className={`${blog_item} mb-sm-5 mb-lg-4`} data-aos={aosAnimation}>
      <div>
        <span className={blog_item_technology}>{post.technology}</span>
      </div>
      <div>
        <h3 className={blog_item_title}>{post.title}</h3>
        <p className={blog_item_description}>{post.description}</p>
      </div>
      <div
        className={`${blog_item_footer} d-flex align-items-center justify-content-between`}
      >
        <Link to={`/blogs/blog/${post.id}`}>
          Learn More
          <span>
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
        </Link>
        <a href="!#">
          <span>{post.time}</span>
          <span> min read</span>
        </a>
      </div>
    </div>
  );
};

export default Blog;
