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
              <i className="devicon-javascript-plain" title="JavaScript"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-react-plain" title="React"></i>
            </li>
            <li className="list-inline-item">
              <i class="devicon-php-plain" title="PHP"></i>
            </li>
            <li className="list-inline-item">
              <i class="devicon-wordpress-plain" title="WordPress"></i>
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
            <li className="list-inline-item">
              <i className="devicon-mysql-plain" title="MySQL"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-html5-plain" title="HTML5"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-css3-plain" title="CSS3"></i>
            </li>
            <li className="list-inline-item">
              <i className="devicon-android-plain" title="Android SDK"></i>
            </li>
          </ul>
          <div className="subheading mb-2">Languages</div>
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <FontAwesomeIcon icon={faTerminal} />
              </span>
              Programming: <strong>JavaScript, PHP, Python, SQL, Java</strong>
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
              <strong>React, Next.js</strong> (Front-end)
            </li>
            <li>
              <strong>WordPress, Django</strong> (Back-end)
            </li>
            <li>
              <strong>Figma, Adobe Photoshop, Lightroom</strong> (Design)
            </li>
            <li>
              <strong>Git & GitHub</strong>
            </li>
            <li>
              <strong>Sublime Text, VS Code</strong> (Macros,
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
