import React, { useRef, useEffect } from "react";
import { useModalContext } from "./ProjectModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "../../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import LazyLoad from "react-lazyload";

export default function ProjectModal() {
  const {
    isProjectModalOpen,
    closeProjectModal,
    projectModalInformation,
  } = useModalContext();

  const modalRef = useRef(null);
  useEffect(() => {
    /* Close the Modal when user clicks outside of it */
    const setModalClosed = (event) => {
      if (modalRef.current && modalRef.current.contains(event.target)) {
        return;
      }

      closeProjectModal();
    };

    document.addEventListener("mousedown", setModalClosed);
    return () => document.removeEventListener("mousedown", setModalClosed);
  }, []);

  return (
    <div
      className={`${
        isProjectModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container" ref={modalRef}>
        <div className="modal-container-image-desc">
          <LazyLoad height={"100%"}>
            {projectModalInformation.img ? (
              <Carousel
                showThumbs={false}
                showStatus={false}
                swipeable={true}
                transitionTime={200}
                useKeyboardArrows={true}
                infiniteLoop={true}
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
          </LazyLoad>
          <div>
            <button className="close-modal-btn" onClick={closeProjectModal}>
              close
            </button>
            <h3>{projectModalInformation.title}</h3>
            <div>
              <p>{projectModalInformation.description}</p>
              <div>
                {projectModalInformation.livelink ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    href={projectModalInformation.livelink || "#"}
                    title={projectModalInformation.title}
                  >
                    <FontAwesomeIcon icon={faDesktop} /> View Live
                  </a>
                ) : null}
                {projectModalInformation.github ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    href={projectModalInformation.github}
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
