import React from "react";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";

function Loginpage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="login-page">
      {/* 🔹 Navbar */}
      <nav className="login-navbar">
        <div className="navbar-title">TravelBlog</div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* 🔹 Login Box */}
      <div className="login-box">
        <h1 className="title">Login</h1>
        <form>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="button-group">
            <button type="submit" className="btn login-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
