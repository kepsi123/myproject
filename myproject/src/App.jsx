import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/Landingpage";
import Loginpage from "./components/Loginpage";
import Addblog from "./components/Addblog";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import ViewBlog from "./components/ViewBlog";
import Forgotpage from "./components/Forgotpage";  // ✅ new import
import Registerpage from "./components/Registerpage"; // ✅ new import
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Landing" element={<Landingpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Add" element={<Addblog />} />
        <Route path="/viewblog" element={<ViewBlog />} />
        <Route path="/forgot" element={<Forgotpage />} />       {/* new route */}
        <Route path="/register" element={<Registerpage />} /> 
        <Route path="/home" element={<Home />} />   {/* new route */}
        <Route path="/about" element={<About/>} />   {/* new route */}
        
        <Route path="/profile" element={<Profile />} />   {/* new route */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
