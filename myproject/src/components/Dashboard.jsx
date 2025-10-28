import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import Navbar from "./Navbar";

function Dashboard() {
  const [activePage, setActivePage] = useState("users");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
    <div className="dashboard-container">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid d-flex justify-content-between px-4">
          <a className="navbar-brand fw-bold" href="#">
            Travel Blog
          </a>
          <div className="d-flex align-items-center gap-2">
            <Link to="/Landing">
              <button className="btn btn-login">Home</button>
            </Link>
            <Link to="/about">
              <button className="btn btn-login">About</button>
            </Link>
            <Link to="/profile">
              <button className="btn btn-login">Profile</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-login">Logout</button>
            </Link>
          </div>
        </div>
      </nav> */}

      {/* Main Layout */}
      <div className="dashboard-main">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="dashboard-main-content">
          {/* Add your content here */}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
