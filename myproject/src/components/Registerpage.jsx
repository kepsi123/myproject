import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Registerpage.css";

function Registerpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Get existing admins from localStorage
    const existingAdmins = JSON.parse(localStorage.getItem("admins")) || [];

    // Check if username already exists
    const exists = existingAdmins.some((admin) => admin.username === username);
    if (exists) {
      alert("Username already taken!");
      return;
    }

    // Add new admin
    const newAdmin = { username, password };
    localStorage.setItem(
      "admins",
      JSON.stringify([...existingAdmins, newAdmin])
    );

    alert("Registration successful! You can now login.");
    navigate("/adminlogin");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register Admin</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>

          <p>
            Already have an account? <Link to="/adminlogin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registerpage;
