import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Inventory from "./pages/Inventory/Inventory";
import Reports from "./pages/Reports/Reports";
import Staff from "./pages/Staff/Staff";
import Invoice from "./pages/Invoice/Invoice";
import AboutUs from "./pages/AboutUs/AboutUs";
import Logout from "./pages/logout/Logout";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
