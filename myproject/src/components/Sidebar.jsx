// src/components/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ activePage, setActivePage }) {
  const navigate = useNavigate();

  const handleClick = (page) => {
    setActivePage(page);

    // Redirect based on page name
    switch (page) {
      case "users":
        navigate("/login");
        break;
      case "addblog":
        navigate("/Add");
        break;
      case "viewblog":
        navigate("/viewblog");
        break;
      default:
        break;
    }
  };

  return (
    <div className="dashboard-sidebar">
      <ul>
        {/* <li
          className={activePage === "users" ? "active" : ""}
          onClick={() => handleClick("users")}
        >
          Users
        </li> */}
        <li
          className={activePage === "addblog" ? "active" : ""}
          onClick={() => handleClick("addblog")}
        >
          Add Blog
        </li>
        <li
          className={activePage === "viewblog" ? "active" : ""}
          onClick={() => handleClick("viewblog")}
        >
          View Blog
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
