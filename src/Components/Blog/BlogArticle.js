import React, { useEffect } from "react";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import BlogData from "./BlogData";
import { Link, useParams } from "react-router-dom";
import NavbarBlog from "../NavbarBlog";
import MetaTags from "react-meta-tags";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaTags>
        <title>{fetchedBlogArticle.title}</title>
        <meta name="description" content={fetchedBlogArticle.description} />
        <meta property="og:title" content={fetchedBlogArticle.title} />
        <meta
          property="og:description"
          content={fetchedBlogArticle.description}
        />
        <meta property="og:image" content={fetchedBlogArticle.img} />
        <meta
          property="og:url"
          content={"https://radubulai.com/blog/" + fetchedBlogArticle.url}
        />
      </MetaTags>
      <NavbarBlog />
      <div className="container-fluid p-0" id="page-top">
        <section className="resume-section">
          <div className="resume-section-content-blog-article">
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
