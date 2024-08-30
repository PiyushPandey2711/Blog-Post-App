import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBlogPost, likeBlogPost } from "../redux/blogActions";
import "./styles.css"; // Import the global styles

function BlogDetails() {
  const { id } = useParams();
  const blogPost = useSelector((state) =>
    state.blog.blogPosts.find((post) => post.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    // Implement logic to navigate to the edit form
    navigate(`/edit/${id}`);
  };

  const handleDelete = () => {
    dispatch(deleteBlogPost(id));
    navigate("/");
  };

  const handleLike = () => {
    dispatch(likeBlogPost(id));
  };

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="header">
        BLOG APP
      </div>
      
      <div>
      <div className="body">
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
      </div>
      
        <button className="btn btn-primary" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-success" onClick={handleLike}>
          Like ({blogPost.likes})
        </button>
        <button type="button" className="btn btn-light" >
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;
