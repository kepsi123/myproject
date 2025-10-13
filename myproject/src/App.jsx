import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import AddBlog from "./components/AddBlog";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import ViewBlog from "./components/ViewBlog";
import Forgotpage from "./components/Forgotpage";  // ✅ new import
import Registerpage from "./components/Registerpage"; // ✅ new import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/viewblog" element={<ViewBlog />} />
        <Route path="/forgot" element={<Forgotpage />} />       {/* new route */}
        <Route path="/register" element={<Registerpage />} />   {/* new route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
