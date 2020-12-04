import imgProfile from "../img/imgProfile.jpg";
import { Link, animateScroll } from "react-scroll";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand" href="#page-top">
        <Link to="page-top" spy={true} smooth={true} duration={200}>
          <span className="d-block d-lg-none">Radu-Alexandru Bulai</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-3"
              src={imgProfile}
              alt="Radu Alexandru Bulai"
            />
            <br />
            Radu-Alexandru
            <br />
            Bulai
          </span>
        </Link>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              activeClass="active"
              className="nav-link"
              to="about"
              spy={true}
              smooth={true}
              duration={200}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              className="nav-link"
              to="education"
              spy={true}
              smooth={true}
              duration={200}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              className="nav-link"
              to="skills"
              spy={true}
              smooth={true}
              duration={200}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              className="nav-link"
              to="projects"
              spy={true}
              smooth={true}
              duration={200}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              className="nav-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={200}
            >
              Contact
            </Link>
          </li>
          <br />
          <div className="theme-switch-wrapper nav-item">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
