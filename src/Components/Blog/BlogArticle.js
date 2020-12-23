import React from "react";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import BlogData from "./BlogData";
import { Link, useParams } from "react-router-dom";
import NavbarBlog from "../NavbarBlog";

const BlogArticle = () => {
  const { url } = useParams();
  const fetchedBlogArticle = BlogData.find(
    (blogArticle) => blogArticle.url === url
  );

  const markdownRenderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      );
    },
  };

  return (
    <>
      <NavbarBlog />
      <div className="container-fluid p-0" id="page-top">
        <section className="resume-section">
          <div className="resume-section-content">
            <h1>{fetchedBlogArticle.title}</h1>
            <ReactMarkdownWithHtml
              renderers={markdownRenderers}
              plugins={[gfm]}
              children={fetchedBlogArticle.content}
              allowDangerousHtml
            />
            <Link className="btn" to="/blog">
              Back to Articles
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogArticle;
