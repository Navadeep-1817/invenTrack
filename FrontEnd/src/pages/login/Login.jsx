import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p className="text">
        Dont have account? <a href="/signup">Sign up</a> 
      </p>
    </div>
  );
}

export default Login;
