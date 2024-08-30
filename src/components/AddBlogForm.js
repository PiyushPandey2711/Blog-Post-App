import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlogPost } from "../redux/blogActions";
import "./styles.css"; // Import the global styles

function AddBlogForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newBlog, setNewBlog] = useState({ title: "", content: "" });
    const [validationError, setValidationError] = useState(null);

    const handleAddBlog = () => {
        if (newBlog.title.trim() === "" || newBlog.content.trim() === "") {
            setValidationError("Both Fields are mandatory.");
            return;
        }

        // You can generate a unique ID for the new blog post here
        const newPost = {
            ...newBlog,
            id: Math.random().toString(36).substring(7),
            likes: 0, // Initialize likes to 0
        };
        dispatch(addBlogPost(newPost));
        setNewBlog({ title: "", content: "" });
        setValidationError(null);

        // Navigate back to the homepage
        navigate("/");
    };

    return (
        <div className="container mt-4">
            <div className="header">BLOG APP</div>
            <div className="card">
                <div className="card-body">
                    <input
                        type="text"
                        placeholder="Title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                        className="form-control mb-2"
                    />
                    <textarea
                        placeholder="Content"
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                        className="form-control mb-3"
                    />
                    {validationError && (
                        <div className="alert alert-danger">{validationError}</div>
                    )}
                    <button
                        onClick={handleAddBlog}
                        className="btn btn-primary"
                    >
                        Add Blog
                    </button>
                    <button className="btn btn-secondary" onClick={() => navigate("/")}>
                        Go Back
                    </button>
                </div>
            </div>

        </div>
    );
}

export default AddBlogForm;