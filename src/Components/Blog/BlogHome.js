import React, { useEffect } from "react";
import BlogData from "./BlogData";
import BlogCard from "./BlogCard";

const BlogHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="resume-section" id="page-top">
        <div className="resume-section-content">
          <h1>My Articles</h1>
          {BlogData.map((blogArticle) => {
            return <BlogCard key={blogArticle.id} BlogData={blogArticle} />;
          })}
        </div>
      </section>
    </>
  );
};

export default BlogHome;
