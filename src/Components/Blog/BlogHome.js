import React, { useEffect } from "react";
import BlogData from "./BlogData";
import BlogCard from "./BlogCard";
import MetaTags from "react-meta-tags";

const BlogHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaTags>
        <title>Radu-Alexandru Bulai | Blog</title>
        <meta
          name="description"
          content="View all blog articles from Radu-Alexandru Bulai!"
        />
        <meta property="og:title" content="Radu-Alexandru Bulai | Blog" />
        <meta
          property="og:description"
          content="View all blog articles from Radu-Alexandru Bulai!"
        />
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/kNROru1jxtNWYXiRKFmJSnStqrmjziYJcYCCNpYrPrC8CmUksyxV3FNdyvnp1AWyJcBZvpFT46LWYzzKrNrNpsX4L_dyfaW9HcZPrHkx7kOlaTVR5pVK7fubfQ94II7gYFT0DJT6F3w=w2400"
        />
        <meta property="og:url" content="https://radubulai.com/blog" />
      </MetaTags>
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
