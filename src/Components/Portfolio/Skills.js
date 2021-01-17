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
              <i className="devicon-python-plain" title="Python"></i>
            </li>
            <li className="list-inline-item">
              <i
                className="devicon-django-plain"
                title="Django Web Framework"
              ></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-javascript-plain" title="JavaScript"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-react-plain" title="React"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-mysql-plain" title="MySQL"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-android-plain" title="Android SDK"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-html5-plain" title="HTML5"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-css3-plain" title="CSS3"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-git-plain" title="Git"></i>
            </li>
          </ul>
          <div className="subheading mb-2">Languages</div>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faTerminal} />
              </span>
              Programming:{" "}
              <strong>Python, JavaScript, SQL, Java (Android SDK)</strong>
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
              <strong>React</strong> (Front-end)
            </li>
            <li>
              <strong>Django</strong> (Back-end)
            </li>
            <li>
              <strong>Keras</strong>
            </li>
            <li>
              <strong>Git & GitHub</strong>
            </li>
            <li>
              <strong>Sublime Text, VS Code</strong> (Macros,
              Packages/Extensions, Code Formating)
            </li>
            <li>
              <strong>Adobe Lightroom, Photoshop</strong>
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
              Fast learner of new things
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
              Good leadership skills from being the head of the students groups
              I belonged to
            </li>
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Continuous drive for self-improvement and self-motivation
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}
