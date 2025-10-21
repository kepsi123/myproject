import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addblog.css";

function Addblog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content || !location || !date || !image) {
      alert("Please fill all fields and upload an image!");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      content,
      location,
      date,
      image,
    };

    // Save to localStorage
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    localStorage.setItem("blogs", JSON.stringify([newBlog, ...existingBlogs]));

    // Reset form
    setTitle("");
    setContent("");
    setLocation("");
    setDate("");
    setImage(null);

    // Alert and redirect
    alert("Blog added successfully!");
    navigate("/dashboard");
  };

  const handleLogout = () => {
    navigate("/landing");
  };

  return (
    <div>
      <nav className="addblog-navbar">
        <div className="navbar-left">TravelBlog</div>
        <div className="navbar-right">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="addblog-container">
        <div className="addblog-card">
          <h2 className="addblog-title">Add New Travel Blog</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Blog Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                required
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                required
              />
            </div>

            <div className="form-group">
              <label>Visit Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                required
              />
            </div>

            <div className="form-group">
              <label>Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog content..."
                required
              />
            </div>

            <button type="submit" className="addblog-btn">
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addblog;
