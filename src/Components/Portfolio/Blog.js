import BlogData from "../Blog/BlogData";
import BlogCard from "../Blog/BlogCard";
import { Link } from "react-router-dom";
import imgBlog from "../../img/imgBlog.webp";

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
              <div className="blog-card--title">View all my Blog Articles</div>
            </Link>
            <p>
              See all my{" "}
              <Link className="blog-card--link" to={`/blog`}>
                blog articles here
              </Link>{" "}
              or on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dev.to/radualexandrub"
                className="blog-card--link"
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
