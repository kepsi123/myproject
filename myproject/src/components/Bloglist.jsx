import React from "react";
import { Link, useNavigate } from "react-router-dom";

function BlogList({ blogs, onEditBlog }) {
  const navigate = useNavigate();

  const handleEdit = (blog) => {
    const newTitle = prompt("Edit Title:", blog.title);
    const newContent = prompt("Edit Content:", blog.content);
    if (newTitle && newContent) {
      onEditBlog({ ...blog, title: newTitle, content: newContent });
    }
  };

  const handleView = (blog) => {
    alert(`Title: ${blog.title}\nContent: ${blog.content}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Blogs</h2>
      <Link to="/add">
        <button>Add New Blog</button>
      </Link>
      {blogs.length === 0 ? (
        <p>No blogs added yet.</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} style={{ marginBottom: "15px" }}>
              <strong>{blog.title}</strong>
              <div>
                <button onClick={() => handleView(blog)}>View</button>
                <button onClick={() => handleEdit(blog)}>Edit</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogList;
