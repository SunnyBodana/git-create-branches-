import React from "react";
import "./style.css"

const Login = () => {
  return (
    <div className="page-container">
      <div className="card">
        <h2 className="title">Login</h2>

        <form className="form">
          <input type="text" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
