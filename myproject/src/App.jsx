import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import Homepage from "./components/Homepage";
import AddBlog from "./components/AddBlog";

function App() {
  const [blogs, setBlogs] = useState([]);

  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]); // newest blog first
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/add" element={<AddBlog onAddBlog={handleAddBlog} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
