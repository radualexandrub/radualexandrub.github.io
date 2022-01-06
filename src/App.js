import React from "react";

import Navbar from "./Components/Navbar";
import About from "./Components/Portfolio/About";
import Education from "./Components/Portfolio/Education";
import Experience from "./Components/Portfolio/Experience";
import Skills from "./Components/Portfolio/Skills";
import ProjectsList from "./Components/Portfolio/Projects";
import { ProjectModalProvider } from "./Components/Portfolio/Projects/ProjectModalContext";
import Blog from "./Components/Portfolio/Blog";
import Contact from "./Components/Portfolio/Contact";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogHome from "./Components/Blog/BlogHome";
import NavbarBlog from "./Components/NavbarBlog";
import BlogArticle from "./Components/Blog/BlogArticle";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <main className="container-fluid p-0">
            <About />
            <Skills />
            <hr className="m-0" />
            <Experience />
            <hr className="m-0" />
            <Education />
            <hr className="m-0" />
            <ProjectModalProvider>
              <ProjectsList />
            </ProjectModalProvider>
            <hr className="m-0" />
            <Blog />
            <hr className="m-0" />
            <Contact />
          </main>
        </Route>
        <Route exact path="/blog">
          <div className="container-fluid p-0">
            <NavbarBlog />
            <BlogHome />
          </div>
        </Route>
        <Route path="/blog/:url" children={<BlogArticle />}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
