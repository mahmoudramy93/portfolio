"use client";

import { CustomTitle } from "@/components/common";
import Project from "@/components/Project";
import { projectsData } from "@/data/projectsData";
import { technologiesData } from "@/data/technologiesData";
import { useMemo, useState } from "react";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    return selectedCategory.toLocaleLowerCase() === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.technologies.includes(selectedCategory)
        );
  }, [selectedCategory, projectsData]);

  const handleCategoryChange = (tech: string) => {
    setSelectedCategory(tech.toLocaleLowerCase());
  };

  const renderTechnologies = technologiesData.map((tech) => {
    const isSelected =
      selectedCategory.toLocaleLowerCase() === tech.toLocaleLowerCase();

    return (
      <li
        key={tech}
        className={`
          cursor-pointer py-2 px-6 
          bg-gray-800 dark:bg-darkGray text-white dark:text-tealGreen border border-tealGreen rounded-md transition-all 
          hover:bg-lightTealGreen dark:hover:bg-lightTealGreen  hover:text-darkGray dark:hover:text-black
          ${
            isSelected
              ? "bg-lightTealGreen dark:bg-lightTealGreen !text-darkGray"
              : ""
          }`}
        onClick={() => handleCategoryChange(tech)}
      >
        {tech}
      </li>
    );
  });

  const renderedProjects = filteredProjects.map((project) => (
    <Project key={project.id} {...project} />
  ));

  return (
    <section className="py-[50px] px-5 ">
      <div className="container mx-auto px-6">
        <CustomTitle
          title={"All Projects"}
          description={"There is all my Projects"}
        />

        <div className="flex flex-col items-center mb-12">
          <ul className="flex flex-wrap justify-center gap-6">
            {renderTechnologies}
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {renderedProjects}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
