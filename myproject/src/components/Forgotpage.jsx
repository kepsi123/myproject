import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Forgotpage.css";

function Forgotpage() {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    const admins = JSON.parse(localStorage.getItem("admins")) || [];
    const index = admins.findIndex((admin) => admin.username === username);

    if (index === -1) {
      alert("Username not found!");
      return;
    }

    admins[index].password = newPassword;
    localStorage.setItem("admins", JSON.stringify(admins));

    alert("Password updated successfully! You can now login.");
    navigate("/adminlogin");
  };

  return (
    <div className="forgot-page">
      <div className="forgot-container">
        <h2>Reset Password</h2>
        <form onSubmit={handleReset}>
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
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="reset-btn">
            Reset Password
          </button>

          <p>
            Back to <Link to="/adminlogin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Forgotpage;
