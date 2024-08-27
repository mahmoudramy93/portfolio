import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Col, Container, Row } from "react-bootstrap";

import { CustomTitle } from "@components/common";
import { technologies } from "@data/data.json";
import { filterProjects } from "@rtk/features/projects/projectsSlice";
import { Project } from "@components/portfolio";
import { TProject } from "types/projectTypes";

import styles from "./projects.module.scss";
const { all_projects } = styles;

const Projects = () => {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProjects("all"));
  }, []);

  return (
    <>
      <section className={all_projects}>
        <Container>
          <CustomTitle
            title={"All Projects"}
            description={"There is all my Projects"}
          />
          <Row className="mb-5">
            <Col>
              <div className="products-filter d-flex flex-wrap justify-content-center">
                {technologies &&
                  technologies.map((technology) => {
                    return (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="fw-bold me-3 fs-6 mb-3"
                        onClick={() =>
                          dispatch(filterProjects(technology.technology))
                        }
                      >
                        {technology.technology}
                      </Button>
                    );
                  })}
              </div>
            </Col>
          </Row>
          <Row>
            {projects.map((project: TProject) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4" key={project.id}>
                  <Project project={project} aosAnimation={"fade-up"} />
                </div>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
