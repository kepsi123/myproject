import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import AddBlog from "./components/AddBlog";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import ViewBlog from "./components/ViewBlog";

function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });

  // Persist blogs in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleEditBlog = (id, updatedBlog) => {
    setBlogs(blogs.map(blog => (blog.id === id ? { ...blog, ...updatedBlog } : blog)));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddBlog onAddBlog={handleAddBlog} />} />
        <Route
          path="/viewblog"
          element={
            <ViewBlog
              blogs={blogs}
              onDelete={handleDeleteBlog}
              onEdit={handleEditBlog}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
