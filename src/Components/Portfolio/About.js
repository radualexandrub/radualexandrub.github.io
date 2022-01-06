import { Link as LinkScroll } from "react-scroll";

function About() {
  return (
    <>
      <section className="resume-section hero" id="about">
        <div className="resume-section-content">
          <div className="mb-0 hero--title">
            I build amazing <span className="text-primary">experiences</span>{" "}
            between your business and your clients
          </div>
          <br />
          <div className="lead mb-4 hero--description">
            Hi, I’m a{" "}
            <h1 className="normalText">Junior Web Developer and Designer</h1>{" "}
            based on Bucharest, Romania. For more than a year, I developed
            beautiful and responsive websites that satisfied all the needs of
            clients in order to launch or improve their current businesses.
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
