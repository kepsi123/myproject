import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Landingpage.css";

function Landingpage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from localStorage
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content text-center text-white">
          <h1 className="display-3 fw-bold">Explore the World with Us</h1>
          <p className="lead">
            Discover hidden places, amazing cultures, and unforgettable journeys.
          </p>
        </div>
      </section>

      {/* Latest Adventures */}
      <section id="blogs" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Latest Adventures</h2>
          <p className="text-muted mb-4">
            Check out our travel stories, guides, and tips to inspire your next journey.
          </p>

          <div className="card-row">
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog.id} className="card shadow-sm">
                  <img src={blog.image} alt={blog.title} />
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.content}</p>
                    <p className="card-meta">{blog.location} | {blog.date}</p>
                    <a href="#" className="btn">Read More</a>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs added yet.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landingpage;
