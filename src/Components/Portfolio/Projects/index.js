import React, { useState } from "react";
import projectsData from "./ProjectData";
import Categories from "./ProjectCategories";
import ProjectModal from "./ProjectModal";
import { useModalContext } from "./ProjectModalContext";
import imgGitHub from "../../../img/imgGitHub.webp";

const allCategories = [
  "All",
  ...new Set(projectsData.map((item) => item.category)),
];

const ProjectsList = () => {
  const [projects, setProjects] = useState(projectsData);
  const [categories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isAllCategoriesDisplayed, setIsAllCategoriesDisplayed] =
    useState(true);

  const filterItems = (category) => {
    if (category === "All") {
      setProjects(projectsData);
      setIsAllCategoriesDisplayed(true);
      setActiveCategory(category);
      return;
    }
    const newProjectsList = projectsData.filter(
      (item) => item.category === category
    );
    setProjects(newProjectsList);
    setIsAllCategoriesDisplayed(false);
    setActiveCategory(category);
  };

  const { openProjectModal, populateProjectModalInformation } =
    useModalContext();

  const openProjectModalAndPopulate = (project) => {
    openProjectModal();
    populateProjectModalInformation(project);
  };

  return (
    <section className="resume-section" id="projects">
      <div className="resume-section-content">
        <h2 className="mb-4">Side Projects</h2>

        <ProjectModal />

        <Categories
          categories={categories}
          filterItems={filterItems}
          activeCategory={activeCategory}
        />

        <div className="project-container">
          {projects.map((project) => {
            const { id, title, category, img, imgAlt } = project;

            return (
              <div className="project" key={id}>
                <img src={[img[0]]} alt={imgAlt} />
                <div className="project__content">
                  <h3>
                    <a onClick={() => openProjectModalAndPopulate(project)}>
                      {title}
                    </a>
                  </h3>
                  <button
                    key={id}
                    className="project-btn"
                    onClick={() => openProjectModalAndPopulate(project)}
                  >
                    Explore
                  </button>
                  <ul className="tags">
                    {Object.keys(project.tags).map((tagKey) => {
                      return <li key={tagKey}>{project.tags[tagKey]}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

          {isAllCategoriesDisplayed ? (
            <div className="project">
              <img src={imgGitHub} alt="Radu Alexandru Bulai GitHub" />
              <h3>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/radualexandrub?tab=repositories"
                >
                  See even more projects on GitHub
                </a>
              </h3>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/radualexandrub?tab=repositories"
                className="project-btn"
              >
                Explore
              </a>
              <ul className="tags">
                <li>GitHub</li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
