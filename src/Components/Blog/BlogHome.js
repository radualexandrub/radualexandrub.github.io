import React from "react";
import BlogData from "./BlogData";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogHome = () => {
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
      <section className="resume-section">
        <div className="resume-section-content">
          <h1>{BlogData[0].title}</h1>
          <ReactMarkdownWithHtml
            renderers={markdownRenderers}
            plugins={[gfm]}
            children={BlogData[0].content}
            allowDangerousHtml
          />
        </div>
      </section>
    </>
  );
};

export default BlogHome;
