import BlogData from "../Blog/BlogData";
import BlogCard from "../Blog/BlogCard";
import { Link } from "react-router-dom";
import imgBlog from "../../img/imgBlog.jpg";

export default function Blog() {
  return (
    <section className="resume-section" id="blog">
      <div className="resume-section-content">
        <h2 className="mb-4">Blog Articles</h2>
        {BlogData.slice(0, 3).map((blogArticle) => {
          return <BlogCard key={blogArticle.id} BlogData={blogArticle} />;
        })}

        <div className="blog-card">
          <img src={imgBlog} alt="Radu Bulai Blog" />
          <div>
            <Link to={`/blog`}>
              <h1>View all my Blog Articles</h1>
            </Link>
            <p>
              See all my blog articles <Link to={`/blog`}>here</Link> or on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.to/radualexandrub"
              >
                Dev.to!
              </a>
            </p>
            <ul className="tags">
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
