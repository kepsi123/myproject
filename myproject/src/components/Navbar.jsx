// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Shared CSS for navbar

function Navbar() {
  return (
    <nav className="dashboard-navbar">
      <div className="d-flex justify-content-between align-items-center w-100 px-3">
        {/* Left top corner */}
        <div className="navbar-title">Travel Blog</div>

        {/* Right top corner buttons */}
        <div className="d-flex gap-2">
          <Link to="/home">
            <button className="btn btn-login">Home</button>
          </Link>
          <Link to="/about">
            <button className="btn btn-login">About</button>
          </Link>
          <Link to="/profile">
            <button className="btn btn-login">Profile</button>
          </Link>
          <Link to="/logout">
            <button className="btn btn-login">Logout</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-login">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
