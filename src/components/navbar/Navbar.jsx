import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Signup</Link>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/inventory" className="nav-link">Inventory</Link>
        <Link to="/reports" className="nav-link">Reports</Link>
        <Link to="/staff" className="nav-link">Staff</Link>
        <Link to="/invoice" className="nav-link">Invoice</Link>
      </div>

      <div className="nav-right">
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/logout" className="nav-link">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
