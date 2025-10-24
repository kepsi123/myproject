// src/components/ViewBlog.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./ViewBlog.css";

function ViewBlog() {
  const [blogList, setBlogList] = useState([]);
  const [activePage, setActivePage] = useState("viewblog");

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogList(savedBlogs);
  }, []);

  const handleDelete = (id) => {
    const updatedList = blogList.filter((b) => b.id !== id);
    setBlogList(updatedList);
    localStorage.setItem("blogs", JSON.stringify(updatedList));
  };

  return (
    <div className="dashboard-layout">
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
          </div>
        </div>
      </nav>

      <div className="main-content">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="viewblog-content with-sidebar">
          <h2 className="viewblog-heading">My Travel Blogs</h2>
          {blogList.length === 0 ? (
            <p className="no-blogs">No blogs added yet.</p>
          ) : (
            <div className="blog-card-grid">
              {blogList.map((blog) => (
                <div key={blog.id} className="blog-card">
                  {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-location">{blog.location} | {blog.date}</p>
                  <p className="blog-content">{blog.content}</p>
                  <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewBlog;
