import React, { useState, useContext } from "react";

const ProjectModalContext = React.createContext();

const ProjectModalProvider = ({ children }) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [projectModalInformation, setProjectModalInformation] = useState({});

  const openProjectModal = () => {
    setIsProjectModalOpen(true);
  };
  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
  };
  const populateProjectModalInformation = (modalInfo) => {
    setProjectModalInformation(modalInfo);
  };

  return (
    <ProjectModalContext.Provider
      value={{
        isProjectModalOpen,
        openProjectModal,
        closeProjectModal,
        projectModalInformation,
        populateProjectModalInformation,
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
};

// use this custom hook instead of importing both useContext and ProjectModalContext
export const useModalContext = () => {
  return useContext(ProjectModalContext);
};

export { ProjectModalContext, ProjectModalProvider };
