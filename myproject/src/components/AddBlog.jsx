import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AddBlog.css";




function AddBlog({ onAddBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBlog({ title, content });
    setTitle("");
    setContent("");
    navigate("/");
  };
  
  return (
    <div>


    
      <div className="add-blog-page">
        <div className="add-blog-card">
          <h2 className="add-blog-title">Add Blog</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="add-blog-label">Title</label>
              <input
                type="text"
                className="add-blog-input"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="add-blog-label">Content</label>
              <textarea
                className="add-blog-textarea"
                placeholder="Write blog content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="add-blog-button">
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
