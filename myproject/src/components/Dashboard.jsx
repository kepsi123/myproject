import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [activePage, setActivePage] = useState("users");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  // ✅ When "Users" is clicked, go to Login page
  const handleUsersClick = () => {
    setActivePage("users");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      {/* 🔹 Navbar */}
      <nav className="dashboard-navbar">
        <div className="navbar-title">Admin Dashboard</div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* 🔹 Sidebar + Main Content */}
      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <ul>
            <li
              className={activePage === "users" ? "active" : ""}
              onClick={handleUsersClick}
            >
              Users
            </li>

            {/* ✅ Add Blog link */}
            <li>
              <Link
                to="/add"
                className="sidebar-link"
                onClick={() => setActivePage("addblog")}
              >
                Add Blog
              </Link>
            </li>

            {/* ✅ View Blog link (added navigation) */}
            <li>
              <Link
                to="/viewblog"
                className="sidebar-link"
                onClick={() => setActivePage("viewblog")}
              >
                View Blogs
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;
