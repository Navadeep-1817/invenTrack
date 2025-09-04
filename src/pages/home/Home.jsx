import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <h1 id = "a1">Welcome to invenTrack</h1>
      <p className="subtitle">Manage your inventory efficiently</p>

      <div className="grid">
          <div className="card">
          <h3>Inventory</h3>
          <p>Add, Update, and Delete products</p>
          <a href="/inventory">Go to Inventory</a>
        </div>


        <div className="card">
          <h3>Billing & Taxation</h3>
          <p>Generate bills with taxation and download invoices as PDF</p>
          <a href="/billing">Go to Billing</a>
        </div>


        <div className="card">
          <h3>Customer Management</h3>
          <p>Store and manage customer details</p>
          <a href="/customers">Manage Customers</a>
        </div>


        <div className="card">
          <h3>Stock Management</h3>
          <p>Low stock alerts and stock-level monitoring</p>
          <a href="/stock">Check Stock</a>
        </div>


        <div className="card">
          <h3>Reports & Analytics</h3>
          <p>Product-based reports and monthly profit & loss insights</p>
          <a href="/reports">View Reports</a>
        </div>


        <div className="card">
          <h3>Search & Filter</h3>
          <p>Advanced search and category-based filtering</p>
          <a href="/search">Search Products</a>
        </div>


        <div className="card">
          <h3>Supplier Management</h3>
          <p>Track supplier history and details</p>
          <a href="/suppliers">View Suppliers</a>
        </div>


        <div className="card">
          <h3>Staff Management</h3>
          <p>Attendance, salary management, and role-based access</p>
          <a href="/staff">Manage Staff</a>
        </div>


        <div className="card">
          <h3>Invoice Management</h3>
          <p>Auto-generate and manage invoices</p>
          <a href="/invoices">View Invoices</a>
        </div>

        <div className="card">
          <h3>Know Website</h3>
          <p>About our website</p>
          <a href="/about">Get to Know</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
