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
          content="https://lh3.googleusercontent.com/GATYtsVPjcE_Fy794YsIrpP0nuIq5B0fp7pNW_m-hHZiL_SHsk2oC5PBa5w-qi-KvN1TRrmxP8XrzCp3WrZLF1AWVdtMKO726ly0ILChPISXTtX2VO3umqq3yjINOPbFMmsTEMeqfTU=w2400"
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
