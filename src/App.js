import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/Portfolio/About";
import Education from "./Components/Portfolio/Education";
import Skills from "./Components/Portfolio/Skills";
import ProjectsList from "./Components/Portfolio/Projects/ProjectsList";
import { ProjectModalProvider } from "./Components/Portfolio/Projects/ProjectModalContext";
import Blog from "./Components/Portfolio/Blog";
import Contact from "./Components/Portfolio/Contact";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import BlogHome from "./Components/Blog/BlogHome";
import NavbarBlog from "./Components/NavbarBlog";
import BlogArticle from "./Components/Blog/BlogArticle";
import MetaTags from "react-meta-tags";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-NV2B7ND",
};

TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <div id="page-top">
        <Switch>
          <Route exact path="/">
            <MetaTags>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta name="author" content="Radu Alexandru Bulai" />
              <title>Radu-Alexandru Bulai | Portfolio</title>
              <meta
                name="description"
                content="Radu-Alexandru Bulai Portfolio, Skills and Projects"
              />
              <meta
                property="og:title"
                content="Radu-Alexandru Bulai | Portfolio"
              />
              <meta
                property="og:description"
                content="Radu-Alexandru Bulai Portfolio, Skills and Projects"
              />
              <meta
                property="og:image"
                content="https://lh3.googleusercontent.com/GATYtsVPjcE_Fy794YsIrpP0nuIq5B0fp7pNW_m-hHZiL_SHsk2oC5PBa5w-qi-KvN1TRrmxP8XrzCp3WrZLF1AWVdtMKO726ly0ILChPISXTtX2VO3umqq3yjINOPbFMmsTEMeqfTU=w2400"
              />
              <meta property="og:url" content="https://radubulai.com" />
              <meta name="theme-color" content="#121416" />
            </MetaTags>
            <div className="container-fluid p-0">
              <Navbar />
              <About />
              <Education />
              <Skills />
              <ProjectModalProvider>
                <ProjectsList />
              </ProjectModalProvider>
              <Blog />
              <Contact />
            </div>
          </Route>
          <Route exact path="/blog">
            <div className="container-fluid p-0">
              <NavbarBlog />
              <BlogHome />
            </div>
          </Route>
          <Route path="/blog/:url" children={<BlogArticle />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
