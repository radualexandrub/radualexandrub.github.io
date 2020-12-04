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
              <div key={id}>
                <img src={[img[0]]} alt={imgAlt} />
                <h4>{title}</h4>
                <button
                  key={id}
                  className="project-btn"
                  onClick={() => {
                    openProjectModal();
                    populateProjectModalInformation(project);
                  }}
                >
                  Explore
                </button>
                <ul className="tags">
                  {Object.keys(project.tags).map((tagKey) => {
                    return <li key={tagKey}>{project.tags[tagKey]}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
