// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import Homepage from "./components/Homepage";
import AddBlog from "./components/AddBlog";
import Navbar from "./components/Navbar";

// Layout always shows Navbar
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
      <Layout>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/landing" element={<Landingpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/home" element={<Homepage blogs={blogs} />} />
          <Route path="/add" element={<AddBlog onAddBlog={handleAddBlog} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
