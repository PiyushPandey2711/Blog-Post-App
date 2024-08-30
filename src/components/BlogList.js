import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Import the global styles

function BlogList({ blogPosts }) {
  return (
    <div className="container mt-4">
      <div className="header">
        BLOG APP
      </div>
      <div className="row">
        {blogPosts.map((post) => (

          <div class="card" style={{ width: "18rem", margin: "15px" }}>
            <div class="card-body">
              <h5 class="card-title"><Link to={`/blog/${post.id}`}>{post.title}</Link></h5>
              <p class="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}

export default BlogList;
