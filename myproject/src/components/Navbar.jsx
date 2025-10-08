import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddBlog.css"; 

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to Landing page
    navigate("/landing");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyBlogApp</div>
      <ul className="navbar-links">
        <li>
         
        </li>
        
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            style={{
              background: "#608c9aff",
              color: "white",
              border: "none",
              padding: "3px 7px",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
