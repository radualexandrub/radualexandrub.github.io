function About() {
  return (
    <>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-4">Education</h2>

          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Master's Degree: Computer Vision</h3>
              <div className="subheading mb-3">
                Advanced Digital Imaging Techniques (TAID), ETTI, University
                "Politehnica" of Bucharest
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Oct 2020 - Present</span>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://master-taid.ro/"
              >
                Website
              </a>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
            <div className="flex-grow-1">
              <h3 className="mb-0">Bachelor's Degree: Computer Science</h3>
              <div className="subheading mb-3">
                Faculty of Electronics and Information Technology, University
                "Politehnica" of Bucharest
              </div>
              <p>
                Specialization in Computers and Information Technology.
                <br />
                Relevant studies: Computer Programming, Data Structures and
                Algorithms, Object-Oriented Programming, Database Design, APIs,
                Image processing and analysis, Artificial Intelligence
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                Oct 2016 - Jul 2020
                <br />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.electronica.pub.ro/"
                >
                  Website
                </a>
              </span>
            </div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Certifications:</h3>
              <div className="subheading">
                JavaScript Algorithms and Data Structures
              </div>
              <p>
                Developer Certification, representing over 30 hours of
                coursework. Issued on November 2020, by freeCodeCamp.
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.freecodecamp.org/certification/radualexandrub/javascript-algorithms-and-data-structures"
                >
                  <br />
                  See Credential
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
}

export default About;
