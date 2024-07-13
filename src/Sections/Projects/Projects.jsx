import { CustomLink, CustomTitle, Project } from "../../components/index";
import { projects } from "../../data/data";

import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <CustomTitle title={"Projects"} description={"This is my projects"} />
        <div className="row">
          {projects &&
            projects
              .map((project) => {
                return (
                  <div className="col-md-4" key={project.id}>
                    <Project project={project} aosAnimation={"zoom-in"} />
                  </div>
                );
              })
              .slice(0, 3)}
        </div>
        <div className="row">
          <div className="col-12">
            <CustomLink link={"/projects"} text={"All projects"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
