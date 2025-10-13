import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import AddBlog from "./components/AddBlog";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import ViewBlog from "./components/ViewBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/viewblog" element={<ViewBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
