import React from "react";
import { useModalContext } from "./ProjectModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
      <div className="modal-container">
        <h3>{projectModalInformation.title}</h3>
        <img src={projectModalInformation.img}></img>
        <div>
          {projectModalInformation.livelink ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              href={projectModalInformation.livelink}
              title="CodingTranquillity Blog"
            >
              <FontAwesomeIcon icon={faDesktop} /> View Live
            </a>
          ) : null}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            href={projectModalInformation.github}
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
        <p>{projectModalInformation.description}</p>
        <button className="close-modal-btn" onClick={closeProjectModal}>
          close
        </button>
      </div>
    </div>
  );
}
