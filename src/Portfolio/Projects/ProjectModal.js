import React from "react";
import { useModalContext } from "./ProjectModalContext";

export default function ProjectModal() {
  const {
    isProjectModalOpen,
    closeProjectModal,
    projectModalInformation,
  } = useModalContext();
  return (
    <div
      className={`${
        isProjectModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container" id="myModal">
        <h3>{projectModalInformation.title}</h3>
        <img src={projectModalInformation.img}></img>
        {projectModalInformation.livelink ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            href={projectModalInformation.livelink}
            title="CodingTranquillity Blog"
          >
            <i className="fas fa-desktop"></i> View Website
          </a>
        ) : null}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          href={projectModalInformation.github}
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <p>{projectModalInformation.description}</p>
        <button className="close-modal-btn" onClick={closeProjectModal}>
          close
        </button>
      </div>
    </div>
  );
}
