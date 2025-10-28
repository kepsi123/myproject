import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Initialize default admin in localStorage
  useEffect(() => {
    const admins = JSON.parse(localStorage.getItem("admins")) || [];
    const exists = admins.some((admin) => admin.username === "kepsi");
    if (!exists) {
      admins.push({ username: "kepsi", password: "kepsi123" });
      localStorage.setItem("admins", JSON.stringify(admins));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const admins = JSON.parse(localStorage.getItem("admins")) || [];
    const user = admins.find(
      (admin) => admin.username === username && admin.password === password
    );

    if (user) {
      alert("Login successful!");
      navigate("/dashboard"); // redirect to dashboard
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="admin-login-page">
      {/* Sign Out link at top-right */}
      {/* <Link to="/landing" className="signout-link">
        SignOut
      </Link> */}

      <div className="admin-login-container">
        <h2 className="admin-login-title">Admin</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>

          <div className="login-links">
            <Link to="/forgot" className="forgot-link">
              Forgot Password?
            </Link>
            <span className="separator">|</span>
            <Link to="/register" className="register-link">
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
