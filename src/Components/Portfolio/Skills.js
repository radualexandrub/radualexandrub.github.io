import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faCode, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-4">Skills</h2>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="devicon-java-plain" title="Java"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-javascript-plain" title="JavaScript"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-react-plain" title="React"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-angularjs-plain" title="Angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-php-plain" title="PHP"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-wordpress-plain" title="WordPress"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-python-plain" title="Python"></i>
            </li>
            <li className="list-inline-item">
              <i
                className="devicon-django-plain"
                title="Django Web Framework"
              ></i>
            </li>
          </ul>
          <div className="subheading mb-2">Languages</div>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faTerminal} />
              </span>
              Programming:{" "}
              <strong>Java, JavaScript/TypeScript, Python, PHP</strong>
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faCode} />
              </span>
              Markup & Styling:{" "}
              <strong>
                HTML & CSS, Markdown, LaTeX (Document Preparation)
              </strong>
            </li>
          </ul>

          <div className="subheading mb-2">Frameworks and Tools</div>
          <ul>
            <li>
              Front-end: <strong>Angular, React, Next.js</strong>
            </li>
            <li>
              Back-end: <strong>SpringBoot, Django, WordPress</strong>
            </li>
            <li>
              Design: <strong>Figma, Adobe Photoshop, Lightroom</strong>
            </li>
            <li>
              <strong>Git & GitHub</strong>
            </li>
            <li>
              <strong>IntelliJ IDEA, Sublime Text, VS Code</strong> (Macros,
              Packages/Extensions, Code Formating)
            </li>
            <li>
              <strong>Google Suite, Microsoft Office Suite</strong>
            </li>
          </ul>

          <div className="subheading mb-2">Soft Skills</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Fast learner, continuous drive for self-improvement and
              self-motivation
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Consistency in organizing and planning tasks
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Hard working with a strong motivation to bring on the best
              possible results
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Problem-solver and decision making while taking full
              responsability of my actions
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
