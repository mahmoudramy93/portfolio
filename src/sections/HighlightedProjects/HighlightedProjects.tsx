import { Col, Container, Row } from "react-bootstrap";

import { CustomLink, CustomTitle } from "@components/common";
import { Project } from "@components/portfolio";
import { TProject } from "types/projectTypes";

import { projects } from "@data/data.json";

import styles from "./highlightedProjects.module.scss";
const { highlighted_projects } = styles;

const HighlightedProjects = () => {
  return (
    <section className={highlighted_projects} id="highlighted_projects">
      <Container>
        <CustomTitle title={"Projects"} description={"This is my projects"} />
        <Row>
          {projects &&
            projects
              .map((project: TProject) => {
                return (
                  <Col md={6} lg={4} key={project.id}>
                    <Project project={project} aosAnimation={"zoom-in"} />
                  </Col>
                );
              })
              .slice(0, 3)}
        </Row>
        <Row>
          <Col>
            <CustomLink link={"/projects"} text={"All projects"} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HighlightedProjects;
