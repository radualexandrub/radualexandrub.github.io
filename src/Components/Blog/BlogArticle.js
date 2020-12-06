import React, { useState, useEffect } from "react";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import BlogData from "./BlogData";
import { Link, useParams } from "react-router-dom";

const BlogArticle = () => {
  const { title, setTitle } = useState("Article name");
  const { content, setContent } = useState("Article content");
  const { id } = useParams();
  useEffect(() => {
    const newBlog = BlogData.find(
      (blogArticle) => blogArticle.id === parseInt(id)
    );
    setTitle(newBlog.title);
    setContent(newBlog.content);
  }, []);

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
      <h1>{title}</h1>
      <ReactMarkdownWithHtml
        renderers={markdownRenderers}
        plugins={[gfm]}
        children={content}
        allowDangerousHtml
      />
      <Link to="/blog">Back to Articles</Link>
    </>
  );
};

export default BlogArticle;
