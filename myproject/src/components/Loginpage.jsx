import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";

function Loginpage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (username === "Reshi" && password === "Reshi123") {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Login successful!");

      
      navigate("/Landing");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-page">
      
      <nav className="login-navbar">
        <div className="navbar-title">TravelBlog</div>
      </nav>

     
      <div className="login-box">
        <h1 className="title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="btn login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
