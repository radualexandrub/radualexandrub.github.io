import Navbar from "./Components/Navbar";
import About from "./Components/Portfolio/About";
import Education from "./Components/Portfolio/Education";
import Skills from "./Components/Portfolio/Skills";
import Projects from "./Components/Portfolio/Projects/ProjectsList";
import { ProjectModalProvider } from "./Components/Portfolio/Projects/ProjectModalContext";
import Contact from "./Components/Portfolio/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from "./Components/Blog/BlogHome";

function App() {
  return (
    <Router>
      <Navbar />
      <div id="page-top">
        <Switch>
          <div className="container-fluid p-0">
            <Route exact path="/">
              <About />
              <Education />
              <Skills />
              <ProjectModalProvider>
                <Projects />
              </ProjectModalProvider>
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
