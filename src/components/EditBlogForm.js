import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBlogPost } from "../redux/blogActions";
import "./styles.css"; // Import the global styles

function EditBlogForm() {
  const { id } = useParams();
  const blogPost = useSelector((state) =>
    state.blog.blogPosts.find((post) => post.id === id)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editedBlog, setEditedBlog] = useState(blogPost);

  const handleEdit = () => {
    // Dispatch the edit action
    dispatch(editBlogPost(editedBlog));
    
    // Navigate back to the homepage
    navigate("/");
  };

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="header">
        BLOG APP
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={editedBlog.title}
          onChange={(e) => setEditedBlog({ ...editedBlog, title: e.target.value })}
        />
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Content"
          value={editedBlog.content}
          onChange={(e) => setEditedBlog({ ...editedBlog, content: e.target.value })}
        />
      </div>
      <button className="btn btn-primary" onClick={handleEdit}>
        Save Changes
      </button>
    </div>
  );
}

export default EditBlogForm;
