import { useDispatch, useSelector } from "react-redux";
import { CustomTitle, Project, ProjectsFilter } from "../../components";
import { technologies } from "../../data/data.json";

import "./allProjects.scss";
import { useEffect } from "react";
import {
  filterProjects,
  getProjects,
} from "../../rtk/features/projects/projectsSlice";

const AllProjects = () => {
  const projects = useSelector((state) => state.projects.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProjects("all"));
  }, []);

  return (
    <div className="all-projects position-relative">
      <div className="container">
        <CustomTitle
          title={"All Projects"}
          description={"There is all my Projects"}
        />
        <div className="row justify-content-center">
          <div className="col-8 d-flex justify-content-center">
            <div className="products-filter">
              {technologies.map((technology) => {
                return (
                  <ProjectsFilter key={technology.id} technology={technology} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((project) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4" key={project.id}>
                <Project project={project} aosAnimation={"fade-up"} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
