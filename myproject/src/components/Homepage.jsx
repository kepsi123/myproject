import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-navbar">
        <div>
          <button className="nav-btn">Add Blog</button>
          <button className="nav-btn">Edit Blog</button>
          <button className="nav-btn">View Blog</button>
        </div>
        <span className="header-title">Homepage</span>
      </div>

      <div className="homepage-content">
        <h1 className="homepage-quote">Explore Dream Discover</h1>
      </div>
    </div>
  );
}

export default Homepage;
