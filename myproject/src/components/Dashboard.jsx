import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [activePage, setActivePage] = useState("users");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
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
              onClick={() => setActivePage("users")}
            >
              Users
            </li>

            {/* ✅ Fixed link to match App.jsx route */}
            <li>
              <Link
                to="/add"
                className="sidebar-link"
                onClick={() => setActivePage("addblog")}
              >
                Add Blog
              </Link>
            </li>

            <li
              className={activePage === "viewblog" ? "active" : ""}
              onClick={() => setActivePage("viewblog")}
            >
              View Blogs
            </li>
          </ul>
        </aside>

      </div>
    </div>
  );
}

export default Dashboard;
