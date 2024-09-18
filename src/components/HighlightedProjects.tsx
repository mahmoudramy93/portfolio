import React from "react";
import { CustomLink, CustomTitle } from "./common";
import { projectsData } from "@/data/projectsData";
import { TProjectProps } from "@/types/projectType";
import Project from "./Project";

const HighlightedProjects = () => {
  return (
    <section className="px-5 py-[60px] " id="highlighted_projects">
      <div className="container">
        <CustomTitle title={"Projects"} description={"This is my projects"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
          {projectsData
            .map((project: TProjectProps) => {
              return (
                <Project
                  key={project.id}
                  image={project.image}
                  githubLink={project.githubLink}
                  technologies={project.technologies}
                  name={project.name}
                  description={project.description}
                  liveLink={project.liveLink}
                />
              );
            })
            .slice(0, 3)}
        </div>

        <CustomLink link={"/projects"} text={"All projects"} />
      </div>
    </section>
  );
};

export default HighlightedProjects;
