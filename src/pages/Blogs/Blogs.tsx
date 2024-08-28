import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

import { CustomTitle } from "@components/common";
import { TPostProps } from "types/postTypes";
import { Blog, BlogsSearch, FilterCategories } from "@components/portfolio";

import styles from "./blogs.module.scss";
const { blogs, filer_header } = styles;

const Blogs = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <>
      <section className={blogs}>
        <Container>
          <CustomTitle
            title={"All Blogs"}
            description={"There is all my blogs"}
          />
          <Row>
            <div
              className={`${filer_header} d-flex align-items-center justify-content-between`}
            >
              <Col md={8}>
                <FilterCategories />
              </Col>
              <Col md={4}>
                <BlogsSearch />
              </Col>
            </div>
          </Row>
          <Row>
            {posts &&
              posts.map((post: TPostProps) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
                    <Blog post={post} aosAnimation={"fade-up"} />
                  </div>
                );
              })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
