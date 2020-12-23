import React from "react";
import imgProfile from "../img/imgProfile.jpg";
import { useState, useRef, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

function NavbarBlog() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbarOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navbarRef = useRef(null);
  useEffect(() => {
    /* Close the Mobile Navbar when user clicks outside of it */
    const setNavbarClosed = (event) => {
      if (navbarRef.current && navbarRef.current.contains(event.target)) {
        return;
      }

      setIsNavbarOpen(false);
    };

    document.addEventListener("mousedown", setNavbarClosed);
    return () => document.removeEventListener("mousedown", setNavbarClosed);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      ref={navbarRef}
      id="sideNav"
    >
      <LinkScroll
        className="navbar-brand"
        to="page-top"
        spy={true}
        smooth={true}
        duration={200}
      >
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
      </LinkScroll>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => toggleNavbarOpen()}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`${
          isNavbarOpen ? "navbar-collapse" : "collapse navbar-collapse"
        }`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
              <br />
              Articles
            </Link>
            <Link className="nav-link" to="/">
              Back to
              <br />
              Portfolio
            </Link>
          </li>
          <br />
          <DarkModeToggle />
        </ul>
      </div>
    </nav>
  );
}

export default NavbarBlog;
