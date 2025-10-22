import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    const newBlog = { id: Date.now(), title, content, location, date, image };
    const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    localStorage.setItem("blogs", JSON.stringify([newBlog, ...existingBlogs]));

    setTitle(""); setContent(""); setLocation(""); setDate(""); setImage(null);
    alert("Blog added successfully!");
    navigate("/dashboard");
  };

  return (
    <div>
      {/* ---------- Navbar (same as login page / landing page) ---------- */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid d-flex justify-content-between px-4">
          <a className="navbar-brand fw-bold" href="#">
            Travel Blog
          </a>
          <div className="d-flex align-items-center gap-2">
            <Link to="/home"><button className="btn btn-login">Home</button></Link>
            <Link to="/about"><button className="btn btn-login">About</button></Link>
            <Link to="/profile"><button className="btn btn-login">Profile</button></Link>
            <Link to="/logout"><button className="btn btn-login">Logout</button></Link>
            <Link to="/login"><button className="btn btn-login">Login</button></Link>
          </div>
        </div>
      </nav>

      {/* ---------- Add Blog Form (unchanged) ---------- */}
      <div className="addblog-container">
        <div className="addblog-card">
          <h2 className="addblog-title">Add New Travel Blog</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Blog Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter blog title" required />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" required />
            </div>
            <div className="form-group">
              <label>Visit Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Image</label>
              <input type="file" accept="image/*" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} required />
            </div>
            <div className="form-group">
              <label>Content</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your blog content..." required />
            </div>
            <button type="submit" className="addblog-btn">Add Blog</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addblog;
