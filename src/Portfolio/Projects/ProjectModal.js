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
      <div className="modal-container">
        <h3>{projectModalInformation.title}</h3>
        <button className="close-modal-btn" onClick={closeProjectModal}>
          close
        </button>
      </div>
    </div>
  );
}
