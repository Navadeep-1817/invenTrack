import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form className="form">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p className="text">
        Already have an account? <a href="/ ">Login</a>
      </p>
    </div>
  );
}

export default Signup;
