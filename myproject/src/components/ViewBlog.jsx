import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewBlog.css";

function ViewBlog({ blogs, onDelete, onEdit }) {
  const navigate = useNavigate();
  const [editBlog, setEditBlog] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  const [updatedLocation, setUpdatedLocation] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);

  const handleEditClick = (blog) => {
    setEditBlog(blog);
    setUpdatedTitle(blog.title);
    setUpdatedContent(blog.content);
    setUpdatedLocation(blog.location);
    setUpdatedDate(blog.date);
    setUpdatedImage(blog.image);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onEdit(editBlog.id, {
      title: updatedTitle,
      content: updatedContent,
      location: updatedLocation,
      date: updatedDate,
      image: updatedImage,
    });
    setEditBlog(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedImage(reader.result); // base64 string for edited image
      };
      reader.readAsDataURL(file);
    }
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
        <h2 className="viewblog-heading"></h2>

        {blogs.length === 0 ? (
          <p className="no-blogs">No blogs added yet.</p>
        ) : (
          <div className="blog-card-grid">
            {blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                {editBlog && editBlog.id === blog.id ? (
                  <form onSubmit={handleUpdateSubmit} className="edit-form">
                    <input
                      type="text"
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      value={updatedLocation}
                      onChange={(e) => setUpdatedLocation(e.target.value)}
                      required
                    />
                    <input
                      type="date"
                      value={updatedDate}
                      onChange={(e) => setUpdatedDate(e.target.value)}
                      required
                    />
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <textarea
                      value={updatedContent}
                      onChange={(e) => setUpdatedContent(e.target.value)}
                      required
                    />
                    <div className="edit-actions">
                      <button type="submit" className="update-btn">Update</button>
                      <button type="button" className="cancel-btn" onClick={() => setEditBlog(null)}>Cancel</button>
                    </div>
                  </form>
                ) : (
                  <>
                    {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-location">{blog.location} | {blog.date}</p>
                    <p className="blog-content">{blog.content.length > 120 ? blog.content.slice(0, 120) + "..." : blog.content}</p>
                    <div className="card-buttons">
                      <button onClick={() => handleEditClick(blog)} className="edit-btn">Edit</button>
                      <button onClick={() => onDelete(blog.id)} className="delete-btn">Delete</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewBlog;
