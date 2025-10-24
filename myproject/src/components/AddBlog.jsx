// src/components/Addblog.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "./Addblog.css";

function Addblog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [activePage, setActivePage] = useState("addblog");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !location || !date || !image) {
      alert("Please fill all fields and upload an image!");
      return;
    }

    const newBlog = { id: Date.now(), title, content, location, date, image };
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    localStorage.setItem("blogs", JSON.stringify([newBlog, ...existingBlogs]));

    setTitle("");
    setContent("");
    setLocation("");
    setDate("");
    setImage(null);

    alert("Blog added successfully!");
    navigate("/viewblog");
  };

  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="main-content">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="addblog-container">
          <div className="addblog-card">
            <h2 className="addblog-title">Add New Travel Blog</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog title"
                />
              </div>

              <div className="form-group">
                <label>Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your travel story..."
                />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter location"
                />
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => setImage(reader.result);
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>

              <button type="submit" className="addblog-btn">
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addblog;
