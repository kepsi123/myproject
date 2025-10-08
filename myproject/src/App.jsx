// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import AddBlog from "./components/AddBlog";
import Navbar from "./components/Navbar";
import AdminLogin from "./components/AdminLogin";

// Layout wrapper for pages WITH navbar
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="page-content">{children}</div>
    </>
  );
}

function App() {
  const [blogs, setBlogs] = useState([]);

  // Function to add a new blog
  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]); // newest blog first
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* AdminLogin page WITHOUT Navbar */}
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* Pages WITH Navbar */}
        <Route
          path="/landing"
          element={
            <Layout>
              <Landingpage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Loginpage />
            </Layout>
          }
        />
        <Route
          path="/add"
          element={
            <Layout>
              <AddBlog onAddBlog={handleAddBlog} />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
