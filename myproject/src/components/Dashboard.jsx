import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [activePage, setActivePage] = useState("users");
  const navigate = useNavigate();

  const handleUsersClick = () => {
    setActivePage("users");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      {/* ---------- Navbar (same as login page / landing page) ---------- */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid d-flex justify-content-between px-4">
          <a className="navbar-brand fw-bold" href="#">
            Travel Blog
          </a>
          <div className="d-flex align-items-center gap-2">
            <Link to="/home"><button className="btn btn-login">Home</button></Link>
            <Link to="/about"><button className="btn btn-login">About</button></Link>
            <Link to="/profile"><button className="btn btn-login">Profile</button></Link>
            <Link to="/logout"><button className="btn btn-login">Logout</button></Link>
            <Link to="/login"><button className="btn btn-login">Login</button></Link>
          </div>
        </div>
      </nav>

      {/* ---------- Dashboard Section ---------- */}
      <div className="dashboard-main">
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

              <li>
                <Link
                  to="/add"
                  className="sidebar-link"
                  onClick={() => setActivePage("addblog")}
                >
                  Add Blog
                </Link>
              </li>

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

          {/* Main content area */}
          <div className="dashboard-main-content">
            {/* Main dashboard content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
