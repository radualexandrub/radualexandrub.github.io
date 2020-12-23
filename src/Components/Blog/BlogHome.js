import React, { useState } from "react";
import BlogData from "./BlogData";
import { Link } from "react-router-dom";

const BlogHome = () => {
  const [blogArticles, setBlogArticles] = useState(BlogData);
  return (
    <>
      <section className="resume-section" id="page-top">
        <div className="resume-section-content">
          <h1>My Articles</h1>
          {blogArticles.map((blogArticle) => {
            return <BlogCard key={blogArticle.id} BlogData={blogArticle} />;
          })}
        </div>
      </section>
    </>
  );
};

const BlogCard = ({ BlogData }) => {
  return (
    <div className="blog-card">
      <img src={BlogData.img} alt={BlogData.imgAlt} />
      <div>
        <Link to={`/blog/${BlogData.url}`}>
          <h1>{BlogData.title}</h1>
        </Link>
        <p>
          {BlogData.date} · {BlogData.minread} min read
        </p>
        <ul className="tags">
          {Object.keys(BlogData.tags).map((tagKey) => {
            return <li key={tagKey}>{BlogData.tags[tagKey]}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default BlogHome;
