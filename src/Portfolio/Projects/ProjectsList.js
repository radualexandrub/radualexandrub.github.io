import React, { useState } from "react";
import projectsList from "./ProjectData";
import Categories from "./ProjectCategories";
import ProjectModal from "./ProjectModal";
import { useModalContext } from "./ProjectModalContext";

const allCategories = [
  "all",
  ...new Set(projectsList.map((item) => item.category)),
];

const ProjectsList = () => {
  const [projects, setProjects] = useState(projectsList);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setProjects(projectsList);
      return;
    }
    const newProjectsList = projectsList.filter(
      (item) => item.category === category
    );
    setProjects(newProjectsList);
  };

  const {
    openProjectModal,
    populateProjectModalInformation,
  } = useModalContext();

  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-4">Projects</h2>

        <ProjectModal />

        <Categories categories={categories} filterItems={filterItems} />

        <div className="project-container">
          {projects.map((project) => {
            const { id, title, category, img, imgAlt } = project;

            return (
              <figure key={id}>
                <img src={img} alt={imgAlt} />
                <h4>{title}</h4>
                <button
                  key={id}
                  className="btn"
                  onClick={() => {
                    openProjectModal();
                    populateProjectModalInformation(project);
                  }}
                >
                  View more
                </button>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
