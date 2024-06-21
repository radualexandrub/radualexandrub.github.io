import { Link as LinkScroll } from "react-scroll";

function About() {
  return (
    <>
      <section className="resume-section hero" id="about">
        <div className="resume-section-content">
          <div className="mb-0 hero--title">
            Building and Maintaining{" "}
            <span className="text-primary">Lasting</span> Products. Keeping
            Customers <span className="text-primary">Happy</span>
          </div>
          <br />
          <div className="lead mb-4 hero--description">
            Hi, I’m a{" "}
            <h1 className="normalText">
              Software Developer based in Bucharest, Romania
            </h1>
            . With over three years of experience, I specialize in developing
            functional, easy-to-maintain web applications that help businesses
            thrive.
          </div>
          <div className="subheading mb-4">
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={200}
            >
              Contact Me
            </LinkScroll>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
