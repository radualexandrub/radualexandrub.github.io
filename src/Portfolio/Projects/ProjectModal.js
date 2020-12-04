import React from "react";
import { useModalContext } from "./ProjectModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

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

        {projectModalInformation.img ? (
          <Carousel
            showThumbs={false}
            swipeable={true}
            transitionTime={200}
            useKeyboardArrows={true}
          >
            {projectModalInformation.img.map((image) => {
              return (
                <img
                  key={projectModalInformation.id}
                  src={image}
                  alt={projectModalInformation.imgAlt}
                ></img>
              );
            })}
          </Carousel>
        ) : null}

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
