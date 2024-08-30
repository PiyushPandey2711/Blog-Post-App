import React from "react";
import { useSelector } from "react-redux";
import BlogList from "./BlogList";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import styles from "./styles.css"; // Import the global styles

function HomePage() {
  const blogPosts = useSelector((state) => state.blog.blogPosts);

  return (
    <div className={styles.container}>
      <div className="row">
        <div className={`col-md-12 ${styles.blogList}`}>
          <BlogList blogPosts={blogPosts} />
        </div>
      </div>

      {/* Center-align the "Add New Blog" button */}
      <div className="row justify-content-center">
        <div className="col-md-4 text-center">
            <br></br>
          <Link to="/add-blog" className={`btn btn-danger ${styles.btnAddBlog}`}>
            Add New Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
