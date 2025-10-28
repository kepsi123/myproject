// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; 

function UserNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/login");
  };

  return (
    <nav className="dashboard-navbar">
      <div className="d-flex justify-content-between align-items-center w-100 px-3">
        <div className="navbar-title">Travel Blog</div>

        <div className="d-flex gap-2">
          <Link to="/Landing">
            <button className="btn btn-login">Home</button>
          </Link>
          <Link to="/about">
            <button className="btn btn-login">About</button>
          </Link>
          <Link to="/profile">
            <button className="btn btn-login">Profile</button>
          </Link>

          
          <button onClick={handleLogout} className="btn btn-login">
            Logout
          </button>

          {/* <Link to="/login">
            <button className="btn btn-login">Login</button>
          </Link> */}
        </div>
      </div>
    </nav>
  );
}

export default UserNav;
