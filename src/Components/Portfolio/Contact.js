import { ContactForm } from "./ContactFormsSpree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDev,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="resume-section" id="contact">
      <div className="resume-section-content">
        <h2 className="mb-4">Contact</h2>
        <div className="subheading mb-4">
          <a href="mailto:radualexandrubulai@gmail.com">
            radualexandrubulai@gmail.com
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1LWma3CprEUah28nkyBCMdLo0bLGTMi0K/view?usp=sharing"
          >
            View my Resume
          </a>
        </div>

        <div className="social-icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            href="https://github.com/radualexandrub"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            href="https://www.linkedin.com/in/radu-alexandru-bulai/"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            href="https://dev.to/radualexandrub"
            title="Dev.to"
          >
            <FontAwesomeIcon icon={faDev} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            href="https://leetcode.com/radualexandrub/"
            title="LeetCode"
          >
            <FontAwesomeIcon icon={faCode} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            href="https://www.hackerrank.com/RaduAlexandruB"
            title="HackerRank"
          >
            <FontAwesomeIcon icon={faHackerrank} />
          </a>
        </div>
      </div>
      <div className="resume-section-content sectionContact">
        <ContactForm />
      </div>
    </section>
  );
}
