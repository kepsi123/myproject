import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBlog({ onAddBlog }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBlog({ title, content });
    setTitle("");
    setContent("");
    navigate("/"); // back to homepage
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="mb-3 text-center">Add Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Write blog content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
