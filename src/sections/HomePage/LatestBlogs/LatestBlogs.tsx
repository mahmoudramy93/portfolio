import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

import { CustomLink, CustomTitle } from "@components/common";
import { Blog } from "@components/portfolio";
import { TPostProps } from "types/postTypes";

import styles from "./latestBlogs.module.scss";
const { latest_blogs } = styles;

const LatestBlogs = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className={latest_blogs} id="latest_blogs">
      <Container>
        <CustomTitle title={"Blogs"} description={"This is my blogs"} />
        <Row>
          {posts &&
            posts
              .map((post: TPostProps) => {
                return (
                  <Col sm={12} md={6} lg={4} key={post.id} className="mb-4">
                    <Blog post={post} aosAnimation={"fade-left"} />
                  </Col>
                );
              })
              .slice(0, 3)}
        </Row>
        <Row>
          <Col>
            <CustomLink link={"/blogs"} text={"All Blogs"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LatestBlogs;
