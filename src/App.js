import "./App.css";
import About from "./Portfolio/About";
import Navbar from "./Portfolio/Navbar";
import Education from "./Portfolio/Education";
import Skills from "./Portfolio/Skills";
import Projects from "./Portfolio/Projects/ProjectsList";
import { ProjectModalProvider } from "./Portfolio/Projects/ProjectModalContext";
import Contact from "./Portfolio/Contact";

function App() {
  return (
    <>
      <div id="page-top">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NV2B7ND"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />

        <div className="container-fluid p-0">
          <ProjectModalProvider>
            <About />

            <Education />

            <Skills />

            <Projects />

            <Contact />
          </ProjectModalProvider>
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
      </div>
    </>
  );
}

export default App;
