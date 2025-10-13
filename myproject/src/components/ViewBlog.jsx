import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewBlog.css";

function ViewBlog() {
  const navigate = useNavigate();
  const [blogList, setBlogList] = useState([]);

  // Load blogs from localStorage
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
    <div className="viewblog-container">
      <nav className="viewblog-navbar">
        <div className="navbar-left">TravelBlog</div>
        <button onClick={() => navigate("/dashboard")} className="back-btn">
          ⬅ Back to Dashboard
        </button>
      </nav>

      <div className="viewblog-content">
        <h2 className="viewblog-heading">My Travel Blogs</h2>

        {blogList.length === 0 ? (
          <p className="no-blogs">No blogs added yet.</p>
        ) : (
          <div className="blog-card-grid">
            {blogList.map((blog) => (
              <div key={blog.id} className="blog-card">
                {blog.image && (
                  <img src={blog.image} alt={blog.title} className="blog-image" />
                )}
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-location">{blog.location} | {blog.date}</p>
                <p className="blog-content">
                  {blog.content.length > 120
                    ? blog.content.slice(0, 120) + "..."
                    : blog.content}
                </p>
                <div className="card-buttons">
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewBlog;
