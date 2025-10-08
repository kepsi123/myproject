// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import AddBlog from "./components/AddBlog";
import AdminLogin from "./components/AdminLogin";

function App() {
  const [blogs, setBlogs] = useState([]);

  // Function to add a new blog
  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]); // newest blog first
  };

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/adminlogin" element={<AdminLogin />} />

        
        <Route path="/landing" element={<Landingpage />} />

    
        <Route path="/login" element={<Loginpage />} />

  
        <Route path="/add" element={<AddBlog onAddBlog={handleAddBlog} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
